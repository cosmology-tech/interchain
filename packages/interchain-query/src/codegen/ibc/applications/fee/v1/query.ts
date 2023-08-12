import { PageRequest, PageRequestAmino, PageRequestSDKType, PageResponse, PageResponseAmino, PageResponseSDKType } from "../../../../cosmos/base/query/v1beta1/pagination";
import { PacketId, PacketIdAmino, PacketIdSDKType } from "../../../core/channel/v1/channel";
import { IdentifiedPacketFees, IdentifiedPacketFeesAmino, IdentifiedPacketFeesSDKType } from "./fee";
import { Coin, CoinAmino, CoinSDKType } from "../../../../cosmos/base/v1beta1/coin";
import { FeeEnabledChannel, FeeEnabledChannelAmino, FeeEnabledChannelSDKType } from "./genesis";
import { BinaryReader, BinaryWriter } from "../../../../binary";
import { isSet, DeepPartial } from "../../../../helpers";
/** QueryIncentivizedPacketsRequest defines the request type for the IncentivizedPackets rpc */
export interface QueryIncentivizedPacketsRequest {
  /** pagination defines an optional pagination for the request. */
  pagination: PageRequest | undefined;
  /** block height at which to query */
  queryHeight: bigint;
}
export interface QueryIncentivizedPacketsRequestProtoMsg {
  typeUrl: "/ibc.applications.fee.v1.QueryIncentivizedPacketsRequest";
  value: Uint8Array;
}
/** QueryIncentivizedPacketsRequest defines the request type for the IncentivizedPackets rpc */
export interface QueryIncentivizedPacketsRequestAmino {
  /** pagination defines an optional pagination for the request. */
  pagination?: PageRequestAmino | undefined;
  /** block height at which to query */
  query_height: string;
}
export interface QueryIncentivizedPacketsRequestAminoMsg {
  type: "cosmos-sdk/QueryIncentivizedPacketsRequest";
  value: QueryIncentivizedPacketsRequestAmino;
}
/** QueryIncentivizedPacketsRequest defines the request type for the IncentivizedPackets rpc */
export interface QueryIncentivizedPacketsRequestSDKType {
  pagination: PageRequestSDKType | undefined;
  query_height: bigint;
}
/** QueryIncentivizedPacketsResponse defines the response type for the IncentivizedPackets rpc */
export interface QueryIncentivizedPacketsResponse {
  /** list of identified fees for incentivized packets */
  incentivizedPackets: IdentifiedPacketFees[];
  /** pagination defines the pagination in the response. */
  pagination: PageResponse | undefined;
}
export interface QueryIncentivizedPacketsResponseProtoMsg {
  typeUrl: "/ibc.applications.fee.v1.QueryIncentivizedPacketsResponse";
  value: Uint8Array;
}
/** QueryIncentivizedPacketsResponse defines the response type for the IncentivizedPackets rpc */
export interface QueryIncentivizedPacketsResponseAmino {
  /** list of identified fees for incentivized packets */
  incentivized_packets: IdentifiedPacketFeesAmino[];
  /** pagination defines the pagination in the response. */
  pagination?: PageResponseAmino | undefined;
}
export interface QueryIncentivizedPacketsResponseAminoMsg {
  type: "cosmos-sdk/QueryIncentivizedPacketsResponse";
  value: QueryIncentivizedPacketsResponseAmino;
}
/** QueryIncentivizedPacketsResponse defines the response type for the IncentivizedPackets rpc */
export interface QueryIncentivizedPacketsResponseSDKType {
  incentivized_packets: IdentifiedPacketFeesSDKType[];
  pagination: PageResponseSDKType | undefined;
}
/** QueryIncentivizedPacketRequest defines the request type for the IncentivizedPacket rpc */
export interface QueryIncentivizedPacketRequest {
  /** unique packet identifier comprised of channel ID, port ID and sequence */
  packetId: PacketId | undefined;
  /** block height at which to query */
  queryHeight: bigint;
}
export interface QueryIncentivizedPacketRequestProtoMsg {
  typeUrl: "/ibc.applications.fee.v1.QueryIncentivizedPacketRequest";
  value: Uint8Array;
}
/** QueryIncentivizedPacketRequest defines the request type for the IncentivizedPacket rpc */
export interface QueryIncentivizedPacketRequestAmino {
  /** unique packet identifier comprised of channel ID, port ID and sequence */
  packet_id?: PacketIdAmino | undefined;
  /** block height at which to query */
  query_height: string;
}
export interface QueryIncentivizedPacketRequestAminoMsg {
  type: "cosmos-sdk/QueryIncentivizedPacketRequest";
  value: QueryIncentivizedPacketRequestAmino;
}
/** QueryIncentivizedPacketRequest defines the request type for the IncentivizedPacket rpc */
export interface QueryIncentivizedPacketRequestSDKType {
  packet_id: PacketIdSDKType | undefined;
  query_height: bigint;
}
/** QueryIncentivizedPacketsResponse defines the response type for the IncentivizedPacket rpc */
export interface QueryIncentivizedPacketResponse {
  /** the identified fees for the incentivized packet */
  incentivizedPacket: IdentifiedPacketFees | undefined;
}
export interface QueryIncentivizedPacketResponseProtoMsg {
  typeUrl: "/ibc.applications.fee.v1.QueryIncentivizedPacketResponse";
  value: Uint8Array;
}
/** QueryIncentivizedPacketsResponse defines the response type for the IncentivizedPacket rpc */
export interface QueryIncentivizedPacketResponseAmino {
  /** the identified fees for the incentivized packet */
  incentivized_packet?: IdentifiedPacketFeesAmino | undefined;
}
export interface QueryIncentivizedPacketResponseAminoMsg {
  type: "cosmos-sdk/QueryIncentivizedPacketResponse";
  value: QueryIncentivizedPacketResponseAmino;
}
/** QueryIncentivizedPacketsResponse defines the response type for the IncentivizedPacket rpc */
export interface QueryIncentivizedPacketResponseSDKType {
  incentivized_packet: IdentifiedPacketFeesSDKType | undefined;
}
/**
 * QueryIncentivizedPacketsForChannelRequest defines the request type for querying for all incentivized packets
 * for a specific channel
 */
export interface QueryIncentivizedPacketsForChannelRequest {
  /** pagination defines an optional pagination for the request. */
  pagination: PageRequest | undefined;
  portId: string;
  channelId: string;
  /** Height to query at */
  queryHeight: bigint;
}
export interface QueryIncentivizedPacketsForChannelRequestProtoMsg {
  typeUrl: "/ibc.applications.fee.v1.QueryIncentivizedPacketsForChannelRequest";
  value: Uint8Array;
}
/**
 * QueryIncentivizedPacketsForChannelRequest defines the request type for querying for all incentivized packets
 * for a specific channel
 */
export interface QueryIncentivizedPacketsForChannelRequestAmino {
  /** pagination defines an optional pagination for the request. */
  pagination?: PageRequestAmino | undefined;
  port_id: string;
  channel_id: string;
  /** Height to query at */
  query_height: string;
}
export interface QueryIncentivizedPacketsForChannelRequestAminoMsg {
  type: "cosmos-sdk/QueryIncentivizedPacketsForChannelRequest";
  value: QueryIncentivizedPacketsForChannelRequestAmino;
}
/**
 * QueryIncentivizedPacketsForChannelRequest defines the request type for querying for all incentivized packets
 * for a specific channel
 */
export interface QueryIncentivizedPacketsForChannelRequestSDKType {
  pagination: PageRequestSDKType | undefined;
  port_id: string;
  channel_id: string;
  query_height: bigint;
}
/** QueryIncentivizedPacketsResponse defines the response type for the incentivized packets RPC */
export interface QueryIncentivizedPacketsForChannelResponse {
  /** Map of all incentivized_packets */
  incentivizedPackets: IdentifiedPacketFees[];
  /** pagination defines the pagination in the response. */
  pagination: PageResponse | undefined;
}
export interface QueryIncentivizedPacketsForChannelResponseProtoMsg {
  typeUrl: "/ibc.applications.fee.v1.QueryIncentivizedPacketsForChannelResponse";
  value: Uint8Array;
}
/** QueryIncentivizedPacketsResponse defines the response type for the incentivized packets RPC */
export interface QueryIncentivizedPacketsForChannelResponseAmino {
  /** Map of all incentivized_packets */
  incentivized_packets: IdentifiedPacketFeesAmino[];
  /** pagination defines the pagination in the response. */
  pagination?: PageResponseAmino | undefined;
}
export interface QueryIncentivizedPacketsForChannelResponseAminoMsg {
  type: "cosmos-sdk/QueryIncentivizedPacketsForChannelResponse";
  value: QueryIncentivizedPacketsForChannelResponseAmino;
}
/** QueryIncentivizedPacketsResponse defines the response type for the incentivized packets RPC */
export interface QueryIncentivizedPacketsForChannelResponseSDKType {
  incentivized_packets: IdentifiedPacketFeesSDKType[];
  pagination: PageResponseSDKType | undefined;
}
/** QueryTotalRecvFeesRequest defines the request type for the TotalRecvFees rpc */
export interface QueryTotalRecvFeesRequest {
  /** the packet identifier for the associated fees */
  packetId: PacketId | undefined;
}
export interface QueryTotalRecvFeesRequestProtoMsg {
  typeUrl: "/ibc.applications.fee.v1.QueryTotalRecvFeesRequest";
  value: Uint8Array;
}
/** QueryTotalRecvFeesRequest defines the request type for the TotalRecvFees rpc */
export interface QueryTotalRecvFeesRequestAmino {
  /** the packet identifier for the associated fees */
  packet_id?: PacketIdAmino | undefined;
}
export interface QueryTotalRecvFeesRequestAminoMsg {
  type: "cosmos-sdk/QueryTotalRecvFeesRequest";
  value: QueryTotalRecvFeesRequestAmino;
}
/** QueryTotalRecvFeesRequest defines the request type for the TotalRecvFees rpc */
export interface QueryTotalRecvFeesRequestSDKType {
  packet_id: PacketIdSDKType | undefined;
}
/** QueryTotalRecvFeesResponse defines the response type for the TotalRecvFees rpc */
export interface QueryTotalRecvFeesResponse {
  /** the total packet receive fees */
  recvFees: Coin[];
}
export interface QueryTotalRecvFeesResponseProtoMsg {
  typeUrl: "/ibc.applications.fee.v1.QueryTotalRecvFeesResponse";
  value: Uint8Array;
}
/** QueryTotalRecvFeesResponse defines the response type for the TotalRecvFees rpc */
export interface QueryTotalRecvFeesResponseAmino {
  /** the total packet receive fees */
  recv_fees: CoinAmino[];
}
export interface QueryTotalRecvFeesResponseAminoMsg {
  type: "cosmos-sdk/QueryTotalRecvFeesResponse";
  value: QueryTotalRecvFeesResponseAmino;
}
/** QueryTotalRecvFeesResponse defines the response type for the TotalRecvFees rpc */
export interface QueryTotalRecvFeesResponseSDKType {
  recv_fees: CoinSDKType[];
}
/** QueryTotalAckFeesRequest defines the request type for the TotalAckFees rpc */
export interface QueryTotalAckFeesRequest {
  /** the packet identifier for the associated fees */
  packetId: PacketId | undefined;
}
export interface QueryTotalAckFeesRequestProtoMsg {
  typeUrl: "/ibc.applications.fee.v1.QueryTotalAckFeesRequest";
  value: Uint8Array;
}
/** QueryTotalAckFeesRequest defines the request type for the TotalAckFees rpc */
export interface QueryTotalAckFeesRequestAmino {
  /** the packet identifier for the associated fees */
  packet_id?: PacketIdAmino | undefined;
}
export interface QueryTotalAckFeesRequestAminoMsg {
  type: "cosmos-sdk/QueryTotalAckFeesRequest";
  value: QueryTotalAckFeesRequestAmino;
}
/** QueryTotalAckFeesRequest defines the request type for the TotalAckFees rpc */
export interface QueryTotalAckFeesRequestSDKType {
  packet_id: PacketIdSDKType | undefined;
}
/** QueryTotalAckFeesResponse defines the response type for the TotalAckFees rpc */
export interface QueryTotalAckFeesResponse {
  /** the total packet acknowledgement fees */
  ackFees: Coin[];
}
export interface QueryTotalAckFeesResponseProtoMsg {
  typeUrl: "/ibc.applications.fee.v1.QueryTotalAckFeesResponse";
  value: Uint8Array;
}
/** QueryTotalAckFeesResponse defines the response type for the TotalAckFees rpc */
export interface QueryTotalAckFeesResponseAmino {
  /** the total packet acknowledgement fees */
  ack_fees: CoinAmino[];
}
export interface QueryTotalAckFeesResponseAminoMsg {
  type: "cosmos-sdk/QueryTotalAckFeesResponse";
  value: QueryTotalAckFeesResponseAmino;
}
/** QueryTotalAckFeesResponse defines the response type for the TotalAckFees rpc */
export interface QueryTotalAckFeesResponseSDKType {
  ack_fees: CoinSDKType[];
}
/** QueryTotalTimeoutFeesRequest defines the request type for the TotalTimeoutFees rpc */
export interface QueryTotalTimeoutFeesRequest {
  /** the packet identifier for the associated fees */
  packetId: PacketId | undefined;
}
export interface QueryTotalTimeoutFeesRequestProtoMsg {
  typeUrl: "/ibc.applications.fee.v1.QueryTotalTimeoutFeesRequest";
  value: Uint8Array;
}
/** QueryTotalTimeoutFeesRequest defines the request type for the TotalTimeoutFees rpc */
export interface QueryTotalTimeoutFeesRequestAmino {
  /** the packet identifier for the associated fees */
  packet_id?: PacketIdAmino | undefined;
}
export interface QueryTotalTimeoutFeesRequestAminoMsg {
  type: "cosmos-sdk/QueryTotalTimeoutFeesRequest";
  value: QueryTotalTimeoutFeesRequestAmino;
}
/** QueryTotalTimeoutFeesRequest defines the request type for the TotalTimeoutFees rpc */
export interface QueryTotalTimeoutFeesRequestSDKType {
  packet_id: PacketIdSDKType | undefined;
}
/** QueryTotalTimeoutFeesResponse defines the response type for the TotalTimeoutFees rpc */
export interface QueryTotalTimeoutFeesResponse {
  /** the total packet timeout fees */
  timeoutFees: Coin[];
}
export interface QueryTotalTimeoutFeesResponseProtoMsg {
  typeUrl: "/ibc.applications.fee.v1.QueryTotalTimeoutFeesResponse";
  value: Uint8Array;
}
/** QueryTotalTimeoutFeesResponse defines the response type for the TotalTimeoutFees rpc */
export interface QueryTotalTimeoutFeesResponseAmino {
  /** the total packet timeout fees */
  timeout_fees: CoinAmino[];
}
export interface QueryTotalTimeoutFeesResponseAminoMsg {
  type: "cosmos-sdk/QueryTotalTimeoutFeesResponse";
  value: QueryTotalTimeoutFeesResponseAmino;
}
/** QueryTotalTimeoutFeesResponse defines the response type for the TotalTimeoutFees rpc */
export interface QueryTotalTimeoutFeesResponseSDKType {
  timeout_fees: CoinSDKType[];
}
/** QueryPayeeRequest defines the request type for the Payee rpc */
export interface QueryPayeeRequest {
  /** unique channel identifier */
  channelId: string;
  /** the relayer address to which the distribution address is registered */
  relayer: string;
}
export interface QueryPayeeRequestProtoMsg {
  typeUrl: "/ibc.applications.fee.v1.QueryPayeeRequest";
  value: Uint8Array;
}
/** QueryPayeeRequest defines the request type for the Payee rpc */
export interface QueryPayeeRequestAmino {
  /** unique channel identifier */
  channel_id: string;
  /** the relayer address to which the distribution address is registered */
  relayer: string;
}
export interface QueryPayeeRequestAminoMsg {
  type: "cosmos-sdk/QueryPayeeRequest";
  value: QueryPayeeRequestAmino;
}
/** QueryPayeeRequest defines the request type for the Payee rpc */
export interface QueryPayeeRequestSDKType {
  channel_id: string;
  relayer: string;
}
/** QueryPayeeResponse defines the response type for the Payee rpc */
export interface QueryPayeeResponse {
  /** the payee address to which packet fees are paid out */
  payeeAddress: string;
}
export interface QueryPayeeResponseProtoMsg {
  typeUrl: "/ibc.applications.fee.v1.QueryPayeeResponse";
  value: Uint8Array;
}
/** QueryPayeeResponse defines the response type for the Payee rpc */
export interface QueryPayeeResponseAmino {
  /** the payee address to which packet fees are paid out */
  payee_address: string;
}
export interface QueryPayeeResponseAminoMsg {
  type: "cosmos-sdk/QueryPayeeResponse";
  value: QueryPayeeResponseAmino;
}
/** QueryPayeeResponse defines the response type for the Payee rpc */
export interface QueryPayeeResponseSDKType {
  payee_address: string;
}
/** QueryCounterpartyPayeeRequest defines the request type for the CounterpartyPayee rpc */
export interface QueryCounterpartyPayeeRequest {
  /** unique channel identifier */
  channelId: string;
  /** the relayer address to which the counterparty is registered */
  relayer: string;
}
export interface QueryCounterpartyPayeeRequestProtoMsg {
  typeUrl: "/ibc.applications.fee.v1.QueryCounterpartyPayeeRequest";
  value: Uint8Array;
}
/** QueryCounterpartyPayeeRequest defines the request type for the CounterpartyPayee rpc */
export interface QueryCounterpartyPayeeRequestAmino {
  /** unique channel identifier */
  channel_id: string;
  /** the relayer address to which the counterparty is registered */
  relayer: string;
}
export interface QueryCounterpartyPayeeRequestAminoMsg {
  type: "cosmos-sdk/QueryCounterpartyPayeeRequest";
  value: QueryCounterpartyPayeeRequestAmino;
}
/** QueryCounterpartyPayeeRequest defines the request type for the CounterpartyPayee rpc */
export interface QueryCounterpartyPayeeRequestSDKType {
  channel_id: string;
  relayer: string;
}
/** QueryCounterpartyPayeeResponse defines the response type for the CounterpartyPayee rpc */
export interface QueryCounterpartyPayeeResponse {
  /** the counterparty payee address used to compensate forward relaying */
  counterpartyPayee: string;
}
export interface QueryCounterpartyPayeeResponseProtoMsg {
  typeUrl: "/ibc.applications.fee.v1.QueryCounterpartyPayeeResponse";
  value: Uint8Array;
}
/** QueryCounterpartyPayeeResponse defines the response type for the CounterpartyPayee rpc */
export interface QueryCounterpartyPayeeResponseAmino {
  /** the counterparty payee address used to compensate forward relaying */
  counterparty_payee: string;
}
export interface QueryCounterpartyPayeeResponseAminoMsg {
  type: "cosmos-sdk/QueryCounterpartyPayeeResponse";
  value: QueryCounterpartyPayeeResponseAmino;
}
/** QueryCounterpartyPayeeResponse defines the response type for the CounterpartyPayee rpc */
export interface QueryCounterpartyPayeeResponseSDKType {
  counterparty_payee: string;
}
/** QueryFeeEnabledChannelsRequest defines the request type for the FeeEnabledChannels rpc */
export interface QueryFeeEnabledChannelsRequest {
  /** pagination defines an optional pagination for the request. */
  pagination: PageRequest | undefined;
  /** block height at which to query */
  queryHeight: bigint;
}
export interface QueryFeeEnabledChannelsRequestProtoMsg {
  typeUrl: "/ibc.applications.fee.v1.QueryFeeEnabledChannelsRequest";
  value: Uint8Array;
}
/** QueryFeeEnabledChannelsRequest defines the request type for the FeeEnabledChannels rpc */
export interface QueryFeeEnabledChannelsRequestAmino {
  /** pagination defines an optional pagination for the request. */
  pagination?: PageRequestAmino | undefined;
  /** block height at which to query */
  query_height: string;
}
export interface QueryFeeEnabledChannelsRequestAminoMsg {
  type: "cosmos-sdk/QueryFeeEnabledChannelsRequest";
  value: QueryFeeEnabledChannelsRequestAmino;
}
/** QueryFeeEnabledChannelsRequest defines the request type for the FeeEnabledChannels rpc */
export interface QueryFeeEnabledChannelsRequestSDKType {
  pagination: PageRequestSDKType | undefined;
  query_height: bigint;
}
/** QueryFeeEnabledChannelsResponse defines the response type for the FeeEnabledChannels rpc */
export interface QueryFeeEnabledChannelsResponse {
  /** list of fee enabled channels */
  feeEnabledChannels: FeeEnabledChannel[];
  /** pagination defines the pagination in the response. */
  pagination: PageResponse | undefined;
}
export interface QueryFeeEnabledChannelsResponseProtoMsg {
  typeUrl: "/ibc.applications.fee.v1.QueryFeeEnabledChannelsResponse";
  value: Uint8Array;
}
/** QueryFeeEnabledChannelsResponse defines the response type for the FeeEnabledChannels rpc */
export interface QueryFeeEnabledChannelsResponseAmino {
  /** list of fee enabled channels */
  fee_enabled_channels: FeeEnabledChannelAmino[];
  /** pagination defines the pagination in the response. */
  pagination?: PageResponseAmino | undefined;
}
export interface QueryFeeEnabledChannelsResponseAminoMsg {
  type: "cosmos-sdk/QueryFeeEnabledChannelsResponse";
  value: QueryFeeEnabledChannelsResponseAmino;
}
/** QueryFeeEnabledChannelsResponse defines the response type for the FeeEnabledChannels rpc */
export interface QueryFeeEnabledChannelsResponseSDKType {
  fee_enabled_channels: FeeEnabledChannelSDKType[];
  pagination: PageResponseSDKType | undefined;
}
/** QueryFeeEnabledChannelRequest defines the request type for the FeeEnabledChannel rpc */
export interface QueryFeeEnabledChannelRequest {
  /** unique port identifier */
  portId: string;
  /** unique channel identifier */
  channelId: string;
}
export interface QueryFeeEnabledChannelRequestProtoMsg {
  typeUrl: "/ibc.applications.fee.v1.QueryFeeEnabledChannelRequest";
  value: Uint8Array;
}
/** QueryFeeEnabledChannelRequest defines the request type for the FeeEnabledChannel rpc */
export interface QueryFeeEnabledChannelRequestAmino {
  /** unique port identifier */
  port_id: string;
  /** unique channel identifier */
  channel_id: string;
}
export interface QueryFeeEnabledChannelRequestAminoMsg {
  type: "cosmos-sdk/QueryFeeEnabledChannelRequest";
  value: QueryFeeEnabledChannelRequestAmino;
}
/** QueryFeeEnabledChannelRequest defines the request type for the FeeEnabledChannel rpc */
export interface QueryFeeEnabledChannelRequestSDKType {
  port_id: string;
  channel_id: string;
}
/** QueryFeeEnabledChannelResponse defines the response type for the FeeEnabledChannel rpc */
export interface QueryFeeEnabledChannelResponse {
  /** boolean flag representing the fee enabled channel status */
  feeEnabled: boolean;
}
export interface QueryFeeEnabledChannelResponseProtoMsg {
  typeUrl: "/ibc.applications.fee.v1.QueryFeeEnabledChannelResponse";
  value: Uint8Array;
}
/** QueryFeeEnabledChannelResponse defines the response type for the FeeEnabledChannel rpc */
export interface QueryFeeEnabledChannelResponseAmino {
  /** boolean flag representing the fee enabled channel status */
  fee_enabled: boolean;
}
export interface QueryFeeEnabledChannelResponseAminoMsg {
  type: "cosmos-sdk/QueryFeeEnabledChannelResponse";
  value: QueryFeeEnabledChannelResponseAmino;
}
/** QueryFeeEnabledChannelResponse defines the response type for the FeeEnabledChannel rpc */
export interface QueryFeeEnabledChannelResponseSDKType {
  fee_enabled: boolean;
}
function createBaseQueryIncentivizedPacketsRequest(): QueryIncentivizedPacketsRequest {
  return {
    pagination: PageRequest.fromPartial({}),
    queryHeight: BigInt(0)
  };
}
export const QueryIncentivizedPacketsRequest = {
  typeUrl: "/ibc.applications.fee.v1.QueryIncentivizedPacketsRequest",
  aminoType: "cosmos-sdk/QueryIncentivizedPacketsRequest",
  encode(message: QueryIncentivizedPacketsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    if (message.queryHeight !== BigInt(0)) {
      writer.uint32(16).uint64(message.queryHeight);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryIncentivizedPacketsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryIncentivizedPacketsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        case 2:
          message.queryHeight = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryIncentivizedPacketsRequest {
    return {
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined,
      queryHeight: isSet(object.queryHeight) ? BigInt(object.queryHeight.toString()) : BigInt(0)
    };
  },
  toJSON(message: QueryIncentivizedPacketsRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    message.queryHeight !== undefined && (obj.queryHeight = (message.queryHeight || BigInt(0)).toString());
    return obj;
  },
  fromPartial(object: DeepPartial<QueryIncentivizedPacketsRequest>): QueryIncentivizedPacketsRequest {
    const message = createBaseQueryIncentivizedPacketsRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    message.queryHeight = object.queryHeight !== undefined && object.queryHeight !== null ? BigInt(object.queryHeight.toString()) : BigInt(0);
    return message;
  },
  fromSDK(object: QueryIncentivizedPacketsRequestSDKType): QueryIncentivizedPacketsRequest {
    return {
      pagination: object.pagination ? PageRequest.fromSDK(object.pagination) : undefined,
      queryHeight: object?.query_height
    };
  },
  toSDK(message: QueryIncentivizedPacketsRequest): QueryIncentivizedPacketsRequestSDKType {
    const obj: any = {};
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toSDK(message.pagination) : undefined);
    obj.query_height = message.queryHeight;
    return obj;
  },
  fromAmino(object: QueryIncentivizedPacketsRequestAmino): QueryIncentivizedPacketsRequest {
    return {
      pagination: object?.pagination ? PageRequest.fromAmino(object.pagination) : undefined,
      queryHeight: BigInt(object.query_height)
    };
  },
  toAmino(message: QueryIncentivizedPacketsRequest): QueryIncentivizedPacketsRequestAmino {
    const obj: any = {};
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    obj.query_height = message.queryHeight ? message.queryHeight.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryIncentivizedPacketsRequestAminoMsg): QueryIncentivizedPacketsRequest {
    return QueryIncentivizedPacketsRequest.fromAmino(object.value);
  },
  toAminoMsg(message: QueryIncentivizedPacketsRequest): QueryIncentivizedPacketsRequestAminoMsg {
    return {
      type: "cosmos-sdk/QueryIncentivizedPacketsRequest",
      value: QueryIncentivizedPacketsRequest.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryIncentivizedPacketsRequestProtoMsg): QueryIncentivizedPacketsRequest {
    return QueryIncentivizedPacketsRequest.decode(message.value);
  },
  toProto(message: QueryIncentivizedPacketsRequest): Uint8Array {
    return QueryIncentivizedPacketsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryIncentivizedPacketsRequest): QueryIncentivizedPacketsRequestProtoMsg {
    return {
      typeUrl: "/ibc.applications.fee.v1.QueryIncentivizedPacketsRequest",
      value: QueryIncentivizedPacketsRequest.encode(message).finish()
    };
  }
};
function createBaseQueryIncentivizedPacketsResponse(): QueryIncentivizedPacketsResponse {
  return {
    incentivizedPackets: [],
    pagination: PageResponse.fromPartial({})
  };
}
export const QueryIncentivizedPacketsResponse = {
  typeUrl: "/ibc.applications.fee.v1.QueryIncentivizedPacketsResponse",
  aminoType: "cosmos-sdk/QueryIncentivizedPacketsResponse",
  encode(message: QueryIncentivizedPacketsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.incentivizedPackets) {
      IdentifiedPacketFees.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryIncentivizedPacketsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryIncentivizedPacketsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.incentivizedPackets.push(IdentifiedPacketFees.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryIncentivizedPacketsResponse {
    return {
      incentivizedPackets: Array.isArray(object?.incentivizedPackets) ? object.incentivizedPackets.map((e: any) => IdentifiedPacketFees.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
    };
  },
  toJSON(message: QueryIncentivizedPacketsResponse): unknown {
    const obj: any = {};
    if (message.incentivizedPackets) {
      obj.incentivizedPackets = message.incentivizedPackets.map(e => e ? IdentifiedPacketFees.toJSON(e) : undefined);
    } else {
      obj.incentivizedPackets = [];
    }
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<QueryIncentivizedPacketsResponse>): QueryIncentivizedPacketsResponse {
    const message = createBaseQueryIncentivizedPacketsResponse();
    message.incentivizedPackets = object.incentivizedPackets?.map(e => IdentifiedPacketFees.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromSDK(object: QueryIncentivizedPacketsResponseSDKType): QueryIncentivizedPacketsResponse {
    return {
      incentivizedPackets: Array.isArray(object?.incentivized_packets) ? object.incentivized_packets.map((e: any) => IdentifiedPacketFees.fromSDK(e)) : [],
      pagination: object.pagination ? PageResponse.fromSDK(object.pagination) : undefined
    };
  },
  toSDK(message: QueryIncentivizedPacketsResponse): QueryIncentivizedPacketsResponseSDKType {
    const obj: any = {};
    if (message.incentivizedPackets) {
      obj.incentivized_packets = message.incentivizedPackets.map(e => e ? IdentifiedPacketFees.toSDK(e) : undefined);
    } else {
      obj.incentivized_packets = [];
    }
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toSDK(message.pagination) : undefined);
    return obj;
  },
  fromAmino(object: QueryIncentivizedPacketsResponseAmino): QueryIncentivizedPacketsResponse {
    return {
      incentivizedPackets: Array.isArray(object?.incentivized_packets) ? object.incentivized_packets.map((e: any) => IdentifiedPacketFees.fromAmino(e)) : [],
      pagination: object?.pagination ? PageResponse.fromAmino(object.pagination) : undefined
    };
  },
  toAmino(message: QueryIncentivizedPacketsResponse): QueryIncentivizedPacketsResponseAmino {
    const obj: any = {};
    if (message.incentivizedPackets) {
      obj.incentivized_packets = message.incentivizedPackets.map(e => e ? IdentifiedPacketFees.toAmino(e) : undefined);
    } else {
      obj.incentivized_packets = [];
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryIncentivizedPacketsResponseAminoMsg): QueryIncentivizedPacketsResponse {
    return QueryIncentivizedPacketsResponse.fromAmino(object.value);
  },
  toAminoMsg(message: QueryIncentivizedPacketsResponse): QueryIncentivizedPacketsResponseAminoMsg {
    return {
      type: "cosmos-sdk/QueryIncentivizedPacketsResponse",
      value: QueryIncentivizedPacketsResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryIncentivizedPacketsResponseProtoMsg): QueryIncentivizedPacketsResponse {
    return QueryIncentivizedPacketsResponse.decode(message.value);
  },
  toProto(message: QueryIncentivizedPacketsResponse): Uint8Array {
    return QueryIncentivizedPacketsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryIncentivizedPacketsResponse): QueryIncentivizedPacketsResponseProtoMsg {
    return {
      typeUrl: "/ibc.applications.fee.v1.QueryIncentivizedPacketsResponse",
      value: QueryIncentivizedPacketsResponse.encode(message).finish()
    };
  }
};
function createBaseQueryIncentivizedPacketRequest(): QueryIncentivizedPacketRequest {
  return {
    packetId: PacketId.fromPartial({}),
    queryHeight: BigInt(0)
  };
}
export const QueryIncentivizedPacketRequest = {
  typeUrl: "/ibc.applications.fee.v1.QueryIncentivizedPacketRequest",
  aminoType: "cosmos-sdk/QueryIncentivizedPacketRequest",
  encode(message: QueryIncentivizedPacketRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.packetId !== undefined) {
      PacketId.encode(message.packetId, writer.uint32(10).fork()).ldelim();
    }
    if (message.queryHeight !== BigInt(0)) {
      writer.uint32(16).uint64(message.queryHeight);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryIncentivizedPacketRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryIncentivizedPacketRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.packetId = PacketId.decode(reader, reader.uint32());
          break;
        case 2:
          message.queryHeight = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryIncentivizedPacketRequest {
    return {
      packetId: isSet(object.packetId) ? PacketId.fromJSON(object.packetId) : undefined,
      queryHeight: isSet(object.queryHeight) ? BigInt(object.queryHeight.toString()) : BigInt(0)
    };
  },
  toJSON(message: QueryIncentivizedPacketRequest): unknown {
    const obj: any = {};
    message.packetId !== undefined && (obj.packetId = message.packetId ? PacketId.toJSON(message.packetId) : undefined);
    message.queryHeight !== undefined && (obj.queryHeight = (message.queryHeight || BigInt(0)).toString());
    return obj;
  },
  fromPartial(object: DeepPartial<QueryIncentivizedPacketRequest>): QueryIncentivizedPacketRequest {
    const message = createBaseQueryIncentivizedPacketRequest();
    message.packetId = object.packetId !== undefined && object.packetId !== null ? PacketId.fromPartial(object.packetId) : undefined;
    message.queryHeight = object.queryHeight !== undefined && object.queryHeight !== null ? BigInt(object.queryHeight.toString()) : BigInt(0);
    return message;
  },
  fromSDK(object: QueryIncentivizedPacketRequestSDKType): QueryIncentivizedPacketRequest {
    return {
      packetId: object.packet_id ? PacketId.fromSDK(object.packet_id) : undefined,
      queryHeight: object?.query_height
    };
  },
  toSDK(message: QueryIncentivizedPacketRequest): QueryIncentivizedPacketRequestSDKType {
    const obj: any = {};
    message.packetId !== undefined && (obj.packet_id = message.packetId ? PacketId.toSDK(message.packetId) : undefined);
    obj.query_height = message.queryHeight;
    return obj;
  },
  fromAmino(object: QueryIncentivizedPacketRequestAmino): QueryIncentivizedPacketRequest {
    return {
      packetId: object?.packet_id ? PacketId.fromAmino(object.packet_id) : undefined,
      queryHeight: BigInt(object.query_height)
    };
  },
  toAmino(message: QueryIncentivizedPacketRequest): QueryIncentivizedPacketRequestAmino {
    const obj: any = {};
    obj.packet_id = message.packetId ? PacketId.toAmino(message.packetId) : undefined;
    obj.query_height = message.queryHeight ? message.queryHeight.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryIncentivizedPacketRequestAminoMsg): QueryIncentivizedPacketRequest {
    return QueryIncentivizedPacketRequest.fromAmino(object.value);
  },
  toAminoMsg(message: QueryIncentivizedPacketRequest): QueryIncentivizedPacketRequestAminoMsg {
    return {
      type: "cosmos-sdk/QueryIncentivizedPacketRequest",
      value: QueryIncentivizedPacketRequest.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryIncentivizedPacketRequestProtoMsg): QueryIncentivizedPacketRequest {
    return QueryIncentivizedPacketRequest.decode(message.value);
  },
  toProto(message: QueryIncentivizedPacketRequest): Uint8Array {
    return QueryIncentivizedPacketRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryIncentivizedPacketRequest): QueryIncentivizedPacketRequestProtoMsg {
    return {
      typeUrl: "/ibc.applications.fee.v1.QueryIncentivizedPacketRequest",
      value: QueryIncentivizedPacketRequest.encode(message).finish()
    };
  }
};
function createBaseQueryIncentivizedPacketResponse(): QueryIncentivizedPacketResponse {
  return {
    incentivizedPacket: IdentifiedPacketFees.fromPartial({})
  };
}
export const QueryIncentivizedPacketResponse = {
  typeUrl: "/ibc.applications.fee.v1.QueryIncentivizedPacketResponse",
  aminoType: "cosmos-sdk/QueryIncentivizedPacketResponse",
  encode(message: QueryIncentivizedPacketResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.incentivizedPacket !== undefined) {
      IdentifiedPacketFees.encode(message.incentivizedPacket, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryIncentivizedPacketResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryIncentivizedPacketResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.incentivizedPacket = IdentifiedPacketFees.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryIncentivizedPacketResponse {
    return {
      incentivizedPacket: isSet(object.incentivizedPacket) ? IdentifiedPacketFees.fromJSON(object.incentivizedPacket) : undefined
    };
  },
  toJSON(message: QueryIncentivizedPacketResponse): unknown {
    const obj: any = {};
    message.incentivizedPacket !== undefined && (obj.incentivizedPacket = message.incentivizedPacket ? IdentifiedPacketFees.toJSON(message.incentivizedPacket) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<QueryIncentivizedPacketResponse>): QueryIncentivizedPacketResponse {
    const message = createBaseQueryIncentivizedPacketResponse();
    message.incentivizedPacket = object.incentivizedPacket !== undefined && object.incentivizedPacket !== null ? IdentifiedPacketFees.fromPartial(object.incentivizedPacket) : undefined;
    return message;
  },
  fromSDK(object: QueryIncentivizedPacketResponseSDKType): QueryIncentivizedPacketResponse {
    return {
      incentivizedPacket: object.incentivized_packet ? IdentifiedPacketFees.fromSDK(object.incentivized_packet) : undefined
    };
  },
  toSDK(message: QueryIncentivizedPacketResponse): QueryIncentivizedPacketResponseSDKType {
    const obj: any = {};
    message.incentivizedPacket !== undefined && (obj.incentivized_packet = message.incentivizedPacket ? IdentifiedPacketFees.toSDK(message.incentivizedPacket) : undefined);
    return obj;
  },
  fromAmino(object: QueryIncentivizedPacketResponseAmino): QueryIncentivizedPacketResponse {
    return {
      incentivizedPacket: object?.incentivized_packet ? IdentifiedPacketFees.fromAmino(object.incentivized_packet) : undefined
    };
  },
  toAmino(message: QueryIncentivizedPacketResponse): QueryIncentivizedPacketResponseAmino {
    const obj: any = {};
    obj.incentivized_packet = message.incentivizedPacket ? IdentifiedPacketFees.toAmino(message.incentivizedPacket) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryIncentivizedPacketResponseAminoMsg): QueryIncentivizedPacketResponse {
    return QueryIncentivizedPacketResponse.fromAmino(object.value);
  },
  toAminoMsg(message: QueryIncentivizedPacketResponse): QueryIncentivizedPacketResponseAminoMsg {
    return {
      type: "cosmos-sdk/QueryIncentivizedPacketResponse",
      value: QueryIncentivizedPacketResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryIncentivizedPacketResponseProtoMsg): QueryIncentivizedPacketResponse {
    return QueryIncentivizedPacketResponse.decode(message.value);
  },
  toProto(message: QueryIncentivizedPacketResponse): Uint8Array {
    return QueryIncentivizedPacketResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryIncentivizedPacketResponse): QueryIncentivizedPacketResponseProtoMsg {
    return {
      typeUrl: "/ibc.applications.fee.v1.QueryIncentivizedPacketResponse",
      value: QueryIncentivizedPacketResponse.encode(message).finish()
    };
  }
};
function createBaseQueryIncentivizedPacketsForChannelRequest(): QueryIncentivizedPacketsForChannelRequest {
  return {
    pagination: PageRequest.fromPartial({}),
    portId: "",
    channelId: "",
    queryHeight: BigInt(0)
  };
}
export const QueryIncentivizedPacketsForChannelRequest = {
  typeUrl: "/ibc.applications.fee.v1.QueryIncentivizedPacketsForChannelRequest",
  aminoType: "cosmos-sdk/QueryIncentivizedPacketsForChannelRequest",
  encode(message: QueryIncentivizedPacketsForChannelRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    if (message.portId !== "") {
      writer.uint32(18).string(message.portId);
    }
    if (message.channelId !== "") {
      writer.uint32(26).string(message.channelId);
    }
    if (message.queryHeight !== BigInt(0)) {
      writer.uint32(32).uint64(message.queryHeight);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryIncentivizedPacketsForChannelRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryIncentivizedPacketsForChannelRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        case 2:
          message.portId = reader.string();
          break;
        case 3:
          message.channelId = reader.string();
          break;
        case 4:
          message.queryHeight = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryIncentivizedPacketsForChannelRequest {
    return {
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined,
      portId: isSet(object.portId) ? String(object.portId) : "",
      channelId: isSet(object.channelId) ? String(object.channelId) : "",
      queryHeight: isSet(object.queryHeight) ? BigInt(object.queryHeight.toString()) : BigInt(0)
    };
  },
  toJSON(message: QueryIncentivizedPacketsForChannelRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    message.portId !== undefined && (obj.portId = message.portId);
    message.channelId !== undefined && (obj.channelId = message.channelId);
    message.queryHeight !== undefined && (obj.queryHeight = (message.queryHeight || BigInt(0)).toString());
    return obj;
  },
  fromPartial(object: DeepPartial<QueryIncentivizedPacketsForChannelRequest>): QueryIncentivizedPacketsForChannelRequest {
    const message = createBaseQueryIncentivizedPacketsForChannelRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    message.portId = object.portId ?? "";
    message.channelId = object.channelId ?? "";
    message.queryHeight = object.queryHeight !== undefined && object.queryHeight !== null ? BigInt(object.queryHeight.toString()) : BigInt(0);
    return message;
  },
  fromSDK(object: QueryIncentivizedPacketsForChannelRequestSDKType): QueryIncentivizedPacketsForChannelRequest {
    return {
      pagination: object.pagination ? PageRequest.fromSDK(object.pagination) : undefined,
      portId: object?.port_id,
      channelId: object?.channel_id,
      queryHeight: object?.query_height
    };
  },
  toSDK(message: QueryIncentivizedPacketsForChannelRequest): QueryIncentivizedPacketsForChannelRequestSDKType {
    const obj: any = {};
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toSDK(message.pagination) : undefined);
    obj.port_id = message.portId;
    obj.channel_id = message.channelId;
    obj.query_height = message.queryHeight;
    return obj;
  },
  fromAmino(object: QueryIncentivizedPacketsForChannelRequestAmino): QueryIncentivizedPacketsForChannelRequest {
    return {
      pagination: object?.pagination ? PageRequest.fromAmino(object.pagination) : undefined,
      portId: object.port_id,
      channelId: object.channel_id,
      queryHeight: BigInt(object.query_height)
    };
  },
  toAmino(message: QueryIncentivizedPacketsForChannelRequest): QueryIncentivizedPacketsForChannelRequestAmino {
    const obj: any = {};
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    obj.port_id = message.portId;
    obj.channel_id = message.channelId;
    obj.query_height = message.queryHeight ? message.queryHeight.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryIncentivizedPacketsForChannelRequestAminoMsg): QueryIncentivizedPacketsForChannelRequest {
    return QueryIncentivizedPacketsForChannelRequest.fromAmino(object.value);
  },
  toAminoMsg(message: QueryIncentivizedPacketsForChannelRequest): QueryIncentivizedPacketsForChannelRequestAminoMsg {
    return {
      type: "cosmos-sdk/QueryIncentivizedPacketsForChannelRequest",
      value: QueryIncentivizedPacketsForChannelRequest.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryIncentivizedPacketsForChannelRequestProtoMsg): QueryIncentivizedPacketsForChannelRequest {
    return QueryIncentivizedPacketsForChannelRequest.decode(message.value);
  },
  toProto(message: QueryIncentivizedPacketsForChannelRequest): Uint8Array {
    return QueryIncentivizedPacketsForChannelRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryIncentivizedPacketsForChannelRequest): QueryIncentivizedPacketsForChannelRequestProtoMsg {
    return {
      typeUrl: "/ibc.applications.fee.v1.QueryIncentivizedPacketsForChannelRequest",
      value: QueryIncentivizedPacketsForChannelRequest.encode(message).finish()
    };
  }
};
function createBaseQueryIncentivizedPacketsForChannelResponse(): QueryIncentivizedPacketsForChannelResponse {
  return {
    incentivizedPackets: [],
    pagination: PageResponse.fromPartial({})
  };
}
export const QueryIncentivizedPacketsForChannelResponse = {
  typeUrl: "/ibc.applications.fee.v1.QueryIncentivizedPacketsForChannelResponse",
  aminoType: "cosmos-sdk/QueryIncentivizedPacketsForChannelResponse",
  encode(message: QueryIncentivizedPacketsForChannelResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.incentivizedPackets) {
      IdentifiedPacketFees.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryIncentivizedPacketsForChannelResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryIncentivizedPacketsForChannelResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.incentivizedPackets.push(IdentifiedPacketFees.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryIncentivizedPacketsForChannelResponse {
    return {
      incentivizedPackets: Array.isArray(object?.incentivizedPackets) ? object.incentivizedPackets.map((e: any) => IdentifiedPacketFees.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
    };
  },
  toJSON(message: QueryIncentivizedPacketsForChannelResponse): unknown {
    const obj: any = {};
    if (message.incentivizedPackets) {
      obj.incentivizedPackets = message.incentivizedPackets.map(e => e ? IdentifiedPacketFees.toJSON(e) : undefined);
    } else {
      obj.incentivizedPackets = [];
    }
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<QueryIncentivizedPacketsForChannelResponse>): QueryIncentivizedPacketsForChannelResponse {
    const message = createBaseQueryIncentivizedPacketsForChannelResponse();
    message.incentivizedPackets = object.incentivizedPackets?.map(e => IdentifiedPacketFees.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromSDK(object: QueryIncentivizedPacketsForChannelResponseSDKType): QueryIncentivizedPacketsForChannelResponse {
    return {
      incentivizedPackets: Array.isArray(object?.incentivized_packets) ? object.incentivized_packets.map((e: any) => IdentifiedPacketFees.fromSDK(e)) : [],
      pagination: object.pagination ? PageResponse.fromSDK(object.pagination) : undefined
    };
  },
  toSDK(message: QueryIncentivizedPacketsForChannelResponse): QueryIncentivizedPacketsForChannelResponseSDKType {
    const obj: any = {};
    if (message.incentivizedPackets) {
      obj.incentivized_packets = message.incentivizedPackets.map(e => e ? IdentifiedPacketFees.toSDK(e) : undefined);
    } else {
      obj.incentivized_packets = [];
    }
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toSDK(message.pagination) : undefined);
    return obj;
  },
  fromAmino(object: QueryIncentivizedPacketsForChannelResponseAmino): QueryIncentivizedPacketsForChannelResponse {
    return {
      incentivizedPackets: Array.isArray(object?.incentivized_packets) ? object.incentivized_packets.map((e: any) => IdentifiedPacketFees.fromAmino(e)) : [],
      pagination: object?.pagination ? PageResponse.fromAmino(object.pagination) : undefined
    };
  },
  toAmino(message: QueryIncentivizedPacketsForChannelResponse): QueryIncentivizedPacketsForChannelResponseAmino {
    const obj: any = {};
    if (message.incentivizedPackets) {
      obj.incentivized_packets = message.incentivizedPackets.map(e => e ? IdentifiedPacketFees.toAmino(e) : undefined);
    } else {
      obj.incentivized_packets = [];
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryIncentivizedPacketsForChannelResponseAminoMsg): QueryIncentivizedPacketsForChannelResponse {
    return QueryIncentivizedPacketsForChannelResponse.fromAmino(object.value);
  },
  toAminoMsg(message: QueryIncentivizedPacketsForChannelResponse): QueryIncentivizedPacketsForChannelResponseAminoMsg {
    return {
      type: "cosmos-sdk/QueryIncentivizedPacketsForChannelResponse",
      value: QueryIncentivizedPacketsForChannelResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryIncentivizedPacketsForChannelResponseProtoMsg): QueryIncentivizedPacketsForChannelResponse {
    return QueryIncentivizedPacketsForChannelResponse.decode(message.value);
  },
  toProto(message: QueryIncentivizedPacketsForChannelResponse): Uint8Array {
    return QueryIncentivizedPacketsForChannelResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryIncentivizedPacketsForChannelResponse): QueryIncentivizedPacketsForChannelResponseProtoMsg {
    return {
      typeUrl: "/ibc.applications.fee.v1.QueryIncentivizedPacketsForChannelResponse",
      value: QueryIncentivizedPacketsForChannelResponse.encode(message).finish()
    };
  }
};
function createBaseQueryTotalRecvFeesRequest(): QueryTotalRecvFeesRequest {
  return {
    packetId: PacketId.fromPartial({})
  };
}
export const QueryTotalRecvFeesRequest = {
  typeUrl: "/ibc.applications.fee.v1.QueryTotalRecvFeesRequest",
  aminoType: "cosmos-sdk/QueryTotalRecvFeesRequest",
  encode(message: QueryTotalRecvFeesRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.packetId !== undefined) {
      PacketId.encode(message.packetId, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryTotalRecvFeesRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryTotalRecvFeesRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.packetId = PacketId.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryTotalRecvFeesRequest {
    return {
      packetId: isSet(object.packetId) ? PacketId.fromJSON(object.packetId) : undefined
    };
  },
  toJSON(message: QueryTotalRecvFeesRequest): unknown {
    const obj: any = {};
    message.packetId !== undefined && (obj.packetId = message.packetId ? PacketId.toJSON(message.packetId) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<QueryTotalRecvFeesRequest>): QueryTotalRecvFeesRequest {
    const message = createBaseQueryTotalRecvFeesRequest();
    message.packetId = object.packetId !== undefined && object.packetId !== null ? PacketId.fromPartial(object.packetId) : undefined;
    return message;
  },
  fromSDK(object: QueryTotalRecvFeesRequestSDKType): QueryTotalRecvFeesRequest {
    return {
      packetId: object.packet_id ? PacketId.fromSDK(object.packet_id) : undefined
    };
  },
  toSDK(message: QueryTotalRecvFeesRequest): QueryTotalRecvFeesRequestSDKType {
    const obj: any = {};
    message.packetId !== undefined && (obj.packet_id = message.packetId ? PacketId.toSDK(message.packetId) : undefined);
    return obj;
  },
  fromAmino(object: QueryTotalRecvFeesRequestAmino): QueryTotalRecvFeesRequest {
    return {
      packetId: object?.packet_id ? PacketId.fromAmino(object.packet_id) : undefined
    };
  },
  toAmino(message: QueryTotalRecvFeesRequest): QueryTotalRecvFeesRequestAmino {
    const obj: any = {};
    obj.packet_id = message.packetId ? PacketId.toAmino(message.packetId) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryTotalRecvFeesRequestAminoMsg): QueryTotalRecvFeesRequest {
    return QueryTotalRecvFeesRequest.fromAmino(object.value);
  },
  toAminoMsg(message: QueryTotalRecvFeesRequest): QueryTotalRecvFeesRequestAminoMsg {
    return {
      type: "cosmos-sdk/QueryTotalRecvFeesRequest",
      value: QueryTotalRecvFeesRequest.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryTotalRecvFeesRequestProtoMsg): QueryTotalRecvFeesRequest {
    return QueryTotalRecvFeesRequest.decode(message.value);
  },
  toProto(message: QueryTotalRecvFeesRequest): Uint8Array {
    return QueryTotalRecvFeesRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryTotalRecvFeesRequest): QueryTotalRecvFeesRequestProtoMsg {
    return {
      typeUrl: "/ibc.applications.fee.v1.QueryTotalRecvFeesRequest",
      value: QueryTotalRecvFeesRequest.encode(message).finish()
    };
  }
};
function createBaseQueryTotalRecvFeesResponse(): QueryTotalRecvFeesResponse {
  return {
    recvFees: []
  };
}
export const QueryTotalRecvFeesResponse = {
  typeUrl: "/ibc.applications.fee.v1.QueryTotalRecvFeesResponse",
  aminoType: "cosmos-sdk/QueryTotalRecvFeesResponse",
  encode(message: QueryTotalRecvFeesResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.recvFees) {
      Coin.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryTotalRecvFeesResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryTotalRecvFeesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.recvFees.push(Coin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryTotalRecvFeesResponse {
    return {
      recvFees: Array.isArray(object?.recvFees) ? object.recvFees.map((e: any) => Coin.fromJSON(e)) : []
    };
  },
  toJSON(message: QueryTotalRecvFeesResponse): unknown {
    const obj: any = {};
    if (message.recvFees) {
      obj.recvFees = message.recvFees.map(e => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.recvFees = [];
    }
    return obj;
  },
  fromPartial(object: DeepPartial<QueryTotalRecvFeesResponse>): QueryTotalRecvFeesResponse {
    const message = createBaseQueryTotalRecvFeesResponse();
    message.recvFees = object.recvFees?.map(e => Coin.fromPartial(e)) || [];
    return message;
  },
  fromSDK(object: QueryTotalRecvFeesResponseSDKType): QueryTotalRecvFeesResponse {
    return {
      recvFees: Array.isArray(object?.recv_fees) ? object.recv_fees.map((e: any) => Coin.fromSDK(e)) : []
    };
  },
  toSDK(message: QueryTotalRecvFeesResponse): QueryTotalRecvFeesResponseSDKType {
    const obj: any = {};
    if (message.recvFees) {
      obj.recv_fees = message.recvFees.map(e => e ? Coin.toSDK(e) : undefined);
    } else {
      obj.recv_fees = [];
    }
    return obj;
  },
  fromAmino(object: QueryTotalRecvFeesResponseAmino): QueryTotalRecvFeesResponse {
    return {
      recvFees: Array.isArray(object?.recv_fees) ? object.recv_fees.map((e: any) => Coin.fromAmino(e)) : []
    };
  },
  toAmino(message: QueryTotalRecvFeesResponse): QueryTotalRecvFeesResponseAmino {
    const obj: any = {};
    if (message.recvFees) {
      obj.recv_fees = message.recvFees.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.recv_fees = [];
    }
    return obj;
  },
  fromAminoMsg(object: QueryTotalRecvFeesResponseAminoMsg): QueryTotalRecvFeesResponse {
    return QueryTotalRecvFeesResponse.fromAmino(object.value);
  },
  toAminoMsg(message: QueryTotalRecvFeesResponse): QueryTotalRecvFeesResponseAminoMsg {
    return {
      type: "cosmos-sdk/QueryTotalRecvFeesResponse",
      value: QueryTotalRecvFeesResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryTotalRecvFeesResponseProtoMsg): QueryTotalRecvFeesResponse {
    return QueryTotalRecvFeesResponse.decode(message.value);
  },
  toProto(message: QueryTotalRecvFeesResponse): Uint8Array {
    return QueryTotalRecvFeesResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryTotalRecvFeesResponse): QueryTotalRecvFeesResponseProtoMsg {
    return {
      typeUrl: "/ibc.applications.fee.v1.QueryTotalRecvFeesResponse",
      value: QueryTotalRecvFeesResponse.encode(message).finish()
    };
  }
};
function createBaseQueryTotalAckFeesRequest(): QueryTotalAckFeesRequest {
  return {
    packetId: PacketId.fromPartial({})
  };
}
export const QueryTotalAckFeesRequest = {
  typeUrl: "/ibc.applications.fee.v1.QueryTotalAckFeesRequest",
  aminoType: "cosmos-sdk/QueryTotalAckFeesRequest",
  encode(message: QueryTotalAckFeesRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.packetId !== undefined) {
      PacketId.encode(message.packetId, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryTotalAckFeesRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryTotalAckFeesRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.packetId = PacketId.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryTotalAckFeesRequest {
    return {
      packetId: isSet(object.packetId) ? PacketId.fromJSON(object.packetId) : undefined
    };
  },
  toJSON(message: QueryTotalAckFeesRequest): unknown {
    const obj: any = {};
    message.packetId !== undefined && (obj.packetId = message.packetId ? PacketId.toJSON(message.packetId) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<QueryTotalAckFeesRequest>): QueryTotalAckFeesRequest {
    const message = createBaseQueryTotalAckFeesRequest();
    message.packetId = object.packetId !== undefined && object.packetId !== null ? PacketId.fromPartial(object.packetId) : undefined;
    return message;
  },
  fromSDK(object: QueryTotalAckFeesRequestSDKType): QueryTotalAckFeesRequest {
    return {
      packetId: object.packet_id ? PacketId.fromSDK(object.packet_id) : undefined
    };
  },
  toSDK(message: QueryTotalAckFeesRequest): QueryTotalAckFeesRequestSDKType {
    const obj: any = {};
    message.packetId !== undefined && (obj.packet_id = message.packetId ? PacketId.toSDK(message.packetId) : undefined);
    return obj;
  },
  fromAmino(object: QueryTotalAckFeesRequestAmino): QueryTotalAckFeesRequest {
    return {
      packetId: object?.packet_id ? PacketId.fromAmino(object.packet_id) : undefined
    };
  },
  toAmino(message: QueryTotalAckFeesRequest): QueryTotalAckFeesRequestAmino {
    const obj: any = {};
    obj.packet_id = message.packetId ? PacketId.toAmino(message.packetId) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryTotalAckFeesRequestAminoMsg): QueryTotalAckFeesRequest {
    return QueryTotalAckFeesRequest.fromAmino(object.value);
  },
  toAminoMsg(message: QueryTotalAckFeesRequest): QueryTotalAckFeesRequestAminoMsg {
    return {
      type: "cosmos-sdk/QueryTotalAckFeesRequest",
      value: QueryTotalAckFeesRequest.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryTotalAckFeesRequestProtoMsg): QueryTotalAckFeesRequest {
    return QueryTotalAckFeesRequest.decode(message.value);
  },
  toProto(message: QueryTotalAckFeesRequest): Uint8Array {
    return QueryTotalAckFeesRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryTotalAckFeesRequest): QueryTotalAckFeesRequestProtoMsg {
    return {
      typeUrl: "/ibc.applications.fee.v1.QueryTotalAckFeesRequest",
      value: QueryTotalAckFeesRequest.encode(message).finish()
    };
  }
};
function createBaseQueryTotalAckFeesResponse(): QueryTotalAckFeesResponse {
  return {
    ackFees: []
  };
}
export const QueryTotalAckFeesResponse = {
  typeUrl: "/ibc.applications.fee.v1.QueryTotalAckFeesResponse",
  aminoType: "cosmos-sdk/QueryTotalAckFeesResponse",
  encode(message: QueryTotalAckFeesResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.ackFees) {
      Coin.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryTotalAckFeesResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryTotalAckFeesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.ackFees.push(Coin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryTotalAckFeesResponse {
    return {
      ackFees: Array.isArray(object?.ackFees) ? object.ackFees.map((e: any) => Coin.fromJSON(e)) : []
    };
  },
  toJSON(message: QueryTotalAckFeesResponse): unknown {
    const obj: any = {};
    if (message.ackFees) {
      obj.ackFees = message.ackFees.map(e => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.ackFees = [];
    }
    return obj;
  },
  fromPartial(object: DeepPartial<QueryTotalAckFeesResponse>): QueryTotalAckFeesResponse {
    const message = createBaseQueryTotalAckFeesResponse();
    message.ackFees = object.ackFees?.map(e => Coin.fromPartial(e)) || [];
    return message;
  },
  fromSDK(object: QueryTotalAckFeesResponseSDKType): QueryTotalAckFeesResponse {
    return {
      ackFees: Array.isArray(object?.ack_fees) ? object.ack_fees.map((e: any) => Coin.fromSDK(e)) : []
    };
  },
  toSDK(message: QueryTotalAckFeesResponse): QueryTotalAckFeesResponseSDKType {
    const obj: any = {};
    if (message.ackFees) {
      obj.ack_fees = message.ackFees.map(e => e ? Coin.toSDK(e) : undefined);
    } else {
      obj.ack_fees = [];
    }
    return obj;
  },
  fromAmino(object: QueryTotalAckFeesResponseAmino): QueryTotalAckFeesResponse {
    return {
      ackFees: Array.isArray(object?.ack_fees) ? object.ack_fees.map((e: any) => Coin.fromAmino(e)) : []
    };
  },
  toAmino(message: QueryTotalAckFeesResponse): QueryTotalAckFeesResponseAmino {
    const obj: any = {};
    if (message.ackFees) {
      obj.ack_fees = message.ackFees.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.ack_fees = [];
    }
    return obj;
  },
  fromAminoMsg(object: QueryTotalAckFeesResponseAminoMsg): QueryTotalAckFeesResponse {
    return QueryTotalAckFeesResponse.fromAmino(object.value);
  },
  toAminoMsg(message: QueryTotalAckFeesResponse): QueryTotalAckFeesResponseAminoMsg {
    return {
      type: "cosmos-sdk/QueryTotalAckFeesResponse",
      value: QueryTotalAckFeesResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryTotalAckFeesResponseProtoMsg): QueryTotalAckFeesResponse {
    return QueryTotalAckFeesResponse.decode(message.value);
  },
  toProto(message: QueryTotalAckFeesResponse): Uint8Array {
    return QueryTotalAckFeesResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryTotalAckFeesResponse): QueryTotalAckFeesResponseProtoMsg {
    return {
      typeUrl: "/ibc.applications.fee.v1.QueryTotalAckFeesResponse",
      value: QueryTotalAckFeesResponse.encode(message).finish()
    };
  }
};
function createBaseQueryTotalTimeoutFeesRequest(): QueryTotalTimeoutFeesRequest {
  return {
    packetId: PacketId.fromPartial({})
  };
}
export const QueryTotalTimeoutFeesRequest = {
  typeUrl: "/ibc.applications.fee.v1.QueryTotalTimeoutFeesRequest",
  aminoType: "cosmos-sdk/QueryTotalTimeoutFeesRequest",
  encode(message: QueryTotalTimeoutFeesRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.packetId !== undefined) {
      PacketId.encode(message.packetId, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryTotalTimeoutFeesRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryTotalTimeoutFeesRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.packetId = PacketId.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryTotalTimeoutFeesRequest {
    return {
      packetId: isSet(object.packetId) ? PacketId.fromJSON(object.packetId) : undefined
    };
  },
  toJSON(message: QueryTotalTimeoutFeesRequest): unknown {
    const obj: any = {};
    message.packetId !== undefined && (obj.packetId = message.packetId ? PacketId.toJSON(message.packetId) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<QueryTotalTimeoutFeesRequest>): QueryTotalTimeoutFeesRequest {
    const message = createBaseQueryTotalTimeoutFeesRequest();
    message.packetId = object.packetId !== undefined && object.packetId !== null ? PacketId.fromPartial(object.packetId) : undefined;
    return message;
  },
  fromSDK(object: QueryTotalTimeoutFeesRequestSDKType): QueryTotalTimeoutFeesRequest {
    return {
      packetId: object.packet_id ? PacketId.fromSDK(object.packet_id) : undefined
    };
  },
  toSDK(message: QueryTotalTimeoutFeesRequest): QueryTotalTimeoutFeesRequestSDKType {
    const obj: any = {};
    message.packetId !== undefined && (obj.packet_id = message.packetId ? PacketId.toSDK(message.packetId) : undefined);
    return obj;
  },
  fromAmino(object: QueryTotalTimeoutFeesRequestAmino): QueryTotalTimeoutFeesRequest {
    return {
      packetId: object?.packet_id ? PacketId.fromAmino(object.packet_id) : undefined
    };
  },
  toAmino(message: QueryTotalTimeoutFeesRequest): QueryTotalTimeoutFeesRequestAmino {
    const obj: any = {};
    obj.packet_id = message.packetId ? PacketId.toAmino(message.packetId) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryTotalTimeoutFeesRequestAminoMsg): QueryTotalTimeoutFeesRequest {
    return QueryTotalTimeoutFeesRequest.fromAmino(object.value);
  },
  toAminoMsg(message: QueryTotalTimeoutFeesRequest): QueryTotalTimeoutFeesRequestAminoMsg {
    return {
      type: "cosmos-sdk/QueryTotalTimeoutFeesRequest",
      value: QueryTotalTimeoutFeesRequest.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryTotalTimeoutFeesRequestProtoMsg): QueryTotalTimeoutFeesRequest {
    return QueryTotalTimeoutFeesRequest.decode(message.value);
  },
  toProto(message: QueryTotalTimeoutFeesRequest): Uint8Array {
    return QueryTotalTimeoutFeesRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryTotalTimeoutFeesRequest): QueryTotalTimeoutFeesRequestProtoMsg {
    return {
      typeUrl: "/ibc.applications.fee.v1.QueryTotalTimeoutFeesRequest",
      value: QueryTotalTimeoutFeesRequest.encode(message).finish()
    };
  }
};
function createBaseQueryTotalTimeoutFeesResponse(): QueryTotalTimeoutFeesResponse {
  return {
    timeoutFees: []
  };
}
export const QueryTotalTimeoutFeesResponse = {
  typeUrl: "/ibc.applications.fee.v1.QueryTotalTimeoutFeesResponse",
  aminoType: "cosmos-sdk/QueryTotalTimeoutFeesResponse",
  encode(message: QueryTotalTimeoutFeesResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.timeoutFees) {
      Coin.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryTotalTimeoutFeesResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryTotalTimeoutFeesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.timeoutFees.push(Coin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryTotalTimeoutFeesResponse {
    return {
      timeoutFees: Array.isArray(object?.timeoutFees) ? object.timeoutFees.map((e: any) => Coin.fromJSON(e)) : []
    };
  },
  toJSON(message: QueryTotalTimeoutFeesResponse): unknown {
    const obj: any = {};
    if (message.timeoutFees) {
      obj.timeoutFees = message.timeoutFees.map(e => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.timeoutFees = [];
    }
    return obj;
  },
  fromPartial(object: DeepPartial<QueryTotalTimeoutFeesResponse>): QueryTotalTimeoutFeesResponse {
    const message = createBaseQueryTotalTimeoutFeesResponse();
    message.timeoutFees = object.timeoutFees?.map(e => Coin.fromPartial(e)) || [];
    return message;
  },
  fromSDK(object: QueryTotalTimeoutFeesResponseSDKType): QueryTotalTimeoutFeesResponse {
    return {
      timeoutFees: Array.isArray(object?.timeout_fees) ? object.timeout_fees.map((e: any) => Coin.fromSDK(e)) : []
    };
  },
  toSDK(message: QueryTotalTimeoutFeesResponse): QueryTotalTimeoutFeesResponseSDKType {
    const obj: any = {};
    if (message.timeoutFees) {
      obj.timeout_fees = message.timeoutFees.map(e => e ? Coin.toSDK(e) : undefined);
    } else {
      obj.timeout_fees = [];
    }
    return obj;
  },
  fromAmino(object: QueryTotalTimeoutFeesResponseAmino): QueryTotalTimeoutFeesResponse {
    return {
      timeoutFees: Array.isArray(object?.timeout_fees) ? object.timeout_fees.map((e: any) => Coin.fromAmino(e)) : []
    };
  },
  toAmino(message: QueryTotalTimeoutFeesResponse): QueryTotalTimeoutFeesResponseAmino {
    const obj: any = {};
    if (message.timeoutFees) {
      obj.timeout_fees = message.timeoutFees.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.timeout_fees = [];
    }
    return obj;
  },
  fromAminoMsg(object: QueryTotalTimeoutFeesResponseAminoMsg): QueryTotalTimeoutFeesResponse {
    return QueryTotalTimeoutFeesResponse.fromAmino(object.value);
  },
  toAminoMsg(message: QueryTotalTimeoutFeesResponse): QueryTotalTimeoutFeesResponseAminoMsg {
    return {
      type: "cosmos-sdk/QueryTotalTimeoutFeesResponse",
      value: QueryTotalTimeoutFeesResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryTotalTimeoutFeesResponseProtoMsg): QueryTotalTimeoutFeesResponse {
    return QueryTotalTimeoutFeesResponse.decode(message.value);
  },
  toProto(message: QueryTotalTimeoutFeesResponse): Uint8Array {
    return QueryTotalTimeoutFeesResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryTotalTimeoutFeesResponse): QueryTotalTimeoutFeesResponseProtoMsg {
    return {
      typeUrl: "/ibc.applications.fee.v1.QueryTotalTimeoutFeesResponse",
      value: QueryTotalTimeoutFeesResponse.encode(message).finish()
    };
  }
};
function createBaseQueryPayeeRequest(): QueryPayeeRequest {
  return {
    channelId: "",
    relayer: ""
  };
}
export const QueryPayeeRequest = {
  typeUrl: "/ibc.applications.fee.v1.QueryPayeeRequest",
  aminoType: "cosmos-sdk/QueryPayeeRequest",
  encode(message: QueryPayeeRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.channelId !== "") {
      writer.uint32(10).string(message.channelId);
    }
    if (message.relayer !== "") {
      writer.uint32(18).string(message.relayer);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryPayeeRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryPayeeRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.channelId = reader.string();
          break;
        case 2:
          message.relayer = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryPayeeRequest {
    return {
      channelId: isSet(object.channelId) ? String(object.channelId) : "",
      relayer: isSet(object.relayer) ? String(object.relayer) : ""
    };
  },
  toJSON(message: QueryPayeeRequest): unknown {
    const obj: any = {};
    message.channelId !== undefined && (obj.channelId = message.channelId);
    message.relayer !== undefined && (obj.relayer = message.relayer);
    return obj;
  },
  fromPartial(object: DeepPartial<QueryPayeeRequest>): QueryPayeeRequest {
    const message = createBaseQueryPayeeRequest();
    message.channelId = object.channelId ?? "";
    message.relayer = object.relayer ?? "";
    return message;
  },
  fromSDK(object: QueryPayeeRequestSDKType): QueryPayeeRequest {
    return {
      channelId: object?.channel_id,
      relayer: object?.relayer
    };
  },
  toSDK(message: QueryPayeeRequest): QueryPayeeRequestSDKType {
    const obj: any = {};
    obj.channel_id = message.channelId;
    obj.relayer = message.relayer;
    return obj;
  },
  fromAmino(object: QueryPayeeRequestAmino): QueryPayeeRequest {
    return {
      channelId: object.channel_id,
      relayer: object.relayer
    };
  },
  toAmino(message: QueryPayeeRequest): QueryPayeeRequestAmino {
    const obj: any = {};
    obj.channel_id = message.channelId;
    obj.relayer = message.relayer;
    return obj;
  },
  fromAminoMsg(object: QueryPayeeRequestAminoMsg): QueryPayeeRequest {
    return QueryPayeeRequest.fromAmino(object.value);
  },
  toAminoMsg(message: QueryPayeeRequest): QueryPayeeRequestAminoMsg {
    return {
      type: "cosmos-sdk/QueryPayeeRequest",
      value: QueryPayeeRequest.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryPayeeRequestProtoMsg): QueryPayeeRequest {
    return QueryPayeeRequest.decode(message.value);
  },
  toProto(message: QueryPayeeRequest): Uint8Array {
    return QueryPayeeRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryPayeeRequest): QueryPayeeRequestProtoMsg {
    return {
      typeUrl: "/ibc.applications.fee.v1.QueryPayeeRequest",
      value: QueryPayeeRequest.encode(message).finish()
    };
  }
};
function createBaseQueryPayeeResponse(): QueryPayeeResponse {
  return {
    payeeAddress: ""
  };
}
export const QueryPayeeResponse = {
  typeUrl: "/ibc.applications.fee.v1.QueryPayeeResponse",
  aminoType: "cosmos-sdk/QueryPayeeResponse",
  encode(message: QueryPayeeResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.payeeAddress !== "") {
      writer.uint32(10).string(message.payeeAddress);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryPayeeResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryPayeeResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.payeeAddress = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryPayeeResponse {
    return {
      payeeAddress: isSet(object.payeeAddress) ? String(object.payeeAddress) : ""
    };
  },
  toJSON(message: QueryPayeeResponse): unknown {
    const obj: any = {};
    message.payeeAddress !== undefined && (obj.payeeAddress = message.payeeAddress);
    return obj;
  },
  fromPartial(object: DeepPartial<QueryPayeeResponse>): QueryPayeeResponse {
    const message = createBaseQueryPayeeResponse();
    message.payeeAddress = object.payeeAddress ?? "";
    return message;
  },
  fromSDK(object: QueryPayeeResponseSDKType): QueryPayeeResponse {
    return {
      payeeAddress: object?.payee_address
    };
  },
  toSDK(message: QueryPayeeResponse): QueryPayeeResponseSDKType {
    const obj: any = {};
    obj.payee_address = message.payeeAddress;
    return obj;
  },
  fromAmino(object: QueryPayeeResponseAmino): QueryPayeeResponse {
    return {
      payeeAddress: object.payee_address
    };
  },
  toAmino(message: QueryPayeeResponse): QueryPayeeResponseAmino {
    const obj: any = {};
    obj.payee_address = message.payeeAddress;
    return obj;
  },
  fromAminoMsg(object: QueryPayeeResponseAminoMsg): QueryPayeeResponse {
    return QueryPayeeResponse.fromAmino(object.value);
  },
  toAminoMsg(message: QueryPayeeResponse): QueryPayeeResponseAminoMsg {
    return {
      type: "cosmos-sdk/QueryPayeeResponse",
      value: QueryPayeeResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryPayeeResponseProtoMsg): QueryPayeeResponse {
    return QueryPayeeResponse.decode(message.value);
  },
  toProto(message: QueryPayeeResponse): Uint8Array {
    return QueryPayeeResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryPayeeResponse): QueryPayeeResponseProtoMsg {
    return {
      typeUrl: "/ibc.applications.fee.v1.QueryPayeeResponse",
      value: QueryPayeeResponse.encode(message).finish()
    };
  }
};
function createBaseQueryCounterpartyPayeeRequest(): QueryCounterpartyPayeeRequest {
  return {
    channelId: "",
    relayer: ""
  };
}
export const QueryCounterpartyPayeeRequest = {
  typeUrl: "/ibc.applications.fee.v1.QueryCounterpartyPayeeRequest",
  aminoType: "cosmos-sdk/QueryCounterpartyPayeeRequest",
  encode(message: QueryCounterpartyPayeeRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.channelId !== "") {
      writer.uint32(10).string(message.channelId);
    }
    if (message.relayer !== "") {
      writer.uint32(18).string(message.relayer);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryCounterpartyPayeeRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryCounterpartyPayeeRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.channelId = reader.string();
          break;
        case 2:
          message.relayer = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryCounterpartyPayeeRequest {
    return {
      channelId: isSet(object.channelId) ? String(object.channelId) : "",
      relayer: isSet(object.relayer) ? String(object.relayer) : ""
    };
  },
  toJSON(message: QueryCounterpartyPayeeRequest): unknown {
    const obj: any = {};
    message.channelId !== undefined && (obj.channelId = message.channelId);
    message.relayer !== undefined && (obj.relayer = message.relayer);
    return obj;
  },
  fromPartial(object: DeepPartial<QueryCounterpartyPayeeRequest>): QueryCounterpartyPayeeRequest {
    const message = createBaseQueryCounterpartyPayeeRequest();
    message.channelId = object.channelId ?? "";
    message.relayer = object.relayer ?? "";
    return message;
  },
  fromSDK(object: QueryCounterpartyPayeeRequestSDKType): QueryCounterpartyPayeeRequest {
    return {
      channelId: object?.channel_id,
      relayer: object?.relayer
    };
  },
  toSDK(message: QueryCounterpartyPayeeRequest): QueryCounterpartyPayeeRequestSDKType {
    const obj: any = {};
    obj.channel_id = message.channelId;
    obj.relayer = message.relayer;
    return obj;
  },
  fromAmino(object: QueryCounterpartyPayeeRequestAmino): QueryCounterpartyPayeeRequest {
    return {
      channelId: object.channel_id,
      relayer: object.relayer
    };
  },
  toAmino(message: QueryCounterpartyPayeeRequest): QueryCounterpartyPayeeRequestAmino {
    const obj: any = {};
    obj.channel_id = message.channelId;
    obj.relayer = message.relayer;
    return obj;
  },
  fromAminoMsg(object: QueryCounterpartyPayeeRequestAminoMsg): QueryCounterpartyPayeeRequest {
    return QueryCounterpartyPayeeRequest.fromAmino(object.value);
  },
  toAminoMsg(message: QueryCounterpartyPayeeRequest): QueryCounterpartyPayeeRequestAminoMsg {
    return {
      type: "cosmos-sdk/QueryCounterpartyPayeeRequest",
      value: QueryCounterpartyPayeeRequest.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryCounterpartyPayeeRequestProtoMsg): QueryCounterpartyPayeeRequest {
    return QueryCounterpartyPayeeRequest.decode(message.value);
  },
  toProto(message: QueryCounterpartyPayeeRequest): Uint8Array {
    return QueryCounterpartyPayeeRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryCounterpartyPayeeRequest): QueryCounterpartyPayeeRequestProtoMsg {
    return {
      typeUrl: "/ibc.applications.fee.v1.QueryCounterpartyPayeeRequest",
      value: QueryCounterpartyPayeeRequest.encode(message).finish()
    };
  }
};
function createBaseQueryCounterpartyPayeeResponse(): QueryCounterpartyPayeeResponse {
  return {
    counterpartyPayee: ""
  };
}
export const QueryCounterpartyPayeeResponse = {
  typeUrl: "/ibc.applications.fee.v1.QueryCounterpartyPayeeResponse",
  aminoType: "cosmos-sdk/QueryCounterpartyPayeeResponse",
  encode(message: QueryCounterpartyPayeeResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.counterpartyPayee !== "") {
      writer.uint32(10).string(message.counterpartyPayee);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryCounterpartyPayeeResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryCounterpartyPayeeResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.counterpartyPayee = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryCounterpartyPayeeResponse {
    return {
      counterpartyPayee: isSet(object.counterpartyPayee) ? String(object.counterpartyPayee) : ""
    };
  },
  toJSON(message: QueryCounterpartyPayeeResponse): unknown {
    const obj: any = {};
    message.counterpartyPayee !== undefined && (obj.counterpartyPayee = message.counterpartyPayee);
    return obj;
  },
  fromPartial(object: DeepPartial<QueryCounterpartyPayeeResponse>): QueryCounterpartyPayeeResponse {
    const message = createBaseQueryCounterpartyPayeeResponse();
    message.counterpartyPayee = object.counterpartyPayee ?? "";
    return message;
  },
  fromSDK(object: QueryCounterpartyPayeeResponseSDKType): QueryCounterpartyPayeeResponse {
    return {
      counterpartyPayee: object?.counterparty_payee
    };
  },
  toSDK(message: QueryCounterpartyPayeeResponse): QueryCounterpartyPayeeResponseSDKType {
    const obj: any = {};
    obj.counterparty_payee = message.counterpartyPayee;
    return obj;
  },
  fromAmino(object: QueryCounterpartyPayeeResponseAmino): QueryCounterpartyPayeeResponse {
    return {
      counterpartyPayee: object.counterparty_payee
    };
  },
  toAmino(message: QueryCounterpartyPayeeResponse): QueryCounterpartyPayeeResponseAmino {
    const obj: any = {};
    obj.counterparty_payee = message.counterpartyPayee;
    return obj;
  },
  fromAminoMsg(object: QueryCounterpartyPayeeResponseAminoMsg): QueryCounterpartyPayeeResponse {
    return QueryCounterpartyPayeeResponse.fromAmino(object.value);
  },
  toAminoMsg(message: QueryCounterpartyPayeeResponse): QueryCounterpartyPayeeResponseAminoMsg {
    return {
      type: "cosmos-sdk/QueryCounterpartyPayeeResponse",
      value: QueryCounterpartyPayeeResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryCounterpartyPayeeResponseProtoMsg): QueryCounterpartyPayeeResponse {
    return QueryCounterpartyPayeeResponse.decode(message.value);
  },
  toProto(message: QueryCounterpartyPayeeResponse): Uint8Array {
    return QueryCounterpartyPayeeResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryCounterpartyPayeeResponse): QueryCounterpartyPayeeResponseProtoMsg {
    return {
      typeUrl: "/ibc.applications.fee.v1.QueryCounterpartyPayeeResponse",
      value: QueryCounterpartyPayeeResponse.encode(message).finish()
    };
  }
};
function createBaseQueryFeeEnabledChannelsRequest(): QueryFeeEnabledChannelsRequest {
  return {
    pagination: PageRequest.fromPartial({}),
    queryHeight: BigInt(0)
  };
}
export const QueryFeeEnabledChannelsRequest = {
  typeUrl: "/ibc.applications.fee.v1.QueryFeeEnabledChannelsRequest",
  aminoType: "cosmos-sdk/QueryFeeEnabledChannelsRequest",
  encode(message: QueryFeeEnabledChannelsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    if (message.queryHeight !== BigInt(0)) {
      writer.uint32(16).uint64(message.queryHeight);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryFeeEnabledChannelsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryFeeEnabledChannelsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        case 2:
          message.queryHeight = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryFeeEnabledChannelsRequest {
    return {
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined,
      queryHeight: isSet(object.queryHeight) ? BigInt(object.queryHeight.toString()) : BigInt(0)
    };
  },
  toJSON(message: QueryFeeEnabledChannelsRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    message.queryHeight !== undefined && (obj.queryHeight = (message.queryHeight || BigInt(0)).toString());
    return obj;
  },
  fromPartial(object: DeepPartial<QueryFeeEnabledChannelsRequest>): QueryFeeEnabledChannelsRequest {
    const message = createBaseQueryFeeEnabledChannelsRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    message.queryHeight = object.queryHeight !== undefined && object.queryHeight !== null ? BigInt(object.queryHeight.toString()) : BigInt(0);
    return message;
  },
  fromSDK(object: QueryFeeEnabledChannelsRequestSDKType): QueryFeeEnabledChannelsRequest {
    return {
      pagination: object.pagination ? PageRequest.fromSDK(object.pagination) : undefined,
      queryHeight: object?.query_height
    };
  },
  toSDK(message: QueryFeeEnabledChannelsRequest): QueryFeeEnabledChannelsRequestSDKType {
    const obj: any = {};
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toSDK(message.pagination) : undefined);
    obj.query_height = message.queryHeight;
    return obj;
  },
  fromAmino(object: QueryFeeEnabledChannelsRequestAmino): QueryFeeEnabledChannelsRequest {
    return {
      pagination: object?.pagination ? PageRequest.fromAmino(object.pagination) : undefined,
      queryHeight: BigInt(object.query_height)
    };
  },
  toAmino(message: QueryFeeEnabledChannelsRequest): QueryFeeEnabledChannelsRequestAmino {
    const obj: any = {};
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    obj.query_height = message.queryHeight ? message.queryHeight.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryFeeEnabledChannelsRequestAminoMsg): QueryFeeEnabledChannelsRequest {
    return QueryFeeEnabledChannelsRequest.fromAmino(object.value);
  },
  toAminoMsg(message: QueryFeeEnabledChannelsRequest): QueryFeeEnabledChannelsRequestAminoMsg {
    return {
      type: "cosmos-sdk/QueryFeeEnabledChannelsRequest",
      value: QueryFeeEnabledChannelsRequest.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryFeeEnabledChannelsRequestProtoMsg): QueryFeeEnabledChannelsRequest {
    return QueryFeeEnabledChannelsRequest.decode(message.value);
  },
  toProto(message: QueryFeeEnabledChannelsRequest): Uint8Array {
    return QueryFeeEnabledChannelsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryFeeEnabledChannelsRequest): QueryFeeEnabledChannelsRequestProtoMsg {
    return {
      typeUrl: "/ibc.applications.fee.v1.QueryFeeEnabledChannelsRequest",
      value: QueryFeeEnabledChannelsRequest.encode(message).finish()
    };
  }
};
function createBaseQueryFeeEnabledChannelsResponse(): QueryFeeEnabledChannelsResponse {
  return {
    feeEnabledChannels: [],
    pagination: PageResponse.fromPartial({})
  };
}
export const QueryFeeEnabledChannelsResponse = {
  typeUrl: "/ibc.applications.fee.v1.QueryFeeEnabledChannelsResponse",
  aminoType: "cosmos-sdk/QueryFeeEnabledChannelsResponse",
  encode(message: QueryFeeEnabledChannelsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.feeEnabledChannels) {
      FeeEnabledChannel.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryFeeEnabledChannelsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryFeeEnabledChannelsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.feeEnabledChannels.push(FeeEnabledChannel.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryFeeEnabledChannelsResponse {
    return {
      feeEnabledChannels: Array.isArray(object?.feeEnabledChannels) ? object.feeEnabledChannels.map((e: any) => FeeEnabledChannel.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
    };
  },
  toJSON(message: QueryFeeEnabledChannelsResponse): unknown {
    const obj: any = {};
    if (message.feeEnabledChannels) {
      obj.feeEnabledChannels = message.feeEnabledChannels.map(e => e ? FeeEnabledChannel.toJSON(e) : undefined);
    } else {
      obj.feeEnabledChannels = [];
    }
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<QueryFeeEnabledChannelsResponse>): QueryFeeEnabledChannelsResponse {
    const message = createBaseQueryFeeEnabledChannelsResponse();
    message.feeEnabledChannels = object.feeEnabledChannels?.map(e => FeeEnabledChannel.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromSDK(object: QueryFeeEnabledChannelsResponseSDKType): QueryFeeEnabledChannelsResponse {
    return {
      feeEnabledChannels: Array.isArray(object?.fee_enabled_channels) ? object.fee_enabled_channels.map((e: any) => FeeEnabledChannel.fromSDK(e)) : [],
      pagination: object.pagination ? PageResponse.fromSDK(object.pagination) : undefined
    };
  },
  toSDK(message: QueryFeeEnabledChannelsResponse): QueryFeeEnabledChannelsResponseSDKType {
    const obj: any = {};
    if (message.feeEnabledChannels) {
      obj.fee_enabled_channels = message.feeEnabledChannels.map(e => e ? FeeEnabledChannel.toSDK(e) : undefined);
    } else {
      obj.fee_enabled_channels = [];
    }
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toSDK(message.pagination) : undefined);
    return obj;
  },
  fromAmino(object: QueryFeeEnabledChannelsResponseAmino): QueryFeeEnabledChannelsResponse {
    return {
      feeEnabledChannels: Array.isArray(object?.fee_enabled_channels) ? object.fee_enabled_channels.map((e: any) => FeeEnabledChannel.fromAmino(e)) : [],
      pagination: object?.pagination ? PageResponse.fromAmino(object.pagination) : undefined
    };
  },
  toAmino(message: QueryFeeEnabledChannelsResponse): QueryFeeEnabledChannelsResponseAmino {
    const obj: any = {};
    if (message.feeEnabledChannels) {
      obj.fee_enabled_channels = message.feeEnabledChannels.map(e => e ? FeeEnabledChannel.toAmino(e) : undefined);
    } else {
      obj.fee_enabled_channels = [];
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryFeeEnabledChannelsResponseAminoMsg): QueryFeeEnabledChannelsResponse {
    return QueryFeeEnabledChannelsResponse.fromAmino(object.value);
  },
  toAminoMsg(message: QueryFeeEnabledChannelsResponse): QueryFeeEnabledChannelsResponseAminoMsg {
    return {
      type: "cosmos-sdk/QueryFeeEnabledChannelsResponse",
      value: QueryFeeEnabledChannelsResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryFeeEnabledChannelsResponseProtoMsg): QueryFeeEnabledChannelsResponse {
    return QueryFeeEnabledChannelsResponse.decode(message.value);
  },
  toProto(message: QueryFeeEnabledChannelsResponse): Uint8Array {
    return QueryFeeEnabledChannelsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryFeeEnabledChannelsResponse): QueryFeeEnabledChannelsResponseProtoMsg {
    return {
      typeUrl: "/ibc.applications.fee.v1.QueryFeeEnabledChannelsResponse",
      value: QueryFeeEnabledChannelsResponse.encode(message).finish()
    };
  }
};
function createBaseQueryFeeEnabledChannelRequest(): QueryFeeEnabledChannelRequest {
  return {
    portId: "",
    channelId: ""
  };
}
export const QueryFeeEnabledChannelRequest = {
  typeUrl: "/ibc.applications.fee.v1.QueryFeeEnabledChannelRequest",
  aminoType: "cosmos-sdk/QueryFeeEnabledChannelRequest",
  encode(message: QueryFeeEnabledChannelRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.portId !== "") {
      writer.uint32(10).string(message.portId);
    }
    if (message.channelId !== "") {
      writer.uint32(18).string(message.channelId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryFeeEnabledChannelRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryFeeEnabledChannelRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.portId = reader.string();
          break;
        case 2:
          message.channelId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryFeeEnabledChannelRequest {
    return {
      portId: isSet(object.portId) ? String(object.portId) : "",
      channelId: isSet(object.channelId) ? String(object.channelId) : ""
    };
  },
  toJSON(message: QueryFeeEnabledChannelRequest): unknown {
    const obj: any = {};
    message.portId !== undefined && (obj.portId = message.portId);
    message.channelId !== undefined && (obj.channelId = message.channelId);
    return obj;
  },
  fromPartial(object: DeepPartial<QueryFeeEnabledChannelRequest>): QueryFeeEnabledChannelRequest {
    const message = createBaseQueryFeeEnabledChannelRequest();
    message.portId = object.portId ?? "";
    message.channelId = object.channelId ?? "";
    return message;
  },
  fromSDK(object: QueryFeeEnabledChannelRequestSDKType): QueryFeeEnabledChannelRequest {
    return {
      portId: object?.port_id,
      channelId: object?.channel_id
    };
  },
  toSDK(message: QueryFeeEnabledChannelRequest): QueryFeeEnabledChannelRequestSDKType {
    const obj: any = {};
    obj.port_id = message.portId;
    obj.channel_id = message.channelId;
    return obj;
  },
  fromAmino(object: QueryFeeEnabledChannelRequestAmino): QueryFeeEnabledChannelRequest {
    return {
      portId: object.port_id,
      channelId: object.channel_id
    };
  },
  toAmino(message: QueryFeeEnabledChannelRequest): QueryFeeEnabledChannelRequestAmino {
    const obj: any = {};
    obj.port_id = message.portId;
    obj.channel_id = message.channelId;
    return obj;
  },
  fromAminoMsg(object: QueryFeeEnabledChannelRequestAminoMsg): QueryFeeEnabledChannelRequest {
    return QueryFeeEnabledChannelRequest.fromAmino(object.value);
  },
  toAminoMsg(message: QueryFeeEnabledChannelRequest): QueryFeeEnabledChannelRequestAminoMsg {
    return {
      type: "cosmos-sdk/QueryFeeEnabledChannelRequest",
      value: QueryFeeEnabledChannelRequest.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryFeeEnabledChannelRequestProtoMsg): QueryFeeEnabledChannelRequest {
    return QueryFeeEnabledChannelRequest.decode(message.value);
  },
  toProto(message: QueryFeeEnabledChannelRequest): Uint8Array {
    return QueryFeeEnabledChannelRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryFeeEnabledChannelRequest): QueryFeeEnabledChannelRequestProtoMsg {
    return {
      typeUrl: "/ibc.applications.fee.v1.QueryFeeEnabledChannelRequest",
      value: QueryFeeEnabledChannelRequest.encode(message).finish()
    };
  }
};
function createBaseQueryFeeEnabledChannelResponse(): QueryFeeEnabledChannelResponse {
  return {
    feeEnabled: false
  };
}
export const QueryFeeEnabledChannelResponse = {
  typeUrl: "/ibc.applications.fee.v1.QueryFeeEnabledChannelResponse",
  aminoType: "cosmos-sdk/QueryFeeEnabledChannelResponse",
  encode(message: QueryFeeEnabledChannelResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.feeEnabled === true) {
      writer.uint32(8).bool(message.feeEnabled);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryFeeEnabledChannelResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryFeeEnabledChannelResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.feeEnabled = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryFeeEnabledChannelResponse {
    return {
      feeEnabled: isSet(object.feeEnabled) ? Boolean(object.feeEnabled) : false
    };
  },
  toJSON(message: QueryFeeEnabledChannelResponse): unknown {
    const obj: any = {};
    message.feeEnabled !== undefined && (obj.feeEnabled = message.feeEnabled);
    return obj;
  },
  fromPartial(object: DeepPartial<QueryFeeEnabledChannelResponse>): QueryFeeEnabledChannelResponse {
    const message = createBaseQueryFeeEnabledChannelResponse();
    message.feeEnabled = object.feeEnabled ?? false;
    return message;
  },
  fromSDK(object: QueryFeeEnabledChannelResponseSDKType): QueryFeeEnabledChannelResponse {
    return {
      feeEnabled: object?.fee_enabled
    };
  },
  toSDK(message: QueryFeeEnabledChannelResponse): QueryFeeEnabledChannelResponseSDKType {
    const obj: any = {};
    obj.fee_enabled = message.feeEnabled;
    return obj;
  },
  fromAmino(object: QueryFeeEnabledChannelResponseAmino): QueryFeeEnabledChannelResponse {
    return {
      feeEnabled: object.fee_enabled
    };
  },
  toAmino(message: QueryFeeEnabledChannelResponse): QueryFeeEnabledChannelResponseAmino {
    const obj: any = {};
    obj.fee_enabled = message.feeEnabled;
    return obj;
  },
  fromAminoMsg(object: QueryFeeEnabledChannelResponseAminoMsg): QueryFeeEnabledChannelResponse {
    return QueryFeeEnabledChannelResponse.fromAmino(object.value);
  },
  toAminoMsg(message: QueryFeeEnabledChannelResponse): QueryFeeEnabledChannelResponseAminoMsg {
    return {
      type: "cosmos-sdk/QueryFeeEnabledChannelResponse",
      value: QueryFeeEnabledChannelResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryFeeEnabledChannelResponseProtoMsg): QueryFeeEnabledChannelResponse {
    return QueryFeeEnabledChannelResponse.decode(message.value);
  },
  toProto(message: QueryFeeEnabledChannelResponse): Uint8Array {
    return QueryFeeEnabledChannelResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryFeeEnabledChannelResponse): QueryFeeEnabledChannelResponseProtoMsg {
    return {
      typeUrl: "/ibc.applications.fee.v1.QueryFeeEnabledChannelResponse",
      value: QueryFeeEnabledChannelResponse.encode(message).finish()
    };
  }
};