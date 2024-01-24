import { Coin, CoinAmino, CoinSDKType } from "../../../../cosmos/base/v1beta1/coin";
import { PacketId, PacketIdAmino, PacketIdSDKType } from "../../../core/channel/v1/channel";
import { BinaryReader, BinaryWriter } from "../../../../binary";
import { DeepPartial, isSet } from "../../../../helpers";
import { GlobalDecoderRegistry } from "../../../../registry";
/** Fee defines the ICS29 receive, acknowledgement and timeout fees */
export interface Fee {
  /** the packet receive fee */
  recvFee: Coin[];
  /** the packet acknowledgement fee */
  ackFee: Coin[];
  /** the packet timeout fee */
  timeoutFee: Coin[];
}
export interface FeeProtoMsg {
  typeUrl: "/ibc.applications.fee.v1.Fee";
  value: Uint8Array;
}
/** Fee defines the ICS29 receive, acknowledgement and timeout fees */
export interface FeeAmino {
  /** the packet receive fee */
  recv_fee?: CoinAmino[];
  /** the packet acknowledgement fee */
  ack_fee?: CoinAmino[];
  /** the packet timeout fee */
  timeout_fee?: CoinAmino[];
}
export interface FeeAminoMsg {
  type: "cosmos-sdk/Fee";
  value: FeeAmino;
}
/** Fee defines the ICS29 receive, acknowledgement and timeout fees */
export interface FeeSDKType {
  recv_fee: CoinSDKType[];
  ack_fee: CoinSDKType[];
  timeout_fee: CoinSDKType[];
}
/** PacketFee contains ICS29 relayer fees, refund address and optional list of permitted relayers */
export interface PacketFee {
  /** fee encapsulates the recv, ack and timeout fees associated with an IBC packet */
  fee: Fee | undefined;
  /** the refund address for unspent fees */
  refundAddress: string;
  /** optional list of relayers permitted to receive fees */
  relayers: string[];
}
export interface PacketFeeProtoMsg {
  typeUrl: "/ibc.applications.fee.v1.PacketFee";
  value: Uint8Array;
}
/** PacketFee contains ICS29 relayer fees, refund address and optional list of permitted relayers */
export interface PacketFeeAmino {
  /** fee encapsulates the recv, ack and timeout fees associated with an IBC packet */
  fee?: FeeAmino | undefined;
  /** the refund address for unspent fees */
  refund_address?: string;
  /** optional list of relayers permitted to receive fees */
  relayers?: string[];
}
export interface PacketFeeAminoMsg {
  type: "cosmos-sdk/PacketFee";
  value: PacketFeeAmino;
}
/** PacketFee contains ICS29 relayer fees, refund address and optional list of permitted relayers */
export interface PacketFeeSDKType {
  fee: FeeSDKType | undefined;
  refund_address: string;
  relayers: string[];
}
/** PacketFees contains a list of type PacketFee */
export interface PacketFees {
  /** list of packet fees */
  packetFees: PacketFee[];
}
export interface PacketFeesProtoMsg {
  typeUrl: "/ibc.applications.fee.v1.PacketFees";
  value: Uint8Array;
}
/** PacketFees contains a list of type PacketFee */
export interface PacketFeesAmino {
  /** list of packet fees */
  packet_fees?: PacketFeeAmino[];
}
export interface PacketFeesAminoMsg {
  type: "cosmos-sdk/PacketFees";
  value: PacketFeesAmino;
}
/** PacketFees contains a list of type PacketFee */
export interface PacketFeesSDKType {
  packet_fees: PacketFeeSDKType[];
}
/** IdentifiedPacketFees contains a list of type PacketFee and associated PacketId */
export interface IdentifiedPacketFees {
  /** unique packet identifier comprised of the channel ID, port ID and sequence */
  packetId: PacketId | undefined;
  /** list of packet fees */
  packetFees: PacketFee[];
}
export interface IdentifiedPacketFeesProtoMsg {
  typeUrl: "/ibc.applications.fee.v1.IdentifiedPacketFees";
  value: Uint8Array;
}
/** IdentifiedPacketFees contains a list of type PacketFee and associated PacketId */
export interface IdentifiedPacketFeesAmino {
  /** unique packet identifier comprised of the channel ID, port ID and sequence */
  packet_id?: PacketIdAmino | undefined;
  /** list of packet fees */
  packet_fees?: PacketFeeAmino[];
}
export interface IdentifiedPacketFeesAminoMsg {
  type: "cosmos-sdk/IdentifiedPacketFees";
  value: IdentifiedPacketFeesAmino;
}
/** IdentifiedPacketFees contains a list of type PacketFee and associated PacketId */
export interface IdentifiedPacketFeesSDKType {
  packet_id: PacketIdSDKType | undefined;
  packet_fees: PacketFeeSDKType[];
}
function createBaseFee(): Fee {
  return {
    recvFee: [],
    ackFee: [],
    timeoutFee: []
  };
}
export const Fee = {
  typeUrl: "/ibc.applications.fee.v1.Fee",
  aminoType: "cosmos-sdk/Fee",
  is(o: any): o is Fee {
    return o && (o.$typeUrl === Fee.typeUrl || Array.isArray(o.recvFee) && (!o.recvFee.length || Coin.is(o.recvFee[0])) && Array.isArray(o.ackFee) && (!o.ackFee.length || Coin.is(o.ackFee[0])) && Array.isArray(o.timeoutFee) && (!o.timeoutFee.length || Coin.is(o.timeoutFee[0])));
  },
  isSDK(o: any): o is FeeSDKType {
    return o && (o.$typeUrl === Fee.typeUrl || Array.isArray(o.recv_fee) && (!o.recv_fee.length || Coin.isSDK(o.recv_fee[0])) && Array.isArray(o.ack_fee) && (!o.ack_fee.length || Coin.isSDK(o.ack_fee[0])) && Array.isArray(o.timeout_fee) && (!o.timeout_fee.length || Coin.isSDK(o.timeout_fee[0])));
  },
  isAmino(o: any): o is FeeAmino {
    return o && (o.$typeUrl === Fee.typeUrl || Array.isArray(o.recv_fee) && (!o.recv_fee.length || Coin.isAmino(o.recv_fee[0])) && Array.isArray(o.ack_fee) && (!o.ack_fee.length || Coin.isAmino(o.ack_fee[0])) && Array.isArray(o.timeout_fee) && (!o.timeout_fee.length || Coin.isAmino(o.timeout_fee[0])));
  },
  encode(message: Fee, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.recvFee) {
      Coin.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.ackFee) {
      Coin.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.timeoutFee) {
      Coin.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Fee {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFee();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.recvFee.push(Coin.decode(reader, reader.uint32()));
          break;
        case 2:
          message.ackFee.push(Coin.decode(reader, reader.uint32()));
          break;
        case 3:
          message.timeoutFee.push(Coin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Fee {
    return {
      recvFee: Array.isArray(object?.recvFee) ? object.recvFee.map((e: any) => Coin.fromJSON(e)) : [],
      ackFee: Array.isArray(object?.ackFee) ? object.ackFee.map((e: any) => Coin.fromJSON(e)) : [],
      timeoutFee: Array.isArray(object?.timeoutFee) ? object.timeoutFee.map((e: any) => Coin.fromJSON(e)) : []
    };
  },
  toJSON(message: Fee): unknown {
    const obj: any = {};
    if (message.recvFee) {
      obj.recvFee = message.recvFee.map(e => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.recvFee = [];
    }
    if (message.ackFee) {
      obj.ackFee = message.ackFee.map(e => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.ackFee = [];
    }
    if (message.timeoutFee) {
      obj.timeoutFee = message.timeoutFee.map(e => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.timeoutFee = [];
    }
    return obj;
  },
  fromPartial(object: DeepPartial<Fee>): Fee {
    const message = createBaseFee();
    message.recvFee = object.recvFee?.map(e => Coin.fromPartial(e)) || [];
    message.ackFee = object.ackFee?.map(e => Coin.fromPartial(e)) || [];
    message.timeoutFee = object.timeoutFee?.map(e => Coin.fromPartial(e)) || [];
    return message;
  },
  fromSDK(object: FeeSDKType): Fee {
    return {
      recvFee: Array.isArray(object?.recv_fee) ? object.recv_fee.map((e: any) => Coin.fromSDK(e)) : [],
      ackFee: Array.isArray(object?.ack_fee) ? object.ack_fee.map((e: any) => Coin.fromSDK(e)) : [],
      timeoutFee: Array.isArray(object?.timeout_fee) ? object.timeout_fee.map((e: any) => Coin.fromSDK(e)) : []
    };
  },
  toSDK(message: Fee): FeeSDKType {
    const obj: any = {};
    if (message.recvFee) {
      obj.recv_fee = message.recvFee.map(e => e ? Coin.toSDK(e) : undefined);
    } else {
      obj.recv_fee = [];
    }
    if (message.ackFee) {
      obj.ack_fee = message.ackFee.map(e => e ? Coin.toSDK(e) : undefined);
    } else {
      obj.ack_fee = [];
    }
    if (message.timeoutFee) {
      obj.timeout_fee = message.timeoutFee.map(e => e ? Coin.toSDK(e) : undefined);
    } else {
      obj.timeout_fee = [];
    }
    return obj;
  },
  fromAmino(object: FeeAmino): Fee {
    const message = createBaseFee();
    message.recvFee = object.recv_fee?.map(e => Coin.fromAmino(e)) || [];
    message.ackFee = object.ack_fee?.map(e => Coin.fromAmino(e)) || [];
    message.timeoutFee = object.timeout_fee?.map(e => Coin.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: Fee): FeeAmino {
    const obj: any = {};
    if (message.recvFee) {
      obj.recv_fee = message.recvFee.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.recv_fee = [];
    }
    if (message.ackFee) {
      obj.ack_fee = message.ackFee.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.ack_fee = [];
    }
    if (message.timeoutFee) {
      obj.timeout_fee = message.timeoutFee.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.timeout_fee = [];
    }
    return obj;
  },
  fromAminoMsg(object: FeeAminoMsg): Fee {
    return Fee.fromAmino(object.value);
  },
  toAminoMsg(message: Fee): FeeAminoMsg {
    return {
      type: "cosmos-sdk/Fee",
      value: Fee.toAmino(message)
    };
  },
  fromProtoMsg(message: FeeProtoMsg): Fee {
    return Fee.decode(message.value);
  },
  toProto(message: Fee): Uint8Array {
    return Fee.encode(message).finish();
  },
  toProtoMsg(message: Fee): FeeProtoMsg {
    return {
      typeUrl: "/ibc.applications.fee.v1.Fee",
      value: Fee.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(Fee.typeUrl, Fee);
GlobalDecoderRegistry.registerAminoProtoMapping(Fee.aminoType, Fee.typeUrl);
function createBasePacketFee(): PacketFee {
  return {
    fee: Fee.fromPartial({}),
    refundAddress: "",
    relayers: []
  };
}
export const PacketFee = {
  typeUrl: "/ibc.applications.fee.v1.PacketFee",
  aminoType: "cosmos-sdk/PacketFee",
  is(o: any): o is PacketFee {
    return o && (o.$typeUrl === PacketFee.typeUrl || Fee.is(o.fee) && typeof o.refundAddress === "string" && Array.isArray(o.relayers) && (!o.relayers.length || typeof o.relayers[0] === "string"));
  },
  isSDK(o: any): o is PacketFeeSDKType {
    return o && (o.$typeUrl === PacketFee.typeUrl || Fee.isSDK(o.fee) && typeof o.refund_address === "string" && Array.isArray(o.relayers) && (!o.relayers.length || typeof o.relayers[0] === "string"));
  },
  isAmino(o: any): o is PacketFeeAmino {
    return o && (o.$typeUrl === PacketFee.typeUrl || Fee.isAmino(o.fee) && typeof o.refund_address === "string" && Array.isArray(o.relayers) && (!o.relayers.length || typeof o.relayers[0] === "string"));
  },
  encode(message: PacketFee, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.fee !== undefined) {
      Fee.encode(message.fee, writer.uint32(10).fork()).ldelim();
    }
    if (message.refundAddress !== "") {
      writer.uint32(18).string(message.refundAddress);
    }
    for (const v of message.relayers) {
      writer.uint32(26).string(v!);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): PacketFee {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePacketFee();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.fee = Fee.decode(reader, reader.uint32());
          break;
        case 2:
          message.refundAddress = reader.string();
          break;
        case 3:
          message.relayers.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): PacketFee {
    return {
      fee: isSet(object.fee) ? Fee.fromJSON(object.fee) : undefined,
      refundAddress: isSet(object.refundAddress) ? String(object.refundAddress) : "",
      relayers: Array.isArray(object?.relayers) ? object.relayers.map((e: any) => String(e)) : []
    };
  },
  toJSON(message: PacketFee): unknown {
    const obj: any = {};
    message.fee !== undefined && (obj.fee = message.fee ? Fee.toJSON(message.fee) : undefined);
    message.refundAddress !== undefined && (obj.refundAddress = message.refundAddress);
    if (message.relayers) {
      obj.relayers = message.relayers.map(e => e);
    } else {
      obj.relayers = [];
    }
    return obj;
  },
  fromPartial(object: DeepPartial<PacketFee>): PacketFee {
    const message = createBasePacketFee();
    message.fee = object.fee !== undefined && object.fee !== null ? Fee.fromPartial(object.fee) : undefined;
    message.refundAddress = object.refundAddress ?? "";
    message.relayers = object.relayers?.map(e => e) || [];
    return message;
  },
  fromSDK(object: PacketFeeSDKType): PacketFee {
    return {
      fee: object.fee ? Fee.fromSDK(object.fee) : undefined,
      refundAddress: object?.refund_address,
      relayers: Array.isArray(object?.relayers) ? object.relayers.map((e: any) => e) : []
    };
  },
  toSDK(message: PacketFee): PacketFeeSDKType {
    const obj: any = {};
    message.fee !== undefined && (obj.fee = message.fee ? Fee.toSDK(message.fee) : undefined);
    obj.refund_address = message.refundAddress;
    if (message.relayers) {
      obj.relayers = message.relayers.map(e => e);
    } else {
      obj.relayers = [];
    }
    return obj;
  },
  fromAmino(object: PacketFeeAmino): PacketFee {
    const message = createBasePacketFee();
    if (object.fee !== undefined && object.fee !== null) {
      message.fee = Fee.fromAmino(object.fee);
    }
    if (object.refund_address !== undefined && object.refund_address !== null) {
      message.refundAddress = object.refund_address;
    }
    message.relayers = object.relayers?.map(e => e) || [];
    return message;
  },
  toAmino(message: PacketFee): PacketFeeAmino {
    const obj: any = {};
    obj.fee = message.fee ? Fee.toAmino(message.fee) : undefined;
    obj.refund_address = message.refundAddress;
    if (message.relayers) {
      obj.relayers = message.relayers.map(e => e);
    } else {
      obj.relayers = [];
    }
    return obj;
  },
  fromAminoMsg(object: PacketFeeAminoMsg): PacketFee {
    return PacketFee.fromAmino(object.value);
  },
  toAminoMsg(message: PacketFee): PacketFeeAminoMsg {
    return {
      type: "cosmos-sdk/PacketFee",
      value: PacketFee.toAmino(message)
    };
  },
  fromProtoMsg(message: PacketFeeProtoMsg): PacketFee {
    return PacketFee.decode(message.value);
  },
  toProto(message: PacketFee): Uint8Array {
    return PacketFee.encode(message).finish();
  },
  toProtoMsg(message: PacketFee): PacketFeeProtoMsg {
    return {
      typeUrl: "/ibc.applications.fee.v1.PacketFee",
      value: PacketFee.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(PacketFee.typeUrl, PacketFee);
GlobalDecoderRegistry.registerAminoProtoMapping(PacketFee.aminoType, PacketFee.typeUrl);
function createBasePacketFees(): PacketFees {
  return {
    packetFees: []
  };
}
export const PacketFees = {
  typeUrl: "/ibc.applications.fee.v1.PacketFees",
  aminoType: "cosmos-sdk/PacketFees",
  is(o: any): o is PacketFees {
    return o && (o.$typeUrl === PacketFees.typeUrl || Array.isArray(o.packetFees) && (!o.packetFees.length || PacketFee.is(o.packetFees[0])));
  },
  isSDK(o: any): o is PacketFeesSDKType {
    return o && (o.$typeUrl === PacketFees.typeUrl || Array.isArray(o.packet_fees) && (!o.packet_fees.length || PacketFee.isSDK(o.packet_fees[0])));
  },
  isAmino(o: any): o is PacketFeesAmino {
    return o && (o.$typeUrl === PacketFees.typeUrl || Array.isArray(o.packet_fees) && (!o.packet_fees.length || PacketFee.isAmino(o.packet_fees[0])));
  },
  encode(message: PacketFees, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.packetFees) {
      PacketFee.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): PacketFees {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePacketFees();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.packetFees.push(PacketFee.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): PacketFees {
    return {
      packetFees: Array.isArray(object?.packetFees) ? object.packetFees.map((e: any) => PacketFee.fromJSON(e)) : []
    };
  },
  toJSON(message: PacketFees): unknown {
    const obj: any = {};
    if (message.packetFees) {
      obj.packetFees = message.packetFees.map(e => e ? PacketFee.toJSON(e) : undefined);
    } else {
      obj.packetFees = [];
    }
    return obj;
  },
  fromPartial(object: DeepPartial<PacketFees>): PacketFees {
    const message = createBasePacketFees();
    message.packetFees = object.packetFees?.map(e => PacketFee.fromPartial(e)) || [];
    return message;
  },
  fromSDK(object: PacketFeesSDKType): PacketFees {
    return {
      packetFees: Array.isArray(object?.packet_fees) ? object.packet_fees.map((e: any) => PacketFee.fromSDK(e)) : []
    };
  },
  toSDK(message: PacketFees): PacketFeesSDKType {
    const obj: any = {};
    if (message.packetFees) {
      obj.packet_fees = message.packetFees.map(e => e ? PacketFee.toSDK(e) : undefined);
    } else {
      obj.packet_fees = [];
    }
    return obj;
  },
  fromAmino(object: PacketFeesAmino): PacketFees {
    const message = createBasePacketFees();
    message.packetFees = object.packet_fees?.map(e => PacketFee.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: PacketFees): PacketFeesAmino {
    const obj: any = {};
    if (message.packetFees) {
      obj.packet_fees = message.packetFees.map(e => e ? PacketFee.toAmino(e) : undefined);
    } else {
      obj.packet_fees = [];
    }
    return obj;
  },
  fromAminoMsg(object: PacketFeesAminoMsg): PacketFees {
    return PacketFees.fromAmino(object.value);
  },
  toAminoMsg(message: PacketFees): PacketFeesAminoMsg {
    return {
      type: "cosmos-sdk/PacketFees",
      value: PacketFees.toAmino(message)
    };
  },
  fromProtoMsg(message: PacketFeesProtoMsg): PacketFees {
    return PacketFees.decode(message.value);
  },
  toProto(message: PacketFees): Uint8Array {
    return PacketFees.encode(message).finish();
  },
  toProtoMsg(message: PacketFees): PacketFeesProtoMsg {
    return {
      typeUrl: "/ibc.applications.fee.v1.PacketFees",
      value: PacketFees.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(PacketFees.typeUrl, PacketFees);
GlobalDecoderRegistry.registerAminoProtoMapping(PacketFees.aminoType, PacketFees.typeUrl);
function createBaseIdentifiedPacketFees(): IdentifiedPacketFees {
  return {
    packetId: PacketId.fromPartial({}),
    packetFees: []
  };
}
export const IdentifiedPacketFees = {
  typeUrl: "/ibc.applications.fee.v1.IdentifiedPacketFees",
  aminoType: "cosmos-sdk/IdentifiedPacketFees",
  is(o: any): o is IdentifiedPacketFees {
    return o && (o.$typeUrl === IdentifiedPacketFees.typeUrl || PacketId.is(o.packetId) && Array.isArray(o.packetFees) && (!o.packetFees.length || PacketFee.is(o.packetFees[0])));
  },
  isSDK(o: any): o is IdentifiedPacketFeesSDKType {
    return o && (o.$typeUrl === IdentifiedPacketFees.typeUrl || PacketId.isSDK(o.packet_id) && Array.isArray(o.packet_fees) && (!o.packet_fees.length || PacketFee.isSDK(o.packet_fees[0])));
  },
  isAmino(o: any): o is IdentifiedPacketFeesAmino {
    return o && (o.$typeUrl === IdentifiedPacketFees.typeUrl || PacketId.isAmino(o.packet_id) && Array.isArray(o.packet_fees) && (!o.packet_fees.length || PacketFee.isAmino(o.packet_fees[0])));
  },
  encode(message: IdentifiedPacketFees, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.packetId !== undefined) {
      PacketId.encode(message.packetId, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.packetFees) {
      PacketFee.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): IdentifiedPacketFees {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseIdentifiedPacketFees();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.packetId = PacketId.decode(reader, reader.uint32());
          break;
        case 2:
          message.packetFees.push(PacketFee.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): IdentifiedPacketFees {
    return {
      packetId: isSet(object.packetId) ? PacketId.fromJSON(object.packetId) : undefined,
      packetFees: Array.isArray(object?.packetFees) ? object.packetFees.map((e: any) => PacketFee.fromJSON(e)) : []
    };
  },
  toJSON(message: IdentifiedPacketFees): unknown {
    const obj: any = {};
    message.packetId !== undefined && (obj.packetId = message.packetId ? PacketId.toJSON(message.packetId) : undefined);
    if (message.packetFees) {
      obj.packetFees = message.packetFees.map(e => e ? PacketFee.toJSON(e) : undefined);
    } else {
      obj.packetFees = [];
    }
    return obj;
  },
  fromPartial(object: DeepPartial<IdentifiedPacketFees>): IdentifiedPacketFees {
    const message = createBaseIdentifiedPacketFees();
    message.packetId = object.packetId !== undefined && object.packetId !== null ? PacketId.fromPartial(object.packetId) : undefined;
    message.packetFees = object.packetFees?.map(e => PacketFee.fromPartial(e)) || [];
    return message;
  },
  fromSDK(object: IdentifiedPacketFeesSDKType): IdentifiedPacketFees {
    return {
      packetId: object.packet_id ? PacketId.fromSDK(object.packet_id) : undefined,
      packetFees: Array.isArray(object?.packet_fees) ? object.packet_fees.map((e: any) => PacketFee.fromSDK(e)) : []
    };
  },
  toSDK(message: IdentifiedPacketFees): IdentifiedPacketFeesSDKType {
    const obj: any = {};
    message.packetId !== undefined && (obj.packet_id = message.packetId ? PacketId.toSDK(message.packetId) : undefined);
    if (message.packetFees) {
      obj.packet_fees = message.packetFees.map(e => e ? PacketFee.toSDK(e) : undefined);
    } else {
      obj.packet_fees = [];
    }
    return obj;
  },
  fromAmino(object: IdentifiedPacketFeesAmino): IdentifiedPacketFees {
    const message = createBaseIdentifiedPacketFees();
    if (object.packet_id !== undefined && object.packet_id !== null) {
      message.packetId = PacketId.fromAmino(object.packet_id);
    }
    message.packetFees = object.packet_fees?.map(e => PacketFee.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: IdentifiedPacketFees): IdentifiedPacketFeesAmino {
    const obj: any = {};
    obj.packet_id = message.packetId ? PacketId.toAmino(message.packetId) : undefined;
    if (message.packetFees) {
      obj.packet_fees = message.packetFees.map(e => e ? PacketFee.toAmino(e) : undefined);
    } else {
      obj.packet_fees = [];
    }
    return obj;
  },
  fromAminoMsg(object: IdentifiedPacketFeesAminoMsg): IdentifiedPacketFees {
    return IdentifiedPacketFees.fromAmino(object.value);
  },
  toAminoMsg(message: IdentifiedPacketFees): IdentifiedPacketFeesAminoMsg {
    return {
      type: "cosmos-sdk/IdentifiedPacketFees",
      value: IdentifiedPacketFees.toAmino(message)
    };
  },
  fromProtoMsg(message: IdentifiedPacketFeesProtoMsg): IdentifiedPacketFees {
    return IdentifiedPacketFees.decode(message.value);
  },
  toProto(message: IdentifiedPacketFees): Uint8Array {
    return IdentifiedPacketFees.encode(message).finish();
  },
  toProtoMsg(message: IdentifiedPacketFees): IdentifiedPacketFeesProtoMsg {
    return {
      typeUrl: "/ibc.applications.fee.v1.IdentifiedPacketFees",
      value: IdentifiedPacketFees.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(IdentifiedPacketFees.typeUrl, IdentifiedPacketFees);
GlobalDecoderRegistry.registerAminoProtoMapping(IdentifiedPacketFees.aminoType, IdentifiedPacketFees.typeUrl);