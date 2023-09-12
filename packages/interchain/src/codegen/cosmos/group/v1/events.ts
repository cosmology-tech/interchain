import { ProposalExecutorResult, ProposalStatus, TallyResult, TallyResultAmino, TallyResultSDKType, proposalExecutorResultFromJSON, proposalStatusFromJSON } from "./types";
import { Long, DeepPartial, isSet } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
/** EventCreateGroup is an event emitted when a group is created. */
export interface EventCreateGroup {
  /** group_id is the unique ID of the group. */
  groupId: Long;
}
export interface EventCreateGroupProtoMsg {
  typeUrl: "/cosmos.group.v1.EventCreateGroup";
  value: Uint8Array;
}
/** EventCreateGroup is an event emitted when a group is created. */
export interface EventCreateGroupAmino {
  /** group_id is the unique ID of the group. */
  group_id: string;
}
export interface EventCreateGroupAminoMsg {
  type: "cosmos-sdk/EventCreateGroup";
  value: EventCreateGroupAmino;
}
/** EventCreateGroup is an event emitted when a group is created. */
export interface EventCreateGroupSDKType {
  group_id: Long;
}
/** EventUpdateGroup is an event emitted when a group is updated. */
export interface EventUpdateGroup {
  /** group_id is the unique ID of the group. */
  groupId: Long;
}
export interface EventUpdateGroupProtoMsg {
  typeUrl: "/cosmos.group.v1.EventUpdateGroup";
  value: Uint8Array;
}
/** EventUpdateGroup is an event emitted when a group is updated. */
export interface EventUpdateGroupAmino {
  /** group_id is the unique ID of the group. */
  group_id: string;
}
export interface EventUpdateGroupAminoMsg {
  type: "cosmos-sdk/EventUpdateGroup";
  value: EventUpdateGroupAmino;
}
/** EventUpdateGroup is an event emitted when a group is updated. */
export interface EventUpdateGroupSDKType {
  group_id: Long;
}
/** EventCreateGroupPolicy is an event emitted when a group policy is created. */
export interface EventCreateGroupPolicy {
  /** address is the account address of the group policy. */
  address: string;
}
export interface EventCreateGroupPolicyProtoMsg {
  typeUrl: "/cosmos.group.v1.EventCreateGroupPolicy";
  value: Uint8Array;
}
/** EventCreateGroupPolicy is an event emitted when a group policy is created. */
export interface EventCreateGroupPolicyAmino {
  /** address is the account address of the group policy. */
  address: string;
}
export interface EventCreateGroupPolicyAminoMsg {
  type: "cosmos-sdk/EventCreateGroupPolicy";
  value: EventCreateGroupPolicyAmino;
}
/** EventCreateGroupPolicy is an event emitted when a group policy is created. */
export interface EventCreateGroupPolicySDKType {
  address: string;
}
/** EventUpdateGroupPolicy is an event emitted when a group policy is updated. */
export interface EventUpdateGroupPolicy {
  /** address is the account address of the group policy. */
  address: string;
}
export interface EventUpdateGroupPolicyProtoMsg {
  typeUrl: "/cosmos.group.v1.EventUpdateGroupPolicy";
  value: Uint8Array;
}
/** EventUpdateGroupPolicy is an event emitted when a group policy is updated. */
export interface EventUpdateGroupPolicyAmino {
  /** address is the account address of the group policy. */
  address: string;
}
export interface EventUpdateGroupPolicyAminoMsg {
  type: "cosmos-sdk/EventUpdateGroupPolicy";
  value: EventUpdateGroupPolicyAmino;
}
/** EventUpdateGroupPolicy is an event emitted when a group policy is updated. */
export interface EventUpdateGroupPolicySDKType {
  address: string;
}
/** EventSubmitProposal is an event emitted when a proposal is created. */
export interface EventSubmitProposal {
  /** proposal_id is the unique ID of the proposal. */
  proposalId: Long;
}
export interface EventSubmitProposalProtoMsg {
  typeUrl: "/cosmos.group.v1.EventSubmitProposal";
  value: Uint8Array;
}
/** EventSubmitProposal is an event emitted when a proposal is created. */
export interface EventSubmitProposalAmino {
  /** proposal_id is the unique ID of the proposal. */
  proposal_id: string;
}
export interface EventSubmitProposalAminoMsg {
  type: "cosmos-sdk/EventSubmitProposal";
  value: EventSubmitProposalAmino;
}
/** EventSubmitProposal is an event emitted when a proposal is created. */
export interface EventSubmitProposalSDKType {
  proposal_id: Long;
}
/** EventWithdrawProposal is an event emitted when a proposal is withdrawn. */
export interface EventWithdrawProposal {
  /** proposal_id is the unique ID of the proposal. */
  proposalId: Long;
}
export interface EventWithdrawProposalProtoMsg {
  typeUrl: "/cosmos.group.v1.EventWithdrawProposal";
  value: Uint8Array;
}
/** EventWithdrawProposal is an event emitted when a proposal is withdrawn. */
export interface EventWithdrawProposalAmino {
  /** proposal_id is the unique ID of the proposal. */
  proposal_id: string;
}
export interface EventWithdrawProposalAminoMsg {
  type: "cosmos-sdk/EventWithdrawProposal";
  value: EventWithdrawProposalAmino;
}
/** EventWithdrawProposal is an event emitted when a proposal is withdrawn. */
export interface EventWithdrawProposalSDKType {
  proposal_id: Long;
}
/** EventVote is an event emitted when a voter votes on a proposal. */
export interface EventVote {
  /** proposal_id is the unique ID of the proposal. */
  proposalId: Long;
}
export interface EventVoteProtoMsg {
  typeUrl: "/cosmos.group.v1.EventVote";
  value: Uint8Array;
}
/** EventVote is an event emitted when a voter votes on a proposal. */
export interface EventVoteAmino {
  /** proposal_id is the unique ID of the proposal. */
  proposal_id: string;
}
export interface EventVoteAminoMsg {
  type: "cosmos-sdk/EventVote";
  value: EventVoteAmino;
}
/** EventVote is an event emitted when a voter votes on a proposal. */
export interface EventVoteSDKType {
  proposal_id: Long;
}
/** EventExec is an event emitted when a proposal is executed. */
export interface EventExec {
  /** proposal_id is the unique ID of the proposal. */
  proposalId: Long;
  /** result is the proposal execution result. */
  result: ProposalExecutorResult;
  /** logs contains error logs in case the execution result is FAILURE. */
  logs: string;
}
export interface EventExecProtoMsg {
  typeUrl: "/cosmos.group.v1.EventExec";
  value: Uint8Array;
}
/** EventExec is an event emitted when a proposal is executed. */
export interface EventExecAmino {
  /** proposal_id is the unique ID of the proposal. */
  proposal_id: string;
  /** result is the proposal execution result. */
  result: ProposalExecutorResult;
  /** logs contains error logs in case the execution result is FAILURE. */
  logs: string;
}
export interface EventExecAminoMsg {
  type: "cosmos-sdk/EventExec";
  value: EventExecAmino;
}
/** EventExec is an event emitted when a proposal is executed. */
export interface EventExecSDKType {
  proposal_id: Long;
  result: ProposalExecutorResult;
  logs: string;
}
/** EventLeaveGroup is an event emitted when group member leaves the group. */
export interface EventLeaveGroup {
  /** group_id is the unique ID of the group. */
  groupId: Long;
  /** address is the account address of the group member. */
  address: string;
}
export interface EventLeaveGroupProtoMsg {
  typeUrl: "/cosmos.group.v1.EventLeaveGroup";
  value: Uint8Array;
}
/** EventLeaveGroup is an event emitted when group member leaves the group. */
export interface EventLeaveGroupAmino {
  /** group_id is the unique ID of the group. */
  group_id: string;
  /** address is the account address of the group member. */
  address: string;
}
export interface EventLeaveGroupAminoMsg {
  type: "cosmos-sdk/EventLeaveGroup";
  value: EventLeaveGroupAmino;
}
/** EventLeaveGroup is an event emitted when group member leaves the group. */
export interface EventLeaveGroupSDKType {
  group_id: Long;
  address: string;
}
/** EventProposalPruned is an event emitted when a proposal is pruned. */
export interface EventProposalPruned {
  /** proposal_id is the unique ID of the proposal. */
  proposalId: Long;
  /** status is the proposal status (UNSPECIFIED, SUBMITTED, ACCEPTED, REJECTED, ABORTED, WITHDRAWN). */
  status: ProposalStatus;
  /** tally_result is the proposal tally result (when applicable). */
  tallyResult: TallyResult;
}
export interface EventProposalPrunedProtoMsg {
  typeUrl: "/cosmos.group.v1.EventProposalPruned";
  value: Uint8Array;
}
/** EventProposalPruned is an event emitted when a proposal is pruned. */
export interface EventProposalPrunedAmino {
  /** proposal_id is the unique ID of the proposal. */
  proposal_id: string;
  /** status is the proposal status (UNSPECIFIED, SUBMITTED, ACCEPTED, REJECTED, ABORTED, WITHDRAWN). */
  status: ProposalStatus;
  /** tally_result is the proposal tally result (when applicable). */
  tally_result?: TallyResultAmino;
}
export interface EventProposalPrunedAminoMsg {
  type: "cosmos-sdk/EventProposalPruned";
  value: EventProposalPrunedAmino;
}
/** EventProposalPruned is an event emitted when a proposal is pruned. */
export interface EventProposalPrunedSDKType {
  proposal_id: Long;
  status: ProposalStatus;
  tally_result: TallyResultSDKType;
}
function createBaseEventCreateGroup(): EventCreateGroup {
  return {
    groupId: Long.UZERO
  };
}
export const EventCreateGroup = {
  typeUrl: "/cosmos.group.v1.EventCreateGroup",
  aminoType: "cosmos-sdk/EventCreateGroup",
  encode(message: EventCreateGroup, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.groupId.isZero()) {
      writer.uint32(8).uint64(message.groupId);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): EventCreateGroup {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventCreateGroup();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.groupId = (reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<EventCreateGroup>): EventCreateGroup {
    const message = createBaseEventCreateGroup();
    message.groupId = object.groupId !== undefined && object.groupId !== null ? Long.fromValue(object.groupId) : Long.UZERO;
    return message;
  },
  fromAmino(object: EventCreateGroupAmino): EventCreateGroup {
    return {
      groupId: Long.fromString(object.group_id)
    };
  },
  toAmino(message: EventCreateGroup): EventCreateGroupAmino {
    const obj: any = {};
    obj.group_id = message.groupId ? message.groupId.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: EventCreateGroupAminoMsg): EventCreateGroup {
    return EventCreateGroup.fromAmino(object.value);
  },
  toAminoMsg(message: EventCreateGroup): EventCreateGroupAminoMsg {
    return {
      type: "cosmos-sdk/EventCreateGroup",
      value: EventCreateGroup.toAmino(message)
    };
  },
  fromProtoMsg(message: EventCreateGroupProtoMsg): EventCreateGroup {
    return EventCreateGroup.decode(message.value);
  },
  toProto(message: EventCreateGroup): Uint8Array {
    return EventCreateGroup.encode(message).finish();
  },
  toProtoMsg(message: EventCreateGroup): EventCreateGroupProtoMsg {
    return {
      typeUrl: "/cosmos.group.v1.EventCreateGroup",
      value: EventCreateGroup.encode(message).finish()
    };
  }
};
function createBaseEventUpdateGroup(): EventUpdateGroup {
  return {
    groupId: Long.UZERO
  };
}
export const EventUpdateGroup = {
  typeUrl: "/cosmos.group.v1.EventUpdateGroup",
  aminoType: "cosmos-sdk/EventUpdateGroup",
  encode(message: EventUpdateGroup, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.groupId.isZero()) {
      writer.uint32(8).uint64(message.groupId);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): EventUpdateGroup {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventUpdateGroup();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.groupId = (reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<EventUpdateGroup>): EventUpdateGroup {
    const message = createBaseEventUpdateGroup();
    message.groupId = object.groupId !== undefined && object.groupId !== null ? Long.fromValue(object.groupId) : Long.UZERO;
    return message;
  },
  fromAmino(object: EventUpdateGroupAmino): EventUpdateGroup {
    return {
      groupId: Long.fromString(object.group_id)
    };
  },
  toAmino(message: EventUpdateGroup): EventUpdateGroupAmino {
    const obj: any = {};
    obj.group_id = message.groupId ? message.groupId.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: EventUpdateGroupAminoMsg): EventUpdateGroup {
    return EventUpdateGroup.fromAmino(object.value);
  },
  toAminoMsg(message: EventUpdateGroup): EventUpdateGroupAminoMsg {
    return {
      type: "cosmos-sdk/EventUpdateGroup",
      value: EventUpdateGroup.toAmino(message)
    };
  },
  fromProtoMsg(message: EventUpdateGroupProtoMsg): EventUpdateGroup {
    return EventUpdateGroup.decode(message.value);
  },
  toProto(message: EventUpdateGroup): Uint8Array {
    return EventUpdateGroup.encode(message).finish();
  },
  toProtoMsg(message: EventUpdateGroup): EventUpdateGroupProtoMsg {
    return {
      typeUrl: "/cosmos.group.v1.EventUpdateGroup",
      value: EventUpdateGroup.encode(message).finish()
    };
  }
};
function createBaseEventCreateGroupPolicy(): EventCreateGroupPolicy {
  return {
    address: ""
  };
}
export const EventCreateGroupPolicy = {
  typeUrl: "/cosmos.group.v1.EventCreateGroupPolicy",
  aminoType: "cosmos-sdk/EventCreateGroupPolicy",
  encode(message: EventCreateGroupPolicy, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): EventCreateGroupPolicy {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventCreateGroupPolicy();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<EventCreateGroupPolicy>): EventCreateGroupPolicy {
    const message = createBaseEventCreateGroupPolicy();
    message.address = object.address ?? "";
    return message;
  },
  fromAmino(object: EventCreateGroupPolicyAmino): EventCreateGroupPolicy {
    return {
      address: object.address
    };
  },
  toAmino(message: EventCreateGroupPolicy): EventCreateGroupPolicyAmino {
    const obj: any = {};
    obj.address = message.address;
    return obj;
  },
  fromAminoMsg(object: EventCreateGroupPolicyAminoMsg): EventCreateGroupPolicy {
    return EventCreateGroupPolicy.fromAmino(object.value);
  },
  toAminoMsg(message: EventCreateGroupPolicy): EventCreateGroupPolicyAminoMsg {
    return {
      type: "cosmos-sdk/EventCreateGroupPolicy",
      value: EventCreateGroupPolicy.toAmino(message)
    };
  },
  fromProtoMsg(message: EventCreateGroupPolicyProtoMsg): EventCreateGroupPolicy {
    return EventCreateGroupPolicy.decode(message.value);
  },
  toProto(message: EventCreateGroupPolicy): Uint8Array {
    return EventCreateGroupPolicy.encode(message).finish();
  },
  toProtoMsg(message: EventCreateGroupPolicy): EventCreateGroupPolicyProtoMsg {
    return {
      typeUrl: "/cosmos.group.v1.EventCreateGroupPolicy",
      value: EventCreateGroupPolicy.encode(message).finish()
    };
  }
};
function createBaseEventUpdateGroupPolicy(): EventUpdateGroupPolicy {
  return {
    address: ""
  };
}
export const EventUpdateGroupPolicy = {
  typeUrl: "/cosmos.group.v1.EventUpdateGroupPolicy",
  aminoType: "cosmos-sdk/EventUpdateGroupPolicy",
  encode(message: EventUpdateGroupPolicy, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): EventUpdateGroupPolicy {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventUpdateGroupPolicy();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<EventUpdateGroupPolicy>): EventUpdateGroupPolicy {
    const message = createBaseEventUpdateGroupPolicy();
    message.address = object.address ?? "";
    return message;
  },
  fromAmino(object: EventUpdateGroupPolicyAmino): EventUpdateGroupPolicy {
    return {
      address: object.address
    };
  },
  toAmino(message: EventUpdateGroupPolicy): EventUpdateGroupPolicyAmino {
    const obj: any = {};
    obj.address = message.address;
    return obj;
  },
  fromAminoMsg(object: EventUpdateGroupPolicyAminoMsg): EventUpdateGroupPolicy {
    return EventUpdateGroupPolicy.fromAmino(object.value);
  },
  toAminoMsg(message: EventUpdateGroupPolicy): EventUpdateGroupPolicyAminoMsg {
    return {
      type: "cosmos-sdk/EventUpdateGroupPolicy",
      value: EventUpdateGroupPolicy.toAmino(message)
    };
  },
  fromProtoMsg(message: EventUpdateGroupPolicyProtoMsg): EventUpdateGroupPolicy {
    return EventUpdateGroupPolicy.decode(message.value);
  },
  toProto(message: EventUpdateGroupPolicy): Uint8Array {
    return EventUpdateGroupPolicy.encode(message).finish();
  },
  toProtoMsg(message: EventUpdateGroupPolicy): EventUpdateGroupPolicyProtoMsg {
    return {
      typeUrl: "/cosmos.group.v1.EventUpdateGroupPolicy",
      value: EventUpdateGroupPolicy.encode(message).finish()
    };
  }
};
function createBaseEventSubmitProposal(): EventSubmitProposal {
  return {
    proposalId: Long.UZERO
  };
}
export const EventSubmitProposal = {
  typeUrl: "/cosmos.group.v1.EventSubmitProposal",
  aminoType: "cosmos-sdk/EventSubmitProposal",
  encode(message: EventSubmitProposal, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.proposalId.isZero()) {
      writer.uint32(8).uint64(message.proposalId);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): EventSubmitProposal {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventSubmitProposal();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.proposalId = (reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<EventSubmitProposal>): EventSubmitProposal {
    const message = createBaseEventSubmitProposal();
    message.proposalId = object.proposalId !== undefined && object.proposalId !== null ? Long.fromValue(object.proposalId) : Long.UZERO;
    return message;
  },
  fromAmino(object: EventSubmitProposalAmino): EventSubmitProposal {
    return {
      proposalId: Long.fromString(object.proposal_id)
    };
  },
  toAmino(message: EventSubmitProposal): EventSubmitProposalAmino {
    const obj: any = {};
    obj.proposal_id = message.proposalId ? message.proposalId.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: EventSubmitProposalAminoMsg): EventSubmitProposal {
    return EventSubmitProposal.fromAmino(object.value);
  },
  toAminoMsg(message: EventSubmitProposal): EventSubmitProposalAminoMsg {
    return {
      type: "cosmos-sdk/EventSubmitProposal",
      value: EventSubmitProposal.toAmino(message)
    };
  },
  fromProtoMsg(message: EventSubmitProposalProtoMsg): EventSubmitProposal {
    return EventSubmitProposal.decode(message.value);
  },
  toProto(message: EventSubmitProposal): Uint8Array {
    return EventSubmitProposal.encode(message).finish();
  },
  toProtoMsg(message: EventSubmitProposal): EventSubmitProposalProtoMsg {
    return {
      typeUrl: "/cosmos.group.v1.EventSubmitProposal",
      value: EventSubmitProposal.encode(message).finish()
    };
  }
};
function createBaseEventWithdrawProposal(): EventWithdrawProposal {
  return {
    proposalId: Long.UZERO
  };
}
export const EventWithdrawProposal = {
  typeUrl: "/cosmos.group.v1.EventWithdrawProposal",
  aminoType: "cosmos-sdk/EventWithdrawProposal",
  encode(message: EventWithdrawProposal, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.proposalId.isZero()) {
      writer.uint32(8).uint64(message.proposalId);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): EventWithdrawProposal {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventWithdrawProposal();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.proposalId = (reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<EventWithdrawProposal>): EventWithdrawProposal {
    const message = createBaseEventWithdrawProposal();
    message.proposalId = object.proposalId !== undefined && object.proposalId !== null ? Long.fromValue(object.proposalId) : Long.UZERO;
    return message;
  },
  fromAmino(object: EventWithdrawProposalAmino): EventWithdrawProposal {
    return {
      proposalId: Long.fromString(object.proposal_id)
    };
  },
  toAmino(message: EventWithdrawProposal): EventWithdrawProposalAmino {
    const obj: any = {};
    obj.proposal_id = message.proposalId ? message.proposalId.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: EventWithdrawProposalAminoMsg): EventWithdrawProposal {
    return EventWithdrawProposal.fromAmino(object.value);
  },
  toAminoMsg(message: EventWithdrawProposal): EventWithdrawProposalAminoMsg {
    return {
      type: "cosmos-sdk/EventWithdrawProposal",
      value: EventWithdrawProposal.toAmino(message)
    };
  },
  fromProtoMsg(message: EventWithdrawProposalProtoMsg): EventWithdrawProposal {
    return EventWithdrawProposal.decode(message.value);
  },
  toProto(message: EventWithdrawProposal): Uint8Array {
    return EventWithdrawProposal.encode(message).finish();
  },
  toProtoMsg(message: EventWithdrawProposal): EventWithdrawProposalProtoMsg {
    return {
      typeUrl: "/cosmos.group.v1.EventWithdrawProposal",
      value: EventWithdrawProposal.encode(message).finish()
    };
  }
};
function createBaseEventVote(): EventVote {
  return {
    proposalId: Long.UZERO
  };
}
export const EventVote = {
  typeUrl: "/cosmos.group.v1.EventVote",
  aminoType: "cosmos-sdk/EventVote",
  encode(message: EventVote, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.proposalId.isZero()) {
      writer.uint32(8).uint64(message.proposalId);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): EventVote {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventVote();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.proposalId = (reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<EventVote>): EventVote {
    const message = createBaseEventVote();
    message.proposalId = object.proposalId !== undefined && object.proposalId !== null ? Long.fromValue(object.proposalId) : Long.UZERO;
    return message;
  },
  fromAmino(object: EventVoteAmino): EventVote {
    return {
      proposalId: Long.fromString(object.proposal_id)
    };
  },
  toAmino(message: EventVote): EventVoteAmino {
    const obj: any = {};
    obj.proposal_id = message.proposalId ? message.proposalId.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: EventVoteAminoMsg): EventVote {
    return EventVote.fromAmino(object.value);
  },
  toAminoMsg(message: EventVote): EventVoteAminoMsg {
    return {
      type: "cosmos-sdk/EventVote",
      value: EventVote.toAmino(message)
    };
  },
  fromProtoMsg(message: EventVoteProtoMsg): EventVote {
    return EventVote.decode(message.value);
  },
  toProto(message: EventVote): Uint8Array {
    return EventVote.encode(message).finish();
  },
  toProtoMsg(message: EventVote): EventVoteProtoMsg {
    return {
      typeUrl: "/cosmos.group.v1.EventVote",
      value: EventVote.encode(message).finish()
    };
  }
};
function createBaseEventExec(): EventExec {
  return {
    proposalId: Long.UZERO,
    result: 0,
    logs: ""
  };
}
export const EventExec = {
  typeUrl: "/cosmos.group.v1.EventExec",
  aminoType: "cosmos-sdk/EventExec",
  encode(message: EventExec, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.proposalId.isZero()) {
      writer.uint32(8).uint64(message.proposalId);
    }
    if (message.result !== 0) {
      writer.uint32(16).int32(message.result);
    }
    if (message.logs !== "") {
      writer.uint32(26).string(message.logs);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): EventExec {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventExec();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.proposalId = (reader.uint64() as Long);
          break;
        case 2:
          message.result = (reader.int32() as any);
          break;
        case 3:
          message.logs = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<EventExec>): EventExec {
    const message = createBaseEventExec();
    message.proposalId = object.proposalId !== undefined && object.proposalId !== null ? Long.fromValue(object.proposalId) : Long.UZERO;
    message.result = object.result ?? 0;
    message.logs = object.logs ?? "";
    return message;
  },
  fromAmino(object: EventExecAmino): EventExec {
    return {
      proposalId: Long.fromString(object.proposal_id),
      result: isSet(object.result) ? proposalExecutorResultFromJSON(object.result) : -1,
      logs: object.logs
    };
  },
  toAmino(message: EventExec): EventExecAmino {
    const obj: any = {};
    obj.proposal_id = message.proposalId ? message.proposalId.toString() : undefined;
    obj.result = message.result;
    obj.logs = message.logs;
    return obj;
  },
  fromAminoMsg(object: EventExecAminoMsg): EventExec {
    return EventExec.fromAmino(object.value);
  },
  toAminoMsg(message: EventExec): EventExecAminoMsg {
    return {
      type: "cosmos-sdk/EventExec",
      value: EventExec.toAmino(message)
    };
  },
  fromProtoMsg(message: EventExecProtoMsg): EventExec {
    return EventExec.decode(message.value);
  },
  toProto(message: EventExec): Uint8Array {
    return EventExec.encode(message).finish();
  },
  toProtoMsg(message: EventExec): EventExecProtoMsg {
    return {
      typeUrl: "/cosmos.group.v1.EventExec",
      value: EventExec.encode(message).finish()
    };
  }
};
function createBaseEventLeaveGroup(): EventLeaveGroup {
  return {
    groupId: Long.UZERO,
    address: ""
  };
}
export const EventLeaveGroup = {
  typeUrl: "/cosmos.group.v1.EventLeaveGroup",
  aminoType: "cosmos-sdk/EventLeaveGroup",
  encode(message: EventLeaveGroup, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.groupId.isZero()) {
      writer.uint32(8).uint64(message.groupId);
    }
    if (message.address !== "") {
      writer.uint32(18).string(message.address);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): EventLeaveGroup {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventLeaveGroup();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.groupId = (reader.uint64() as Long);
          break;
        case 2:
          message.address = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<EventLeaveGroup>): EventLeaveGroup {
    const message = createBaseEventLeaveGroup();
    message.groupId = object.groupId !== undefined && object.groupId !== null ? Long.fromValue(object.groupId) : Long.UZERO;
    message.address = object.address ?? "";
    return message;
  },
  fromAmino(object: EventLeaveGroupAmino): EventLeaveGroup {
    return {
      groupId: Long.fromString(object.group_id),
      address: object.address
    };
  },
  toAmino(message: EventLeaveGroup): EventLeaveGroupAmino {
    const obj: any = {};
    obj.group_id = message.groupId ? message.groupId.toString() : undefined;
    obj.address = message.address;
    return obj;
  },
  fromAminoMsg(object: EventLeaveGroupAminoMsg): EventLeaveGroup {
    return EventLeaveGroup.fromAmino(object.value);
  },
  toAminoMsg(message: EventLeaveGroup): EventLeaveGroupAminoMsg {
    return {
      type: "cosmos-sdk/EventLeaveGroup",
      value: EventLeaveGroup.toAmino(message)
    };
  },
  fromProtoMsg(message: EventLeaveGroupProtoMsg): EventLeaveGroup {
    return EventLeaveGroup.decode(message.value);
  },
  toProto(message: EventLeaveGroup): Uint8Array {
    return EventLeaveGroup.encode(message).finish();
  },
  toProtoMsg(message: EventLeaveGroup): EventLeaveGroupProtoMsg {
    return {
      typeUrl: "/cosmos.group.v1.EventLeaveGroup",
      value: EventLeaveGroup.encode(message).finish()
    };
  }
};
function createBaseEventProposalPruned(): EventProposalPruned {
  return {
    proposalId: Long.UZERO,
    status: 0,
    tallyResult: TallyResult.fromPartial({})
  };
}
export const EventProposalPruned = {
  typeUrl: "/cosmos.group.v1.EventProposalPruned",
  aminoType: "cosmos-sdk/EventProposalPruned",
  encode(message: EventProposalPruned, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.proposalId.isZero()) {
      writer.uint32(8).uint64(message.proposalId);
    }
    if (message.status !== 0) {
      writer.uint32(16).int32(message.status);
    }
    if (message.tallyResult !== undefined) {
      TallyResult.encode(message.tallyResult, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): EventProposalPruned {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventProposalPruned();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.proposalId = (reader.uint64() as Long);
          break;
        case 2:
          message.status = (reader.int32() as any);
          break;
        case 3:
          message.tallyResult = TallyResult.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<EventProposalPruned>): EventProposalPruned {
    const message = createBaseEventProposalPruned();
    message.proposalId = object.proposalId !== undefined && object.proposalId !== null ? Long.fromValue(object.proposalId) : Long.UZERO;
    message.status = object.status ?? 0;
    message.tallyResult = object.tallyResult !== undefined && object.tallyResult !== null ? TallyResult.fromPartial(object.tallyResult) : undefined;
    return message;
  },
  fromAmino(object: EventProposalPrunedAmino): EventProposalPruned {
    return {
      proposalId: Long.fromString(object.proposal_id),
      status: isSet(object.status) ? proposalStatusFromJSON(object.status) : -1,
      tallyResult: object?.tally_result ? TallyResult.fromAmino(object.tally_result) : undefined
    };
  },
  toAmino(message: EventProposalPruned): EventProposalPrunedAmino {
    const obj: any = {};
    obj.proposal_id = message.proposalId ? message.proposalId.toString() : undefined;
    obj.status = message.status;
    obj.tally_result = message.tallyResult ? TallyResult.toAmino(message.tallyResult) : undefined;
    return obj;
  },
  fromAminoMsg(object: EventProposalPrunedAminoMsg): EventProposalPruned {
    return EventProposalPruned.fromAmino(object.value);
  },
  toAminoMsg(message: EventProposalPruned): EventProposalPrunedAminoMsg {
    return {
      type: "cosmos-sdk/EventProposalPruned",
      value: EventProposalPruned.toAmino(message)
    };
  },
  fromProtoMsg(message: EventProposalPrunedProtoMsg): EventProposalPruned {
    return EventProposalPruned.decode(message.value);
  },
  toProto(message: EventProposalPruned): Uint8Array {
    return EventProposalPruned.encode(message).finish();
  },
  toProtoMsg(message: EventProposalPruned): EventProposalPrunedProtoMsg {
    return {
      typeUrl: "/cosmos.group.v1.EventProposalPruned",
      value: EventProposalPruned.encode(message).finish()
    };
  }
};