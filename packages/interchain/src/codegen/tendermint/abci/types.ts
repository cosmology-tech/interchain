import { Timestamp } from "../../google/protobuf/timestamp";
import { ConsensusParams, ConsensusParamsAmino, ConsensusParamsSDKType } from "../types/params";
import { ProofOps, ProofOpsAmino, ProofOpsSDKType } from "../crypto/proof";
import { PublicKey, PublicKeyAmino, PublicKeySDKType } from "../crypto/keys";
import { BlockIDFlag, blockIDFlagFromJSON } from "../types/validator";
import { Long, DeepPartial, toTimestamp, fromTimestamp, isSet } from "../../helpers";
import * as _m0 from "protobufjs/minimal";
export enum CheckTxType {
  NEW = 0,
  RECHECK = 1,
  UNRECOGNIZED = -1,
}
export const CheckTxTypeSDKType = CheckTxType;
export const CheckTxTypeAmino = CheckTxType;
export function checkTxTypeFromJSON(object: any): CheckTxType {
  switch (object) {
    case 0:
    case "NEW":
      return CheckTxType.NEW;
    case 1:
    case "RECHECK":
      return CheckTxType.RECHECK;
    case -1:
    case "UNRECOGNIZED":
    default:
      return CheckTxType.UNRECOGNIZED;
  }
}
export function checkTxTypeToJSON(object: CheckTxType): string {
  switch (object) {
    case CheckTxType.NEW:
      return "NEW";
    case CheckTxType.RECHECK:
      return "RECHECK";
    case CheckTxType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
export enum ResponseOfferSnapshot_Result {
  /** UNKNOWN - Unknown result, abort all snapshot restoration */
  UNKNOWN = 0,
  /** ACCEPT - Snapshot accepted, apply chunks */
  ACCEPT = 1,
  /** ABORT - Abort all snapshot restoration */
  ABORT = 2,
  /** REJECT - Reject this specific snapshot, try others */
  REJECT = 3,
  /** REJECT_FORMAT - Reject all snapshots of this format, try others */
  REJECT_FORMAT = 4,
  /** REJECT_SENDER - Reject all snapshots from the sender(s), try others */
  REJECT_SENDER = 5,
  UNRECOGNIZED = -1,
}
export const ResponseOfferSnapshot_ResultSDKType = ResponseOfferSnapshot_Result;
export const ResponseOfferSnapshot_ResultAmino = ResponseOfferSnapshot_Result;
export function responseOfferSnapshot_ResultFromJSON(object: any): ResponseOfferSnapshot_Result {
  switch (object) {
    case 0:
    case "UNKNOWN":
      return ResponseOfferSnapshot_Result.UNKNOWN;
    case 1:
    case "ACCEPT":
      return ResponseOfferSnapshot_Result.ACCEPT;
    case 2:
    case "ABORT":
      return ResponseOfferSnapshot_Result.ABORT;
    case 3:
    case "REJECT":
      return ResponseOfferSnapshot_Result.REJECT;
    case 4:
    case "REJECT_FORMAT":
      return ResponseOfferSnapshot_Result.REJECT_FORMAT;
    case 5:
    case "REJECT_SENDER":
      return ResponseOfferSnapshot_Result.REJECT_SENDER;
    case -1:
    case "UNRECOGNIZED":
    default:
      return ResponseOfferSnapshot_Result.UNRECOGNIZED;
  }
}
export function responseOfferSnapshot_ResultToJSON(object: ResponseOfferSnapshot_Result): string {
  switch (object) {
    case ResponseOfferSnapshot_Result.UNKNOWN:
      return "UNKNOWN";
    case ResponseOfferSnapshot_Result.ACCEPT:
      return "ACCEPT";
    case ResponseOfferSnapshot_Result.ABORT:
      return "ABORT";
    case ResponseOfferSnapshot_Result.REJECT:
      return "REJECT";
    case ResponseOfferSnapshot_Result.REJECT_FORMAT:
      return "REJECT_FORMAT";
    case ResponseOfferSnapshot_Result.REJECT_SENDER:
      return "REJECT_SENDER";
    case ResponseOfferSnapshot_Result.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
export enum ResponseApplySnapshotChunk_Result {
  /** UNKNOWN - Unknown result, abort all snapshot restoration */
  UNKNOWN = 0,
  /** ACCEPT - Chunk successfully accepted */
  ACCEPT = 1,
  /** ABORT - Abort all snapshot restoration */
  ABORT = 2,
  /** RETRY - Retry chunk (combine with refetch and reject) */
  RETRY = 3,
  /** RETRY_SNAPSHOT - Retry snapshot (combine with refetch and reject) */
  RETRY_SNAPSHOT = 4,
  /** REJECT_SNAPSHOT - Reject this snapshot, try others */
  REJECT_SNAPSHOT = 5,
  UNRECOGNIZED = -1,
}
export const ResponseApplySnapshotChunk_ResultSDKType = ResponseApplySnapshotChunk_Result;
export const ResponseApplySnapshotChunk_ResultAmino = ResponseApplySnapshotChunk_Result;
export function responseApplySnapshotChunk_ResultFromJSON(object: any): ResponseApplySnapshotChunk_Result {
  switch (object) {
    case 0:
    case "UNKNOWN":
      return ResponseApplySnapshotChunk_Result.UNKNOWN;
    case 1:
    case "ACCEPT":
      return ResponseApplySnapshotChunk_Result.ACCEPT;
    case 2:
    case "ABORT":
      return ResponseApplySnapshotChunk_Result.ABORT;
    case 3:
    case "RETRY":
      return ResponseApplySnapshotChunk_Result.RETRY;
    case 4:
    case "RETRY_SNAPSHOT":
      return ResponseApplySnapshotChunk_Result.RETRY_SNAPSHOT;
    case 5:
    case "REJECT_SNAPSHOT":
      return ResponseApplySnapshotChunk_Result.REJECT_SNAPSHOT;
    case -1:
    case "UNRECOGNIZED":
    default:
      return ResponseApplySnapshotChunk_Result.UNRECOGNIZED;
  }
}
export function responseApplySnapshotChunk_ResultToJSON(object: ResponseApplySnapshotChunk_Result): string {
  switch (object) {
    case ResponseApplySnapshotChunk_Result.UNKNOWN:
      return "UNKNOWN";
    case ResponseApplySnapshotChunk_Result.ACCEPT:
      return "ACCEPT";
    case ResponseApplySnapshotChunk_Result.ABORT:
      return "ABORT";
    case ResponseApplySnapshotChunk_Result.RETRY:
      return "RETRY";
    case ResponseApplySnapshotChunk_Result.RETRY_SNAPSHOT:
      return "RETRY_SNAPSHOT";
    case ResponseApplySnapshotChunk_Result.REJECT_SNAPSHOT:
      return "REJECT_SNAPSHOT";
    case ResponseApplySnapshotChunk_Result.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
export enum ResponseProcessProposal_ProposalStatus {
  UNKNOWN = 0,
  ACCEPT = 1,
  REJECT = 2,
  UNRECOGNIZED = -1,
}
export const ResponseProcessProposal_ProposalStatusSDKType = ResponseProcessProposal_ProposalStatus;
export const ResponseProcessProposal_ProposalStatusAmino = ResponseProcessProposal_ProposalStatus;
export function responseProcessProposal_ProposalStatusFromJSON(object: any): ResponseProcessProposal_ProposalStatus {
  switch (object) {
    case 0:
    case "UNKNOWN":
      return ResponseProcessProposal_ProposalStatus.UNKNOWN;
    case 1:
    case "ACCEPT":
      return ResponseProcessProposal_ProposalStatus.ACCEPT;
    case 2:
    case "REJECT":
      return ResponseProcessProposal_ProposalStatus.REJECT;
    case -1:
    case "UNRECOGNIZED":
    default:
      return ResponseProcessProposal_ProposalStatus.UNRECOGNIZED;
  }
}
export function responseProcessProposal_ProposalStatusToJSON(object: ResponseProcessProposal_ProposalStatus): string {
  switch (object) {
    case ResponseProcessProposal_ProposalStatus.UNKNOWN:
      return "UNKNOWN";
    case ResponseProcessProposal_ProposalStatus.ACCEPT:
      return "ACCEPT";
    case ResponseProcessProposal_ProposalStatus.REJECT:
      return "REJECT";
    case ResponseProcessProposal_ProposalStatus.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
export enum ResponseVerifyVoteExtension_VerifyStatus {
  UNKNOWN = 0,
  ACCEPT = 1,
  /**
   * REJECT - Rejecting the vote extension will reject the entire precommit by the sender.
   * Incorrectly implementing this thus has liveness implications as it may affect
   * CometBFT's ability to receive 2/3+ valid votes to finalize the block.
   * Honest nodes should never be rejected.
   */
  REJECT = 2,
  UNRECOGNIZED = -1,
}
export const ResponseVerifyVoteExtension_VerifyStatusSDKType = ResponseVerifyVoteExtension_VerifyStatus;
export const ResponseVerifyVoteExtension_VerifyStatusAmino = ResponseVerifyVoteExtension_VerifyStatus;
export function responseVerifyVoteExtension_VerifyStatusFromJSON(object: any): ResponseVerifyVoteExtension_VerifyStatus {
  switch (object) {
    case 0:
    case "UNKNOWN":
      return ResponseVerifyVoteExtension_VerifyStatus.UNKNOWN;
    case 1:
    case "ACCEPT":
      return ResponseVerifyVoteExtension_VerifyStatus.ACCEPT;
    case 2:
    case "REJECT":
      return ResponseVerifyVoteExtension_VerifyStatus.REJECT;
    case -1:
    case "UNRECOGNIZED":
    default:
      return ResponseVerifyVoteExtension_VerifyStatus.UNRECOGNIZED;
  }
}
export function responseVerifyVoteExtension_VerifyStatusToJSON(object: ResponseVerifyVoteExtension_VerifyStatus): string {
  switch (object) {
    case ResponseVerifyVoteExtension_VerifyStatus.UNKNOWN:
      return "UNKNOWN";
    case ResponseVerifyVoteExtension_VerifyStatus.ACCEPT:
      return "ACCEPT";
    case ResponseVerifyVoteExtension_VerifyStatus.REJECT:
      return "REJECT";
    case ResponseVerifyVoteExtension_VerifyStatus.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
export enum MisbehaviorType {
  UNKNOWN = 0,
  DUPLICATE_VOTE = 1,
  LIGHT_CLIENT_ATTACK = 2,
  UNRECOGNIZED = -1,
}
export const MisbehaviorTypeSDKType = MisbehaviorType;
export const MisbehaviorTypeAmino = MisbehaviorType;
export function misbehaviorTypeFromJSON(object: any): MisbehaviorType {
  switch (object) {
    case 0:
    case "UNKNOWN":
      return MisbehaviorType.UNKNOWN;
    case 1:
    case "DUPLICATE_VOTE":
      return MisbehaviorType.DUPLICATE_VOTE;
    case 2:
    case "LIGHT_CLIENT_ATTACK":
      return MisbehaviorType.LIGHT_CLIENT_ATTACK;
    case -1:
    case "UNRECOGNIZED":
    default:
      return MisbehaviorType.UNRECOGNIZED;
  }
}
export function misbehaviorTypeToJSON(object: MisbehaviorType): string {
  switch (object) {
    case MisbehaviorType.UNKNOWN:
      return "UNKNOWN";
    case MisbehaviorType.DUPLICATE_VOTE:
      return "DUPLICATE_VOTE";
    case MisbehaviorType.LIGHT_CLIENT_ATTACK:
      return "LIGHT_CLIENT_ATTACK";
    case MisbehaviorType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
export interface Request {
  echo?: RequestEcho;
  flush?: RequestFlush;
  info?: RequestInfo;
  initChain?: RequestInitChain;
  query?: RequestQuery;
  checkTx?: RequestCheckTx;
  commit?: RequestCommit;
  listSnapshots?: RequestListSnapshots;
  offerSnapshot?: RequestOfferSnapshot;
  loadSnapshotChunk?: RequestLoadSnapshotChunk;
  applySnapshotChunk?: RequestApplySnapshotChunk;
  prepareProposal?: RequestPrepareProposal;
  processProposal?: RequestProcessProposal;
  extendVote?: RequestExtendVote;
  verifyVoteExtension?: RequestVerifyVoteExtension;
  finalizeBlock?: RequestFinalizeBlock;
}
export interface RequestProtoMsg {
  typeUrl: "/tendermint.abci.Request";
  value: Uint8Array;
}
export interface RequestAmino {
  echo?: RequestEchoAmino;
  flush?: RequestFlushAmino;
  info?: RequestInfoAmino;
  init_chain?: RequestInitChainAmino;
  query?: RequestQueryAmino;
  check_tx?: RequestCheckTxAmino;
  commit?: RequestCommitAmino;
  list_snapshots?: RequestListSnapshotsAmino;
  offer_snapshot?: RequestOfferSnapshotAmino;
  load_snapshot_chunk?: RequestLoadSnapshotChunkAmino;
  apply_snapshot_chunk?: RequestApplySnapshotChunkAmino;
  prepare_proposal?: RequestPrepareProposalAmino;
  process_proposal?: RequestProcessProposalAmino;
  extend_vote?: RequestExtendVoteAmino;
  verify_vote_extension?: RequestVerifyVoteExtensionAmino;
  finalize_block?: RequestFinalizeBlockAmino;
}
export interface RequestAminoMsg {
  type: "/tendermint.abci.Request";
  value: RequestAmino;
}
export interface RequestSDKType {
  echo?: RequestEchoSDKType;
  flush?: RequestFlushSDKType;
  info?: RequestInfoSDKType;
  init_chain?: RequestInitChainSDKType;
  query?: RequestQuerySDKType;
  check_tx?: RequestCheckTxSDKType;
  commit?: RequestCommitSDKType;
  list_snapshots?: RequestListSnapshotsSDKType;
  offer_snapshot?: RequestOfferSnapshotSDKType;
  load_snapshot_chunk?: RequestLoadSnapshotChunkSDKType;
  apply_snapshot_chunk?: RequestApplySnapshotChunkSDKType;
  prepare_proposal?: RequestPrepareProposalSDKType;
  process_proposal?: RequestProcessProposalSDKType;
  extend_vote?: RequestExtendVoteSDKType;
  verify_vote_extension?: RequestVerifyVoteExtensionSDKType;
  finalize_block?: RequestFinalizeBlockSDKType;
}
export interface RequestEcho {
  message: string;
}
export interface RequestEchoProtoMsg {
  typeUrl: "/tendermint.abci.RequestEcho";
  value: Uint8Array;
}
export interface RequestEchoAmino {
  message: string;
}
export interface RequestEchoAminoMsg {
  type: "/tendermint.abci.RequestEcho";
  value: RequestEchoAmino;
}
export interface RequestEchoSDKType {
  message: string;
}
export interface RequestFlush {}
export interface RequestFlushProtoMsg {
  typeUrl: "/tendermint.abci.RequestFlush";
  value: Uint8Array;
}
export interface RequestFlushAmino {}
export interface RequestFlushAminoMsg {
  type: "/tendermint.abci.RequestFlush";
  value: RequestFlushAmino;
}
export interface RequestFlushSDKType {}
export interface RequestInfo {
  version: string;
  blockVersion: Long;
  p2pVersion: Long;
  abciVersion: string;
}
export interface RequestInfoProtoMsg {
  typeUrl: "/tendermint.abci.RequestInfo";
  value: Uint8Array;
}
export interface RequestInfoAmino {
  version: string;
  block_version: string;
  p2p_version: string;
  abci_version: string;
}
export interface RequestInfoAminoMsg {
  type: "/tendermint.abci.RequestInfo";
  value: RequestInfoAmino;
}
export interface RequestInfoSDKType {
  version: string;
  block_version: Long;
  p2p_version: Long;
  abci_version: string;
}
export interface RequestInitChain {
  time: Date;
  chainId: string;
  consensusParams: ConsensusParams;
  validators: ValidatorUpdate[];
  appStateBytes: Uint8Array;
  initialHeight: Long;
}
export interface RequestInitChainProtoMsg {
  typeUrl: "/tendermint.abci.RequestInitChain";
  value: Uint8Array;
}
export interface RequestInitChainAmino {
  time?: Date;
  chain_id: string;
  consensus_params?: ConsensusParamsAmino;
  validators: ValidatorUpdateAmino[];
  app_state_bytes: Uint8Array;
  initial_height: string;
}
export interface RequestInitChainAminoMsg {
  type: "/tendermint.abci.RequestInitChain";
  value: RequestInitChainAmino;
}
export interface RequestInitChainSDKType {
  time: Date;
  chain_id: string;
  consensus_params: ConsensusParamsSDKType;
  validators: ValidatorUpdateSDKType[];
  app_state_bytes: Uint8Array;
  initial_height: Long;
}
export interface RequestQuery {
  data: Uint8Array;
  path: string;
  height: Long;
  prove: boolean;
}
export interface RequestQueryProtoMsg {
  typeUrl: "/tendermint.abci.RequestQuery";
  value: Uint8Array;
}
export interface RequestQueryAmino {
  data: Uint8Array;
  path: string;
  height: string;
  prove: boolean;
}
export interface RequestQueryAminoMsg {
  type: "/tendermint.abci.RequestQuery";
  value: RequestQueryAmino;
}
export interface RequestQuerySDKType {
  data: Uint8Array;
  path: string;
  height: Long;
  prove: boolean;
}
export interface RequestCheckTx {
  tx: Uint8Array;
  type: CheckTxType;
}
export interface RequestCheckTxProtoMsg {
  typeUrl: "/tendermint.abci.RequestCheckTx";
  value: Uint8Array;
}
export interface RequestCheckTxAmino {
  tx: Uint8Array;
  type: CheckTxType;
}
export interface RequestCheckTxAminoMsg {
  type: "/tendermint.abci.RequestCheckTx";
  value: RequestCheckTxAmino;
}
export interface RequestCheckTxSDKType {
  tx: Uint8Array;
  type: CheckTxType;
}
export interface RequestCommit {}
export interface RequestCommitProtoMsg {
  typeUrl: "/tendermint.abci.RequestCommit";
  value: Uint8Array;
}
export interface RequestCommitAmino {}
export interface RequestCommitAminoMsg {
  type: "/tendermint.abci.RequestCommit";
  value: RequestCommitAmino;
}
export interface RequestCommitSDKType {}
/** lists available snapshots */
export interface RequestListSnapshots {}
export interface RequestListSnapshotsProtoMsg {
  typeUrl: "/tendermint.abci.RequestListSnapshots";
  value: Uint8Array;
}
/** lists available snapshots */
export interface RequestListSnapshotsAmino {}
export interface RequestListSnapshotsAminoMsg {
  type: "/tendermint.abci.RequestListSnapshots";
  value: RequestListSnapshotsAmino;
}
/** lists available snapshots */
export interface RequestListSnapshotsSDKType {}
/** offers a snapshot to the application */
export interface RequestOfferSnapshot {
  /** snapshot offered by peers */
  snapshot: Snapshot;
  /** light client-verified app hash for snapshot height */
  appHash: Uint8Array;
}
export interface RequestOfferSnapshotProtoMsg {
  typeUrl: "/tendermint.abci.RequestOfferSnapshot";
  value: Uint8Array;
}
/** offers a snapshot to the application */
export interface RequestOfferSnapshotAmino {
  /** snapshot offered by peers */
  snapshot?: SnapshotAmino;
  /** light client-verified app hash for snapshot height */
  app_hash: Uint8Array;
}
export interface RequestOfferSnapshotAminoMsg {
  type: "/tendermint.abci.RequestOfferSnapshot";
  value: RequestOfferSnapshotAmino;
}
/** offers a snapshot to the application */
export interface RequestOfferSnapshotSDKType {
  snapshot: SnapshotSDKType;
  app_hash: Uint8Array;
}
/** loads a snapshot chunk */
export interface RequestLoadSnapshotChunk {
  height: Long;
  format: number;
  chunk: number;
}
export interface RequestLoadSnapshotChunkProtoMsg {
  typeUrl: "/tendermint.abci.RequestLoadSnapshotChunk";
  value: Uint8Array;
}
/** loads a snapshot chunk */
export interface RequestLoadSnapshotChunkAmino {
  height: string;
  format: number;
  chunk: number;
}
export interface RequestLoadSnapshotChunkAminoMsg {
  type: "/tendermint.abci.RequestLoadSnapshotChunk";
  value: RequestLoadSnapshotChunkAmino;
}
/** loads a snapshot chunk */
export interface RequestLoadSnapshotChunkSDKType {
  height: Long;
  format: number;
  chunk: number;
}
/** Applies a snapshot chunk */
export interface RequestApplySnapshotChunk {
  index: number;
  chunk: Uint8Array;
  sender: string;
}
export interface RequestApplySnapshotChunkProtoMsg {
  typeUrl: "/tendermint.abci.RequestApplySnapshotChunk";
  value: Uint8Array;
}
/** Applies a snapshot chunk */
export interface RequestApplySnapshotChunkAmino {
  index: number;
  chunk: Uint8Array;
  sender: string;
}
export interface RequestApplySnapshotChunkAminoMsg {
  type: "/tendermint.abci.RequestApplySnapshotChunk";
  value: RequestApplySnapshotChunkAmino;
}
/** Applies a snapshot chunk */
export interface RequestApplySnapshotChunkSDKType {
  index: number;
  chunk: Uint8Array;
  sender: string;
}
export interface RequestPrepareProposal {
  /** the modified transactions cannot exceed this size. */
  maxTxBytes: Long;
  /**
   * txs is an array of transactions that will be included in a block,
   * sent to the app for possible modifications.
   */
  txs: Uint8Array[];
  localLastCommit: ExtendedCommitInfo;
  misbehavior: Misbehavior[];
  height: Long;
  time: Date;
  nextValidatorsHash: Uint8Array;
  /** address of the public key of the validator proposing the block. */
  proposerAddress: Uint8Array;
}
export interface RequestPrepareProposalProtoMsg {
  typeUrl: "/tendermint.abci.RequestPrepareProposal";
  value: Uint8Array;
}
export interface RequestPrepareProposalAmino {
  /** the modified transactions cannot exceed this size. */
  max_tx_bytes: string;
  /**
   * txs is an array of transactions that will be included in a block,
   * sent to the app for possible modifications.
   */
  txs: Uint8Array[];
  local_last_commit?: ExtendedCommitInfoAmino;
  misbehavior: MisbehaviorAmino[];
  height: string;
  time?: Date;
  next_validators_hash: Uint8Array;
  /** address of the public key of the validator proposing the block. */
  proposer_address: Uint8Array;
}
export interface RequestPrepareProposalAminoMsg {
  type: "/tendermint.abci.RequestPrepareProposal";
  value: RequestPrepareProposalAmino;
}
export interface RequestPrepareProposalSDKType {
  max_tx_bytes: Long;
  txs: Uint8Array[];
  local_last_commit: ExtendedCommitInfoSDKType;
  misbehavior: MisbehaviorSDKType[];
  height: Long;
  time: Date;
  next_validators_hash: Uint8Array;
  proposer_address: Uint8Array;
}
export interface RequestProcessProposal {
  txs: Uint8Array[];
  proposedLastCommit: CommitInfo;
  misbehavior: Misbehavior[];
  /** hash is the merkle root hash of the fields of the proposed block. */
  hash: Uint8Array;
  height: Long;
  time: Date;
  nextValidatorsHash: Uint8Array;
  /** address of the public key of the original proposer of the block. */
  proposerAddress: Uint8Array;
}
export interface RequestProcessProposalProtoMsg {
  typeUrl: "/tendermint.abci.RequestProcessProposal";
  value: Uint8Array;
}
export interface RequestProcessProposalAmino {
  txs: Uint8Array[];
  proposed_last_commit?: CommitInfoAmino;
  misbehavior: MisbehaviorAmino[];
  /** hash is the merkle root hash of the fields of the proposed block. */
  hash: Uint8Array;
  height: string;
  time?: Date;
  next_validators_hash: Uint8Array;
  /** address of the public key of the original proposer of the block. */
  proposer_address: Uint8Array;
}
export interface RequestProcessProposalAminoMsg {
  type: "/tendermint.abci.RequestProcessProposal";
  value: RequestProcessProposalAmino;
}
export interface RequestProcessProposalSDKType {
  txs: Uint8Array[];
  proposed_last_commit: CommitInfoSDKType;
  misbehavior: MisbehaviorSDKType[];
  hash: Uint8Array;
  height: Long;
  time: Date;
  next_validators_hash: Uint8Array;
  proposer_address: Uint8Array;
}
/** Extends a vote with application-injected data */
export interface RequestExtendVote {
  /** the hash of the block  that this vote may be referring to */
  hash: Uint8Array;
  /** the height of the extended vote */
  height: Long;
}
export interface RequestExtendVoteProtoMsg {
  typeUrl: "/tendermint.abci.RequestExtendVote";
  value: Uint8Array;
}
/** Extends a vote with application-injected data */
export interface RequestExtendVoteAmino {
  /** the hash of the block  that this vote may be referring to */
  hash: Uint8Array;
  /** the height of the extended vote */
  height: string;
}
export interface RequestExtendVoteAminoMsg {
  type: "/tendermint.abci.RequestExtendVote";
  value: RequestExtendVoteAmino;
}
/** Extends a vote with application-injected data */
export interface RequestExtendVoteSDKType {
  hash: Uint8Array;
  height: Long;
}
/** Verify the vote extension */
export interface RequestVerifyVoteExtension {
  /** the hash of the block that this received vote corresponds to */
  hash: Uint8Array;
  /** the validator that signed the vote extension */
  validatorAddress: Uint8Array;
  height: Long;
  voteExtension: Uint8Array;
}
export interface RequestVerifyVoteExtensionProtoMsg {
  typeUrl: "/tendermint.abci.RequestVerifyVoteExtension";
  value: Uint8Array;
}
/** Verify the vote extension */
export interface RequestVerifyVoteExtensionAmino {
  /** the hash of the block that this received vote corresponds to */
  hash: Uint8Array;
  /** the validator that signed the vote extension */
  validator_address: Uint8Array;
  height: string;
  vote_extension: Uint8Array;
}
export interface RequestVerifyVoteExtensionAminoMsg {
  type: "/tendermint.abci.RequestVerifyVoteExtension";
  value: RequestVerifyVoteExtensionAmino;
}
/** Verify the vote extension */
export interface RequestVerifyVoteExtensionSDKType {
  hash: Uint8Array;
  validator_address: Uint8Array;
  height: Long;
  vote_extension: Uint8Array;
}
export interface RequestFinalizeBlock {
  txs: Uint8Array[];
  decidedLastCommit: CommitInfo;
  misbehavior: Misbehavior[];
  /** hash is the merkle root hash of the fields of the decided block. */
  hash: Uint8Array;
  height: Long;
  time: Date;
  nextValidatorsHash: Uint8Array;
  /** proposer_address is the address of the public key of the original proposer of the block. */
  proposerAddress: Uint8Array;
}
export interface RequestFinalizeBlockProtoMsg {
  typeUrl: "/tendermint.abci.RequestFinalizeBlock";
  value: Uint8Array;
}
export interface RequestFinalizeBlockAmino {
  txs: Uint8Array[];
  decided_last_commit?: CommitInfoAmino;
  misbehavior: MisbehaviorAmino[];
  /** hash is the merkle root hash of the fields of the decided block. */
  hash: Uint8Array;
  height: string;
  time?: Date;
  next_validators_hash: Uint8Array;
  /** proposer_address is the address of the public key of the original proposer of the block. */
  proposer_address: Uint8Array;
}
export interface RequestFinalizeBlockAminoMsg {
  type: "/tendermint.abci.RequestFinalizeBlock";
  value: RequestFinalizeBlockAmino;
}
export interface RequestFinalizeBlockSDKType {
  txs: Uint8Array[];
  decided_last_commit: CommitInfoSDKType;
  misbehavior: MisbehaviorSDKType[];
  hash: Uint8Array;
  height: Long;
  time: Date;
  next_validators_hash: Uint8Array;
  proposer_address: Uint8Array;
}
export interface Response {
  exception?: ResponseException;
  echo?: ResponseEcho;
  flush?: ResponseFlush;
  info?: ResponseInfo;
  initChain?: ResponseInitChain;
  query?: ResponseQuery;
  checkTx?: ResponseCheckTx;
  commit?: ResponseCommit;
  listSnapshots?: ResponseListSnapshots;
  offerSnapshot?: ResponseOfferSnapshot;
  loadSnapshotChunk?: ResponseLoadSnapshotChunk;
  applySnapshotChunk?: ResponseApplySnapshotChunk;
  prepareProposal?: ResponsePrepareProposal;
  processProposal?: ResponseProcessProposal;
  extendVote?: ResponseExtendVote;
  verifyVoteExtension?: ResponseVerifyVoteExtension;
  finalizeBlock?: ResponseFinalizeBlock;
}
export interface ResponseProtoMsg {
  typeUrl: "/tendermint.abci.Response";
  value: Uint8Array;
}
export interface ResponseAmino {
  exception?: ResponseExceptionAmino;
  echo?: ResponseEchoAmino;
  flush?: ResponseFlushAmino;
  info?: ResponseInfoAmino;
  init_chain?: ResponseInitChainAmino;
  query?: ResponseQueryAmino;
  check_tx?: ResponseCheckTxAmino;
  commit?: ResponseCommitAmino;
  list_snapshots?: ResponseListSnapshotsAmino;
  offer_snapshot?: ResponseOfferSnapshotAmino;
  load_snapshot_chunk?: ResponseLoadSnapshotChunkAmino;
  apply_snapshot_chunk?: ResponseApplySnapshotChunkAmino;
  prepare_proposal?: ResponsePrepareProposalAmino;
  process_proposal?: ResponseProcessProposalAmino;
  extend_vote?: ResponseExtendVoteAmino;
  verify_vote_extension?: ResponseVerifyVoteExtensionAmino;
  finalize_block?: ResponseFinalizeBlockAmino;
}
export interface ResponseAminoMsg {
  type: "/tendermint.abci.Response";
  value: ResponseAmino;
}
export interface ResponseSDKType {
  exception?: ResponseExceptionSDKType;
  echo?: ResponseEchoSDKType;
  flush?: ResponseFlushSDKType;
  info?: ResponseInfoSDKType;
  init_chain?: ResponseInitChainSDKType;
  query?: ResponseQuerySDKType;
  check_tx?: ResponseCheckTxSDKType;
  commit?: ResponseCommitSDKType;
  list_snapshots?: ResponseListSnapshotsSDKType;
  offer_snapshot?: ResponseOfferSnapshotSDKType;
  load_snapshot_chunk?: ResponseLoadSnapshotChunkSDKType;
  apply_snapshot_chunk?: ResponseApplySnapshotChunkSDKType;
  prepare_proposal?: ResponsePrepareProposalSDKType;
  process_proposal?: ResponseProcessProposalSDKType;
  extend_vote?: ResponseExtendVoteSDKType;
  verify_vote_extension?: ResponseVerifyVoteExtensionSDKType;
  finalize_block?: ResponseFinalizeBlockSDKType;
}
/** nondeterministic */
export interface ResponseException {
  error: string;
}
export interface ResponseExceptionProtoMsg {
  typeUrl: "/tendermint.abci.ResponseException";
  value: Uint8Array;
}
/** nondeterministic */
export interface ResponseExceptionAmino {
  error: string;
}
export interface ResponseExceptionAminoMsg {
  type: "/tendermint.abci.ResponseException";
  value: ResponseExceptionAmino;
}
/** nondeterministic */
export interface ResponseExceptionSDKType {
  error: string;
}
export interface ResponseEcho {
  message: string;
}
export interface ResponseEchoProtoMsg {
  typeUrl: "/tendermint.abci.ResponseEcho";
  value: Uint8Array;
}
export interface ResponseEchoAmino {
  message: string;
}
export interface ResponseEchoAminoMsg {
  type: "/tendermint.abci.ResponseEcho";
  value: ResponseEchoAmino;
}
export interface ResponseEchoSDKType {
  message: string;
}
export interface ResponseFlush {}
export interface ResponseFlushProtoMsg {
  typeUrl: "/tendermint.abci.ResponseFlush";
  value: Uint8Array;
}
export interface ResponseFlushAmino {}
export interface ResponseFlushAminoMsg {
  type: "/tendermint.abci.ResponseFlush";
  value: ResponseFlushAmino;
}
export interface ResponseFlushSDKType {}
export interface ResponseInfo {
  data: string;
  version: string;
  appVersion: Long;
  lastBlockHeight: Long;
  lastBlockAppHash: Uint8Array;
}
export interface ResponseInfoProtoMsg {
  typeUrl: "/tendermint.abci.ResponseInfo";
  value: Uint8Array;
}
export interface ResponseInfoAmino {
  data: string;
  version: string;
  app_version: string;
  last_block_height: string;
  last_block_app_hash: Uint8Array;
}
export interface ResponseInfoAminoMsg {
  type: "/tendermint.abci.ResponseInfo";
  value: ResponseInfoAmino;
}
export interface ResponseInfoSDKType {
  data: string;
  version: string;
  app_version: Long;
  last_block_height: Long;
  last_block_app_hash: Uint8Array;
}
export interface ResponseInitChain {
  consensusParams: ConsensusParams;
  validators: ValidatorUpdate[];
  appHash: Uint8Array;
}
export interface ResponseInitChainProtoMsg {
  typeUrl: "/tendermint.abci.ResponseInitChain";
  value: Uint8Array;
}
export interface ResponseInitChainAmino {
  consensus_params?: ConsensusParamsAmino;
  validators: ValidatorUpdateAmino[];
  app_hash: Uint8Array;
}
export interface ResponseInitChainAminoMsg {
  type: "/tendermint.abci.ResponseInitChain";
  value: ResponseInitChainAmino;
}
export interface ResponseInitChainSDKType {
  consensus_params: ConsensusParamsSDKType;
  validators: ValidatorUpdateSDKType[];
  app_hash: Uint8Array;
}
export interface ResponseQuery {
  code: number;
  /** bytes data = 2; // use "value" instead. */
  log: string;
  /** nondeterministic */
  info: string;
  index: Long;
  key: Uint8Array;
  value: Uint8Array;
  proofOps: ProofOps;
  height: Long;
  codespace: string;
}
export interface ResponseQueryProtoMsg {
  typeUrl: "/tendermint.abci.ResponseQuery";
  value: Uint8Array;
}
export interface ResponseQueryAmino {
  code: number;
  /** bytes data = 2; // use "value" instead. */
  log: string;
  /** nondeterministic */
  info: string;
  index: string;
  key: Uint8Array;
  value: Uint8Array;
  proof_ops?: ProofOpsAmino;
  height: string;
  codespace: string;
}
export interface ResponseQueryAminoMsg {
  type: "/tendermint.abci.ResponseQuery";
  value: ResponseQueryAmino;
}
export interface ResponseQuerySDKType {
  code: number;
  log: string;
  info: string;
  index: Long;
  key: Uint8Array;
  value: Uint8Array;
  proof_ops: ProofOpsSDKType;
  height: Long;
  codespace: string;
}
export interface ResponseCheckTx {
  code: number;
  data: Uint8Array;
  /** nondeterministic */
  log: string;
  /** nondeterministic */
  info: string;
  gasWanted: Long;
  gasUsed: Long;
  events: Event[];
  codespace: string;
}
export interface ResponseCheckTxProtoMsg {
  typeUrl: "/tendermint.abci.ResponseCheckTx";
  value: Uint8Array;
}
export interface ResponseCheckTxAmino {
  code: number;
  data: Uint8Array;
  /** nondeterministic */
  log: string;
  /** nondeterministic */
  info: string;
  gas_wanted: string;
  gas_used: string;
  events: EventAmino[];
  codespace: string;
}
export interface ResponseCheckTxAminoMsg {
  type: "/tendermint.abci.ResponseCheckTx";
  value: ResponseCheckTxAmino;
}
export interface ResponseCheckTxSDKType {
  code: number;
  data: Uint8Array;
  log: string;
  info: string;
  gas_wanted: Long;
  gas_used: Long;
  events: EventSDKType[];
  codespace: string;
}
export interface ResponseCommit {
  retainHeight: Long;
}
export interface ResponseCommitProtoMsg {
  typeUrl: "/tendermint.abci.ResponseCommit";
  value: Uint8Array;
}
export interface ResponseCommitAmino {
  retain_height: string;
}
export interface ResponseCommitAminoMsg {
  type: "/tendermint.abci.ResponseCommit";
  value: ResponseCommitAmino;
}
export interface ResponseCommitSDKType {
  retain_height: Long;
}
export interface ResponseListSnapshots {
  snapshots: Snapshot[];
}
export interface ResponseListSnapshotsProtoMsg {
  typeUrl: "/tendermint.abci.ResponseListSnapshots";
  value: Uint8Array;
}
export interface ResponseListSnapshotsAmino {
  snapshots: SnapshotAmino[];
}
export interface ResponseListSnapshotsAminoMsg {
  type: "/tendermint.abci.ResponseListSnapshots";
  value: ResponseListSnapshotsAmino;
}
export interface ResponseListSnapshotsSDKType {
  snapshots: SnapshotSDKType[];
}
export interface ResponseOfferSnapshot {
  result: ResponseOfferSnapshot_Result;
}
export interface ResponseOfferSnapshotProtoMsg {
  typeUrl: "/tendermint.abci.ResponseOfferSnapshot";
  value: Uint8Array;
}
export interface ResponseOfferSnapshotAmino {
  result: ResponseOfferSnapshot_Result;
}
export interface ResponseOfferSnapshotAminoMsg {
  type: "/tendermint.abci.ResponseOfferSnapshot";
  value: ResponseOfferSnapshotAmino;
}
export interface ResponseOfferSnapshotSDKType {
  result: ResponseOfferSnapshot_Result;
}
export interface ResponseLoadSnapshotChunk {
  chunk: Uint8Array;
}
export interface ResponseLoadSnapshotChunkProtoMsg {
  typeUrl: "/tendermint.abci.ResponseLoadSnapshotChunk";
  value: Uint8Array;
}
export interface ResponseLoadSnapshotChunkAmino {
  chunk: Uint8Array;
}
export interface ResponseLoadSnapshotChunkAminoMsg {
  type: "/tendermint.abci.ResponseLoadSnapshotChunk";
  value: ResponseLoadSnapshotChunkAmino;
}
export interface ResponseLoadSnapshotChunkSDKType {
  chunk: Uint8Array;
}
export interface ResponseApplySnapshotChunk {
  result: ResponseApplySnapshotChunk_Result;
  /** Chunks to refetch and reapply */
  refetchChunks: number[];
  /** Chunk senders to reject and ban */
  rejectSenders: string[];
}
export interface ResponseApplySnapshotChunkProtoMsg {
  typeUrl: "/tendermint.abci.ResponseApplySnapshotChunk";
  value: Uint8Array;
}
export interface ResponseApplySnapshotChunkAmino {
  result: ResponseApplySnapshotChunk_Result;
  /** Chunks to refetch and reapply */
  refetch_chunks: number[];
  /** Chunk senders to reject and ban */
  reject_senders: string[];
}
export interface ResponseApplySnapshotChunkAminoMsg {
  type: "/tendermint.abci.ResponseApplySnapshotChunk";
  value: ResponseApplySnapshotChunkAmino;
}
export interface ResponseApplySnapshotChunkSDKType {
  result: ResponseApplySnapshotChunk_Result;
  refetch_chunks: number[];
  reject_senders: string[];
}
export interface ResponsePrepareProposal {
  txs: Uint8Array[];
}
export interface ResponsePrepareProposalProtoMsg {
  typeUrl: "/tendermint.abci.ResponsePrepareProposal";
  value: Uint8Array;
}
export interface ResponsePrepareProposalAmino {
  txs: Uint8Array[];
}
export interface ResponsePrepareProposalAminoMsg {
  type: "/tendermint.abci.ResponsePrepareProposal";
  value: ResponsePrepareProposalAmino;
}
export interface ResponsePrepareProposalSDKType {
  txs: Uint8Array[];
}
export interface ResponseProcessProposal {
  status: ResponseProcessProposal_ProposalStatus;
}
export interface ResponseProcessProposalProtoMsg {
  typeUrl: "/tendermint.abci.ResponseProcessProposal";
  value: Uint8Array;
}
export interface ResponseProcessProposalAmino {
  status: ResponseProcessProposal_ProposalStatus;
}
export interface ResponseProcessProposalAminoMsg {
  type: "/tendermint.abci.ResponseProcessProposal";
  value: ResponseProcessProposalAmino;
}
export interface ResponseProcessProposalSDKType {
  status: ResponseProcessProposal_ProposalStatus;
}
export interface ResponseExtendVote {
  voteExtension: Uint8Array;
}
export interface ResponseExtendVoteProtoMsg {
  typeUrl: "/tendermint.abci.ResponseExtendVote";
  value: Uint8Array;
}
export interface ResponseExtendVoteAmino {
  vote_extension: Uint8Array;
}
export interface ResponseExtendVoteAminoMsg {
  type: "/tendermint.abci.ResponseExtendVote";
  value: ResponseExtendVoteAmino;
}
export interface ResponseExtendVoteSDKType {
  vote_extension: Uint8Array;
}
export interface ResponseVerifyVoteExtension {
  status: ResponseVerifyVoteExtension_VerifyStatus;
}
export interface ResponseVerifyVoteExtensionProtoMsg {
  typeUrl: "/tendermint.abci.ResponseVerifyVoteExtension";
  value: Uint8Array;
}
export interface ResponseVerifyVoteExtensionAmino {
  status: ResponseVerifyVoteExtension_VerifyStatus;
}
export interface ResponseVerifyVoteExtensionAminoMsg {
  type: "/tendermint.abci.ResponseVerifyVoteExtension";
  value: ResponseVerifyVoteExtensionAmino;
}
export interface ResponseVerifyVoteExtensionSDKType {
  status: ResponseVerifyVoteExtension_VerifyStatus;
}
export interface ResponseFinalizeBlock {
  /** set of block events emmitted as part of executing the block */
  events: Event[];
  /**
   * the result of executing each transaction including the events
   * the particular transction emitted. This should match the order
   * of the transactions delivered in the block itself
   */
  txResults: ExecTxResult[];
  /** a list of updates to the validator set. These will reflect the validator set at current height + 2. */
  validatorUpdates: ValidatorUpdate[];
  /** updates to the consensus params, if any. */
  consensusParamUpdates: ConsensusParams;
  /** app_hash is the hash of the applications' state which is used to confirm that execution of the transactions was deterministic. It is up to the application to decide which algorithm to use. */
  appHash: Uint8Array;
}
export interface ResponseFinalizeBlockProtoMsg {
  typeUrl: "/tendermint.abci.ResponseFinalizeBlock";
  value: Uint8Array;
}
export interface ResponseFinalizeBlockAmino {
  /** set of block events emmitted as part of executing the block */
  events: EventAmino[];
  /**
   * the result of executing each transaction including the events
   * the particular transction emitted. This should match the order
   * of the transactions delivered in the block itself
   */
  tx_results: ExecTxResultAmino[];
  /** a list of updates to the validator set. These will reflect the validator set at current height + 2. */
  validator_updates: ValidatorUpdateAmino[];
  /** updates to the consensus params, if any. */
  consensus_param_updates?: ConsensusParamsAmino;
  /** app_hash is the hash of the applications' state which is used to confirm that execution of the transactions was deterministic. It is up to the application to decide which algorithm to use. */
  app_hash: Uint8Array;
}
export interface ResponseFinalizeBlockAminoMsg {
  type: "/tendermint.abci.ResponseFinalizeBlock";
  value: ResponseFinalizeBlockAmino;
}
export interface ResponseFinalizeBlockSDKType {
  events: EventSDKType[];
  tx_results: ExecTxResultSDKType[];
  validator_updates: ValidatorUpdateSDKType[];
  consensus_param_updates: ConsensusParamsSDKType;
  app_hash: Uint8Array;
}
export interface CommitInfo {
  round: number;
  votes: VoteInfo[];
}
export interface CommitInfoProtoMsg {
  typeUrl: "/tendermint.abci.CommitInfo";
  value: Uint8Array;
}
export interface CommitInfoAmino {
  round: number;
  votes: VoteInfoAmino[];
}
export interface CommitInfoAminoMsg {
  type: "/tendermint.abci.CommitInfo";
  value: CommitInfoAmino;
}
export interface CommitInfoSDKType {
  round: number;
  votes: VoteInfoSDKType[];
}
/**
 * ExtendedCommitInfo is similar to CommitInfo except that it is only used in
 * the PrepareProposal request such that CometBFT can provide vote extensions
 * to the application.
 */
export interface ExtendedCommitInfo {
  /** The round at which the block proposer decided in the previous height. */
  round: number;
  /**
   * List of validators' addresses in the last validator set with their voting
   * information, including vote extensions.
   */
  votes: ExtendedVoteInfo[];
}
export interface ExtendedCommitInfoProtoMsg {
  typeUrl: "/tendermint.abci.ExtendedCommitInfo";
  value: Uint8Array;
}
/**
 * ExtendedCommitInfo is similar to CommitInfo except that it is only used in
 * the PrepareProposal request such that CometBFT can provide vote extensions
 * to the application.
 */
export interface ExtendedCommitInfoAmino {
  /** The round at which the block proposer decided in the previous height. */
  round: number;
  /**
   * List of validators' addresses in the last validator set with their voting
   * information, including vote extensions.
   */
  votes: ExtendedVoteInfoAmino[];
}
export interface ExtendedCommitInfoAminoMsg {
  type: "/tendermint.abci.ExtendedCommitInfo";
  value: ExtendedCommitInfoAmino;
}
/**
 * ExtendedCommitInfo is similar to CommitInfo except that it is only used in
 * the PrepareProposal request such that CometBFT can provide vote extensions
 * to the application.
 */
export interface ExtendedCommitInfoSDKType {
  round: number;
  votes: ExtendedVoteInfoSDKType[];
}
/**
 * Event allows application developers to attach additional information to
 * ResponseFinalizeBlock and ResponseCheckTx.
 * Later, transactions may be queried using these events.
 */
export interface Event {
  type: string;
  attributes: EventAttribute[];
}
export interface EventProtoMsg {
  typeUrl: "/tendermint.abci.Event";
  value: Uint8Array;
}
/**
 * Event allows application developers to attach additional information to
 * ResponseFinalizeBlock and ResponseCheckTx.
 * Later, transactions may be queried using these events.
 */
export interface EventAmino {
  type: string;
  attributes: EventAttributeAmino[];
}
export interface EventAminoMsg {
  type: "/tendermint.abci.Event";
  value: EventAmino;
}
/**
 * Event allows application developers to attach additional information to
 * ResponseFinalizeBlock and ResponseCheckTx.
 * Later, transactions may be queried using these events.
 */
export interface EventSDKType {
  type: string;
  attributes: EventAttributeSDKType[];
}
/** EventAttribute is a single key-value pair, associated with an event. */
export interface EventAttribute {
  key: string;
  value: string;
  /** nondeterministic */
  index: boolean;
}
export interface EventAttributeProtoMsg {
  typeUrl: "/tendermint.abci.EventAttribute";
  value: Uint8Array;
}
/** EventAttribute is a single key-value pair, associated with an event. */
export interface EventAttributeAmino {
  key: string;
  value: string;
  /** nondeterministic */
  index: boolean;
}
export interface EventAttributeAminoMsg {
  type: "/tendermint.abci.EventAttribute";
  value: EventAttributeAmino;
}
/** EventAttribute is a single key-value pair, associated with an event. */
export interface EventAttributeSDKType {
  key: string;
  value: string;
  index: boolean;
}
/**
 * ExecTxResult contains results of executing one individual transaction.
 * 
 * * Its structure is equivalent to #ResponseDeliverTx which will be deprecated/deleted
 */
export interface ExecTxResult {
  code: number;
  data: Uint8Array;
  /** nondeterministic */
  log: string;
  /** nondeterministic */
  info: string;
  gasWanted: Long;
  gasUsed: Long;
  events: Event[];
  codespace: string;
}
export interface ExecTxResultProtoMsg {
  typeUrl: "/tendermint.abci.ExecTxResult";
  value: Uint8Array;
}
/**
 * ExecTxResult contains results of executing one individual transaction.
 * 
 * * Its structure is equivalent to #ResponseDeliverTx which will be deprecated/deleted
 */
export interface ExecTxResultAmino {
  code: number;
  data: Uint8Array;
  /** nondeterministic */
  log: string;
  /** nondeterministic */
  info: string;
  gas_wanted: string;
  gas_used: string;
  events: EventAmino[];
  codespace: string;
}
export interface ExecTxResultAminoMsg {
  type: "/tendermint.abci.ExecTxResult";
  value: ExecTxResultAmino;
}
/**
 * ExecTxResult contains results of executing one individual transaction.
 * 
 * * Its structure is equivalent to #ResponseDeliverTx which will be deprecated/deleted
 */
export interface ExecTxResultSDKType {
  code: number;
  data: Uint8Array;
  log: string;
  info: string;
  gas_wanted: Long;
  gas_used: Long;
  events: EventSDKType[];
  codespace: string;
}
/**
 * TxResult contains results of executing the transaction.
 * 
 * One usage is indexing transaction results.
 */
export interface TxResult {
  height: Long;
  index: number;
  tx: Uint8Array;
  result: ExecTxResult;
}
export interface TxResultProtoMsg {
  typeUrl: "/tendermint.abci.TxResult";
  value: Uint8Array;
}
/**
 * TxResult contains results of executing the transaction.
 * 
 * One usage is indexing transaction results.
 */
export interface TxResultAmino {
  height: string;
  index: number;
  tx: Uint8Array;
  result?: ExecTxResultAmino;
}
export interface TxResultAminoMsg {
  type: "/tendermint.abci.TxResult";
  value: TxResultAmino;
}
/**
 * TxResult contains results of executing the transaction.
 * 
 * One usage is indexing transaction results.
 */
export interface TxResultSDKType {
  height: Long;
  index: number;
  tx: Uint8Array;
  result: ExecTxResultSDKType;
}
export interface Validator {
  /**
   * The first 20 bytes of SHA256(public key)
   * PubKey pub_key = 2 [(gogoproto.nullable)=false];
   */
  address: Uint8Array;
  /** The voting power */
  power: Long;
}
export interface ValidatorProtoMsg {
  typeUrl: "/tendermint.abci.Validator";
  value: Uint8Array;
}
export interface ValidatorAmino {
  /**
   * The first 20 bytes of SHA256(public key)
   * PubKey pub_key = 2 [(gogoproto.nullable)=false];
   */
  address: Uint8Array;
  /** The voting power */
  power: string;
}
export interface ValidatorAminoMsg {
  type: "/tendermint.abci.Validator";
  value: ValidatorAmino;
}
export interface ValidatorSDKType {
  address: Uint8Array;
  power: Long;
}
export interface ValidatorUpdate {
  pubKey: PublicKey;
  power: Long;
}
export interface ValidatorUpdateProtoMsg {
  typeUrl: "/tendermint.abci.ValidatorUpdate";
  value: Uint8Array;
}
export interface ValidatorUpdateAmino {
  pub_key?: PublicKeyAmino;
  power: string;
}
export interface ValidatorUpdateAminoMsg {
  type: "/tendermint.abci.ValidatorUpdate";
  value: ValidatorUpdateAmino;
}
export interface ValidatorUpdateSDKType {
  pub_key: PublicKeySDKType;
  power: Long;
}
export interface VoteInfo {
  validator: Validator;
  blockIdFlag: BlockIDFlag;
}
export interface VoteInfoProtoMsg {
  typeUrl: "/tendermint.abci.VoteInfo";
  value: Uint8Array;
}
export interface VoteInfoAmino {
  validator?: ValidatorAmino;
  block_id_flag: BlockIDFlag;
}
export interface VoteInfoAminoMsg {
  type: "/tendermint.abci.VoteInfo";
  value: VoteInfoAmino;
}
export interface VoteInfoSDKType {
  validator: ValidatorSDKType;
  block_id_flag: BlockIDFlag;
}
export interface ExtendedVoteInfo {
  /** The validator that sent the vote. */
  validator: Validator;
  /** Non-deterministic extension provided by the sending validator's application. */
  voteExtension: Uint8Array;
  /** Vote extension signature created by CometBFT */
  extensionSignature: Uint8Array;
  /** block_id_flag indicates whether the validator voted for a block, nil, or did not vote at all */
  blockIdFlag: BlockIDFlag;
}
export interface ExtendedVoteInfoProtoMsg {
  typeUrl: "/tendermint.abci.ExtendedVoteInfo";
  value: Uint8Array;
}
export interface ExtendedVoteInfoAmino {
  /** The validator that sent the vote. */
  validator?: ValidatorAmino;
  /** Non-deterministic extension provided by the sending validator's application. */
  vote_extension: Uint8Array;
  /** Vote extension signature created by CometBFT */
  extension_signature: Uint8Array;
  /** block_id_flag indicates whether the validator voted for a block, nil, or did not vote at all */
  block_id_flag: BlockIDFlag;
}
export interface ExtendedVoteInfoAminoMsg {
  type: "/tendermint.abci.ExtendedVoteInfo";
  value: ExtendedVoteInfoAmino;
}
export interface ExtendedVoteInfoSDKType {
  validator: ValidatorSDKType;
  vote_extension: Uint8Array;
  extension_signature: Uint8Array;
  block_id_flag: BlockIDFlag;
}
export interface Misbehavior {
  type: MisbehaviorType;
  /** The offending validator */
  validator: Validator;
  /** The height when the offense occurred */
  height: Long;
  /** The corresponding time where the offense occurred */
  time: Date;
  /**
   * Total voting power of the validator set in case the ABCI application does
   * not store historical validators.
   * https://github.com/tendermint/tendermint/issues/4581
   */
  totalVotingPower: Long;
}
export interface MisbehaviorProtoMsg {
  typeUrl: "/tendermint.abci.Misbehavior";
  value: Uint8Array;
}
export interface MisbehaviorAmino {
  type: MisbehaviorType;
  /** The offending validator */
  validator?: ValidatorAmino;
  /** The height when the offense occurred */
  height: string;
  /** The corresponding time where the offense occurred */
  time?: Date;
  /**
   * Total voting power of the validator set in case the ABCI application does
   * not store historical validators.
   * https://github.com/tendermint/tendermint/issues/4581
   */
  total_voting_power: string;
}
export interface MisbehaviorAminoMsg {
  type: "/tendermint.abci.Misbehavior";
  value: MisbehaviorAmino;
}
export interface MisbehaviorSDKType {
  type: MisbehaviorType;
  validator: ValidatorSDKType;
  height: Long;
  time: Date;
  total_voting_power: Long;
}
export interface Snapshot {
  /** The height at which the snapshot was taken */
  height: Long;
  /** The application-specific snapshot format */
  format: number;
  /** Number of chunks in the snapshot */
  chunks: number;
  /** Arbitrary snapshot hash, equal only if identical */
  hash: Uint8Array;
  /** Arbitrary application metadata */
  metadata: Uint8Array;
}
export interface SnapshotProtoMsg {
  typeUrl: "/tendermint.abci.Snapshot";
  value: Uint8Array;
}
export interface SnapshotAmino {
  /** The height at which the snapshot was taken */
  height: string;
  /** The application-specific snapshot format */
  format: number;
  /** Number of chunks in the snapshot */
  chunks: number;
  /** Arbitrary snapshot hash, equal only if identical */
  hash: Uint8Array;
  /** Arbitrary application metadata */
  metadata: Uint8Array;
}
export interface SnapshotAminoMsg {
  type: "/tendermint.abci.Snapshot";
  value: SnapshotAmino;
}
export interface SnapshotSDKType {
  height: Long;
  format: number;
  chunks: number;
  hash: Uint8Array;
  metadata: Uint8Array;
}
function createBaseRequest(): Request {
  return {
    echo: undefined,
    flush: undefined,
    info: undefined,
    initChain: undefined,
    query: undefined,
    checkTx: undefined,
    commit: undefined,
    listSnapshots: undefined,
    offerSnapshot: undefined,
    loadSnapshotChunk: undefined,
    applySnapshotChunk: undefined,
    prepareProposal: undefined,
    processProposal: undefined,
    extendVote: undefined,
    verifyVoteExtension: undefined,
    finalizeBlock: undefined
  };
}
export const Request = {
  typeUrl: "/tendermint.abci.Request",
  encode(message: Request, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.echo !== undefined) {
      RequestEcho.encode(message.echo, writer.uint32(10).fork()).ldelim();
    }
    if (message.flush !== undefined) {
      RequestFlush.encode(message.flush, writer.uint32(18).fork()).ldelim();
    }
    if (message.info !== undefined) {
      RequestInfo.encode(message.info, writer.uint32(26).fork()).ldelim();
    }
    if (message.initChain !== undefined) {
      RequestInitChain.encode(message.initChain, writer.uint32(42).fork()).ldelim();
    }
    if (message.query !== undefined) {
      RequestQuery.encode(message.query, writer.uint32(50).fork()).ldelim();
    }
    if (message.checkTx !== undefined) {
      RequestCheckTx.encode(message.checkTx, writer.uint32(66).fork()).ldelim();
    }
    if (message.commit !== undefined) {
      RequestCommit.encode(message.commit, writer.uint32(90).fork()).ldelim();
    }
    if (message.listSnapshots !== undefined) {
      RequestListSnapshots.encode(message.listSnapshots, writer.uint32(98).fork()).ldelim();
    }
    if (message.offerSnapshot !== undefined) {
      RequestOfferSnapshot.encode(message.offerSnapshot, writer.uint32(106).fork()).ldelim();
    }
    if (message.loadSnapshotChunk !== undefined) {
      RequestLoadSnapshotChunk.encode(message.loadSnapshotChunk, writer.uint32(114).fork()).ldelim();
    }
    if (message.applySnapshotChunk !== undefined) {
      RequestApplySnapshotChunk.encode(message.applySnapshotChunk, writer.uint32(122).fork()).ldelim();
    }
    if (message.prepareProposal !== undefined) {
      RequestPrepareProposal.encode(message.prepareProposal, writer.uint32(130).fork()).ldelim();
    }
    if (message.processProposal !== undefined) {
      RequestProcessProposal.encode(message.processProposal, writer.uint32(138).fork()).ldelim();
    }
    if (message.extendVote !== undefined) {
      RequestExtendVote.encode(message.extendVote, writer.uint32(146).fork()).ldelim();
    }
    if (message.verifyVoteExtension !== undefined) {
      RequestVerifyVoteExtension.encode(message.verifyVoteExtension, writer.uint32(154).fork()).ldelim();
    }
    if (message.finalizeBlock !== undefined) {
      RequestFinalizeBlock.encode(message.finalizeBlock, writer.uint32(162).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): Request {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.echo = RequestEcho.decode(reader, reader.uint32());
          break;
        case 2:
          message.flush = RequestFlush.decode(reader, reader.uint32());
          break;
        case 3:
          message.info = RequestInfo.decode(reader, reader.uint32());
          break;
        case 5:
          message.initChain = RequestInitChain.decode(reader, reader.uint32());
          break;
        case 6:
          message.query = RequestQuery.decode(reader, reader.uint32());
          break;
        case 8:
          message.checkTx = RequestCheckTx.decode(reader, reader.uint32());
          break;
        case 11:
          message.commit = RequestCommit.decode(reader, reader.uint32());
          break;
        case 12:
          message.listSnapshots = RequestListSnapshots.decode(reader, reader.uint32());
          break;
        case 13:
          message.offerSnapshot = RequestOfferSnapshot.decode(reader, reader.uint32());
          break;
        case 14:
          message.loadSnapshotChunk = RequestLoadSnapshotChunk.decode(reader, reader.uint32());
          break;
        case 15:
          message.applySnapshotChunk = RequestApplySnapshotChunk.decode(reader, reader.uint32());
          break;
        case 16:
          message.prepareProposal = RequestPrepareProposal.decode(reader, reader.uint32());
          break;
        case 17:
          message.processProposal = RequestProcessProposal.decode(reader, reader.uint32());
          break;
        case 18:
          message.extendVote = RequestExtendVote.decode(reader, reader.uint32());
          break;
        case 19:
          message.verifyVoteExtension = RequestVerifyVoteExtension.decode(reader, reader.uint32());
          break;
        case 20:
          message.finalizeBlock = RequestFinalizeBlock.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<Request>): Request {
    const message = createBaseRequest();
    message.echo = object.echo !== undefined && object.echo !== null ? RequestEcho.fromPartial(object.echo) : undefined;
    message.flush = object.flush !== undefined && object.flush !== null ? RequestFlush.fromPartial(object.flush) : undefined;
    message.info = object.info !== undefined && object.info !== null ? RequestInfo.fromPartial(object.info) : undefined;
    message.initChain = object.initChain !== undefined && object.initChain !== null ? RequestInitChain.fromPartial(object.initChain) : undefined;
    message.query = object.query !== undefined && object.query !== null ? RequestQuery.fromPartial(object.query) : undefined;
    message.checkTx = object.checkTx !== undefined && object.checkTx !== null ? RequestCheckTx.fromPartial(object.checkTx) : undefined;
    message.commit = object.commit !== undefined && object.commit !== null ? RequestCommit.fromPartial(object.commit) : undefined;
    message.listSnapshots = object.listSnapshots !== undefined && object.listSnapshots !== null ? RequestListSnapshots.fromPartial(object.listSnapshots) : undefined;
    message.offerSnapshot = object.offerSnapshot !== undefined && object.offerSnapshot !== null ? RequestOfferSnapshot.fromPartial(object.offerSnapshot) : undefined;
    message.loadSnapshotChunk = object.loadSnapshotChunk !== undefined && object.loadSnapshotChunk !== null ? RequestLoadSnapshotChunk.fromPartial(object.loadSnapshotChunk) : undefined;
    message.applySnapshotChunk = object.applySnapshotChunk !== undefined && object.applySnapshotChunk !== null ? RequestApplySnapshotChunk.fromPartial(object.applySnapshotChunk) : undefined;
    message.prepareProposal = object.prepareProposal !== undefined && object.prepareProposal !== null ? RequestPrepareProposal.fromPartial(object.prepareProposal) : undefined;
    message.processProposal = object.processProposal !== undefined && object.processProposal !== null ? RequestProcessProposal.fromPartial(object.processProposal) : undefined;
    message.extendVote = object.extendVote !== undefined && object.extendVote !== null ? RequestExtendVote.fromPartial(object.extendVote) : undefined;
    message.verifyVoteExtension = object.verifyVoteExtension !== undefined && object.verifyVoteExtension !== null ? RequestVerifyVoteExtension.fromPartial(object.verifyVoteExtension) : undefined;
    message.finalizeBlock = object.finalizeBlock !== undefined && object.finalizeBlock !== null ? RequestFinalizeBlock.fromPartial(object.finalizeBlock) : undefined;
    return message;
  },
  fromAmino(object: RequestAmino): Request {
    return {
      echo: object?.echo ? RequestEcho.fromAmino(object.echo) : undefined,
      flush: object?.flush ? RequestFlush.fromAmino(object.flush) : undefined,
      info: object?.info ? RequestInfo.fromAmino(object.info) : undefined,
      initChain: object?.init_chain ? RequestInitChain.fromAmino(object.init_chain) : undefined,
      query: object?.query ? RequestQuery.fromAmino(object.query) : undefined,
      checkTx: object?.check_tx ? RequestCheckTx.fromAmino(object.check_tx) : undefined,
      commit: object?.commit ? RequestCommit.fromAmino(object.commit) : undefined,
      listSnapshots: object?.list_snapshots ? RequestListSnapshots.fromAmino(object.list_snapshots) : undefined,
      offerSnapshot: object?.offer_snapshot ? RequestOfferSnapshot.fromAmino(object.offer_snapshot) : undefined,
      loadSnapshotChunk: object?.load_snapshot_chunk ? RequestLoadSnapshotChunk.fromAmino(object.load_snapshot_chunk) : undefined,
      applySnapshotChunk: object?.apply_snapshot_chunk ? RequestApplySnapshotChunk.fromAmino(object.apply_snapshot_chunk) : undefined,
      prepareProposal: object?.prepare_proposal ? RequestPrepareProposal.fromAmino(object.prepare_proposal) : undefined,
      processProposal: object?.process_proposal ? RequestProcessProposal.fromAmino(object.process_proposal) : undefined,
      extendVote: object?.extend_vote ? RequestExtendVote.fromAmino(object.extend_vote) : undefined,
      verifyVoteExtension: object?.verify_vote_extension ? RequestVerifyVoteExtension.fromAmino(object.verify_vote_extension) : undefined,
      finalizeBlock: object?.finalize_block ? RequestFinalizeBlock.fromAmino(object.finalize_block) : undefined
    };
  },
  toAmino(message: Request): RequestAmino {
    const obj: any = {};
    obj.echo = message.echo ? RequestEcho.toAmino(message.echo) : undefined;
    obj.flush = message.flush ? RequestFlush.toAmino(message.flush) : undefined;
    obj.info = message.info ? RequestInfo.toAmino(message.info) : undefined;
    obj.init_chain = message.initChain ? RequestInitChain.toAmino(message.initChain) : undefined;
    obj.query = message.query ? RequestQuery.toAmino(message.query) : undefined;
    obj.check_tx = message.checkTx ? RequestCheckTx.toAmino(message.checkTx) : undefined;
    obj.commit = message.commit ? RequestCommit.toAmino(message.commit) : undefined;
    obj.list_snapshots = message.listSnapshots ? RequestListSnapshots.toAmino(message.listSnapshots) : undefined;
    obj.offer_snapshot = message.offerSnapshot ? RequestOfferSnapshot.toAmino(message.offerSnapshot) : undefined;
    obj.load_snapshot_chunk = message.loadSnapshotChunk ? RequestLoadSnapshotChunk.toAmino(message.loadSnapshotChunk) : undefined;
    obj.apply_snapshot_chunk = message.applySnapshotChunk ? RequestApplySnapshotChunk.toAmino(message.applySnapshotChunk) : undefined;
    obj.prepare_proposal = message.prepareProposal ? RequestPrepareProposal.toAmino(message.prepareProposal) : undefined;
    obj.process_proposal = message.processProposal ? RequestProcessProposal.toAmino(message.processProposal) : undefined;
    obj.extend_vote = message.extendVote ? RequestExtendVote.toAmino(message.extendVote) : undefined;
    obj.verify_vote_extension = message.verifyVoteExtension ? RequestVerifyVoteExtension.toAmino(message.verifyVoteExtension) : undefined;
    obj.finalize_block = message.finalizeBlock ? RequestFinalizeBlock.toAmino(message.finalizeBlock) : undefined;
    return obj;
  },
  fromAminoMsg(object: RequestAminoMsg): Request {
    return Request.fromAmino(object.value);
  },
  fromProtoMsg(message: RequestProtoMsg): Request {
    return Request.decode(message.value);
  },
  toProto(message: Request): Uint8Array {
    return Request.encode(message).finish();
  },
  toProtoMsg(message: Request): RequestProtoMsg {
    return {
      typeUrl: "/tendermint.abci.Request",
      value: Request.encode(message).finish()
    };
  }
};
function createBaseRequestEcho(): RequestEcho {
  return {
    message: ""
  };
}
export const RequestEcho = {
  typeUrl: "/tendermint.abci.RequestEcho",
  encode(message: RequestEcho, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.message !== "") {
      writer.uint32(10).string(message.message);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): RequestEcho {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRequestEcho();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.message = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<RequestEcho>): RequestEcho {
    const message = createBaseRequestEcho();
    message.message = object.message ?? "";
    return message;
  },
  fromAmino(object: RequestEchoAmino): RequestEcho {
    return {
      message: object.message
    };
  },
  toAmino(message: RequestEcho): RequestEchoAmino {
    const obj: any = {};
    obj.message = message.message;
    return obj;
  },
  fromAminoMsg(object: RequestEchoAminoMsg): RequestEcho {
    return RequestEcho.fromAmino(object.value);
  },
  fromProtoMsg(message: RequestEchoProtoMsg): RequestEcho {
    return RequestEcho.decode(message.value);
  },
  toProto(message: RequestEcho): Uint8Array {
    return RequestEcho.encode(message).finish();
  },
  toProtoMsg(message: RequestEcho): RequestEchoProtoMsg {
    return {
      typeUrl: "/tendermint.abci.RequestEcho",
      value: RequestEcho.encode(message).finish()
    };
  }
};
function createBaseRequestFlush(): RequestFlush {
  return {};
}
export const RequestFlush = {
  typeUrl: "/tendermint.abci.RequestFlush",
  encode(_: RequestFlush, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): RequestFlush {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRequestFlush();
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
  fromPartial(_: DeepPartial<RequestFlush>): RequestFlush {
    const message = createBaseRequestFlush();
    return message;
  },
  fromAmino(_: RequestFlushAmino): RequestFlush {
    return {};
  },
  toAmino(_: RequestFlush): RequestFlushAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: RequestFlushAminoMsg): RequestFlush {
    return RequestFlush.fromAmino(object.value);
  },
  fromProtoMsg(message: RequestFlushProtoMsg): RequestFlush {
    return RequestFlush.decode(message.value);
  },
  toProto(message: RequestFlush): Uint8Array {
    return RequestFlush.encode(message).finish();
  },
  toProtoMsg(message: RequestFlush): RequestFlushProtoMsg {
    return {
      typeUrl: "/tendermint.abci.RequestFlush",
      value: RequestFlush.encode(message).finish()
    };
  }
};
function createBaseRequestInfo(): RequestInfo {
  return {
    version: "",
    blockVersion: Long.UZERO,
    p2pVersion: Long.UZERO,
    abciVersion: ""
  };
}
export const RequestInfo = {
  typeUrl: "/tendermint.abci.RequestInfo",
  encode(message: RequestInfo, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.version !== "") {
      writer.uint32(10).string(message.version);
    }
    if (!message.blockVersion.isZero()) {
      writer.uint32(16).uint64(message.blockVersion);
    }
    if (!message.p2pVersion.isZero()) {
      writer.uint32(24).uint64(message.p2pVersion);
    }
    if (message.abciVersion !== "") {
      writer.uint32(34).string(message.abciVersion);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): RequestInfo {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRequestInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.version = reader.string();
          break;
        case 2:
          message.blockVersion = (reader.uint64() as Long);
          break;
        case 3:
          message.p2pVersion = (reader.uint64() as Long);
          break;
        case 4:
          message.abciVersion = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<RequestInfo>): RequestInfo {
    const message = createBaseRequestInfo();
    message.version = object.version ?? "";
    message.blockVersion = object.blockVersion !== undefined && object.blockVersion !== null ? Long.fromValue(object.blockVersion) : Long.UZERO;
    message.p2pVersion = object.p2pVersion !== undefined && object.p2pVersion !== null ? Long.fromValue(object.p2pVersion) : Long.UZERO;
    message.abciVersion = object.abciVersion ?? "";
    return message;
  },
  fromAmino(object: RequestInfoAmino): RequestInfo {
    return {
      version: object.version,
      blockVersion: Long.fromString(object.block_version),
      p2pVersion: Long.fromString(object.p2p_version),
      abciVersion: object.abci_version
    };
  },
  toAmino(message: RequestInfo): RequestInfoAmino {
    const obj: any = {};
    obj.version = message.version;
    obj.block_version = message.blockVersion ? message.blockVersion.toString() : undefined;
    obj.p2p_version = message.p2pVersion ? message.p2pVersion.toString() : undefined;
    obj.abci_version = message.abciVersion;
    return obj;
  },
  fromAminoMsg(object: RequestInfoAminoMsg): RequestInfo {
    return RequestInfo.fromAmino(object.value);
  },
  fromProtoMsg(message: RequestInfoProtoMsg): RequestInfo {
    return RequestInfo.decode(message.value);
  },
  toProto(message: RequestInfo): Uint8Array {
    return RequestInfo.encode(message).finish();
  },
  toProtoMsg(message: RequestInfo): RequestInfoProtoMsg {
    return {
      typeUrl: "/tendermint.abci.RequestInfo",
      value: RequestInfo.encode(message).finish()
    };
  }
};
function createBaseRequestInitChain(): RequestInitChain {
  return {
    time: new Date(),
    chainId: "",
    consensusParams: ConsensusParams.fromPartial({}),
    validators: [],
    appStateBytes: new Uint8Array(),
    initialHeight: Long.ZERO
  };
}
export const RequestInitChain = {
  typeUrl: "/tendermint.abci.RequestInitChain",
  encode(message: RequestInitChain, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.time !== undefined) {
      Timestamp.encode(toTimestamp(message.time), writer.uint32(10).fork()).ldelim();
    }
    if (message.chainId !== "") {
      writer.uint32(18).string(message.chainId);
    }
    if (message.consensusParams !== undefined) {
      ConsensusParams.encode(message.consensusParams, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.validators) {
      ValidatorUpdate.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    if (message.appStateBytes.length !== 0) {
      writer.uint32(42).bytes(message.appStateBytes);
    }
    if (!message.initialHeight.isZero()) {
      writer.uint32(48).int64(message.initialHeight);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): RequestInitChain {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRequestInitChain();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.time = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;
        case 2:
          message.chainId = reader.string();
          break;
        case 3:
          message.consensusParams = ConsensusParams.decode(reader, reader.uint32());
          break;
        case 4:
          message.validators.push(ValidatorUpdate.decode(reader, reader.uint32()));
          break;
        case 5:
          message.appStateBytes = reader.bytes();
          break;
        case 6:
          message.initialHeight = (reader.int64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<RequestInitChain>): RequestInitChain {
    const message = createBaseRequestInitChain();
    message.time = object.time ?? undefined;
    message.chainId = object.chainId ?? "";
    message.consensusParams = object.consensusParams !== undefined && object.consensusParams !== null ? ConsensusParams.fromPartial(object.consensusParams) : undefined;
    message.validators = object.validators?.map(e => ValidatorUpdate.fromPartial(e)) || [];
    message.appStateBytes = object.appStateBytes ?? new Uint8Array();
    message.initialHeight = object.initialHeight !== undefined && object.initialHeight !== null ? Long.fromValue(object.initialHeight) : Long.ZERO;
    return message;
  },
  fromAmino(object: RequestInitChainAmino): RequestInitChain {
    return {
      time: object.time,
      chainId: object.chain_id,
      consensusParams: object?.consensus_params ? ConsensusParams.fromAmino(object.consensus_params) : undefined,
      validators: Array.isArray(object?.validators) ? object.validators.map((e: any) => ValidatorUpdate.fromAmino(e)) : [],
      appStateBytes: object.app_state_bytes,
      initialHeight: Long.fromString(object.initial_height)
    };
  },
  toAmino(message: RequestInitChain): RequestInitChainAmino {
    const obj: any = {};
    obj.time = message.time;
    obj.chain_id = message.chainId;
    obj.consensus_params = message.consensusParams ? ConsensusParams.toAmino(message.consensusParams) : undefined;
    if (message.validators) {
      obj.validators = message.validators.map(e => e ? ValidatorUpdate.toAmino(e) : undefined);
    } else {
      obj.validators = [];
    }
    obj.app_state_bytes = message.appStateBytes;
    obj.initial_height = message.initialHeight ? message.initialHeight.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: RequestInitChainAminoMsg): RequestInitChain {
    return RequestInitChain.fromAmino(object.value);
  },
  fromProtoMsg(message: RequestInitChainProtoMsg): RequestInitChain {
    return RequestInitChain.decode(message.value);
  },
  toProto(message: RequestInitChain): Uint8Array {
    return RequestInitChain.encode(message).finish();
  },
  toProtoMsg(message: RequestInitChain): RequestInitChainProtoMsg {
    return {
      typeUrl: "/tendermint.abci.RequestInitChain",
      value: RequestInitChain.encode(message).finish()
    };
  }
};
function createBaseRequestQuery(): RequestQuery {
  return {
    data: new Uint8Array(),
    path: "",
    height: Long.ZERO,
    prove: false
  };
}
export const RequestQuery = {
  typeUrl: "/tendermint.abci.RequestQuery",
  encode(message: RequestQuery, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.data.length !== 0) {
      writer.uint32(10).bytes(message.data);
    }
    if (message.path !== "") {
      writer.uint32(18).string(message.path);
    }
    if (!message.height.isZero()) {
      writer.uint32(24).int64(message.height);
    }
    if (message.prove === true) {
      writer.uint32(32).bool(message.prove);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): RequestQuery {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRequestQuery();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.data = reader.bytes();
          break;
        case 2:
          message.path = reader.string();
          break;
        case 3:
          message.height = (reader.int64() as Long);
          break;
        case 4:
          message.prove = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<RequestQuery>): RequestQuery {
    const message = createBaseRequestQuery();
    message.data = object.data ?? new Uint8Array();
    message.path = object.path ?? "";
    message.height = object.height !== undefined && object.height !== null ? Long.fromValue(object.height) : Long.ZERO;
    message.prove = object.prove ?? false;
    return message;
  },
  fromAmino(object: RequestQueryAmino): RequestQuery {
    return {
      data: object.data,
      path: object.path,
      height: Long.fromString(object.height),
      prove: object.prove
    };
  },
  toAmino(message: RequestQuery): RequestQueryAmino {
    const obj: any = {};
    obj.data = message.data;
    obj.path = message.path;
    obj.height = message.height ? message.height.toString() : undefined;
    obj.prove = message.prove;
    return obj;
  },
  fromAminoMsg(object: RequestQueryAminoMsg): RequestQuery {
    return RequestQuery.fromAmino(object.value);
  },
  fromProtoMsg(message: RequestQueryProtoMsg): RequestQuery {
    return RequestQuery.decode(message.value);
  },
  toProto(message: RequestQuery): Uint8Array {
    return RequestQuery.encode(message).finish();
  },
  toProtoMsg(message: RequestQuery): RequestQueryProtoMsg {
    return {
      typeUrl: "/tendermint.abci.RequestQuery",
      value: RequestQuery.encode(message).finish()
    };
  }
};
function createBaseRequestCheckTx(): RequestCheckTx {
  return {
    tx: new Uint8Array(),
    type: 0
  };
}
export const RequestCheckTx = {
  typeUrl: "/tendermint.abci.RequestCheckTx",
  encode(message: RequestCheckTx, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.tx.length !== 0) {
      writer.uint32(10).bytes(message.tx);
    }
    if (message.type !== 0) {
      writer.uint32(16).int32(message.type);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): RequestCheckTx {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRequestCheckTx();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.tx = reader.bytes();
          break;
        case 2:
          message.type = (reader.int32() as any);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<RequestCheckTx>): RequestCheckTx {
    const message = createBaseRequestCheckTx();
    message.tx = object.tx ?? new Uint8Array();
    message.type = object.type ?? 0;
    return message;
  },
  fromAmino(object: RequestCheckTxAmino): RequestCheckTx {
    return {
      tx: object.tx,
      type: isSet(object.type) ? checkTxTypeFromJSON(object.type) : -1
    };
  },
  toAmino(message: RequestCheckTx): RequestCheckTxAmino {
    const obj: any = {};
    obj.tx = message.tx;
    obj.type = message.type;
    return obj;
  },
  fromAminoMsg(object: RequestCheckTxAminoMsg): RequestCheckTx {
    return RequestCheckTx.fromAmino(object.value);
  },
  fromProtoMsg(message: RequestCheckTxProtoMsg): RequestCheckTx {
    return RequestCheckTx.decode(message.value);
  },
  toProto(message: RequestCheckTx): Uint8Array {
    return RequestCheckTx.encode(message).finish();
  },
  toProtoMsg(message: RequestCheckTx): RequestCheckTxProtoMsg {
    return {
      typeUrl: "/tendermint.abci.RequestCheckTx",
      value: RequestCheckTx.encode(message).finish()
    };
  }
};
function createBaseRequestCommit(): RequestCommit {
  return {};
}
export const RequestCommit = {
  typeUrl: "/tendermint.abci.RequestCommit",
  encode(_: RequestCommit, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): RequestCommit {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRequestCommit();
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
  fromPartial(_: DeepPartial<RequestCommit>): RequestCommit {
    const message = createBaseRequestCommit();
    return message;
  },
  fromAmino(_: RequestCommitAmino): RequestCommit {
    return {};
  },
  toAmino(_: RequestCommit): RequestCommitAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: RequestCommitAminoMsg): RequestCommit {
    return RequestCommit.fromAmino(object.value);
  },
  fromProtoMsg(message: RequestCommitProtoMsg): RequestCommit {
    return RequestCommit.decode(message.value);
  },
  toProto(message: RequestCommit): Uint8Array {
    return RequestCommit.encode(message).finish();
  },
  toProtoMsg(message: RequestCommit): RequestCommitProtoMsg {
    return {
      typeUrl: "/tendermint.abci.RequestCommit",
      value: RequestCommit.encode(message).finish()
    };
  }
};
function createBaseRequestListSnapshots(): RequestListSnapshots {
  return {};
}
export const RequestListSnapshots = {
  typeUrl: "/tendermint.abci.RequestListSnapshots",
  encode(_: RequestListSnapshots, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): RequestListSnapshots {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRequestListSnapshots();
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
  fromPartial(_: DeepPartial<RequestListSnapshots>): RequestListSnapshots {
    const message = createBaseRequestListSnapshots();
    return message;
  },
  fromAmino(_: RequestListSnapshotsAmino): RequestListSnapshots {
    return {};
  },
  toAmino(_: RequestListSnapshots): RequestListSnapshotsAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: RequestListSnapshotsAminoMsg): RequestListSnapshots {
    return RequestListSnapshots.fromAmino(object.value);
  },
  fromProtoMsg(message: RequestListSnapshotsProtoMsg): RequestListSnapshots {
    return RequestListSnapshots.decode(message.value);
  },
  toProto(message: RequestListSnapshots): Uint8Array {
    return RequestListSnapshots.encode(message).finish();
  },
  toProtoMsg(message: RequestListSnapshots): RequestListSnapshotsProtoMsg {
    return {
      typeUrl: "/tendermint.abci.RequestListSnapshots",
      value: RequestListSnapshots.encode(message).finish()
    };
  }
};
function createBaseRequestOfferSnapshot(): RequestOfferSnapshot {
  return {
    snapshot: Snapshot.fromPartial({}),
    appHash: new Uint8Array()
  };
}
export const RequestOfferSnapshot = {
  typeUrl: "/tendermint.abci.RequestOfferSnapshot",
  encode(message: RequestOfferSnapshot, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.snapshot !== undefined) {
      Snapshot.encode(message.snapshot, writer.uint32(10).fork()).ldelim();
    }
    if (message.appHash.length !== 0) {
      writer.uint32(18).bytes(message.appHash);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): RequestOfferSnapshot {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRequestOfferSnapshot();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.snapshot = Snapshot.decode(reader, reader.uint32());
          break;
        case 2:
          message.appHash = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<RequestOfferSnapshot>): RequestOfferSnapshot {
    const message = createBaseRequestOfferSnapshot();
    message.snapshot = object.snapshot !== undefined && object.snapshot !== null ? Snapshot.fromPartial(object.snapshot) : undefined;
    message.appHash = object.appHash ?? new Uint8Array();
    return message;
  },
  fromAmino(object: RequestOfferSnapshotAmino): RequestOfferSnapshot {
    return {
      snapshot: object?.snapshot ? Snapshot.fromAmino(object.snapshot) : undefined,
      appHash: object.app_hash
    };
  },
  toAmino(message: RequestOfferSnapshot): RequestOfferSnapshotAmino {
    const obj: any = {};
    obj.snapshot = message.snapshot ? Snapshot.toAmino(message.snapshot) : undefined;
    obj.app_hash = message.appHash;
    return obj;
  },
  fromAminoMsg(object: RequestOfferSnapshotAminoMsg): RequestOfferSnapshot {
    return RequestOfferSnapshot.fromAmino(object.value);
  },
  fromProtoMsg(message: RequestOfferSnapshotProtoMsg): RequestOfferSnapshot {
    return RequestOfferSnapshot.decode(message.value);
  },
  toProto(message: RequestOfferSnapshot): Uint8Array {
    return RequestOfferSnapshot.encode(message).finish();
  },
  toProtoMsg(message: RequestOfferSnapshot): RequestOfferSnapshotProtoMsg {
    return {
      typeUrl: "/tendermint.abci.RequestOfferSnapshot",
      value: RequestOfferSnapshot.encode(message).finish()
    };
  }
};
function createBaseRequestLoadSnapshotChunk(): RequestLoadSnapshotChunk {
  return {
    height: Long.UZERO,
    format: 0,
    chunk: 0
  };
}
export const RequestLoadSnapshotChunk = {
  typeUrl: "/tendermint.abci.RequestLoadSnapshotChunk",
  encode(message: RequestLoadSnapshotChunk, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.height.isZero()) {
      writer.uint32(8).uint64(message.height);
    }
    if (message.format !== 0) {
      writer.uint32(16).uint32(message.format);
    }
    if (message.chunk !== 0) {
      writer.uint32(24).uint32(message.chunk);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): RequestLoadSnapshotChunk {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRequestLoadSnapshotChunk();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.height = (reader.uint64() as Long);
          break;
        case 2:
          message.format = reader.uint32();
          break;
        case 3:
          message.chunk = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<RequestLoadSnapshotChunk>): RequestLoadSnapshotChunk {
    const message = createBaseRequestLoadSnapshotChunk();
    message.height = object.height !== undefined && object.height !== null ? Long.fromValue(object.height) : Long.UZERO;
    message.format = object.format ?? 0;
    message.chunk = object.chunk ?? 0;
    return message;
  },
  fromAmino(object: RequestLoadSnapshotChunkAmino): RequestLoadSnapshotChunk {
    return {
      height: Long.fromString(object.height),
      format: object.format,
      chunk: object.chunk
    };
  },
  toAmino(message: RequestLoadSnapshotChunk): RequestLoadSnapshotChunkAmino {
    const obj: any = {};
    obj.height = message.height ? message.height.toString() : undefined;
    obj.format = message.format;
    obj.chunk = message.chunk;
    return obj;
  },
  fromAminoMsg(object: RequestLoadSnapshotChunkAminoMsg): RequestLoadSnapshotChunk {
    return RequestLoadSnapshotChunk.fromAmino(object.value);
  },
  fromProtoMsg(message: RequestLoadSnapshotChunkProtoMsg): RequestLoadSnapshotChunk {
    return RequestLoadSnapshotChunk.decode(message.value);
  },
  toProto(message: RequestLoadSnapshotChunk): Uint8Array {
    return RequestLoadSnapshotChunk.encode(message).finish();
  },
  toProtoMsg(message: RequestLoadSnapshotChunk): RequestLoadSnapshotChunkProtoMsg {
    return {
      typeUrl: "/tendermint.abci.RequestLoadSnapshotChunk",
      value: RequestLoadSnapshotChunk.encode(message).finish()
    };
  }
};
function createBaseRequestApplySnapshotChunk(): RequestApplySnapshotChunk {
  return {
    index: 0,
    chunk: new Uint8Array(),
    sender: ""
  };
}
export const RequestApplySnapshotChunk = {
  typeUrl: "/tendermint.abci.RequestApplySnapshotChunk",
  encode(message: RequestApplySnapshotChunk, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.index !== 0) {
      writer.uint32(8).uint32(message.index);
    }
    if (message.chunk.length !== 0) {
      writer.uint32(18).bytes(message.chunk);
    }
    if (message.sender !== "") {
      writer.uint32(26).string(message.sender);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): RequestApplySnapshotChunk {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRequestApplySnapshotChunk();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.index = reader.uint32();
          break;
        case 2:
          message.chunk = reader.bytes();
          break;
        case 3:
          message.sender = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<RequestApplySnapshotChunk>): RequestApplySnapshotChunk {
    const message = createBaseRequestApplySnapshotChunk();
    message.index = object.index ?? 0;
    message.chunk = object.chunk ?? new Uint8Array();
    message.sender = object.sender ?? "";
    return message;
  },
  fromAmino(object: RequestApplySnapshotChunkAmino): RequestApplySnapshotChunk {
    return {
      index: object.index,
      chunk: object.chunk,
      sender: object.sender
    };
  },
  toAmino(message: RequestApplySnapshotChunk): RequestApplySnapshotChunkAmino {
    const obj: any = {};
    obj.index = message.index;
    obj.chunk = message.chunk;
    obj.sender = message.sender;
    return obj;
  },
  fromAminoMsg(object: RequestApplySnapshotChunkAminoMsg): RequestApplySnapshotChunk {
    return RequestApplySnapshotChunk.fromAmino(object.value);
  },
  fromProtoMsg(message: RequestApplySnapshotChunkProtoMsg): RequestApplySnapshotChunk {
    return RequestApplySnapshotChunk.decode(message.value);
  },
  toProto(message: RequestApplySnapshotChunk): Uint8Array {
    return RequestApplySnapshotChunk.encode(message).finish();
  },
  toProtoMsg(message: RequestApplySnapshotChunk): RequestApplySnapshotChunkProtoMsg {
    return {
      typeUrl: "/tendermint.abci.RequestApplySnapshotChunk",
      value: RequestApplySnapshotChunk.encode(message).finish()
    };
  }
};
function createBaseRequestPrepareProposal(): RequestPrepareProposal {
  return {
    maxTxBytes: Long.ZERO,
    txs: [],
    localLastCommit: ExtendedCommitInfo.fromPartial({}),
    misbehavior: [],
    height: Long.ZERO,
    time: new Date(),
    nextValidatorsHash: new Uint8Array(),
    proposerAddress: new Uint8Array()
  };
}
export const RequestPrepareProposal = {
  typeUrl: "/tendermint.abci.RequestPrepareProposal",
  encode(message: RequestPrepareProposal, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.maxTxBytes.isZero()) {
      writer.uint32(8).int64(message.maxTxBytes);
    }
    for (const v of message.txs) {
      writer.uint32(18).bytes(v!);
    }
    if (message.localLastCommit !== undefined) {
      ExtendedCommitInfo.encode(message.localLastCommit, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.misbehavior) {
      Misbehavior.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    if (!message.height.isZero()) {
      writer.uint32(40).int64(message.height);
    }
    if (message.time !== undefined) {
      Timestamp.encode(toTimestamp(message.time), writer.uint32(50).fork()).ldelim();
    }
    if (message.nextValidatorsHash.length !== 0) {
      writer.uint32(58).bytes(message.nextValidatorsHash);
    }
    if (message.proposerAddress.length !== 0) {
      writer.uint32(66).bytes(message.proposerAddress);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): RequestPrepareProposal {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRequestPrepareProposal();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.maxTxBytes = (reader.int64() as Long);
          break;
        case 2:
          message.txs.push(reader.bytes());
          break;
        case 3:
          message.localLastCommit = ExtendedCommitInfo.decode(reader, reader.uint32());
          break;
        case 4:
          message.misbehavior.push(Misbehavior.decode(reader, reader.uint32()));
          break;
        case 5:
          message.height = (reader.int64() as Long);
          break;
        case 6:
          message.time = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;
        case 7:
          message.nextValidatorsHash = reader.bytes();
          break;
        case 8:
          message.proposerAddress = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<RequestPrepareProposal>): RequestPrepareProposal {
    const message = createBaseRequestPrepareProposal();
    message.maxTxBytes = object.maxTxBytes !== undefined && object.maxTxBytes !== null ? Long.fromValue(object.maxTxBytes) : Long.ZERO;
    message.txs = object.txs?.map(e => e) || [];
    message.localLastCommit = object.localLastCommit !== undefined && object.localLastCommit !== null ? ExtendedCommitInfo.fromPartial(object.localLastCommit) : undefined;
    message.misbehavior = object.misbehavior?.map(e => Misbehavior.fromPartial(e)) || [];
    message.height = object.height !== undefined && object.height !== null ? Long.fromValue(object.height) : Long.ZERO;
    message.time = object.time ?? undefined;
    message.nextValidatorsHash = object.nextValidatorsHash ?? new Uint8Array();
    message.proposerAddress = object.proposerAddress ?? new Uint8Array();
    return message;
  },
  fromAmino(object: RequestPrepareProposalAmino): RequestPrepareProposal {
    return {
      maxTxBytes: Long.fromString(object.max_tx_bytes),
      txs: Array.isArray(object?.txs) ? object.txs.map((e: any) => e) : [],
      localLastCommit: object?.local_last_commit ? ExtendedCommitInfo.fromAmino(object.local_last_commit) : undefined,
      misbehavior: Array.isArray(object?.misbehavior) ? object.misbehavior.map((e: any) => Misbehavior.fromAmino(e)) : [],
      height: Long.fromString(object.height),
      time: object.time,
      nextValidatorsHash: object.next_validators_hash,
      proposerAddress: object.proposer_address
    };
  },
  toAmino(message: RequestPrepareProposal): RequestPrepareProposalAmino {
    const obj: any = {};
    obj.max_tx_bytes = message.maxTxBytes ? message.maxTxBytes.toString() : undefined;
    if (message.txs) {
      obj.txs = message.txs.map(e => e);
    } else {
      obj.txs = [];
    }
    obj.local_last_commit = message.localLastCommit ? ExtendedCommitInfo.toAmino(message.localLastCommit) : undefined;
    if (message.misbehavior) {
      obj.misbehavior = message.misbehavior.map(e => e ? Misbehavior.toAmino(e) : undefined);
    } else {
      obj.misbehavior = [];
    }
    obj.height = message.height ? message.height.toString() : undefined;
    obj.time = message.time;
    obj.next_validators_hash = message.nextValidatorsHash;
    obj.proposer_address = message.proposerAddress;
    return obj;
  },
  fromAminoMsg(object: RequestPrepareProposalAminoMsg): RequestPrepareProposal {
    return RequestPrepareProposal.fromAmino(object.value);
  },
  fromProtoMsg(message: RequestPrepareProposalProtoMsg): RequestPrepareProposal {
    return RequestPrepareProposal.decode(message.value);
  },
  toProto(message: RequestPrepareProposal): Uint8Array {
    return RequestPrepareProposal.encode(message).finish();
  },
  toProtoMsg(message: RequestPrepareProposal): RequestPrepareProposalProtoMsg {
    return {
      typeUrl: "/tendermint.abci.RequestPrepareProposal",
      value: RequestPrepareProposal.encode(message).finish()
    };
  }
};
function createBaseRequestProcessProposal(): RequestProcessProposal {
  return {
    txs: [],
    proposedLastCommit: CommitInfo.fromPartial({}),
    misbehavior: [],
    hash: new Uint8Array(),
    height: Long.ZERO,
    time: new Date(),
    nextValidatorsHash: new Uint8Array(),
    proposerAddress: new Uint8Array()
  };
}
export const RequestProcessProposal = {
  typeUrl: "/tendermint.abci.RequestProcessProposal",
  encode(message: RequestProcessProposal, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.txs) {
      writer.uint32(10).bytes(v!);
    }
    if (message.proposedLastCommit !== undefined) {
      CommitInfo.encode(message.proposedLastCommit, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.misbehavior) {
      Misbehavior.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    if (message.hash.length !== 0) {
      writer.uint32(34).bytes(message.hash);
    }
    if (!message.height.isZero()) {
      writer.uint32(40).int64(message.height);
    }
    if (message.time !== undefined) {
      Timestamp.encode(toTimestamp(message.time), writer.uint32(50).fork()).ldelim();
    }
    if (message.nextValidatorsHash.length !== 0) {
      writer.uint32(58).bytes(message.nextValidatorsHash);
    }
    if (message.proposerAddress.length !== 0) {
      writer.uint32(66).bytes(message.proposerAddress);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): RequestProcessProposal {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRequestProcessProposal();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.txs.push(reader.bytes());
          break;
        case 2:
          message.proposedLastCommit = CommitInfo.decode(reader, reader.uint32());
          break;
        case 3:
          message.misbehavior.push(Misbehavior.decode(reader, reader.uint32()));
          break;
        case 4:
          message.hash = reader.bytes();
          break;
        case 5:
          message.height = (reader.int64() as Long);
          break;
        case 6:
          message.time = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;
        case 7:
          message.nextValidatorsHash = reader.bytes();
          break;
        case 8:
          message.proposerAddress = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<RequestProcessProposal>): RequestProcessProposal {
    const message = createBaseRequestProcessProposal();
    message.txs = object.txs?.map(e => e) || [];
    message.proposedLastCommit = object.proposedLastCommit !== undefined && object.proposedLastCommit !== null ? CommitInfo.fromPartial(object.proposedLastCommit) : undefined;
    message.misbehavior = object.misbehavior?.map(e => Misbehavior.fromPartial(e)) || [];
    message.hash = object.hash ?? new Uint8Array();
    message.height = object.height !== undefined && object.height !== null ? Long.fromValue(object.height) : Long.ZERO;
    message.time = object.time ?? undefined;
    message.nextValidatorsHash = object.nextValidatorsHash ?? new Uint8Array();
    message.proposerAddress = object.proposerAddress ?? new Uint8Array();
    return message;
  },
  fromAmino(object: RequestProcessProposalAmino): RequestProcessProposal {
    return {
      txs: Array.isArray(object?.txs) ? object.txs.map((e: any) => e) : [],
      proposedLastCommit: object?.proposed_last_commit ? CommitInfo.fromAmino(object.proposed_last_commit) : undefined,
      misbehavior: Array.isArray(object?.misbehavior) ? object.misbehavior.map((e: any) => Misbehavior.fromAmino(e)) : [],
      hash: object.hash,
      height: Long.fromString(object.height),
      time: object.time,
      nextValidatorsHash: object.next_validators_hash,
      proposerAddress: object.proposer_address
    };
  },
  toAmino(message: RequestProcessProposal): RequestProcessProposalAmino {
    const obj: any = {};
    if (message.txs) {
      obj.txs = message.txs.map(e => e);
    } else {
      obj.txs = [];
    }
    obj.proposed_last_commit = message.proposedLastCommit ? CommitInfo.toAmino(message.proposedLastCommit) : undefined;
    if (message.misbehavior) {
      obj.misbehavior = message.misbehavior.map(e => e ? Misbehavior.toAmino(e) : undefined);
    } else {
      obj.misbehavior = [];
    }
    obj.hash = message.hash;
    obj.height = message.height ? message.height.toString() : undefined;
    obj.time = message.time;
    obj.next_validators_hash = message.nextValidatorsHash;
    obj.proposer_address = message.proposerAddress;
    return obj;
  },
  fromAminoMsg(object: RequestProcessProposalAminoMsg): RequestProcessProposal {
    return RequestProcessProposal.fromAmino(object.value);
  },
  fromProtoMsg(message: RequestProcessProposalProtoMsg): RequestProcessProposal {
    return RequestProcessProposal.decode(message.value);
  },
  toProto(message: RequestProcessProposal): Uint8Array {
    return RequestProcessProposal.encode(message).finish();
  },
  toProtoMsg(message: RequestProcessProposal): RequestProcessProposalProtoMsg {
    return {
      typeUrl: "/tendermint.abci.RequestProcessProposal",
      value: RequestProcessProposal.encode(message).finish()
    };
  }
};
function createBaseRequestExtendVote(): RequestExtendVote {
  return {
    hash: new Uint8Array(),
    height: Long.ZERO
  };
}
export const RequestExtendVote = {
  typeUrl: "/tendermint.abci.RequestExtendVote",
  encode(message: RequestExtendVote, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.hash.length !== 0) {
      writer.uint32(10).bytes(message.hash);
    }
    if (!message.height.isZero()) {
      writer.uint32(16).int64(message.height);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): RequestExtendVote {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRequestExtendVote();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.hash = reader.bytes();
          break;
        case 2:
          message.height = (reader.int64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<RequestExtendVote>): RequestExtendVote {
    const message = createBaseRequestExtendVote();
    message.hash = object.hash ?? new Uint8Array();
    message.height = object.height !== undefined && object.height !== null ? Long.fromValue(object.height) : Long.ZERO;
    return message;
  },
  fromAmino(object: RequestExtendVoteAmino): RequestExtendVote {
    return {
      hash: object.hash,
      height: Long.fromString(object.height)
    };
  },
  toAmino(message: RequestExtendVote): RequestExtendVoteAmino {
    const obj: any = {};
    obj.hash = message.hash;
    obj.height = message.height ? message.height.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: RequestExtendVoteAminoMsg): RequestExtendVote {
    return RequestExtendVote.fromAmino(object.value);
  },
  fromProtoMsg(message: RequestExtendVoteProtoMsg): RequestExtendVote {
    return RequestExtendVote.decode(message.value);
  },
  toProto(message: RequestExtendVote): Uint8Array {
    return RequestExtendVote.encode(message).finish();
  },
  toProtoMsg(message: RequestExtendVote): RequestExtendVoteProtoMsg {
    return {
      typeUrl: "/tendermint.abci.RequestExtendVote",
      value: RequestExtendVote.encode(message).finish()
    };
  }
};
function createBaseRequestVerifyVoteExtension(): RequestVerifyVoteExtension {
  return {
    hash: new Uint8Array(),
    validatorAddress: new Uint8Array(),
    height: Long.ZERO,
    voteExtension: new Uint8Array()
  };
}
export const RequestVerifyVoteExtension = {
  typeUrl: "/tendermint.abci.RequestVerifyVoteExtension",
  encode(message: RequestVerifyVoteExtension, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.hash.length !== 0) {
      writer.uint32(10).bytes(message.hash);
    }
    if (message.validatorAddress.length !== 0) {
      writer.uint32(18).bytes(message.validatorAddress);
    }
    if (!message.height.isZero()) {
      writer.uint32(24).int64(message.height);
    }
    if (message.voteExtension.length !== 0) {
      writer.uint32(34).bytes(message.voteExtension);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): RequestVerifyVoteExtension {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRequestVerifyVoteExtension();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.hash = reader.bytes();
          break;
        case 2:
          message.validatorAddress = reader.bytes();
          break;
        case 3:
          message.height = (reader.int64() as Long);
          break;
        case 4:
          message.voteExtension = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<RequestVerifyVoteExtension>): RequestVerifyVoteExtension {
    const message = createBaseRequestVerifyVoteExtension();
    message.hash = object.hash ?? new Uint8Array();
    message.validatorAddress = object.validatorAddress ?? new Uint8Array();
    message.height = object.height !== undefined && object.height !== null ? Long.fromValue(object.height) : Long.ZERO;
    message.voteExtension = object.voteExtension ?? new Uint8Array();
    return message;
  },
  fromAmino(object: RequestVerifyVoteExtensionAmino): RequestVerifyVoteExtension {
    return {
      hash: object.hash,
      validatorAddress: object.validator_address,
      height: Long.fromString(object.height),
      voteExtension: object.vote_extension
    };
  },
  toAmino(message: RequestVerifyVoteExtension): RequestVerifyVoteExtensionAmino {
    const obj: any = {};
    obj.hash = message.hash;
    obj.validator_address = message.validatorAddress;
    obj.height = message.height ? message.height.toString() : undefined;
    obj.vote_extension = message.voteExtension;
    return obj;
  },
  fromAminoMsg(object: RequestVerifyVoteExtensionAminoMsg): RequestVerifyVoteExtension {
    return RequestVerifyVoteExtension.fromAmino(object.value);
  },
  fromProtoMsg(message: RequestVerifyVoteExtensionProtoMsg): RequestVerifyVoteExtension {
    return RequestVerifyVoteExtension.decode(message.value);
  },
  toProto(message: RequestVerifyVoteExtension): Uint8Array {
    return RequestVerifyVoteExtension.encode(message).finish();
  },
  toProtoMsg(message: RequestVerifyVoteExtension): RequestVerifyVoteExtensionProtoMsg {
    return {
      typeUrl: "/tendermint.abci.RequestVerifyVoteExtension",
      value: RequestVerifyVoteExtension.encode(message).finish()
    };
  }
};
function createBaseRequestFinalizeBlock(): RequestFinalizeBlock {
  return {
    txs: [],
    decidedLastCommit: CommitInfo.fromPartial({}),
    misbehavior: [],
    hash: new Uint8Array(),
    height: Long.ZERO,
    time: new Date(),
    nextValidatorsHash: new Uint8Array(),
    proposerAddress: new Uint8Array()
  };
}
export const RequestFinalizeBlock = {
  typeUrl: "/tendermint.abci.RequestFinalizeBlock",
  encode(message: RequestFinalizeBlock, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.txs) {
      writer.uint32(10).bytes(v!);
    }
    if (message.decidedLastCommit !== undefined) {
      CommitInfo.encode(message.decidedLastCommit, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.misbehavior) {
      Misbehavior.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    if (message.hash.length !== 0) {
      writer.uint32(34).bytes(message.hash);
    }
    if (!message.height.isZero()) {
      writer.uint32(40).int64(message.height);
    }
    if (message.time !== undefined) {
      Timestamp.encode(toTimestamp(message.time), writer.uint32(50).fork()).ldelim();
    }
    if (message.nextValidatorsHash.length !== 0) {
      writer.uint32(58).bytes(message.nextValidatorsHash);
    }
    if (message.proposerAddress.length !== 0) {
      writer.uint32(66).bytes(message.proposerAddress);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): RequestFinalizeBlock {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRequestFinalizeBlock();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.txs.push(reader.bytes());
          break;
        case 2:
          message.decidedLastCommit = CommitInfo.decode(reader, reader.uint32());
          break;
        case 3:
          message.misbehavior.push(Misbehavior.decode(reader, reader.uint32()));
          break;
        case 4:
          message.hash = reader.bytes();
          break;
        case 5:
          message.height = (reader.int64() as Long);
          break;
        case 6:
          message.time = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;
        case 7:
          message.nextValidatorsHash = reader.bytes();
          break;
        case 8:
          message.proposerAddress = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<RequestFinalizeBlock>): RequestFinalizeBlock {
    const message = createBaseRequestFinalizeBlock();
    message.txs = object.txs?.map(e => e) || [];
    message.decidedLastCommit = object.decidedLastCommit !== undefined && object.decidedLastCommit !== null ? CommitInfo.fromPartial(object.decidedLastCommit) : undefined;
    message.misbehavior = object.misbehavior?.map(e => Misbehavior.fromPartial(e)) || [];
    message.hash = object.hash ?? new Uint8Array();
    message.height = object.height !== undefined && object.height !== null ? Long.fromValue(object.height) : Long.ZERO;
    message.time = object.time ?? undefined;
    message.nextValidatorsHash = object.nextValidatorsHash ?? new Uint8Array();
    message.proposerAddress = object.proposerAddress ?? new Uint8Array();
    return message;
  },
  fromAmino(object: RequestFinalizeBlockAmino): RequestFinalizeBlock {
    return {
      txs: Array.isArray(object?.txs) ? object.txs.map((e: any) => e) : [],
      decidedLastCommit: object?.decided_last_commit ? CommitInfo.fromAmino(object.decided_last_commit) : undefined,
      misbehavior: Array.isArray(object?.misbehavior) ? object.misbehavior.map((e: any) => Misbehavior.fromAmino(e)) : [],
      hash: object.hash,
      height: Long.fromString(object.height),
      time: object.time,
      nextValidatorsHash: object.next_validators_hash,
      proposerAddress: object.proposer_address
    };
  },
  toAmino(message: RequestFinalizeBlock): RequestFinalizeBlockAmino {
    const obj: any = {};
    if (message.txs) {
      obj.txs = message.txs.map(e => e);
    } else {
      obj.txs = [];
    }
    obj.decided_last_commit = message.decidedLastCommit ? CommitInfo.toAmino(message.decidedLastCommit) : undefined;
    if (message.misbehavior) {
      obj.misbehavior = message.misbehavior.map(e => e ? Misbehavior.toAmino(e) : undefined);
    } else {
      obj.misbehavior = [];
    }
    obj.hash = message.hash;
    obj.height = message.height ? message.height.toString() : undefined;
    obj.time = message.time;
    obj.next_validators_hash = message.nextValidatorsHash;
    obj.proposer_address = message.proposerAddress;
    return obj;
  },
  fromAminoMsg(object: RequestFinalizeBlockAminoMsg): RequestFinalizeBlock {
    return RequestFinalizeBlock.fromAmino(object.value);
  },
  fromProtoMsg(message: RequestFinalizeBlockProtoMsg): RequestFinalizeBlock {
    return RequestFinalizeBlock.decode(message.value);
  },
  toProto(message: RequestFinalizeBlock): Uint8Array {
    return RequestFinalizeBlock.encode(message).finish();
  },
  toProtoMsg(message: RequestFinalizeBlock): RequestFinalizeBlockProtoMsg {
    return {
      typeUrl: "/tendermint.abci.RequestFinalizeBlock",
      value: RequestFinalizeBlock.encode(message).finish()
    };
  }
};
function createBaseResponse(): Response {
  return {
    exception: undefined,
    echo: undefined,
    flush: undefined,
    info: undefined,
    initChain: undefined,
    query: undefined,
    checkTx: undefined,
    commit: undefined,
    listSnapshots: undefined,
    offerSnapshot: undefined,
    loadSnapshotChunk: undefined,
    applySnapshotChunk: undefined,
    prepareProposal: undefined,
    processProposal: undefined,
    extendVote: undefined,
    verifyVoteExtension: undefined,
    finalizeBlock: undefined
  };
}
export const Response = {
  typeUrl: "/tendermint.abci.Response",
  encode(message: Response, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.exception !== undefined) {
      ResponseException.encode(message.exception, writer.uint32(10).fork()).ldelim();
    }
    if (message.echo !== undefined) {
      ResponseEcho.encode(message.echo, writer.uint32(18).fork()).ldelim();
    }
    if (message.flush !== undefined) {
      ResponseFlush.encode(message.flush, writer.uint32(26).fork()).ldelim();
    }
    if (message.info !== undefined) {
      ResponseInfo.encode(message.info, writer.uint32(34).fork()).ldelim();
    }
    if (message.initChain !== undefined) {
      ResponseInitChain.encode(message.initChain, writer.uint32(50).fork()).ldelim();
    }
    if (message.query !== undefined) {
      ResponseQuery.encode(message.query, writer.uint32(58).fork()).ldelim();
    }
    if (message.checkTx !== undefined) {
      ResponseCheckTx.encode(message.checkTx, writer.uint32(74).fork()).ldelim();
    }
    if (message.commit !== undefined) {
      ResponseCommit.encode(message.commit, writer.uint32(98).fork()).ldelim();
    }
    if (message.listSnapshots !== undefined) {
      ResponseListSnapshots.encode(message.listSnapshots, writer.uint32(106).fork()).ldelim();
    }
    if (message.offerSnapshot !== undefined) {
      ResponseOfferSnapshot.encode(message.offerSnapshot, writer.uint32(114).fork()).ldelim();
    }
    if (message.loadSnapshotChunk !== undefined) {
      ResponseLoadSnapshotChunk.encode(message.loadSnapshotChunk, writer.uint32(122).fork()).ldelim();
    }
    if (message.applySnapshotChunk !== undefined) {
      ResponseApplySnapshotChunk.encode(message.applySnapshotChunk, writer.uint32(130).fork()).ldelim();
    }
    if (message.prepareProposal !== undefined) {
      ResponsePrepareProposal.encode(message.prepareProposal, writer.uint32(138).fork()).ldelim();
    }
    if (message.processProposal !== undefined) {
      ResponseProcessProposal.encode(message.processProposal, writer.uint32(146).fork()).ldelim();
    }
    if (message.extendVote !== undefined) {
      ResponseExtendVote.encode(message.extendVote, writer.uint32(154).fork()).ldelim();
    }
    if (message.verifyVoteExtension !== undefined) {
      ResponseVerifyVoteExtension.encode(message.verifyVoteExtension, writer.uint32(162).fork()).ldelim();
    }
    if (message.finalizeBlock !== undefined) {
      ResponseFinalizeBlock.encode(message.finalizeBlock, writer.uint32(170).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): Response {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.exception = ResponseException.decode(reader, reader.uint32());
          break;
        case 2:
          message.echo = ResponseEcho.decode(reader, reader.uint32());
          break;
        case 3:
          message.flush = ResponseFlush.decode(reader, reader.uint32());
          break;
        case 4:
          message.info = ResponseInfo.decode(reader, reader.uint32());
          break;
        case 6:
          message.initChain = ResponseInitChain.decode(reader, reader.uint32());
          break;
        case 7:
          message.query = ResponseQuery.decode(reader, reader.uint32());
          break;
        case 9:
          message.checkTx = ResponseCheckTx.decode(reader, reader.uint32());
          break;
        case 12:
          message.commit = ResponseCommit.decode(reader, reader.uint32());
          break;
        case 13:
          message.listSnapshots = ResponseListSnapshots.decode(reader, reader.uint32());
          break;
        case 14:
          message.offerSnapshot = ResponseOfferSnapshot.decode(reader, reader.uint32());
          break;
        case 15:
          message.loadSnapshotChunk = ResponseLoadSnapshotChunk.decode(reader, reader.uint32());
          break;
        case 16:
          message.applySnapshotChunk = ResponseApplySnapshotChunk.decode(reader, reader.uint32());
          break;
        case 17:
          message.prepareProposal = ResponsePrepareProposal.decode(reader, reader.uint32());
          break;
        case 18:
          message.processProposal = ResponseProcessProposal.decode(reader, reader.uint32());
          break;
        case 19:
          message.extendVote = ResponseExtendVote.decode(reader, reader.uint32());
          break;
        case 20:
          message.verifyVoteExtension = ResponseVerifyVoteExtension.decode(reader, reader.uint32());
          break;
        case 21:
          message.finalizeBlock = ResponseFinalizeBlock.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<Response>): Response {
    const message = createBaseResponse();
    message.exception = object.exception !== undefined && object.exception !== null ? ResponseException.fromPartial(object.exception) : undefined;
    message.echo = object.echo !== undefined && object.echo !== null ? ResponseEcho.fromPartial(object.echo) : undefined;
    message.flush = object.flush !== undefined && object.flush !== null ? ResponseFlush.fromPartial(object.flush) : undefined;
    message.info = object.info !== undefined && object.info !== null ? ResponseInfo.fromPartial(object.info) : undefined;
    message.initChain = object.initChain !== undefined && object.initChain !== null ? ResponseInitChain.fromPartial(object.initChain) : undefined;
    message.query = object.query !== undefined && object.query !== null ? ResponseQuery.fromPartial(object.query) : undefined;
    message.checkTx = object.checkTx !== undefined && object.checkTx !== null ? ResponseCheckTx.fromPartial(object.checkTx) : undefined;
    message.commit = object.commit !== undefined && object.commit !== null ? ResponseCommit.fromPartial(object.commit) : undefined;
    message.listSnapshots = object.listSnapshots !== undefined && object.listSnapshots !== null ? ResponseListSnapshots.fromPartial(object.listSnapshots) : undefined;
    message.offerSnapshot = object.offerSnapshot !== undefined && object.offerSnapshot !== null ? ResponseOfferSnapshot.fromPartial(object.offerSnapshot) : undefined;
    message.loadSnapshotChunk = object.loadSnapshotChunk !== undefined && object.loadSnapshotChunk !== null ? ResponseLoadSnapshotChunk.fromPartial(object.loadSnapshotChunk) : undefined;
    message.applySnapshotChunk = object.applySnapshotChunk !== undefined && object.applySnapshotChunk !== null ? ResponseApplySnapshotChunk.fromPartial(object.applySnapshotChunk) : undefined;
    message.prepareProposal = object.prepareProposal !== undefined && object.prepareProposal !== null ? ResponsePrepareProposal.fromPartial(object.prepareProposal) : undefined;
    message.processProposal = object.processProposal !== undefined && object.processProposal !== null ? ResponseProcessProposal.fromPartial(object.processProposal) : undefined;
    message.extendVote = object.extendVote !== undefined && object.extendVote !== null ? ResponseExtendVote.fromPartial(object.extendVote) : undefined;
    message.verifyVoteExtension = object.verifyVoteExtension !== undefined && object.verifyVoteExtension !== null ? ResponseVerifyVoteExtension.fromPartial(object.verifyVoteExtension) : undefined;
    message.finalizeBlock = object.finalizeBlock !== undefined && object.finalizeBlock !== null ? ResponseFinalizeBlock.fromPartial(object.finalizeBlock) : undefined;
    return message;
  },
  fromAmino(object: ResponseAmino): Response {
    return {
      exception: object?.exception ? ResponseException.fromAmino(object.exception) : undefined,
      echo: object?.echo ? ResponseEcho.fromAmino(object.echo) : undefined,
      flush: object?.flush ? ResponseFlush.fromAmino(object.flush) : undefined,
      info: object?.info ? ResponseInfo.fromAmino(object.info) : undefined,
      initChain: object?.init_chain ? ResponseInitChain.fromAmino(object.init_chain) : undefined,
      query: object?.query ? ResponseQuery.fromAmino(object.query) : undefined,
      checkTx: object?.check_tx ? ResponseCheckTx.fromAmino(object.check_tx) : undefined,
      commit: object?.commit ? ResponseCommit.fromAmino(object.commit) : undefined,
      listSnapshots: object?.list_snapshots ? ResponseListSnapshots.fromAmino(object.list_snapshots) : undefined,
      offerSnapshot: object?.offer_snapshot ? ResponseOfferSnapshot.fromAmino(object.offer_snapshot) : undefined,
      loadSnapshotChunk: object?.load_snapshot_chunk ? ResponseLoadSnapshotChunk.fromAmino(object.load_snapshot_chunk) : undefined,
      applySnapshotChunk: object?.apply_snapshot_chunk ? ResponseApplySnapshotChunk.fromAmino(object.apply_snapshot_chunk) : undefined,
      prepareProposal: object?.prepare_proposal ? ResponsePrepareProposal.fromAmino(object.prepare_proposal) : undefined,
      processProposal: object?.process_proposal ? ResponseProcessProposal.fromAmino(object.process_proposal) : undefined,
      extendVote: object?.extend_vote ? ResponseExtendVote.fromAmino(object.extend_vote) : undefined,
      verifyVoteExtension: object?.verify_vote_extension ? ResponseVerifyVoteExtension.fromAmino(object.verify_vote_extension) : undefined,
      finalizeBlock: object?.finalize_block ? ResponseFinalizeBlock.fromAmino(object.finalize_block) : undefined
    };
  },
  toAmino(message: Response): ResponseAmino {
    const obj: any = {};
    obj.exception = message.exception ? ResponseException.toAmino(message.exception) : undefined;
    obj.echo = message.echo ? ResponseEcho.toAmino(message.echo) : undefined;
    obj.flush = message.flush ? ResponseFlush.toAmino(message.flush) : undefined;
    obj.info = message.info ? ResponseInfo.toAmino(message.info) : undefined;
    obj.init_chain = message.initChain ? ResponseInitChain.toAmino(message.initChain) : undefined;
    obj.query = message.query ? ResponseQuery.toAmino(message.query) : undefined;
    obj.check_tx = message.checkTx ? ResponseCheckTx.toAmino(message.checkTx) : undefined;
    obj.commit = message.commit ? ResponseCommit.toAmino(message.commit) : undefined;
    obj.list_snapshots = message.listSnapshots ? ResponseListSnapshots.toAmino(message.listSnapshots) : undefined;
    obj.offer_snapshot = message.offerSnapshot ? ResponseOfferSnapshot.toAmino(message.offerSnapshot) : undefined;
    obj.load_snapshot_chunk = message.loadSnapshotChunk ? ResponseLoadSnapshotChunk.toAmino(message.loadSnapshotChunk) : undefined;
    obj.apply_snapshot_chunk = message.applySnapshotChunk ? ResponseApplySnapshotChunk.toAmino(message.applySnapshotChunk) : undefined;
    obj.prepare_proposal = message.prepareProposal ? ResponsePrepareProposal.toAmino(message.prepareProposal) : undefined;
    obj.process_proposal = message.processProposal ? ResponseProcessProposal.toAmino(message.processProposal) : undefined;
    obj.extend_vote = message.extendVote ? ResponseExtendVote.toAmino(message.extendVote) : undefined;
    obj.verify_vote_extension = message.verifyVoteExtension ? ResponseVerifyVoteExtension.toAmino(message.verifyVoteExtension) : undefined;
    obj.finalize_block = message.finalizeBlock ? ResponseFinalizeBlock.toAmino(message.finalizeBlock) : undefined;
    return obj;
  },
  fromAminoMsg(object: ResponseAminoMsg): Response {
    return Response.fromAmino(object.value);
  },
  fromProtoMsg(message: ResponseProtoMsg): Response {
    return Response.decode(message.value);
  },
  toProto(message: Response): Uint8Array {
    return Response.encode(message).finish();
  },
  toProtoMsg(message: Response): ResponseProtoMsg {
    return {
      typeUrl: "/tendermint.abci.Response",
      value: Response.encode(message).finish()
    };
  }
};
function createBaseResponseException(): ResponseException {
  return {
    error: ""
  };
}
export const ResponseException = {
  typeUrl: "/tendermint.abci.ResponseException",
  encode(message: ResponseException, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.error !== "") {
      writer.uint32(10).string(message.error);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): ResponseException {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseResponseException();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.error = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<ResponseException>): ResponseException {
    const message = createBaseResponseException();
    message.error = object.error ?? "";
    return message;
  },
  fromAmino(object: ResponseExceptionAmino): ResponseException {
    return {
      error: object.error
    };
  },
  toAmino(message: ResponseException): ResponseExceptionAmino {
    const obj: any = {};
    obj.error = message.error;
    return obj;
  },
  fromAminoMsg(object: ResponseExceptionAminoMsg): ResponseException {
    return ResponseException.fromAmino(object.value);
  },
  fromProtoMsg(message: ResponseExceptionProtoMsg): ResponseException {
    return ResponseException.decode(message.value);
  },
  toProto(message: ResponseException): Uint8Array {
    return ResponseException.encode(message).finish();
  },
  toProtoMsg(message: ResponseException): ResponseExceptionProtoMsg {
    return {
      typeUrl: "/tendermint.abci.ResponseException",
      value: ResponseException.encode(message).finish()
    };
  }
};
function createBaseResponseEcho(): ResponseEcho {
  return {
    message: ""
  };
}
export const ResponseEcho = {
  typeUrl: "/tendermint.abci.ResponseEcho",
  encode(message: ResponseEcho, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.message !== "") {
      writer.uint32(10).string(message.message);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): ResponseEcho {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseResponseEcho();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.message = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<ResponseEcho>): ResponseEcho {
    const message = createBaseResponseEcho();
    message.message = object.message ?? "";
    return message;
  },
  fromAmino(object: ResponseEchoAmino): ResponseEcho {
    return {
      message: object.message
    };
  },
  toAmino(message: ResponseEcho): ResponseEchoAmino {
    const obj: any = {};
    obj.message = message.message;
    return obj;
  },
  fromAminoMsg(object: ResponseEchoAminoMsg): ResponseEcho {
    return ResponseEcho.fromAmino(object.value);
  },
  fromProtoMsg(message: ResponseEchoProtoMsg): ResponseEcho {
    return ResponseEcho.decode(message.value);
  },
  toProto(message: ResponseEcho): Uint8Array {
    return ResponseEcho.encode(message).finish();
  },
  toProtoMsg(message: ResponseEcho): ResponseEchoProtoMsg {
    return {
      typeUrl: "/tendermint.abci.ResponseEcho",
      value: ResponseEcho.encode(message).finish()
    };
  }
};
function createBaseResponseFlush(): ResponseFlush {
  return {};
}
export const ResponseFlush = {
  typeUrl: "/tendermint.abci.ResponseFlush",
  encode(_: ResponseFlush, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): ResponseFlush {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseResponseFlush();
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
  fromPartial(_: DeepPartial<ResponseFlush>): ResponseFlush {
    const message = createBaseResponseFlush();
    return message;
  },
  fromAmino(_: ResponseFlushAmino): ResponseFlush {
    return {};
  },
  toAmino(_: ResponseFlush): ResponseFlushAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: ResponseFlushAminoMsg): ResponseFlush {
    return ResponseFlush.fromAmino(object.value);
  },
  fromProtoMsg(message: ResponseFlushProtoMsg): ResponseFlush {
    return ResponseFlush.decode(message.value);
  },
  toProto(message: ResponseFlush): Uint8Array {
    return ResponseFlush.encode(message).finish();
  },
  toProtoMsg(message: ResponseFlush): ResponseFlushProtoMsg {
    return {
      typeUrl: "/tendermint.abci.ResponseFlush",
      value: ResponseFlush.encode(message).finish()
    };
  }
};
function createBaseResponseInfo(): ResponseInfo {
  return {
    data: "",
    version: "",
    appVersion: Long.UZERO,
    lastBlockHeight: Long.ZERO,
    lastBlockAppHash: new Uint8Array()
  };
}
export const ResponseInfo = {
  typeUrl: "/tendermint.abci.ResponseInfo",
  encode(message: ResponseInfo, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.data !== "") {
      writer.uint32(10).string(message.data);
    }
    if (message.version !== "") {
      writer.uint32(18).string(message.version);
    }
    if (!message.appVersion.isZero()) {
      writer.uint32(24).uint64(message.appVersion);
    }
    if (!message.lastBlockHeight.isZero()) {
      writer.uint32(32).int64(message.lastBlockHeight);
    }
    if (message.lastBlockAppHash.length !== 0) {
      writer.uint32(42).bytes(message.lastBlockAppHash);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): ResponseInfo {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseResponseInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.data = reader.string();
          break;
        case 2:
          message.version = reader.string();
          break;
        case 3:
          message.appVersion = (reader.uint64() as Long);
          break;
        case 4:
          message.lastBlockHeight = (reader.int64() as Long);
          break;
        case 5:
          message.lastBlockAppHash = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<ResponseInfo>): ResponseInfo {
    const message = createBaseResponseInfo();
    message.data = object.data ?? "";
    message.version = object.version ?? "";
    message.appVersion = object.appVersion !== undefined && object.appVersion !== null ? Long.fromValue(object.appVersion) : Long.UZERO;
    message.lastBlockHeight = object.lastBlockHeight !== undefined && object.lastBlockHeight !== null ? Long.fromValue(object.lastBlockHeight) : Long.ZERO;
    message.lastBlockAppHash = object.lastBlockAppHash ?? new Uint8Array();
    return message;
  },
  fromAmino(object: ResponseInfoAmino): ResponseInfo {
    return {
      data: object.data,
      version: object.version,
      appVersion: Long.fromString(object.app_version),
      lastBlockHeight: Long.fromString(object.last_block_height),
      lastBlockAppHash: object.last_block_app_hash
    };
  },
  toAmino(message: ResponseInfo): ResponseInfoAmino {
    const obj: any = {};
    obj.data = message.data;
    obj.version = message.version;
    obj.app_version = message.appVersion ? message.appVersion.toString() : undefined;
    obj.last_block_height = message.lastBlockHeight ? message.lastBlockHeight.toString() : undefined;
    obj.last_block_app_hash = message.lastBlockAppHash;
    return obj;
  },
  fromAminoMsg(object: ResponseInfoAminoMsg): ResponseInfo {
    return ResponseInfo.fromAmino(object.value);
  },
  fromProtoMsg(message: ResponseInfoProtoMsg): ResponseInfo {
    return ResponseInfo.decode(message.value);
  },
  toProto(message: ResponseInfo): Uint8Array {
    return ResponseInfo.encode(message).finish();
  },
  toProtoMsg(message: ResponseInfo): ResponseInfoProtoMsg {
    return {
      typeUrl: "/tendermint.abci.ResponseInfo",
      value: ResponseInfo.encode(message).finish()
    };
  }
};
function createBaseResponseInitChain(): ResponseInitChain {
  return {
    consensusParams: ConsensusParams.fromPartial({}),
    validators: [],
    appHash: new Uint8Array()
  };
}
export const ResponseInitChain = {
  typeUrl: "/tendermint.abci.ResponseInitChain",
  encode(message: ResponseInitChain, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.consensusParams !== undefined) {
      ConsensusParams.encode(message.consensusParams, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.validators) {
      ValidatorUpdate.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    if (message.appHash.length !== 0) {
      writer.uint32(26).bytes(message.appHash);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): ResponseInitChain {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseResponseInitChain();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.consensusParams = ConsensusParams.decode(reader, reader.uint32());
          break;
        case 2:
          message.validators.push(ValidatorUpdate.decode(reader, reader.uint32()));
          break;
        case 3:
          message.appHash = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<ResponseInitChain>): ResponseInitChain {
    const message = createBaseResponseInitChain();
    message.consensusParams = object.consensusParams !== undefined && object.consensusParams !== null ? ConsensusParams.fromPartial(object.consensusParams) : undefined;
    message.validators = object.validators?.map(e => ValidatorUpdate.fromPartial(e)) || [];
    message.appHash = object.appHash ?? new Uint8Array();
    return message;
  },
  fromAmino(object: ResponseInitChainAmino): ResponseInitChain {
    return {
      consensusParams: object?.consensus_params ? ConsensusParams.fromAmino(object.consensus_params) : undefined,
      validators: Array.isArray(object?.validators) ? object.validators.map((e: any) => ValidatorUpdate.fromAmino(e)) : [],
      appHash: object.app_hash
    };
  },
  toAmino(message: ResponseInitChain): ResponseInitChainAmino {
    const obj: any = {};
    obj.consensus_params = message.consensusParams ? ConsensusParams.toAmino(message.consensusParams) : undefined;
    if (message.validators) {
      obj.validators = message.validators.map(e => e ? ValidatorUpdate.toAmino(e) : undefined);
    } else {
      obj.validators = [];
    }
    obj.app_hash = message.appHash;
    return obj;
  },
  fromAminoMsg(object: ResponseInitChainAminoMsg): ResponseInitChain {
    return ResponseInitChain.fromAmino(object.value);
  },
  fromProtoMsg(message: ResponseInitChainProtoMsg): ResponseInitChain {
    return ResponseInitChain.decode(message.value);
  },
  toProto(message: ResponseInitChain): Uint8Array {
    return ResponseInitChain.encode(message).finish();
  },
  toProtoMsg(message: ResponseInitChain): ResponseInitChainProtoMsg {
    return {
      typeUrl: "/tendermint.abci.ResponseInitChain",
      value: ResponseInitChain.encode(message).finish()
    };
  }
};
function createBaseResponseQuery(): ResponseQuery {
  return {
    code: 0,
    log: "",
    info: "",
    index: Long.ZERO,
    key: new Uint8Array(),
    value: new Uint8Array(),
    proofOps: ProofOps.fromPartial({}),
    height: Long.ZERO,
    codespace: ""
  };
}
export const ResponseQuery = {
  typeUrl: "/tendermint.abci.ResponseQuery",
  encode(message: ResponseQuery, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.code !== 0) {
      writer.uint32(8).uint32(message.code);
    }
    if (message.log !== "") {
      writer.uint32(26).string(message.log);
    }
    if (message.info !== "") {
      writer.uint32(34).string(message.info);
    }
    if (!message.index.isZero()) {
      writer.uint32(40).int64(message.index);
    }
    if (message.key.length !== 0) {
      writer.uint32(50).bytes(message.key);
    }
    if (message.value.length !== 0) {
      writer.uint32(58).bytes(message.value);
    }
    if (message.proofOps !== undefined) {
      ProofOps.encode(message.proofOps, writer.uint32(66).fork()).ldelim();
    }
    if (!message.height.isZero()) {
      writer.uint32(72).int64(message.height);
    }
    if (message.codespace !== "") {
      writer.uint32(82).string(message.codespace);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): ResponseQuery {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseResponseQuery();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.code = reader.uint32();
          break;
        case 3:
          message.log = reader.string();
          break;
        case 4:
          message.info = reader.string();
          break;
        case 5:
          message.index = (reader.int64() as Long);
          break;
        case 6:
          message.key = reader.bytes();
          break;
        case 7:
          message.value = reader.bytes();
          break;
        case 8:
          message.proofOps = ProofOps.decode(reader, reader.uint32());
          break;
        case 9:
          message.height = (reader.int64() as Long);
          break;
        case 10:
          message.codespace = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<ResponseQuery>): ResponseQuery {
    const message = createBaseResponseQuery();
    message.code = object.code ?? 0;
    message.log = object.log ?? "";
    message.info = object.info ?? "";
    message.index = object.index !== undefined && object.index !== null ? Long.fromValue(object.index) : Long.ZERO;
    message.key = object.key ?? new Uint8Array();
    message.value = object.value ?? new Uint8Array();
    message.proofOps = object.proofOps !== undefined && object.proofOps !== null ? ProofOps.fromPartial(object.proofOps) : undefined;
    message.height = object.height !== undefined && object.height !== null ? Long.fromValue(object.height) : Long.ZERO;
    message.codespace = object.codespace ?? "";
    return message;
  },
  fromAmino(object: ResponseQueryAmino): ResponseQuery {
    return {
      code: object.code,
      log: object.log,
      info: object.info,
      index: Long.fromString(object.index),
      key: object.key,
      value: object.value,
      proofOps: object?.proof_ops ? ProofOps.fromAmino(object.proof_ops) : undefined,
      height: Long.fromString(object.height),
      codespace: object.codespace
    };
  },
  toAmino(message: ResponseQuery): ResponseQueryAmino {
    const obj: any = {};
    obj.code = message.code;
    obj.log = message.log;
    obj.info = message.info;
    obj.index = message.index ? message.index.toString() : undefined;
    obj.key = message.key;
    obj.value = message.value;
    obj.proof_ops = message.proofOps ? ProofOps.toAmino(message.proofOps) : undefined;
    obj.height = message.height ? message.height.toString() : undefined;
    obj.codespace = message.codespace;
    return obj;
  },
  fromAminoMsg(object: ResponseQueryAminoMsg): ResponseQuery {
    return ResponseQuery.fromAmino(object.value);
  },
  fromProtoMsg(message: ResponseQueryProtoMsg): ResponseQuery {
    return ResponseQuery.decode(message.value);
  },
  toProto(message: ResponseQuery): Uint8Array {
    return ResponseQuery.encode(message).finish();
  },
  toProtoMsg(message: ResponseQuery): ResponseQueryProtoMsg {
    return {
      typeUrl: "/tendermint.abci.ResponseQuery",
      value: ResponseQuery.encode(message).finish()
    };
  }
};
function createBaseResponseCheckTx(): ResponseCheckTx {
  return {
    code: 0,
    data: new Uint8Array(),
    log: "",
    info: "",
    gasWanted: Long.ZERO,
    gasUsed: Long.ZERO,
    events: [],
    codespace: ""
  };
}
export const ResponseCheckTx = {
  typeUrl: "/tendermint.abci.ResponseCheckTx",
  encode(message: ResponseCheckTx, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.code !== 0) {
      writer.uint32(8).uint32(message.code);
    }
    if (message.data.length !== 0) {
      writer.uint32(18).bytes(message.data);
    }
    if (message.log !== "") {
      writer.uint32(26).string(message.log);
    }
    if (message.info !== "") {
      writer.uint32(34).string(message.info);
    }
    if (!message.gasWanted.isZero()) {
      writer.uint32(40).int64(message.gasWanted);
    }
    if (!message.gasUsed.isZero()) {
      writer.uint32(48).int64(message.gasUsed);
    }
    for (const v of message.events) {
      Event.encode(v!, writer.uint32(58).fork()).ldelim();
    }
    if (message.codespace !== "") {
      writer.uint32(66).string(message.codespace);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): ResponseCheckTx {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseResponseCheckTx();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.code = reader.uint32();
          break;
        case 2:
          message.data = reader.bytes();
          break;
        case 3:
          message.log = reader.string();
          break;
        case 4:
          message.info = reader.string();
          break;
        case 5:
          message.gasWanted = (reader.int64() as Long);
          break;
        case 6:
          message.gasUsed = (reader.int64() as Long);
          break;
        case 7:
          message.events.push(Event.decode(reader, reader.uint32()));
          break;
        case 8:
          message.codespace = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<ResponseCheckTx>): ResponseCheckTx {
    const message = createBaseResponseCheckTx();
    message.code = object.code ?? 0;
    message.data = object.data ?? new Uint8Array();
    message.log = object.log ?? "";
    message.info = object.info ?? "";
    message.gasWanted = object.gasWanted !== undefined && object.gasWanted !== null ? Long.fromValue(object.gasWanted) : Long.ZERO;
    message.gasUsed = object.gasUsed !== undefined && object.gasUsed !== null ? Long.fromValue(object.gasUsed) : Long.ZERO;
    message.events = object.events?.map(e => Event.fromPartial(e)) || [];
    message.codespace = object.codespace ?? "";
    return message;
  },
  fromAmino(object: ResponseCheckTxAmino): ResponseCheckTx {
    return {
      code: object.code,
      data: object.data,
      log: object.log,
      info: object.info,
      gasWanted: Long.fromString(object.gas_wanted),
      gasUsed: Long.fromString(object.gas_used),
      events: Array.isArray(object?.events) ? object.events.map((e: any) => Event.fromAmino(e)) : [],
      codespace: object.codespace
    };
  },
  toAmino(message: ResponseCheckTx): ResponseCheckTxAmino {
    const obj: any = {};
    obj.code = message.code;
    obj.data = message.data;
    obj.log = message.log;
    obj.info = message.info;
    obj.gas_wanted = message.gasWanted ? message.gasWanted.toString() : undefined;
    obj.gas_used = message.gasUsed ? message.gasUsed.toString() : undefined;
    if (message.events) {
      obj.events = message.events.map(e => e ? Event.toAmino(e) : undefined);
    } else {
      obj.events = [];
    }
    obj.codespace = message.codespace;
    return obj;
  },
  fromAminoMsg(object: ResponseCheckTxAminoMsg): ResponseCheckTx {
    return ResponseCheckTx.fromAmino(object.value);
  },
  fromProtoMsg(message: ResponseCheckTxProtoMsg): ResponseCheckTx {
    return ResponseCheckTx.decode(message.value);
  },
  toProto(message: ResponseCheckTx): Uint8Array {
    return ResponseCheckTx.encode(message).finish();
  },
  toProtoMsg(message: ResponseCheckTx): ResponseCheckTxProtoMsg {
    return {
      typeUrl: "/tendermint.abci.ResponseCheckTx",
      value: ResponseCheckTx.encode(message).finish()
    };
  }
};
function createBaseResponseCommit(): ResponseCommit {
  return {
    retainHeight: Long.ZERO
  };
}
export const ResponseCommit = {
  typeUrl: "/tendermint.abci.ResponseCommit",
  encode(message: ResponseCommit, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.retainHeight.isZero()) {
      writer.uint32(24).int64(message.retainHeight);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): ResponseCommit {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseResponseCommit();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 3:
          message.retainHeight = (reader.int64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<ResponseCommit>): ResponseCommit {
    const message = createBaseResponseCommit();
    message.retainHeight = object.retainHeight !== undefined && object.retainHeight !== null ? Long.fromValue(object.retainHeight) : Long.ZERO;
    return message;
  },
  fromAmino(object: ResponseCommitAmino): ResponseCommit {
    return {
      retainHeight: Long.fromString(object.retain_height)
    };
  },
  toAmino(message: ResponseCommit): ResponseCommitAmino {
    const obj: any = {};
    obj.retain_height = message.retainHeight ? message.retainHeight.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: ResponseCommitAminoMsg): ResponseCommit {
    return ResponseCommit.fromAmino(object.value);
  },
  fromProtoMsg(message: ResponseCommitProtoMsg): ResponseCommit {
    return ResponseCommit.decode(message.value);
  },
  toProto(message: ResponseCommit): Uint8Array {
    return ResponseCommit.encode(message).finish();
  },
  toProtoMsg(message: ResponseCommit): ResponseCommitProtoMsg {
    return {
      typeUrl: "/tendermint.abci.ResponseCommit",
      value: ResponseCommit.encode(message).finish()
    };
  }
};
function createBaseResponseListSnapshots(): ResponseListSnapshots {
  return {
    snapshots: []
  };
}
export const ResponseListSnapshots = {
  typeUrl: "/tendermint.abci.ResponseListSnapshots",
  encode(message: ResponseListSnapshots, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.snapshots) {
      Snapshot.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): ResponseListSnapshots {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseResponseListSnapshots();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.snapshots.push(Snapshot.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<ResponseListSnapshots>): ResponseListSnapshots {
    const message = createBaseResponseListSnapshots();
    message.snapshots = object.snapshots?.map(e => Snapshot.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: ResponseListSnapshotsAmino): ResponseListSnapshots {
    return {
      snapshots: Array.isArray(object?.snapshots) ? object.snapshots.map((e: any) => Snapshot.fromAmino(e)) : []
    };
  },
  toAmino(message: ResponseListSnapshots): ResponseListSnapshotsAmino {
    const obj: any = {};
    if (message.snapshots) {
      obj.snapshots = message.snapshots.map(e => e ? Snapshot.toAmino(e) : undefined);
    } else {
      obj.snapshots = [];
    }
    return obj;
  },
  fromAminoMsg(object: ResponseListSnapshotsAminoMsg): ResponseListSnapshots {
    return ResponseListSnapshots.fromAmino(object.value);
  },
  fromProtoMsg(message: ResponseListSnapshotsProtoMsg): ResponseListSnapshots {
    return ResponseListSnapshots.decode(message.value);
  },
  toProto(message: ResponseListSnapshots): Uint8Array {
    return ResponseListSnapshots.encode(message).finish();
  },
  toProtoMsg(message: ResponseListSnapshots): ResponseListSnapshotsProtoMsg {
    return {
      typeUrl: "/tendermint.abci.ResponseListSnapshots",
      value: ResponseListSnapshots.encode(message).finish()
    };
  }
};
function createBaseResponseOfferSnapshot(): ResponseOfferSnapshot {
  return {
    result: 0
  };
}
export const ResponseOfferSnapshot = {
  typeUrl: "/tendermint.abci.ResponseOfferSnapshot",
  encode(message: ResponseOfferSnapshot, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.result !== 0) {
      writer.uint32(8).int32(message.result);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): ResponseOfferSnapshot {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseResponseOfferSnapshot();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.result = (reader.int32() as any);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<ResponseOfferSnapshot>): ResponseOfferSnapshot {
    const message = createBaseResponseOfferSnapshot();
    message.result = object.result ?? 0;
    return message;
  },
  fromAmino(object: ResponseOfferSnapshotAmino): ResponseOfferSnapshot {
    return {
      result: isSet(object.result) ? responseOfferSnapshot_ResultFromJSON(object.result) : -1
    };
  },
  toAmino(message: ResponseOfferSnapshot): ResponseOfferSnapshotAmino {
    const obj: any = {};
    obj.result = message.result;
    return obj;
  },
  fromAminoMsg(object: ResponseOfferSnapshotAminoMsg): ResponseOfferSnapshot {
    return ResponseOfferSnapshot.fromAmino(object.value);
  },
  fromProtoMsg(message: ResponseOfferSnapshotProtoMsg): ResponseOfferSnapshot {
    return ResponseOfferSnapshot.decode(message.value);
  },
  toProto(message: ResponseOfferSnapshot): Uint8Array {
    return ResponseOfferSnapshot.encode(message).finish();
  },
  toProtoMsg(message: ResponseOfferSnapshot): ResponseOfferSnapshotProtoMsg {
    return {
      typeUrl: "/tendermint.abci.ResponseOfferSnapshot",
      value: ResponseOfferSnapshot.encode(message).finish()
    };
  }
};
function createBaseResponseLoadSnapshotChunk(): ResponseLoadSnapshotChunk {
  return {
    chunk: new Uint8Array()
  };
}
export const ResponseLoadSnapshotChunk = {
  typeUrl: "/tendermint.abci.ResponseLoadSnapshotChunk",
  encode(message: ResponseLoadSnapshotChunk, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.chunk.length !== 0) {
      writer.uint32(10).bytes(message.chunk);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): ResponseLoadSnapshotChunk {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseResponseLoadSnapshotChunk();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.chunk = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<ResponseLoadSnapshotChunk>): ResponseLoadSnapshotChunk {
    const message = createBaseResponseLoadSnapshotChunk();
    message.chunk = object.chunk ?? new Uint8Array();
    return message;
  },
  fromAmino(object: ResponseLoadSnapshotChunkAmino): ResponseLoadSnapshotChunk {
    return {
      chunk: object.chunk
    };
  },
  toAmino(message: ResponseLoadSnapshotChunk): ResponseLoadSnapshotChunkAmino {
    const obj: any = {};
    obj.chunk = message.chunk;
    return obj;
  },
  fromAminoMsg(object: ResponseLoadSnapshotChunkAminoMsg): ResponseLoadSnapshotChunk {
    return ResponseLoadSnapshotChunk.fromAmino(object.value);
  },
  fromProtoMsg(message: ResponseLoadSnapshotChunkProtoMsg): ResponseLoadSnapshotChunk {
    return ResponseLoadSnapshotChunk.decode(message.value);
  },
  toProto(message: ResponseLoadSnapshotChunk): Uint8Array {
    return ResponseLoadSnapshotChunk.encode(message).finish();
  },
  toProtoMsg(message: ResponseLoadSnapshotChunk): ResponseLoadSnapshotChunkProtoMsg {
    return {
      typeUrl: "/tendermint.abci.ResponseLoadSnapshotChunk",
      value: ResponseLoadSnapshotChunk.encode(message).finish()
    };
  }
};
function createBaseResponseApplySnapshotChunk(): ResponseApplySnapshotChunk {
  return {
    result: 0,
    refetchChunks: [],
    rejectSenders: []
  };
}
export const ResponseApplySnapshotChunk = {
  typeUrl: "/tendermint.abci.ResponseApplySnapshotChunk",
  encode(message: ResponseApplySnapshotChunk, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.result !== 0) {
      writer.uint32(8).int32(message.result);
    }
    writer.uint32(18).fork();
    for (const v of message.refetchChunks) {
      writer.uint32(v);
    }
    writer.ldelim();
    for (const v of message.rejectSenders) {
      writer.uint32(26).string(v!);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): ResponseApplySnapshotChunk {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseResponseApplySnapshotChunk();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.result = (reader.int32() as any);
          break;
        case 2:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.refetchChunks.push(reader.uint32());
            }
          } else {
            message.refetchChunks.push(reader.uint32());
          }
          break;
        case 3:
          message.rejectSenders.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<ResponseApplySnapshotChunk>): ResponseApplySnapshotChunk {
    const message = createBaseResponseApplySnapshotChunk();
    message.result = object.result ?? 0;
    message.refetchChunks = object.refetchChunks?.map(e => e) || [];
    message.rejectSenders = object.rejectSenders?.map(e => e) || [];
    return message;
  },
  fromAmino(object: ResponseApplySnapshotChunkAmino): ResponseApplySnapshotChunk {
    return {
      result: isSet(object.result) ? responseApplySnapshotChunk_ResultFromJSON(object.result) : -1,
      refetchChunks: Array.isArray(object?.refetch_chunks) ? object.refetch_chunks.map((e: any) => e) : [],
      rejectSenders: Array.isArray(object?.reject_senders) ? object.reject_senders.map((e: any) => e) : []
    };
  },
  toAmino(message: ResponseApplySnapshotChunk): ResponseApplySnapshotChunkAmino {
    const obj: any = {};
    obj.result = message.result;
    if (message.refetchChunks) {
      obj.refetch_chunks = message.refetchChunks.map(e => e);
    } else {
      obj.refetch_chunks = [];
    }
    if (message.rejectSenders) {
      obj.reject_senders = message.rejectSenders.map(e => e);
    } else {
      obj.reject_senders = [];
    }
    return obj;
  },
  fromAminoMsg(object: ResponseApplySnapshotChunkAminoMsg): ResponseApplySnapshotChunk {
    return ResponseApplySnapshotChunk.fromAmino(object.value);
  },
  fromProtoMsg(message: ResponseApplySnapshotChunkProtoMsg): ResponseApplySnapshotChunk {
    return ResponseApplySnapshotChunk.decode(message.value);
  },
  toProto(message: ResponseApplySnapshotChunk): Uint8Array {
    return ResponseApplySnapshotChunk.encode(message).finish();
  },
  toProtoMsg(message: ResponseApplySnapshotChunk): ResponseApplySnapshotChunkProtoMsg {
    return {
      typeUrl: "/tendermint.abci.ResponseApplySnapshotChunk",
      value: ResponseApplySnapshotChunk.encode(message).finish()
    };
  }
};
function createBaseResponsePrepareProposal(): ResponsePrepareProposal {
  return {
    txs: []
  };
}
export const ResponsePrepareProposal = {
  typeUrl: "/tendermint.abci.ResponsePrepareProposal",
  encode(message: ResponsePrepareProposal, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.txs) {
      writer.uint32(10).bytes(v!);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): ResponsePrepareProposal {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseResponsePrepareProposal();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.txs.push(reader.bytes());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<ResponsePrepareProposal>): ResponsePrepareProposal {
    const message = createBaseResponsePrepareProposal();
    message.txs = object.txs?.map(e => e) || [];
    return message;
  },
  fromAmino(object: ResponsePrepareProposalAmino): ResponsePrepareProposal {
    return {
      txs: Array.isArray(object?.txs) ? object.txs.map((e: any) => e) : []
    };
  },
  toAmino(message: ResponsePrepareProposal): ResponsePrepareProposalAmino {
    const obj: any = {};
    if (message.txs) {
      obj.txs = message.txs.map(e => e);
    } else {
      obj.txs = [];
    }
    return obj;
  },
  fromAminoMsg(object: ResponsePrepareProposalAminoMsg): ResponsePrepareProposal {
    return ResponsePrepareProposal.fromAmino(object.value);
  },
  fromProtoMsg(message: ResponsePrepareProposalProtoMsg): ResponsePrepareProposal {
    return ResponsePrepareProposal.decode(message.value);
  },
  toProto(message: ResponsePrepareProposal): Uint8Array {
    return ResponsePrepareProposal.encode(message).finish();
  },
  toProtoMsg(message: ResponsePrepareProposal): ResponsePrepareProposalProtoMsg {
    return {
      typeUrl: "/tendermint.abci.ResponsePrepareProposal",
      value: ResponsePrepareProposal.encode(message).finish()
    };
  }
};
function createBaseResponseProcessProposal(): ResponseProcessProposal {
  return {
    status: 0
  };
}
export const ResponseProcessProposal = {
  typeUrl: "/tendermint.abci.ResponseProcessProposal",
  encode(message: ResponseProcessProposal, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.status !== 0) {
      writer.uint32(8).int32(message.status);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): ResponseProcessProposal {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseResponseProcessProposal();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.status = (reader.int32() as any);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<ResponseProcessProposal>): ResponseProcessProposal {
    const message = createBaseResponseProcessProposal();
    message.status = object.status ?? 0;
    return message;
  },
  fromAmino(object: ResponseProcessProposalAmino): ResponseProcessProposal {
    return {
      status: isSet(object.status) ? responseProcessProposal_ProposalStatusFromJSON(object.status) : -1
    };
  },
  toAmino(message: ResponseProcessProposal): ResponseProcessProposalAmino {
    const obj: any = {};
    obj.status = message.status;
    return obj;
  },
  fromAminoMsg(object: ResponseProcessProposalAminoMsg): ResponseProcessProposal {
    return ResponseProcessProposal.fromAmino(object.value);
  },
  fromProtoMsg(message: ResponseProcessProposalProtoMsg): ResponseProcessProposal {
    return ResponseProcessProposal.decode(message.value);
  },
  toProto(message: ResponseProcessProposal): Uint8Array {
    return ResponseProcessProposal.encode(message).finish();
  },
  toProtoMsg(message: ResponseProcessProposal): ResponseProcessProposalProtoMsg {
    return {
      typeUrl: "/tendermint.abci.ResponseProcessProposal",
      value: ResponseProcessProposal.encode(message).finish()
    };
  }
};
function createBaseResponseExtendVote(): ResponseExtendVote {
  return {
    voteExtension: new Uint8Array()
  };
}
export const ResponseExtendVote = {
  typeUrl: "/tendermint.abci.ResponseExtendVote",
  encode(message: ResponseExtendVote, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.voteExtension.length !== 0) {
      writer.uint32(10).bytes(message.voteExtension);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): ResponseExtendVote {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseResponseExtendVote();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.voteExtension = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<ResponseExtendVote>): ResponseExtendVote {
    const message = createBaseResponseExtendVote();
    message.voteExtension = object.voteExtension ?? new Uint8Array();
    return message;
  },
  fromAmino(object: ResponseExtendVoteAmino): ResponseExtendVote {
    return {
      voteExtension: object.vote_extension
    };
  },
  toAmino(message: ResponseExtendVote): ResponseExtendVoteAmino {
    const obj: any = {};
    obj.vote_extension = message.voteExtension;
    return obj;
  },
  fromAminoMsg(object: ResponseExtendVoteAminoMsg): ResponseExtendVote {
    return ResponseExtendVote.fromAmino(object.value);
  },
  fromProtoMsg(message: ResponseExtendVoteProtoMsg): ResponseExtendVote {
    return ResponseExtendVote.decode(message.value);
  },
  toProto(message: ResponseExtendVote): Uint8Array {
    return ResponseExtendVote.encode(message).finish();
  },
  toProtoMsg(message: ResponseExtendVote): ResponseExtendVoteProtoMsg {
    return {
      typeUrl: "/tendermint.abci.ResponseExtendVote",
      value: ResponseExtendVote.encode(message).finish()
    };
  }
};
function createBaseResponseVerifyVoteExtension(): ResponseVerifyVoteExtension {
  return {
    status: 0
  };
}
export const ResponseVerifyVoteExtension = {
  typeUrl: "/tendermint.abci.ResponseVerifyVoteExtension",
  encode(message: ResponseVerifyVoteExtension, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.status !== 0) {
      writer.uint32(8).int32(message.status);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): ResponseVerifyVoteExtension {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseResponseVerifyVoteExtension();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.status = (reader.int32() as any);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<ResponseVerifyVoteExtension>): ResponseVerifyVoteExtension {
    const message = createBaseResponseVerifyVoteExtension();
    message.status = object.status ?? 0;
    return message;
  },
  fromAmino(object: ResponseVerifyVoteExtensionAmino): ResponseVerifyVoteExtension {
    return {
      status: isSet(object.status) ? responseVerifyVoteExtension_VerifyStatusFromJSON(object.status) : -1
    };
  },
  toAmino(message: ResponseVerifyVoteExtension): ResponseVerifyVoteExtensionAmino {
    const obj: any = {};
    obj.status = message.status;
    return obj;
  },
  fromAminoMsg(object: ResponseVerifyVoteExtensionAminoMsg): ResponseVerifyVoteExtension {
    return ResponseVerifyVoteExtension.fromAmino(object.value);
  },
  fromProtoMsg(message: ResponseVerifyVoteExtensionProtoMsg): ResponseVerifyVoteExtension {
    return ResponseVerifyVoteExtension.decode(message.value);
  },
  toProto(message: ResponseVerifyVoteExtension): Uint8Array {
    return ResponseVerifyVoteExtension.encode(message).finish();
  },
  toProtoMsg(message: ResponseVerifyVoteExtension): ResponseVerifyVoteExtensionProtoMsg {
    return {
      typeUrl: "/tendermint.abci.ResponseVerifyVoteExtension",
      value: ResponseVerifyVoteExtension.encode(message).finish()
    };
  }
};
function createBaseResponseFinalizeBlock(): ResponseFinalizeBlock {
  return {
    events: [],
    txResults: [],
    validatorUpdates: [],
    consensusParamUpdates: ConsensusParams.fromPartial({}),
    appHash: new Uint8Array()
  };
}
export const ResponseFinalizeBlock = {
  typeUrl: "/tendermint.abci.ResponseFinalizeBlock",
  encode(message: ResponseFinalizeBlock, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.events) {
      Event.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.txResults) {
      ExecTxResult.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.validatorUpdates) {
      ValidatorUpdate.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    if (message.consensusParamUpdates !== undefined) {
      ConsensusParams.encode(message.consensusParamUpdates, writer.uint32(34).fork()).ldelim();
    }
    if (message.appHash.length !== 0) {
      writer.uint32(42).bytes(message.appHash);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): ResponseFinalizeBlock {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseResponseFinalizeBlock();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.events.push(Event.decode(reader, reader.uint32()));
          break;
        case 2:
          message.txResults.push(ExecTxResult.decode(reader, reader.uint32()));
          break;
        case 3:
          message.validatorUpdates.push(ValidatorUpdate.decode(reader, reader.uint32()));
          break;
        case 4:
          message.consensusParamUpdates = ConsensusParams.decode(reader, reader.uint32());
          break;
        case 5:
          message.appHash = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<ResponseFinalizeBlock>): ResponseFinalizeBlock {
    const message = createBaseResponseFinalizeBlock();
    message.events = object.events?.map(e => Event.fromPartial(e)) || [];
    message.txResults = object.txResults?.map(e => ExecTxResult.fromPartial(e)) || [];
    message.validatorUpdates = object.validatorUpdates?.map(e => ValidatorUpdate.fromPartial(e)) || [];
    message.consensusParamUpdates = object.consensusParamUpdates !== undefined && object.consensusParamUpdates !== null ? ConsensusParams.fromPartial(object.consensusParamUpdates) : undefined;
    message.appHash = object.appHash ?? new Uint8Array();
    return message;
  },
  fromAmino(object: ResponseFinalizeBlockAmino): ResponseFinalizeBlock {
    return {
      events: Array.isArray(object?.events) ? object.events.map((e: any) => Event.fromAmino(e)) : [],
      txResults: Array.isArray(object?.tx_results) ? object.tx_results.map((e: any) => ExecTxResult.fromAmino(e)) : [],
      validatorUpdates: Array.isArray(object?.validator_updates) ? object.validator_updates.map((e: any) => ValidatorUpdate.fromAmino(e)) : [],
      consensusParamUpdates: object?.consensus_param_updates ? ConsensusParams.fromAmino(object.consensus_param_updates) : undefined,
      appHash: object.app_hash
    };
  },
  toAmino(message: ResponseFinalizeBlock): ResponseFinalizeBlockAmino {
    const obj: any = {};
    if (message.events) {
      obj.events = message.events.map(e => e ? Event.toAmino(e) : undefined);
    } else {
      obj.events = [];
    }
    if (message.txResults) {
      obj.tx_results = message.txResults.map(e => e ? ExecTxResult.toAmino(e) : undefined);
    } else {
      obj.tx_results = [];
    }
    if (message.validatorUpdates) {
      obj.validator_updates = message.validatorUpdates.map(e => e ? ValidatorUpdate.toAmino(e) : undefined);
    } else {
      obj.validator_updates = [];
    }
    obj.consensus_param_updates = message.consensusParamUpdates ? ConsensusParams.toAmino(message.consensusParamUpdates) : undefined;
    obj.app_hash = message.appHash;
    return obj;
  },
  fromAminoMsg(object: ResponseFinalizeBlockAminoMsg): ResponseFinalizeBlock {
    return ResponseFinalizeBlock.fromAmino(object.value);
  },
  fromProtoMsg(message: ResponseFinalizeBlockProtoMsg): ResponseFinalizeBlock {
    return ResponseFinalizeBlock.decode(message.value);
  },
  toProto(message: ResponseFinalizeBlock): Uint8Array {
    return ResponseFinalizeBlock.encode(message).finish();
  },
  toProtoMsg(message: ResponseFinalizeBlock): ResponseFinalizeBlockProtoMsg {
    return {
      typeUrl: "/tendermint.abci.ResponseFinalizeBlock",
      value: ResponseFinalizeBlock.encode(message).finish()
    };
  }
};
function createBaseCommitInfo(): CommitInfo {
  return {
    round: 0,
    votes: []
  };
}
export const CommitInfo = {
  typeUrl: "/tendermint.abci.CommitInfo",
  encode(message: CommitInfo, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.round !== 0) {
      writer.uint32(8).int32(message.round);
    }
    for (const v of message.votes) {
      VoteInfo.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): CommitInfo {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCommitInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.round = reader.int32();
          break;
        case 2:
          message.votes.push(VoteInfo.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<CommitInfo>): CommitInfo {
    const message = createBaseCommitInfo();
    message.round = object.round ?? 0;
    message.votes = object.votes?.map(e => VoteInfo.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: CommitInfoAmino): CommitInfo {
    return {
      round: object.round,
      votes: Array.isArray(object?.votes) ? object.votes.map((e: any) => VoteInfo.fromAmino(e)) : []
    };
  },
  toAmino(message: CommitInfo): CommitInfoAmino {
    const obj: any = {};
    obj.round = message.round;
    if (message.votes) {
      obj.votes = message.votes.map(e => e ? VoteInfo.toAmino(e) : undefined);
    } else {
      obj.votes = [];
    }
    return obj;
  },
  fromAminoMsg(object: CommitInfoAminoMsg): CommitInfo {
    return CommitInfo.fromAmino(object.value);
  },
  fromProtoMsg(message: CommitInfoProtoMsg): CommitInfo {
    return CommitInfo.decode(message.value);
  },
  toProto(message: CommitInfo): Uint8Array {
    return CommitInfo.encode(message).finish();
  },
  toProtoMsg(message: CommitInfo): CommitInfoProtoMsg {
    return {
      typeUrl: "/tendermint.abci.CommitInfo",
      value: CommitInfo.encode(message).finish()
    };
  }
};
function createBaseExtendedCommitInfo(): ExtendedCommitInfo {
  return {
    round: 0,
    votes: []
  };
}
export const ExtendedCommitInfo = {
  typeUrl: "/tendermint.abci.ExtendedCommitInfo",
  encode(message: ExtendedCommitInfo, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.round !== 0) {
      writer.uint32(8).int32(message.round);
    }
    for (const v of message.votes) {
      ExtendedVoteInfo.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): ExtendedCommitInfo {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseExtendedCommitInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.round = reader.int32();
          break;
        case 2:
          message.votes.push(ExtendedVoteInfo.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<ExtendedCommitInfo>): ExtendedCommitInfo {
    const message = createBaseExtendedCommitInfo();
    message.round = object.round ?? 0;
    message.votes = object.votes?.map(e => ExtendedVoteInfo.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: ExtendedCommitInfoAmino): ExtendedCommitInfo {
    return {
      round: object.round,
      votes: Array.isArray(object?.votes) ? object.votes.map((e: any) => ExtendedVoteInfo.fromAmino(e)) : []
    };
  },
  toAmino(message: ExtendedCommitInfo): ExtendedCommitInfoAmino {
    const obj: any = {};
    obj.round = message.round;
    if (message.votes) {
      obj.votes = message.votes.map(e => e ? ExtendedVoteInfo.toAmino(e) : undefined);
    } else {
      obj.votes = [];
    }
    return obj;
  },
  fromAminoMsg(object: ExtendedCommitInfoAminoMsg): ExtendedCommitInfo {
    return ExtendedCommitInfo.fromAmino(object.value);
  },
  fromProtoMsg(message: ExtendedCommitInfoProtoMsg): ExtendedCommitInfo {
    return ExtendedCommitInfo.decode(message.value);
  },
  toProto(message: ExtendedCommitInfo): Uint8Array {
    return ExtendedCommitInfo.encode(message).finish();
  },
  toProtoMsg(message: ExtendedCommitInfo): ExtendedCommitInfoProtoMsg {
    return {
      typeUrl: "/tendermint.abci.ExtendedCommitInfo",
      value: ExtendedCommitInfo.encode(message).finish()
    };
  }
};
function createBaseEvent(): Event {
  return {
    type: "",
    attributes: []
  };
}
export const Event = {
  typeUrl: "/tendermint.abci.Event",
  encode(message: Event, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.type !== "") {
      writer.uint32(10).string(message.type);
    }
    for (const v of message.attributes) {
      EventAttribute.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): Event {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEvent();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.type = reader.string();
          break;
        case 2:
          message.attributes.push(EventAttribute.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<Event>): Event {
    const message = createBaseEvent();
    message.type = object.type ?? "";
    message.attributes = object.attributes?.map(e => EventAttribute.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: EventAmino): Event {
    return {
      type: object.type,
      attributes: Array.isArray(object?.attributes) ? object.attributes.map((e: any) => EventAttribute.fromAmino(e)) : []
    };
  },
  toAmino(message: Event): EventAmino {
    const obj: any = {};
    obj.type = message.type;
    if (message.attributes) {
      obj.attributes = message.attributes.map(e => e ? EventAttribute.toAmino(e) : undefined);
    } else {
      obj.attributes = [];
    }
    return obj;
  },
  fromAminoMsg(object: EventAminoMsg): Event {
    return Event.fromAmino(object.value);
  },
  fromProtoMsg(message: EventProtoMsg): Event {
    return Event.decode(message.value);
  },
  toProto(message: Event): Uint8Array {
    return Event.encode(message).finish();
  },
  toProtoMsg(message: Event): EventProtoMsg {
    return {
      typeUrl: "/tendermint.abci.Event",
      value: Event.encode(message).finish()
    };
  }
};
function createBaseEventAttribute(): EventAttribute {
  return {
    key: "",
    value: "",
    index: false
  };
}
export const EventAttribute = {
  typeUrl: "/tendermint.abci.EventAttribute",
  encode(message: EventAttribute, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== "") {
      writer.uint32(18).string(message.value);
    }
    if (message.index === true) {
      writer.uint32(24).bool(message.index);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): EventAttribute {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventAttribute();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = reader.string();
          break;
        case 2:
          message.value = reader.string();
          break;
        case 3:
          message.index = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<EventAttribute>): EventAttribute {
    const message = createBaseEventAttribute();
    message.key = object.key ?? "";
    message.value = object.value ?? "";
    message.index = object.index ?? false;
    return message;
  },
  fromAmino(object: EventAttributeAmino): EventAttribute {
    return {
      key: object.key,
      value: object.value,
      index: object.index
    };
  },
  toAmino(message: EventAttribute): EventAttributeAmino {
    const obj: any = {};
    obj.key = message.key;
    obj.value = message.value;
    obj.index = message.index;
    return obj;
  },
  fromAminoMsg(object: EventAttributeAminoMsg): EventAttribute {
    return EventAttribute.fromAmino(object.value);
  },
  fromProtoMsg(message: EventAttributeProtoMsg): EventAttribute {
    return EventAttribute.decode(message.value);
  },
  toProto(message: EventAttribute): Uint8Array {
    return EventAttribute.encode(message).finish();
  },
  toProtoMsg(message: EventAttribute): EventAttributeProtoMsg {
    return {
      typeUrl: "/tendermint.abci.EventAttribute",
      value: EventAttribute.encode(message).finish()
    };
  }
};
function createBaseExecTxResult(): ExecTxResult {
  return {
    code: 0,
    data: new Uint8Array(),
    log: "",
    info: "",
    gasWanted: Long.ZERO,
    gasUsed: Long.ZERO,
    events: [],
    codespace: ""
  };
}
export const ExecTxResult = {
  typeUrl: "/tendermint.abci.ExecTxResult",
  encode(message: ExecTxResult, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.code !== 0) {
      writer.uint32(8).uint32(message.code);
    }
    if (message.data.length !== 0) {
      writer.uint32(18).bytes(message.data);
    }
    if (message.log !== "") {
      writer.uint32(26).string(message.log);
    }
    if (message.info !== "") {
      writer.uint32(34).string(message.info);
    }
    if (!message.gasWanted.isZero()) {
      writer.uint32(40).int64(message.gasWanted);
    }
    if (!message.gasUsed.isZero()) {
      writer.uint32(48).int64(message.gasUsed);
    }
    for (const v of message.events) {
      Event.encode(v!, writer.uint32(58).fork()).ldelim();
    }
    if (message.codespace !== "") {
      writer.uint32(66).string(message.codespace);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): ExecTxResult {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseExecTxResult();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.code = reader.uint32();
          break;
        case 2:
          message.data = reader.bytes();
          break;
        case 3:
          message.log = reader.string();
          break;
        case 4:
          message.info = reader.string();
          break;
        case 5:
          message.gasWanted = (reader.int64() as Long);
          break;
        case 6:
          message.gasUsed = (reader.int64() as Long);
          break;
        case 7:
          message.events.push(Event.decode(reader, reader.uint32()));
          break;
        case 8:
          message.codespace = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<ExecTxResult>): ExecTxResult {
    const message = createBaseExecTxResult();
    message.code = object.code ?? 0;
    message.data = object.data ?? new Uint8Array();
    message.log = object.log ?? "";
    message.info = object.info ?? "";
    message.gasWanted = object.gasWanted !== undefined && object.gasWanted !== null ? Long.fromValue(object.gasWanted) : Long.ZERO;
    message.gasUsed = object.gasUsed !== undefined && object.gasUsed !== null ? Long.fromValue(object.gasUsed) : Long.ZERO;
    message.events = object.events?.map(e => Event.fromPartial(e)) || [];
    message.codespace = object.codespace ?? "";
    return message;
  },
  fromAmino(object: ExecTxResultAmino): ExecTxResult {
    return {
      code: object.code,
      data: object.data,
      log: object.log,
      info: object.info,
      gasWanted: Long.fromString(object.gas_wanted),
      gasUsed: Long.fromString(object.gas_used),
      events: Array.isArray(object?.events) ? object.events.map((e: any) => Event.fromAmino(e)) : [],
      codespace: object.codespace
    };
  },
  toAmino(message: ExecTxResult): ExecTxResultAmino {
    const obj: any = {};
    obj.code = message.code;
    obj.data = message.data;
    obj.log = message.log;
    obj.info = message.info;
    obj.gas_wanted = message.gasWanted ? message.gasWanted.toString() : undefined;
    obj.gas_used = message.gasUsed ? message.gasUsed.toString() : undefined;
    if (message.events) {
      obj.events = message.events.map(e => e ? Event.toAmino(e) : undefined);
    } else {
      obj.events = [];
    }
    obj.codespace = message.codespace;
    return obj;
  },
  fromAminoMsg(object: ExecTxResultAminoMsg): ExecTxResult {
    return ExecTxResult.fromAmino(object.value);
  },
  fromProtoMsg(message: ExecTxResultProtoMsg): ExecTxResult {
    return ExecTxResult.decode(message.value);
  },
  toProto(message: ExecTxResult): Uint8Array {
    return ExecTxResult.encode(message).finish();
  },
  toProtoMsg(message: ExecTxResult): ExecTxResultProtoMsg {
    return {
      typeUrl: "/tendermint.abci.ExecTxResult",
      value: ExecTxResult.encode(message).finish()
    };
  }
};
function createBaseTxResult(): TxResult {
  return {
    height: Long.ZERO,
    index: 0,
    tx: new Uint8Array(),
    result: ExecTxResult.fromPartial({})
  };
}
export const TxResult = {
  typeUrl: "/tendermint.abci.TxResult",
  encode(message: TxResult, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.height.isZero()) {
      writer.uint32(8).int64(message.height);
    }
    if (message.index !== 0) {
      writer.uint32(16).uint32(message.index);
    }
    if (message.tx.length !== 0) {
      writer.uint32(26).bytes(message.tx);
    }
    if (message.result !== undefined) {
      ExecTxResult.encode(message.result, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): TxResult {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTxResult();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.height = (reader.int64() as Long);
          break;
        case 2:
          message.index = reader.uint32();
          break;
        case 3:
          message.tx = reader.bytes();
          break;
        case 4:
          message.result = ExecTxResult.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<TxResult>): TxResult {
    const message = createBaseTxResult();
    message.height = object.height !== undefined && object.height !== null ? Long.fromValue(object.height) : Long.ZERO;
    message.index = object.index ?? 0;
    message.tx = object.tx ?? new Uint8Array();
    message.result = object.result !== undefined && object.result !== null ? ExecTxResult.fromPartial(object.result) : undefined;
    return message;
  },
  fromAmino(object: TxResultAmino): TxResult {
    return {
      height: Long.fromString(object.height),
      index: object.index,
      tx: object.tx,
      result: object?.result ? ExecTxResult.fromAmino(object.result) : undefined
    };
  },
  toAmino(message: TxResult): TxResultAmino {
    const obj: any = {};
    obj.height = message.height ? message.height.toString() : undefined;
    obj.index = message.index;
    obj.tx = message.tx;
    obj.result = message.result ? ExecTxResult.toAmino(message.result) : undefined;
    return obj;
  },
  fromAminoMsg(object: TxResultAminoMsg): TxResult {
    return TxResult.fromAmino(object.value);
  },
  fromProtoMsg(message: TxResultProtoMsg): TxResult {
    return TxResult.decode(message.value);
  },
  toProto(message: TxResult): Uint8Array {
    return TxResult.encode(message).finish();
  },
  toProtoMsg(message: TxResult): TxResultProtoMsg {
    return {
      typeUrl: "/tendermint.abci.TxResult",
      value: TxResult.encode(message).finish()
    };
  }
};
function createBaseValidator(): Validator {
  return {
    address: new Uint8Array(),
    power: Long.ZERO
  };
}
export const Validator = {
  typeUrl: "/tendermint.abci.Validator",
  encode(message: Validator, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.address.length !== 0) {
      writer.uint32(10).bytes(message.address);
    }
    if (!message.power.isZero()) {
      writer.uint32(24).int64(message.power);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): Validator {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseValidator();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.bytes();
          break;
        case 3:
          message.power = (reader.int64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<Validator>): Validator {
    const message = createBaseValidator();
    message.address = object.address ?? new Uint8Array();
    message.power = object.power !== undefined && object.power !== null ? Long.fromValue(object.power) : Long.ZERO;
    return message;
  },
  fromAmino(object: ValidatorAmino): Validator {
    return {
      address: object.address,
      power: Long.fromString(object.power)
    };
  },
  toAmino(message: Validator): ValidatorAmino {
    const obj: any = {};
    obj.address = message.address;
    obj.power = message.power ? message.power.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: ValidatorAminoMsg): Validator {
    return Validator.fromAmino(object.value);
  },
  fromProtoMsg(message: ValidatorProtoMsg): Validator {
    return Validator.decode(message.value);
  },
  toProto(message: Validator): Uint8Array {
    return Validator.encode(message).finish();
  },
  toProtoMsg(message: Validator): ValidatorProtoMsg {
    return {
      typeUrl: "/tendermint.abci.Validator",
      value: Validator.encode(message).finish()
    };
  }
};
function createBaseValidatorUpdate(): ValidatorUpdate {
  return {
    pubKey: PublicKey.fromPartial({}),
    power: Long.ZERO
  };
}
export const ValidatorUpdate = {
  typeUrl: "/tendermint.abci.ValidatorUpdate",
  encode(message: ValidatorUpdate, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pubKey !== undefined) {
      PublicKey.encode(message.pubKey, writer.uint32(10).fork()).ldelim();
    }
    if (!message.power.isZero()) {
      writer.uint32(16).int64(message.power);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): ValidatorUpdate {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseValidatorUpdate();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pubKey = PublicKey.decode(reader, reader.uint32());
          break;
        case 2:
          message.power = (reader.int64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<ValidatorUpdate>): ValidatorUpdate {
    const message = createBaseValidatorUpdate();
    message.pubKey = object.pubKey !== undefined && object.pubKey !== null ? PublicKey.fromPartial(object.pubKey) : undefined;
    message.power = object.power !== undefined && object.power !== null ? Long.fromValue(object.power) : Long.ZERO;
    return message;
  },
  fromAmino(object: ValidatorUpdateAmino): ValidatorUpdate {
    return {
      pubKey: object?.pub_key ? PublicKey.fromAmino(object.pub_key) : undefined,
      power: Long.fromString(object.power)
    };
  },
  toAmino(message: ValidatorUpdate): ValidatorUpdateAmino {
    const obj: any = {};
    obj.pub_key = message.pubKey ? PublicKey.toAmino(message.pubKey) : undefined;
    obj.power = message.power ? message.power.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: ValidatorUpdateAminoMsg): ValidatorUpdate {
    return ValidatorUpdate.fromAmino(object.value);
  },
  fromProtoMsg(message: ValidatorUpdateProtoMsg): ValidatorUpdate {
    return ValidatorUpdate.decode(message.value);
  },
  toProto(message: ValidatorUpdate): Uint8Array {
    return ValidatorUpdate.encode(message).finish();
  },
  toProtoMsg(message: ValidatorUpdate): ValidatorUpdateProtoMsg {
    return {
      typeUrl: "/tendermint.abci.ValidatorUpdate",
      value: ValidatorUpdate.encode(message).finish()
    };
  }
};
function createBaseVoteInfo(): VoteInfo {
  return {
    validator: Validator.fromPartial({}),
    blockIdFlag: 0
  };
}
export const VoteInfo = {
  typeUrl: "/tendermint.abci.VoteInfo",
  encode(message: VoteInfo, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.validator !== undefined) {
      Validator.encode(message.validator, writer.uint32(10).fork()).ldelim();
    }
    if (message.blockIdFlag !== 0) {
      writer.uint32(24).int32(message.blockIdFlag);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): VoteInfo {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseVoteInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.validator = Validator.decode(reader, reader.uint32());
          break;
        case 3:
          message.blockIdFlag = (reader.int32() as any);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<VoteInfo>): VoteInfo {
    const message = createBaseVoteInfo();
    message.validator = object.validator !== undefined && object.validator !== null ? Validator.fromPartial(object.validator) : undefined;
    message.blockIdFlag = object.blockIdFlag ?? 0;
    return message;
  },
  fromAmino(object: VoteInfoAmino): VoteInfo {
    return {
      validator: object?.validator ? Validator.fromAmino(object.validator) : undefined,
      blockIdFlag: isSet(object.block_id_flag) ? blockIDFlagFromJSON(object.block_id_flag) : -1
    };
  },
  toAmino(message: VoteInfo): VoteInfoAmino {
    const obj: any = {};
    obj.validator = message.validator ? Validator.toAmino(message.validator) : undefined;
    obj.block_id_flag = message.blockIdFlag;
    return obj;
  },
  fromAminoMsg(object: VoteInfoAminoMsg): VoteInfo {
    return VoteInfo.fromAmino(object.value);
  },
  fromProtoMsg(message: VoteInfoProtoMsg): VoteInfo {
    return VoteInfo.decode(message.value);
  },
  toProto(message: VoteInfo): Uint8Array {
    return VoteInfo.encode(message).finish();
  },
  toProtoMsg(message: VoteInfo): VoteInfoProtoMsg {
    return {
      typeUrl: "/tendermint.abci.VoteInfo",
      value: VoteInfo.encode(message).finish()
    };
  }
};
function createBaseExtendedVoteInfo(): ExtendedVoteInfo {
  return {
    validator: Validator.fromPartial({}),
    voteExtension: new Uint8Array(),
    extensionSignature: new Uint8Array(),
    blockIdFlag: 0
  };
}
export const ExtendedVoteInfo = {
  typeUrl: "/tendermint.abci.ExtendedVoteInfo",
  encode(message: ExtendedVoteInfo, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.validator !== undefined) {
      Validator.encode(message.validator, writer.uint32(10).fork()).ldelim();
    }
    if (message.voteExtension.length !== 0) {
      writer.uint32(26).bytes(message.voteExtension);
    }
    if (message.extensionSignature.length !== 0) {
      writer.uint32(34).bytes(message.extensionSignature);
    }
    if (message.blockIdFlag !== 0) {
      writer.uint32(40).int32(message.blockIdFlag);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): ExtendedVoteInfo {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseExtendedVoteInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.validator = Validator.decode(reader, reader.uint32());
          break;
        case 3:
          message.voteExtension = reader.bytes();
          break;
        case 4:
          message.extensionSignature = reader.bytes();
          break;
        case 5:
          message.blockIdFlag = (reader.int32() as any);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<ExtendedVoteInfo>): ExtendedVoteInfo {
    const message = createBaseExtendedVoteInfo();
    message.validator = object.validator !== undefined && object.validator !== null ? Validator.fromPartial(object.validator) : undefined;
    message.voteExtension = object.voteExtension ?? new Uint8Array();
    message.extensionSignature = object.extensionSignature ?? new Uint8Array();
    message.blockIdFlag = object.blockIdFlag ?? 0;
    return message;
  },
  fromAmino(object: ExtendedVoteInfoAmino): ExtendedVoteInfo {
    return {
      validator: object?.validator ? Validator.fromAmino(object.validator) : undefined,
      voteExtension: object.vote_extension,
      extensionSignature: object.extension_signature,
      blockIdFlag: isSet(object.block_id_flag) ? blockIDFlagFromJSON(object.block_id_flag) : -1
    };
  },
  toAmino(message: ExtendedVoteInfo): ExtendedVoteInfoAmino {
    const obj: any = {};
    obj.validator = message.validator ? Validator.toAmino(message.validator) : undefined;
    obj.vote_extension = message.voteExtension;
    obj.extension_signature = message.extensionSignature;
    obj.block_id_flag = message.blockIdFlag;
    return obj;
  },
  fromAminoMsg(object: ExtendedVoteInfoAminoMsg): ExtendedVoteInfo {
    return ExtendedVoteInfo.fromAmino(object.value);
  },
  fromProtoMsg(message: ExtendedVoteInfoProtoMsg): ExtendedVoteInfo {
    return ExtendedVoteInfo.decode(message.value);
  },
  toProto(message: ExtendedVoteInfo): Uint8Array {
    return ExtendedVoteInfo.encode(message).finish();
  },
  toProtoMsg(message: ExtendedVoteInfo): ExtendedVoteInfoProtoMsg {
    return {
      typeUrl: "/tendermint.abci.ExtendedVoteInfo",
      value: ExtendedVoteInfo.encode(message).finish()
    };
  }
};
function createBaseMisbehavior(): Misbehavior {
  return {
    type: 0,
    validator: Validator.fromPartial({}),
    height: Long.ZERO,
    time: new Date(),
    totalVotingPower: Long.ZERO
  };
}
export const Misbehavior = {
  typeUrl: "/tendermint.abci.Misbehavior",
  encode(message: Misbehavior, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.type !== 0) {
      writer.uint32(8).int32(message.type);
    }
    if (message.validator !== undefined) {
      Validator.encode(message.validator, writer.uint32(18).fork()).ldelim();
    }
    if (!message.height.isZero()) {
      writer.uint32(24).int64(message.height);
    }
    if (message.time !== undefined) {
      Timestamp.encode(toTimestamp(message.time), writer.uint32(34).fork()).ldelim();
    }
    if (!message.totalVotingPower.isZero()) {
      writer.uint32(40).int64(message.totalVotingPower);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): Misbehavior {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMisbehavior();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.type = (reader.int32() as any);
          break;
        case 2:
          message.validator = Validator.decode(reader, reader.uint32());
          break;
        case 3:
          message.height = (reader.int64() as Long);
          break;
        case 4:
          message.time = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;
        case 5:
          message.totalVotingPower = (reader.int64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<Misbehavior>): Misbehavior {
    const message = createBaseMisbehavior();
    message.type = object.type ?? 0;
    message.validator = object.validator !== undefined && object.validator !== null ? Validator.fromPartial(object.validator) : undefined;
    message.height = object.height !== undefined && object.height !== null ? Long.fromValue(object.height) : Long.ZERO;
    message.time = object.time ?? undefined;
    message.totalVotingPower = object.totalVotingPower !== undefined && object.totalVotingPower !== null ? Long.fromValue(object.totalVotingPower) : Long.ZERO;
    return message;
  },
  fromAmino(object: MisbehaviorAmino): Misbehavior {
    return {
      type: isSet(object.type) ? misbehaviorTypeFromJSON(object.type) : -1,
      validator: object?.validator ? Validator.fromAmino(object.validator) : undefined,
      height: Long.fromString(object.height),
      time: object.time,
      totalVotingPower: Long.fromString(object.total_voting_power)
    };
  },
  toAmino(message: Misbehavior): MisbehaviorAmino {
    const obj: any = {};
    obj.type = message.type;
    obj.validator = message.validator ? Validator.toAmino(message.validator) : undefined;
    obj.height = message.height ? message.height.toString() : undefined;
    obj.time = message.time;
    obj.total_voting_power = message.totalVotingPower ? message.totalVotingPower.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: MisbehaviorAminoMsg): Misbehavior {
    return Misbehavior.fromAmino(object.value);
  },
  fromProtoMsg(message: MisbehaviorProtoMsg): Misbehavior {
    return Misbehavior.decode(message.value);
  },
  toProto(message: Misbehavior): Uint8Array {
    return Misbehavior.encode(message).finish();
  },
  toProtoMsg(message: Misbehavior): MisbehaviorProtoMsg {
    return {
      typeUrl: "/tendermint.abci.Misbehavior",
      value: Misbehavior.encode(message).finish()
    };
  }
};
function createBaseSnapshot(): Snapshot {
  return {
    height: Long.UZERO,
    format: 0,
    chunks: 0,
    hash: new Uint8Array(),
    metadata: new Uint8Array()
  };
}
export const Snapshot = {
  typeUrl: "/tendermint.abci.Snapshot",
  encode(message: Snapshot, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.height.isZero()) {
      writer.uint32(8).uint64(message.height);
    }
    if (message.format !== 0) {
      writer.uint32(16).uint32(message.format);
    }
    if (message.chunks !== 0) {
      writer.uint32(24).uint32(message.chunks);
    }
    if (message.hash.length !== 0) {
      writer.uint32(34).bytes(message.hash);
    }
    if (message.metadata.length !== 0) {
      writer.uint32(42).bytes(message.metadata);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): Snapshot {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSnapshot();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.height = (reader.uint64() as Long);
          break;
        case 2:
          message.format = reader.uint32();
          break;
        case 3:
          message.chunks = reader.uint32();
          break;
        case 4:
          message.hash = reader.bytes();
          break;
        case 5:
          message.metadata = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<Snapshot>): Snapshot {
    const message = createBaseSnapshot();
    message.height = object.height !== undefined && object.height !== null ? Long.fromValue(object.height) : Long.UZERO;
    message.format = object.format ?? 0;
    message.chunks = object.chunks ?? 0;
    message.hash = object.hash ?? new Uint8Array();
    message.metadata = object.metadata ?? new Uint8Array();
    return message;
  },
  fromAmino(object: SnapshotAmino): Snapshot {
    return {
      height: Long.fromString(object.height),
      format: object.format,
      chunks: object.chunks,
      hash: object.hash,
      metadata: object.metadata
    };
  },
  toAmino(message: Snapshot): SnapshotAmino {
    const obj: any = {};
    obj.height = message.height ? message.height.toString() : undefined;
    obj.format = message.format;
    obj.chunks = message.chunks;
    obj.hash = message.hash;
    obj.metadata = message.metadata;
    return obj;
  },
  fromAminoMsg(object: SnapshotAminoMsg): Snapshot {
    return Snapshot.fromAmino(object.value);
  },
  fromProtoMsg(message: SnapshotProtoMsg): Snapshot {
    return Snapshot.decode(message.value);
  },
  toProto(message: Snapshot): Uint8Array {
    return Snapshot.encode(message).finish();
  },
  toProtoMsg(message: Snapshot): SnapshotProtoMsg {
    return {
      typeUrl: "/tendermint.abci.Snapshot",
      value: Snapshot.encode(message).finish()
    };
  }
};