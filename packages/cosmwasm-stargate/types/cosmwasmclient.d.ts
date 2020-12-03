import {
  Code,
  CodeDetails,
  Contract,
  ContractCodeHistoryEntry,
  JsonObject,
  WasmExtension,
} from "@cosmjs/cosmwasm";
import {
  Account,
  AuthExtension,
  Block,
  BroadcastMode,
  BroadcastTxResult,
  GetSequenceResult,
  IndexedTx,
  LcdClient,
  SearchTxFilter,
  SearchTxQuery,
  StdTx,
  WrappedStdTx,
} from "@cosmjs/launchpad";
/** Use for testing only */
export interface PrivateCosmWasmClient {
  readonly lcdClient: LcdClient & AuthExtension & WasmExtension;
}
export declare class CosmWasmClient {
  protected readonly lcdClient: LcdClient & AuthExtension & WasmExtension;
  /** Any address the chain considers valid (valid bech32 with proper prefix) */
  protected anyValidAddress: string | undefined;
  private readonly codesCache;
  private chainId;
  /**
   * Creates a new client to interact with a CosmWasm blockchain.
   *
   * This instance does a lot of caching. In order to benefit from that you should try to use one instance
   * for the lifetime of your application. When switching backends, a new instance must be created.
   *
   * @param apiUrl The URL of a Cosmos SDK light client daemon API (sometimes called REST server or REST API)
   * @param broadcastMode Defines at which point of the transaction processing the broadcastTx method returns
   */
  constructor(apiUrl: string, broadcastMode?: BroadcastMode);
  getChainId(): Promise<string>;
  getHeight(): Promise<number>;
  /**
   * Returns a 32 byte upper-case hex transaction hash (typically used as the transaction ID)
   */
  getIdentifier(tx: WrappedStdTx): Promise<string>;
  /**
   * Returns account number and sequence.
   *
   * Throws if the account does not exist on chain.
   *
   * @param address returns data for this address. When unset, the client's sender adddress is used.
   */
  getSequence(address: string): Promise<GetSequenceResult>;
  getAccount(address: string): Promise<Account | undefined>;
  /**
   * Gets block header and meta
   *
   * @param height The height of the block. If undefined, the latest height is used.
   */
  getBlock(height?: number): Promise<Block>;
  searchTx(query: SearchTxQuery, filter?: SearchTxFilter): Promise<readonly IndexedTx[]>;
  broadcastTx(tx: StdTx): Promise<BroadcastTxResult>;
  getCodes(): Promise<readonly Code[]>;
  getCodeDetails(codeId: number): Promise<CodeDetails>;
  getContracts(codeId: number): Promise<readonly Contract[]>;
  /**
   * Throws an error if no contract was found at the address
   */
  getContract(address: string): Promise<Contract>;
  /**
   * Throws an error if no contract was found at the address
   */
  getContractCodeHistory(address: string): Promise<readonly ContractCodeHistoryEntry[]>;
  /**
   * Returns the data at the key if present (raw contract dependent storage data)
   * or null if no data at this key.
   *
   * Promise is rejected when contract does not exist.
   */
  queryContractRaw(address: string, key: Uint8Array): Promise<Uint8Array | null>;
  /**
   * Makes a smart query on the contract, returns the parsed JSON document.
   *
   * Promise is rejected when contract does not exist.
   * Promise is rejected for invalid query format.
   * Promise is rejected for invalid response format.
   */
  queryContractSmart(address: string, queryMsg: Record<string, unknown>): Promise<JsonObject>;
  private txsQuery;
}
