import { Any, AnyAmino, AnySDKType } from "../../../../google/protobuf/any";
import { BinaryReader, BinaryWriter } from "../../../../binary";
import { isSet, DeepPartial } from "../../../../helpers";
import { GlobalDecoderRegistry } from "../../../../registry";
/**
 * IdentifiedClientState defines a client state with an additional client
 * identifier field.
 */
export interface IdentifiedClientState {
  /** client identifier */
  clientId: string;
  /** client state */
  clientState?: Any | undefined;
}
export interface IdentifiedClientStateProtoMsg {
  typeUrl: "/ibc.core.client.v1.IdentifiedClientState";
  value: Uint8Array;
}
/**
 * IdentifiedClientState defines a client state with an additional client
 * identifier field.
 */
export interface IdentifiedClientStateAmino {
  /** client identifier */
  client_id?: string;
  /** client state */
  client_state?: AnyAmino | undefined;
}
export interface IdentifiedClientStateAminoMsg {
  type: "cosmos-sdk/IdentifiedClientState";
  value: IdentifiedClientStateAmino;
}
/**
 * IdentifiedClientState defines a client state with an additional client
 * identifier field.
 */
export interface IdentifiedClientStateSDKType {
  client_id: string;
  client_state?: AnySDKType | undefined;
}
/**
 * ConsensusStateWithHeight defines a consensus state with an additional height
 * field.
 */
export interface ConsensusStateWithHeight {
  /** consensus state height */
  height: Height | undefined;
  /** consensus state */
  consensusState?: Any | undefined;
}
export interface ConsensusStateWithHeightProtoMsg {
  typeUrl: "/ibc.core.client.v1.ConsensusStateWithHeight";
  value: Uint8Array;
}
/**
 * ConsensusStateWithHeight defines a consensus state with an additional height
 * field.
 */
export interface ConsensusStateWithHeightAmino {
  /** consensus state height */
  height?: HeightAmino | undefined;
  /** consensus state */
  consensus_state?: AnyAmino | undefined;
}
export interface ConsensusStateWithHeightAminoMsg {
  type: "cosmos-sdk/ConsensusStateWithHeight";
  value: ConsensusStateWithHeightAmino;
}
/**
 * ConsensusStateWithHeight defines a consensus state with an additional height
 * field.
 */
export interface ConsensusStateWithHeightSDKType {
  height: HeightSDKType | undefined;
  consensus_state?: AnySDKType | undefined;
}
/**
 * ClientConsensusStates defines all the stored consensus states for a given
 * client.
 */
export interface ClientConsensusStates {
  /** client identifier */
  clientId: string;
  /** consensus states and their heights associated with the client */
  consensusStates: ConsensusStateWithHeight[];
}
export interface ClientConsensusStatesProtoMsg {
  typeUrl: "/ibc.core.client.v1.ClientConsensusStates";
  value: Uint8Array;
}
/**
 * ClientConsensusStates defines all the stored consensus states for a given
 * client.
 */
export interface ClientConsensusStatesAmino {
  /** client identifier */
  client_id?: string;
  /** consensus states and their heights associated with the client */
  consensus_states?: ConsensusStateWithHeightAmino[];
}
export interface ClientConsensusStatesAminoMsg {
  type: "cosmos-sdk/ClientConsensusStates";
  value: ClientConsensusStatesAmino;
}
/**
 * ClientConsensusStates defines all the stored consensus states for a given
 * client.
 */
export interface ClientConsensusStatesSDKType {
  client_id: string;
  consensus_states: ConsensusStateWithHeightSDKType[];
}
/**
 * Height is a monotonically increasing data type
 * that can be compared against another Height for the purposes of updating and
 * freezing clients
 * 
 * Normally the RevisionHeight is incremented at each height while keeping
 * RevisionNumber the same. However some consensus algorithms may choose to
 * reset the height in certain conditions e.g. hard forks, state-machine
 * breaking changes In these cases, the RevisionNumber is incremented so that
 * height continues to be monitonically increasing even as the RevisionHeight
 * gets reset
 */
export interface Height {
  /** the revision that the client is currently on */
  revisionNumber: bigint;
  /** the height within the given revision */
  revisionHeight: bigint;
}
export interface HeightProtoMsg {
  typeUrl: "/ibc.core.client.v1.Height";
  value: Uint8Array;
}
/**
 * Height is a monotonically increasing data type
 * that can be compared against another Height for the purposes of updating and
 * freezing clients
 * 
 * Normally the RevisionHeight is incremented at each height while keeping
 * RevisionNumber the same. However some consensus algorithms may choose to
 * reset the height in certain conditions e.g. hard forks, state-machine
 * breaking changes In these cases, the RevisionNumber is incremented so that
 * height continues to be monitonically increasing even as the RevisionHeight
 * gets reset
 */
export interface HeightAmino {
  /** the revision that the client is currently on */
  revision_number?: string;
  /** the height within the given revision */
  revision_height?: string;
}
export interface HeightAminoMsg {
  type: "cosmos-sdk/Height";
  value: HeightAmino;
}
/**
 * Height is a monotonically increasing data type
 * that can be compared against another Height for the purposes of updating and
 * freezing clients
 * 
 * Normally the RevisionHeight is incremented at each height while keeping
 * RevisionNumber the same. However some consensus algorithms may choose to
 * reset the height in certain conditions e.g. hard forks, state-machine
 * breaking changes In these cases, the RevisionNumber is incremented so that
 * height continues to be monitonically increasing even as the RevisionHeight
 * gets reset
 */
export interface HeightSDKType {
  revision_number: bigint;
  revision_height: bigint;
}
/** Params defines the set of IBC light client parameters. */
export interface Params {
  /**
   * allowed_clients defines the list of allowed client state types which can be created
   * and interacted with. If a client type is removed from the allowed clients list, usage
   * of this client will be disabled until it is added again to the list.
   */
  allowedClients: string[];
}
export interface ParamsProtoMsg {
  typeUrl: "/ibc.core.client.v1.Params";
  value: Uint8Array;
}
/** Params defines the set of IBC light client parameters. */
export interface ParamsAmino {
  /**
   * allowed_clients defines the list of allowed client state types which can be created
   * and interacted with. If a client type is removed from the allowed clients list, usage
   * of this client will be disabled until it is added again to the list.
   */
  allowed_clients?: string[];
}
export interface ParamsAminoMsg {
  type: "cosmos-sdk/Params";
  value: ParamsAmino;
}
/** Params defines the set of IBC light client parameters. */
export interface ParamsSDKType {
  allowed_clients: string[];
}
function createBaseIdentifiedClientState(): IdentifiedClientState {
  return {
    clientId: "",
    clientState: undefined
  };
}
export const IdentifiedClientState = {
  typeUrl: "/ibc.core.client.v1.IdentifiedClientState",
  aminoType: "cosmos-sdk/IdentifiedClientState",
  is(o: any): o is IdentifiedClientState {
    return o && (o.$typeUrl === IdentifiedClientState.typeUrl || typeof o.clientId === "string");
  },
  isSDK(o: any): o is IdentifiedClientStateSDKType {
    return o && (o.$typeUrl === IdentifiedClientState.typeUrl || typeof o.client_id === "string");
  },
  isAmino(o: any): o is IdentifiedClientStateAmino {
    return o && (o.$typeUrl === IdentifiedClientState.typeUrl || typeof o.client_id === "string");
  },
  encode(message: IdentifiedClientState, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.clientId !== "") {
      writer.uint32(10).string(message.clientId);
    }
    if (message.clientState !== undefined) {
      Any.encode(message.clientState, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): IdentifiedClientState {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseIdentifiedClientState();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.clientId = reader.string();
          break;
        case 2:
          message.clientState = Any.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): IdentifiedClientState {
    return {
      clientId: isSet(object.clientId) ? String(object.clientId) : "",
      clientState: isSet(object.clientState) ? Any.fromJSON(object.clientState) : undefined
    };
  },
  toJSON(message: IdentifiedClientState): unknown {
    const obj: any = {};
    message.clientId !== undefined && (obj.clientId = message.clientId);
    message.clientState !== undefined && (obj.clientState = message.clientState ? Any.toJSON(message.clientState) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<IdentifiedClientState>): IdentifiedClientState {
    const message = createBaseIdentifiedClientState();
    message.clientId = object.clientId ?? "";
    message.clientState = object.clientState !== undefined && object.clientState !== null ? Any.fromPartial(object.clientState) : undefined;
    return message;
  },
  fromSDK(object: IdentifiedClientStateSDKType): IdentifiedClientState {
    return {
      clientId: object?.client_id,
      clientState: object.client_state ? Any.fromSDK(object.client_state) : undefined
    };
  },
  toSDK(message: IdentifiedClientState): IdentifiedClientStateSDKType {
    const obj: any = {};
    obj.client_id = message.clientId;
    message.clientState !== undefined && (obj.client_state = message.clientState ? Any.toSDK(message.clientState) : undefined);
    return obj;
  },
  fromAmino(object: IdentifiedClientStateAmino): IdentifiedClientState {
    const message = createBaseIdentifiedClientState();
    if (object.client_id !== undefined && object.client_id !== null) {
      message.clientId = object.client_id;
    }
    if (object.client_state !== undefined && object.client_state !== null) {
      message.clientState = Any.fromAmino(object.client_state);
    }
    return message;
  },
  toAmino(message: IdentifiedClientState): IdentifiedClientStateAmino {
    const obj: any = {};
    obj.client_id = message.clientId === "" ? undefined : message.clientId;
    obj.client_state = message.clientState ? Any.toAmino(message.clientState) : undefined;
    return obj;
  },
  fromAminoMsg(object: IdentifiedClientStateAminoMsg): IdentifiedClientState {
    return IdentifiedClientState.fromAmino(object.value);
  },
  toAminoMsg(message: IdentifiedClientState): IdentifiedClientStateAminoMsg {
    return {
      type: "cosmos-sdk/IdentifiedClientState",
      value: IdentifiedClientState.toAmino(message)
    };
  },
  fromProtoMsg(message: IdentifiedClientStateProtoMsg): IdentifiedClientState {
    return IdentifiedClientState.decode(message.value);
  },
  toProto(message: IdentifiedClientState): Uint8Array {
    return IdentifiedClientState.encode(message).finish();
  },
  toProtoMsg(message: IdentifiedClientState): IdentifiedClientStateProtoMsg {
    return {
      typeUrl: "/ibc.core.client.v1.IdentifiedClientState",
      value: IdentifiedClientState.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(IdentifiedClientState.typeUrl, IdentifiedClientState);
GlobalDecoderRegistry.registerAminoProtoMapping(IdentifiedClientState.aminoType, IdentifiedClientState.typeUrl);
function createBaseConsensusStateWithHeight(): ConsensusStateWithHeight {
  return {
    height: Height.fromPartial({}),
    consensusState: undefined
  };
}
export const ConsensusStateWithHeight = {
  typeUrl: "/ibc.core.client.v1.ConsensusStateWithHeight",
  aminoType: "cosmos-sdk/ConsensusStateWithHeight",
  is(o: any): o is ConsensusStateWithHeight {
    return o && (o.$typeUrl === ConsensusStateWithHeight.typeUrl || Height.is(o.height));
  },
  isSDK(o: any): o is ConsensusStateWithHeightSDKType {
    return o && (o.$typeUrl === ConsensusStateWithHeight.typeUrl || Height.isSDK(o.height));
  },
  isAmino(o: any): o is ConsensusStateWithHeightAmino {
    return o && (o.$typeUrl === ConsensusStateWithHeight.typeUrl || Height.isAmino(o.height));
  },
  encode(message: ConsensusStateWithHeight, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.height !== undefined) {
      Height.encode(message.height, writer.uint32(10).fork()).ldelim();
    }
    if (message.consensusState !== undefined) {
      Any.encode(message.consensusState, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ConsensusStateWithHeight {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseConsensusStateWithHeight();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.height = Height.decode(reader, reader.uint32());
          break;
        case 2:
          message.consensusState = Any.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): ConsensusStateWithHeight {
    return {
      height: isSet(object.height) ? Height.fromJSON(object.height) : undefined,
      consensusState: isSet(object.consensusState) ? Any.fromJSON(object.consensusState) : undefined
    };
  },
  toJSON(message: ConsensusStateWithHeight): unknown {
    const obj: any = {};
    message.height !== undefined && (obj.height = message.height ? Height.toJSON(message.height) : undefined);
    message.consensusState !== undefined && (obj.consensusState = message.consensusState ? Any.toJSON(message.consensusState) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<ConsensusStateWithHeight>): ConsensusStateWithHeight {
    const message = createBaseConsensusStateWithHeight();
    message.height = object.height !== undefined && object.height !== null ? Height.fromPartial(object.height) : undefined;
    message.consensusState = object.consensusState !== undefined && object.consensusState !== null ? Any.fromPartial(object.consensusState) : undefined;
    return message;
  },
  fromSDK(object: ConsensusStateWithHeightSDKType): ConsensusStateWithHeight {
    return {
      height: object.height ? Height.fromSDK(object.height) : undefined,
      consensusState: object.consensus_state ? Any.fromSDK(object.consensus_state) : undefined
    };
  },
  toSDK(message: ConsensusStateWithHeight): ConsensusStateWithHeightSDKType {
    const obj: any = {};
    message.height !== undefined && (obj.height = message.height ? Height.toSDK(message.height) : undefined);
    message.consensusState !== undefined && (obj.consensus_state = message.consensusState ? Any.toSDK(message.consensusState) : undefined);
    return obj;
  },
  fromAmino(object: ConsensusStateWithHeightAmino): ConsensusStateWithHeight {
    const message = createBaseConsensusStateWithHeight();
    if (object.height !== undefined && object.height !== null) {
      message.height = Height.fromAmino(object.height);
    }
    if (object.consensus_state !== undefined && object.consensus_state !== null) {
      message.consensusState = Any.fromAmino(object.consensus_state);
    }
    return message;
  },
  toAmino(message: ConsensusStateWithHeight): ConsensusStateWithHeightAmino {
    const obj: any = {};
    obj.height = message.height ? Height.toAmino(message.height) : undefined;
    obj.consensus_state = message.consensusState ? Any.toAmino(message.consensusState) : undefined;
    return obj;
  },
  fromAminoMsg(object: ConsensusStateWithHeightAminoMsg): ConsensusStateWithHeight {
    return ConsensusStateWithHeight.fromAmino(object.value);
  },
  toAminoMsg(message: ConsensusStateWithHeight): ConsensusStateWithHeightAminoMsg {
    return {
      type: "cosmos-sdk/ConsensusStateWithHeight",
      value: ConsensusStateWithHeight.toAmino(message)
    };
  },
  fromProtoMsg(message: ConsensusStateWithHeightProtoMsg): ConsensusStateWithHeight {
    return ConsensusStateWithHeight.decode(message.value);
  },
  toProto(message: ConsensusStateWithHeight): Uint8Array {
    return ConsensusStateWithHeight.encode(message).finish();
  },
  toProtoMsg(message: ConsensusStateWithHeight): ConsensusStateWithHeightProtoMsg {
    return {
      typeUrl: "/ibc.core.client.v1.ConsensusStateWithHeight",
      value: ConsensusStateWithHeight.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(ConsensusStateWithHeight.typeUrl, ConsensusStateWithHeight);
GlobalDecoderRegistry.registerAminoProtoMapping(ConsensusStateWithHeight.aminoType, ConsensusStateWithHeight.typeUrl);
function createBaseClientConsensusStates(): ClientConsensusStates {
  return {
    clientId: "",
    consensusStates: []
  };
}
export const ClientConsensusStates = {
  typeUrl: "/ibc.core.client.v1.ClientConsensusStates",
  aminoType: "cosmos-sdk/ClientConsensusStates",
  is(o: any): o is ClientConsensusStates {
    return o && (o.$typeUrl === ClientConsensusStates.typeUrl || typeof o.clientId === "string" && Array.isArray(o.consensusStates) && (!o.consensusStates.length || ConsensusStateWithHeight.is(o.consensusStates[0])));
  },
  isSDK(o: any): o is ClientConsensusStatesSDKType {
    return o && (o.$typeUrl === ClientConsensusStates.typeUrl || typeof o.client_id === "string" && Array.isArray(o.consensus_states) && (!o.consensus_states.length || ConsensusStateWithHeight.isSDK(o.consensus_states[0])));
  },
  isAmino(o: any): o is ClientConsensusStatesAmino {
    return o && (o.$typeUrl === ClientConsensusStates.typeUrl || typeof o.client_id === "string" && Array.isArray(o.consensus_states) && (!o.consensus_states.length || ConsensusStateWithHeight.isAmino(o.consensus_states[0])));
  },
  encode(message: ClientConsensusStates, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.clientId !== "") {
      writer.uint32(10).string(message.clientId);
    }
    for (const v of message.consensusStates) {
      ConsensusStateWithHeight.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ClientConsensusStates {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseClientConsensusStates();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.clientId = reader.string();
          break;
        case 2:
          message.consensusStates.push(ConsensusStateWithHeight.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): ClientConsensusStates {
    return {
      clientId: isSet(object.clientId) ? String(object.clientId) : "",
      consensusStates: Array.isArray(object?.consensusStates) ? object.consensusStates.map((e: any) => ConsensusStateWithHeight.fromJSON(e)) : []
    };
  },
  toJSON(message: ClientConsensusStates): unknown {
    const obj: any = {};
    message.clientId !== undefined && (obj.clientId = message.clientId);
    if (message.consensusStates) {
      obj.consensusStates = message.consensusStates.map(e => e ? ConsensusStateWithHeight.toJSON(e) : undefined);
    } else {
      obj.consensusStates = [];
    }
    return obj;
  },
  fromPartial(object: DeepPartial<ClientConsensusStates>): ClientConsensusStates {
    const message = createBaseClientConsensusStates();
    message.clientId = object.clientId ?? "";
    message.consensusStates = object.consensusStates?.map(e => ConsensusStateWithHeight.fromPartial(e)) || [];
    return message;
  },
  fromSDK(object: ClientConsensusStatesSDKType): ClientConsensusStates {
    return {
      clientId: object?.client_id,
      consensusStates: Array.isArray(object?.consensus_states) ? object.consensus_states.map((e: any) => ConsensusStateWithHeight.fromSDK(e)) : []
    };
  },
  toSDK(message: ClientConsensusStates): ClientConsensusStatesSDKType {
    const obj: any = {};
    obj.client_id = message.clientId;
    if (message.consensusStates) {
      obj.consensus_states = message.consensusStates.map(e => e ? ConsensusStateWithHeight.toSDK(e) : undefined);
    } else {
      obj.consensus_states = [];
    }
    return obj;
  },
  fromAmino(object: ClientConsensusStatesAmino): ClientConsensusStates {
    const message = createBaseClientConsensusStates();
    if (object.client_id !== undefined && object.client_id !== null) {
      message.clientId = object.client_id;
    }
    message.consensusStates = object.consensus_states?.map(e => ConsensusStateWithHeight.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: ClientConsensusStates): ClientConsensusStatesAmino {
    const obj: any = {};
    obj.client_id = message.clientId === "" ? undefined : message.clientId;
    if (message.consensusStates) {
      obj.consensus_states = message.consensusStates.map(e => e ? ConsensusStateWithHeight.toAmino(e) : undefined);
    } else {
      obj.consensus_states = message.consensusStates;
    }
    return obj;
  },
  fromAminoMsg(object: ClientConsensusStatesAminoMsg): ClientConsensusStates {
    return ClientConsensusStates.fromAmino(object.value);
  },
  toAminoMsg(message: ClientConsensusStates): ClientConsensusStatesAminoMsg {
    return {
      type: "cosmos-sdk/ClientConsensusStates",
      value: ClientConsensusStates.toAmino(message)
    };
  },
  fromProtoMsg(message: ClientConsensusStatesProtoMsg): ClientConsensusStates {
    return ClientConsensusStates.decode(message.value);
  },
  toProto(message: ClientConsensusStates): Uint8Array {
    return ClientConsensusStates.encode(message).finish();
  },
  toProtoMsg(message: ClientConsensusStates): ClientConsensusStatesProtoMsg {
    return {
      typeUrl: "/ibc.core.client.v1.ClientConsensusStates",
      value: ClientConsensusStates.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(ClientConsensusStates.typeUrl, ClientConsensusStates);
GlobalDecoderRegistry.registerAminoProtoMapping(ClientConsensusStates.aminoType, ClientConsensusStates.typeUrl);
function createBaseHeight(): Height {
  return {
    revisionNumber: BigInt(0),
    revisionHeight: BigInt(0)
  };
}
export const Height = {
  typeUrl: "/ibc.core.client.v1.Height",
  aminoType: "cosmos-sdk/Height",
  is(o: any): o is Height {
    return o && (o.$typeUrl === Height.typeUrl || typeof o.revisionNumber === "bigint" && typeof o.revisionHeight === "bigint");
  },
  isSDK(o: any): o is HeightSDKType {
    return o && (o.$typeUrl === Height.typeUrl || typeof o.revision_number === "bigint" && typeof o.revision_height === "bigint");
  },
  isAmino(o: any): o is HeightAmino {
    return o && (o.$typeUrl === Height.typeUrl || typeof o.revision_number === "bigint" && typeof o.revision_height === "bigint");
  },
  encode(message: Height, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.revisionNumber !== BigInt(0)) {
      writer.uint32(8).uint64(message.revisionNumber);
    }
    if (message.revisionHeight !== BigInt(0)) {
      writer.uint32(16).uint64(message.revisionHeight);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Height {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseHeight();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.revisionNumber = reader.uint64();
          break;
        case 2:
          message.revisionHeight = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Height {
    return {
      revisionNumber: isSet(object.revisionNumber) ? BigInt(object.revisionNumber.toString()) : BigInt(0),
      revisionHeight: isSet(object.revisionHeight) ? BigInt(object.revisionHeight.toString()) : BigInt(0)
    };
  },
  toJSON(message: Height): unknown {
    const obj: any = {};
    message.revisionNumber !== undefined && (obj.revisionNumber = (message.revisionNumber || BigInt(0)).toString());
    message.revisionHeight !== undefined && (obj.revisionHeight = (message.revisionHeight || BigInt(0)).toString());
    return obj;
  },
  fromPartial(object: DeepPartial<Height>): Height {
    const message = createBaseHeight();
    message.revisionNumber = object.revisionNumber !== undefined && object.revisionNumber !== null ? BigInt(object.revisionNumber.toString()) : BigInt(0);
    message.revisionHeight = object.revisionHeight !== undefined && object.revisionHeight !== null ? BigInt(object.revisionHeight.toString()) : BigInt(0);
    return message;
  },
  fromSDK(object: HeightSDKType): Height {
    return {
      revisionNumber: object?.revision_number,
      revisionHeight: object?.revision_height
    };
  },
  toSDK(message: Height): HeightSDKType {
    const obj: any = {};
    obj.revision_number = message.revisionNumber;
    obj.revision_height = message.revisionHeight;
    return obj;
  },
  fromAmino(object: HeightAmino): Height {
    return {
      revisionNumber: BigInt(object.revision_number || "0"),
      revisionHeight: BigInt(object.revision_height || "0")
    };
  },
  toAmino(message: Height): HeightAmino {
    const obj: any = {};
    obj.revision_number = message.revisionNumber !== BigInt(0) ? message.revisionNumber.toString() : undefined;
    obj.revision_height = message.revisionHeight !== BigInt(0) ? message.revisionHeight.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: HeightAminoMsg): Height {
    return Height.fromAmino(object.value);
  },
  toAminoMsg(message: Height): HeightAminoMsg {
    return {
      type: "cosmos-sdk/Height",
      value: Height.toAmino(message)
    };
  },
  fromProtoMsg(message: HeightProtoMsg): Height {
    return Height.decode(message.value);
  },
  toProto(message: Height): Uint8Array {
    return Height.encode(message).finish();
  },
  toProtoMsg(message: Height): HeightProtoMsg {
    return {
      typeUrl: "/ibc.core.client.v1.Height",
      value: Height.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(Height.typeUrl, Height);
GlobalDecoderRegistry.registerAminoProtoMapping(Height.aminoType, Height.typeUrl);
function createBaseParams(): Params {
  return {
    allowedClients: []
  };
}
export const Params = {
  typeUrl: "/ibc.core.client.v1.Params",
  aminoType: "cosmos-sdk/Params",
  is(o: any): o is Params {
    return o && (o.$typeUrl === Params.typeUrl || Array.isArray(o.allowedClients) && (!o.allowedClients.length || typeof o.allowedClients[0] === "string"));
  },
  isSDK(o: any): o is ParamsSDKType {
    return o && (o.$typeUrl === Params.typeUrl || Array.isArray(o.allowed_clients) && (!o.allowed_clients.length || typeof o.allowed_clients[0] === "string"));
  },
  isAmino(o: any): o is ParamsAmino {
    return o && (o.$typeUrl === Params.typeUrl || Array.isArray(o.allowed_clients) && (!o.allowed_clients.length || typeof o.allowed_clients[0] === "string"));
  },
  encode(message: Params, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.allowedClients) {
      writer.uint32(10).string(v!);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Params {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.allowedClients.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Params {
    return {
      allowedClients: Array.isArray(object?.allowedClients) ? object.allowedClients.map((e: any) => String(e)) : []
    };
  },
  toJSON(message: Params): unknown {
    const obj: any = {};
    if (message.allowedClients) {
      obj.allowedClients = message.allowedClients.map(e => e);
    } else {
      obj.allowedClients = [];
    }
    return obj;
  },
  fromPartial(object: DeepPartial<Params>): Params {
    const message = createBaseParams();
    message.allowedClients = object.allowedClients?.map(e => e) || [];
    return message;
  },
  fromSDK(object: ParamsSDKType): Params {
    return {
      allowedClients: Array.isArray(object?.allowed_clients) ? object.allowed_clients.map((e: any) => e) : []
    };
  },
  toSDK(message: Params): ParamsSDKType {
    const obj: any = {};
    if (message.allowedClients) {
      obj.allowed_clients = message.allowedClients.map(e => e);
    } else {
      obj.allowed_clients = [];
    }
    return obj;
  },
  fromAmino(object: ParamsAmino): Params {
    const message = createBaseParams();
    message.allowedClients = object.allowed_clients?.map(e => e) || [];
    return message;
  },
  toAmino(message: Params): ParamsAmino {
    const obj: any = {};
    if (message.allowedClients) {
      obj.allowed_clients = message.allowedClients.map(e => e);
    } else {
      obj.allowed_clients = message.allowedClients;
    }
    return obj;
  },
  fromAminoMsg(object: ParamsAminoMsg): Params {
    return Params.fromAmino(object.value);
  },
  toAminoMsg(message: Params): ParamsAminoMsg {
    return {
      type: "cosmos-sdk/Params",
      value: Params.toAmino(message)
    };
  },
  fromProtoMsg(message: ParamsProtoMsg): Params {
    return Params.decode(message.value);
  },
  toProto(message: Params): Uint8Array {
    return Params.encode(message).finish();
  },
  toProtoMsg(message: Params): ParamsProtoMsg {
    return {
      typeUrl: "/ibc.core.client.v1.Params",
      value: Params.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(Params.typeUrl, Params);
GlobalDecoderRegistry.registerAminoProtoMapping(Params.aminoType, Params.typeUrl);