import { Params, ParamsAmino, ParamsSDKType } from "./controller";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial } from "../../../../../helpers";
/** QueryInterchainAccountRequest is the request type for the Query/InterchainAccount RPC method. */
export interface QueryInterchainAccountRequest {
  owner: string;
  connectionId: string;
}
export interface QueryInterchainAccountRequestProtoMsg {
  typeUrl: "/ibc.applications.interchain_accounts.controller.v1.QueryInterchainAccountRequest";
  value: Uint8Array;
}
/** QueryInterchainAccountRequest is the request type for the Query/InterchainAccount RPC method. */
export interface QueryInterchainAccountRequestAmino {
  owner: string;
  connection_id: string;
}
export interface QueryInterchainAccountRequestAminoMsg {
  type: "cosmos-sdk/QueryInterchainAccountRequest";
  value: QueryInterchainAccountRequestAmino;
}
/** QueryInterchainAccountRequest is the request type for the Query/InterchainAccount RPC method. */
export interface QueryInterchainAccountRequestSDKType {
  owner: string;
  connection_id: string;
}
/** QueryInterchainAccountResponse the response type for the Query/InterchainAccount RPC method. */
export interface QueryInterchainAccountResponse {
  address: string;
}
export interface QueryInterchainAccountResponseProtoMsg {
  typeUrl: "/ibc.applications.interchain_accounts.controller.v1.QueryInterchainAccountResponse";
  value: Uint8Array;
}
/** QueryInterchainAccountResponse the response type for the Query/InterchainAccount RPC method. */
export interface QueryInterchainAccountResponseAmino {
  address: string;
}
export interface QueryInterchainAccountResponseAminoMsg {
  type: "cosmos-sdk/QueryInterchainAccountResponse";
  value: QueryInterchainAccountResponseAmino;
}
/** QueryInterchainAccountResponse the response type for the Query/InterchainAccount RPC method. */
export interface QueryInterchainAccountResponseSDKType {
  address: string;
}
/** QueryParamsRequest is the request type for the Query/Params RPC method. */
export interface QueryParamsRequest {}
export interface QueryParamsRequestProtoMsg {
  typeUrl: "/ibc.applications.interchain_accounts.controller.v1.QueryParamsRequest";
  value: Uint8Array;
}
/** QueryParamsRequest is the request type for the Query/Params RPC method. */
export interface QueryParamsRequestAmino {}
export interface QueryParamsRequestAminoMsg {
  type: "cosmos-sdk/QueryParamsRequest";
  value: QueryParamsRequestAmino;
}
/** QueryParamsRequest is the request type for the Query/Params RPC method. */
export interface QueryParamsRequestSDKType {}
/** QueryParamsResponse is the response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
  /** params defines the parameters of the module. */
  params: Params;
}
export interface QueryParamsResponseProtoMsg {
  typeUrl: "/ibc.applications.interchain_accounts.controller.v1.QueryParamsResponse";
  value: Uint8Array;
}
/** QueryParamsResponse is the response type for the Query/Params RPC method. */
export interface QueryParamsResponseAmino {
  /** params defines the parameters of the module. */
  params?: ParamsAmino;
}
export interface QueryParamsResponseAminoMsg {
  type: "cosmos-sdk/QueryParamsResponse";
  value: QueryParamsResponseAmino;
}
/** QueryParamsResponse is the response type for the Query/Params RPC method. */
export interface QueryParamsResponseSDKType {
  params: ParamsSDKType;
}
function createBaseQueryInterchainAccountRequest(): QueryInterchainAccountRequest {
  return {
    owner: "",
    connectionId: ""
  };
}
export const QueryInterchainAccountRequest = {
  typeUrl: "/ibc.applications.interchain_accounts.controller.v1.QueryInterchainAccountRequest",
  aminoType: "cosmos-sdk/QueryInterchainAccountRequest",
  encode(message: QueryInterchainAccountRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.owner !== "") {
      writer.uint32(10).string(message.owner);
    }
    if (message.connectionId !== "") {
      writer.uint32(18).string(message.connectionId);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryInterchainAccountRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryInterchainAccountRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.owner = reader.string();
          break;
        case 2:
          message.connectionId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryInterchainAccountRequest>): QueryInterchainAccountRequest {
    const message = createBaseQueryInterchainAccountRequest();
    message.owner = object.owner ?? "";
    message.connectionId = object.connectionId ?? "";
    return message;
  },
  fromAmino(object: QueryInterchainAccountRequestAmino): QueryInterchainAccountRequest {
    return {
      owner: object.owner,
      connectionId: object.connection_id
    };
  },
  toAmino(message: QueryInterchainAccountRequest): QueryInterchainAccountRequestAmino {
    const obj: any = {};
    obj.owner = message.owner;
    obj.connection_id = message.connectionId;
    return obj;
  },
  fromAminoMsg(object: QueryInterchainAccountRequestAminoMsg): QueryInterchainAccountRequest {
    return QueryInterchainAccountRequest.fromAmino(object.value);
  },
  toAminoMsg(message: QueryInterchainAccountRequest): QueryInterchainAccountRequestAminoMsg {
    return {
      type: "cosmos-sdk/QueryInterchainAccountRequest",
      value: QueryInterchainAccountRequest.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryInterchainAccountRequestProtoMsg): QueryInterchainAccountRequest {
    return QueryInterchainAccountRequest.decode(message.value);
  },
  toProto(message: QueryInterchainAccountRequest): Uint8Array {
    return QueryInterchainAccountRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryInterchainAccountRequest): QueryInterchainAccountRequestProtoMsg {
    return {
      typeUrl: "/ibc.applications.interchain_accounts.controller.v1.QueryInterchainAccountRequest",
      value: QueryInterchainAccountRequest.encode(message).finish()
    };
  }
};
function createBaseQueryInterchainAccountResponse(): QueryInterchainAccountResponse {
  return {
    address: ""
  };
}
export const QueryInterchainAccountResponse = {
  typeUrl: "/ibc.applications.interchain_accounts.controller.v1.QueryInterchainAccountResponse",
  aminoType: "cosmos-sdk/QueryInterchainAccountResponse",
  encode(message: QueryInterchainAccountResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryInterchainAccountResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryInterchainAccountResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryInterchainAccountResponse>): QueryInterchainAccountResponse {
    const message = createBaseQueryInterchainAccountResponse();
    message.address = object.address ?? "";
    return message;
  },
  fromAmino(object: QueryInterchainAccountResponseAmino): QueryInterchainAccountResponse {
    return {
      address: object.address
    };
  },
  toAmino(message: QueryInterchainAccountResponse): QueryInterchainAccountResponseAmino {
    const obj: any = {};
    obj.address = message.address;
    return obj;
  },
  fromAminoMsg(object: QueryInterchainAccountResponseAminoMsg): QueryInterchainAccountResponse {
    return QueryInterchainAccountResponse.fromAmino(object.value);
  },
  toAminoMsg(message: QueryInterchainAccountResponse): QueryInterchainAccountResponseAminoMsg {
    return {
      type: "cosmos-sdk/QueryInterchainAccountResponse",
      value: QueryInterchainAccountResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryInterchainAccountResponseProtoMsg): QueryInterchainAccountResponse {
    return QueryInterchainAccountResponse.decode(message.value);
  },
  toProto(message: QueryInterchainAccountResponse): Uint8Array {
    return QueryInterchainAccountResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryInterchainAccountResponse): QueryInterchainAccountResponseProtoMsg {
    return {
      typeUrl: "/ibc.applications.interchain_accounts.controller.v1.QueryInterchainAccountResponse",
      value: QueryInterchainAccountResponse.encode(message).finish()
    };
  }
};
function createBaseQueryParamsRequest(): QueryParamsRequest {
  return {};
}
export const QueryParamsRequest = {
  typeUrl: "/ibc.applications.interchain_accounts.controller.v1.QueryParamsRequest",
  aminoType: "cosmos-sdk/QueryParamsRequest",
  encode(_: QueryParamsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryParamsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryParamsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(_: DeepPartial<QueryParamsRequest>): QueryParamsRequest {
    const message = createBaseQueryParamsRequest();
    return message;
  },
  fromAmino(_: QueryParamsRequestAmino): QueryParamsRequest {
    return {};
  },
  toAmino(_: QueryParamsRequest): QueryParamsRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: QueryParamsRequestAminoMsg): QueryParamsRequest {
    return QueryParamsRequest.fromAmino(object.value);
  },
  toAminoMsg(message: QueryParamsRequest): QueryParamsRequestAminoMsg {
    return {
      type: "cosmos-sdk/QueryParamsRequest",
      value: QueryParamsRequest.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryParamsRequestProtoMsg): QueryParamsRequest {
    return QueryParamsRequest.decode(message.value);
  },
  toProto(message: QueryParamsRequest): Uint8Array {
    return QueryParamsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryParamsRequest): QueryParamsRequestProtoMsg {
    return {
      typeUrl: "/ibc.applications.interchain_accounts.controller.v1.QueryParamsRequest",
      value: QueryParamsRequest.encode(message).finish()
    };
  }
};
function createBaseQueryParamsResponse(): QueryParamsResponse {
  return {
    params: Params.fromPartial({})
  };
}
export const QueryParamsResponse = {
  typeUrl: "/ibc.applications.interchain_accounts.controller.v1.QueryParamsResponse",
  aminoType: "cosmos-sdk/QueryParamsResponse",
  encode(message: QueryParamsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryParamsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryParamsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryParamsResponse>): QueryParamsResponse {
    const message = createBaseQueryParamsResponse();
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    return message;
  },
  fromAmino(object: QueryParamsResponseAmino): QueryParamsResponse {
    return {
      params: object?.params ? Params.fromAmino(object.params) : undefined
    };
  },
  toAmino(message: QueryParamsResponse): QueryParamsResponseAmino {
    const obj: any = {};
    obj.params = message.params ? Params.toAmino(message.params) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryParamsResponseAminoMsg): QueryParamsResponse {
    return QueryParamsResponse.fromAmino(object.value);
  },
  toAminoMsg(message: QueryParamsResponse): QueryParamsResponseAminoMsg {
    return {
      type: "cosmos-sdk/QueryParamsResponse",
      value: QueryParamsResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryParamsResponseProtoMsg): QueryParamsResponse {
    return QueryParamsResponse.decode(message.value);
  },
  toProto(message: QueryParamsResponse): Uint8Array {
    return QueryParamsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryParamsResponse): QueryParamsResponseProtoMsg {
    return {
      typeUrl: "/ibc.applications.interchain_accounts.controller.v1.QueryParamsResponse",
      value: QueryParamsResponse.encode(message).finish()
    };
  }
};