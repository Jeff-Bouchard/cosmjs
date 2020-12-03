"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cosmos = exports.wasmd = void 0;
var $protobuf = require("protobufjs/minimal");
const $Reader = $protobuf.Reader,
  $Writer = $protobuf.Writer,
  $util = $protobuf.util;
const $root = {};
exports.wasmd = $root.wasmd = (() => {
  const wasmd = {};
  wasmd.x = (function () {
    const x = {};
    x.wasmd = (function () {
      const wasmd = {};
      wasmd.v1beta1 = (function () {
        const v1beta1 = {};
        v1beta1.Query = (function () {
          function Query(rpcImpl, requestDelimited, responseDelimited) {
            $protobuf.rpc.Service.call(this, rpcImpl, requestDelimited, responseDelimited);
          }
          (Query.prototype = Object.create($protobuf.rpc.Service.prototype)).constructor = Query;
          Query.create = function create(rpcImpl, requestDelimited, responseDelimited) {
            return new this(rpcImpl, requestDelimited, responseDelimited);
          };
          Object.defineProperty(
            (Query.prototype.contractInfo = function contractInfo(request, callback) {
              return this.rpcCall(
                contractInfo,
                $root.wasmd.x.wasmd.v1beta1.QueryContractInfoRequest,
                $root.wasmd.x.wasmd.v1beta1.QueryContractInfoResponse,
                request,
                callback,
              );
            }),
            "name",
            { value: "ContractInfo" },
          );
          Object.defineProperty(
            (Query.prototype.contractHistory = function contractHistory(request, callback) {
              return this.rpcCall(
                contractHistory,
                $root.wasmd.x.wasmd.v1beta1.QueryContractHistoryRequest,
                $root.wasmd.x.wasmd.v1beta1.QueryContractHistoryResponse,
                request,
                callback,
              );
            }),
            "name",
            { value: "ContractHistory" },
          );
          Object.defineProperty(
            (Query.prototype.contractsByCode = function contractsByCode(request, callback) {
              return this.rpcCall(
                contractsByCode,
                $root.wasmd.x.wasmd.v1beta1.QueryContractsByCodeRequest,
                $root.wasmd.x.wasmd.v1beta1.QueryContractsByCodeResponse,
                request,
                callback,
              );
            }),
            "name",
            { value: "ContractsByCode" },
          );
          Object.defineProperty(
            (Query.prototype.allContractState = function allContractState(request, callback) {
              return this.rpcCall(
                allContractState,
                $root.wasmd.x.wasmd.v1beta1.QueryAllContractStateRequest,
                $root.wasmd.x.wasmd.v1beta1.QueryAllContractStateResponse,
                request,
                callback,
              );
            }),
            "name",
            { value: "AllContractState" },
          );
          Object.defineProperty(
            (Query.prototype.rawContractState = function rawContractState(request, callback) {
              return this.rpcCall(
                rawContractState,
                $root.wasmd.x.wasmd.v1beta1.QueryRawContractStateRequest,
                $root.wasmd.x.wasmd.v1beta1.QueryRawContractStateResponse,
                request,
                callback,
              );
            }),
            "name",
            { value: "RawContractState" },
          );
          Object.defineProperty(
            (Query.prototype.smartContractState = function smartContractState(request, callback) {
              return this.rpcCall(
                smartContractState,
                $root.wasmd.x.wasmd.v1beta1.QuerySmartContractStateRequest,
                $root.wasmd.x.wasmd.v1beta1.QuerySmartContractStateResponse,
                request,
                callback,
              );
            }),
            "name",
            { value: "SmartContractState" },
          );
          Object.defineProperty(
            (Query.prototype.code = function code(request, callback) {
              return this.rpcCall(
                code,
                $root.wasmd.x.wasmd.v1beta1.QueryCodeRequest,
                $root.wasmd.x.wasmd.v1beta1.QueryCodeResponse,
                request,
                callback,
              );
            }),
            "name",
            { value: "Code" },
          );
          Object.defineProperty(
            (Query.prototype.codes = function codes(request, callback) {
              return this.rpcCall(
                codes,
                $root.wasmd.x.wasmd.v1beta1.QueryCodesRequest,
                $root.wasmd.x.wasmd.v1beta1.QueryCodesResponse,
                request,
                callback,
              );
            }),
            "name",
            { value: "Codes" },
          );
          return Query;
        })();
        v1beta1.QueryContractInfoRequest = (function () {
          function QueryContractInfoRequest(p) {
            if (p)
              for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
          }
          QueryContractInfoRequest.prototype.address = "";
          QueryContractInfoRequest.create = function create(properties) {
            return new QueryContractInfoRequest(properties);
          };
          QueryContractInfoRequest.encode = function encode(m, w) {
            if (!w) w = $Writer.create();
            if (m.address != null && Object.hasOwnProperty.call(m, "address")) w.uint32(10).string(m.address);
            return w;
          };
          QueryContractInfoRequest.decode = function decode(r, l) {
            if (!(r instanceof $Reader)) r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l,
              m = new $root.wasmd.x.wasmd.v1beta1.QueryContractInfoRequest();
            while (r.pos < c) {
              var t = r.uint32();
              switch (t >>> 3) {
                case 1:
                  m.address = r.string();
                  break;
                default:
                  r.skipType(t & 7);
                  break;
              }
            }
            return m;
          };
          return QueryContractInfoRequest;
        })();
        v1beta1.QueryContractInfoResponse = (function () {
          function QueryContractInfoResponse(p) {
            if (p)
              for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
          }
          QueryContractInfoResponse.prototype.address = "";
          QueryContractInfoResponse.prototype.contractInfo = null;
          QueryContractInfoResponse.create = function create(properties) {
            return new QueryContractInfoResponse(properties);
          };
          QueryContractInfoResponse.encode = function encode(m, w) {
            if (!w) w = $Writer.create();
            if (m.address != null && Object.hasOwnProperty.call(m, "address")) w.uint32(10).string(m.address);
            if (m.contractInfo != null && Object.hasOwnProperty.call(m, "contractInfo"))
              $root.wasmd.x.wasmd.v1beta1.ContractInfo.encode(m.contractInfo, w.uint32(18).fork()).ldelim();
            return w;
          };
          QueryContractInfoResponse.decode = function decode(r, l) {
            if (!(r instanceof $Reader)) r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l,
              m = new $root.wasmd.x.wasmd.v1beta1.QueryContractInfoResponse();
            while (r.pos < c) {
              var t = r.uint32();
              switch (t >>> 3) {
                case 1:
                  m.address = r.string();
                  break;
                case 2:
                  m.contractInfo = $root.wasmd.x.wasmd.v1beta1.ContractInfo.decode(r, r.uint32());
                  break;
                default:
                  r.skipType(t & 7);
                  break;
              }
            }
            return m;
          };
          return QueryContractInfoResponse;
        })();
        v1beta1.QueryContractHistoryRequest = (function () {
          function QueryContractHistoryRequest(p) {
            if (p)
              for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
          }
          QueryContractHistoryRequest.prototype.address = "";
          QueryContractHistoryRequest.prototype.pagination = null;
          QueryContractHistoryRequest.create = function create(properties) {
            return new QueryContractHistoryRequest(properties);
          };
          QueryContractHistoryRequest.encode = function encode(m, w) {
            if (!w) w = $Writer.create();
            if (m.address != null && Object.hasOwnProperty.call(m, "address")) w.uint32(10).string(m.address);
            if (m.pagination != null && Object.hasOwnProperty.call(m, "pagination"))
              $root.cosmos.base.query.v1beta1.PageRequest.encode(m.pagination, w.uint32(18).fork()).ldelim();
            return w;
          };
          QueryContractHistoryRequest.decode = function decode(r, l) {
            if (!(r instanceof $Reader)) r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l,
              m = new $root.wasmd.x.wasmd.v1beta1.QueryContractHistoryRequest();
            while (r.pos < c) {
              var t = r.uint32();
              switch (t >>> 3) {
                case 1:
                  m.address = r.string();
                  break;
                case 2:
                  m.pagination = $root.cosmos.base.query.v1beta1.PageRequest.decode(r, r.uint32());
                  break;
                default:
                  r.skipType(t & 7);
                  break;
              }
            }
            return m;
          };
          return QueryContractHistoryRequest;
        })();
        v1beta1.QueryContractHistoryResponse = (function () {
          function QueryContractHistoryResponse(p) {
            this.entries = [];
            if (p)
              for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
          }
          QueryContractHistoryResponse.prototype.entries = $util.emptyArray;
          QueryContractHistoryResponse.prototype.pagination = null;
          QueryContractHistoryResponse.create = function create(properties) {
            return new QueryContractHistoryResponse(properties);
          };
          QueryContractHistoryResponse.encode = function encode(m, w) {
            if (!w) w = $Writer.create();
            if (m.entries != null && m.entries.length) {
              for (var i = 0; i < m.entries.length; ++i)
                $root.wasmd.x.wasmd.v1beta1.ContractCodeHistoryEntry.encode(
                  m.entries[i],
                  w.uint32(10).fork(),
                ).ldelim();
            }
            if (m.pagination != null && Object.hasOwnProperty.call(m, "pagination"))
              $root.cosmos.base.query.v1beta1.PageResponse.encode(m.pagination, w.uint32(18).fork()).ldelim();
            return w;
          };
          QueryContractHistoryResponse.decode = function decode(r, l) {
            if (!(r instanceof $Reader)) r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l,
              m = new $root.wasmd.x.wasmd.v1beta1.QueryContractHistoryResponse();
            while (r.pos < c) {
              var t = r.uint32();
              switch (t >>> 3) {
                case 1:
                  if (!(m.entries && m.entries.length)) m.entries = [];
                  m.entries.push($root.wasmd.x.wasmd.v1beta1.ContractCodeHistoryEntry.decode(r, r.uint32()));
                  break;
                case 2:
                  m.pagination = $root.cosmos.base.query.v1beta1.PageResponse.decode(r, r.uint32());
                  break;
                default:
                  r.skipType(t & 7);
                  break;
              }
            }
            return m;
          };
          return QueryContractHistoryResponse;
        })();
        v1beta1.QueryContractsByCodeRequest = (function () {
          function QueryContractsByCodeRequest(p) {
            if (p)
              for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
          }
          QueryContractsByCodeRequest.prototype.codeId = $util.Long ? $util.Long.fromBits(0, 0, true) : 0;
          QueryContractsByCodeRequest.prototype.pagination = null;
          QueryContractsByCodeRequest.create = function create(properties) {
            return new QueryContractsByCodeRequest(properties);
          };
          QueryContractsByCodeRequest.encode = function encode(m, w) {
            if (!w) w = $Writer.create();
            if (m.codeId != null && Object.hasOwnProperty.call(m, "codeId")) w.uint32(8).uint64(m.codeId);
            if (m.pagination != null && Object.hasOwnProperty.call(m, "pagination"))
              $root.cosmos.base.query.v1beta1.PageRequest.encode(m.pagination, w.uint32(18).fork()).ldelim();
            return w;
          };
          QueryContractsByCodeRequest.decode = function decode(r, l) {
            if (!(r instanceof $Reader)) r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l,
              m = new $root.wasmd.x.wasmd.v1beta1.QueryContractsByCodeRequest();
            while (r.pos < c) {
              var t = r.uint32();
              switch (t >>> 3) {
                case 1:
                  m.codeId = r.uint64();
                  break;
                case 2:
                  m.pagination = $root.cosmos.base.query.v1beta1.PageRequest.decode(r, r.uint32());
                  break;
                default:
                  r.skipType(t & 7);
                  break;
              }
            }
            return m;
          };
          return QueryContractsByCodeRequest;
        })();
        v1beta1.ContractInfoWithAddress = (function () {
          function ContractInfoWithAddress(p) {
            if (p)
              for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
          }
          ContractInfoWithAddress.prototype.address = "";
          ContractInfoWithAddress.prototype.contractInfo = null;
          ContractInfoWithAddress.create = function create(properties) {
            return new ContractInfoWithAddress(properties);
          };
          ContractInfoWithAddress.encode = function encode(m, w) {
            if (!w) w = $Writer.create();
            if (m.address != null && Object.hasOwnProperty.call(m, "address")) w.uint32(10).string(m.address);
            if (m.contractInfo != null && Object.hasOwnProperty.call(m, "contractInfo"))
              $root.wasmd.x.wasmd.v1beta1.ContractInfo.encode(m.contractInfo, w.uint32(18).fork()).ldelim();
            return w;
          };
          ContractInfoWithAddress.decode = function decode(r, l) {
            if (!(r instanceof $Reader)) r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l,
              m = new $root.wasmd.x.wasmd.v1beta1.ContractInfoWithAddress();
            while (r.pos < c) {
              var t = r.uint32();
              switch (t >>> 3) {
                case 1:
                  m.address = r.string();
                  break;
                case 2:
                  m.contractInfo = $root.wasmd.x.wasmd.v1beta1.ContractInfo.decode(r, r.uint32());
                  break;
                default:
                  r.skipType(t & 7);
                  break;
              }
            }
            return m;
          };
          return ContractInfoWithAddress;
        })();
        v1beta1.QueryContractsByCodeResponse = (function () {
          function QueryContractsByCodeResponse(p) {
            this.contractInfos = [];
            if (p)
              for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
          }
          QueryContractsByCodeResponse.prototype.contractInfos = $util.emptyArray;
          QueryContractsByCodeResponse.prototype.pagination = null;
          QueryContractsByCodeResponse.create = function create(properties) {
            return new QueryContractsByCodeResponse(properties);
          };
          QueryContractsByCodeResponse.encode = function encode(m, w) {
            if (!w) w = $Writer.create();
            if (m.contractInfos != null && m.contractInfos.length) {
              for (var i = 0; i < m.contractInfos.length; ++i)
                $root.wasmd.x.wasmd.v1beta1.ContractInfoWithAddress.encode(
                  m.contractInfos[i],
                  w.uint32(10).fork(),
                ).ldelim();
            }
            if (m.pagination != null && Object.hasOwnProperty.call(m, "pagination"))
              $root.cosmos.base.query.v1beta1.PageResponse.encode(m.pagination, w.uint32(18).fork()).ldelim();
            return w;
          };
          QueryContractsByCodeResponse.decode = function decode(r, l) {
            if (!(r instanceof $Reader)) r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l,
              m = new $root.wasmd.x.wasmd.v1beta1.QueryContractsByCodeResponse();
            while (r.pos < c) {
              var t = r.uint32();
              switch (t >>> 3) {
                case 1:
                  if (!(m.contractInfos && m.contractInfos.length)) m.contractInfos = [];
                  m.contractInfos.push(
                    $root.wasmd.x.wasmd.v1beta1.ContractInfoWithAddress.decode(r, r.uint32()),
                  );
                  break;
                case 2:
                  m.pagination = $root.cosmos.base.query.v1beta1.PageResponse.decode(r, r.uint32());
                  break;
                default:
                  r.skipType(t & 7);
                  break;
              }
            }
            return m;
          };
          return QueryContractsByCodeResponse;
        })();
        v1beta1.QueryAllContractStateRequest = (function () {
          function QueryAllContractStateRequest(p) {
            if (p)
              for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
          }
          QueryAllContractStateRequest.prototype.address = "";
          QueryAllContractStateRequest.prototype.pagination = null;
          QueryAllContractStateRequest.create = function create(properties) {
            return new QueryAllContractStateRequest(properties);
          };
          QueryAllContractStateRequest.encode = function encode(m, w) {
            if (!w) w = $Writer.create();
            if (m.address != null && Object.hasOwnProperty.call(m, "address")) w.uint32(10).string(m.address);
            if (m.pagination != null && Object.hasOwnProperty.call(m, "pagination"))
              $root.cosmos.base.query.v1beta1.PageRequest.encode(m.pagination, w.uint32(18).fork()).ldelim();
            return w;
          };
          QueryAllContractStateRequest.decode = function decode(r, l) {
            if (!(r instanceof $Reader)) r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l,
              m = new $root.wasmd.x.wasmd.v1beta1.QueryAllContractStateRequest();
            while (r.pos < c) {
              var t = r.uint32();
              switch (t >>> 3) {
                case 1:
                  m.address = r.string();
                  break;
                case 2:
                  m.pagination = $root.cosmos.base.query.v1beta1.PageRequest.decode(r, r.uint32());
                  break;
                default:
                  r.skipType(t & 7);
                  break;
              }
            }
            return m;
          };
          return QueryAllContractStateRequest;
        })();
        v1beta1.QueryAllContractStateResponse = (function () {
          function QueryAllContractStateResponse(p) {
            this.models = [];
            if (p)
              for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
          }
          QueryAllContractStateResponse.prototype.models = $util.emptyArray;
          QueryAllContractStateResponse.prototype.pagination = null;
          QueryAllContractStateResponse.create = function create(properties) {
            return new QueryAllContractStateResponse(properties);
          };
          QueryAllContractStateResponse.encode = function encode(m, w) {
            if (!w) w = $Writer.create();
            if (m.models != null && m.models.length) {
              for (var i = 0; i < m.models.length; ++i)
                $root.wasmd.x.wasmd.v1beta1.Model.encode(m.models[i], w.uint32(10).fork()).ldelim();
            }
            if (m.pagination != null && Object.hasOwnProperty.call(m, "pagination"))
              $root.cosmos.base.query.v1beta1.PageResponse.encode(m.pagination, w.uint32(18).fork()).ldelim();
            return w;
          };
          QueryAllContractStateResponse.decode = function decode(r, l) {
            if (!(r instanceof $Reader)) r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l,
              m = new $root.wasmd.x.wasmd.v1beta1.QueryAllContractStateResponse();
            while (r.pos < c) {
              var t = r.uint32();
              switch (t >>> 3) {
                case 1:
                  if (!(m.models && m.models.length)) m.models = [];
                  m.models.push($root.wasmd.x.wasmd.v1beta1.Model.decode(r, r.uint32()));
                  break;
                case 2:
                  m.pagination = $root.cosmos.base.query.v1beta1.PageResponse.decode(r, r.uint32());
                  break;
                default:
                  r.skipType(t & 7);
                  break;
              }
            }
            return m;
          };
          return QueryAllContractStateResponse;
        })();
        v1beta1.QueryRawContractStateRequest = (function () {
          function QueryRawContractStateRequest(p) {
            if (p)
              for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
          }
          QueryRawContractStateRequest.prototype.address = "";
          QueryRawContractStateRequest.prototype.queryData = $util.newBuffer([]);
          QueryRawContractStateRequest.create = function create(properties) {
            return new QueryRawContractStateRequest(properties);
          };
          QueryRawContractStateRequest.encode = function encode(m, w) {
            if (!w) w = $Writer.create();
            if (m.address != null && Object.hasOwnProperty.call(m, "address")) w.uint32(10).string(m.address);
            if (m.queryData != null && Object.hasOwnProperty.call(m, "queryData"))
              w.uint32(18).bytes(m.queryData);
            return w;
          };
          QueryRawContractStateRequest.decode = function decode(r, l) {
            if (!(r instanceof $Reader)) r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l,
              m = new $root.wasmd.x.wasmd.v1beta1.QueryRawContractStateRequest();
            while (r.pos < c) {
              var t = r.uint32();
              switch (t >>> 3) {
                case 1:
                  m.address = r.string();
                  break;
                case 2:
                  m.queryData = r.bytes();
                  break;
                default:
                  r.skipType(t & 7);
                  break;
              }
            }
            return m;
          };
          return QueryRawContractStateRequest;
        })();
        v1beta1.QueryRawContractStateResponse = (function () {
          function QueryRawContractStateResponse(p) {
            if (p)
              for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
          }
          QueryRawContractStateResponse.prototype.data = $util.newBuffer([]);
          QueryRawContractStateResponse.create = function create(properties) {
            return new QueryRawContractStateResponse(properties);
          };
          QueryRawContractStateResponse.encode = function encode(m, w) {
            if (!w) w = $Writer.create();
            if (m.data != null && Object.hasOwnProperty.call(m, "data")) w.uint32(10).bytes(m.data);
            return w;
          };
          QueryRawContractStateResponse.decode = function decode(r, l) {
            if (!(r instanceof $Reader)) r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l,
              m = new $root.wasmd.x.wasmd.v1beta1.QueryRawContractStateResponse();
            while (r.pos < c) {
              var t = r.uint32();
              switch (t >>> 3) {
                case 1:
                  m.data = r.bytes();
                  break;
                default:
                  r.skipType(t & 7);
                  break;
              }
            }
            return m;
          };
          return QueryRawContractStateResponse;
        })();
        v1beta1.QuerySmartContractStateRequest = (function () {
          function QuerySmartContractStateRequest(p) {
            if (p)
              for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
          }
          QuerySmartContractStateRequest.prototype.address = "";
          QuerySmartContractStateRequest.prototype.queryData = $util.newBuffer([]);
          QuerySmartContractStateRequest.create = function create(properties) {
            return new QuerySmartContractStateRequest(properties);
          };
          QuerySmartContractStateRequest.encode = function encode(m, w) {
            if (!w) w = $Writer.create();
            if (m.address != null && Object.hasOwnProperty.call(m, "address")) w.uint32(10).string(m.address);
            if (m.queryData != null && Object.hasOwnProperty.call(m, "queryData"))
              w.uint32(18).bytes(m.queryData);
            return w;
          };
          QuerySmartContractStateRequest.decode = function decode(r, l) {
            if (!(r instanceof $Reader)) r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l,
              m = new $root.wasmd.x.wasmd.v1beta1.QuerySmartContractStateRequest();
            while (r.pos < c) {
              var t = r.uint32();
              switch (t >>> 3) {
                case 1:
                  m.address = r.string();
                  break;
                case 2:
                  m.queryData = r.bytes();
                  break;
                default:
                  r.skipType(t & 7);
                  break;
              }
            }
            return m;
          };
          return QuerySmartContractStateRequest;
        })();
        v1beta1.QuerySmartContractStateResponse = (function () {
          function QuerySmartContractStateResponse(p) {
            if (p)
              for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
          }
          QuerySmartContractStateResponse.prototype.data = $util.newBuffer([]);
          QuerySmartContractStateResponse.create = function create(properties) {
            return new QuerySmartContractStateResponse(properties);
          };
          QuerySmartContractStateResponse.encode = function encode(m, w) {
            if (!w) w = $Writer.create();
            if (m.data != null && Object.hasOwnProperty.call(m, "data")) w.uint32(10).bytes(m.data);
            return w;
          };
          QuerySmartContractStateResponse.decode = function decode(r, l) {
            if (!(r instanceof $Reader)) r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l,
              m = new $root.wasmd.x.wasmd.v1beta1.QuerySmartContractStateResponse();
            while (r.pos < c) {
              var t = r.uint32();
              switch (t >>> 3) {
                case 1:
                  m.data = r.bytes();
                  break;
                default:
                  r.skipType(t & 7);
                  break;
              }
            }
            return m;
          };
          return QuerySmartContractStateResponse;
        })();
        v1beta1.QueryCodeRequest = (function () {
          function QueryCodeRequest(p) {
            if (p)
              for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
          }
          QueryCodeRequest.prototype.codeId = $util.Long ? $util.Long.fromBits(0, 0, true) : 0;
          QueryCodeRequest.create = function create(properties) {
            return new QueryCodeRequest(properties);
          };
          QueryCodeRequest.encode = function encode(m, w) {
            if (!w) w = $Writer.create();
            if (m.codeId != null && Object.hasOwnProperty.call(m, "codeId")) w.uint32(8).uint64(m.codeId);
            return w;
          };
          QueryCodeRequest.decode = function decode(r, l) {
            if (!(r instanceof $Reader)) r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l,
              m = new $root.wasmd.x.wasmd.v1beta1.QueryCodeRequest();
            while (r.pos < c) {
              var t = r.uint32();
              switch (t >>> 3) {
                case 1:
                  m.codeId = r.uint64();
                  break;
                default:
                  r.skipType(t & 7);
                  break;
              }
            }
            return m;
          };
          return QueryCodeRequest;
        })();
        v1beta1.CodeInfoResponse = (function () {
          function CodeInfoResponse(p) {
            if (p)
              for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
          }
          CodeInfoResponse.prototype.codeId = $util.Long ? $util.Long.fromBits(0, 0, true) : 0;
          CodeInfoResponse.prototype.creator = "";
          CodeInfoResponse.prototype.dataHash = $util.newBuffer([]);
          CodeInfoResponse.prototype.source = "";
          CodeInfoResponse.prototype.builder = "";
          CodeInfoResponse.create = function create(properties) {
            return new CodeInfoResponse(properties);
          };
          CodeInfoResponse.encode = function encode(m, w) {
            if (!w) w = $Writer.create();
            if (m.codeId != null && Object.hasOwnProperty.call(m, "codeId")) w.uint32(8).uint64(m.codeId);
            if (m.creator != null && Object.hasOwnProperty.call(m, "creator")) w.uint32(18).string(m.creator);
            if (m.dataHash != null && Object.hasOwnProperty.call(m, "dataHash"))
              w.uint32(26).bytes(m.dataHash);
            if (m.source != null && Object.hasOwnProperty.call(m, "source")) w.uint32(34).string(m.source);
            if (m.builder != null && Object.hasOwnProperty.call(m, "builder")) w.uint32(42).string(m.builder);
            return w;
          };
          CodeInfoResponse.decode = function decode(r, l) {
            if (!(r instanceof $Reader)) r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l,
              m = new $root.wasmd.x.wasmd.v1beta1.CodeInfoResponse();
            while (r.pos < c) {
              var t = r.uint32();
              switch (t >>> 3) {
                case 1:
                  m.codeId = r.uint64();
                  break;
                case 2:
                  m.creator = r.string();
                  break;
                case 3:
                  m.dataHash = r.bytes();
                  break;
                case 4:
                  m.source = r.string();
                  break;
                case 5:
                  m.builder = r.string();
                  break;
                default:
                  r.skipType(t & 7);
                  break;
              }
            }
            return m;
          };
          return CodeInfoResponse;
        })();
        v1beta1.QueryCodeResponse = (function () {
          function QueryCodeResponse(p) {
            if (p)
              for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
          }
          QueryCodeResponse.prototype.codeInfo = null;
          QueryCodeResponse.prototype.data = $util.newBuffer([]);
          QueryCodeResponse.create = function create(properties) {
            return new QueryCodeResponse(properties);
          };
          QueryCodeResponse.encode = function encode(m, w) {
            if (!w) w = $Writer.create();
            if (m.codeInfo != null && Object.hasOwnProperty.call(m, "codeInfo"))
              $root.wasmd.x.wasmd.v1beta1.CodeInfoResponse.encode(m.codeInfo, w.uint32(10).fork()).ldelim();
            if (m.data != null && Object.hasOwnProperty.call(m, "data")) w.uint32(18).bytes(m.data);
            return w;
          };
          QueryCodeResponse.decode = function decode(r, l) {
            if (!(r instanceof $Reader)) r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l,
              m = new $root.wasmd.x.wasmd.v1beta1.QueryCodeResponse();
            while (r.pos < c) {
              var t = r.uint32();
              switch (t >>> 3) {
                case 1:
                  m.codeInfo = $root.wasmd.x.wasmd.v1beta1.CodeInfoResponse.decode(r, r.uint32());
                  break;
                case 2:
                  m.data = r.bytes();
                  break;
                default:
                  r.skipType(t & 7);
                  break;
              }
            }
            return m;
          };
          return QueryCodeResponse;
        })();
        v1beta1.QueryCodesRequest = (function () {
          function QueryCodesRequest(p) {
            if (p)
              for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
          }
          QueryCodesRequest.prototype.pagination = null;
          QueryCodesRequest.create = function create(properties) {
            return new QueryCodesRequest(properties);
          };
          QueryCodesRequest.encode = function encode(m, w) {
            if (!w) w = $Writer.create();
            if (m.pagination != null && Object.hasOwnProperty.call(m, "pagination"))
              $root.cosmos.base.query.v1beta1.PageRequest.encode(m.pagination, w.uint32(10).fork()).ldelim();
            return w;
          };
          QueryCodesRequest.decode = function decode(r, l) {
            if (!(r instanceof $Reader)) r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l,
              m = new $root.wasmd.x.wasmd.v1beta1.QueryCodesRequest();
            while (r.pos < c) {
              var t = r.uint32();
              switch (t >>> 3) {
                case 1:
                  m.pagination = $root.cosmos.base.query.v1beta1.PageRequest.decode(r, r.uint32());
                  break;
                default:
                  r.skipType(t & 7);
                  break;
              }
            }
            return m;
          };
          return QueryCodesRequest;
        })();
        v1beta1.QueryCodesResponse = (function () {
          function QueryCodesResponse(p) {
            this.codeInfos = [];
            if (p)
              for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
          }
          QueryCodesResponse.prototype.codeInfos = $util.emptyArray;
          QueryCodesResponse.prototype.pagination = null;
          QueryCodesResponse.create = function create(properties) {
            return new QueryCodesResponse(properties);
          };
          QueryCodesResponse.encode = function encode(m, w) {
            if (!w) w = $Writer.create();
            if (m.codeInfos != null && m.codeInfos.length) {
              for (var i = 0; i < m.codeInfos.length; ++i)
                $root.wasmd.x.wasmd.v1beta1.CodeInfoResponse.encode(
                  m.codeInfos[i],
                  w.uint32(10).fork(),
                ).ldelim();
            }
            if (m.pagination != null && Object.hasOwnProperty.call(m, "pagination"))
              $root.cosmos.base.query.v1beta1.PageResponse.encode(m.pagination, w.uint32(18).fork()).ldelim();
            return w;
          };
          QueryCodesResponse.decode = function decode(r, l) {
            if (!(r instanceof $Reader)) r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l,
              m = new $root.wasmd.x.wasmd.v1beta1.QueryCodesResponse();
            while (r.pos < c) {
              var t = r.uint32();
              switch (t >>> 3) {
                case 1:
                  if (!(m.codeInfos && m.codeInfos.length)) m.codeInfos = [];
                  m.codeInfos.push($root.wasmd.x.wasmd.v1beta1.CodeInfoResponse.decode(r, r.uint32()));
                  break;
                case 2:
                  m.pagination = $root.cosmos.base.query.v1beta1.PageResponse.decode(r, r.uint32());
                  break;
                default:
                  r.skipType(t & 7);
                  break;
              }
            }
            return m;
          };
          return QueryCodesResponse;
        })();
        v1beta1.AccessType = (function () {
          const valuesById = {},
            values = Object.create(valuesById);
          values[(valuesById[0] = "ACCESS_TYPE_UNSPECIFIED")] = 0;
          values[(valuesById[1] = "ACCESS_TYPE_NOBODY")] = 1;
          values[(valuesById[2] = "ACCESS_TYPE_ONLY_ADDRESS")] = 2;
          values[(valuesById[3] = "ACCESS_TYPE_EVERYBODY")] = 3;
          return values;
        })();
        v1beta1.AccessTypeParam = (function () {
          function AccessTypeParam(p) {
            if (p)
              for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
          }
          AccessTypeParam.prototype.value = 0;
          AccessTypeParam.create = function create(properties) {
            return new AccessTypeParam(properties);
          };
          AccessTypeParam.encode = function encode(m, w) {
            if (!w) w = $Writer.create();
            if (m.value != null && Object.hasOwnProperty.call(m, "value")) w.uint32(8).int32(m.value);
            return w;
          };
          AccessTypeParam.decode = function decode(r, l) {
            if (!(r instanceof $Reader)) r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l,
              m = new $root.wasmd.x.wasmd.v1beta1.AccessTypeParam();
            while (r.pos < c) {
              var t = r.uint32();
              switch (t >>> 3) {
                case 1:
                  m.value = r.int32();
                  break;
                default:
                  r.skipType(t & 7);
                  break;
              }
            }
            return m;
          };
          return AccessTypeParam;
        })();
        v1beta1.AccessConfig = (function () {
          function AccessConfig(p) {
            if (p)
              for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
          }
          AccessConfig.prototype.permission = 0;
          AccessConfig.prototype.address = "";
          AccessConfig.create = function create(properties) {
            return new AccessConfig(properties);
          };
          AccessConfig.encode = function encode(m, w) {
            if (!w) w = $Writer.create();
            if (m.permission != null && Object.hasOwnProperty.call(m, "permission"))
              w.uint32(8).int32(m.permission);
            if (m.address != null && Object.hasOwnProperty.call(m, "address")) w.uint32(18).string(m.address);
            return w;
          };
          AccessConfig.decode = function decode(r, l) {
            if (!(r instanceof $Reader)) r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l,
              m = new $root.wasmd.x.wasmd.v1beta1.AccessConfig();
            while (r.pos < c) {
              var t = r.uint32();
              switch (t >>> 3) {
                case 1:
                  m.permission = r.int32();
                  break;
                case 2:
                  m.address = r.string();
                  break;
                default:
                  r.skipType(t & 7);
                  break;
              }
            }
            return m;
          };
          return AccessConfig;
        })();
        v1beta1.Params = (function () {
          function Params(p) {
            if (p)
              for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
          }
          Params.prototype.codeUploadAccess = null;
          Params.prototype.instantiateDefaultPermission = 0;
          Params.prototype.maxWasmCodeSize = $util.Long ? $util.Long.fromBits(0, 0, true) : 0;
          Params.create = function create(properties) {
            return new Params(properties);
          };
          Params.encode = function encode(m, w) {
            if (!w) w = $Writer.create();
            if (m.codeUploadAccess != null && Object.hasOwnProperty.call(m, "codeUploadAccess"))
              $root.wasmd.x.wasmd.v1beta1.AccessConfig.encode(
                m.codeUploadAccess,
                w.uint32(10).fork(),
              ).ldelim();
            if (
              m.instantiateDefaultPermission != null &&
              Object.hasOwnProperty.call(m, "instantiateDefaultPermission")
            )
              w.uint32(16).int32(m.instantiateDefaultPermission);
            if (m.maxWasmCodeSize != null && Object.hasOwnProperty.call(m, "maxWasmCodeSize"))
              w.uint32(24).uint64(m.maxWasmCodeSize);
            return w;
          };
          Params.decode = function decode(r, l) {
            if (!(r instanceof $Reader)) r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l,
              m = new $root.wasmd.x.wasmd.v1beta1.Params();
            while (r.pos < c) {
              var t = r.uint32();
              switch (t >>> 3) {
                case 1:
                  m.codeUploadAccess = $root.wasmd.x.wasmd.v1beta1.AccessConfig.decode(r, r.uint32());
                  break;
                case 2:
                  m.instantiateDefaultPermission = r.int32();
                  break;
                case 3:
                  m.maxWasmCodeSize = r.uint64();
                  break;
                default:
                  r.skipType(t & 7);
                  break;
              }
            }
            return m;
          };
          return Params;
        })();
        v1beta1.CodeInfo = (function () {
          function CodeInfo(p) {
            if (p)
              for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
          }
          CodeInfo.prototype.codeHash = $util.newBuffer([]);
          CodeInfo.prototype.creator = "";
          CodeInfo.prototype.source = "";
          CodeInfo.prototype.builder = "";
          CodeInfo.prototype.instantiateConfig = null;
          CodeInfo.create = function create(properties) {
            return new CodeInfo(properties);
          };
          CodeInfo.encode = function encode(m, w) {
            if (!w) w = $Writer.create();
            if (m.codeHash != null && Object.hasOwnProperty.call(m, "codeHash"))
              w.uint32(10).bytes(m.codeHash);
            if (m.creator != null && Object.hasOwnProperty.call(m, "creator")) w.uint32(18).string(m.creator);
            if (m.source != null && Object.hasOwnProperty.call(m, "source")) w.uint32(26).string(m.source);
            if (m.builder != null && Object.hasOwnProperty.call(m, "builder")) w.uint32(34).string(m.builder);
            if (m.instantiateConfig != null && Object.hasOwnProperty.call(m, "instantiateConfig"))
              $root.wasmd.x.wasmd.v1beta1.AccessConfig.encode(
                m.instantiateConfig,
                w.uint32(42).fork(),
              ).ldelim();
            return w;
          };
          CodeInfo.decode = function decode(r, l) {
            if (!(r instanceof $Reader)) r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l,
              m = new $root.wasmd.x.wasmd.v1beta1.CodeInfo();
            while (r.pos < c) {
              var t = r.uint32();
              switch (t >>> 3) {
                case 1:
                  m.codeHash = r.bytes();
                  break;
                case 2:
                  m.creator = r.string();
                  break;
                case 3:
                  m.source = r.string();
                  break;
                case 4:
                  m.builder = r.string();
                  break;
                case 5:
                  m.instantiateConfig = $root.wasmd.x.wasmd.v1beta1.AccessConfig.decode(r, r.uint32());
                  break;
                default:
                  r.skipType(t & 7);
                  break;
              }
            }
            return m;
          };
          return CodeInfo;
        })();
        v1beta1.ContractInfo = (function () {
          function ContractInfo(p) {
            if (p)
              for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
          }
          ContractInfo.prototype.codeId = $util.Long ? $util.Long.fromBits(0, 0, true) : 0;
          ContractInfo.prototype.creator = "";
          ContractInfo.prototype.admin = "";
          ContractInfo.prototype.label = "";
          ContractInfo.prototype.created = null;
          ContractInfo.create = function create(properties) {
            return new ContractInfo(properties);
          };
          ContractInfo.encode = function encode(m, w) {
            if (!w) w = $Writer.create();
            if (m.codeId != null && Object.hasOwnProperty.call(m, "codeId")) w.uint32(8).uint64(m.codeId);
            if (m.creator != null && Object.hasOwnProperty.call(m, "creator")) w.uint32(18).string(m.creator);
            if (m.admin != null && Object.hasOwnProperty.call(m, "admin")) w.uint32(26).string(m.admin);
            if (m.label != null && Object.hasOwnProperty.call(m, "label")) w.uint32(34).string(m.label);
            if (m.created != null && Object.hasOwnProperty.call(m, "created"))
              $root.wasmd.x.wasmd.v1beta1.AbsoluteTxPosition.encode(m.created, w.uint32(42).fork()).ldelim();
            return w;
          };
          ContractInfo.decode = function decode(r, l) {
            if (!(r instanceof $Reader)) r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l,
              m = new $root.wasmd.x.wasmd.v1beta1.ContractInfo();
            while (r.pos < c) {
              var t = r.uint32();
              switch (t >>> 3) {
                case 1:
                  m.codeId = r.uint64();
                  break;
                case 2:
                  m.creator = r.string();
                  break;
                case 3:
                  m.admin = r.string();
                  break;
                case 4:
                  m.label = r.string();
                  break;
                case 5:
                  m.created = $root.wasmd.x.wasmd.v1beta1.AbsoluteTxPosition.decode(r, r.uint32());
                  break;
                default:
                  r.skipType(t & 7);
                  break;
              }
            }
            return m;
          };
          return ContractInfo;
        })();
        v1beta1.ContractCodeHistoryOperationType = (function () {
          const valuesById = {},
            values = Object.create(valuesById);
          values[(valuesById[0] = "CONTRACT_CODE_HISTORY_OPERATION_TYPE_UNSPECIFIED")] = 0;
          values[(valuesById[1] = "CONTRACT_CODE_HISTORY_OPERATION_TYPE_INIT")] = 1;
          values[(valuesById[2] = "CONTRACT_CODE_HISTORY_OPERATION_TYPE_MIGRATE")] = 2;
          values[(valuesById[3] = "CONTRACT_CODE_HISTORY_OPERATION_TYPE_GENESIS")] = 3;
          return values;
        })();
        v1beta1.ContractCodeHistoryEntry = (function () {
          function ContractCodeHistoryEntry(p) {
            if (p)
              for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
          }
          ContractCodeHistoryEntry.prototype.operation = 0;
          ContractCodeHistoryEntry.prototype.codeId = $util.Long ? $util.Long.fromBits(0, 0, true) : 0;
          ContractCodeHistoryEntry.prototype.updated = null;
          ContractCodeHistoryEntry.prototype.msg = $util.newBuffer([]);
          ContractCodeHistoryEntry.create = function create(properties) {
            return new ContractCodeHistoryEntry(properties);
          };
          ContractCodeHistoryEntry.encode = function encode(m, w) {
            if (!w) w = $Writer.create();
            if (m.operation != null && Object.hasOwnProperty.call(m, "operation"))
              w.uint32(8).int32(m.operation);
            if (m.codeId != null && Object.hasOwnProperty.call(m, "codeId")) w.uint32(16).uint64(m.codeId);
            if (m.updated != null && Object.hasOwnProperty.call(m, "updated"))
              $root.wasmd.x.wasmd.v1beta1.AbsoluteTxPosition.encode(m.updated, w.uint32(26).fork()).ldelim();
            if (m.msg != null && Object.hasOwnProperty.call(m, "msg")) w.uint32(34).bytes(m.msg);
            return w;
          };
          ContractCodeHistoryEntry.decode = function decode(r, l) {
            if (!(r instanceof $Reader)) r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l,
              m = new $root.wasmd.x.wasmd.v1beta1.ContractCodeHistoryEntry();
            while (r.pos < c) {
              var t = r.uint32();
              switch (t >>> 3) {
                case 1:
                  m.operation = r.int32();
                  break;
                case 2:
                  m.codeId = r.uint64();
                  break;
                case 3:
                  m.updated = $root.wasmd.x.wasmd.v1beta1.AbsoluteTxPosition.decode(r, r.uint32());
                  break;
                case 4:
                  m.msg = r.bytes();
                  break;
                default:
                  r.skipType(t & 7);
                  break;
              }
            }
            return m;
          };
          return ContractCodeHistoryEntry;
        })();
        v1beta1.AbsoluteTxPosition = (function () {
          function AbsoluteTxPosition(p) {
            if (p)
              for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
          }
          AbsoluteTxPosition.prototype.blockHeight = $util.Long ? $util.Long.fromBits(0, 0, true) : 0;
          AbsoluteTxPosition.prototype.txIndex = $util.Long ? $util.Long.fromBits(0, 0, true) : 0;
          AbsoluteTxPosition.create = function create(properties) {
            return new AbsoluteTxPosition(properties);
          };
          AbsoluteTxPosition.encode = function encode(m, w) {
            if (!w) w = $Writer.create();
            if (m.blockHeight != null && Object.hasOwnProperty.call(m, "blockHeight"))
              w.uint32(8).uint64(m.blockHeight);
            if (m.txIndex != null && Object.hasOwnProperty.call(m, "txIndex")) w.uint32(16).uint64(m.txIndex);
            return w;
          };
          AbsoluteTxPosition.decode = function decode(r, l) {
            if (!(r instanceof $Reader)) r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l,
              m = new $root.wasmd.x.wasmd.v1beta1.AbsoluteTxPosition();
            while (r.pos < c) {
              var t = r.uint32();
              switch (t >>> 3) {
                case 1:
                  m.blockHeight = r.uint64();
                  break;
                case 2:
                  m.txIndex = r.uint64();
                  break;
                default:
                  r.skipType(t & 7);
                  break;
              }
            }
            return m;
          };
          return AbsoluteTxPosition;
        })();
        v1beta1.Model = (function () {
          function Model(p) {
            if (p)
              for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
          }
          Model.prototype.key = $util.newBuffer([]);
          Model.prototype.value = $util.newBuffer([]);
          Model.create = function create(properties) {
            return new Model(properties);
          };
          Model.encode = function encode(m, w) {
            if (!w) w = $Writer.create();
            if (m.key != null && Object.hasOwnProperty.call(m, "key")) w.uint32(10).bytes(m.key);
            if (m.value != null && Object.hasOwnProperty.call(m, "value")) w.uint32(18).bytes(m.value);
            return w;
          };
          Model.decode = function decode(r, l) {
            if (!(r instanceof $Reader)) r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l,
              m = new $root.wasmd.x.wasmd.v1beta1.Model();
            while (r.pos < c) {
              var t = r.uint32();
              switch (t >>> 3) {
                case 1:
                  m.key = r.bytes();
                  break;
                case 2:
                  m.value = r.bytes();
                  break;
                default:
                  r.skipType(t & 7);
                  break;
              }
            }
            return m;
          };
          return Model;
        })();
        return v1beta1;
      })();
      return wasmd;
    })();
    return x;
  })();
  return wasmd;
})();
exports.cosmos = $root.cosmos = (() => {
  const cosmos = {};
  cosmos.base = (function () {
    const base = {};
    base.query = (function () {
      const query = {};
      query.v1beta1 = (function () {
        const v1beta1 = {};
        v1beta1.PageRequest = (function () {
          function PageRequest(p) {
            if (p)
              for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
          }
          PageRequest.prototype.key = $util.newBuffer([]);
          PageRequest.prototype.offset = $util.Long ? $util.Long.fromBits(0, 0, true) : 0;
          PageRequest.prototype.limit = $util.Long ? $util.Long.fromBits(0, 0, true) : 0;
          PageRequest.prototype.countTotal = false;
          PageRequest.create = function create(properties) {
            return new PageRequest(properties);
          };
          PageRequest.encode = function encode(m, w) {
            if (!w) w = $Writer.create();
            if (m.key != null && Object.hasOwnProperty.call(m, "key")) w.uint32(10).bytes(m.key);
            if (m.offset != null && Object.hasOwnProperty.call(m, "offset")) w.uint32(16).uint64(m.offset);
            if (m.limit != null && Object.hasOwnProperty.call(m, "limit")) w.uint32(24).uint64(m.limit);
            if (m.countTotal != null && Object.hasOwnProperty.call(m, "countTotal"))
              w.uint32(32).bool(m.countTotal);
            return w;
          };
          PageRequest.decode = function decode(r, l) {
            if (!(r instanceof $Reader)) r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l,
              m = new $root.cosmos.base.query.v1beta1.PageRequest();
            while (r.pos < c) {
              var t = r.uint32();
              switch (t >>> 3) {
                case 1:
                  m.key = r.bytes();
                  break;
                case 2:
                  m.offset = r.uint64();
                  break;
                case 3:
                  m.limit = r.uint64();
                  break;
                case 4:
                  m.countTotal = r.bool();
                  break;
                default:
                  r.skipType(t & 7);
                  break;
              }
            }
            return m;
          };
          return PageRequest;
        })();
        v1beta1.PageResponse = (function () {
          function PageResponse(p) {
            if (p)
              for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
          }
          PageResponse.prototype.nextKey = $util.newBuffer([]);
          PageResponse.prototype.total = $util.Long ? $util.Long.fromBits(0, 0, true) : 0;
          PageResponse.create = function create(properties) {
            return new PageResponse(properties);
          };
          PageResponse.encode = function encode(m, w) {
            if (!w) w = $Writer.create();
            if (m.nextKey != null && Object.hasOwnProperty.call(m, "nextKey")) w.uint32(10).bytes(m.nextKey);
            if (m.total != null && Object.hasOwnProperty.call(m, "total")) w.uint32(16).uint64(m.total);
            return w;
          };
          PageResponse.decode = function decode(r, l) {
            if (!(r instanceof $Reader)) r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l,
              m = new $root.cosmos.base.query.v1beta1.PageResponse();
            while (r.pos < c) {
              var t = r.uint32();
              switch (t >>> 3) {
                case 1:
                  m.nextKey = r.bytes();
                  break;
                case 2:
                  m.total = r.uint64();
                  break;
                default:
                  r.skipType(t & 7);
                  break;
              }
            }
            return m;
          };
          return PageResponse;
        })();
        return v1beta1;
      })();
      return query;
    })();
    return base;
  })();
  return cosmos;
})();
module.exports = $root;
