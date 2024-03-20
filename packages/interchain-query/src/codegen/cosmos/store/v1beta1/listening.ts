import { ResponseCommit, ResponseCommitAmino, ResponseCommitSDKType, RequestFinalizeBlock, RequestFinalizeBlockAmino, RequestFinalizeBlockSDKType, ResponseFinalizeBlock, ResponseFinalizeBlockAmino, ResponseFinalizeBlockSDKType } from "../../../tendermint/abci/types";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet, bytesFromBase64, base64FromBytes, DeepPartial } from "../../../helpers";
import { GlobalDecoderRegistry } from "../../../registry";
/**
 * StoreKVPair is a KVStore KVPair used for listening to state changes (Sets and Deletes)
 * It optionally includes the StoreKey for the originating KVStore and a Boolean flag to distinguish between Sets and
 * Deletes
 * 
 * Since: cosmos-sdk 0.43
 */
export interface StoreKVPair {
  /** the store key for the KVStore this pair originates from */
  storeKey: string;
  /** true indicates a delete operation, false indicates a set operation */
  delete: boolean;
  key: Uint8Array;
  value: Uint8Array;
}
export interface StoreKVPairProtoMsg {
  typeUrl: "/cosmos.store.v1beta1.StoreKVPair";
  value: Uint8Array;
}
/**
 * StoreKVPair is a KVStore KVPair used for listening to state changes (Sets and Deletes)
 * It optionally includes the StoreKey for the originating KVStore and a Boolean flag to distinguish between Sets and
 * Deletes
 * 
 * Since: cosmos-sdk 0.43
 */
export interface StoreKVPairAmino {
  /** the store key for the KVStore this pair originates from */
  store_key?: string;
  /** true indicates a delete operation, false indicates a set operation */
  delete?: boolean;
  key?: string;
  value?: string;
}
export interface StoreKVPairAminoMsg {
  type: "cosmos-sdk/StoreKVPair";
  value: StoreKVPairAmino;
}
/**
 * StoreKVPair is a KVStore KVPair used for listening to state changes (Sets and Deletes)
 * It optionally includes the StoreKey for the originating KVStore and a Boolean flag to distinguish between Sets and
 * Deletes
 * 
 * Since: cosmos-sdk 0.43
 */
export interface StoreKVPairSDKType {
  store_key: string;
  delete: boolean;
  key: Uint8Array;
  value: Uint8Array;
}
/**
 * BlockMetadata contains all the abci event data of a block
 * the file streamer dump them into files together with the state changes.
 */
export interface BlockMetadata {
  responseCommit?: ResponseCommit | undefined;
  requestFinalizeBlock?: RequestFinalizeBlock | undefined;
  /** TODO: should we renumber this? */
  responseFinalizeBlock?: ResponseFinalizeBlock | undefined;
}
export interface BlockMetadataProtoMsg {
  typeUrl: "/cosmos.store.v1beta1.BlockMetadata";
  value: Uint8Array;
}
/**
 * BlockMetadata contains all the abci event data of a block
 * the file streamer dump them into files together with the state changes.
 */
export interface BlockMetadataAmino {
  response_commit?: ResponseCommitAmino | undefined;
  request_finalize_block?: RequestFinalizeBlockAmino | undefined;
  /** TODO: should we renumber this? */
  response_finalize_block?: ResponseFinalizeBlockAmino | undefined;
}
export interface BlockMetadataAminoMsg {
  type: "cosmos-sdk/BlockMetadata";
  value: BlockMetadataAmino;
}
/**
 * BlockMetadata contains all the abci event data of a block
 * the file streamer dump them into files together with the state changes.
 */
export interface BlockMetadataSDKType {
  response_commit?: ResponseCommitSDKType | undefined;
  request_finalize_block?: RequestFinalizeBlockSDKType | undefined;
  response_finalize_block?: ResponseFinalizeBlockSDKType | undefined;
}
function createBaseStoreKVPair(): StoreKVPair {
  return {
    storeKey: "",
    delete: false,
    key: new Uint8Array(),
    value: new Uint8Array()
  };
}
export const StoreKVPair = {
  typeUrl: "/cosmos.store.v1beta1.StoreKVPair",
  aminoType: "cosmos-sdk/StoreKVPair",
  is(o: any): o is StoreKVPair {
    return o && (o.$typeUrl === StoreKVPair.typeUrl || typeof o.storeKey === "string" && typeof o.delete === "boolean" && (o.key instanceof Uint8Array || typeof o.key === "string") && (o.value instanceof Uint8Array || typeof o.value === "string"));
  },
  isSDK(o: any): o is StoreKVPairSDKType {
    return o && (o.$typeUrl === StoreKVPair.typeUrl || typeof o.store_key === "string" && typeof o.delete === "boolean" && (o.key instanceof Uint8Array || typeof o.key === "string") && (o.value instanceof Uint8Array || typeof o.value === "string"));
  },
  isAmino(o: any): o is StoreKVPairAmino {
    return o && (o.$typeUrl === StoreKVPair.typeUrl || typeof o.store_key === "string" && typeof o.delete === "boolean" && (o.key instanceof Uint8Array || typeof o.key === "string") && (o.value instanceof Uint8Array || typeof o.value === "string"));
  },
  encode(message: StoreKVPair, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.storeKey !== "") {
      writer.uint32(10).string(message.storeKey);
    }
    if (message.delete === true) {
      writer.uint32(16).bool(message.delete);
    }
    if (message.key.length !== 0) {
      writer.uint32(26).bytes(message.key);
    }
    if (message.value.length !== 0) {
      writer.uint32(34).bytes(message.value);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): StoreKVPair {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseStoreKVPair();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.storeKey = reader.string();
          break;
        case 2:
          message.delete = reader.bool();
          break;
        case 3:
          message.key = reader.bytes();
          break;
        case 4:
          message.value = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): StoreKVPair {
    return {
      storeKey: isSet(object.storeKey) ? String(object.storeKey) : "",
      delete: isSet(object.delete) ? Boolean(object.delete) : false,
      key: isSet(object.key) ? bytesFromBase64(object.key) : new Uint8Array(),
      value: isSet(object.value) ? bytesFromBase64(object.value) : new Uint8Array()
    };
  },
  toJSON(message: StoreKVPair): unknown {
    const obj: any = {};
    message.storeKey !== undefined && (obj.storeKey = message.storeKey);
    message.delete !== undefined && (obj.delete = message.delete);
    message.key !== undefined && (obj.key = base64FromBytes(message.key !== undefined ? message.key : new Uint8Array()));
    message.value !== undefined && (obj.value = base64FromBytes(message.value !== undefined ? message.value : new Uint8Array()));
    return obj;
  },
  fromPartial(object: DeepPartial<StoreKVPair>): StoreKVPair {
    const message = createBaseStoreKVPair();
    message.storeKey = object.storeKey ?? "";
    message.delete = object.delete ?? false;
    message.key = object.key ?? new Uint8Array();
    message.value = object.value ?? new Uint8Array();
    return message;
  },
  fromSDK(object: StoreKVPairSDKType): StoreKVPair {
    return {
      storeKey: object?.store_key,
      delete: object?.delete,
      key: object?.key,
      value: object?.value
    };
  },
  toSDK(message: StoreKVPair): StoreKVPairSDKType {
    const obj: any = {};
    obj.store_key = message.storeKey;
    obj.delete = message.delete;
    obj.key = message.key;
    obj.value = message.value;
    return obj;
  },
  fromAmino(object: StoreKVPairAmino): StoreKVPair {
    const message = createBaseStoreKVPair();
    if (object.store_key !== undefined && object.store_key !== null) {
      message.storeKey = object.store_key;
    }
    if (object.delete !== undefined && object.delete !== null) {
      message.delete = object.delete;
    }
    if (object.key !== undefined && object.key !== null) {
      message.key = bytesFromBase64(object.key);
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = bytesFromBase64(object.value);
    }
    return message;
  },
  toAmino(message: StoreKVPair): StoreKVPairAmino {
    const obj: any = {};
    obj.store_key = message.storeKey === "" ? undefined : message.storeKey;
    obj.delete = message.delete === false ? undefined : message.delete;
    obj.key = message.key ? base64FromBytes(message.key) : undefined;
    obj.value = message.value ? base64FromBytes(message.value) : undefined;
    return obj;
  },
  fromAminoMsg(object: StoreKVPairAminoMsg): StoreKVPair {
    return StoreKVPair.fromAmino(object.value);
  },
  toAminoMsg(message: StoreKVPair): StoreKVPairAminoMsg {
    return {
      type: "cosmos-sdk/StoreKVPair",
      value: StoreKVPair.toAmino(message)
    };
  },
  fromProtoMsg(message: StoreKVPairProtoMsg): StoreKVPair {
    return StoreKVPair.decode(message.value);
  },
  toProto(message: StoreKVPair): Uint8Array {
    return StoreKVPair.encode(message).finish();
  },
  toProtoMsg(message: StoreKVPair): StoreKVPairProtoMsg {
    return {
      typeUrl: "/cosmos.store.v1beta1.StoreKVPair",
      value: StoreKVPair.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(StoreKVPair.typeUrl, StoreKVPair);
GlobalDecoderRegistry.registerAminoProtoMapping(StoreKVPair.aminoType, StoreKVPair.typeUrl);
function createBaseBlockMetadata(): BlockMetadata {
  return {
    responseCommit: undefined,
    requestFinalizeBlock: undefined,
    responseFinalizeBlock: undefined
  };
}
export const BlockMetadata = {
  typeUrl: "/cosmos.store.v1beta1.BlockMetadata",
  aminoType: "cosmos-sdk/BlockMetadata",
  is(o: any): o is BlockMetadata {
    return o && o.$typeUrl === BlockMetadata.typeUrl;
  },
  isSDK(o: any): o is BlockMetadataSDKType {
    return o && o.$typeUrl === BlockMetadata.typeUrl;
  },
  isAmino(o: any): o is BlockMetadataAmino {
    return o && o.$typeUrl === BlockMetadata.typeUrl;
  },
  encode(message: BlockMetadata, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.responseCommit !== undefined) {
      ResponseCommit.encode(message.responseCommit, writer.uint32(50).fork()).ldelim();
    }
    if (message.requestFinalizeBlock !== undefined) {
      RequestFinalizeBlock.encode(message.requestFinalizeBlock, writer.uint32(58).fork()).ldelim();
    }
    if (message.responseFinalizeBlock !== undefined) {
      ResponseFinalizeBlock.encode(message.responseFinalizeBlock, writer.uint32(66).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): BlockMetadata {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBlockMetadata();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 6:
          message.responseCommit = ResponseCommit.decode(reader, reader.uint32());
          break;
        case 7:
          message.requestFinalizeBlock = RequestFinalizeBlock.decode(reader, reader.uint32());
          break;
        case 8:
          message.responseFinalizeBlock = ResponseFinalizeBlock.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): BlockMetadata {
    return {
      responseCommit: isSet(object.responseCommit) ? ResponseCommit.fromJSON(object.responseCommit) : undefined,
      requestFinalizeBlock: isSet(object.requestFinalizeBlock) ? RequestFinalizeBlock.fromJSON(object.requestFinalizeBlock) : undefined,
      responseFinalizeBlock: isSet(object.responseFinalizeBlock) ? ResponseFinalizeBlock.fromJSON(object.responseFinalizeBlock) : undefined
    };
  },
  toJSON(message: BlockMetadata): unknown {
    const obj: any = {};
    message.responseCommit !== undefined && (obj.responseCommit = message.responseCommit ? ResponseCommit.toJSON(message.responseCommit) : undefined);
    message.requestFinalizeBlock !== undefined && (obj.requestFinalizeBlock = message.requestFinalizeBlock ? RequestFinalizeBlock.toJSON(message.requestFinalizeBlock) : undefined);
    message.responseFinalizeBlock !== undefined && (obj.responseFinalizeBlock = message.responseFinalizeBlock ? ResponseFinalizeBlock.toJSON(message.responseFinalizeBlock) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<BlockMetadata>): BlockMetadata {
    const message = createBaseBlockMetadata();
    message.responseCommit = object.responseCommit !== undefined && object.responseCommit !== null ? ResponseCommit.fromPartial(object.responseCommit) : undefined;
    message.requestFinalizeBlock = object.requestFinalizeBlock !== undefined && object.requestFinalizeBlock !== null ? RequestFinalizeBlock.fromPartial(object.requestFinalizeBlock) : undefined;
    message.responseFinalizeBlock = object.responseFinalizeBlock !== undefined && object.responseFinalizeBlock !== null ? ResponseFinalizeBlock.fromPartial(object.responseFinalizeBlock) : undefined;
    return message;
  },
  fromSDK(object: BlockMetadataSDKType): BlockMetadata {
    return {
      responseCommit: object.response_commit ? ResponseCommit.fromSDK(object.response_commit) : undefined,
      requestFinalizeBlock: object.request_finalize_block ? RequestFinalizeBlock.fromSDK(object.request_finalize_block) : undefined,
      responseFinalizeBlock: object.response_finalize_block ? ResponseFinalizeBlock.fromSDK(object.response_finalize_block) : undefined
    };
  },
  toSDK(message: BlockMetadata): BlockMetadataSDKType {
    const obj: any = {};
    message.responseCommit !== undefined && (obj.response_commit = message.responseCommit ? ResponseCommit.toSDK(message.responseCommit) : undefined);
    message.requestFinalizeBlock !== undefined && (obj.request_finalize_block = message.requestFinalizeBlock ? RequestFinalizeBlock.toSDK(message.requestFinalizeBlock) : undefined);
    message.responseFinalizeBlock !== undefined && (obj.response_finalize_block = message.responseFinalizeBlock ? ResponseFinalizeBlock.toSDK(message.responseFinalizeBlock) : undefined);
    return obj;
  },
  fromAmino(object: BlockMetadataAmino): BlockMetadata {
    const message = createBaseBlockMetadata();
    if (object.response_commit !== undefined && object.response_commit !== null) {
      message.responseCommit = ResponseCommit.fromAmino(object.response_commit);
    }
    if (object.request_finalize_block !== undefined && object.request_finalize_block !== null) {
      message.requestFinalizeBlock = RequestFinalizeBlock.fromAmino(object.request_finalize_block);
    }
    if (object.response_finalize_block !== undefined && object.response_finalize_block !== null) {
      message.responseFinalizeBlock = ResponseFinalizeBlock.fromAmino(object.response_finalize_block);
    }
    return message;
  },
  toAmino(message: BlockMetadata): BlockMetadataAmino {
    const obj: any = {};
    obj.response_commit = message.responseCommit ? ResponseCommit.toAmino(message.responseCommit) : undefined;
    obj.request_finalize_block = message.requestFinalizeBlock ? RequestFinalizeBlock.toAmino(message.requestFinalizeBlock) : undefined;
    obj.response_finalize_block = message.responseFinalizeBlock ? ResponseFinalizeBlock.toAmino(message.responseFinalizeBlock) : undefined;
    return obj;
  },
  fromAminoMsg(object: BlockMetadataAminoMsg): BlockMetadata {
    return BlockMetadata.fromAmino(object.value);
  },
  toAminoMsg(message: BlockMetadata): BlockMetadataAminoMsg {
    return {
      type: "cosmos-sdk/BlockMetadata",
      value: BlockMetadata.toAmino(message)
    };
  },
  fromProtoMsg(message: BlockMetadataProtoMsg): BlockMetadata {
    return BlockMetadata.decode(message.value);
  },
  toProto(message: BlockMetadata): Uint8Array {
    return BlockMetadata.encode(message).finish();
  },
  toProtoMsg(message: BlockMetadata): BlockMetadataProtoMsg {
    return {
      typeUrl: "/cosmos.store.v1beta1.BlockMetadata",
      value: BlockMetadata.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(BlockMetadata.typeUrl, BlockMetadata);
GlobalDecoderRegistry.registerAminoProtoMapping(BlockMetadata.aminoType, BlockMetadata.typeUrl);