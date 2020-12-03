import {
  ChangeAdminResult,
  CosmWasmFeeTable,
  ExecuteResult,
  InstantiateOptions,
  InstantiateResult,
  MigrateResult,
  UploadMeta,
  UploadResult,
} from "@cosmjs/cosmwasm";
import {
  Account,
  BroadcastMode,
  BroadcastTxResult,
  Coin,
  GasLimits,
  GasPrice,
  GetSequenceResult,
  Msg,
  OfflineSigner,
  StdFee,
} from "@cosmjs/launchpad";
import { CosmWasmClient } from "./cosmwasmclient";
/** Use for testing only */
export interface PrivateSigningCosmWasmClient {
  readonly fees: CosmWasmFeeTable;
}
export declare class SigningCosmWasmClient extends CosmWasmClient {
  readonly senderAddress: string;
  private readonly signer;
  private readonly fees;
  /**
   * Creates a new client with signing capability to interact with a CosmWasm blockchain. This is the bigger brother of CosmWasmClient.
   *
   * This instance does a lot of caching. In order to benefit from that you should try to use one instance
   * for the lifetime of your application. When switching backends, a new instance must be created.
   *
   * @param apiUrl The URL of a Cosmos SDK light client daemon API (sometimes called REST server or REST API)
   * @param senderAddress The address that will sign and send transactions using this instance
   * @param signer An implementation of OfflineSigner which can provide signatures for transactions, potentially requiring user input.
   * @param gasPrice The price paid per unit of gas
   * @param gasLimits Custom overrides for gas limits related to specific transaction types
   * @param broadcastMode Defines at which point of the transaction processing the broadcastTx method returns
   */
  constructor(
    apiUrl: string,
    senderAddress: string,
    signer: OfflineSigner,
    gasPrice?: GasPrice,
    gasLimits?: Partial<GasLimits<CosmWasmFeeTable>>,
    broadcastMode?: BroadcastMode,
  );
  getSequence(address?: string): Promise<GetSequenceResult>;
  getAccount(address?: string): Promise<Account | undefined>;
  /** Uploads code and returns a receipt, including the code ID */
  upload(wasmCode: Uint8Array, meta?: UploadMeta, memo?: string): Promise<UploadResult>;
  instantiate(
    codeId: number,
    initMsg: Record<string, unknown>,
    label: string,
    options?: InstantiateOptions,
  ): Promise<InstantiateResult>;
  updateAdmin(contractAddress: string, newAdmin: string, memo?: string): Promise<ChangeAdminResult>;
  clearAdmin(contractAddress: string, memo?: string): Promise<ChangeAdminResult>;
  migrate(
    contractAddress: string,
    codeId: number,
    migrateMsg: Record<string, unknown>,
    memo?: string,
  ): Promise<MigrateResult>;
  execute(
    contractAddress: string,
    handleMsg: Record<string, unknown>,
    memo?: string,
    transferAmount?: readonly Coin[],
  ): Promise<ExecuteResult>;
  sendTokens(
    recipientAddress: string,
    transferAmount: readonly Coin[],
    memo?: string,
  ): Promise<BroadcastTxResult>;
  /**
   * Gets account number and sequence from the API, creates a sign doc,
   * creates a single signature, assembles the signed transaction and broadcasts it.
   */
  signAndBroadcast(msgs: readonly Msg[], fee: StdFee, memo?: string): Promise<BroadcastTxResult>;
}
