import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet, bytesFromBase64, base64FromBytes, DeepPartial } from "../../../helpers";
import { GlobalDecoderRegistry } from "../../../registry";
/** MsgInit defines the Create request type for the Msg/Create RPC method. */
export interface MsgInit {
  /** sender is the address of the sender of this message. */
  sender: string;
  /** account_type is the type of the account to be created. */
  accountType: string;
  /**
   * message is the message to be sent to the account, it's up to the account
   * implementation to decide what encoding format should be used to interpret
   * this message.
   */
  message: Uint8Array;
}
export interface MsgInitProtoMsg {
  typeUrl: "/cosmos.accounts.v1.MsgInit";
  value: Uint8Array;
}
/** MsgInit defines the Create request type for the Msg/Create RPC method. */
export interface MsgInitAmino {
  /** sender is the address of the sender of this message. */
  sender?: string;
  /** account_type is the type of the account to be created. */
  account_type?: string;
  /**
   * message is the message to be sent to the account, it's up to the account
   * implementation to decide what encoding format should be used to interpret
   * this message.
   */
  message?: string;
}
export interface MsgInitAminoMsg {
  type: "cosmos-sdk/MsgInit";
  value: MsgInitAmino;
}
/** MsgInit defines the Create request type for the Msg/Create RPC method. */
export interface MsgInitSDKType {
  sender: string;
  account_type: string;
  message: Uint8Array;
}
/** MsgInitResponse defines the Create response type for the Msg/Create RPC method. */
export interface MsgInitResponse {
  /** account_address is the address of the newly created account. */
  accountAddress: string;
  /** response is the response returned by the account implementation. */
  response: Uint8Array;
}
export interface MsgInitResponseProtoMsg {
  typeUrl: "/cosmos.accounts.v1.MsgInitResponse";
  value: Uint8Array;
}
/** MsgInitResponse defines the Create response type for the Msg/Create RPC method. */
export interface MsgInitResponseAmino {
  /** account_address is the address of the newly created account. */
  account_address?: string;
  /** response is the response returned by the account implementation. */
  response?: string;
}
export interface MsgInitResponseAminoMsg {
  type: "cosmos-sdk/MsgInitResponse";
  value: MsgInitResponseAmino;
}
/** MsgInitResponse defines the Create response type for the Msg/Create RPC method. */
export interface MsgInitResponseSDKType {
  account_address: string;
  response: Uint8Array;
}
/** MsgExecute defines the Execute request type for the Msg/Execute RPC method. */
export interface MsgExecute {
  /** sender is the address of the sender of this message. */
  sender: string;
  /** target is the address of the account to be executed. */
  target: string;
  /** message is the message to be sent to the account, it's up to the account */
  message: Uint8Array;
}
export interface MsgExecuteProtoMsg {
  typeUrl: "/cosmos.accounts.v1.MsgExecute";
  value: Uint8Array;
}
/** MsgExecute defines the Execute request type for the Msg/Execute RPC method. */
export interface MsgExecuteAmino {
  /** sender is the address of the sender of this message. */
  sender?: string;
  /** target is the address of the account to be executed. */
  target?: string;
  /** message is the message to be sent to the account, it's up to the account */
  message?: string;
}
export interface MsgExecuteAminoMsg {
  type: "cosmos-sdk/MsgExecute";
  value: MsgExecuteAmino;
}
/** MsgExecute defines the Execute request type for the Msg/Execute RPC method. */
export interface MsgExecuteSDKType {
  sender: string;
  target: string;
  message: Uint8Array;
}
/** MsgExecuteResponse defines the Execute response type for the Msg/Execute RPC method. */
export interface MsgExecuteResponse {
  /** response is the response returned by the account implementation. */
  response: Uint8Array;
}
export interface MsgExecuteResponseProtoMsg {
  typeUrl: "/cosmos.accounts.v1.MsgExecuteResponse";
  value: Uint8Array;
}
/** MsgExecuteResponse defines the Execute response type for the Msg/Execute RPC method. */
export interface MsgExecuteResponseAmino {
  /** response is the response returned by the account implementation. */
  response?: string;
}
export interface MsgExecuteResponseAminoMsg {
  type: "cosmos-sdk/MsgExecuteResponse";
  value: MsgExecuteResponseAmino;
}
/** MsgExecuteResponse defines the Execute response type for the Msg/Execute RPC method. */
export interface MsgExecuteResponseSDKType {
  response: Uint8Array;
}
function createBaseMsgInit(): MsgInit {
  return {
    sender: "",
    accountType: "",
    message: new Uint8Array()
  };
}
export const MsgInit = {
  typeUrl: "/cosmos.accounts.v1.MsgInit",
  aminoType: "cosmos-sdk/MsgInit",
  is(o: any): o is MsgInit {
    return o && (o.$typeUrl === MsgInit.typeUrl || typeof o.sender === "string" && typeof o.accountType === "string" && (o.message instanceof Uint8Array || typeof o.message === "string"));
  },
  isSDK(o: any): o is MsgInitSDKType {
    return o && (o.$typeUrl === MsgInit.typeUrl || typeof o.sender === "string" && typeof o.account_type === "string" && (o.message instanceof Uint8Array || typeof o.message === "string"));
  },
  isAmino(o: any): o is MsgInitAmino {
    return o && (o.$typeUrl === MsgInit.typeUrl || typeof o.sender === "string" && typeof o.account_type === "string" && (o.message instanceof Uint8Array || typeof o.message === "string"));
  },
  encode(message: MsgInit, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    if (message.accountType !== "") {
      writer.uint32(18).string(message.accountType);
    }
    if (message.message.length !== 0) {
      writer.uint32(26).bytes(message.message);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgInit {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgInit();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;
        case 2:
          message.accountType = reader.string();
          break;
        case 3:
          message.message = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgInit {
    return {
      sender: isSet(object.sender) ? String(object.sender) : "",
      accountType: isSet(object.accountType) ? String(object.accountType) : "",
      message: isSet(object.message) ? bytesFromBase64(object.message) : new Uint8Array()
    };
  },
  toJSON(message: MsgInit): unknown {
    const obj: any = {};
    message.sender !== undefined && (obj.sender = message.sender);
    message.accountType !== undefined && (obj.accountType = message.accountType);
    message.message !== undefined && (obj.message = base64FromBytes(message.message !== undefined ? message.message : new Uint8Array()));
    return obj;
  },
  fromPartial(object: DeepPartial<MsgInit>): MsgInit {
    const message = createBaseMsgInit();
    message.sender = object.sender ?? "";
    message.accountType = object.accountType ?? "";
    message.message = object.message ?? new Uint8Array();
    return message;
  },
  fromSDK(object: MsgInitSDKType): MsgInit {
    return {
      sender: object?.sender,
      accountType: object?.account_type,
      message: object?.message
    };
  },
  toSDK(message: MsgInit): MsgInitSDKType {
    const obj: any = {};
    obj.sender = message.sender;
    obj.account_type = message.accountType;
    obj.message = message.message;
    return obj;
  },
  fromAmino(object: MsgInitAmino): MsgInit {
    const message = createBaseMsgInit();
    if (object.sender !== undefined && object.sender !== null) {
      message.sender = object.sender;
    }
    if (object.account_type !== undefined && object.account_type !== null) {
      message.accountType = object.account_type;
    }
    if (object.message !== undefined && object.message !== null) {
      message.message = bytesFromBase64(object.message);
    }
    return message;
  },
  toAmino(message: MsgInit): MsgInitAmino {
    const obj: any = {};
    obj.sender = message.sender === "" ? undefined : message.sender;
    obj.account_type = message.accountType === "" ? undefined : message.accountType;
    obj.message = message.message ? base64FromBytes(message.message) : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgInitAminoMsg): MsgInit {
    return MsgInit.fromAmino(object.value);
  },
  toAminoMsg(message: MsgInit): MsgInitAminoMsg {
    return {
      type: "cosmos-sdk/MsgInit",
      value: MsgInit.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgInitProtoMsg): MsgInit {
    return MsgInit.decode(message.value);
  },
  toProto(message: MsgInit): Uint8Array {
    return MsgInit.encode(message).finish();
  },
  toProtoMsg(message: MsgInit): MsgInitProtoMsg {
    return {
      typeUrl: "/cosmos.accounts.v1.MsgInit",
      value: MsgInit.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgInit.typeUrl, MsgInit);
GlobalDecoderRegistry.registerAminoProtoMapping(MsgInit.aminoType, MsgInit.typeUrl);
function createBaseMsgInitResponse(): MsgInitResponse {
  return {
    accountAddress: "",
    response: new Uint8Array()
  };
}
export const MsgInitResponse = {
  typeUrl: "/cosmos.accounts.v1.MsgInitResponse",
  aminoType: "cosmos-sdk/MsgInitResponse",
  is(o: any): o is MsgInitResponse {
    return o && (o.$typeUrl === MsgInitResponse.typeUrl || typeof o.accountAddress === "string" && (o.response instanceof Uint8Array || typeof o.response === "string"));
  },
  isSDK(o: any): o is MsgInitResponseSDKType {
    return o && (o.$typeUrl === MsgInitResponse.typeUrl || typeof o.account_address === "string" && (o.response instanceof Uint8Array || typeof o.response === "string"));
  },
  isAmino(o: any): o is MsgInitResponseAmino {
    return o && (o.$typeUrl === MsgInitResponse.typeUrl || typeof o.account_address === "string" && (o.response instanceof Uint8Array || typeof o.response === "string"));
  },
  encode(message: MsgInitResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.accountAddress !== "") {
      writer.uint32(10).string(message.accountAddress);
    }
    if (message.response.length !== 0) {
      writer.uint32(18).bytes(message.response);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgInitResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgInitResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.accountAddress = reader.string();
          break;
        case 2:
          message.response = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgInitResponse {
    return {
      accountAddress: isSet(object.accountAddress) ? String(object.accountAddress) : "",
      response: isSet(object.response) ? bytesFromBase64(object.response) : new Uint8Array()
    };
  },
  toJSON(message: MsgInitResponse): unknown {
    const obj: any = {};
    message.accountAddress !== undefined && (obj.accountAddress = message.accountAddress);
    message.response !== undefined && (obj.response = base64FromBytes(message.response !== undefined ? message.response : new Uint8Array()));
    return obj;
  },
  fromPartial(object: DeepPartial<MsgInitResponse>): MsgInitResponse {
    const message = createBaseMsgInitResponse();
    message.accountAddress = object.accountAddress ?? "";
    message.response = object.response ?? new Uint8Array();
    return message;
  },
  fromSDK(object: MsgInitResponseSDKType): MsgInitResponse {
    return {
      accountAddress: object?.account_address,
      response: object?.response
    };
  },
  toSDK(message: MsgInitResponse): MsgInitResponseSDKType {
    const obj: any = {};
    obj.account_address = message.accountAddress;
    obj.response = message.response;
    return obj;
  },
  fromAmino(object: MsgInitResponseAmino): MsgInitResponse {
    const message = createBaseMsgInitResponse();
    if (object.account_address !== undefined && object.account_address !== null) {
      message.accountAddress = object.account_address;
    }
    if (object.response !== undefined && object.response !== null) {
      message.response = bytesFromBase64(object.response);
    }
    return message;
  },
  toAmino(message: MsgInitResponse): MsgInitResponseAmino {
    const obj: any = {};
    obj.account_address = message.accountAddress === "" ? undefined : message.accountAddress;
    obj.response = message.response ? base64FromBytes(message.response) : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgInitResponseAminoMsg): MsgInitResponse {
    return MsgInitResponse.fromAmino(object.value);
  },
  toAminoMsg(message: MsgInitResponse): MsgInitResponseAminoMsg {
    return {
      type: "cosmos-sdk/MsgInitResponse",
      value: MsgInitResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgInitResponseProtoMsg): MsgInitResponse {
    return MsgInitResponse.decode(message.value);
  },
  toProto(message: MsgInitResponse): Uint8Array {
    return MsgInitResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgInitResponse): MsgInitResponseProtoMsg {
    return {
      typeUrl: "/cosmos.accounts.v1.MsgInitResponse",
      value: MsgInitResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgInitResponse.typeUrl, MsgInitResponse);
GlobalDecoderRegistry.registerAminoProtoMapping(MsgInitResponse.aminoType, MsgInitResponse.typeUrl);
function createBaseMsgExecute(): MsgExecute {
  return {
    sender: "",
    target: "",
    message: new Uint8Array()
  };
}
export const MsgExecute = {
  typeUrl: "/cosmos.accounts.v1.MsgExecute",
  aminoType: "cosmos-sdk/MsgExecute",
  is(o: any): o is MsgExecute {
    return o && (o.$typeUrl === MsgExecute.typeUrl || typeof o.sender === "string" && typeof o.target === "string" && (o.message instanceof Uint8Array || typeof o.message === "string"));
  },
  isSDK(o: any): o is MsgExecuteSDKType {
    return o && (o.$typeUrl === MsgExecute.typeUrl || typeof o.sender === "string" && typeof o.target === "string" && (o.message instanceof Uint8Array || typeof o.message === "string"));
  },
  isAmino(o: any): o is MsgExecuteAmino {
    return o && (o.$typeUrl === MsgExecute.typeUrl || typeof o.sender === "string" && typeof o.target === "string" && (o.message instanceof Uint8Array || typeof o.message === "string"));
  },
  encode(message: MsgExecute, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    if (message.target !== "") {
      writer.uint32(18).string(message.target);
    }
    if (message.message.length !== 0) {
      writer.uint32(26).bytes(message.message);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgExecute {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgExecute();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;
        case 2:
          message.target = reader.string();
          break;
        case 3:
          message.message = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgExecute {
    return {
      sender: isSet(object.sender) ? String(object.sender) : "",
      target: isSet(object.target) ? String(object.target) : "",
      message: isSet(object.message) ? bytesFromBase64(object.message) : new Uint8Array()
    };
  },
  toJSON(message: MsgExecute): unknown {
    const obj: any = {};
    message.sender !== undefined && (obj.sender = message.sender);
    message.target !== undefined && (obj.target = message.target);
    message.message !== undefined && (obj.message = base64FromBytes(message.message !== undefined ? message.message : new Uint8Array()));
    return obj;
  },
  fromPartial(object: DeepPartial<MsgExecute>): MsgExecute {
    const message = createBaseMsgExecute();
    message.sender = object.sender ?? "";
    message.target = object.target ?? "";
    message.message = object.message ?? new Uint8Array();
    return message;
  },
  fromSDK(object: MsgExecuteSDKType): MsgExecute {
    return {
      sender: object?.sender,
      target: object?.target,
      message: object?.message
    };
  },
  toSDK(message: MsgExecute): MsgExecuteSDKType {
    const obj: any = {};
    obj.sender = message.sender;
    obj.target = message.target;
    obj.message = message.message;
    return obj;
  },
  fromAmino(object: MsgExecuteAmino): MsgExecute {
    const message = createBaseMsgExecute();
    if (object.sender !== undefined && object.sender !== null) {
      message.sender = object.sender;
    }
    if (object.target !== undefined && object.target !== null) {
      message.target = object.target;
    }
    if (object.message !== undefined && object.message !== null) {
      message.message = bytesFromBase64(object.message);
    }
    return message;
  },
  toAmino(message: MsgExecute): MsgExecuteAmino {
    const obj: any = {};
    obj.sender = message.sender === "" ? undefined : message.sender;
    obj.target = message.target === "" ? undefined : message.target;
    obj.message = message.message ? base64FromBytes(message.message) : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgExecuteAminoMsg): MsgExecute {
    return MsgExecute.fromAmino(object.value);
  },
  toAminoMsg(message: MsgExecute): MsgExecuteAminoMsg {
    return {
      type: "cosmos-sdk/MsgExecute",
      value: MsgExecute.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgExecuteProtoMsg): MsgExecute {
    return MsgExecute.decode(message.value);
  },
  toProto(message: MsgExecute): Uint8Array {
    return MsgExecute.encode(message).finish();
  },
  toProtoMsg(message: MsgExecute): MsgExecuteProtoMsg {
    return {
      typeUrl: "/cosmos.accounts.v1.MsgExecute",
      value: MsgExecute.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgExecute.typeUrl, MsgExecute);
GlobalDecoderRegistry.registerAminoProtoMapping(MsgExecute.aminoType, MsgExecute.typeUrl);
function createBaseMsgExecuteResponse(): MsgExecuteResponse {
  return {
    response: new Uint8Array()
  };
}
export const MsgExecuteResponse = {
  typeUrl: "/cosmos.accounts.v1.MsgExecuteResponse",
  aminoType: "cosmos-sdk/MsgExecuteResponse",
  is(o: any): o is MsgExecuteResponse {
    return o && (o.$typeUrl === MsgExecuteResponse.typeUrl || o.response instanceof Uint8Array || typeof o.response === "string");
  },
  isSDK(o: any): o is MsgExecuteResponseSDKType {
    return o && (o.$typeUrl === MsgExecuteResponse.typeUrl || o.response instanceof Uint8Array || typeof o.response === "string");
  },
  isAmino(o: any): o is MsgExecuteResponseAmino {
    return o && (o.$typeUrl === MsgExecuteResponse.typeUrl || o.response instanceof Uint8Array || typeof o.response === "string");
  },
  encode(message: MsgExecuteResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.response.length !== 0) {
      writer.uint32(10).bytes(message.response);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgExecuteResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgExecuteResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.response = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgExecuteResponse {
    return {
      response: isSet(object.response) ? bytesFromBase64(object.response) : new Uint8Array()
    };
  },
  toJSON(message: MsgExecuteResponse): unknown {
    const obj: any = {};
    message.response !== undefined && (obj.response = base64FromBytes(message.response !== undefined ? message.response : new Uint8Array()));
    return obj;
  },
  fromPartial(object: DeepPartial<MsgExecuteResponse>): MsgExecuteResponse {
    const message = createBaseMsgExecuteResponse();
    message.response = object.response ?? new Uint8Array();
    return message;
  },
  fromSDK(object: MsgExecuteResponseSDKType): MsgExecuteResponse {
    return {
      response: object?.response
    };
  },
  toSDK(message: MsgExecuteResponse): MsgExecuteResponseSDKType {
    const obj: any = {};
    obj.response = message.response;
    return obj;
  },
  fromAmino(object: MsgExecuteResponseAmino): MsgExecuteResponse {
    const message = createBaseMsgExecuteResponse();
    if (object.response !== undefined && object.response !== null) {
      message.response = bytesFromBase64(object.response);
    }
    return message;
  },
  toAmino(message: MsgExecuteResponse): MsgExecuteResponseAmino {
    const obj: any = {};
    obj.response = message.response ? base64FromBytes(message.response) : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgExecuteResponseAminoMsg): MsgExecuteResponse {
    return MsgExecuteResponse.fromAmino(object.value);
  },
  toAminoMsg(message: MsgExecuteResponse): MsgExecuteResponseAminoMsg {
    return {
      type: "cosmos-sdk/MsgExecuteResponse",
      value: MsgExecuteResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgExecuteResponseProtoMsg): MsgExecuteResponse {
    return MsgExecuteResponse.decode(message.value);
  },
  toProto(message: MsgExecuteResponse): Uint8Array {
    return MsgExecuteResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgExecuteResponse): MsgExecuteResponseProtoMsg {
    return {
      typeUrl: "/cosmos.accounts.v1.MsgExecuteResponse",
      value: MsgExecuteResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgExecuteResponse.typeUrl, MsgExecuteResponse);
GlobalDecoderRegistry.registerAminoProtoMapping(MsgExecuteResponse.aminoType, MsgExecuteResponse.typeUrl);