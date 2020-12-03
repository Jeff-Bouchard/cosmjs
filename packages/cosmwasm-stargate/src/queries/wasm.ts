/* eslint-disable @typescript-eslint/naming-convention */
import {
  CodeDetails,
  CodeInfo,
  ContractCodeHistoryEntry,
  ContractInfo,
  JsonObject,
  Model,
  parseWasmData,
  WasmData,
} from "@cosmjs/cosmwasm";
import { QueryClient } from "@cosmjs/stargate";

import { wasmd } from "../codec";

const { Query } = wasmd.x.wasmd.v1beta1;

export interface WasmExtension {
  readonly wasm: {
    unverified: {
      readonly listCodeInfo: () => Promise<readonly CodeInfo[]>;
      // /**
      //  * Downloads the original wasm bytecode by code ID.
      //  *
      //  * Throws an error if no code with this id
      //  */
      // readonly getCode: (id: number) => Promise<CodeDetails>;
      // readonly listContractsByCodeId: (id: number) => Promise<readonly ContractInfo[]>;
      // /**
      //  * Returns null when contract was not found at this address.
      //  */
      // readonly getContractInfo: (address: string) => Promise<ContractInfo | null>;
      // /**
      //  * Returns null when contract history was not found for this address.
      //  */
      // readonly getContractCodeHistory: (address: string) => Promise<ContractCodeHistoryEntry[] | null>;
      // /**
      //  * Returns all contract state.
      //  * This is an empty array if no such contract, or contract has no data.
      //  */
      // readonly getAllContractState: (address: string) => Promise<readonly Model[]>;
      // /**
      //  * Returns the data at the key if present (unknown decoded json),
      //  * or null if no data at this (contract address, key) pair
      //  */
      // readonly queryContractRaw: (address: string, key: Uint8Array) => Promise<Uint8Array | null>;
      // /**
      //  * Makes a smart query on the contract and parses the response as JSON.
      //  * Throws error if no such contract exists, the query format is invalid or the response is invalid.
      //  */
      // readonly queryContractSmart: (address: string, query: Record<string, unknown>) => Promise<JsonObject>;
    };
  };
}

export function setupWasmExtension(base: QueryClient): WasmExtension {
  const queryService = Query.create((method: any, requestData, callback) => {
    const path = `/${method.name}`;
    base
      .queryUnverified(path, requestData)
      .then((response) => callback(null, response))
      .catch((error) => callback(error));
  });
  return {
    wasm: {
      unverified: {
        listCodeInfo: async () => {
          const result = await queryService.codes({});
          console.log(result);
          throw 123;
          // const path = `/wasm/code`;
          // const responseData = (await base.get(path)) as WasmResponse<LcdApiArray<CodeInfo>>;
          // return normalizeLcdApiArray(unwrapWasmResponse(responseData));
        },
        // getCode: async (id: number) => {
        //   const path = `/wasm/code/${id}`;
        //   const responseData = (await base.get(path)) as WasmResponse<CodeDetails>;
        //   return unwrapWasmResponse(responseData);
        // },
        // listContractsByCodeId: async (id: number) => {
        //   const path = `/wasm/code/${id}/contracts`;
        //   const responseData = (await base.get(path)) as WasmResponse<LcdApiArray<ContractInfo>>;
        //   return normalizeLcdApiArray(unwrapWasmResponse(responseData));
        // },
        // getContractInfo: async (address: string) => {
        //   const path = `/wasm/contract/${address}`;
        //   const response = (await base.get(path)) as WasmResponse<ContractInfo | null>;
        //   return unwrapWasmResponse(response);
        // },
        // getContractCodeHistory: async (address: string) => {
        //   const path = `/wasm/contract/${address}/history`;
        //   const response = (await base.get(path)) as WasmResponse<ContractCodeHistoryEntry[] | null>;
        //   return unwrapWasmResponse(response);
        // },
        // getAllContractState: async (address: string) => {
        //   const path = `/wasm/contract/${address}/state`;
        //   const responseData = (await base.get(path)) as WasmResponse<LcdApiArray<WasmData>>;
        //   return normalizeLcdApiArray(unwrapWasmResponse(responseData)).map(parseWasmData);
        // },
        // queryContractRaw: async (address: string, key: Uint8Array) => {
        //   const hexKey = toHex(key);
        //   const path = `/wasm/contract/${address}/raw/${hexKey}?encoding=hex`;
        //   const responseData = (await base.get(path)) as WasmResponse<WasmData[] | null | string>;
        //   const data = unwrapWasmResponse(responseData);
        //   if (Array.isArray(data)) {
        //     // The CosmWasm 0.10 interface
        //     return data.length === 0 ? null : fromBase64(data[0].val);
        //   } else {
        //     // The CosmWasm 0.11 interface
        //     return !data ? null : fromBase64(data); // Yes, we cannot differentiate empty fields from non-existent fields :(
        //   }
        // },
        // queryContractSmart: async (address: string, query: Record<string, unknown>) => {
        //   const encoded = toHex(toUtf8(JSON.stringify(query)));
        //   const path = `/wasm/contract/${address}/smart/${encoded}?encoding=hex`;
        //   const responseData = (await base.get(path)) as WasmResponse<SmartQueryResponse>;
        //   const result = unwrapWasmResponse(responseData);
        //   // By convention, smart queries must return a valid JSON document (see https://github.com/CosmWasm/cosmwasm/issues/144)
        //   return JSON.parse(fromUtf8(fromBase64(result.smart)));
        // },
      },
    },
  };
}
