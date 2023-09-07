import { Long, DeepPartial } from "../../../../helpers";
import * as _m0 from "protobufjs/minimal";
/** Module is the config object of the gov module. */
export interface Module {
  /**
   * max_metadata_len defines the maximum proposal metadata length.
   * Defaults to 255 if not explicitly set.
   */
  maxMetadataLen: Long;
  /** authority defines the custom module authority. If not set, defaults to the governance module. */
  authority: string;
}
export interface ModuleProtoMsg {
  typeUrl: "/cosmos.gov.module.v1.Module";
  value: Uint8Array;
}
/** Module is the config object of the gov module. */
export interface ModuleAmino {
  /**
   * max_metadata_len defines the maximum proposal metadata length.
   * Defaults to 255 if not explicitly set.
   */
  max_metadata_len: string;
  /** authority defines the custom module authority. If not set, defaults to the governance module. */
  authority: string;
}
export interface ModuleAminoMsg {
  type: "cosmos-sdk/Module";
  value: ModuleAmino;
}
/** Module is the config object of the gov module. */
export interface ModuleSDKType {
  max_metadata_len: Long;
  authority: string;
}
function createBaseModule(): Module {
  return {
    maxMetadataLen: Long.UZERO,
    authority: ""
  };
}
export const Module = {
  typeUrl: "/cosmos.gov.module.v1.Module",
  encode(message: Module, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.maxMetadataLen.isZero()) {
      writer.uint32(8).uint64(message.maxMetadataLen);
    }
    if (message.authority !== "") {
      writer.uint32(18).string(message.authority);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): Module {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseModule();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.maxMetadataLen = (reader.uint64() as Long);
          break;
        case 2:
          message.authority = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<Module>): Module {
    const message = createBaseModule();
    message.maxMetadataLen = object.maxMetadataLen !== undefined && object.maxMetadataLen !== null ? Long.fromValue(object.maxMetadataLen) : Long.UZERO;
    message.authority = object.authority ?? "";
    return message;
  },
  fromAmino(object: ModuleAmino): Module {
    return {
      maxMetadataLen: Long.fromString(object.max_metadata_len),
      authority: object.authority
    };
  },
  toAmino(message: Module): ModuleAmino {
    const obj: any = {};
    obj.max_metadata_len = message.maxMetadataLen ? message.maxMetadataLen.toString() : undefined;
    obj.authority = message.authority;
    return obj;
  },
  fromAminoMsg(object: ModuleAminoMsg): Module {
    return Module.fromAmino(object.value);
  },
  toAminoMsg(message: Module): ModuleAminoMsg {
    return {
      type: "cosmos-sdk/Module",
      value: Module.toAmino(message)
    };
  },
  fromProtoMsg(message: ModuleProtoMsg): Module {
    return Module.decode(message.value);
  },
  toProto(message: Module): Uint8Array {
    return Module.encode(message).finish();
  },
  toProtoMsg(message: Module): ModuleProtoMsg {
    return {
      typeUrl: "/cosmos.gov.module.v1.Module",
      value: Module.encode(message).finish()
    };
  }
};