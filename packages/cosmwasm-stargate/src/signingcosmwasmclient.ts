/* eslint-disable @typescript-eslint/naming-convention */
import {
  ChangeAdminResult,
  CosmWasmFeeTable,
  ExecuteResult,
  InstantiateOptions,
  InstantiateResult,
  isValidBuilder,
  MigrateResult,
  MsgClearAdmin,
  MsgExecuteContract,
  MsgInstantiateContract,
  MsgMigrateContract,
  MsgStoreCode,
  MsgUpdateAdmin,
  UploadMeta,
  UploadResult,
} from "@cosmjs/cosmwasm";
import { sha256 } from "@cosmjs/crypto";
import { fromBase64, toBase64, toHex } from "@cosmjs/encoding";
import {
  AccountData,
  buildFeeTable,
  Coin,
  CosmosFeeTable,
  encodeSecp256k1Pubkey,
  GasLimits,
  GasPrice,
  logs,
  makeSignDoc as makeSignDocAmino,
  MsgSend,
  OfflineSigner,
  StdFee,
} from "@cosmjs/launchpad";
import { Int53, Uint53 } from "@cosmjs/math";
import {
  EncodeObject,
  encodePubkey,
  isOfflineDirectSigner,
  makeAuthInfoBytes,
  makeSignDoc,
  Registry,
} from "@cosmjs/proto-signing";
import {
  BroadcastTxFailure,
  BroadcastTxResponse,
  codec,
  isBroadcastTxFailure,
  getMsgType,
  getMsgTypeUrl,
} from "@cosmjs/stargate";
import { adaptor34, Client as TendermintClient } from "@cosmjs/tendermint-rpc";
import pako from "pako";

import { CosmWasmClient } from "./cosmwasmclient";

const { cosmos } = codec;
const { TxRaw } = cosmos.tx.v1beta1;

function prepareBuilder(builder: string | undefined): string {
  if (builder === undefined) {
    return ""; // normalization needed by backend
  } else {
    if (!isValidBuilder(builder)) throw new Error("The builder (Docker Hub image with tag) is not valid");
    return builder;
  }
}

const defaultGasPrice = GasPrice.fromString("0.025ucosm");
const defaultGasLimits: GasLimits<CosmWasmFeeTable> = {
  upload: 1_500_000,
  init: 500_000,
  migrate: 200_000,
  exec: 200_000,
  send: 80_000,
  changeAdmin: 80_000,
};

function createBroadcastTxErrorMessage(result: BroadcastTxFailure): string {
  return `Error when broadcasting tx ${result.transactionHash} at height ${result.height}. Code: ${result.code}; Raw log: ${result.rawLog}`;
}

export interface SigningCosmWasmClientOptions {
  readonly registry?: Registry;
  readonly gasPrice?: GasPrice;
  readonly gasLimits?: GasLimits<CosmosFeeTable>;
}

/** Use for testing only */
export interface PrivateSigningCosmWasmClient {
  readonly fees: CosmWasmFeeTable;
}

export class SigningCosmWasmClient extends CosmWasmClient {
  private readonly fees: CosmosFeeTable;
  private readonly registry: Registry;
  private readonly signer: OfflineSigner;

  public static async connectWithWallet(
    endpoint: string,
    signer: OfflineSigner,
    options: SigningCosmWasmClientOptions = {},
  ): Promise<SigningCosmWasmClient> {
    const tmClient = await TendermintClient.connect(endpoint, adaptor34);
    return new SigningCosmWasmClient(tmClient, signer, options);
  }

  private constructor(
    tmClient: TendermintClient,
    signer: OfflineSigner,
    options: SigningCosmWasmClientOptions,
  ) {
    super(tmClient);
    const { registry = new Registry(), gasPrice = defaultGasPrice, gasLimits = defaultGasLimits } = options;
    this.fees = buildFeeTable<CosmosFeeTable>(gasPrice, defaultGasLimits, gasLimits);
    this.registry = registry;
    this.signer = signer;
  }

  // /** Uploads code and returns a receipt, including the code ID */
  // public async upload(
  //   senderAddress: string,
  //   wasmCode: Uint8Array,
  //   meta: UploadMeta = {},
  //   memo = "",
  // ): Promise<UploadResult> {
  //   const source = meta.source || "";
  //   const builder = prepareBuilder(meta.builder);

  //   const compressed = pako.gzip(wasmCode, { level: 9 });
  //   const storeCodeMsg: MsgStoreCode = {
  //     type: "wasm/MsgStoreCode",
  //     value: {
  //       sender: senderAddress,
  //       wasm_byte_code: toBase64(compressed),
  //       source: source,
  //       builder: builder,
  //     },
  //   };
  //   const result = await this.signAndBroadcast(senderAddress, [storeCodeMsg], this.fees.upload, memo);
  //   if (isBroadcastTxFailure(result)) {
  //     throw new Error(createBroadcastTxErrorMessage(result));
  //   }
  //   const codeIdAttr = logs.findAttribute(result.logs, "message", "code_id");
  //   return {
  //     originalSize: wasmCode.length,
  //     originalChecksum: toHex(sha256(wasmCode)),
  //     compressedSize: compressed.length,
  //     compressedChecksum: toHex(sha256(compressed)),
  //     codeId: Number.parseInt(codeIdAttr.value, 10),
  //     logs: result.logs,
  //     transactionHash: result.transactionHash,
  //   };
  // }

  // public async instantiate(
  //   senderAddress: string,
  //   codeId: number,
  //   initMsg: Record<string, unknown>,
  //   label: string,
  //   options: InstantiateOptions = {},
  // ): Promise<InstantiateResult> {
  //   const instantiateMsg: MsgInstantiateContract = {
  //     type: "wasm/MsgInstantiateContract",
  //     value: {
  //       sender: senderAddress,
  //       code_id: new Uint53(codeId).toString(),
  //       label: label,
  //       init_msg: initMsg,
  //       init_funds: options.transferAmount || [],
  //       admin: options.admin,
  //     },
  //   };
  //   const result = await this.signAndBroadcast(senderAddress, [instantiateMsg], this.fees.init, options.memo);
  //   if (isBroadcastTxFailure(result)) {
  //     throw new Error(createBroadcastTxErrorMessage(result));
  //   }
  //   const contractAddressAttr = logs.findAttribute(result.logs, "message", "contract_address");
  //   return {
  //     contractAddress: contractAddressAttr.value,
  //     logs: result.logs,
  //     transactionHash: result.transactionHash,
  //   };
  // }

  // public async updateAdmin(
  //   senderAddress: string,
  //   contractAddress: string,
  //   newAdmin: string,
  //   memo = "",
  // ): Promise<ChangeAdminResult> {
  //   const updateAdminMsg: MsgUpdateAdmin = {
  //     type: "wasm/MsgUpdateAdmin",
  //     value: {
  //       sender: senderAddress,
  //       contract: contractAddress,
  //       new_admin: newAdmin,
  //     },
  //   };
  //   const result = await this.signAndBroadcast(senderAddress, [updateAdminMsg], this.fees.changeAdmin, memo);
  //   if (isBroadcastTxFailure(result)) {
  //     throw new Error(createBroadcastTxErrorMessage(result));
  //   }
  //   return {
  //     logs: result.logs,
  //     transactionHash: result.transactionHash,
  //   };
  // }

  // public async clearAdmin(
  //   senderAddress: string,
  //   contractAddress: string,
  //   memo = "",
  // ): Promise<ChangeAdminResult> {
  //   const clearAdminMsg: MsgClearAdmin = {
  //     type: "wasm/MsgClearAdmin",
  //     value: {
  //       sender: senderAddress,
  //       contract: contractAddress,
  //     },
  //   };
  //   const result = await this.signAndBroadcast(senderAddress, [clearAdminMsg], this.fees.changeAdmin, memo);
  //   if (isBroadcastTxFailure(result)) {
  //     throw new Error(createBroadcastTxErrorMessage(result));
  //   }
  //   return {
  //     logs: result.logs,
  //     transactionHash: result.transactionHash,
  //   };
  // }

  // public async migrate(
  //   senderAddress: string,
  //   contractAddress: string,
  //   codeId: number,
  //   migrateMsg: Record<string, unknown>,
  //   memo = "",
  // ): Promise<MigrateResult> {
  //   const msg: MsgMigrateContract = {
  //     type: "wasm/MsgMigrateContract",
  //     value: {
  //       sender: senderAddress,
  //       contract: contractAddress,
  //       code_id: new Uint53(codeId).toString(),
  //       msg: migrateMsg,
  //     },
  //   };
  //   const result = await this.signAndBroadcast(senderAddress, [msg], this.fees.migrate, memo);
  //   if (isBroadcastTxFailure(result)) {
  //     throw new Error(createBroadcastTxErrorMessage(result));
  //   }
  //   return {
  //     logs: result.logs,
  //     transactionHash: result.transactionHash,
  //   };
  // }

  // public async execute(
  //   senderAddress: string,
  //   contractAddress: string,
  //   handleMsg: Record<string, unknown>,
  //   memo = "",
  //   transferAmount?: readonly Coin[],
  // ): Promise<ExecuteResult> {
  //   const executeMsg: MsgExecuteContract = {
  //     type: "wasm/MsgExecuteContract",
  //     value: {
  //       sender: senderAddress,
  //       contract: contractAddress,
  //       msg: handleMsg,
  //       sent_funds: transferAmount || [],
  //     },
  //   };
  //   const result = await this.signAndBroadcast(senderAddress, [executeMsg], this.fees.exec, memo);
  //   if (isBroadcastTxFailure(result)) {
  //     throw new Error(createBroadcastTxErrorMessage(result));
  //   }
  //   return {
  //     logs: result.logs,
  //     transactionHash: result.transactionHash,
  //   };
  // }

  // public async sendTokens(
  //   senderAddress: string,
  //   recipientAddress: string,
  //   transferAmount: readonly Coin[],
  //   memo = "",
  // ): Promise<BroadcastTxResponse> {
  //   const sendMsg: MsgSend = {
  //     type: "cosmos-sdk/MsgSend",
  //     value: {
  //       from_address: senderAddress,
  //       to_address: recipientAddress,
  //       amount: transferAmount,
  //     },
  //   };
  //   return this.signAndBroadcast(senderAddress, [sendMsg], this.fees.send, memo);
  // }

  public async signAndBroadcast(
    address: string,
    messages: readonly EncodeObject[],
    fee: StdFee,
    memo = "",
  ): Promise<BroadcastTxResponse> {
    const accountFromSigner = (await this.signer.getAccounts()).find(
      (account: AccountData) => account.address === address,
    );
    if (!accountFromSigner) {
      throw new Error("Failed to retrieve account from signer");
    }
    const pubkey = encodeSecp256k1Pubkey(accountFromSigner.pubkey);
    const accountFromChain = await this.getAccount(address);
    if (!accountFromChain) {
      throw new Error("Account not found");
    }
    const { accountNumber, sequence } = accountFromChain;
    if (!pubkey) {
      throw new Error("Pubkey not known");
    }
    const chainId = await this.getChainId();
    const pubkeyAny = encodePubkey(pubkey);
    const txBody = {
      messages: messages,
      memo: memo,
    };
    const txBodyBytes = this.registry.encode({
      typeUrl: "/cosmos.tx.v1beta1.TxBody",
      value: txBody,
    });
    const gasLimit = Int53.fromString(fee.gas).toNumber();

    if (isOfflineDirectSigner(this.signer)) {
      const authInfoBytes = makeAuthInfoBytes([pubkeyAny], fee.amount, gasLimit, sequence);
      const signDoc = makeSignDoc(txBodyBytes, authInfoBytes, chainId, accountNumber);
      const { signature, signed } = await this.signer.signDirect(address, signDoc);
      const txRaw = TxRaw.create({
        bodyBytes: signed.bodyBytes,
        authInfoBytes: signed.authInfoBytes,
        signatures: [fromBase64(signature.signature)],
      });
      const signedTx = Uint8Array.from(TxRaw.encode(txRaw).finish());
      return this.broadcastTx(signedTx);
    }

    // Amino signer
    const signMode = cosmos.tx.signing.v1beta1.SignMode.SIGN_MODE_LEGACY_AMINO_JSON;
    const msgs = messages.map((msg) => ({
      type: getMsgType(msg.typeUrl),
      value: msg.value,
    }));
    const signDoc = makeSignDocAmino(msgs, fee, chainId, memo, accountNumber, sequence);
    const { signature, signed } = await this.signer.signAmino(address, signDoc);
    const signedTxBody = {
      messages: signed.msgs.map((msg) => ({
        typeUrl: getMsgTypeUrl(msg.type),
        value: msg.value,
      })),
      memo: signed.memo,
    };
    const signedTxBodyBytes = this.registry.encode({
      typeUrl: "/cosmos.tx.v1beta1.TxBody",
      value: signedTxBody,
    });
    const signedGasLimit = Int53.fromString(signed.fee.gas).toNumber();
    const signedSequence = Int53.fromString(signed.sequence).toNumber();
    const signedAuthInfoBytes = makeAuthInfoBytes(
      [pubkeyAny],
      signed.fee.amount,
      signedGasLimit,
      signedSequence,
      signMode,
    );
    const txRaw = TxRaw.create({
      bodyBytes: signedTxBodyBytes,
      authInfoBytes: signedAuthInfoBytes,
      signatures: [fromBase64(signature.signature)],
    });
    const signedTx = Uint8Array.from(TxRaw.encode(txRaw).finish());
    return this.broadcastTx(signedTx);
  }
}
