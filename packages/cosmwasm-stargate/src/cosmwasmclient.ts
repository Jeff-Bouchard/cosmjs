import { Code, CodeDetails, Contract, ContractCodeHistoryEntry, JsonObject } from "@cosmjs/cosmwasm";
import { fromBase64, fromHex, toHex } from "@cosmjs/encoding";
import {
  Block,
  isSearchByHeightQuery,
  isSearchByIdQuery,
  isSearchBySentFromOrToQuery,
  isSearchByTagsQuery,
  SearchTxFilter,
  SearchTxQuery,
} from "@cosmjs/launchpad";
import { Uint53 } from "@cosmjs/math";
import {
  Account,
  accountFromProto,
  AuthExtension,
  IndexedTx,
  QueryClient,
  SequenceResponse,
  setupAuthExtension,
} from "@cosmjs/stargate";
import { BroadcastTxResponse } from "@cosmjs/stargate/types/stargateclient";
import {
  adaptor34,
  broadcastTxCommitSuccess,
  Client as TendermintClient,
  QueryString,
} from "@cosmjs/tendermint-rpc";

import { setupWasmExtension, WasmExtension } from "./queries";

/** Use for testing only */
export interface PrivateCosmWasmClient {
  readonly tmClient: TendermintClient;
  readonly queryClient: QueryClient & AuthExtension & WasmExtension;
}

export class CosmWasmClient {
  private readonly tmClient: TendermintClient;
  private readonly queryClient: QueryClient & AuthExtension & WasmExtension;
  /** Any address the chain considers valid (valid bech32 with proper prefix) */
  protected anyValidAddress: string | undefined;

  private readonly codesCache = new Map<number, CodeDetails>();
  private chainId: string | undefined;

  public static async connect(endpoint: string): Promise<CosmWasmClient> {
    const tmClient = await TendermintClient.connect(endpoint, adaptor34);
    return new CosmWasmClient(tmClient);
  }

  protected constructor(tmClient: TendermintClient) {
    this.tmClient = tmClient;
    this.queryClient = QueryClient.withExtensions(tmClient, setupAuthExtension, setupWasmExtension);
  }

  public async getChainId(): Promise<string> {
    if (!this.chainId) {
      const response = await this.tmClient.status();
      const chainId = response.nodeInfo.network;
      if (!chainId) throw new Error("Chain ID must not be empty");
      this.chainId = chainId;
    }

    return this.chainId;
  }

  public async getHeight(): Promise<number> {
    const status = await this.tmClient.status();
    return status.syncInfo.latestBlockHeight;
  }

  public async getAccount(searchAddress: string): Promise<Account | null> {
    const account = await this.queryClient.auth.account(searchAddress);
    return account ? accountFromProto(account) : null;
  }

  public async getSequence(address: string): Promise<SequenceResponse | null> {
    const account = await this.getAccount(address);
    if (account) {
      return {
        accountNumber: account.accountNumber,
        sequence: account.sequence,
      };
    } else {
      return null;
    }
  }

  public async getBlock(height?: number): Promise<Block> {
    const response = await this.tmClient.block(height);
    return {
      id: toHex(response.blockId.hash).toUpperCase(),
      header: {
        version: {
          block: new Uint53(response.block.header.version.block).toString(),
          app: new Uint53(response.block.header.version.app).toString(),
        },
        height: response.block.header.height,
        chainId: response.block.header.chainId,
        time: response.block.header.time.toISOString(),
      },
      txs: response.block.txs,
    };
  }

  public async searchTx(query: SearchTxQuery, filter: SearchTxFilter = {}): Promise<readonly IndexedTx[]> {
    const minHeight = filter.minHeight || 0;
    const maxHeight = filter.maxHeight || Number.MAX_SAFE_INTEGER;

    if (maxHeight < minHeight) return []; // optional optimization

    let txs: readonly IndexedTx[];

    if (isSearchByIdQuery(query)) {
      txs = await this.txsQuery(`tx.hash='${query.id}'`);
    } else if (isSearchByHeightQuery(query)) {
      txs =
        query.height >= minHeight && query.height <= maxHeight
          ? await this.txsQuery(`tx.height=${query.height}`)
          : [];
    } else if (isSearchBySentFromOrToQuery(query)) {
      throw new Error(
        "This type of search query is not yet implemented. See https://github.com/cosmos/cosmjs/issues/533.",
      );
    } else if (isSearchByTagsQuery(query)) {
      throw new Error(
        "This type of search query is not yet implemented. See https://github.com/cosmos/cosmjs/issues/532.",
      );
    } else {
      throw new Error("Unknown query type");
    }

    const filtered = txs.filter((tx) => tx.height >= minHeight && tx.height <= maxHeight);
    return filtered;
  }

  public disconnect(): void {
    this.tmClient.disconnect();
  }

  public async broadcastTx(tx: Uint8Array): Promise<BroadcastTxResponse> {
    const response = await this.tmClient.broadcastTxCommit({ tx });
    if (broadcastTxCommitSuccess(response)) {
      return {
        height: response.height,
        transactionHash: toHex(response.hash).toUpperCase(),
        rawLog: response.deliverTx?.log,
        data: response.deliverTx?.data,
      };
    }
    return response.checkTx.code !== 0
      ? {
          height: response.height,
          code: response.checkTx.code,
          transactionHash: toHex(response.hash).toUpperCase(),
          rawLog: response.checkTx.log,
          data: response.checkTx.data,
        }
      : {
          height: response.height,
          code: response.deliverTx?.code,
          transactionHash: toHex(response.hash).toUpperCase(),
          rawLog: response.deliverTx?.log,
          data: response.deliverTx?.data,
        };
  }

  // public async getCodes(): Promise<readonly Code[]> {
  //   const result = await this.queryClient.wasm.listCodeInfo();
  //   return result.map(
  //     (entry): Code => {
  //       this.anyValidAddress = entry.creator;
  //       return {
  //         id: entry.id,
  //         creator: entry.creator,
  //         checksum: toHex(fromHex(entry.data_hash)),
  //         source: entry.source || undefined,
  //         builder: entry.builder || undefined,
  //       };
  //     },
  //   );
  // }

  // public async getCodeDetails(codeId: number): Promise<CodeDetails> {
  //   const cached = this.codesCache.get(codeId);
  //   if (cached) return cached;

  //   const getCodeResult = await this.queryClient.wasm.getCode(codeId);
  //   const codeDetails: CodeDetails = {
  //     id: getCodeResult.id,
  //     creator: getCodeResult.creator,
  //     checksum: toHex(fromHex(getCodeResult.data_hash)),
  //     source: getCodeResult.source || undefined,
  //     builder: getCodeResult.builder || undefined,
  //     data: fromBase64(getCodeResult.data),
  //   };
  //   this.codesCache.set(codeId, codeDetails);
  //   return codeDetails;
  // }

  // public async getContracts(codeId: number): Promise<readonly Contract[]> {
  //   const result = await this.queryClient.wasm.listContractsByCodeId(codeId);
  //   return result.map(
  //     (entry): Contract => ({
  //       address: entry.address,
  //       codeId: entry.code_id,
  //       creator: entry.creator,
  //       admin: entry.admin,
  //       label: entry.label,
  //     }),
  //   );
  // }

  // /**
  //  * Throws an error if no contract was found at the address
  //  */
  // public async getContract(address: string): Promise<Contract> {
  //   const result = await this.queryClient.wasm.getContractInfo(address);
  //   if (!result) throw new Error(`No contract found at address "${address}"`);
  //   return {
  //     address: result.address,
  //     codeId: result.code_id,
  //     creator: result.creator,
  //     admin: result.admin,
  //     label: result.label,
  //   };
  // }

  // /**
  //  * Throws an error if no contract was found at the address
  //  */
  // public async getContractCodeHistory(address: string): Promise<readonly ContractCodeHistoryEntry[]> {
  //   const result = await this.queryClient.wasm.getContractCodeHistory(address);
  //   if (!result) throw new Error(`No contract history found for address "${address}"`);
  //   return result.map(
  //     (entry): ContractCodeHistoryEntry => ({
  //       operation: entry.operation,
  //       codeId: entry.code_id,
  //       msg: entry.msg,
  //     }),
  //   );
  // }

  // /**
  //  * Returns the data at the key if present (raw contract dependent storage data)
  //  * or null if no data at this key.
  //  *
  //  * Promise is rejected when contract does not exist.
  //  */
  // public async queryContractRaw(address: string, key: Uint8Array): Promise<Uint8Array | null> {
  //   // just test contract existence
  //   const _info = await this.getContract(address);

  //   return this.queryClient.wasm.queryContractRaw(address, key);
  // }

  // /**
  //  * Makes a smart query on the contract, returns the parsed JSON document.
  //  *
  //  * Promise is rejected when contract does not exist.
  //  * Promise is rejected for invalid query format.
  //  * Promise is rejected for invalid response format.
  //  */
  // public async queryContractSmart(address: string, queryMsg: Record<string, unknown>): Promise<JsonObject> {
  //   try {
  //     return await this.queryClient.wasm.queryContractSmart(address, queryMsg);
  //   } catch (error) {
  //     if (error instanceof Error) {
  //       if (error.message.startsWith("not found: contract")) {
  //         throw new Error(`No contract found at address "${address}"`);
  //       } else {
  //         throw error;
  //       }
  //     } else {
  //       throw error;
  //     }
  //   }
  // }

  private async txsQuery(query: string): Promise<readonly IndexedTx[]> {
    const params = {
      query: query as QueryString,
    };
    const results = await this.tmClient.txSearchAll(params);
    return results.txs.map((tx) => {
      return {
        height: tx.height,
        hash: toHex(tx.hash).toUpperCase(),
        code: tx.result.code,
        rawLog: tx.result.log || "",
        tx: tx.tx,
      };
    });
  }
}
