import { Permissions, PermissionsAmino, PermissionsSDKType } from "./types";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet, DeepPartial } from "../../../helpers";
import { GlobalDecoderRegistry } from "../../../registry";
/** MsgAuthorizeCircuitBreaker defines the Msg/AuthorizeCircuitBreaker request type. */
export interface MsgAuthorizeCircuitBreaker {
  /**
   * granter is the granter of the circuit breaker permissions and must have
   * LEVEL_SUPER_ADMIN.
   */
  granter: string;
  /** grantee is the account authorized with the provided permissions. */
  grantee: string;
  /**
   * permissions are the circuit breaker permissions that the grantee receives.
   * These will overwrite any existing permissions. LEVEL_NONE_UNSPECIFIED can
   * be specified to revoke all permissions.
   */
  permissions?: Permissions | undefined;
}
export interface MsgAuthorizeCircuitBreakerProtoMsg {
  typeUrl: "/cosmos.circuit.v1.MsgAuthorizeCircuitBreaker";
  value: Uint8Array;
}
/** MsgAuthorizeCircuitBreaker defines the Msg/AuthorizeCircuitBreaker request type. */
export interface MsgAuthorizeCircuitBreakerAmino {
  /**
   * granter is the granter of the circuit breaker permissions and must have
   * LEVEL_SUPER_ADMIN.
   */
  granter?: string;
  /** grantee is the account authorized with the provided permissions. */
  grantee?: string;
  /**
   * permissions are the circuit breaker permissions that the grantee receives.
   * These will overwrite any existing permissions. LEVEL_NONE_UNSPECIFIED can
   * be specified to revoke all permissions.
   */
  permissions?: PermissionsAmino | undefined;
}
export interface MsgAuthorizeCircuitBreakerAminoMsg {
  type: "cosmos-sdk/MsgAuthorizeCircuitBreaker";
  value: MsgAuthorizeCircuitBreakerAmino;
}
/** MsgAuthorizeCircuitBreaker defines the Msg/AuthorizeCircuitBreaker request type. */
export interface MsgAuthorizeCircuitBreakerSDKType {
  granter: string;
  grantee: string;
  permissions?: PermissionsSDKType | undefined;
}
/** MsgAuthorizeCircuitBreakerResponse defines the Msg/AuthorizeCircuitBreaker response type. */
export interface MsgAuthorizeCircuitBreakerResponse {
  success: boolean;
}
export interface MsgAuthorizeCircuitBreakerResponseProtoMsg {
  typeUrl: "/cosmos.circuit.v1.MsgAuthorizeCircuitBreakerResponse";
  value: Uint8Array;
}
/** MsgAuthorizeCircuitBreakerResponse defines the Msg/AuthorizeCircuitBreaker response type. */
export interface MsgAuthorizeCircuitBreakerResponseAmino {
  success?: boolean;
}
export interface MsgAuthorizeCircuitBreakerResponseAminoMsg {
  type: "cosmos-sdk/MsgAuthorizeCircuitBreakerResponse";
  value: MsgAuthorizeCircuitBreakerResponseAmino;
}
/** MsgAuthorizeCircuitBreakerResponse defines the Msg/AuthorizeCircuitBreaker response type. */
export interface MsgAuthorizeCircuitBreakerResponseSDKType {
  success: boolean;
}
/** MsgTripCircuitBreaker defines the Msg/TripCircuitBreaker request type. */
export interface MsgTripCircuitBreaker {
  /** authority is the account authorized to trip the circuit breaker. */
  authority: string;
  /**
   * msg_type_urls specifies a list of type URLs to immediately stop processing.
   * IF IT IS LEFT EMPTY, ALL MSG PROCESSING WILL STOP IMMEDIATELY.
   * This value is validated against the authority's permissions and if the
   * authority does not have permissions to trip the specified msg type URLs
   * (or all URLs), the operation will fail.
   */
  msgTypeUrls: string[];
}
export interface MsgTripCircuitBreakerProtoMsg {
  typeUrl: "/cosmos.circuit.v1.MsgTripCircuitBreaker";
  value: Uint8Array;
}
/** MsgTripCircuitBreaker defines the Msg/TripCircuitBreaker request type. */
export interface MsgTripCircuitBreakerAmino {
  /** authority is the account authorized to trip the circuit breaker. */
  authority?: string;
  /**
   * msg_type_urls specifies a list of type URLs to immediately stop processing.
   * IF IT IS LEFT EMPTY, ALL MSG PROCESSING WILL STOP IMMEDIATELY.
   * This value is validated against the authority's permissions and if the
   * authority does not have permissions to trip the specified msg type URLs
   * (or all URLs), the operation will fail.
   */
  msg_type_urls?: string[];
}
export interface MsgTripCircuitBreakerAminoMsg {
  type: "cosmos-sdk/MsgTripCircuitBreaker";
  value: MsgTripCircuitBreakerAmino;
}
/** MsgTripCircuitBreaker defines the Msg/TripCircuitBreaker request type. */
export interface MsgTripCircuitBreakerSDKType {
  authority: string;
  msg_type_urls: string[];
}
/** MsgTripCircuitBreakerResponse defines the Msg/TripCircuitBreaker response type. */
export interface MsgTripCircuitBreakerResponse {
  success: boolean;
}
export interface MsgTripCircuitBreakerResponseProtoMsg {
  typeUrl: "/cosmos.circuit.v1.MsgTripCircuitBreakerResponse";
  value: Uint8Array;
}
/** MsgTripCircuitBreakerResponse defines the Msg/TripCircuitBreaker response type. */
export interface MsgTripCircuitBreakerResponseAmino {
  success?: boolean;
}
export interface MsgTripCircuitBreakerResponseAminoMsg {
  type: "cosmos-sdk/MsgTripCircuitBreakerResponse";
  value: MsgTripCircuitBreakerResponseAmino;
}
/** MsgTripCircuitBreakerResponse defines the Msg/TripCircuitBreaker response type. */
export interface MsgTripCircuitBreakerResponseSDKType {
  success: boolean;
}
/** MsgResetCircuitBreaker defines the Msg/ResetCircuitBreaker request type. */
export interface MsgResetCircuitBreaker {
  /** authority is the account authorized to trip or reset the circuit breaker. */
  authority: string;
  /**
   * msg_type_urls specifies a list of Msg type URLs to resume processing. If
   * it is left empty all Msg processing for type URLs that the account is
   * authorized to trip will resume.
   */
  msgTypeUrls: string[];
}
export interface MsgResetCircuitBreakerProtoMsg {
  typeUrl: "/cosmos.circuit.v1.MsgResetCircuitBreaker";
  value: Uint8Array;
}
/** MsgResetCircuitBreaker defines the Msg/ResetCircuitBreaker request type. */
export interface MsgResetCircuitBreakerAmino {
  /** authority is the account authorized to trip or reset the circuit breaker. */
  authority?: string;
  /**
   * msg_type_urls specifies a list of Msg type URLs to resume processing. If
   * it is left empty all Msg processing for type URLs that the account is
   * authorized to trip will resume.
   */
  msg_type_urls?: string[];
}
export interface MsgResetCircuitBreakerAminoMsg {
  type: "cosmos-sdk/MsgResetCircuitBreaker";
  value: MsgResetCircuitBreakerAmino;
}
/** MsgResetCircuitBreaker defines the Msg/ResetCircuitBreaker request type. */
export interface MsgResetCircuitBreakerSDKType {
  authority: string;
  msg_type_urls: string[];
}
/** MsgResetCircuitBreakerResponse defines the Msg/ResetCircuitBreaker response type. */
export interface MsgResetCircuitBreakerResponse {
  success: boolean;
}
export interface MsgResetCircuitBreakerResponseProtoMsg {
  typeUrl: "/cosmos.circuit.v1.MsgResetCircuitBreakerResponse";
  value: Uint8Array;
}
/** MsgResetCircuitBreakerResponse defines the Msg/ResetCircuitBreaker response type. */
export interface MsgResetCircuitBreakerResponseAmino {
  success?: boolean;
}
export interface MsgResetCircuitBreakerResponseAminoMsg {
  type: "cosmos-sdk/MsgResetCircuitBreakerResponse";
  value: MsgResetCircuitBreakerResponseAmino;
}
/** MsgResetCircuitBreakerResponse defines the Msg/ResetCircuitBreaker response type. */
export interface MsgResetCircuitBreakerResponseSDKType {
  success: boolean;
}
function createBaseMsgAuthorizeCircuitBreaker(): MsgAuthorizeCircuitBreaker {
  return {
    granter: "",
    grantee: "",
    permissions: undefined
  };
}
export const MsgAuthorizeCircuitBreaker = {
  typeUrl: "/cosmos.circuit.v1.MsgAuthorizeCircuitBreaker",
  aminoType: "cosmos-sdk/MsgAuthorizeCircuitBreaker",
  is(o: any): o is MsgAuthorizeCircuitBreaker {
    return o && (o.$typeUrl === MsgAuthorizeCircuitBreaker.typeUrl || typeof o.granter === "string" && typeof o.grantee === "string");
  },
  isSDK(o: any): o is MsgAuthorizeCircuitBreakerSDKType {
    return o && (o.$typeUrl === MsgAuthorizeCircuitBreaker.typeUrl || typeof o.granter === "string" && typeof o.grantee === "string");
  },
  isAmino(o: any): o is MsgAuthorizeCircuitBreakerAmino {
    return o && (o.$typeUrl === MsgAuthorizeCircuitBreaker.typeUrl || typeof o.granter === "string" && typeof o.grantee === "string");
  },
  encode(message: MsgAuthorizeCircuitBreaker, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.granter !== "") {
      writer.uint32(10).string(message.granter);
    }
    if (message.grantee !== "") {
      writer.uint32(18).string(message.grantee);
    }
    if (message.permissions !== undefined) {
      Permissions.encode(message.permissions, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgAuthorizeCircuitBreaker {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgAuthorizeCircuitBreaker();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.granter = reader.string();
          break;
        case 2:
          message.grantee = reader.string();
          break;
        case 3:
          message.permissions = Permissions.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgAuthorizeCircuitBreaker {
    return {
      granter: isSet(object.granter) ? String(object.granter) : "",
      grantee: isSet(object.grantee) ? String(object.grantee) : "",
      permissions: isSet(object.permissions) ? Permissions.fromJSON(object.permissions) : undefined
    };
  },
  toJSON(message: MsgAuthorizeCircuitBreaker): unknown {
    const obj: any = {};
    message.granter !== undefined && (obj.granter = message.granter);
    message.grantee !== undefined && (obj.grantee = message.grantee);
    message.permissions !== undefined && (obj.permissions = message.permissions ? Permissions.toJSON(message.permissions) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<MsgAuthorizeCircuitBreaker>): MsgAuthorizeCircuitBreaker {
    const message = createBaseMsgAuthorizeCircuitBreaker();
    message.granter = object.granter ?? "";
    message.grantee = object.grantee ?? "";
    message.permissions = object.permissions !== undefined && object.permissions !== null ? Permissions.fromPartial(object.permissions) : undefined;
    return message;
  },
  fromSDK(object: MsgAuthorizeCircuitBreakerSDKType): MsgAuthorizeCircuitBreaker {
    return {
      granter: object?.granter,
      grantee: object?.grantee,
      permissions: object.permissions ? Permissions.fromSDK(object.permissions) : undefined
    };
  },
  toSDK(message: MsgAuthorizeCircuitBreaker): MsgAuthorizeCircuitBreakerSDKType {
    const obj: any = {};
    obj.granter = message.granter;
    obj.grantee = message.grantee;
    message.permissions !== undefined && (obj.permissions = message.permissions ? Permissions.toSDK(message.permissions) : undefined);
    return obj;
  },
  fromAmino(object: MsgAuthorizeCircuitBreakerAmino): MsgAuthorizeCircuitBreaker {
    const message = createBaseMsgAuthorizeCircuitBreaker();
    if (object.granter !== undefined && object.granter !== null) {
      message.granter = object.granter;
    }
    if (object.grantee !== undefined && object.grantee !== null) {
      message.grantee = object.grantee;
    }
    if (object.permissions !== undefined && object.permissions !== null) {
      message.permissions = Permissions.fromAmino(object.permissions);
    }
    return message;
  },
  toAmino(message: MsgAuthorizeCircuitBreaker): MsgAuthorizeCircuitBreakerAmino {
    const obj: any = {};
    obj.granter = message.granter;
    obj.grantee = message.grantee;
    obj.permissions = message.permissions ? Permissions.toAmino(message.permissions) : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgAuthorizeCircuitBreakerAminoMsg): MsgAuthorizeCircuitBreaker {
    return MsgAuthorizeCircuitBreaker.fromAmino(object.value);
  },
  toAminoMsg(message: MsgAuthorizeCircuitBreaker): MsgAuthorizeCircuitBreakerAminoMsg {
    return {
      type: "cosmos-sdk/MsgAuthorizeCircuitBreaker",
      value: MsgAuthorizeCircuitBreaker.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgAuthorizeCircuitBreakerProtoMsg): MsgAuthorizeCircuitBreaker {
    return MsgAuthorizeCircuitBreaker.decode(message.value);
  },
  toProto(message: MsgAuthorizeCircuitBreaker): Uint8Array {
    return MsgAuthorizeCircuitBreaker.encode(message).finish();
  },
  toProtoMsg(message: MsgAuthorizeCircuitBreaker): MsgAuthorizeCircuitBreakerProtoMsg {
    return {
      typeUrl: "/cosmos.circuit.v1.MsgAuthorizeCircuitBreaker",
      value: MsgAuthorizeCircuitBreaker.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgAuthorizeCircuitBreaker.typeUrl, MsgAuthorizeCircuitBreaker);
GlobalDecoderRegistry.registerAminoProtoMapping(MsgAuthorizeCircuitBreaker.aminoType, MsgAuthorizeCircuitBreaker.typeUrl);
function createBaseMsgAuthorizeCircuitBreakerResponse(): MsgAuthorizeCircuitBreakerResponse {
  return {
    success: false
  };
}
export const MsgAuthorizeCircuitBreakerResponse = {
  typeUrl: "/cosmos.circuit.v1.MsgAuthorizeCircuitBreakerResponse",
  aminoType: "cosmos-sdk/MsgAuthorizeCircuitBreakerResponse",
  is(o: any): o is MsgAuthorizeCircuitBreakerResponse {
    return o && (o.$typeUrl === MsgAuthorizeCircuitBreakerResponse.typeUrl || typeof o.success === "boolean");
  },
  isSDK(o: any): o is MsgAuthorizeCircuitBreakerResponseSDKType {
    return o && (o.$typeUrl === MsgAuthorizeCircuitBreakerResponse.typeUrl || typeof o.success === "boolean");
  },
  isAmino(o: any): o is MsgAuthorizeCircuitBreakerResponseAmino {
    return o && (o.$typeUrl === MsgAuthorizeCircuitBreakerResponse.typeUrl || typeof o.success === "boolean");
  },
  encode(message: MsgAuthorizeCircuitBreakerResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.success === true) {
      writer.uint32(8).bool(message.success);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgAuthorizeCircuitBreakerResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgAuthorizeCircuitBreakerResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.success = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgAuthorizeCircuitBreakerResponse {
    return {
      success: isSet(object.success) ? Boolean(object.success) : false
    };
  },
  toJSON(message: MsgAuthorizeCircuitBreakerResponse): unknown {
    const obj: any = {};
    message.success !== undefined && (obj.success = message.success);
    return obj;
  },
  fromPartial(object: DeepPartial<MsgAuthorizeCircuitBreakerResponse>): MsgAuthorizeCircuitBreakerResponse {
    const message = createBaseMsgAuthorizeCircuitBreakerResponse();
    message.success = object.success ?? false;
    return message;
  },
  fromSDK(object: MsgAuthorizeCircuitBreakerResponseSDKType): MsgAuthorizeCircuitBreakerResponse {
    return {
      success: object?.success
    };
  },
  toSDK(message: MsgAuthorizeCircuitBreakerResponse): MsgAuthorizeCircuitBreakerResponseSDKType {
    const obj: any = {};
    obj.success = message.success;
    return obj;
  },
  fromAmino(object: MsgAuthorizeCircuitBreakerResponseAmino): MsgAuthorizeCircuitBreakerResponse {
    const message = createBaseMsgAuthorizeCircuitBreakerResponse();
    if (object.success !== undefined && object.success !== null) {
      message.success = object.success;
    }
    return message;
  },
  toAmino(message: MsgAuthorizeCircuitBreakerResponse): MsgAuthorizeCircuitBreakerResponseAmino {
    const obj: any = {};
    obj.success = message.success;
    return obj;
  },
  fromAminoMsg(object: MsgAuthorizeCircuitBreakerResponseAminoMsg): MsgAuthorizeCircuitBreakerResponse {
    return MsgAuthorizeCircuitBreakerResponse.fromAmino(object.value);
  },
  toAminoMsg(message: MsgAuthorizeCircuitBreakerResponse): MsgAuthorizeCircuitBreakerResponseAminoMsg {
    return {
      type: "cosmos-sdk/MsgAuthorizeCircuitBreakerResponse",
      value: MsgAuthorizeCircuitBreakerResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgAuthorizeCircuitBreakerResponseProtoMsg): MsgAuthorizeCircuitBreakerResponse {
    return MsgAuthorizeCircuitBreakerResponse.decode(message.value);
  },
  toProto(message: MsgAuthorizeCircuitBreakerResponse): Uint8Array {
    return MsgAuthorizeCircuitBreakerResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgAuthorizeCircuitBreakerResponse): MsgAuthorizeCircuitBreakerResponseProtoMsg {
    return {
      typeUrl: "/cosmos.circuit.v1.MsgAuthorizeCircuitBreakerResponse",
      value: MsgAuthorizeCircuitBreakerResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgAuthorizeCircuitBreakerResponse.typeUrl, MsgAuthorizeCircuitBreakerResponse);
GlobalDecoderRegistry.registerAminoProtoMapping(MsgAuthorizeCircuitBreakerResponse.aminoType, MsgAuthorizeCircuitBreakerResponse.typeUrl);
function createBaseMsgTripCircuitBreaker(): MsgTripCircuitBreaker {
  return {
    authority: "",
    msgTypeUrls: []
  };
}
export const MsgTripCircuitBreaker = {
  typeUrl: "/cosmos.circuit.v1.MsgTripCircuitBreaker",
  aminoType: "cosmos-sdk/MsgTripCircuitBreaker",
  is(o: any): o is MsgTripCircuitBreaker {
    return o && (o.$typeUrl === MsgTripCircuitBreaker.typeUrl || typeof o.authority === "string" && Array.isArray(o.msgTypeUrls) && (!o.msgTypeUrls.length || typeof o.msgTypeUrls[0] === "string"));
  },
  isSDK(o: any): o is MsgTripCircuitBreakerSDKType {
    return o && (o.$typeUrl === MsgTripCircuitBreaker.typeUrl || typeof o.authority === "string" && Array.isArray(o.msg_type_urls) && (!o.msg_type_urls.length || typeof o.msg_type_urls[0] === "string"));
  },
  isAmino(o: any): o is MsgTripCircuitBreakerAmino {
    return o && (o.$typeUrl === MsgTripCircuitBreaker.typeUrl || typeof o.authority === "string" && Array.isArray(o.msg_type_urls) && (!o.msg_type_urls.length || typeof o.msg_type_urls[0] === "string"));
  },
  encode(message: MsgTripCircuitBreaker, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    for (const v of message.msgTypeUrls) {
      writer.uint32(18).string(v!);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgTripCircuitBreaker {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgTripCircuitBreaker();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.authority = reader.string();
          break;
        case 2:
          message.msgTypeUrls.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgTripCircuitBreaker {
    return {
      authority: isSet(object.authority) ? String(object.authority) : "",
      msgTypeUrls: Array.isArray(object?.msgTypeUrls) ? object.msgTypeUrls.map((e: any) => String(e)) : []
    };
  },
  toJSON(message: MsgTripCircuitBreaker): unknown {
    const obj: any = {};
    message.authority !== undefined && (obj.authority = message.authority);
    if (message.msgTypeUrls) {
      obj.msgTypeUrls = message.msgTypeUrls.map(e => e);
    } else {
      obj.msgTypeUrls = [];
    }
    return obj;
  },
  fromPartial(object: DeepPartial<MsgTripCircuitBreaker>): MsgTripCircuitBreaker {
    const message = createBaseMsgTripCircuitBreaker();
    message.authority = object.authority ?? "";
    message.msgTypeUrls = object.msgTypeUrls?.map(e => e) || [];
    return message;
  },
  fromSDK(object: MsgTripCircuitBreakerSDKType): MsgTripCircuitBreaker {
    return {
      authority: object?.authority,
      msgTypeUrls: Array.isArray(object?.msg_type_urls) ? object.msg_type_urls.map((e: any) => e) : []
    };
  },
  toSDK(message: MsgTripCircuitBreaker): MsgTripCircuitBreakerSDKType {
    const obj: any = {};
    obj.authority = message.authority;
    if (message.msgTypeUrls) {
      obj.msg_type_urls = message.msgTypeUrls.map(e => e);
    } else {
      obj.msg_type_urls = [];
    }
    return obj;
  },
  fromAmino(object: MsgTripCircuitBreakerAmino): MsgTripCircuitBreaker {
    const message = createBaseMsgTripCircuitBreaker();
    if (object.authority !== undefined && object.authority !== null) {
      message.authority = object.authority;
    }
    message.msgTypeUrls = object.msg_type_urls?.map(e => e) || [];
    return message;
  },
  toAmino(message: MsgTripCircuitBreaker): MsgTripCircuitBreakerAmino {
    const obj: any = {};
    obj.authority = message.authority;
    if (message.msgTypeUrls) {
      obj.msg_type_urls = message.msgTypeUrls.map(e => e);
    } else {
      obj.msg_type_urls = [];
    }
    return obj;
  },
  fromAminoMsg(object: MsgTripCircuitBreakerAminoMsg): MsgTripCircuitBreaker {
    return MsgTripCircuitBreaker.fromAmino(object.value);
  },
  toAminoMsg(message: MsgTripCircuitBreaker): MsgTripCircuitBreakerAminoMsg {
    return {
      type: "cosmos-sdk/MsgTripCircuitBreaker",
      value: MsgTripCircuitBreaker.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgTripCircuitBreakerProtoMsg): MsgTripCircuitBreaker {
    return MsgTripCircuitBreaker.decode(message.value);
  },
  toProto(message: MsgTripCircuitBreaker): Uint8Array {
    return MsgTripCircuitBreaker.encode(message).finish();
  },
  toProtoMsg(message: MsgTripCircuitBreaker): MsgTripCircuitBreakerProtoMsg {
    return {
      typeUrl: "/cosmos.circuit.v1.MsgTripCircuitBreaker",
      value: MsgTripCircuitBreaker.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgTripCircuitBreaker.typeUrl, MsgTripCircuitBreaker);
GlobalDecoderRegistry.registerAminoProtoMapping(MsgTripCircuitBreaker.aminoType, MsgTripCircuitBreaker.typeUrl);
function createBaseMsgTripCircuitBreakerResponse(): MsgTripCircuitBreakerResponse {
  return {
    success: false
  };
}
export const MsgTripCircuitBreakerResponse = {
  typeUrl: "/cosmos.circuit.v1.MsgTripCircuitBreakerResponse",
  aminoType: "cosmos-sdk/MsgTripCircuitBreakerResponse",
  is(o: any): o is MsgTripCircuitBreakerResponse {
    return o && (o.$typeUrl === MsgTripCircuitBreakerResponse.typeUrl || typeof o.success === "boolean");
  },
  isSDK(o: any): o is MsgTripCircuitBreakerResponseSDKType {
    return o && (o.$typeUrl === MsgTripCircuitBreakerResponse.typeUrl || typeof o.success === "boolean");
  },
  isAmino(o: any): o is MsgTripCircuitBreakerResponseAmino {
    return o && (o.$typeUrl === MsgTripCircuitBreakerResponse.typeUrl || typeof o.success === "boolean");
  },
  encode(message: MsgTripCircuitBreakerResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.success === true) {
      writer.uint32(8).bool(message.success);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgTripCircuitBreakerResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgTripCircuitBreakerResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.success = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgTripCircuitBreakerResponse {
    return {
      success: isSet(object.success) ? Boolean(object.success) : false
    };
  },
  toJSON(message: MsgTripCircuitBreakerResponse): unknown {
    const obj: any = {};
    message.success !== undefined && (obj.success = message.success);
    return obj;
  },
  fromPartial(object: DeepPartial<MsgTripCircuitBreakerResponse>): MsgTripCircuitBreakerResponse {
    const message = createBaseMsgTripCircuitBreakerResponse();
    message.success = object.success ?? false;
    return message;
  },
  fromSDK(object: MsgTripCircuitBreakerResponseSDKType): MsgTripCircuitBreakerResponse {
    return {
      success: object?.success
    };
  },
  toSDK(message: MsgTripCircuitBreakerResponse): MsgTripCircuitBreakerResponseSDKType {
    const obj: any = {};
    obj.success = message.success;
    return obj;
  },
  fromAmino(object: MsgTripCircuitBreakerResponseAmino): MsgTripCircuitBreakerResponse {
    const message = createBaseMsgTripCircuitBreakerResponse();
    if (object.success !== undefined && object.success !== null) {
      message.success = object.success;
    }
    return message;
  },
  toAmino(message: MsgTripCircuitBreakerResponse): MsgTripCircuitBreakerResponseAmino {
    const obj: any = {};
    obj.success = message.success;
    return obj;
  },
  fromAminoMsg(object: MsgTripCircuitBreakerResponseAminoMsg): MsgTripCircuitBreakerResponse {
    return MsgTripCircuitBreakerResponse.fromAmino(object.value);
  },
  toAminoMsg(message: MsgTripCircuitBreakerResponse): MsgTripCircuitBreakerResponseAminoMsg {
    return {
      type: "cosmos-sdk/MsgTripCircuitBreakerResponse",
      value: MsgTripCircuitBreakerResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgTripCircuitBreakerResponseProtoMsg): MsgTripCircuitBreakerResponse {
    return MsgTripCircuitBreakerResponse.decode(message.value);
  },
  toProto(message: MsgTripCircuitBreakerResponse): Uint8Array {
    return MsgTripCircuitBreakerResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgTripCircuitBreakerResponse): MsgTripCircuitBreakerResponseProtoMsg {
    return {
      typeUrl: "/cosmos.circuit.v1.MsgTripCircuitBreakerResponse",
      value: MsgTripCircuitBreakerResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgTripCircuitBreakerResponse.typeUrl, MsgTripCircuitBreakerResponse);
GlobalDecoderRegistry.registerAminoProtoMapping(MsgTripCircuitBreakerResponse.aminoType, MsgTripCircuitBreakerResponse.typeUrl);
function createBaseMsgResetCircuitBreaker(): MsgResetCircuitBreaker {
  return {
    authority: "",
    msgTypeUrls: []
  };
}
export const MsgResetCircuitBreaker = {
  typeUrl: "/cosmos.circuit.v1.MsgResetCircuitBreaker",
  aminoType: "cosmos-sdk/MsgResetCircuitBreaker",
  is(o: any): o is MsgResetCircuitBreaker {
    return o && (o.$typeUrl === MsgResetCircuitBreaker.typeUrl || typeof o.authority === "string" && Array.isArray(o.msgTypeUrls) && (!o.msgTypeUrls.length || typeof o.msgTypeUrls[0] === "string"));
  },
  isSDK(o: any): o is MsgResetCircuitBreakerSDKType {
    return o && (o.$typeUrl === MsgResetCircuitBreaker.typeUrl || typeof o.authority === "string" && Array.isArray(o.msg_type_urls) && (!o.msg_type_urls.length || typeof o.msg_type_urls[0] === "string"));
  },
  isAmino(o: any): o is MsgResetCircuitBreakerAmino {
    return o && (o.$typeUrl === MsgResetCircuitBreaker.typeUrl || typeof o.authority === "string" && Array.isArray(o.msg_type_urls) && (!o.msg_type_urls.length || typeof o.msg_type_urls[0] === "string"));
  },
  encode(message: MsgResetCircuitBreaker, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    for (const v of message.msgTypeUrls) {
      writer.uint32(26).string(v!);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgResetCircuitBreaker {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgResetCircuitBreaker();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.authority = reader.string();
          break;
        case 3:
          message.msgTypeUrls.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgResetCircuitBreaker {
    return {
      authority: isSet(object.authority) ? String(object.authority) : "",
      msgTypeUrls: Array.isArray(object?.msgTypeUrls) ? object.msgTypeUrls.map((e: any) => String(e)) : []
    };
  },
  toJSON(message: MsgResetCircuitBreaker): unknown {
    const obj: any = {};
    message.authority !== undefined && (obj.authority = message.authority);
    if (message.msgTypeUrls) {
      obj.msgTypeUrls = message.msgTypeUrls.map(e => e);
    } else {
      obj.msgTypeUrls = [];
    }
    return obj;
  },
  fromPartial(object: DeepPartial<MsgResetCircuitBreaker>): MsgResetCircuitBreaker {
    const message = createBaseMsgResetCircuitBreaker();
    message.authority = object.authority ?? "";
    message.msgTypeUrls = object.msgTypeUrls?.map(e => e) || [];
    return message;
  },
  fromSDK(object: MsgResetCircuitBreakerSDKType): MsgResetCircuitBreaker {
    return {
      authority: object?.authority,
      msgTypeUrls: Array.isArray(object?.msg_type_urls) ? object.msg_type_urls.map((e: any) => e) : []
    };
  },
  toSDK(message: MsgResetCircuitBreaker): MsgResetCircuitBreakerSDKType {
    const obj: any = {};
    obj.authority = message.authority;
    if (message.msgTypeUrls) {
      obj.msg_type_urls = message.msgTypeUrls.map(e => e);
    } else {
      obj.msg_type_urls = [];
    }
    return obj;
  },
  fromAmino(object: MsgResetCircuitBreakerAmino): MsgResetCircuitBreaker {
    const message = createBaseMsgResetCircuitBreaker();
    if (object.authority !== undefined && object.authority !== null) {
      message.authority = object.authority;
    }
    message.msgTypeUrls = object.msg_type_urls?.map(e => e) || [];
    return message;
  },
  toAmino(message: MsgResetCircuitBreaker): MsgResetCircuitBreakerAmino {
    const obj: any = {};
    obj.authority = message.authority;
    if (message.msgTypeUrls) {
      obj.msg_type_urls = message.msgTypeUrls.map(e => e);
    } else {
      obj.msg_type_urls = [];
    }
    return obj;
  },
  fromAminoMsg(object: MsgResetCircuitBreakerAminoMsg): MsgResetCircuitBreaker {
    return MsgResetCircuitBreaker.fromAmino(object.value);
  },
  toAminoMsg(message: MsgResetCircuitBreaker): MsgResetCircuitBreakerAminoMsg {
    return {
      type: "cosmos-sdk/MsgResetCircuitBreaker",
      value: MsgResetCircuitBreaker.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgResetCircuitBreakerProtoMsg): MsgResetCircuitBreaker {
    return MsgResetCircuitBreaker.decode(message.value);
  },
  toProto(message: MsgResetCircuitBreaker): Uint8Array {
    return MsgResetCircuitBreaker.encode(message).finish();
  },
  toProtoMsg(message: MsgResetCircuitBreaker): MsgResetCircuitBreakerProtoMsg {
    return {
      typeUrl: "/cosmos.circuit.v1.MsgResetCircuitBreaker",
      value: MsgResetCircuitBreaker.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgResetCircuitBreaker.typeUrl, MsgResetCircuitBreaker);
GlobalDecoderRegistry.registerAminoProtoMapping(MsgResetCircuitBreaker.aminoType, MsgResetCircuitBreaker.typeUrl);
function createBaseMsgResetCircuitBreakerResponse(): MsgResetCircuitBreakerResponse {
  return {
    success: false
  };
}
export const MsgResetCircuitBreakerResponse = {
  typeUrl: "/cosmos.circuit.v1.MsgResetCircuitBreakerResponse",
  aminoType: "cosmos-sdk/MsgResetCircuitBreakerResponse",
  is(o: any): o is MsgResetCircuitBreakerResponse {
    return o && (o.$typeUrl === MsgResetCircuitBreakerResponse.typeUrl || typeof o.success === "boolean");
  },
  isSDK(o: any): o is MsgResetCircuitBreakerResponseSDKType {
    return o && (o.$typeUrl === MsgResetCircuitBreakerResponse.typeUrl || typeof o.success === "boolean");
  },
  isAmino(o: any): o is MsgResetCircuitBreakerResponseAmino {
    return o && (o.$typeUrl === MsgResetCircuitBreakerResponse.typeUrl || typeof o.success === "boolean");
  },
  encode(message: MsgResetCircuitBreakerResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.success === true) {
      writer.uint32(8).bool(message.success);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgResetCircuitBreakerResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgResetCircuitBreakerResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.success = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgResetCircuitBreakerResponse {
    return {
      success: isSet(object.success) ? Boolean(object.success) : false
    };
  },
  toJSON(message: MsgResetCircuitBreakerResponse): unknown {
    const obj: any = {};
    message.success !== undefined && (obj.success = message.success);
    return obj;
  },
  fromPartial(object: DeepPartial<MsgResetCircuitBreakerResponse>): MsgResetCircuitBreakerResponse {
    const message = createBaseMsgResetCircuitBreakerResponse();
    message.success = object.success ?? false;
    return message;
  },
  fromSDK(object: MsgResetCircuitBreakerResponseSDKType): MsgResetCircuitBreakerResponse {
    return {
      success: object?.success
    };
  },
  toSDK(message: MsgResetCircuitBreakerResponse): MsgResetCircuitBreakerResponseSDKType {
    const obj: any = {};
    obj.success = message.success;
    return obj;
  },
  fromAmino(object: MsgResetCircuitBreakerResponseAmino): MsgResetCircuitBreakerResponse {
    const message = createBaseMsgResetCircuitBreakerResponse();
    if (object.success !== undefined && object.success !== null) {
      message.success = object.success;
    }
    return message;
  },
  toAmino(message: MsgResetCircuitBreakerResponse): MsgResetCircuitBreakerResponseAmino {
    const obj: any = {};
    obj.success = message.success;
    return obj;
  },
  fromAminoMsg(object: MsgResetCircuitBreakerResponseAminoMsg): MsgResetCircuitBreakerResponse {
    return MsgResetCircuitBreakerResponse.fromAmino(object.value);
  },
  toAminoMsg(message: MsgResetCircuitBreakerResponse): MsgResetCircuitBreakerResponseAminoMsg {
    return {
      type: "cosmos-sdk/MsgResetCircuitBreakerResponse",
      value: MsgResetCircuitBreakerResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgResetCircuitBreakerResponseProtoMsg): MsgResetCircuitBreakerResponse {
    return MsgResetCircuitBreakerResponse.decode(message.value);
  },
  toProto(message: MsgResetCircuitBreakerResponse): Uint8Array {
    return MsgResetCircuitBreakerResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgResetCircuitBreakerResponse): MsgResetCircuitBreakerResponseProtoMsg {
    return {
      typeUrl: "/cosmos.circuit.v1.MsgResetCircuitBreakerResponse",
      value: MsgResetCircuitBreakerResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgResetCircuitBreakerResponse.typeUrl, MsgResetCircuitBreakerResponse);
GlobalDecoderRegistry.registerAminoProtoMapping(MsgResetCircuitBreakerResponse.aminoType, MsgResetCircuitBreakerResponse.typeUrl);