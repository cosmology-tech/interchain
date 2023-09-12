import { ResponseCommit, ResponseCommitAmino, ResponseCommitSDKType, RequestFinalizeBlock, RequestFinalizeBlockAmino, RequestFinalizeBlockSDKType, ResponseFinalizeBlock, ResponseFinalizeBlockAmino, ResponseFinalizeBlockSDKType } from "../../../tendermint/abci/types";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial } from "../../../helpers";
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
  store_key: string;
  /** true indicates a delete operation, false indicates a set operation */
  delete: boolean;
  key: Uint8Array;
  value: Uint8Array;
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
  responseCommit: ResponseCommit;
  requestFinalizeBlock: RequestFinalizeBlock;
  /** TODO: should we renumber this? */
  responseFinalizeBlock: ResponseFinalizeBlock;
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
  response_commit?: ResponseCommitAmino;
  request_finalize_block?: RequestFinalizeBlockAmino;
  /** TODO: should we renumber this? */
  response_finalize_block?: ResponseFinalizeBlockAmino;
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
  response_commit: ResponseCommitSDKType;
  request_finalize_block: RequestFinalizeBlockSDKType;
  response_finalize_block: ResponseFinalizeBlockSDKType;
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
  encode(message: StoreKVPair, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
  decode(input: _m0.Reader | Uint8Array, length?: number): StoreKVPair {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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
  fromPartial(object: DeepPartial<StoreKVPair>): StoreKVPair {
    const message = createBaseStoreKVPair();
    message.storeKey = object.storeKey ?? "";
    message.delete = object.delete ?? false;
    message.key = object.key ?? new Uint8Array();
    message.value = object.value ?? new Uint8Array();
    return message;
  },
  fromAmino(object: StoreKVPairAmino): StoreKVPair {
    return {
      storeKey: object.store_key,
      delete: object.delete,
      key: object.key,
      value: object.value
    };
  },
  toAmino(message: StoreKVPair): StoreKVPairAmino {
    const obj: any = {};
    obj.store_key = message.storeKey;
    obj.delete = message.delete;
    obj.key = message.key;
    obj.value = message.value;
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
function createBaseBlockMetadata(): BlockMetadata {
  return {
    responseCommit: ResponseCommit.fromPartial({}),
    requestFinalizeBlock: RequestFinalizeBlock.fromPartial({}),
    responseFinalizeBlock: ResponseFinalizeBlock.fromPartial({})
  };
}
export const BlockMetadata = {
  typeUrl: "/cosmos.store.v1beta1.BlockMetadata",
  aminoType: "cosmos-sdk/BlockMetadata",
  encode(message: BlockMetadata, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
  decode(input: _m0.Reader | Uint8Array, length?: number): BlockMetadata {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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
  fromPartial(object: DeepPartial<BlockMetadata>): BlockMetadata {
    const message = createBaseBlockMetadata();
    message.responseCommit = object.responseCommit !== undefined && object.responseCommit !== null ? ResponseCommit.fromPartial(object.responseCommit) : undefined;
    message.requestFinalizeBlock = object.requestFinalizeBlock !== undefined && object.requestFinalizeBlock !== null ? RequestFinalizeBlock.fromPartial(object.requestFinalizeBlock) : undefined;
    message.responseFinalizeBlock = object.responseFinalizeBlock !== undefined && object.responseFinalizeBlock !== null ? ResponseFinalizeBlock.fromPartial(object.responseFinalizeBlock) : undefined;
    return message;
  },
  fromAmino(object: BlockMetadataAmino): BlockMetadata {
    return {
      responseCommit: object?.response_commit ? ResponseCommit.fromAmino(object.response_commit) : undefined,
      requestFinalizeBlock: object?.request_finalize_block ? RequestFinalizeBlock.fromAmino(object.request_finalize_block) : undefined,
      responseFinalizeBlock: object?.response_finalize_block ? ResponseFinalizeBlock.fromAmino(object.response_finalize_block) : undefined
    };
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