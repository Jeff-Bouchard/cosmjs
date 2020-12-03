import * as $protobuf from "protobufjs";
/** Namespace wasmd. */
export namespace wasmd {
  /** Namespace x. */
  namespace x {
    /** Namespace wasmd. */
    namespace wasmd {
      /** Namespace v1beta1. */
      namespace v1beta1 {
        /** Represents a Query */
        class Query extends $protobuf.rpc.Service {
          /**
           * Constructs a new Query service.
           * @param rpcImpl RPC implementation
           * @param [requestDelimited=false] Whether requests are length-delimited
           * @param [responseDelimited=false] Whether responses are length-delimited
           */
          constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

          /**
           * Creates new Query service using the specified rpc implementation.
           * @param rpcImpl RPC implementation
           * @param [requestDelimited=false] Whether requests are length-delimited
           * @param [responseDelimited=false] Whether responses are length-delimited
           * @returns RPC service. Useful where requests and/or responses are streamed.
           */
          public static create(
            rpcImpl: $protobuf.RPCImpl,
            requestDelimited?: boolean,
            responseDelimited?: boolean,
          ): Query;

          /**
           * Calls ContractInfo.
           * @param request QueryContractInfoRequest message or plain object
           * @param callback Node-style callback called with the error, if any, and QueryContractInfoResponse
           */
          public contractInfo(
            request: wasmd.x.wasmd.v1beta1.IQueryContractInfoRequest,
            callback: wasmd.x.wasmd.v1beta1.Query.ContractInfoCallback,
          ): void;

          /**
           * Calls ContractInfo.
           * @param request QueryContractInfoRequest message or plain object
           * @returns Promise
           */
          public contractInfo(
            request: wasmd.x.wasmd.v1beta1.IQueryContractInfoRequest,
          ): Promise<wasmd.x.wasmd.v1beta1.QueryContractInfoResponse>;

          /**
           * Calls ContractHistory.
           * @param request QueryContractHistoryRequest message or plain object
           * @param callback Node-style callback called with the error, if any, and QueryContractHistoryResponse
           */
          public contractHistory(
            request: wasmd.x.wasmd.v1beta1.IQueryContractHistoryRequest,
            callback: wasmd.x.wasmd.v1beta1.Query.ContractHistoryCallback,
          ): void;

          /**
           * Calls ContractHistory.
           * @param request QueryContractHistoryRequest message or plain object
           * @returns Promise
           */
          public contractHistory(
            request: wasmd.x.wasmd.v1beta1.IQueryContractHistoryRequest,
          ): Promise<wasmd.x.wasmd.v1beta1.QueryContractHistoryResponse>;

          /**
           * Calls ContractsByCode.
           * @param request QueryContractsByCodeRequest message or plain object
           * @param callback Node-style callback called with the error, if any, and QueryContractsByCodeResponse
           */
          public contractsByCode(
            request: wasmd.x.wasmd.v1beta1.IQueryContractsByCodeRequest,
            callback: wasmd.x.wasmd.v1beta1.Query.ContractsByCodeCallback,
          ): void;

          /**
           * Calls ContractsByCode.
           * @param request QueryContractsByCodeRequest message or plain object
           * @returns Promise
           */
          public contractsByCode(
            request: wasmd.x.wasmd.v1beta1.IQueryContractsByCodeRequest,
          ): Promise<wasmd.x.wasmd.v1beta1.QueryContractsByCodeResponse>;

          /**
           * Calls AllContractState.
           * @param request QueryAllContractStateRequest message or plain object
           * @param callback Node-style callback called with the error, if any, and QueryAllContractStateResponse
           */
          public allContractState(
            request: wasmd.x.wasmd.v1beta1.IQueryAllContractStateRequest,
            callback: wasmd.x.wasmd.v1beta1.Query.AllContractStateCallback,
          ): void;

          /**
           * Calls AllContractState.
           * @param request QueryAllContractStateRequest message or plain object
           * @returns Promise
           */
          public allContractState(
            request: wasmd.x.wasmd.v1beta1.IQueryAllContractStateRequest,
          ): Promise<wasmd.x.wasmd.v1beta1.QueryAllContractStateResponse>;

          /**
           * Calls RawContractState.
           * @param request QueryRawContractStateRequest message or plain object
           * @param callback Node-style callback called with the error, if any, and QueryRawContractStateResponse
           */
          public rawContractState(
            request: wasmd.x.wasmd.v1beta1.IQueryRawContractStateRequest,
            callback: wasmd.x.wasmd.v1beta1.Query.RawContractStateCallback,
          ): void;

          /**
           * Calls RawContractState.
           * @param request QueryRawContractStateRequest message or plain object
           * @returns Promise
           */
          public rawContractState(
            request: wasmd.x.wasmd.v1beta1.IQueryRawContractStateRequest,
          ): Promise<wasmd.x.wasmd.v1beta1.QueryRawContractStateResponse>;

          /**
           * Calls SmartContractState.
           * @param request QuerySmartContractStateRequest message or plain object
           * @param callback Node-style callback called with the error, if any, and QuerySmartContractStateResponse
           */
          public smartContractState(
            request: wasmd.x.wasmd.v1beta1.IQuerySmartContractStateRequest,
            callback: wasmd.x.wasmd.v1beta1.Query.SmartContractStateCallback,
          ): void;

          /**
           * Calls SmartContractState.
           * @param request QuerySmartContractStateRequest message or plain object
           * @returns Promise
           */
          public smartContractState(
            request: wasmd.x.wasmd.v1beta1.IQuerySmartContractStateRequest,
          ): Promise<wasmd.x.wasmd.v1beta1.QuerySmartContractStateResponse>;

          /**
           * Calls Code.
           * @param request QueryCodeRequest message or plain object
           * @param callback Node-style callback called with the error, if any, and QueryCodeResponse
           */
          public code(
            request: wasmd.x.wasmd.v1beta1.IQueryCodeRequest,
            callback: wasmd.x.wasmd.v1beta1.Query.CodeCallback,
          ): void;

          /**
           * Calls Code.
           * @param request QueryCodeRequest message or plain object
           * @returns Promise
           */
          public code(
            request: wasmd.x.wasmd.v1beta1.IQueryCodeRequest,
          ): Promise<wasmd.x.wasmd.v1beta1.QueryCodeResponse>;

          /**
           * Calls Codes.
           * @param request QueryCodesRequest message or plain object
           * @param callback Node-style callback called with the error, if any, and QueryCodesResponse
           */
          public codes(
            request: wasmd.x.wasmd.v1beta1.IQueryCodesRequest,
            callback: wasmd.x.wasmd.v1beta1.Query.CodesCallback,
          ): void;

          /**
           * Calls Codes.
           * @param request QueryCodesRequest message or plain object
           * @returns Promise
           */
          public codes(
            request: wasmd.x.wasmd.v1beta1.IQueryCodesRequest,
          ): Promise<wasmd.x.wasmd.v1beta1.QueryCodesResponse>;
        }

        namespace Query {
          /**
           * Callback as used by {@link wasmd.x.wasmd.v1beta1.Query#contractInfo}.
           * @param error Error, if any
           * @param [response] QueryContractInfoResponse
           */
          type ContractInfoCallback = (
            error: Error | null,
            response?: wasmd.x.wasmd.v1beta1.QueryContractInfoResponse,
          ) => void;

          /**
           * Callback as used by {@link wasmd.x.wasmd.v1beta1.Query#contractHistory}.
           * @param error Error, if any
           * @param [response] QueryContractHistoryResponse
           */
          type ContractHistoryCallback = (
            error: Error | null,
            response?: wasmd.x.wasmd.v1beta1.QueryContractHistoryResponse,
          ) => void;

          /**
           * Callback as used by {@link wasmd.x.wasmd.v1beta1.Query#contractsByCode}.
           * @param error Error, if any
           * @param [response] QueryContractsByCodeResponse
           */
          type ContractsByCodeCallback = (
            error: Error | null,
            response?: wasmd.x.wasmd.v1beta1.QueryContractsByCodeResponse,
          ) => void;

          /**
           * Callback as used by {@link wasmd.x.wasmd.v1beta1.Query#allContractState}.
           * @param error Error, if any
           * @param [response] QueryAllContractStateResponse
           */
          type AllContractStateCallback = (
            error: Error | null,
            response?: wasmd.x.wasmd.v1beta1.QueryAllContractStateResponse,
          ) => void;

          /**
           * Callback as used by {@link wasmd.x.wasmd.v1beta1.Query#rawContractState}.
           * @param error Error, if any
           * @param [response] QueryRawContractStateResponse
           */
          type RawContractStateCallback = (
            error: Error | null,
            response?: wasmd.x.wasmd.v1beta1.QueryRawContractStateResponse,
          ) => void;

          /**
           * Callback as used by {@link wasmd.x.wasmd.v1beta1.Query#smartContractState}.
           * @param error Error, if any
           * @param [response] QuerySmartContractStateResponse
           */
          type SmartContractStateCallback = (
            error: Error | null,
            response?: wasmd.x.wasmd.v1beta1.QuerySmartContractStateResponse,
          ) => void;

          /**
           * Callback as used by {@link wasmd.x.wasmd.v1beta1.Query#code}.
           * @param error Error, if any
           * @param [response] QueryCodeResponse
           */
          type CodeCallback = (
            error: Error | null,
            response?: wasmd.x.wasmd.v1beta1.QueryCodeResponse,
          ) => void;

          /**
           * Callback as used by {@link wasmd.x.wasmd.v1beta1.Query#codes}.
           * @param error Error, if any
           * @param [response] QueryCodesResponse
           */
          type CodesCallback = (
            error: Error | null,
            response?: wasmd.x.wasmd.v1beta1.QueryCodesResponse,
          ) => void;
        }

        /** Properties of a QueryContractInfoRequest. */
        interface IQueryContractInfoRequest {
          /** QueryContractInfoRequest address */
          address?: string | null;
        }

        /** Represents a QueryContractInfoRequest. */
        class QueryContractInfoRequest implements IQueryContractInfoRequest {
          /**
           * Constructs a new QueryContractInfoRequest.
           * @param [p] Properties to set
           */
          constructor(p?: wasmd.x.wasmd.v1beta1.IQueryContractInfoRequest);

          /** QueryContractInfoRequest address. */
          public address: string;

          /**
           * Creates a new QueryContractInfoRequest instance using the specified properties.
           * @param [properties] Properties to set
           * @returns QueryContractInfoRequest instance
           */
          public static create(
            properties?: wasmd.x.wasmd.v1beta1.IQueryContractInfoRequest,
          ): wasmd.x.wasmd.v1beta1.QueryContractInfoRequest;

          /**
           * Encodes the specified QueryContractInfoRequest message. Does not implicitly {@link wasmd.x.wasmd.v1beta1.QueryContractInfoRequest.verify|verify} messages.
           * @param m QueryContractInfoRequest message or plain object to encode
           * @param [w] Writer to encode to
           * @returns Writer
           */
          public static encode(
            m: wasmd.x.wasmd.v1beta1.IQueryContractInfoRequest,
            w?: $protobuf.Writer,
          ): $protobuf.Writer;

          /**
           * Decodes a QueryContractInfoRequest message from the specified reader or buffer.
           * @param r Reader or buffer to decode from
           * @param [l] Message length if known beforehand
           * @returns QueryContractInfoRequest
           * @throws {Error} If the payload is not a reader or valid buffer
           * @throws {$protobuf.util.ProtocolError} If required fields are missing
           */
          public static decode(
            r: $protobuf.Reader | Uint8Array,
            l?: number,
          ): wasmd.x.wasmd.v1beta1.QueryContractInfoRequest;
        }

        /** Properties of a QueryContractInfoResponse. */
        interface IQueryContractInfoResponse {
          /** QueryContractInfoResponse address */
          address?: string | null;

          /** QueryContractInfoResponse contractInfo */
          contractInfo?: wasmd.x.wasmd.v1beta1.IContractInfo | null;
        }

        /** Represents a QueryContractInfoResponse. */
        class QueryContractInfoResponse implements IQueryContractInfoResponse {
          /**
           * Constructs a new QueryContractInfoResponse.
           * @param [p] Properties to set
           */
          constructor(p?: wasmd.x.wasmd.v1beta1.IQueryContractInfoResponse);

          /** QueryContractInfoResponse address. */
          public address: string;

          /** QueryContractInfoResponse contractInfo. */
          public contractInfo?: wasmd.x.wasmd.v1beta1.IContractInfo | null;

          /**
           * Creates a new QueryContractInfoResponse instance using the specified properties.
           * @param [properties] Properties to set
           * @returns QueryContractInfoResponse instance
           */
          public static create(
            properties?: wasmd.x.wasmd.v1beta1.IQueryContractInfoResponse,
          ): wasmd.x.wasmd.v1beta1.QueryContractInfoResponse;

          /**
           * Encodes the specified QueryContractInfoResponse message. Does not implicitly {@link wasmd.x.wasmd.v1beta1.QueryContractInfoResponse.verify|verify} messages.
           * @param m QueryContractInfoResponse message or plain object to encode
           * @param [w] Writer to encode to
           * @returns Writer
           */
          public static encode(
            m: wasmd.x.wasmd.v1beta1.IQueryContractInfoResponse,
            w?: $protobuf.Writer,
          ): $protobuf.Writer;

          /**
           * Decodes a QueryContractInfoResponse message from the specified reader or buffer.
           * @param r Reader or buffer to decode from
           * @param [l] Message length if known beforehand
           * @returns QueryContractInfoResponse
           * @throws {Error} If the payload is not a reader or valid buffer
           * @throws {$protobuf.util.ProtocolError} If required fields are missing
           */
          public static decode(
            r: $protobuf.Reader | Uint8Array,
            l?: number,
          ): wasmd.x.wasmd.v1beta1.QueryContractInfoResponse;
        }

        /** Properties of a QueryContractHistoryRequest. */
        interface IQueryContractHistoryRequest {
          /** QueryContractHistoryRequest address */
          address?: string | null;

          /** QueryContractHistoryRequest pagination */
          pagination?: cosmos.base.query.v1beta1.IPageRequest | null;
        }

        /** Represents a QueryContractHistoryRequest. */
        class QueryContractHistoryRequest implements IQueryContractHistoryRequest {
          /**
           * Constructs a new QueryContractHistoryRequest.
           * @param [p] Properties to set
           */
          constructor(p?: wasmd.x.wasmd.v1beta1.IQueryContractHistoryRequest);

          /** QueryContractHistoryRequest address. */
          public address: string;

          /** QueryContractHistoryRequest pagination. */
          public pagination?: cosmos.base.query.v1beta1.IPageRequest | null;

          /**
           * Creates a new QueryContractHistoryRequest instance using the specified properties.
           * @param [properties] Properties to set
           * @returns QueryContractHistoryRequest instance
           */
          public static create(
            properties?: wasmd.x.wasmd.v1beta1.IQueryContractHistoryRequest,
          ): wasmd.x.wasmd.v1beta1.QueryContractHistoryRequest;

          /**
           * Encodes the specified QueryContractHistoryRequest message. Does not implicitly {@link wasmd.x.wasmd.v1beta1.QueryContractHistoryRequest.verify|verify} messages.
           * @param m QueryContractHistoryRequest message or plain object to encode
           * @param [w] Writer to encode to
           * @returns Writer
           */
          public static encode(
            m: wasmd.x.wasmd.v1beta1.IQueryContractHistoryRequest,
            w?: $protobuf.Writer,
          ): $protobuf.Writer;

          /**
           * Decodes a QueryContractHistoryRequest message from the specified reader or buffer.
           * @param r Reader or buffer to decode from
           * @param [l] Message length if known beforehand
           * @returns QueryContractHistoryRequest
           * @throws {Error} If the payload is not a reader or valid buffer
           * @throws {$protobuf.util.ProtocolError} If required fields are missing
           */
          public static decode(
            r: $protobuf.Reader | Uint8Array,
            l?: number,
          ): wasmd.x.wasmd.v1beta1.QueryContractHistoryRequest;
        }

        /** Properties of a QueryContractHistoryResponse. */
        interface IQueryContractHistoryResponse {
          /** QueryContractHistoryResponse entries */
          entries?: wasmd.x.wasmd.v1beta1.IContractCodeHistoryEntry[] | null;

          /** QueryContractHistoryResponse pagination */
          pagination?: cosmos.base.query.v1beta1.IPageResponse | null;
        }

        /** Represents a QueryContractHistoryResponse. */
        class QueryContractHistoryResponse implements IQueryContractHistoryResponse {
          /**
           * Constructs a new QueryContractHistoryResponse.
           * @param [p] Properties to set
           */
          constructor(p?: wasmd.x.wasmd.v1beta1.IQueryContractHistoryResponse);

          /** QueryContractHistoryResponse entries. */
          public entries: wasmd.x.wasmd.v1beta1.IContractCodeHistoryEntry[];

          /** QueryContractHistoryResponse pagination. */
          public pagination?: cosmos.base.query.v1beta1.IPageResponse | null;

          /**
           * Creates a new QueryContractHistoryResponse instance using the specified properties.
           * @param [properties] Properties to set
           * @returns QueryContractHistoryResponse instance
           */
          public static create(
            properties?: wasmd.x.wasmd.v1beta1.IQueryContractHistoryResponse,
          ): wasmd.x.wasmd.v1beta1.QueryContractHistoryResponse;

          /**
           * Encodes the specified QueryContractHistoryResponse message. Does not implicitly {@link wasmd.x.wasmd.v1beta1.QueryContractHistoryResponse.verify|verify} messages.
           * @param m QueryContractHistoryResponse message or plain object to encode
           * @param [w] Writer to encode to
           * @returns Writer
           */
          public static encode(
            m: wasmd.x.wasmd.v1beta1.IQueryContractHistoryResponse,
            w?: $protobuf.Writer,
          ): $protobuf.Writer;

          /**
           * Decodes a QueryContractHistoryResponse message from the specified reader or buffer.
           * @param r Reader or buffer to decode from
           * @param [l] Message length if known beforehand
           * @returns QueryContractHistoryResponse
           * @throws {Error} If the payload is not a reader or valid buffer
           * @throws {$protobuf.util.ProtocolError} If required fields are missing
           */
          public static decode(
            r: $protobuf.Reader | Uint8Array,
            l?: number,
          ): wasmd.x.wasmd.v1beta1.QueryContractHistoryResponse;
        }

        /** Properties of a QueryContractsByCodeRequest. */
        interface IQueryContractsByCodeRequest {
          /** QueryContractsByCodeRequest codeId */
          codeId?: Long | null;

          /** QueryContractsByCodeRequest pagination */
          pagination?: cosmos.base.query.v1beta1.IPageRequest | null;
        }

        /** Represents a QueryContractsByCodeRequest. */
        class QueryContractsByCodeRequest implements IQueryContractsByCodeRequest {
          /**
           * Constructs a new QueryContractsByCodeRequest.
           * @param [p] Properties to set
           */
          constructor(p?: wasmd.x.wasmd.v1beta1.IQueryContractsByCodeRequest);

          /** QueryContractsByCodeRequest codeId. */
          public codeId: Long;

          /** QueryContractsByCodeRequest pagination. */
          public pagination?: cosmos.base.query.v1beta1.IPageRequest | null;

          /**
           * Creates a new QueryContractsByCodeRequest instance using the specified properties.
           * @param [properties] Properties to set
           * @returns QueryContractsByCodeRequest instance
           */
          public static create(
            properties?: wasmd.x.wasmd.v1beta1.IQueryContractsByCodeRequest,
          ): wasmd.x.wasmd.v1beta1.QueryContractsByCodeRequest;

          /**
           * Encodes the specified QueryContractsByCodeRequest message. Does not implicitly {@link wasmd.x.wasmd.v1beta1.QueryContractsByCodeRequest.verify|verify} messages.
           * @param m QueryContractsByCodeRequest message or plain object to encode
           * @param [w] Writer to encode to
           * @returns Writer
           */
          public static encode(
            m: wasmd.x.wasmd.v1beta1.IQueryContractsByCodeRequest,
            w?: $protobuf.Writer,
          ): $protobuf.Writer;

          /**
           * Decodes a QueryContractsByCodeRequest message from the specified reader or buffer.
           * @param r Reader or buffer to decode from
           * @param [l] Message length if known beforehand
           * @returns QueryContractsByCodeRequest
           * @throws {Error} If the payload is not a reader or valid buffer
           * @throws {$protobuf.util.ProtocolError} If required fields are missing
           */
          public static decode(
            r: $protobuf.Reader | Uint8Array,
            l?: number,
          ): wasmd.x.wasmd.v1beta1.QueryContractsByCodeRequest;
        }

        /** Properties of a ContractInfoWithAddress. */
        interface IContractInfoWithAddress {
          /** ContractInfoWithAddress address */
          address?: string | null;

          /** ContractInfoWithAddress contractInfo */
          contractInfo?: wasmd.x.wasmd.v1beta1.IContractInfo | null;
        }

        /** Represents a ContractInfoWithAddress. */
        class ContractInfoWithAddress implements IContractInfoWithAddress {
          /**
           * Constructs a new ContractInfoWithAddress.
           * @param [p] Properties to set
           */
          constructor(p?: wasmd.x.wasmd.v1beta1.IContractInfoWithAddress);

          /** ContractInfoWithAddress address. */
          public address: string;

          /** ContractInfoWithAddress contractInfo. */
          public contractInfo?: wasmd.x.wasmd.v1beta1.IContractInfo | null;

          /**
           * Creates a new ContractInfoWithAddress instance using the specified properties.
           * @param [properties] Properties to set
           * @returns ContractInfoWithAddress instance
           */
          public static create(
            properties?: wasmd.x.wasmd.v1beta1.IContractInfoWithAddress,
          ): wasmd.x.wasmd.v1beta1.ContractInfoWithAddress;

          /**
           * Encodes the specified ContractInfoWithAddress message. Does not implicitly {@link wasmd.x.wasmd.v1beta1.ContractInfoWithAddress.verify|verify} messages.
           * @param m ContractInfoWithAddress message or plain object to encode
           * @param [w] Writer to encode to
           * @returns Writer
           */
          public static encode(
            m: wasmd.x.wasmd.v1beta1.IContractInfoWithAddress,
            w?: $protobuf.Writer,
          ): $protobuf.Writer;

          /**
           * Decodes a ContractInfoWithAddress message from the specified reader or buffer.
           * @param r Reader or buffer to decode from
           * @param [l] Message length if known beforehand
           * @returns ContractInfoWithAddress
           * @throws {Error} If the payload is not a reader or valid buffer
           * @throws {$protobuf.util.ProtocolError} If required fields are missing
           */
          public static decode(
            r: $protobuf.Reader | Uint8Array,
            l?: number,
          ): wasmd.x.wasmd.v1beta1.ContractInfoWithAddress;
        }

        /** Properties of a QueryContractsByCodeResponse. */
        interface IQueryContractsByCodeResponse {
          /** QueryContractsByCodeResponse contractInfos */
          contractInfos?: wasmd.x.wasmd.v1beta1.IContractInfoWithAddress[] | null;

          /** QueryContractsByCodeResponse pagination */
          pagination?: cosmos.base.query.v1beta1.IPageResponse | null;
        }

        /** Represents a QueryContractsByCodeResponse. */
        class QueryContractsByCodeResponse implements IQueryContractsByCodeResponse {
          /**
           * Constructs a new QueryContractsByCodeResponse.
           * @param [p] Properties to set
           */
          constructor(p?: wasmd.x.wasmd.v1beta1.IQueryContractsByCodeResponse);

          /** QueryContractsByCodeResponse contractInfos. */
          public contractInfos: wasmd.x.wasmd.v1beta1.IContractInfoWithAddress[];

          /** QueryContractsByCodeResponse pagination. */
          public pagination?: cosmos.base.query.v1beta1.IPageResponse | null;

          /**
           * Creates a new QueryContractsByCodeResponse instance using the specified properties.
           * @param [properties] Properties to set
           * @returns QueryContractsByCodeResponse instance
           */
          public static create(
            properties?: wasmd.x.wasmd.v1beta1.IQueryContractsByCodeResponse,
          ): wasmd.x.wasmd.v1beta1.QueryContractsByCodeResponse;

          /**
           * Encodes the specified QueryContractsByCodeResponse message. Does not implicitly {@link wasmd.x.wasmd.v1beta1.QueryContractsByCodeResponse.verify|verify} messages.
           * @param m QueryContractsByCodeResponse message or plain object to encode
           * @param [w] Writer to encode to
           * @returns Writer
           */
          public static encode(
            m: wasmd.x.wasmd.v1beta1.IQueryContractsByCodeResponse,
            w?: $protobuf.Writer,
          ): $protobuf.Writer;

          /**
           * Decodes a QueryContractsByCodeResponse message from the specified reader or buffer.
           * @param r Reader or buffer to decode from
           * @param [l] Message length if known beforehand
           * @returns QueryContractsByCodeResponse
           * @throws {Error} If the payload is not a reader or valid buffer
           * @throws {$protobuf.util.ProtocolError} If required fields are missing
           */
          public static decode(
            r: $protobuf.Reader | Uint8Array,
            l?: number,
          ): wasmd.x.wasmd.v1beta1.QueryContractsByCodeResponse;
        }

        /** Properties of a QueryAllContractStateRequest. */
        interface IQueryAllContractStateRequest {
          /** QueryAllContractStateRequest address */
          address?: string | null;

          /** QueryAllContractStateRequest pagination */
          pagination?: cosmos.base.query.v1beta1.IPageRequest | null;
        }

        /** Represents a QueryAllContractStateRequest. */
        class QueryAllContractStateRequest implements IQueryAllContractStateRequest {
          /**
           * Constructs a new QueryAllContractStateRequest.
           * @param [p] Properties to set
           */
          constructor(p?: wasmd.x.wasmd.v1beta1.IQueryAllContractStateRequest);

          /** QueryAllContractStateRequest address. */
          public address: string;

          /** QueryAllContractStateRequest pagination. */
          public pagination?: cosmos.base.query.v1beta1.IPageRequest | null;

          /**
           * Creates a new QueryAllContractStateRequest instance using the specified properties.
           * @param [properties] Properties to set
           * @returns QueryAllContractStateRequest instance
           */
          public static create(
            properties?: wasmd.x.wasmd.v1beta1.IQueryAllContractStateRequest,
          ): wasmd.x.wasmd.v1beta1.QueryAllContractStateRequest;

          /**
           * Encodes the specified QueryAllContractStateRequest message. Does not implicitly {@link wasmd.x.wasmd.v1beta1.QueryAllContractStateRequest.verify|verify} messages.
           * @param m QueryAllContractStateRequest message or plain object to encode
           * @param [w] Writer to encode to
           * @returns Writer
           */
          public static encode(
            m: wasmd.x.wasmd.v1beta1.IQueryAllContractStateRequest,
            w?: $protobuf.Writer,
          ): $protobuf.Writer;

          /**
           * Decodes a QueryAllContractStateRequest message from the specified reader or buffer.
           * @param r Reader or buffer to decode from
           * @param [l] Message length if known beforehand
           * @returns QueryAllContractStateRequest
           * @throws {Error} If the payload is not a reader or valid buffer
           * @throws {$protobuf.util.ProtocolError} If required fields are missing
           */
          public static decode(
            r: $protobuf.Reader | Uint8Array,
            l?: number,
          ): wasmd.x.wasmd.v1beta1.QueryAllContractStateRequest;
        }

        /** Properties of a QueryAllContractStateResponse. */
        interface IQueryAllContractStateResponse {
          /** QueryAllContractStateResponse models */
          models?: wasmd.x.wasmd.v1beta1.IModel[] | null;

          /** QueryAllContractStateResponse pagination */
          pagination?: cosmos.base.query.v1beta1.IPageResponse | null;
        }

        /** Represents a QueryAllContractStateResponse. */
        class QueryAllContractStateResponse implements IQueryAllContractStateResponse {
          /**
           * Constructs a new QueryAllContractStateResponse.
           * @param [p] Properties to set
           */
          constructor(p?: wasmd.x.wasmd.v1beta1.IQueryAllContractStateResponse);

          /** QueryAllContractStateResponse models. */
          public models: wasmd.x.wasmd.v1beta1.IModel[];

          /** QueryAllContractStateResponse pagination. */
          public pagination?: cosmos.base.query.v1beta1.IPageResponse | null;

          /**
           * Creates a new QueryAllContractStateResponse instance using the specified properties.
           * @param [properties] Properties to set
           * @returns QueryAllContractStateResponse instance
           */
          public static create(
            properties?: wasmd.x.wasmd.v1beta1.IQueryAllContractStateResponse,
          ): wasmd.x.wasmd.v1beta1.QueryAllContractStateResponse;

          /**
           * Encodes the specified QueryAllContractStateResponse message. Does not implicitly {@link wasmd.x.wasmd.v1beta1.QueryAllContractStateResponse.verify|verify} messages.
           * @param m QueryAllContractStateResponse message or plain object to encode
           * @param [w] Writer to encode to
           * @returns Writer
           */
          public static encode(
            m: wasmd.x.wasmd.v1beta1.IQueryAllContractStateResponse,
            w?: $protobuf.Writer,
          ): $protobuf.Writer;

          /**
           * Decodes a QueryAllContractStateResponse message from the specified reader or buffer.
           * @param r Reader or buffer to decode from
           * @param [l] Message length if known beforehand
           * @returns QueryAllContractStateResponse
           * @throws {Error} If the payload is not a reader or valid buffer
           * @throws {$protobuf.util.ProtocolError} If required fields are missing
           */
          public static decode(
            r: $protobuf.Reader | Uint8Array,
            l?: number,
          ): wasmd.x.wasmd.v1beta1.QueryAllContractStateResponse;
        }

        /** Properties of a QueryRawContractStateRequest. */
        interface IQueryRawContractStateRequest {
          /** QueryRawContractStateRequest address */
          address?: string | null;

          /** QueryRawContractStateRequest queryData */
          queryData?: Uint8Array | null;
        }

        /** Represents a QueryRawContractStateRequest. */
        class QueryRawContractStateRequest implements IQueryRawContractStateRequest {
          /**
           * Constructs a new QueryRawContractStateRequest.
           * @param [p] Properties to set
           */
          constructor(p?: wasmd.x.wasmd.v1beta1.IQueryRawContractStateRequest);

          /** QueryRawContractStateRequest address. */
          public address: string;

          /** QueryRawContractStateRequest queryData. */
          public queryData: Uint8Array;

          /**
           * Creates a new QueryRawContractStateRequest instance using the specified properties.
           * @param [properties] Properties to set
           * @returns QueryRawContractStateRequest instance
           */
          public static create(
            properties?: wasmd.x.wasmd.v1beta1.IQueryRawContractStateRequest,
          ): wasmd.x.wasmd.v1beta1.QueryRawContractStateRequest;

          /**
           * Encodes the specified QueryRawContractStateRequest message. Does not implicitly {@link wasmd.x.wasmd.v1beta1.QueryRawContractStateRequest.verify|verify} messages.
           * @param m QueryRawContractStateRequest message or plain object to encode
           * @param [w] Writer to encode to
           * @returns Writer
           */
          public static encode(
            m: wasmd.x.wasmd.v1beta1.IQueryRawContractStateRequest,
            w?: $protobuf.Writer,
          ): $protobuf.Writer;

          /**
           * Decodes a QueryRawContractStateRequest message from the specified reader or buffer.
           * @param r Reader or buffer to decode from
           * @param [l] Message length if known beforehand
           * @returns QueryRawContractStateRequest
           * @throws {Error} If the payload is not a reader or valid buffer
           * @throws {$protobuf.util.ProtocolError} If required fields are missing
           */
          public static decode(
            r: $protobuf.Reader | Uint8Array,
            l?: number,
          ): wasmd.x.wasmd.v1beta1.QueryRawContractStateRequest;
        }

        /** Properties of a QueryRawContractStateResponse. */
        interface IQueryRawContractStateResponse {
          /** QueryRawContractStateResponse data */
          data?: Uint8Array | null;
        }

        /** Represents a QueryRawContractStateResponse. */
        class QueryRawContractStateResponse implements IQueryRawContractStateResponse {
          /**
           * Constructs a new QueryRawContractStateResponse.
           * @param [p] Properties to set
           */
          constructor(p?: wasmd.x.wasmd.v1beta1.IQueryRawContractStateResponse);

          /** QueryRawContractStateResponse data. */
          public data: Uint8Array;

          /**
           * Creates a new QueryRawContractStateResponse instance using the specified properties.
           * @param [properties] Properties to set
           * @returns QueryRawContractStateResponse instance
           */
          public static create(
            properties?: wasmd.x.wasmd.v1beta1.IQueryRawContractStateResponse,
          ): wasmd.x.wasmd.v1beta1.QueryRawContractStateResponse;

          /**
           * Encodes the specified QueryRawContractStateResponse message. Does not implicitly {@link wasmd.x.wasmd.v1beta1.QueryRawContractStateResponse.verify|verify} messages.
           * @param m QueryRawContractStateResponse message or plain object to encode
           * @param [w] Writer to encode to
           * @returns Writer
           */
          public static encode(
            m: wasmd.x.wasmd.v1beta1.IQueryRawContractStateResponse,
            w?: $protobuf.Writer,
          ): $protobuf.Writer;

          /**
           * Decodes a QueryRawContractStateResponse message from the specified reader or buffer.
           * @param r Reader or buffer to decode from
           * @param [l] Message length if known beforehand
           * @returns QueryRawContractStateResponse
           * @throws {Error} If the payload is not a reader or valid buffer
           * @throws {$protobuf.util.ProtocolError} If required fields are missing
           */
          public static decode(
            r: $protobuf.Reader | Uint8Array,
            l?: number,
          ): wasmd.x.wasmd.v1beta1.QueryRawContractStateResponse;
        }

        /** Properties of a QuerySmartContractStateRequest. */
        interface IQuerySmartContractStateRequest {
          /** QuerySmartContractStateRequest address */
          address?: string | null;

          /** QuerySmartContractStateRequest queryData */
          queryData?: Uint8Array | null;
        }

        /** Represents a QuerySmartContractStateRequest. */
        class QuerySmartContractStateRequest implements IQuerySmartContractStateRequest {
          /**
           * Constructs a new QuerySmartContractStateRequest.
           * @param [p] Properties to set
           */
          constructor(p?: wasmd.x.wasmd.v1beta1.IQuerySmartContractStateRequest);

          /** QuerySmartContractStateRequest address. */
          public address: string;

          /** QuerySmartContractStateRequest queryData. */
          public queryData: Uint8Array;

          /**
           * Creates a new QuerySmartContractStateRequest instance using the specified properties.
           * @param [properties] Properties to set
           * @returns QuerySmartContractStateRequest instance
           */
          public static create(
            properties?: wasmd.x.wasmd.v1beta1.IQuerySmartContractStateRequest,
          ): wasmd.x.wasmd.v1beta1.QuerySmartContractStateRequest;

          /**
           * Encodes the specified QuerySmartContractStateRequest message. Does not implicitly {@link wasmd.x.wasmd.v1beta1.QuerySmartContractStateRequest.verify|verify} messages.
           * @param m QuerySmartContractStateRequest message or plain object to encode
           * @param [w] Writer to encode to
           * @returns Writer
           */
          public static encode(
            m: wasmd.x.wasmd.v1beta1.IQuerySmartContractStateRequest,
            w?: $protobuf.Writer,
          ): $protobuf.Writer;

          /**
           * Decodes a QuerySmartContractStateRequest message from the specified reader or buffer.
           * @param r Reader or buffer to decode from
           * @param [l] Message length if known beforehand
           * @returns QuerySmartContractStateRequest
           * @throws {Error} If the payload is not a reader or valid buffer
           * @throws {$protobuf.util.ProtocolError} If required fields are missing
           */
          public static decode(
            r: $protobuf.Reader | Uint8Array,
            l?: number,
          ): wasmd.x.wasmd.v1beta1.QuerySmartContractStateRequest;
        }

        /** Properties of a QuerySmartContractStateResponse. */
        interface IQuerySmartContractStateResponse {
          /** QuerySmartContractStateResponse data */
          data?: Uint8Array | null;
        }

        /** Represents a QuerySmartContractStateResponse. */
        class QuerySmartContractStateResponse implements IQuerySmartContractStateResponse {
          /**
           * Constructs a new QuerySmartContractStateResponse.
           * @param [p] Properties to set
           */
          constructor(p?: wasmd.x.wasmd.v1beta1.IQuerySmartContractStateResponse);

          /** QuerySmartContractStateResponse data. */
          public data: Uint8Array;

          /**
           * Creates a new QuerySmartContractStateResponse instance using the specified properties.
           * @param [properties] Properties to set
           * @returns QuerySmartContractStateResponse instance
           */
          public static create(
            properties?: wasmd.x.wasmd.v1beta1.IQuerySmartContractStateResponse,
          ): wasmd.x.wasmd.v1beta1.QuerySmartContractStateResponse;

          /**
           * Encodes the specified QuerySmartContractStateResponse message. Does not implicitly {@link wasmd.x.wasmd.v1beta1.QuerySmartContractStateResponse.verify|verify} messages.
           * @param m QuerySmartContractStateResponse message or plain object to encode
           * @param [w] Writer to encode to
           * @returns Writer
           */
          public static encode(
            m: wasmd.x.wasmd.v1beta1.IQuerySmartContractStateResponse,
            w?: $protobuf.Writer,
          ): $protobuf.Writer;

          /**
           * Decodes a QuerySmartContractStateResponse message from the specified reader or buffer.
           * @param r Reader or buffer to decode from
           * @param [l] Message length if known beforehand
           * @returns QuerySmartContractStateResponse
           * @throws {Error} If the payload is not a reader or valid buffer
           * @throws {$protobuf.util.ProtocolError} If required fields are missing
           */
          public static decode(
            r: $protobuf.Reader | Uint8Array,
            l?: number,
          ): wasmd.x.wasmd.v1beta1.QuerySmartContractStateResponse;
        }

        /** Properties of a QueryCodeRequest. */
        interface IQueryCodeRequest {
          /** QueryCodeRequest codeId */
          codeId?: Long | null;
        }

        /** Represents a QueryCodeRequest. */
        class QueryCodeRequest implements IQueryCodeRequest {
          /**
           * Constructs a new QueryCodeRequest.
           * @param [p] Properties to set
           */
          constructor(p?: wasmd.x.wasmd.v1beta1.IQueryCodeRequest);

          /** QueryCodeRequest codeId. */
          public codeId: Long;

          /**
           * Creates a new QueryCodeRequest instance using the specified properties.
           * @param [properties] Properties to set
           * @returns QueryCodeRequest instance
           */
          public static create(
            properties?: wasmd.x.wasmd.v1beta1.IQueryCodeRequest,
          ): wasmd.x.wasmd.v1beta1.QueryCodeRequest;

          /**
           * Encodes the specified QueryCodeRequest message. Does not implicitly {@link wasmd.x.wasmd.v1beta1.QueryCodeRequest.verify|verify} messages.
           * @param m QueryCodeRequest message or plain object to encode
           * @param [w] Writer to encode to
           * @returns Writer
           */
          public static encode(
            m: wasmd.x.wasmd.v1beta1.IQueryCodeRequest,
            w?: $protobuf.Writer,
          ): $protobuf.Writer;

          /**
           * Decodes a QueryCodeRequest message from the specified reader or buffer.
           * @param r Reader or buffer to decode from
           * @param [l] Message length if known beforehand
           * @returns QueryCodeRequest
           * @throws {Error} If the payload is not a reader or valid buffer
           * @throws {$protobuf.util.ProtocolError} If required fields are missing
           */
          public static decode(
            r: $protobuf.Reader | Uint8Array,
            l?: number,
          ): wasmd.x.wasmd.v1beta1.QueryCodeRequest;
        }

        /** Properties of a CodeInfoResponse. */
        interface ICodeInfoResponse {
          /** CodeInfoResponse codeId */
          codeId?: Long | null;

          /** CodeInfoResponse creator */
          creator?: string | null;

          /** CodeInfoResponse dataHash */
          dataHash?: Uint8Array | null;

          /** CodeInfoResponse source */
          source?: string | null;

          /** CodeInfoResponse builder */
          builder?: string | null;
        }

        /** Represents a CodeInfoResponse. */
        class CodeInfoResponse implements ICodeInfoResponse {
          /**
           * Constructs a new CodeInfoResponse.
           * @param [p] Properties to set
           */
          constructor(p?: wasmd.x.wasmd.v1beta1.ICodeInfoResponse);

          /** CodeInfoResponse codeId. */
          public codeId: Long;

          /** CodeInfoResponse creator. */
          public creator: string;

          /** CodeInfoResponse dataHash. */
          public dataHash: Uint8Array;

          /** CodeInfoResponse source. */
          public source: string;

          /** CodeInfoResponse builder. */
          public builder: string;

          /**
           * Creates a new CodeInfoResponse instance using the specified properties.
           * @param [properties] Properties to set
           * @returns CodeInfoResponse instance
           */
          public static create(
            properties?: wasmd.x.wasmd.v1beta1.ICodeInfoResponse,
          ): wasmd.x.wasmd.v1beta1.CodeInfoResponse;

          /**
           * Encodes the specified CodeInfoResponse message. Does not implicitly {@link wasmd.x.wasmd.v1beta1.CodeInfoResponse.verify|verify} messages.
           * @param m CodeInfoResponse message or plain object to encode
           * @param [w] Writer to encode to
           * @returns Writer
           */
          public static encode(
            m: wasmd.x.wasmd.v1beta1.ICodeInfoResponse,
            w?: $protobuf.Writer,
          ): $protobuf.Writer;

          /**
           * Decodes a CodeInfoResponse message from the specified reader or buffer.
           * @param r Reader or buffer to decode from
           * @param [l] Message length if known beforehand
           * @returns CodeInfoResponse
           * @throws {Error} If the payload is not a reader or valid buffer
           * @throws {$protobuf.util.ProtocolError} If required fields are missing
           */
          public static decode(
            r: $protobuf.Reader | Uint8Array,
            l?: number,
          ): wasmd.x.wasmd.v1beta1.CodeInfoResponse;
        }

        /** Properties of a QueryCodeResponse. */
        interface IQueryCodeResponse {
          /** QueryCodeResponse codeInfo */
          codeInfo?: wasmd.x.wasmd.v1beta1.ICodeInfoResponse | null;

          /** QueryCodeResponse data */
          data?: Uint8Array | null;
        }

        /** Represents a QueryCodeResponse. */
        class QueryCodeResponse implements IQueryCodeResponse {
          /**
           * Constructs a new QueryCodeResponse.
           * @param [p] Properties to set
           */
          constructor(p?: wasmd.x.wasmd.v1beta1.IQueryCodeResponse);

          /** QueryCodeResponse codeInfo. */
          public codeInfo?: wasmd.x.wasmd.v1beta1.ICodeInfoResponse | null;

          /** QueryCodeResponse data. */
          public data: Uint8Array;

          /**
           * Creates a new QueryCodeResponse instance using the specified properties.
           * @param [properties] Properties to set
           * @returns QueryCodeResponse instance
           */
          public static create(
            properties?: wasmd.x.wasmd.v1beta1.IQueryCodeResponse,
          ): wasmd.x.wasmd.v1beta1.QueryCodeResponse;

          /**
           * Encodes the specified QueryCodeResponse message. Does not implicitly {@link wasmd.x.wasmd.v1beta1.QueryCodeResponse.verify|verify} messages.
           * @param m QueryCodeResponse message or plain object to encode
           * @param [w] Writer to encode to
           * @returns Writer
           */
          public static encode(
            m: wasmd.x.wasmd.v1beta1.IQueryCodeResponse,
            w?: $protobuf.Writer,
          ): $protobuf.Writer;

          /**
           * Decodes a QueryCodeResponse message from the specified reader or buffer.
           * @param r Reader or buffer to decode from
           * @param [l] Message length if known beforehand
           * @returns QueryCodeResponse
           * @throws {Error} If the payload is not a reader or valid buffer
           * @throws {$protobuf.util.ProtocolError} If required fields are missing
           */
          public static decode(
            r: $protobuf.Reader | Uint8Array,
            l?: number,
          ): wasmd.x.wasmd.v1beta1.QueryCodeResponse;
        }

        /** Properties of a QueryCodesRequest. */
        interface IQueryCodesRequest {
          /** QueryCodesRequest pagination */
          pagination?: cosmos.base.query.v1beta1.IPageRequest | null;
        }

        /** Represents a QueryCodesRequest. */
        class QueryCodesRequest implements IQueryCodesRequest {
          /**
           * Constructs a new QueryCodesRequest.
           * @param [p] Properties to set
           */
          constructor(p?: wasmd.x.wasmd.v1beta1.IQueryCodesRequest);

          /** QueryCodesRequest pagination. */
          public pagination?: cosmos.base.query.v1beta1.IPageRequest | null;

          /**
           * Creates a new QueryCodesRequest instance using the specified properties.
           * @param [properties] Properties to set
           * @returns QueryCodesRequest instance
           */
          public static create(
            properties?: wasmd.x.wasmd.v1beta1.IQueryCodesRequest,
          ): wasmd.x.wasmd.v1beta1.QueryCodesRequest;

          /**
           * Encodes the specified QueryCodesRequest message. Does not implicitly {@link wasmd.x.wasmd.v1beta1.QueryCodesRequest.verify|verify} messages.
           * @param m QueryCodesRequest message or plain object to encode
           * @param [w] Writer to encode to
           * @returns Writer
           */
          public static encode(
            m: wasmd.x.wasmd.v1beta1.IQueryCodesRequest,
            w?: $protobuf.Writer,
          ): $protobuf.Writer;

          /**
           * Decodes a QueryCodesRequest message from the specified reader or buffer.
           * @param r Reader or buffer to decode from
           * @param [l] Message length if known beforehand
           * @returns QueryCodesRequest
           * @throws {Error} If the payload is not a reader or valid buffer
           * @throws {$protobuf.util.ProtocolError} If required fields are missing
           */
          public static decode(
            r: $protobuf.Reader | Uint8Array,
            l?: number,
          ): wasmd.x.wasmd.v1beta1.QueryCodesRequest;
        }

        /** Properties of a QueryCodesResponse. */
        interface IQueryCodesResponse {
          /** QueryCodesResponse codeInfos */
          codeInfos?: wasmd.x.wasmd.v1beta1.ICodeInfoResponse[] | null;

          /** QueryCodesResponse pagination */
          pagination?: cosmos.base.query.v1beta1.IPageResponse | null;
        }

        /** Represents a QueryCodesResponse. */
        class QueryCodesResponse implements IQueryCodesResponse {
          /**
           * Constructs a new QueryCodesResponse.
           * @param [p] Properties to set
           */
          constructor(p?: wasmd.x.wasmd.v1beta1.IQueryCodesResponse);

          /** QueryCodesResponse codeInfos. */
          public codeInfos: wasmd.x.wasmd.v1beta1.ICodeInfoResponse[];

          /** QueryCodesResponse pagination. */
          public pagination?: cosmos.base.query.v1beta1.IPageResponse | null;

          /**
           * Creates a new QueryCodesResponse instance using the specified properties.
           * @param [properties] Properties to set
           * @returns QueryCodesResponse instance
           */
          public static create(
            properties?: wasmd.x.wasmd.v1beta1.IQueryCodesResponse,
          ): wasmd.x.wasmd.v1beta1.QueryCodesResponse;

          /**
           * Encodes the specified QueryCodesResponse message. Does not implicitly {@link wasmd.x.wasmd.v1beta1.QueryCodesResponse.verify|verify} messages.
           * @param m QueryCodesResponse message or plain object to encode
           * @param [w] Writer to encode to
           * @returns Writer
           */
          public static encode(
            m: wasmd.x.wasmd.v1beta1.IQueryCodesResponse,
            w?: $protobuf.Writer,
          ): $protobuf.Writer;

          /**
           * Decodes a QueryCodesResponse message from the specified reader or buffer.
           * @param r Reader or buffer to decode from
           * @param [l] Message length if known beforehand
           * @returns QueryCodesResponse
           * @throws {Error} If the payload is not a reader or valid buffer
           * @throws {$protobuf.util.ProtocolError} If required fields are missing
           */
          public static decode(
            r: $protobuf.Reader | Uint8Array,
            l?: number,
          ): wasmd.x.wasmd.v1beta1.QueryCodesResponse;
        }

        /** AccessType enum. */
        enum AccessType {
          ACCESS_TYPE_UNSPECIFIED = 0,
          ACCESS_TYPE_NOBODY = 1,
          ACCESS_TYPE_ONLY_ADDRESS = 2,
          ACCESS_TYPE_EVERYBODY = 3,
        }

        /** Properties of an AccessTypeParam. */
        interface IAccessTypeParam {
          /** AccessTypeParam value */
          value?: wasmd.x.wasmd.v1beta1.AccessType | null;
        }

        /** Represents an AccessTypeParam. */
        class AccessTypeParam implements IAccessTypeParam {
          /**
           * Constructs a new AccessTypeParam.
           * @param [p] Properties to set
           */
          constructor(p?: wasmd.x.wasmd.v1beta1.IAccessTypeParam);

          /** AccessTypeParam value. */
          public value: wasmd.x.wasmd.v1beta1.AccessType;

          /**
           * Creates a new AccessTypeParam instance using the specified properties.
           * @param [properties] Properties to set
           * @returns AccessTypeParam instance
           */
          public static create(
            properties?: wasmd.x.wasmd.v1beta1.IAccessTypeParam,
          ): wasmd.x.wasmd.v1beta1.AccessTypeParam;

          /**
           * Encodes the specified AccessTypeParam message. Does not implicitly {@link wasmd.x.wasmd.v1beta1.AccessTypeParam.verify|verify} messages.
           * @param m AccessTypeParam message or plain object to encode
           * @param [w] Writer to encode to
           * @returns Writer
           */
          public static encode(
            m: wasmd.x.wasmd.v1beta1.IAccessTypeParam,
            w?: $protobuf.Writer,
          ): $protobuf.Writer;

          /**
           * Decodes an AccessTypeParam message from the specified reader or buffer.
           * @param r Reader or buffer to decode from
           * @param [l] Message length if known beforehand
           * @returns AccessTypeParam
           * @throws {Error} If the payload is not a reader or valid buffer
           * @throws {$protobuf.util.ProtocolError} If required fields are missing
           */
          public static decode(
            r: $protobuf.Reader | Uint8Array,
            l?: number,
          ): wasmd.x.wasmd.v1beta1.AccessTypeParam;
        }

        /** Properties of an AccessConfig. */
        interface IAccessConfig {
          /** AccessConfig permission */
          permission?: wasmd.x.wasmd.v1beta1.AccessType | null;

          /** AccessConfig address */
          address?: string | null;
        }

        /** Represents an AccessConfig. */
        class AccessConfig implements IAccessConfig {
          /**
           * Constructs a new AccessConfig.
           * @param [p] Properties to set
           */
          constructor(p?: wasmd.x.wasmd.v1beta1.IAccessConfig);

          /** AccessConfig permission. */
          public permission: wasmd.x.wasmd.v1beta1.AccessType;

          /** AccessConfig address. */
          public address: string;

          /**
           * Creates a new AccessConfig instance using the specified properties.
           * @param [properties] Properties to set
           * @returns AccessConfig instance
           */
          public static create(
            properties?: wasmd.x.wasmd.v1beta1.IAccessConfig,
          ): wasmd.x.wasmd.v1beta1.AccessConfig;

          /**
           * Encodes the specified AccessConfig message. Does not implicitly {@link wasmd.x.wasmd.v1beta1.AccessConfig.verify|verify} messages.
           * @param m AccessConfig message or plain object to encode
           * @param [w] Writer to encode to
           * @returns Writer
           */
          public static encode(
            m: wasmd.x.wasmd.v1beta1.IAccessConfig,
            w?: $protobuf.Writer,
          ): $protobuf.Writer;

          /**
           * Decodes an AccessConfig message from the specified reader or buffer.
           * @param r Reader or buffer to decode from
           * @param [l] Message length if known beforehand
           * @returns AccessConfig
           * @throws {Error} If the payload is not a reader or valid buffer
           * @throws {$protobuf.util.ProtocolError} If required fields are missing
           */
          public static decode(
            r: $protobuf.Reader | Uint8Array,
            l?: number,
          ): wasmd.x.wasmd.v1beta1.AccessConfig;
        }

        /** Properties of a Params. */
        interface IParams {
          /** Params codeUploadAccess */
          codeUploadAccess?: wasmd.x.wasmd.v1beta1.IAccessConfig | null;

          /** Params instantiateDefaultPermission */
          instantiateDefaultPermission?: wasmd.x.wasmd.v1beta1.AccessType | null;

          /** Params maxWasmCodeSize */
          maxWasmCodeSize?: Long | null;
        }

        /** Represents a Params. */
        class Params implements IParams {
          /**
           * Constructs a new Params.
           * @param [p] Properties to set
           */
          constructor(p?: wasmd.x.wasmd.v1beta1.IParams);

          /** Params codeUploadAccess. */
          public codeUploadAccess?: wasmd.x.wasmd.v1beta1.IAccessConfig | null;

          /** Params instantiateDefaultPermission. */
          public instantiateDefaultPermission: wasmd.x.wasmd.v1beta1.AccessType;

          /** Params maxWasmCodeSize. */
          public maxWasmCodeSize: Long;

          /**
           * Creates a new Params instance using the specified properties.
           * @param [properties] Properties to set
           * @returns Params instance
           */
          public static create(properties?: wasmd.x.wasmd.v1beta1.IParams): wasmd.x.wasmd.v1beta1.Params;

          /**
           * Encodes the specified Params message. Does not implicitly {@link wasmd.x.wasmd.v1beta1.Params.verify|verify} messages.
           * @param m Params message or plain object to encode
           * @param [w] Writer to encode to
           * @returns Writer
           */
          public static encode(m: wasmd.x.wasmd.v1beta1.IParams, w?: $protobuf.Writer): $protobuf.Writer;

          /**
           * Decodes a Params message from the specified reader or buffer.
           * @param r Reader or buffer to decode from
           * @param [l] Message length if known beforehand
           * @returns Params
           * @throws {Error} If the payload is not a reader or valid buffer
           * @throws {$protobuf.util.ProtocolError} If required fields are missing
           */
          public static decode(r: $protobuf.Reader | Uint8Array, l?: number): wasmd.x.wasmd.v1beta1.Params;
        }

        /** Properties of a CodeInfo. */
        interface ICodeInfo {
          /** CodeInfo codeHash */
          codeHash?: Uint8Array | null;

          /** CodeInfo creator */
          creator?: string | null;

          /** CodeInfo source */
          source?: string | null;

          /** CodeInfo builder */
          builder?: string | null;

          /** CodeInfo instantiateConfig */
          instantiateConfig?: wasmd.x.wasmd.v1beta1.IAccessConfig | null;
        }

        /** Represents a CodeInfo. */
        class CodeInfo implements ICodeInfo {
          /**
           * Constructs a new CodeInfo.
           * @param [p] Properties to set
           */
          constructor(p?: wasmd.x.wasmd.v1beta1.ICodeInfo);

          /** CodeInfo codeHash. */
          public codeHash: Uint8Array;

          /** CodeInfo creator. */
          public creator: string;

          /** CodeInfo source. */
          public source: string;

          /** CodeInfo builder. */
          public builder: string;

          /** CodeInfo instantiateConfig. */
          public instantiateConfig?: wasmd.x.wasmd.v1beta1.IAccessConfig | null;

          /**
           * Creates a new CodeInfo instance using the specified properties.
           * @param [properties] Properties to set
           * @returns CodeInfo instance
           */
          public static create(properties?: wasmd.x.wasmd.v1beta1.ICodeInfo): wasmd.x.wasmd.v1beta1.CodeInfo;

          /**
           * Encodes the specified CodeInfo message. Does not implicitly {@link wasmd.x.wasmd.v1beta1.CodeInfo.verify|verify} messages.
           * @param m CodeInfo message or plain object to encode
           * @param [w] Writer to encode to
           * @returns Writer
           */
          public static encode(m: wasmd.x.wasmd.v1beta1.ICodeInfo, w?: $protobuf.Writer): $protobuf.Writer;

          /**
           * Decodes a CodeInfo message from the specified reader or buffer.
           * @param r Reader or buffer to decode from
           * @param [l] Message length if known beforehand
           * @returns CodeInfo
           * @throws {Error} If the payload is not a reader or valid buffer
           * @throws {$protobuf.util.ProtocolError} If required fields are missing
           */
          public static decode(r: $protobuf.Reader | Uint8Array, l?: number): wasmd.x.wasmd.v1beta1.CodeInfo;
        }

        /** Properties of a ContractInfo. */
        interface IContractInfo {
          /** ContractInfo codeId */
          codeId?: Long | null;

          /** ContractInfo creator */
          creator?: string | null;

          /** ContractInfo admin */
          admin?: string | null;

          /** ContractInfo label */
          label?: string | null;

          /** ContractInfo created */
          created?: wasmd.x.wasmd.v1beta1.IAbsoluteTxPosition | null;
        }

        /** Represents a ContractInfo. */
        class ContractInfo implements IContractInfo {
          /**
           * Constructs a new ContractInfo.
           * @param [p] Properties to set
           */
          constructor(p?: wasmd.x.wasmd.v1beta1.IContractInfo);

          /** ContractInfo codeId. */
          public codeId: Long;

          /** ContractInfo creator. */
          public creator: string;

          /** ContractInfo admin. */
          public admin: string;

          /** ContractInfo label. */
          public label: string;

          /** ContractInfo created. */
          public created?: wasmd.x.wasmd.v1beta1.IAbsoluteTxPosition | null;

          /**
           * Creates a new ContractInfo instance using the specified properties.
           * @param [properties] Properties to set
           * @returns ContractInfo instance
           */
          public static create(
            properties?: wasmd.x.wasmd.v1beta1.IContractInfo,
          ): wasmd.x.wasmd.v1beta1.ContractInfo;

          /**
           * Encodes the specified ContractInfo message. Does not implicitly {@link wasmd.x.wasmd.v1beta1.ContractInfo.verify|verify} messages.
           * @param m ContractInfo message or plain object to encode
           * @param [w] Writer to encode to
           * @returns Writer
           */
          public static encode(
            m: wasmd.x.wasmd.v1beta1.IContractInfo,
            w?: $protobuf.Writer,
          ): $protobuf.Writer;

          /**
           * Decodes a ContractInfo message from the specified reader or buffer.
           * @param r Reader or buffer to decode from
           * @param [l] Message length if known beforehand
           * @returns ContractInfo
           * @throws {Error} If the payload is not a reader or valid buffer
           * @throws {$protobuf.util.ProtocolError} If required fields are missing
           */
          public static decode(
            r: $protobuf.Reader | Uint8Array,
            l?: number,
          ): wasmd.x.wasmd.v1beta1.ContractInfo;
        }

        /** ContractCodeHistoryOperationType enum. */
        enum ContractCodeHistoryOperationType {
          CONTRACT_CODE_HISTORY_OPERATION_TYPE_UNSPECIFIED = 0,
          CONTRACT_CODE_HISTORY_OPERATION_TYPE_INIT = 1,
          CONTRACT_CODE_HISTORY_OPERATION_TYPE_MIGRATE = 2,
          CONTRACT_CODE_HISTORY_OPERATION_TYPE_GENESIS = 3,
        }

        /** Properties of a ContractCodeHistoryEntry. */
        interface IContractCodeHistoryEntry {
          /** ContractCodeHistoryEntry operation */
          operation?: wasmd.x.wasmd.v1beta1.ContractCodeHistoryOperationType | null;

          /** ContractCodeHistoryEntry codeId */
          codeId?: Long | null;

          /** ContractCodeHistoryEntry updated */
          updated?: wasmd.x.wasmd.v1beta1.IAbsoluteTxPosition | null;

          /** ContractCodeHistoryEntry msg */
          msg?: Uint8Array | null;
        }

        /** Represents a ContractCodeHistoryEntry. */
        class ContractCodeHistoryEntry implements IContractCodeHistoryEntry {
          /**
           * Constructs a new ContractCodeHistoryEntry.
           * @param [p] Properties to set
           */
          constructor(p?: wasmd.x.wasmd.v1beta1.IContractCodeHistoryEntry);

          /** ContractCodeHistoryEntry operation. */
          public operation: wasmd.x.wasmd.v1beta1.ContractCodeHistoryOperationType;

          /** ContractCodeHistoryEntry codeId. */
          public codeId: Long;

          /** ContractCodeHistoryEntry updated. */
          public updated?: wasmd.x.wasmd.v1beta1.IAbsoluteTxPosition | null;

          /** ContractCodeHistoryEntry msg. */
          public msg: Uint8Array;

          /**
           * Creates a new ContractCodeHistoryEntry instance using the specified properties.
           * @param [properties] Properties to set
           * @returns ContractCodeHistoryEntry instance
           */
          public static create(
            properties?: wasmd.x.wasmd.v1beta1.IContractCodeHistoryEntry,
          ): wasmd.x.wasmd.v1beta1.ContractCodeHistoryEntry;

          /**
           * Encodes the specified ContractCodeHistoryEntry message. Does not implicitly {@link wasmd.x.wasmd.v1beta1.ContractCodeHistoryEntry.verify|verify} messages.
           * @param m ContractCodeHistoryEntry message or plain object to encode
           * @param [w] Writer to encode to
           * @returns Writer
           */
          public static encode(
            m: wasmd.x.wasmd.v1beta1.IContractCodeHistoryEntry,
            w?: $protobuf.Writer,
          ): $protobuf.Writer;

          /**
           * Decodes a ContractCodeHistoryEntry message from the specified reader or buffer.
           * @param r Reader or buffer to decode from
           * @param [l] Message length if known beforehand
           * @returns ContractCodeHistoryEntry
           * @throws {Error} If the payload is not a reader or valid buffer
           * @throws {$protobuf.util.ProtocolError} If required fields are missing
           */
          public static decode(
            r: $protobuf.Reader | Uint8Array,
            l?: number,
          ): wasmd.x.wasmd.v1beta1.ContractCodeHistoryEntry;
        }

        /** Properties of an AbsoluteTxPosition. */
        interface IAbsoluteTxPosition {
          /** AbsoluteTxPosition blockHeight */
          blockHeight?: Long | null;

          /** AbsoluteTxPosition txIndex */
          txIndex?: Long | null;
        }

        /** Represents an AbsoluteTxPosition. */
        class AbsoluteTxPosition implements IAbsoluteTxPosition {
          /**
           * Constructs a new AbsoluteTxPosition.
           * @param [p] Properties to set
           */
          constructor(p?: wasmd.x.wasmd.v1beta1.IAbsoluteTxPosition);

          /** AbsoluteTxPosition blockHeight. */
          public blockHeight: Long;

          /** AbsoluteTxPosition txIndex. */
          public txIndex: Long;

          /**
           * Creates a new AbsoluteTxPosition instance using the specified properties.
           * @param [properties] Properties to set
           * @returns AbsoluteTxPosition instance
           */
          public static create(
            properties?: wasmd.x.wasmd.v1beta1.IAbsoluteTxPosition,
          ): wasmd.x.wasmd.v1beta1.AbsoluteTxPosition;

          /**
           * Encodes the specified AbsoluteTxPosition message. Does not implicitly {@link wasmd.x.wasmd.v1beta1.AbsoluteTxPosition.verify|verify} messages.
           * @param m AbsoluteTxPosition message or plain object to encode
           * @param [w] Writer to encode to
           * @returns Writer
           */
          public static encode(
            m: wasmd.x.wasmd.v1beta1.IAbsoluteTxPosition,
            w?: $protobuf.Writer,
          ): $protobuf.Writer;

          /**
           * Decodes an AbsoluteTxPosition message from the specified reader or buffer.
           * @param r Reader or buffer to decode from
           * @param [l] Message length if known beforehand
           * @returns AbsoluteTxPosition
           * @throws {Error} If the payload is not a reader or valid buffer
           * @throws {$protobuf.util.ProtocolError} If required fields are missing
           */
          public static decode(
            r: $protobuf.Reader | Uint8Array,
            l?: number,
          ): wasmd.x.wasmd.v1beta1.AbsoluteTxPosition;
        }

        /** Properties of a Model. */
        interface IModel {
          /** Model key */
          key?: Uint8Array | null;

          /** Model value */
          value?: Uint8Array | null;
        }

        /** Represents a Model. */
        class Model implements IModel {
          /**
           * Constructs a new Model.
           * @param [p] Properties to set
           */
          constructor(p?: wasmd.x.wasmd.v1beta1.IModel);

          /** Model key. */
          public key: Uint8Array;

          /** Model value. */
          public value: Uint8Array;

          /**
           * Creates a new Model instance using the specified properties.
           * @param [properties] Properties to set
           * @returns Model instance
           */
          public static create(properties?: wasmd.x.wasmd.v1beta1.IModel): wasmd.x.wasmd.v1beta1.Model;

          /**
           * Encodes the specified Model message. Does not implicitly {@link wasmd.x.wasmd.v1beta1.Model.verify|verify} messages.
           * @param m Model message or plain object to encode
           * @param [w] Writer to encode to
           * @returns Writer
           */
          public static encode(m: wasmd.x.wasmd.v1beta1.IModel, w?: $protobuf.Writer): $protobuf.Writer;

          /**
           * Decodes a Model message from the specified reader or buffer.
           * @param r Reader or buffer to decode from
           * @param [l] Message length if known beforehand
           * @returns Model
           * @throws {Error} If the payload is not a reader or valid buffer
           * @throws {$protobuf.util.ProtocolError} If required fields are missing
           */
          public static decode(r: $protobuf.Reader | Uint8Array, l?: number): wasmd.x.wasmd.v1beta1.Model;
        }
      }
    }
  }
}

/** Namespace cosmos. */
export namespace cosmos {
  /** Namespace base. */
  namespace base {
    /** Namespace query. */
    namespace query {
      /** Namespace v1beta1. */
      namespace v1beta1 {
        /** Properties of a PageRequest. */
        interface IPageRequest {
          /** PageRequest key */
          key?: Uint8Array | null;

          /** PageRequest offset */
          offset?: Long | null;

          /** PageRequest limit */
          limit?: Long | null;

          /** PageRequest countTotal */
          countTotal?: boolean | null;
        }

        /** Represents a PageRequest. */
        class PageRequest implements IPageRequest {
          /**
           * Constructs a new PageRequest.
           * @param [p] Properties to set
           */
          constructor(p?: cosmos.base.query.v1beta1.IPageRequest);

          /** PageRequest key. */
          public key: Uint8Array;

          /** PageRequest offset. */
          public offset: Long;

          /** PageRequest limit. */
          public limit: Long;

          /** PageRequest countTotal. */
          public countTotal: boolean;

          /**
           * Creates a new PageRequest instance using the specified properties.
           * @param [properties] Properties to set
           * @returns PageRequest instance
           */
          public static create(
            properties?: cosmos.base.query.v1beta1.IPageRequest,
          ): cosmos.base.query.v1beta1.PageRequest;

          /**
           * Encodes the specified PageRequest message. Does not implicitly {@link cosmos.base.query.v1beta1.PageRequest.verify|verify} messages.
           * @param m PageRequest message or plain object to encode
           * @param [w] Writer to encode to
           * @returns Writer
           */
          public static encode(
            m: cosmos.base.query.v1beta1.IPageRequest,
            w?: $protobuf.Writer,
          ): $protobuf.Writer;

          /**
           * Decodes a PageRequest message from the specified reader or buffer.
           * @param r Reader or buffer to decode from
           * @param [l] Message length if known beforehand
           * @returns PageRequest
           * @throws {Error} If the payload is not a reader or valid buffer
           * @throws {$protobuf.util.ProtocolError} If required fields are missing
           */
          public static decode(
            r: $protobuf.Reader | Uint8Array,
            l?: number,
          ): cosmos.base.query.v1beta1.PageRequest;
        }

        /** Properties of a PageResponse. */
        interface IPageResponse {
          /** PageResponse nextKey */
          nextKey?: Uint8Array | null;

          /** PageResponse total */
          total?: Long | null;
        }

        /** Represents a PageResponse. */
        class PageResponse implements IPageResponse {
          /**
           * Constructs a new PageResponse.
           * @param [p] Properties to set
           */
          constructor(p?: cosmos.base.query.v1beta1.IPageResponse);

          /** PageResponse nextKey. */
          public nextKey: Uint8Array;

          /** PageResponse total. */
          public total: Long;

          /**
           * Creates a new PageResponse instance using the specified properties.
           * @param [properties] Properties to set
           * @returns PageResponse instance
           */
          public static create(
            properties?: cosmos.base.query.v1beta1.IPageResponse,
          ): cosmos.base.query.v1beta1.PageResponse;

          /**
           * Encodes the specified PageResponse message. Does not implicitly {@link cosmos.base.query.v1beta1.PageResponse.verify|verify} messages.
           * @param m PageResponse message or plain object to encode
           * @param [w] Writer to encode to
           * @returns Writer
           */
          public static encode(
            m: cosmos.base.query.v1beta1.IPageResponse,
            w?: $protobuf.Writer,
          ): $protobuf.Writer;

          /**
           * Decodes a PageResponse message from the specified reader or buffer.
           * @param r Reader or buffer to decode from
           * @param [l] Message length if known beforehand
           * @returns PageResponse
           * @throws {Error} If the payload is not a reader or valid buffer
           * @throws {$protobuf.util.ProtocolError} If required fields are missing
           */
          public static decode(
            r: $protobuf.Reader | Uint8Array,
            l?: number,
          ): cosmos.base.query.v1beta1.PageResponse;
        }
      }
    }
  }
}
