import { Tx, TxAmino, TxSDKType } from "./tx";
import { PageRequest, PageRequestAmino, PageRequestSDKType, PageResponse, PageResponseAmino, PageResponseSDKType } from "../../base/query/v1beta1/pagination";
import { TxResponse, TxResponseAmino, TxResponseSDKType, GasInfo, GasInfoAmino, GasInfoSDKType, Result, ResultAmino, ResultSDKType } from "../../base/abci/v1beta1/abci";
import { BlockID, BlockIDAmino, BlockIDSDKType } from "../../../tendermint/types/types";
import { Block, BlockAmino, BlockSDKType } from "../../../tendermint/types/block";
import { Long, DeepPartial, isSet } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
/** OrderBy defines the sorting order */
export enum OrderBy {
  /**
   * ORDER_BY_UNSPECIFIED - ORDER_BY_UNSPECIFIED specifies an unknown sorting order. OrderBy defaults
   * to ASC in this case.
   */
  ORDER_BY_UNSPECIFIED = 0,
  /** ORDER_BY_ASC - ORDER_BY_ASC defines ascending order */
  ORDER_BY_ASC = 1,
  /** ORDER_BY_DESC - ORDER_BY_DESC defines descending order */
  ORDER_BY_DESC = 2,
  UNRECOGNIZED = -1,
}
export const OrderBySDKType = OrderBy;
export const OrderByAmino = OrderBy;
export function orderByFromJSON(object: any): OrderBy {
  switch (object) {
    case 0:
    case "ORDER_BY_UNSPECIFIED":
      return OrderBy.ORDER_BY_UNSPECIFIED;
    case 1:
    case "ORDER_BY_ASC":
      return OrderBy.ORDER_BY_ASC;
    case 2:
    case "ORDER_BY_DESC":
      return OrderBy.ORDER_BY_DESC;
    case -1:
    case "UNRECOGNIZED":
    default:
      return OrderBy.UNRECOGNIZED;
  }
}
export function orderByToJSON(object: OrderBy): string {
  switch (object) {
    case OrderBy.ORDER_BY_UNSPECIFIED:
      return "ORDER_BY_UNSPECIFIED";
    case OrderBy.ORDER_BY_ASC:
      return "ORDER_BY_ASC";
    case OrderBy.ORDER_BY_DESC:
      return "ORDER_BY_DESC";
    case OrderBy.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
/**
 * BroadcastMode specifies the broadcast mode for the TxService.Broadcast RPC
 * method.
 */
export enum BroadcastMode {
  /** BROADCAST_MODE_UNSPECIFIED - zero-value for mode ordering */
  BROADCAST_MODE_UNSPECIFIED = 0,
  /**
   * BROADCAST_MODE_BLOCK - DEPRECATED: use BROADCAST_MODE_SYNC instead,
   * BROADCAST_MODE_BLOCK is not supported by the SDK from v0.47.x onwards.
   */
  BROADCAST_MODE_BLOCK = 1,
  /**
   * BROADCAST_MODE_SYNC - BROADCAST_MODE_SYNC defines a tx broadcasting mode where the client waits
   * for a CheckTx execution response only.
   */
  BROADCAST_MODE_SYNC = 2,
  /**
   * BROADCAST_MODE_ASYNC - BROADCAST_MODE_ASYNC defines a tx broadcasting mode where the client
   * returns immediately.
   */
  BROADCAST_MODE_ASYNC = 3,
  UNRECOGNIZED = -1,
}
export const BroadcastModeSDKType = BroadcastMode;
export const BroadcastModeAmino = BroadcastMode;
export function broadcastModeFromJSON(object: any): BroadcastMode {
  switch (object) {
    case 0:
    case "BROADCAST_MODE_UNSPECIFIED":
      return BroadcastMode.BROADCAST_MODE_UNSPECIFIED;
    case 1:
    case "BROADCAST_MODE_BLOCK":
      return BroadcastMode.BROADCAST_MODE_BLOCK;
    case 2:
    case "BROADCAST_MODE_SYNC":
      return BroadcastMode.BROADCAST_MODE_SYNC;
    case 3:
    case "BROADCAST_MODE_ASYNC":
      return BroadcastMode.BROADCAST_MODE_ASYNC;
    case -1:
    case "UNRECOGNIZED":
    default:
      return BroadcastMode.UNRECOGNIZED;
  }
}
export function broadcastModeToJSON(object: BroadcastMode): string {
  switch (object) {
    case BroadcastMode.BROADCAST_MODE_UNSPECIFIED:
      return "BROADCAST_MODE_UNSPECIFIED";
    case BroadcastMode.BROADCAST_MODE_BLOCK:
      return "BROADCAST_MODE_BLOCK";
    case BroadcastMode.BROADCAST_MODE_SYNC:
      return "BROADCAST_MODE_SYNC";
    case BroadcastMode.BROADCAST_MODE_ASYNC:
      return "BROADCAST_MODE_ASYNC";
    case BroadcastMode.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
/**
 * GetTxsEventRequest is the request type for the Service.TxsByEvents
 * RPC method.
 */
export interface GetTxsEventRequest {
  /**
   * events is the list of transaction event type.
   * Deprecated post v0.47.x: use query instead, which should contain a valid
   * events query.
   */
  /** @deprecated */
  events: string[];
  /**
   * pagination defines a pagination for the request.
   * Deprecated post v0.46.x: use page and limit instead.
   */
  /** @deprecated */
  pagination: PageRequest;
  orderBy: OrderBy;
  /**
   * page is the page number to query, starts at 1. If not provided, will
   * default to first page.
   */
  page: Long;
  /**
   * limit is the total number of results to be returned in the result page.
   * If left empty it will default to a value to be set by each app.
   */
  limit: Long;
  /**
   * query defines the transaction event query that is proxied to Tendermint's
   * TxSearch RPC method. The query must be valid.
   * 
   * Since cosmos-sdk 0.50
   */
  query: string;
}
export interface GetTxsEventRequestProtoMsg {
  typeUrl: "/cosmos.tx.v1beta1.GetTxsEventRequest";
  value: Uint8Array;
}
/**
 * GetTxsEventRequest is the request type for the Service.TxsByEvents
 * RPC method.
 */
export interface GetTxsEventRequestAmino {
  /**
   * events is the list of transaction event type.
   * Deprecated post v0.47.x: use query instead, which should contain a valid
   * events query.
   */
  /** @deprecated */
  events: string[];
  /**
   * pagination defines a pagination for the request.
   * Deprecated post v0.46.x: use page and limit instead.
   */
  /** @deprecated */
  pagination?: PageRequestAmino;
  order_by: OrderBy;
  /**
   * page is the page number to query, starts at 1. If not provided, will
   * default to first page.
   */
  page: string;
  /**
   * limit is the total number of results to be returned in the result page.
   * If left empty it will default to a value to be set by each app.
   */
  limit: string;
  /**
   * query defines the transaction event query that is proxied to Tendermint's
   * TxSearch RPC method. The query must be valid.
   * 
   * Since cosmos-sdk 0.50
   */
  query: string;
}
export interface GetTxsEventRequestAminoMsg {
  type: "cosmos-sdk/GetTxsEventRequest";
  value: GetTxsEventRequestAmino;
}
/**
 * GetTxsEventRequest is the request type for the Service.TxsByEvents
 * RPC method.
 */
export interface GetTxsEventRequestSDKType {
  /** @deprecated */
  events: string[];
  /** @deprecated */
  pagination: PageRequestSDKType;
  order_by: OrderBy;
  page: Long;
  limit: Long;
  query: string;
}
/**
 * GetTxsEventResponse is the response type for the Service.TxsByEvents
 * RPC method.
 */
export interface GetTxsEventResponse {
  /** txs is the list of queried transactions. */
  txs: Tx[];
  /** tx_responses is the list of queried TxResponses. */
  txResponses: TxResponse[];
  /**
   * pagination defines a pagination for the response.
   * Deprecated post v0.46.x: use total instead.
   */
  /** @deprecated */
  pagination: PageResponse;
  /** total is total number of results available */
  total: Long;
}
export interface GetTxsEventResponseProtoMsg {
  typeUrl: "/cosmos.tx.v1beta1.GetTxsEventResponse";
  value: Uint8Array;
}
/**
 * GetTxsEventResponse is the response type for the Service.TxsByEvents
 * RPC method.
 */
export interface GetTxsEventResponseAmino {
  /** txs is the list of queried transactions. */
  txs: TxAmino[];
  /** tx_responses is the list of queried TxResponses. */
  tx_responses: TxResponseAmino[];
  /**
   * pagination defines a pagination for the response.
   * Deprecated post v0.46.x: use total instead.
   */
  /** @deprecated */
  pagination?: PageResponseAmino;
  /** total is total number of results available */
  total: string;
}
export interface GetTxsEventResponseAminoMsg {
  type: "cosmos-sdk/GetTxsEventResponse";
  value: GetTxsEventResponseAmino;
}
/**
 * GetTxsEventResponse is the response type for the Service.TxsByEvents
 * RPC method.
 */
export interface GetTxsEventResponseSDKType {
  txs: TxSDKType[];
  tx_responses: TxResponseSDKType[];
  /** @deprecated */
  pagination: PageResponseSDKType;
  total: Long;
}
/**
 * BroadcastTxRequest is the request type for the Service.BroadcastTxRequest
 * RPC method.
 */
export interface BroadcastTxRequest {
  /** tx_bytes is the raw transaction. */
  txBytes: Uint8Array;
  mode: BroadcastMode;
}
export interface BroadcastTxRequestProtoMsg {
  typeUrl: "/cosmos.tx.v1beta1.BroadcastTxRequest";
  value: Uint8Array;
}
/**
 * BroadcastTxRequest is the request type for the Service.BroadcastTxRequest
 * RPC method.
 */
export interface BroadcastTxRequestAmino {
  /** tx_bytes is the raw transaction. */
  tx_bytes: Uint8Array;
  mode: BroadcastMode;
}
export interface BroadcastTxRequestAminoMsg {
  type: "cosmos-sdk/BroadcastTxRequest";
  value: BroadcastTxRequestAmino;
}
/**
 * BroadcastTxRequest is the request type for the Service.BroadcastTxRequest
 * RPC method.
 */
export interface BroadcastTxRequestSDKType {
  tx_bytes: Uint8Array;
  mode: BroadcastMode;
}
/**
 * BroadcastTxResponse is the response type for the
 * Service.BroadcastTx method.
 */
export interface BroadcastTxResponse {
  /** tx_response is the queried TxResponses. */
  txResponse: TxResponse;
}
export interface BroadcastTxResponseProtoMsg {
  typeUrl: "/cosmos.tx.v1beta1.BroadcastTxResponse";
  value: Uint8Array;
}
/**
 * BroadcastTxResponse is the response type for the
 * Service.BroadcastTx method.
 */
export interface BroadcastTxResponseAmino {
  /** tx_response is the queried TxResponses. */
  tx_response?: TxResponseAmino;
}
export interface BroadcastTxResponseAminoMsg {
  type: "cosmos-sdk/BroadcastTxResponse";
  value: BroadcastTxResponseAmino;
}
/**
 * BroadcastTxResponse is the response type for the
 * Service.BroadcastTx method.
 */
export interface BroadcastTxResponseSDKType {
  tx_response: TxResponseSDKType;
}
/**
 * SimulateRequest is the request type for the Service.Simulate
 * RPC method.
 */
export interface SimulateRequest {
  /**
   * tx is the transaction to simulate.
   * Deprecated. Send raw tx bytes instead.
   */
  /** @deprecated */
  tx: Tx;
  /**
   * tx_bytes is the raw transaction.
   * 
   * Since: cosmos-sdk 0.43
   */
  txBytes: Uint8Array;
}
export interface SimulateRequestProtoMsg {
  typeUrl: "/cosmos.tx.v1beta1.SimulateRequest";
  value: Uint8Array;
}
/**
 * SimulateRequest is the request type for the Service.Simulate
 * RPC method.
 */
export interface SimulateRequestAmino {
  /**
   * tx is the transaction to simulate.
   * Deprecated. Send raw tx bytes instead.
   */
  /** @deprecated */
  tx?: TxAmino;
  /**
   * tx_bytes is the raw transaction.
   * 
   * Since: cosmos-sdk 0.43
   */
  tx_bytes: Uint8Array;
}
export interface SimulateRequestAminoMsg {
  type: "cosmos-sdk/SimulateRequest";
  value: SimulateRequestAmino;
}
/**
 * SimulateRequest is the request type for the Service.Simulate
 * RPC method.
 */
export interface SimulateRequestSDKType {
  /** @deprecated */
  tx: TxSDKType;
  tx_bytes: Uint8Array;
}
/**
 * SimulateResponse is the response type for the
 * Service.SimulateRPC method.
 */
export interface SimulateResponse {
  /** gas_info is the information about gas used in the simulation. */
  gasInfo: GasInfo;
  /** result is the result of the simulation. */
  result: Result;
}
export interface SimulateResponseProtoMsg {
  typeUrl: "/cosmos.tx.v1beta1.SimulateResponse";
  value: Uint8Array;
}
/**
 * SimulateResponse is the response type for the
 * Service.SimulateRPC method.
 */
export interface SimulateResponseAmino {
  /** gas_info is the information about gas used in the simulation. */
  gas_info?: GasInfoAmino;
  /** result is the result of the simulation. */
  result?: ResultAmino;
}
export interface SimulateResponseAminoMsg {
  type: "cosmos-sdk/SimulateResponse";
  value: SimulateResponseAmino;
}
/**
 * SimulateResponse is the response type for the
 * Service.SimulateRPC method.
 */
export interface SimulateResponseSDKType {
  gas_info: GasInfoSDKType;
  result: ResultSDKType;
}
/**
 * GetTxRequest is the request type for the Service.GetTx
 * RPC method.
 */
export interface GetTxRequest {
  /** hash is the tx hash to query, encoded as a hex string. */
  hash: string;
}
export interface GetTxRequestProtoMsg {
  typeUrl: "/cosmos.tx.v1beta1.GetTxRequest";
  value: Uint8Array;
}
/**
 * GetTxRequest is the request type for the Service.GetTx
 * RPC method.
 */
export interface GetTxRequestAmino {
  /** hash is the tx hash to query, encoded as a hex string. */
  hash: string;
}
export interface GetTxRequestAminoMsg {
  type: "cosmos-sdk/GetTxRequest";
  value: GetTxRequestAmino;
}
/**
 * GetTxRequest is the request type for the Service.GetTx
 * RPC method.
 */
export interface GetTxRequestSDKType {
  hash: string;
}
/** GetTxResponse is the response type for the Service.GetTx method. */
export interface GetTxResponse {
  /** tx is the queried transaction. */
  tx: Tx;
  /** tx_response is the queried TxResponses. */
  txResponse: TxResponse;
}
export interface GetTxResponseProtoMsg {
  typeUrl: "/cosmos.tx.v1beta1.GetTxResponse";
  value: Uint8Array;
}
/** GetTxResponse is the response type for the Service.GetTx method. */
export interface GetTxResponseAmino {
  /** tx is the queried transaction. */
  tx?: TxAmino;
  /** tx_response is the queried TxResponses. */
  tx_response?: TxResponseAmino;
}
export interface GetTxResponseAminoMsg {
  type: "cosmos-sdk/GetTxResponse";
  value: GetTxResponseAmino;
}
/** GetTxResponse is the response type for the Service.GetTx method. */
export interface GetTxResponseSDKType {
  tx: TxSDKType;
  tx_response: TxResponseSDKType;
}
/**
 * GetBlockWithTxsRequest is the request type for the Service.GetBlockWithTxs
 * RPC method.
 * 
 * Since: cosmos-sdk 0.45.2
 */
export interface GetBlockWithTxsRequest {
  /** height is the height of the block to query. */
  height: Long;
  /** pagination defines a pagination for the request. */
  pagination: PageRequest;
}
export interface GetBlockWithTxsRequestProtoMsg {
  typeUrl: "/cosmos.tx.v1beta1.GetBlockWithTxsRequest";
  value: Uint8Array;
}
/**
 * GetBlockWithTxsRequest is the request type for the Service.GetBlockWithTxs
 * RPC method.
 * 
 * Since: cosmos-sdk 0.45.2
 */
export interface GetBlockWithTxsRequestAmino {
  /** height is the height of the block to query. */
  height: string;
  /** pagination defines a pagination for the request. */
  pagination?: PageRequestAmino;
}
export interface GetBlockWithTxsRequestAminoMsg {
  type: "cosmos-sdk/GetBlockWithTxsRequest";
  value: GetBlockWithTxsRequestAmino;
}
/**
 * GetBlockWithTxsRequest is the request type for the Service.GetBlockWithTxs
 * RPC method.
 * 
 * Since: cosmos-sdk 0.45.2
 */
export interface GetBlockWithTxsRequestSDKType {
  height: Long;
  pagination: PageRequestSDKType;
}
/**
 * GetBlockWithTxsResponse is the response type for the Service.GetBlockWithTxs
 * method.
 * 
 * Since: cosmos-sdk 0.45.2
 */
export interface GetBlockWithTxsResponse {
  /** txs are the transactions in the block. */
  txs: Tx[];
  blockId: BlockID;
  block: Block;
  /** pagination defines a pagination for the response. */
  pagination: PageResponse;
}
export interface GetBlockWithTxsResponseProtoMsg {
  typeUrl: "/cosmos.tx.v1beta1.GetBlockWithTxsResponse";
  value: Uint8Array;
}
/**
 * GetBlockWithTxsResponse is the response type for the Service.GetBlockWithTxs
 * method.
 * 
 * Since: cosmos-sdk 0.45.2
 */
export interface GetBlockWithTxsResponseAmino {
  /** txs are the transactions in the block. */
  txs: TxAmino[];
  block_id?: BlockIDAmino;
  block?: BlockAmino;
  /** pagination defines a pagination for the response. */
  pagination?: PageResponseAmino;
}
export interface GetBlockWithTxsResponseAminoMsg {
  type: "cosmos-sdk/GetBlockWithTxsResponse";
  value: GetBlockWithTxsResponseAmino;
}
/**
 * GetBlockWithTxsResponse is the response type for the Service.GetBlockWithTxs
 * method.
 * 
 * Since: cosmos-sdk 0.45.2
 */
export interface GetBlockWithTxsResponseSDKType {
  txs: TxSDKType[];
  block_id: BlockIDSDKType;
  block: BlockSDKType;
  pagination: PageResponseSDKType;
}
/**
 * TxDecodeRequest is the request type for the Service.TxDecode
 * RPC method.
 * 
 * Since: cosmos-sdk 0.47
 */
export interface TxDecodeRequest {
  /** tx_bytes is the raw transaction. */
  txBytes: Uint8Array;
}
export interface TxDecodeRequestProtoMsg {
  typeUrl: "/cosmos.tx.v1beta1.TxDecodeRequest";
  value: Uint8Array;
}
/**
 * TxDecodeRequest is the request type for the Service.TxDecode
 * RPC method.
 * 
 * Since: cosmos-sdk 0.47
 */
export interface TxDecodeRequestAmino {
  /** tx_bytes is the raw transaction. */
  tx_bytes: Uint8Array;
}
export interface TxDecodeRequestAminoMsg {
  type: "cosmos-sdk/TxDecodeRequest";
  value: TxDecodeRequestAmino;
}
/**
 * TxDecodeRequest is the request type for the Service.TxDecode
 * RPC method.
 * 
 * Since: cosmos-sdk 0.47
 */
export interface TxDecodeRequestSDKType {
  tx_bytes: Uint8Array;
}
/**
 * TxDecodeResponse is the response type for the
 * Service.TxDecode method.
 * 
 * Since: cosmos-sdk 0.47
 */
export interface TxDecodeResponse {
  /** tx is the decoded transaction. */
  tx: Tx;
}
export interface TxDecodeResponseProtoMsg {
  typeUrl: "/cosmos.tx.v1beta1.TxDecodeResponse";
  value: Uint8Array;
}
/**
 * TxDecodeResponse is the response type for the
 * Service.TxDecode method.
 * 
 * Since: cosmos-sdk 0.47
 */
export interface TxDecodeResponseAmino {
  /** tx is the decoded transaction. */
  tx?: TxAmino;
}
export interface TxDecodeResponseAminoMsg {
  type: "cosmos-sdk/TxDecodeResponse";
  value: TxDecodeResponseAmino;
}
/**
 * TxDecodeResponse is the response type for the
 * Service.TxDecode method.
 * 
 * Since: cosmos-sdk 0.47
 */
export interface TxDecodeResponseSDKType {
  tx: TxSDKType;
}
/**
 * TxEncodeRequest is the request type for the Service.TxEncode
 * RPC method.
 * 
 * Since: cosmos-sdk 0.47
 */
export interface TxEncodeRequest {
  /** tx is the transaction to encode. */
  tx: Tx;
}
export interface TxEncodeRequestProtoMsg {
  typeUrl: "/cosmos.tx.v1beta1.TxEncodeRequest";
  value: Uint8Array;
}
/**
 * TxEncodeRequest is the request type for the Service.TxEncode
 * RPC method.
 * 
 * Since: cosmos-sdk 0.47
 */
export interface TxEncodeRequestAmino {
  /** tx is the transaction to encode. */
  tx?: TxAmino;
}
export interface TxEncodeRequestAminoMsg {
  type: "cosmos-sdk/TxEncodeRequest";
  value: TxEncodeRequestAmino;
}
/**
 * TxEncodeRequest is the request type for the Service.TxEncode
 * RPC method.
 * 
 * Since: cosmos-sdk 0.47
 */
export interface TxEncodeRequestSDKType {
  tx: TxSDKType;
}
/**
 * TxEncodeResponse is the response type for the
 * Service.TxEncode method.
 * 
 * Since: cosmos-sdk 0.47
 */
export interface TxEncodeResponse {
  /** tx_bytes is the encoded transaction bytes. */
  txBytes: Uint8Array;
}
export interface TxEncodeResponseProtoMsg {
  typeUrl: "/cosmos.tx.v1beta1.TxEncodeResponse";
  value: Uint8Array;
}
/**
 * TxEncodeResponse is the response type for the
 * Service.TxEncode method.
 * 
 * Since: cosmos-sdk 0.47
 */
export interface TxEncodeResponseAmino {
  /** tx_bytes is the encoded transaction bytes. */
  tx_bytes: Uint8Array;
}
export interface TxEncodeResponseAminoMsg {
  type: "cosmos-sdk/TxEncodeResponse";
  value: TxEncodeResponseAmino;
}
/**
 * TxEncodeResponse is the response type for the
 * Service.TxEncode method.
 * 
 * Since: cosmos-sdk 0.47
 */
export interface TxEncodeResponseSDKType {
  tx_bytes: Uint8Array;
}
/**
 * TxEncodeAminoRequest is the request type for the Service.TxEncodeAmino
 * RPC method.
 * 
 * Since: cosmos-sdk 0.47
 */
export interface TxEncodeAminoRequest {
  aminoJson: string;
}
export interface TxEncodeAminoRequestProtoMsg {
  typeUrl: "/cosmos.tx.v1beta1.TxEncodeAminoRequest";
  value: Uint8Array;
}
/**
 * TxEncodeAminoRequest is the request type for the Service.TxEncodeAmino
 * RPC method.
 * 
 * Since: cosmos-sdk 0.47
 */
export interface TxEncodeAminoRequestAmino {
  amino_json: string;
}
export interface TxEncodeAminoRequestAminoMsg {
  type: "cosmos-sdk/TxEncodeAminoRequest";
  value: TxEncodeAminoRequestAmino;
}
/**
 * TxEncodeAminoRequest is the request type for the Service.TxEncodeAmino
 * RPC method.
 * 
 * Since: cosmos-sdk 0.47
 */
export interface TxEncodeAminoRequestSDKType {
  amino_json: string;
}
/**
 * TxEncodeAminoResponse is the response type for the Service.TxEncodeAmino
 * RPC method.
 * 
 * Since: cosmos-sdk 0.47
 */
export interface TxEncodeAminoResponse {
  aminoBinary: Uint8Array;
}
export interface TxEncodeAminoResponseProtoMsg {
  typeUrl: "/cosmos.tx.v1beta1.TxEncodeAminoResponse";
  value: Uint8Array;
}
/**
 * TxEncodeAminoResponse is the response type for the Service.TxEncodeAmino
 * RPC method.
 * 
 * Since: cosmos-sdk 0.47
 */
export interface TxEncodeAminoResponseAmino {
  amino_binary: Uint8Array;
}
export interface TxEncodeAminoResponseAminoMsg {
  type: "cosmos-sdk/TxEncodeAminoResponse";
  value: TxEncodeAminoResponseAmino;
}
/**
 * TxEncodeAminoResponse is the response type for the Service.TxEncodeAmino
 * RPC method.
 * 
 * Since: cosmos-sdk 0.47
 */
export interface TxEncodeAminoResponseSDKType {
  amino_binary: Uint8Array;
}
/**
 * TxDecodeAminoRequest is the request type for the Service.TxDecodeAmino
 * RPC method.
 * 
 * Since: cosmos-sdk 0.47
 */
export interface TxDecodeAminoRequest {
  aminoBinary: Uint8Array;
}
export interface TxDecodeAminoRequestProtoMsg {
  typeUrl: "/cosmos.tx.v1beta1.TxDecodeAminoRequest";
  value: Uint8Array;
}
/**
 * TxDecodeAminoRequest is the request type for the Service.TxDecodeAmino
 * RPC method.
 * 
 * Since: cosmos-sdk 0.47
 */
export interface TxDecodeAminoRequestAmino {
  amino_binary: Uint8Array;
}
export interface TxDecodeAminoRequestAminoMsg {
  type: "cosmos-sdk/TxDecodeAminoRequest";
  value: TxDecodeAminoRequestAmino;
}
/**
 * TxDecodeAminoRequest is the request type for the Service.TxDecodeAmino
 * RPC method.
 * 
 * Since: cosmos-sdk 0.47
 */
export interface TxDecodeAminoRequestSDKType {
  amino_binary: Uint8Array;
}
/**
 * TxDecodeAminoResponse is the response type for the Service.TxDecodeAmino
 * RPC method.
 * 
 * Since: cosmos-sdk 0.47
 */
export interface TxDecodeAminoResponse {
  aminoJson: string;
}
export interface TxDecodeAminoResponseProtoMsg {
  typeUrl: "/cosmos.tx.v1beta1.TxDecodeAminoResponse";
  value: Uint8Array;
}
/**
 * TxDecodeAminoResponse is the response type for the Service.TxDecodeAmino
 * RPC method.
 * 
 * Since: cosmos-sdk 0.47
 */
export interface TxDecodeAminoResponseAmino {
  amino_json: string;
}
export interface TxDecodeAminoResponseAminoMsg {
  type: "cosmos-sdk/TxDecodeAminoResponse";
  value: TxDecodeAminoResponseAmino;
}
/**
 * TxDecodeAminoResponse is the response type for the Service.TxDecodeAmino
 * RPC method.
 * 
 * Since: cosmos-sdk 0.47
 */
export interface TxDecodeAminoResponseSDKType {
  amino_json: string;
}
function createBaseGetTxsEventRequest(): GetTxsEventRequest {
  return {
    events: [],
    pagination: PageRequest.fromPartial({}),
    orderBy: 0,
    page: Long.UZERO,
    limit: Long.UZERO,
    query: ""
  };
}
export const GetTxsEventRequest = {
  encode(message: GetTxsEventRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.events) {
      writer.uint32(10).string(v!);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    if (message.orderBy !== 0) {
      writer.uint32(24).int32(message.orderBy);
    }
    if (!message.page.isZero()) {
      writer.uint32(32).uint64(message.page);
    }
    if (!message.limit.isZero()) {
      writer.uint32(40).uint64(message.limit);
    }
    if (message.query !== "") {
      writer.uint32(50).string(message.query);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): GetTxsEventRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetTxsEventRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.events.push(reader.string());
          break;
        case 2:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        case 3:
          message.orderBy = (reader.int32() as any);
          break;
        case 4:
          message.page = (reader.uint64() as Long);
          break;
        case 5:
          message.limit = (reader.uint64() as Long);
          break;
        case 6:
          message.query = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<GetTxsEventRequest>): GetTxsEventRequest {
    const message = createBaseGetTxsEventRequest();
    message.events = object.events?.map(e => e) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    message.orderBy = object.orderBy ?? 0;
    message.page = object.page !== undefined && object.page !== null ? Long.fromValue(object.page) : Long.UZERO;
    message.limit = object.limit !== undefined && object.limit !== null ? Long.fromValue(object.limit) : Long.UZERO;
    message.query = object.query ?? "";
    return message;
  },
  fromAmino(object: GetTxsEventRequestAmino): GetTxsEventRequest {
    return {
      events: Array.isArray(object?.events) ? object.events.map((e: any) => e) : [],
      pagination: object?.pagination ? PageRequest.fromAmino(object.pagination) : undefined,
      orderBy: isSet(object.order_by) ? orderByFromJSON(object.order_by) : -1,
      page: Long.fromString(object.page),
      limit: Long.fromString(object.limit),
      query: object.query
    };
  },
  toAmino(message: GetTxsEventRequest): GetTxsEventRequestAmino {
    const obj: any = {};
    if (message.events) {
      obj.events = message.events.map(e => e);
    } else {
      obj.events = [];
    }
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    obj.order_by = message.orderBy;
    obj.page = message.page ? message.page.toString() : undefined;
    obj.limit = message.limit ? message.limit.toString() : undefined;
    obj.query = message.query;
    return obj;
  },
  fromAminoMsg(object: GetTxsEventRequestAminoMsg): GetTxsEventRequest {
    return GetTxsEventRequest.fromAmino(object.value);
  },
  toAminoMsg(message: GetTxsEventRequest): GetTxsEventRequestAminoMsg {
    return {
      type: "cosmos-sdk/GetTxsEventRequest",
      value: GetTxsEventRequest.toAmino(message)
    };
  },
  fromProtoMsg(message: GetTxsEventRequestProtoMsg): GetTxsEventRequest {
    return GetTxsEventRequest.decode(message.value);
  },
  toProto(message: GetTxsEventRequest): Uint8Array {
    return GetTxsEventRequest.encode(message).finish();
  },
  toProtoMsg(message: GetTxsEventRequest): GetTxsEventRequestProtoMsg {
    return {
      typeUrl: "/cosmos.tx.v1beta1.GetTxsEventRequest",
      value: GetTxsEventRequest.encode(message).finish()
    };
  }
};
function createBaseGetTxsEventResponse(): GetTxsEventResponse {
  return {
    txs: [],
    txResponses: [],
    pagination: PageResponse.fromPartial({}),
    total: Long.UZERO
  };
}
export const GetTxsEventResponse = {
  encode(message: GetTxsEventResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.txs) {
      Tx.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.txResponses) {
      TxResponse.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(26).fork()).ldelim();
    }
    if (!message.total.isZero()) {
      writer.uint32(32).uint64(message.total);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): GetTxsEventResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetTxsEventResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.txs.push(Tx.decode(reader, reader.uint32()));
          break;
        case 2:
          message.txResponses.push(TxResponse.decode(reader, reader.uint32()));
          break;
        case 3:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        case 4:
          message.total = (reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<GetTxsEventResponse>): GetTxsEventResponse {
    const message = createBaseGetTxsEventResponse();
    message.txs = object.txs?.map(e => Tx.fromPartial(e)) || [];
    message.txResponses = object.txResponses?.map(e => TxResponse.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    message.total = object.total !== undefined && object.total !== null ? Long.fromValue(object.total) : Long.UZERO;
    return message;
  },
  fromAmino(object: GetTxsEventResponseAmino): GetTxsEventResponse {
    return {
      txs: Array.isArray(object?.txs) ? object.txs.map((e: any) => Tx.fromAmino(e)) : [],
      txResponses: Array.isArray(object?.tx_responses) ? object.tx_responses.map((e: any) => TxResponse.fromAmino(e)) : [],
      pagination: object?.pagination ? PageResponse.fromAmino(object.pagination) : undefined,
      total: Long.fromString(object.total)
    };
  },
  toAmino(message: GetTxsEventResponse): GetTxsEventResponseAmino {
    const obj: any = {};
    if (message.txs) {
      obj.txs = message.txs.map(e => e ? Tx.toAmino(e) : undefined);
    } else {
      obj.txs = [];
    }
    if (message.txResponses) {
      obj.tx_responses = message.txResponses.map(e => e ? TxResponse.toAmino(e) : undefined);
    } else {
      obj.tx_responses = [];
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    obj.total = message.total ? message.total.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: GetTxsEventResponseAminoMsg): GetTxsEventResponse {
    return GetTxsEventResponse.fromAmino(object.value);
  },
  toAminoMsg(message: GetTxsEventResponse): GetTxsEventResponseAminoMsg {
    return {
      type: "cosmos-sdk/GetTxsEventResponse",
      value: GetTxsEventResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: GetTxsEventResponseProtoMsg): GetTxsEventResponse {
    return GetTxsEventResponse.decode(message.value);
  },
  toProto(message: GetTxsEventResponse): Uint8Array {
    return GetTxsEventResponse.encode(message).finish();
  },
  toProtoMsg(message: GetTxsEventResponse): GetTxsEventResponseProtoMsg {
    return {
      typeUrl: "/cosmos.tx.v1beta1.GetTxsEventResponse",
      value: GetTxsEventResponse.encode(message).finish()
    };
  }
};
function createBaseBroadcastTxRequest(): BroadcastTxRequest {
  return {
    txBytes: new Uint8Array(),
    mode: 0
  };
}
export const BroadcastTxRequest = {
  encode(message: BroadcastTxRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.txBytes.length !== 0) {
      writer.uint32(10).bytes(message.txBytes);
    }
    if (message.mode !== 0) {
      writer.uint32(16).int32(message.mode);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): BroadcastTxRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBroadcastTxRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.txBytes = reader.bytes();
          break;
        case 2:
          message.mode = (reader.int32() as any);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<BroadcastTxRequest>): BroadcastTxRequest {
    const message = createBaseBroadcastTxRequest();
    message.txBytes = object.txBytes ?? new Uint8Array();
    message.mode = object.mode ?? 0;
    return message;
  },
  fromAmino(object: BroadcastTxRequestAmino): BroadcastTxRequest {
    return {
      txBytes: object.tx_bytes,
      mode: isSet(object.mode) ? broadcastModeFromJSON(object.mode) : -1
    };
  },
  toAmino(message: BroadcastTxRequest): BroadcastTxRequestAmino {
    const obj: any = {};
    obj.tx_bytes = message.txBytes;
    obj.mode = message.mode;
    return obj;
  },
  fromAminoMsg(object: BroadcastTxRequestAminoMsg): BroadcastTxRequest {
    return BroadcastTxRequest.fromAmino(object.value);
  },
  toAminoMsg(message: BroadcastTxRequest): BroadcastTxRequestAminoMsg {
    return {
      type: "cosmos-sdk/BroadcastTxRequest",
      value: BroadcastTxRequest.toAmino(message)
    };
  },
  fromProtoMsg(message: BroadcastTxRequestProtoMsg): BroadcastTxRequest {
    return BroadcastTxRequest.decode(message.value);
  },
  toProto(message: BroadcastTxRequest): Uint8Array {
    return BroadcastTxRequest.encode(message).finish();
  },
  toProtoMsg(message: BroadcastTxRequest): BroadcastTxRequestProtoMsg {
    return {
      typeUrl: "/cosmos.tx.v1beta1.BroadcastTxRequest",
      value: BroadcastTxRequest.encode(message).finish()
    };
  }
};
function createBaseBroadcastTxResponse(): BroadcastTxResponse {
  return {
    txResponse: TxResponse.fromPartial({})
  };
}
export const BroadcastTxResponse = {
  encode(message: BroadcastTxResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.txResponse !== undefined) {
      TxResponse.encode(message.txResponse, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): BroadcastTxResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBroadcastTxResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.txResponse = TxResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<BroadcastTxResponse>): BroadcastTxResponse {
    const message = createBaseBroadcastTxResponse();
    message.txResponse = object.txResponse !== undefined && object.txResponse !== null ? TxResponse.fromPartial(object.txResponse) : undefined;
    return message;
  },
  fromAmino(object: BroadcastTxResponseAmino): BroadcastTxResponse {
    return {
      txResponse: object?.tx_response ? TxResponse.fromAmino(object.tx_response) : undefined
    };
  },
  toAmino(message: BroadcastTxResponse): BroadcastTxResponseAmino {
    const obj: any = {};
    obj.tx_response = message.txResponse ? TxResponse.toAmino(message.txResponse) : undefined;
    return obj;
  },
  fromAminoMsg(object: BroadcastTxResponseAminoMsg): BroadcastTxResponse {
    return BroadcastTxResponse.fromAmino(object.value);
  },
  toAminoMsg(message: BroadcastTxResponse): BroadcastTxResponseAminoMsg {
    return {
      type: "cosmos-sdk/BroadcastTxResponse",
      value: BroadcastTxResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: BroadcastTxResponseProtoMsg): BroadcastTxResponse {
    return BroadcastTxResponse.decode(message.value);
  },
  toProto(message: BroadcastTxResponse): Uint8Array {
    return BroadcastTxResponse.encode(message).finish();
  },
  toProtoMsg(message: BroadcastTxResponse): BroadcastTxResponseProtoMsg {
    return {
      typeUrl: "/cosmos.tx.v1beta1.BroadcastTxResponse",
      value: BroadcastTxResponse.encode(message).finish()
    };
  }
};
function createBaseSimulateRequest(): SimulateRequest {
  return {
    tx: Tx.fromPartial({}),
    txBytes: new Uint8Array()
  };
}
export const SimulateRequest = {
  encode(message: SimulateRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.tx !== undefined) {
      Tx.encode(message.tx, writer.uint32(10).fork()).ldelim();
    }
    if (message.txBytes.length !== 0) {
      writer.uint32(18).bytes(message.txBytes);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): SimulateRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSimulateRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.tx = Tx.decode(reader, reader.uint32());
          break;
        case 2:
          message.txBytes = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<SimulateRequest>): SimulateRequest {
    const message = createBaseSimulateRequest();
    message.tx = object.tx !== undefined && object.tx !== null ? Tx.fromPartial(object.tx) : undefined;
    message.txBytes = object.txBytes ?? new Uint8Array();
    return message;
  },
  fromAmino(object: SimulateRequestAmino): SimulateRequest {
    return {
      tx: object?.tx ? Tx.fromAmino(object.tx) : undefined,
      txBytes: object.tx_bytes
    };
  },
  toAmino(message: SimulateRequest): SimulateRequestAmino {
    const obj: any = {};
    obj.tx = message.tx ? Tx.toAmino(message.tx) : undefined;
    obj.tx_bytes = message.txBytes;
    return obj;
  },
  fromAminoMsg(object: SimulateRequestAminoMsg): SimulateRequest {
    return SimulateRequest.fromAmino(object.value);
  },
  toAminoMsg(message: SimulateRequest): SimulateRequestAminoMsg {
    return {
      type: "cosmos-sdk/SimulateRequest",
      value: SimulateRequest.toAmino(message)
    };
  },
  fromProtoMsg(message: SimulateRequestProtoMsg): SimulateRequest {
    return SimulateRequest.decode(message.value);
  },
  toProto(message: SimulateRequest): Uint8Array {
    return SimulateRequest.encode(message).finish();
  },
  toProtoMsg(message: SimulateRequest): SimulateRequestProtoMsg {
    return {
      typeUrl: "/cosmos.tx.v1beta1.SimulateRequest",
      value: SimulateRequest.encode(message).finish()
    };
  }
};
function createBaseSimulateResponse(): SimulateResponse {
  return {
    gasInfo: GasInfo.fromPartial({}),
    result: Result.fromPartial({})
  };
}
export const SimulateResponse = {
  encode(message: SimulateResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.gasInfo !== undefined) {
      GasInfo.encode(message.gasInfo, writer.uint32(10).fork()).ldelim();
    }
    if (message.result !== undefined) {
      Result.encode(message.result, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): SimulateResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSimulateResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.gasInfo = GasInfo.decode(reader, reader.uint32());
          break;
        case 2:
          message.result = Result.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<SimulateResponse>): SimulateResponse {
    const message = createBaseSimulateResponse();
    message.gasInfo = object.gasInfo !== undefined && object.gasInfo !== null ? GasInfo.fromPartial(object.gasInfo) : undefined;
    message.result = object.result !== undefined && object.result !== null ? Result.fromPartial(object.result) : undefined;
    return message;
  },
  fromAmino(object: SimulateResponseAmino): SimulateResponse {
    return {
      gasInfo: object?.gas_info ? GasInfo.fromAmino(object.gas_info) : undefined,
      result: object?.result ? Result.fromAmino(object.result) : undefined
    };
  },
  toAmino(message: SimulateResponse): SimulateResponseAmino {
    const obj: any = {};
    obj.gas_info = message.gasInfo ? GasInfo.toAmino(message.gasInfo) : undefined;
    obj.result = message.result ? Result.toAmino(message.result) : undefined;
    return obj;
  },
  fromAminoMsg(object: SimulateResponseAminoMsg): SimulateResponse {
    return SimulateResponse.fromAmino(object.value);
  },
  toAminoMsg(message: SimulateResponse): SimulateResponseAminoMsg {
    return {
      type: "cosmos-sdk/SimulateResponse",
      value: SimulateResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: SimulateResponseProtoMsg): SimulateResponse {
    return SimulateResponse.decode(message.value);
  },
  toProto(message: SimulateResponse): Uint8Array {
    return SimulateResponse.encode(message).finish();
  },
  toProtoMsg(message: SimulateResponse): SimulateResponseProtoMsg {
    return {
      typeUrl: "/cosmos.tx.v1beta1.SimulateResponse",
      value: SimulateResponse.encode(message).finish()
    };
  }
};
function createBaseGetTxRequest(): GetTxRequest {
  return {
    hash: ""
  };
}
export const GetTxRequest = {
  encode(message: GetTxRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.hash !== "") {
      writer.uint32(10).string(message.hash);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): GetTxRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetTxRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.hash = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<GetTxRequest>): GetTxRequest {
    const message = createBaseGetTxRequest();
    message.hash = object.hash ?? "";
    return message;
  },
  fromAmino(object: GetTxRequestAmino): GetTxRequest {
    return {
      hash: object.hash
    };
  },
  toAmino(message: GetTxRequest): GetTxRequestAmino {
    const obj: any = {};
    obj.hash = message.hash;
    return obj;
  },
  fromAminoMsg(object: GetTxRequestAminoMsg): GetTxRequest {
    return GetTxRequest.fromAmino(object.value);
  },
  toAminoMsg(message: GetTxRequest): GetTxRequestAminoMsg {
    return {
      type: "cosmos-sdk/GetTxRequest",
      value: GetTxRequest.toAmino(message)
    };
  },
  fromProtoMsg(message: GetTxRequestProtoMsg): GetTxRequest {
    return GetTxRequest.decode(message.value);
  },
  toProto(message: GetTxRequest): Uint8Array {
    return GetTxRequest.encode(message).finish();
  },
  toProtoMsg(message: GetTxRequest): GetTxRequestProtoMsg {
    return {
      typeUrl: "/cosmos.tx.v1beta1.GetTxRequest",
      value: GetTxRequest.encode(message).finish()
    };
  }
};
function createBaseGetTxResponse(): GetTxResponse {
  return {
    tx: Tx.fromPartial({}),
    txResponse: TxResponse.fromPartial({})
  };
}
export const GetTxResponse = {
  encode(message: GetTxResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.tx !== undefined) {
      Tx.encode(message.tx, writer.uint32(10).fork()).ldelim();
    }
    if (message.txResponse !== undefined) {
      TxResponse.encode(message.txResponse, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): GetTxResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetTxResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.tx = Tx.decode(reader, reader.uint32());
          break;
        case 2:
          message.txResponse = TxResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<GetTxResponse>): GetTxResponse {
    const message = createBaseGetTxResponse();
    message.tx = object.tx !== undefined && object.tx !== null ? Tx.fromPartial(object.tx) : undefined;
    message.txResponse = object.txResponse !== undefined && object.txResponse !== null ? TxResponse.fromPartial(object.txResponse) : undefined;
    return message;
  },
  fromAmino(object: GetTxResponseAmino): GetTxResponse {
    return {
      tx: object?.tx ? Tx.fromAmino(object.tx) : undefined,
      txResponse: object?.tx_response ? TxResponse.fromAmino(object.tx_response) : undefined
    };
  },
  toAmino(message: GetTxResponse): GetTxResponseAmino {
    const obj: any = {};
    obj.tx = message.tx ? Tx.toAmino(message.tx) : undefined;
    obj.tx_response = message.txResponse ? TxResponse.toAmino(message.txResponse) : undefined;
    return obj;
  },
  fromAminoMsg(object: GetTxResponseAminoMsg): GetTxResponse {
    return GetTxResponse.fromAmino(object.value);
  },
  toAminoMsg(message: GetTxResponse): GetTxResponseAminoMsg {
    return {
      type: "cosmos-sdk/GetTxResponse",
      value: GetTxResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: GetTxResponseProtoMsg): GetTxResponse {
    return GetTxResponse.decode(message.value);
  },
  toProto(message: GetTxResponse): Uint8Array {
    return GetTxResponse.encode(message).finish();
  },
  toProtoMsg(message: GetTxResponse): GetTxResponseProtoMsg {
    return {
      typeUrl: "/cosmos.tx.v1beta1.GetTxResponse",
      value: GetTxResponse.encode(message).finish()
    };
  }
};
function createBaseGetBlockWithTxsRequest(): GetBlockWithTxsRequest {
  return {
    height: Long.ZERO,
    pagination: PageRequest.fromPartial({})
  };
}
export const GetBlockWithTxsRequest = {
  encode(message: GetBlockWithTxsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.height.isZero()) {
      writer.uint32(8).int64(message.height);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): GetBlockWithTxsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetBlockWithTxsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.height = (reader.int64() as Long);
          break;
        case 2:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<GetBlockWithTxsRequest>): GetBlockWithTxsRequest {
    const message = createBaseGetBlockWithTxsRequest();
    message.height = object.height !== undefined && object.height !== null ? Long.fromValue(object.height) : Long.ZERO;
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: GetBlockWithTxsRequestAmino): GetBlockWithTxsRequest {
    return {
      height: Long.fromString(object.height),
      pagination: object?.pagination ? PageRequest.fromAmino(object.pagination) : undefined
    };
  },
  toAmino(message: GetBlockWithTxsRequest): GetBlockWithTxsRequestAmino {
    const obj: any = {};
    obj.height = message.height ? message.height.toString() : undefined;
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: GetBlockWithTxsRequestAminoMsg): GetBlockWithTxsRequest {
    return GetBlockWithTxsRequest.fromAmino(object.value);
  },
  toAminoMsg(message: GetBlockWithTxsRequest): GetBlockWithTxsRequestAminoMsg {
    return {
      type: "cosmos-sdk/GetBlockWithTxsRequest",
      value: GetBlockWithTxsRequest.toAmino(message)
    };
  },
  fromProtoMsg(message: GetBlockWithTxsRequestProtoMsg): GetBlockWithTxsRequest {
    return GetBlockWithTxsRequest.decode(message.value);
  },
  toProto(message: GetBlockWithTxsRequest): Uint8Array {
    return GetBlockWithTxsRequest.encode(message).finish();
  },
  toProtoMsg(message: GetBlockWithTxsRequest): GetBlockWithTxsRequestProtoMsg {
    return {
      typeUrl: "/cosmos.tx.v1beta1.GetBlockWithTxsRequest",
      value: GetBlockWithTxsRequest.encode(message).finish()
    };
  }
};
function createBaseGetBlockWithTxsResponse(): GetBlockWithTxsResponse {
  return {
    txs: [],
    blockId: BlockID.fromPartial({}),
    block: Block.fromPartial({}),
    pagination: PageResponse.fromPartial({})
  };
}
export const GetBlockWithTxsResponse = {
  encode(message: GetBlockWithTxsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.txs) {
      Tx.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.blockId !== undefined) {
      BlockID.encode(message.blockId, writer.uint32(18).fork()).ldelim();
    }
    if (message.block !== undefined) {
      Block.encode(message.block, writer.uint32(26).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): GetBlockWithTxsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetBlockWithTxsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.txs.push(Tx.decode(reader, reader.uint32()));
          break;
        case 2:
          message.blockId = BlockID.decode(reader, reader.uint32());
          break;
        case 3:
          message.block = Block.decode(reader, reader.uint32());
          break;
        case 4:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<GetBlockWithTxsResponse>): GetBlockWithTxsResponse {
    const message = createBaseGetBlockWithTxsResponse();
    message.txs = object.txs?.map(e => Tx.fromPartial(e)) || [];
    message.blockId = object.blockId !== undefined && object.blockId !== null ? BlockID.fromPartial(object.blockId) : undefined;
    message.block = object.block !== undefined && object.block !== null ? Block.fromPartial(object.block) : undefined;
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: GetBlockWithTxsResponseAmino): GetBlockWithTxsResponse {
    return {
      txs: Array.isArray(object?.txs) ? object.txs.map((e: any) => Tx.fromAmino(e)) : [],
      blockId: object?.block_id ? BlockID.fromAmino(object.block_id) : undefined,
      block: object?.block ? Block.fromAmino(object.block) : undefined,
      pagination: object?.pagination ? PageResponse.fromAmino(object.pagination) : undefined
    };
  },
  toAmino(message: GetBlockWithTxsResponse): GetBlockWithTxsResponseAmino {
    const obj: any = {};
    if (message.txs) {
      obj.txs = message.txs.map(e => e ? Tx.toAmino(e) : undefined);
    } else {
      obj.txs = [];
    }
    obj.block_id = message.blockId ? BlockID.toAmino(message.blockId) : undefined;
    obj.block = message.block ? Block.toAmino(message.block) : undefined;
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: GetBlockWithTxsResponseAminoMsg): GetBlockWithTxsResponse {
    return GetBlockWithTxsResponse.fromAmino(object.value);
  },
  toAminoMsg(message: GetBlockWithTxsResponse): GetBlockWithTxsResponseAminoMsg {
    return {
      type: "cosmos-sdk/GetBlockWithTxsResponse",
      value: GetBlockWithTxsResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: GetBlockWithTxsResponseProtoMsg): GetBlockWithTxsResponse {
    return GetBlockWithTxsResponse.decode(message.value);
  },
  toProto(message: GetBlockWithTxsResponse): Uint8Array {
    return GetBlockWithTxsResponse.encode(message).finish();
  },
  toProtoMsg(message: GetBlockWithTxsResponse): GetBlockWithTxsResponseProtoMsg {
    return {
      typeUrl: "/cosmos.tx.v1beta1.GetBlockWithTxsResponse",
      value: GetBlockWithTxsResponse.encode(message).finish()
    };
  }
};
function createBaseTxDecodeRequest(): TxDecodeRequest {
  return {
    txBytes: new Uint8Array()
  };
}
export const TxDecodeRequest = {
  encode(message: TxDecodeRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.txBytes.length !== 0) {
      writer.uint32(10).bytes(message.txBytes);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): TxDecodeRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTxDecodeRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.txBytes = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<TxDecodeRequest>): TxDecodeRequest {
    const message = createBaseTxDecodeRequest();
    message.txBytes = object.txBytes ?? new Uint8Array();
    return message;
  },
  fromAmino(object: TxDecodeRequestAmino): TxDecodeRequest {
    return {
      txBytes: object.tx_bytes
    };
  },
  toAmino(message: TxDecodeRequest): TxDecodeRequestAmino {
    const obj: any = {};
    obj.tx_bytes = message.txBytes;
    return obj;
  },
  fromAminoMsg(object: TxDecodeRequestAminoMsg): TxDecodeRequest {
    return TxDecodeRequest.fromAmino(object.value);
  },
  toAminoMsg(message: TxDecodeRequest): TxDecodeRequestAminoMsg {
    return {
      type: "cosmos-sdk/TxDecodeRequest",
      value: TxDecodeRequest.toAmino(message)
    };
  },
  fromProtoMsg(message: TxDecodeRequestProtoMsg): TxDecodeRequest {
    return TxDecodeRequest.decode(message.value);
  },
  toProto(message: TxDecodeRequest): Uint8Array {
    return TxDecodeRequest.encode(message).finish();
  },
  toProtoMsg(message: TxDecodeRequest): TxDecodeRequestProtoMsg {
    return {
      typeUrl: "/cosmos.tx.v1beta1.TxDecodeRequest",
      value: TxDecodeRequest.encode(message).finish()
    };
  }
};
function createBaseTxDecodeResponse(): TxDecodeResponse {
  return {
    tx: Tx.fromPartial({})
  };
}
export const TxDecodeResponse = {
  encode(message: TxDecodeResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.tx !== undefined) {
      Tx.encode(message.tx, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): TxDecodeResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTxDecodeResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.tx = Tx.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<TxDecodeResponse>): TxDecodeResponse {
    const message = createBaseTxDecodeResponse();
    message.tx = object.tx !== undefined && object.tx !== null ? Tx.fromPartial(object.tx) : undefined;
    return message;
  },
  fromAmino(object: TxDecodeResponseAmino): TxDecodeResponse {
    return {
      tx: object?.tx ? Tx.fromAmino(object.tx) : undefined
    };
  },
  toAmino(message: TxDecodeResponse): TxDecodeResponseAmino {
    const obj: any = {};
    obj.tx = message.tx ? Tx.toAmino(message.tx) : undefined;
    return obj;
  },
  fromAminoMsg(object: TxDecodeResponseAminoMsg): TxDecodeResponse {
    return TxDecodeResponse.fromAmino(object.value);
  },
  toAminoMsg(message: TxDecodeResponse): TxDecodeResponseAminoMsg {
    return {
      type: "cosmos-sdk/TxDecodeResponse",
      value: TxDecodeResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: TxDecodeResponseProtoMsg): TxDecodeResponse {
    return TxDecodeResponse.decode(message.value);
  },
  toProto(message: TxDecodeResponse): Uint8Array {
    return TxDecodeResponse.encode(message).finish();
  },
  toProtoMsg(message: TxDecodeResponse): TxDecodeResponseProtoMsg {
    return {
      typeUrl: "/cosmos.tx.v1beta1.TxDecodeResponse",
      value: TxDecodeResponse.encode(message).finish()
    };
  }
};
function createBaseTxEncodeRequest(): TxEncodeRequest {
  return {
    tx: Tx.fromPartial({})
  };
}
export const TxEncodeRequest = {
  encode(message: TxEncodeRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.tx !== undefined) {
      Tx.encode(message.tx, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): TxEncodeRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTxEncodeRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.tx = Tx.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<TxEncodeRequest>): TxEncodeRequest {
    const message = createBaseTxEncodeRequest();
    message.tx = object.tx !== undefined && object.tx !== null ? Tx.fromPartial(object.tx) : undefined;
    return message;
  },
  fromAmino(object: TxEncodeRequestAmino): TxEncodeRequest {
    return {
      tx: object?.tx ? Tx.fromAmino(object.tx) : undefined
    };
  },
  toAmino(message: TxEncodeRequest): TxEncodeRequestAmino {
    const obj: any = {};
    obj.tx = message.tx ? Tx.toAmino(message.tx) : undefined;
    return obj;
  },
  fromAminoMsg(object: TxEncodeRequestAminoMsg): TxEncodeRequest {
    return TxEncodeRequest.fromAmino(object.value);
  },
  toAminoMsg(message: TxEncodeRequest): TxEncodeRequestAminoMsg {
    return {
      type: "cosmos-sdk/TxEncodeRequest",
      value: TxEncodeRequest.toAmino(message)
    };
  },
  fromProtoMsg(message: TxEncodeRequestProtoMsg): TxEncodeRequest {
    return TxEncodeRequest.decode(message.value);
  },
  toProto(message: TxEncodeRequest): Uint8Array {
    return TxEncodeRequest.encode(message).finish();
  },
  toProtoMsg(message: TxEncodeRequest): TxEncodeRequestProtoMsg {
    return {
      typeUrl: "/cosmos.tx.v1beta1.TxEncodeRequest",
      value: TxEncodeRequest.encode(message).finish()
    };
  }
};
function createBaseTxEncodeResponse(): TxEncodeResponse {
  return {
    txBytes: new Uint8Array()
  };
}
export const TxEncodeResponse = {
  encode(message: TxEncodeResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.txBytes.length !== 0) {
      writer.uint32(10).bytes(message.txBytes);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): TxEncodeResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTxEncodeResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.txBytes = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<TxEncodeResponse>): TxEncodeResponse {
    const message = createBaseTxEncodeResponse();
    message.txBytes = object.txBytes ?? new Uint8Array();
    return message;
  },
  fromAmino(object: TxEncodeResponseAmino): TxEncodeResponse {
    return {
      txBytes: object.tx_bytes
    };
  },
  toAmino(message: TxEncodeResponse): TxEncodeResponseAmino {
    const obj: any = {};
    obj.tx_bytes = message.txBytes;
    return obj;
  },
  fromAminoMsg(object: TxEncodeResponseAminoMsg): TxEncodeResponse {
    return TxEncodeResponse.fromAmino(object.value);
  },
  toAminoMsg(message: TxEncodeResponse): TxEncodeResponseAminoMsg {
    return {
      type: "cosmos-sdk/TxEncodeResponse",
      value: TxEncodeResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: TxEncodeResponseProtoMsg): TxEncodeResponse {
    return TxEncodeResponse.decode(message.value);
  },
  toProto(message: TxEncodeResponse): Uint8Array {
    return TxEncodeResponse.encode(message).finish();
  },
  toProtoMsg(message: TxEncodeResponse): TxEncodeResponseProtoMsg {
    return {
      typeUrl: "/cosmos.tx.v1beta1.TxEncodeResponse",
      value: TxEncodeResponse.encode(message).finish()
    };
  }
};
function createBaseTxEncodeAminoRequest(): TxEncodeAminoRequest {
  return {
    aminoJson: ""
  };
}
export const TxEncodeAminoRequest = {
  encode(message: TxEncodeAminoRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.aminoJson !== "") {
      writer.uint32(10).string(message.aminoJson);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): TxEncodeAminoRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTxEncodeAminoRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.aminoJson = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<TxEncodeAminoRequest>): TxEncodeAminoRequest {
    const message = createBaseTxEncodeAminoRequest();
    message.aminoJson = object.aminoJson ?? "";
    return message;
  },
  fromAmino(object: TxEncodeAminoRequestAmino): TxEncodeAminoRequest {
    return {
      aminoJson: object.amino_json
    };
  },
  toAmino(message: TxEncodeAminoRequest): TxEncodeAminoRequestAmino {
    const obj: any = {};
    obj.amino_json = message.aminoJson;
    return obj;
  },
  fromAminoMsg(object: TxEncodeAminoRequestAminoMsg): TxEncodeAminoRequest {
    return TxEncodeAminoRequest.fromAmino(object.value);
  },
  toAminoMsg(message: TxEncodeAminoRequest): TxEncodeAminoRequestAminoMsg {
    return {
      type: "cosmos-sdk/TxEncodeAminoRequest",
      value: TxEncodeAminoRequest.toAmino(message)
    };
  },
  fromProtoMsg(message: TxEncodeAminoRequestProtoMsg): TxEncodeAminoRequest {
    return TxEncodeAminoRequest.decode(message.value);
  },
  toProto(message: TxEncodeAminoRequest): Uint8Array {
    return TxEncodeAminoRequest.encode(message).finish();
  },
  toProtoMsg(message: TxEncodeAminoRequest): TxEncodeAminoRequestProtoMsg {
    return {
      typeUrl: "/cosmos.tx.v1beta1.TxEncodeAminoRequest",
      value: TxEncodeAminoRequest.encode(message).finish()
    };
  }
};
function createBaseTxEncodeAminoResponse(): TxEncodeAminoResponse {
  return {
    aminoBinary: new Uint8Array()
  };
}
export const TxEncodeAminoResponse = {
  encode(message: TxEncodeAminoResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.aminoBinary.length !== 0) {
      writer.uint32(10).bytes(message.aminoBinary);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): TxEncodeAminoResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTxEncodeAminoResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.aminoBinary = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<TxEncodeAminoResponse>): TxEncodeAminoResponse {
    const message = createBaseTxEncodeAminoResponse();
    message.aminoBinary = object.aminoBinary ?? new Uint8Array();
    return message;
  },
  fromAmino(object: TxEncodeAminoResponseAmino): TxEncodeAminoResponse {
    return {
      aminoBinary: object.amino_binary
    };
  },
  toAmino(message: TxEncodeAminoResponse): TxEncodeAminoResponseAmino {
    const obj: any = {};
    obj.amino_binary = message.aminoBinary;
    return obj;
  },
  fromAminoMsg(object: TxEncodeAminoResponseAminoMsg): TxEncodeAminoResponse {
    return TxEncodeAminoResponse.fromAmino(object.value);
  },
  toAminoMsg(message: TxEncodeAminoResponse): TxEncodeAminoResponseAminoMsg {
    return {
      type: "cosmos-sdk/TxEncodeAminoResponse",
      value: TxEncodeAminoResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: TxEncodeAminoResponseProtoMsg): TxEncodeAminoResponse {
    return TxEncodeAminoResponse.decode(message.value);
  },
  toProto(message: TxEncodeAminoResponse): Uint8Array {
    return TxEncodeAminoResponse.encode(message).finish();
  },
  toProtoMsg(message: TxEncodeAminoResponse): TxEncodeAminoResponseProtoMsg {
    return {
      typeUrl: "/cosmos.tx.v1beta1.TxEncodeAminoResponse",
      value: TxEncodeAminoResponse.encode(message).finish()
    };
  }
};
function createBaseTxDecodeAminoRequest(): TxDecodeAminoRequest {
  return {
    aminoBinary: new Uint8Array()
  };
}
export const TxDecodeAminoRequest = {
  encode(message: TxDecodeAminoRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.aminoBinary.length !== 0) {
      writer.uint32(10).bytes(message.aminoBinary);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): TxDecodeAminoRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTxDecodeAminoRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.aminoBinary = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<TxDecodeAminoRequest>): TxDecodeAminoRequest {
    const message = createBaseTxDecodeAminoRequest();
    message.aminoBinary = object.aminoBinary ?? new Uint8Array();
    return message;
  },
  fromAmino(object: TxDecodeAminoRequestAmino): TxDecodeAminoRequest {
    return {
      aminoBinary: object.amino_binary
    };
  },
  toAmino(message: TxDecodeAminoRequest): TxDecodeAminoRequestAmino {
    const obj: any = {};
    obj.amino_binary = message.aminoBinary;
    return obj;
  },
  fromAminoMsg(object: TxDecodeAminoRequestAminoMsg): TxDecodeAminoRequest {
    return TxDecodeAminoRequest.fromAmino(object.value);
  },
  toAminoMsg(message: TxDecodeAminoRequest): TxDecodeAminoRequestAminoMsg {
    return {
      type: "cosmos-sdk/TxDecodeAminoRequest",
      value: TxDecodeAminoRequest.toAmino(message)
    };
  },
  fromProtoMsg(message: TxDecodeAminoRequestProtoMsg): TxDecodeAminoRequest {
    return TxDecodeAminoRequest.decode(message.value);
  },
  toProto(message: TxDecodeAminoRequest): Uint8Array {
    return TxDecodeAminoRequest.encode(message).finish();
  },
  toProtoMsg(message: TxDecodeAminoRequest): TxDecodeAminoRequestProtoMsg {
    return {
      typeUrl: "/cosmos.tx.v1beta1.TxDecodeAminoRequest",
      value: TxDecodeAminoRequest.encode(message).finish()
    };
  }
};
function createBaseTxDecodeAminoResponse(): TxDecodeAminoResponse {
  return {
    aminoJson: ""
  };
}
export const TxDecodeAminoResponse = {
  encode(message: TxDecodeAminoResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.aminoJson !== "") {
      writer.uint32(10).string(message.aminoJson);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): TxDecodeAminoResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTxDecodeAminoResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.aminoJson = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<TxDecodeAminoResponse>): TxDecodeAminoResponse {
    const message = createBaseTxDecodeAminoResponse();
    message.aminoJson = object.aminoJson ?? "";
    return message;
  },
  fromAmino(object: TxDecodeAminoResponseAmino): TxDecodeAminoResponse {
    return {
      aminoJson: object.amino_json
    };
  },
  toAmino(message: TxDecodeAminoResponse): TxDecodeAminoResponseAmino {
    const obj: any = {};
    obj.amino_json = message.aminoJson;
    return obj;
  },
  fromAminoMsg(object: TxDecodeAminoResponseAminoMsg): TxDecodeAminoResponse {
    return TxDecodeAminoResponse.fromAmino(object.value);
  },
  toAminoMsg(message: TxDecodeAminoResponse): TxDecodeAminoResponseAminoMsg {
    return {
      type: "cosmos-sdk/TxDecodeAminoResponse",
      value: TxDecodeAminoResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: TxDecodeAminoResponseProtoMsg): TxDecodeAminoResponse {
    return TxDecodeAminoResponse.decode(message.value);
  },
  toProto(message: TxDecodeAminoResponse): Uint8Array {
    return TxDecodeAminoResponse.encode(message).finish();
  },
  toProtoMsg(message: TxDecodeAminoResponse): TxDecodeAminoResponseProtoMsg {
    return {
      typeUrl: "/cosmos.tx.v1beta1.TxDecodeAminoResponse",
      value: TxDecodeAminoResponse.encode(message).finish()
    };
  }
};