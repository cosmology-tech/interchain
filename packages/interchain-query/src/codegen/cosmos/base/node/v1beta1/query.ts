import { Timestamp } from "../../../../google/protobuf/timestamp";
import { BinaryReader, BinaryWriter } from "../../../../binary";
import { DeepPartial, isSet, toTimestamp, fromTimestamp, bytesFromBase64, base64FromBytes } from "../../../../helpers";
import { GlobalDecoderRegistry } from "../../../../registry";
/** ConfigRequest defines the request structure for the Config gRPC query. */
export interface ConfigRequest {}
export interface ConfigRequestProtoMsg {
  typeUrl: "/cosmos.base.node.v1beta1.ConfigRequest";
  value: Uint8Array;
}
/** ConfigRequest defines the request structure for the Config gRPC query. */
export interface ConfigRequestAmino {}
export interface ConfigRequestAminoMsg {
  type: "cosmos-sdk/ConfigRequest";
  value: ConfigRequestAmino;
}
/** ConfigRequest defines the request structure for the Config gRPC query. */
export interface ConfigRequestSDKType {}
/** ConfigResponse defines the response structure for the Config gRPC query. */
export interface ConfigResponse {
  minimumGasPrice: string;
  /** pruning settings */
  pruningKeepRecent: string;
  pruningInterval: string;
}
export interface ConfigResponseProtoMsg {
  typeUrl: "/cosmos.base.node.v1beta1.ConfigResponse";
  value: Uint8Array;
}
/** ConfigResponse defines the response structure for the Config gRPC query. */
export interface ConfigResponseAmino {
  minimum_gas_price?: string;
  /** pruning settings */
  pruning_keep_recent?: string;
  pruning_interval?: string;
}
export interface ConfigResponseAminoMsg {
  type: "cosmos-sdk/ConfigResponse";
  value: ConfigResponseAmino;
}
/** ConfigResponse defines the response structure for the Config gRPC query. */
export interface ConfigResponseSDKType {
  minimum_gas_price: string;
  pruning_keep_recent: string;
  pruning_interval: string;
}
/** StateRequest defines the request structure for the status of a node. */
export interface StatusRequest {}
export interface StatusRequestProtoMsg {
  typeUrl: "/cosmos.base.node.v1beta1.StatusRequest";
  value: Uint8Array;
}
/** StateRequest defines the request structure for the status of a node. */
export interface StatusRequestAmino {}
export interface StatusRequestAminoMsg {
  type: "cosmos-sdk/StatusRequest";
  value: StatusRequestAmino;
}
/** StateRequest defines the request structure for the status of a node. */
export interface StatusRequestSDKType {}
/** StateResponse defines the response structure for the status of a node. */
export interface StatusResponse {
  /** earliest block height available in the store */
  earliestStoreHeight: bigint;
  /** current block height */
  height: bigint;
  /** block height timestamp */
  timestamp?: Date | undefined;
  /** app hash of the current block */
  appHash: Uint8Array;
  /** validator hash provided by the consensus header */
  validatorHash: Uint8Array;
}
export interface StatusResponseProtoMsg {
  typeUrl: "/cosmos.base.node.v1beta1.StatusResponse";
  value: Uint8Array;
}
/** StateResponse defines the response structure for the status of a node. */
export interface StatusResponseAmino {
  /** earliest block height available in the store */
  earliest_store_height?: string;
  /** current block height */
  height?: string;
  /** block height timestamp */
  timestamp?: string | undefined;
  /** app hash of the current block */
  app_hash?: string;
  /** validator hash provided by the consensus header */
  validator_hash?: string;
}
export interface StatusResponseAminoMsg {
  type: "cosmos-sdk/StatusResponse";
  value: StatusResponseAmino;
}
/** StateResponse defines the response structure for the status of a node. */
export interface StatusResponseSDKType {
  earliest_store_height: bigint;
  height: bigint;
  timestamp?: Date | undefined;
  app_hash: Uint8Array;
  validator_hash: Uint8Array;
}
function createBaseConfigRequest(): ConfigRequest {
  return {};
}
export const ConfigRequest = {
  typeUrl: "/cosmos.base.node.v1beta1.ConfigRequest",
  aminoType: "cosmos-sdk/ConfigRequest",
  is(o: any): o is ConfigRequest {
    return o && o.$typeUrl === ConfigRequest.typeUrl;
  },
  isSDK(o: any): o is ConfigRequestSDKType {
    return o && o.$typeUrl === ConfigRequest.typeUrl;
  },
  isAmino(o: any): o is ConfigRequestAmino {
    return o && o.$typeUrl === ConfigRequest.typeUrl;
  },
  encode(_: ConfigRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ConfigRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseConfigRequest();
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
  fromJSON(_: any): ConfigRequest {
    return {};
  },
  toJSON(_: ConfigRequest): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: DeepPartial<ConfigRequest>): ConfigRequest {
    const message = createBaseConfigRequest();
    return message;
  },
  fromSDK(_: ConfigRequestSDKType): ConfigRequest {
    return {};
  },
  toSDK(_: ConfigRequest): ConfigRequestSDKType {
    const obj: any = {};
    return obj;
  },
  fromAmino(_: ConfigRequestAmino): ConfigRequest {
    const message = createBaseConfigRequest();
    return message;
  },
  toAmino(_: ConfigRequest): ConfigRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: ConfigRequestAminoMsg): ConfigRequest {
    return ConfigRequest.fromAmino(object.value);
  },
  toAminoMsg(message: ConfigRequest): ConfigRequestAminoMsg {
    return {
      type: "cosmos-sdk/ConfigRequest",
      value: ConfigRequest.toAmino(message)
    };
  },
  fromProtoMsg(message: ConfigRequestProtoMsg): ConfigRequest {
    return ConfigRequest.decode(message.value);
  },
  toProto(message: ConfigRequest): Uint8Array {
    return ConfigRequest.encode(message).finish();
  },
  toProtoMsg(message: ConfigRequest): ConfigRequestProtoMsg {
    return {
      typeUrl: "/cosmos.base.node.v1beta1.ConfigRequest",
      value: ConfigRequest.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(ConfigRequest.typeUrl, ConfigRequest);
GlobalDecoderRegistry.registerAminoProtoMapping(ConfigRequest.aminoType, ConfigRequest.typeUrl);
function createBaseConfigResponse(): ConfigResponse {
  return {
    minimumGasPrice: "",
    pruningKeepRecent: "",
    pruningInterval: ""
  };
}
export const ConfigResponse = {
  typeUrl: "/cosmos.base.node.v1beta1.ConfigResponse",
  aminoType: "cosmos-sdk/ConfigResponse",
  is(o: any): o is ConfigResponse {
    return o && (o.$typeUrl === ConfigResponse.typeUrl || typeof o.minimumGasPrice === "string" && typeof o.pruningKeepRecent === "string" && typeof o.pruningInterval === "string");
  },
  isSDK(o: any): o is ConfigResponseSDKType {
    return o && (o.$typeUrl === ConfigResponse.typeUrl || typeof o.minimum_gas_price === "string" && typeof o.pruning_keep_recent === "string" && typeof o.pruning_interval === "string");
  },
  isAmino(o: any): o is ConfigResponseAmino {
    return o && (o.$typeUrl === ConfigResponse.typeUrl || typeof o.minimum_gas_price === "string" && typeof o.pruning_keep_recent === "string" && typeof o.pruning_interval === "string");
  },
  encode(message: ConfigResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.minimumGasPrice !== "") {
      writer.uint32(10).string(message.minimumGasPrice);
    }
    if (message.pruningKeepRecent !== "") {
      writer.uint32(18).string(message.pruningKeepRecent);
    }
    if (message.pruningInterval !== "") {
      writer.uint32(26).string(message.pruningInterval);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ConfigResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseConfigResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.minimumGasPrice = reader.string();
          break;
        case 2:
          message.pruningKeepRecent = reader.string();
          break;
        case 3:
          message.pruningInterval = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): ConfigResponse {
    return {
      minimumGasPrice: isSet(object.minimumGasPrice) ? String(object.minimumGasPrice) : "",
      pruningKeepRecent: isSet(object.pruningKeepRecent) ? String(object.pruningKeepRecent) : "",
      pruningInterval: isSet(object.pruningInterval) ? String(object.pruningInterval) : ""
    };
  },
  toJSON(message: ConfigResponse): unknown {
    const obj: any = {};
    message.minimumGasPrice !== undefined && (obj.minimumGasPrice = message.minimumGasPrice);
    message.pruningKeepRecent !== undefined && (obj.pruningKeepRecent = message.pruningKeepRecent);
    message.pruningInterval !== undefined && (obj.pruningInterval = message.pruningInterval);
    return obj;
  },
  fromPartial(object: DeepPartial<ConfigResponse>): ConfigResponse {
    const message = createBaseConfigResponse();
    message.minimumGasPrice = object.minimumGasPrice ?? "";
    message.pruningKeepRecent = object.pruningKeepRecent ?? "";
    message.pruningInterval = object.pruningInterval ?? "";
    return message;
  },
  fromSDK(object: ConfigResponseSDKType): ConfigResponse {
    return {
      minimumGasPrice: object?.minimum_gas_price,
      pruningKeepRecent: object?.pruning_keep_recent,
      pruningInterval: object?.pruning_interval
    };
  },
  toSDK(message: ConfigResponse): ConfigResponseSDKType {
    const obj: any = {};
    obj.minimum_gas_price = message.minimumGasPrice;
    obj.pruning_keep_recent = message.pruningKeepRecent;
    obj.pruning_interval = message.pruningInterval;
    return obj;
  },
  fromAmino(object: ConfigResponseAmino): ConfigResponse {
    const message = createBaseConfigResponse();
    if (object.minimum_gas_price !== undefined && object.minimum_gas_price !== null) {
      message.minimumGasPrice = object.minimum_gas_price;
    }
    if (object.pruning_keep_recent !== undefined && object.pruning_keep_recent !== null) {
      message.pruningKeepRecent = object.pruning_keep_recent;
    }
    if (object.pruning_interval !== undefined && object.pruning_interval !== null) {
      message.pruningInterval = object.pruning_interval;
    }
    return message;
  },
  toAmino(message: ConfigResponse): ConfigResponseAmino {
    const obj: any = {};
    obj.minimum_gas_price = message.minimumGasPrice;
    obj.pruning_keep_recent = message.pruningKeepRecent;
    obj.pruning_interval = message.pruningInterval;
    return obj;
  },
  fromAminoMsg(object: ConfigResponseAminoMsg): ConfigResponse {
    return ConfigResponse.fromAmino(object.value);
  },
  toAminoMsg(message: ConfigResponse): ConfigResponseAminoMsg {
    return {
      type: "cosmos-sdk/ConfigResponse",
      value: ConfigResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: ConfigResponseProtoMsg): ConfigResponse {
    return ConfigResponse.decode(message.value);
  },
  toProto(message: ConfigResponse): Uint8Array {
    return ConfigResponse.encode(message).finish();
  },
  toProtoMsg(message: ConfigResponse): ConfigResponseProtoMsg {
    return {
      typeUrl: "/cosmos.base.node.v1beta1.ConfigResponse",
      value: ConfigResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(ConfigResponse.typeUrl, ConfigResponse);
GlobalDecoderRegistry.registerAminoProtoMapping(ConfigResponse.aminoType, ConfigResponse.typeUrl);
function createBaseStatusRequest(): StatusRequest {
  return {};
}
export const StatusRequest = {
  typeUrl: "/cosmos.base.node.v1beta1.StatusRequest",
  aminoType: "cosmos-sdk/StatusRequest",
  is(o: any): o is StatusRequest {
    return o && o.$typeUrl === StatusRequest.typeUrl;
  },
  isSDK(o: any): o is StatusRequestSDKType {
    return o && o.$typeUrl === StatusRequest.typeUrl;
  },
  isAmino(o: any): o is StatusRequestAmino {
    return o && o.$typeUrl === StatusRequest.typeUrl;
  },
  encode(_: StatusRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): StatusRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseStatusRequest();
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
  fromJSON(_: any): StatusRequest {
    return {};
  },
  toJSON(_: StatusRequest): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: DeepPartial<StatusRequest>): StatusRequest {
    const message = createBaseStatusRequest();
    return message;
  },
  fromSDK(_: StatusRequestSDKType): StatusRequest {
    return {};
  },
  toSDK(_: StatusRequest): StatusRequestSDKType {
    const obj: any = {};
    return obj;
  },
  fromAmino(_: StatusRequestAmino): StatusRequest {
    const message = createBaseStatusRequest();
    return message;
  },
  toAmino(_: StatusRequest): StatusRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: StatusRequestAminoMsg): StatusRequest {
    return StatusRequest.fromAmino(object.value);
  },
  toAminoMsg(message: StatusRequest): StatusRequestAminoMsg {
    return {
      type: "cosmos-sdk/StatusRequest",
      value: StatusRequest.toAmino(message)
    };
  },
  fromProtoMsg(message: StatusRequestProtoMsg): StatusRequest {
    return StatusRequest.decode(message.value);
  },
  toProto(message: StatusRequest): Uint8Array {
    return StatusRequest.encode(message).finish();
  },
  toProtoMsg(message: StatusRequest): StatusRequestProtoMsg {
    return {
      typeUrl: "/cosmos.base.node.v1beta1.StatusRequest",
      value: StatusRequest.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(StatusRequest.typeUrl, StatusRequest);
GlobalDecoderRegistry.registerAminoProtoMapping(StatusRequest.aminoType, StatusRequest.typeUrl);
function createBaseStatusResponse(): StatusResponse {
  return {
    earliestStoreHeight: BigInt(0),
    height: BigInt(0),
    timestamp: undefined,
    appHash: new Uint8Array(),
    validatorHash: new Uint8Array()
  };
}
export const StatusResponse = {
  typeUrl: "/cosmos.base.node.v1beta1.StatusResponse",
  aminoType: "cosmos-sdk/StatusResponse",
  is(o: any): o is StatusResponse {
    return o && (o.$typeUrl === StatusResponse.typeUrl || typeof o.earliestStoreHeight === "bigint" && typeof o.height === "bigint" && (o.appHash instanceof Uint8Array || typeof o.appHash === "string") && (o.validatorHash instanceof Uint8Array || typeof o.validatorHash === "string"));
  },
  isSDK(o: any): o is StatusResponseSDKType {
    return o && (o.$typeUrl === StatusResponse.typeUrl || typeof o.earliest_store_height === "bigint" && typeof o.height === "bigint" && (o.app_hash instanceof Uint8Array || typeof o.app_hash === "string") && (o.validator_hash instanceof Uint8Array || typeof o.validator_hash === "string"));
  },
  isAmino(o: any): o is StatusResponseAmino {
    return o && (o.$typeUrl === StatusResponse.typeUrl || typeof o.earliest_store_height === "bigint" && typeof o.height === "bigint" && (o.app_hash instanceof Uint8Array || typeof o.app_hash === "string") && (o.validator_hash instanceof Uint8Array || typeof o.validator_hash === "string"));
  },
  encode(message: StatusResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.earliestStoreHeight !== BigInt(0)) {
      writer.uint32(8).uint64(message.earliestStoreHeight);
    }
    if (message.height !== BigInt(0)) {
      writer.uint32(16).uint64(message.height);
    }
    if (message.timestamp !== undefined) {
      Timestamp.encode(toTimestamp(message.timestamp), writer.uint32(26).fork()).ldelim();
    }
    if (message.appHash.length !== 0) {
      writer.uint32(34).bytes(message.appHash);
    }
    if (message.validatorHash.length !== 0) {
      writer.uint32(42).bytes(message.validatorHash);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): StatusResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseStatusResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.earliestStoreHeight = reader.uint64();
          break;
        case 2:
          message.height = reader.uint64();
          break;
        case 3:
          message.timestamp = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;
        case 4:
          message.appHash = reader.bytes();
          break;
        case 5:
          message.validatorHash = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): StatusResponse {
    return {
      earliestStoreHeight: isSet(object.earliestStoreHeight) ? BigInt(object.earliestStoreHeight.toString()) : BigInt(0),
      height: isSet(object.height) ? BigInt(object.height.toString()) : BigInt(0),
      timestamp: isSet(object.timestamp) ? new Date(object.timestamp) : undefined,
      appHash: isSet(object.appHash) ? bytesFromBase64(object.appHash) : new Uint8Array(),
      validatorHash: isSet(object.validatorHash) ? bytesFromBase64(object.validatorHash) : new Uint8Array()
    };
  },
  toJSON(message: StatusResponse): unknown {
    const obj: any = {};
    message.earliestStoreHeight !== undefined && (obj.earliestStoreHeight = (message.earliestStoreHeight || BigInt(0)).toString());
    message.height !== undefined && (obj.height = (message.height || BigInt(0)).toString());
    message.timestamp !== undefined && (obj.timestamp = message.timestamp.toISOString());
    message.appHash !== undefined && (obj.appHash = base64FromBytes(message.appHash !== undefined ? message.appHash : new Uint8Array()));
    message.validatorHash !== undefined && (obj.validatorHash = base64FromBytes(message.validatorHash !== undefined ? message.validatorHash : new Uint8Array()));
    return obj;
  },
  fromPartial(object: DeepPartial<StatusResponse>): StatusResponse {
    const message = createBaseStatusResponse();
    message.earliestStoreHeight = object.earliestStoreHeight !== undefined && object.earliestStoreHeight !== null ? BigInt(object.earliestStoreHeight.toString()) : BigInt(0);
    message.height = object.height !== undefined && object.height !== null ? BigInt(object.height.toString()) : BigInt(0);
    message.timestamp = object.timestamp ?? undefined;
    message.appHash = object.appHash ?? new Uint8Array();
    message.validatorHash = object.validatorHash ?? new Uint8Array();
    return message;
  },
  fromSDK(object: StatusResponseSDKType): StatusResponse {
    return {
      earliestStoreHeight: object?.earliest_store_height,
      height: object?.height,
      timestamp: object.timestamp ?? undefined,
      appHash: object?.app_hash,
      validatorHash: object?.validator_hash
    };
  },
  toSDK(message: StatusResponse): StatusResponseSDKType {
    const obj: any = {};
    obj.earliest_store_height = message.earliestStoreHeight;
    obj.height = message.height;
    message.timestamp !== undefined && (obj.timestamp = message.timestamp ?? undefined);
    obj.app_hash = message.appHash;
    obj.validator_hash = message.validatorHash;
    return obj;
  },
  fromAmino(object: StatusResponseAmino): StatusResponse {
    const message = createBaseStatusResponse();
    if (object.earliest_store_height !== undefined && object.earliest_store_height !== null) {
      message.earliestStoreHeight = BigInt(object.earliest_store_height);
    }
    if (object.height !== undefined && object.height !== null) {
      message.height = BigInt(object.height);
    }
    if (object.timestamp !== undefined && object.timestamp !== null) {
      message.timestamp = fromTimestamp(Timestamp.fromAmino(object.timestamp));
    }
    if (object.app_hash !== undefined && object.app_hash !== null) {
      message.appHash = bytesFromBase64(object.app_hash);
    }
    if (object.validator_hash !== undefined && object.validator_hash !== null) {
      message.validatorHash = bytesFromBase64(object.validator_hash);
    }
    return message;
  },
  toAmino(message: StatusResponse): StatusResponseAmino {
    const obj: any = {};
    obj.earliest_store_height = message.earliestStoreHeight ? message.earliestStoreHeight.toString() : undefined;
    obj.height = message.height ? message.height.toString() : undefined;
    obj.timestamp = message.timestamp ? Timestamp.toAmino(toTimestamp(message.timestamp)) : undefined;
    obj.app_hash = message.appHash ? base64FromBytes(message.appHash) : undefined;
    obj.validator_hash = message.validatorHash ? base64FromBytes(message.validatorHash) : undefined;
    return obj;
  },
  fromAminoMsg(object: StatusResponseAminoMsg): StatusResponse {
    return StatusResponse.fromAmino(object.value);
  },
  toAminoMsg(message: StatusResponse): StatusResponseAminoMsg {
    return {
      type: "cosmos-sdk/StatusResponse",
      value: StatusResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: StatusResponseProtoMsg): StatusResponse {
    return StatusResponse.decode(message.value);
  },
  toProto(message: StatusResponse): Uint8Array {
    return StatusResponse.encode(message).finish();
  },
  toProtoMsg(message: StatusResponse): StatusResponseProtoMsg {
    return {
      typeUrl: "/cosmos.base.node.v1beta1.StatusResponse",
      value: StatusResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(StatusResponse.typeUrl, StatusResponse);
GlobalDecoderRegistry.registerAminoProtoMapping(StatusResponse.aminoType, StatusResponse.typeUrl);