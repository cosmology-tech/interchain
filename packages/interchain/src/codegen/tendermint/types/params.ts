import { Duration, DurationAmino, DurationSDKType } from "../../google/protobuf/duration";
import { Long, DeepPartial } from "../../helpers";
import * as _m0 from "protobufjs/minimal";
/**
 * ConsensusParams contains consensus critical parameters that determine the
 * validity of blocks.
 */
export interface ConsensusParams {
  block: BlockParams;
  evidence: EvidenceParams;
  validator: ValidatorParams;
  version: VersionParams;
  abci: ABCIParams;
}
export interface ConsensusParamsProtoMsg {
  typeUrl: "/tendermint.types.ConsensusParams";
  value: Uint8Array;
}
/**
 * ConsensusParams contains consensus critical parameters that determine the
 * validity of blocks.
 */
export interface ConsensusParamsAmino {
  block?: BlockParamsAmino;
  evidence?: EvidenceParamsAmino;
  validator?: ValidatorParamsAmino;
  version?: VersionParamsAmino;
  abci?: ABCIParamsAmino;
}
export interface ConsensusParamsAminoMsg {
  type: "/tendermint.types.ConsensusParams";
  value: ConsensusParamsAmino;
}
/**
 * ConsensusParams contains consensus critical parameters that determine the
 * validity of blocks.
 */
export interface ConsensusParamsSDKType {
  block: BlockParamsSDKType;
  evidence: EvidenceParamsSDKType;
  validator: ValidatorParamsSDKType;
  version: VersionParamsSDKType;
  abci: ABCIParamsSDKType;
}
/** BlockParams contains limits on the block size. */
export interface BlockParams {
  /**
   * Max block size, in bytes.
   * Note: must be greater than 0
   */
  maxBytes: Long;
  /**
   * Max gas per block.
   * Note: must be greater or equal to -1
   */
  maxGas: Long;
}
export interface BlockParamsProtoMsg {
  typeUrl: "/tendermint.types.BlockParams";
  value: Uint8Array;
}
/** BlockParams contains limits on the block size. */
export interface BlockParamsAmino {
  /**
   * Max block size, in bytes.
   * Note: must be greater than 0
   */
  max_bytes: string;
  /**
   * Max gas per block.
   * Note: must be greater or equal to -1
   */
  max_gas: string;
}
export interface BlockParamsAminoMsg {
  type: "/tendermint.types.BlockParams";
  value: BlockParamsAmino;
}
/** BlockParams contains limits on the block size. */
export interface BlockParamsSDKType {
  max_bytes: Long;
  max_gas: Long;
}
/** EvidenceParams determine how we handle evidence of malfeasance. */
export interface EvidenceParams {
  /**
   * Max age of evidence, in blocks.
   * 
   * The basic formula for calculating this is: MaxAgeDuration / {average block
   * time}.
   */
  maxAgeNumBlocks: Long;
  /**
   * Max age of evidence, in time.
   * 
   * It should correspond with an app's "unbonding period" or other similar
   * mechanism for handling [Nothing-At-Stake
   * attacks](https://github.com/ethereum/wiki/wiki/Proof-of-Stake-FAQ#what-is-the-nothing-at-stake-problem-and-how-can-it-be-fixed).
   */
  maxAgeDuration: Duration;
  /**
   * This sets the maximum size of total evidence in bytes that can be committed in a single block.
   * and should fall comfortably under the max block bytes.
   * Default is 1048576 or 1MB
   */
  maxBytes: Long;
}
export interface EvidenceParamsProtoMsg {
  typeUrl: "/tendermint.types.EvidenceParams";
  value: Uint8Array;
}
/** EvidenceParams determine how we handle evidence of malfeasance. */
export interface EvidenceParamsAmino {
  /**
   * Max age of evidence, in blocks.
   * 
   * The basic formula for calculating this is: MaxAgeDuration / {average block
   * time}.
   */
  max_age_num_blocks: string;
  /**
   * Max age of evidence, in time.
   * 
   * It should correspond with an app's "unbonding period" or other similar
   * mechanism for handling [Nothing-At-Stake
   * attacks](https://github.com/ethereum/wiki/wiki/Proof-of-Stake-FAQ#what-is-the-nothing-at-stake-problem-and-how-can-it-be-fixed).
   */
  max_age_duration?: DurationAmino;
  /**
   * This sets the maximum size of total evidence in bytes that can be committed in a single block.
   * and should fall comfortably under the max block bytes.
   * Default is 1048576 or 1MB
   */
  max_bytes: string;
}
export interface EvidenceParamsAminoMsg {
  type: "/tendermint.types.EvidenceParams";
  value: EvidenceParamsAmino;
}
/** EvidenceParams determine how we handle evidence of malfeasance. */
export interface EvidenceParamsSDKType {
  max_age_num_blocks: Long;
  max_age_duration: DurationSDKType;
  max_bytes: Long;
}
/**
 * ValidatorParams restrict the public key types validators can use.
 * NOTE: uses ABCI pubkey naming, not Amino names.
 */
export interface ValidatorParams {
  pubKeyTypes: string[];
}
export interface ValidatorParamsProtoMsg {
  typeUrl: "/tendermint.types.ValidatorParams";
  value: Uint8Array;
}
/**
 * ValidatorParams restrict the public key types validators can use.
 * NOTE: uses ABCI pubkey naming, not Amino names.
 */
export interface ValidatorParamsAmino {
  pub_key_types: string[];
}
export interface ValidatorParamsAminoMsg {
  type: "/tendermint.types.ValidatorParams";
  value: ValidatorParamsAmino;
}
/**
 * ValidatorParams restrict the public key types validators can use.
 * NOTE: uses ABCI pubkey naming, not Amino names.
 */
export interface ValidatorParamsSDKType {
  pub_key_types: string[];
}
/** VersionParams contains the ABCI application version. */
export interface VersionParams {
  app: Long;
}
export interface VersionParamsProtoMsg {
  typeUrl: "/tendermint.types.VersionParams";
  value: Uint8Array;
}
/** VersionParams contains the ABCI application version. */
export interface VersionParamsAmino {
  app: string;
}
export interface VersionParamsAminoMsg {
  type: "/tendermint.types.VersionParams";
  value: VersionParamsAmino;
}
/** VersionParams contains the ABCI application version. */
export interface VersionParamsSDKType {
  app: Long;
}
/**
 * HashedParams is a subset of ConsensusParams.
 * 
 * It is hashed into the Header.ConsensusHash.
 */
export interface HashedParams {
  blockMaxBytes: Long;
  blockMaxGas: Long;
}
export interface HashedParamsProtoMsg {
  typeUrl: "/tendermint.types.HashedParams";
  value: Uint8Array;
}
/**
 * HashedParams is a subset of ConsensusParams.
 * 
 * It is hashed into the Header.ConsensusHash.
 */
export interface HashedParamsAmino {
  block_max_bytes: string;
  block_max_gas: string;
}
export interface HashedParamsAminoMsg {
  type: "/tendermint.types.HashedParams";
  value: HashedParamsAmino;
}
/**
 * HashedParams is a subset of ConsensusParams.
 * 
 * It is hashed into the Header.ConsensusHash.
 */
export interface HashedParamsSDKType {
  block_max_bytes: Long;
  block_max_gas: Long;
}
/** ABCIParams configure functionality specific to the Application Blockchain Interface. */
export interface ABCIParams {
  /**
   * vote_extensions_enable_height configures the first height during which
   * vote extensions will be enabled. During this specified height, and for all
   * subsequent heights, precommit messages that do not contain valid extension data
   * will be considered invalid. Prior to this height, vote extensions will not
   * be used or accepted by validators on the network.
   * 
   * Once enabled, vote extensions will be created by the application in ExtendVote,
   * passed to the application for validation in VerifyVoteExtension and given
   * to the application to use when proposing a block during PrepareProposal.
   */
  voteExtensionsEnableHeight: Long;
}
export interface ABCIParamsProtoMsg {
  typeUrl: "/tendermint.types.ABCIParams";
  value: Uint8Array;
}
/** ABCIParams configure functionality specific to the Application Blockchain Interface. */
export interface ABCIParamsAmino {
  /**
   * vote_extensions_enable_height configures the first height during which
   * vote extensions will be enabled. During this specified height, and for all
   * subsequent heights, precommit messages that do not contain valid extension data
   * will be considered invalid. Prior to this height, vote extensions will not
   * be used or accepted by validators on the network.
   * 
   * Once enabled, vote extensions will be created by the application in ExtendVote,
   * passed to the application for validation in VerifyVoteExtension and given
   * to the application to use when proposing a block during PrepareProposal.
   */
  vote_extensions_enable_height: string;
}
export interface ABCIParamsAminoMsg {
  type: "/tendermint.types.ABCIParams";
  value: ABCIParamsAmino;
}
/** ABCIParams configure functionality specific to the Application Blockchain Interface. */
export interface ABCIParamsSDKType {
  vote_extensions_enable_height: Long;
}
function createBaseConsensusParams(): ConsensusParams {
  return {
    block: BlockParams.fromPartial({}),
    evidence: EvidenceParams.fromPartial({}),
    validator: ValidatorParams.fromPartial({}),
    version: VersionParams.fromPartial({}),
    abci: ABCIParams.fromPartial({})
  };
}
export const ConsensusParams = {
  typeUrl: "/tendermint.types.ConsensusParams",
  encode(message: ConsensusParams, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.block !== undefined) {
      BlockParams.encode(message.block, writer.uint32(10).fork()).ldelim();
    }
    if (message.evidence !== undefined) {
      EvidenceParams.encode(message.evidence, writer.uint32(18).fork()).ldelim();
    }
    if (message.validator !== undefined) {
      ValidatorParams.encode(message.validator, writer.uint32(26).fork()).ldelim();
    }
    if (message.version !== undefined) {
      VersionParams.encode(message.version, writer.uint32(34).fork()).ldelim();
    }
    if (message.abci !== undefined) {
      ABCIParams.encode(message.abci, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): ConsensusParams {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseConsensusParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.block = BlockParams.decode(reader, reader.uint32());
          break;
        case 2:
          message.evidence = EvidenceParams.decode(reader, reader.uint32());
          break;
        case 3:
          message.validator = ValidatorParams.decode(reader, reader.uint32());
          break;
        case 4:
          message.version = VersionParams.decode(reader, reader.uint32());
          break;
        case 5:
          message.abci = ABCIParams.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<ConsensusParams>): ConsensusParams {
    const message = createBaseConsensusParams();
    message.block = object.block !== undefined && object.block !== null ? BlockParams.fromPartial(object.block) : undefined;
    message.evidence = object.evidence !== undefined && object.evidence !== null ? EvidenceParams.fromPartial(object.evidence) : undefined;
    message.validator = object.validator !== undefined && object.validator !== null ? ValidatorParams.fromPartial(object.validator) : undefined;
    message.version = object.version !== undefined && object.version !== null ? VersionParams.fromPartial(object.version) : undefined;
    message.abci = object.abci !== undefined && object.abci !== null ? ABCIParams.fromPartial(object.abci) : undefined;
    return message;
  },
  fromAmino(object: ConsensusParamsAmino): ConsensusParams {
    return {
      block: object?.block ? BlockParams.fromAmino(object.block) : undefined,
      evidence: object?.evidence ? EvidenceParams.fromAmino(object.evidence) : undefined,
      validator: object?.validator ? ValidatorParams.fromAmino(object.validator) : undefined,
      version: object?.version ? VersionParams.fromAmino(object.version) : undefined,
      abci: object?.abci ? ABCIParams.fromAmino(object.abci) : undefined
    };
  },
  toAmino(message: ConsensusParams): ConsensusParamsAmino {
    const obj: any = {};
    obj.block = message.block ? BlockParams.toAmino(message.block) : undefined;
    obj.evidence = message.evidence ? EvidenceParams.toAmino(message.evidence) : undefined;
    obj.validator = message.validator ? ValidatorParams.toAmino(message.validator) : undefined;
    obj.version = message.version ? VersionParams.toAmino(message.version) : undefined;
    obj.abci = message.abci ? ABCIParams.toAmino(message.abci) : undefined;
    return obj;
  },
  fromAminoMsg(object: ConsensusParamsAminoMsg): ConsensusParams {
    return ConsensusParams.fromAmino(object.value);
  },
  fromProtoMsg(message: ConsensusParamsProtoMsg): ConsensusParams {
    return ConsensusParams.decode(message.value);
  },
  toProto(message: ConsensusParams): Uint8Array {
    return ConsensusParams.encode(message).finish();
  },
  toProtoMsg(message: ConsensusParams): ConsensusParamsProtoMsg {
    return {
      typeUrl: "/tendermint.types.ConsensusParams",
      value: ConsensusParams.encode(message).finish()
    };
  }
};
function createBaseBlockParams(): BlockParams {
  return {
    maxBytes: Long.ZERO,
    maxGas: Long.ZERO
  };
}
export const BlockParams = {
  typeUrl: "/tendermint.types.BlockParams",
  encode(message: BlockParams, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.maxBytes.isZero()) {
      writer.uint32(8).int64(message.maxBytes);
    }
    if (!message.maxGas.isZero()) {
      writer.uint32(16).int64(message.maxGas);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): BlockParams {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBlockParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.maxBytes = (reader.int64() as Long);
          break;
        case 2:
          message.maxGas = (reader.int64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<BlockParams>): BlockParams {
    const message = createBaseBlockParams();
    message.maxBytes = object.maxBytes !== undefined && object.maxBytes !== null ? Long.fromValue(object.maxBytes) : Long.ZERO;
    message.maxGas = object.maxGas !== undefined && object.maxGas !== null ? Long.fromValue(object.maxGas) : Long.ZERO;
    return message;
  },
  fromAmino(object: BlockParamsAmino): BlockParams {
    return {
      maxBytes: Long.fromString(object.max_bytes),
      maxGas: Long.fromString(object.max_gas)
    };
  },
  toAmino(message: BlockParams): BlockParamsAmino {
    const obj: any = {};
    obj.max_bytes = message.maxBytes ? message.maxBytes.toString() : undefined;
    obj.max_gas = message.maxGas ? message.maxGas.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: BlockParamsAminoMsg): BlockParams {
    return BlockParams.fromAmino(object.value);
  },
  fromProtoMsg(message: BlockParamsProtoMsg): BlockParams {
    return BlockParams.decode(message.value);
  },
  toProto(message: BlockParams): Uint8Array {
    return BlockParams.encode(message).finish();
  },
  toProtoMsg(message: BlockParams): BlockParamsProtoMsg {
    return {
      typeUrl: "/tendermint.types.BlockParams",
      value: BlockParams.encode(message).finish()
    };
  }
};
function createBaseEvidenceParams(): EvidenceParams {
  return {
    maxAgeNumBlocks: Long.ZERO,
    maxAgeDuration: Duration.fromPartial({}),
    maxBytes: Long.ZERO
  };
}
export const EvidenceParams = {
  typeUrl: "/tendermint.types.EvidenceParams",
  encode(message: EvidenceParams, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.maxAgeNumBlocks.isZero()) {
      writer.uint32(8).int64(message.maxAgeNumBlocks);
    }
    if (message.maxAgeDuration !== undefined) {
      Duration.encode(message.maxAgeDuration, writer.uint32(18).fork()).ldelim();
    }
    if (!message.maxBytes.isZero()) {
      writer.uint32(24).int64(message.maxBytes);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): EvidenceParams {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEvidenceParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.maxAgeNumBlocks = (reader.int64() as Long);
          break;
        case 2:
          message.maxAgeDuration = Duration.decode(reader, reader.uint32());
          break;
        case 3:
          message.maxBytes = (reader.int64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<EvidenceParams>): EvidenceParams {
    const message = createBaseEvidenceParams();
    message.maxAgeNumBlocks = object.maxAgeNumBlocks !== undefined && object.maxAgeNumBlocks !== null ? Long.fromValue(object.maxAgeNumBlocks) : Long.ZERO;
    message.maxAgeDuration = object.maxAgeDuration !== undefined && object.maxAgeDuration !== null ? Duration.fromPartial(object.maxAgeDuration) : undefined;
    message.maxBytes = object.maxBytes !== undefined && object.maxBytes !== null ? Long.fromValue(object.maxBytes) : Long.ZERO;
    return message;
  },
  fromAmino(object: EvidenceParamsAmino): EvidenceParams {
    return {
      maxAgeNumBlocks: Long.fromString(object.max_age_num_blocks),
      maxAgeDuration: object?.max_age_duration ? Duration.fromAmino(object.max_age_duration) : undefined,
      maxBytes: Long.fromString(object.max_bytes)
    };
  },
  toAmino(message: EvidenceParams): EvidenceParamsAmino {
    const obj: any = {};
    obj.max_age_num_blocks = message.maxAgeNumBlocks ? message.maxAgeNumBlocks.toString() : undefined;
    obj.max_age_duration = message.maxAgeDuration ? Duration.toAmino(message.maxAgeDuration) : undefined;
    obj.max_bytes = message.maxBytes ? message.maxBytes.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: EvidenceParamsAminoMsg): EvidenceParams {
    return EvidenceParams.fromAmino(object.value);
  },
  fromProtoMsg(message: EvidenceParamsProtoMsg): EvidenceParams {
    return EvidenceParams.decode(message.value);
  },
  toProto(message: EvidenceParams): Uint8Array {
    return EvidenceParams.encode(message).finish();
  },
  toProtoMsg(message: EvidenceParams): EvidenceParamsProtoMsg {
    return {
      typeUrl: "/tendermint.types.EvidenceParams",
      value: EvidenceParams.encode(message).finish()
    };
  }
};
function createBaseValidatorParams(): ValidatorParams {
  return {
    pubKeyTypes: []
  };
}
export const ValidatorParams = {
  typeUrl: "/tendermint.types.ValidatorParams",
  encode(message: ValidatorParams, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.pubKeyTypes) {
      writer.uint32(10).string(v!);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): ValidatorParams {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseValidatorParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pubKeyTypes.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<ValidatorParams>): ValidatorParams {
    const message = createBaseValidatorParams();
    message.pubKeyTypes = object.pubKeyTypes?.map(e => e) || [];
    return message;
  },
  fromAmino(object: ValidatorParamsAmino): ValidatorParams {
    return {
      pubKeyTypes: Array.isArray(object?.pub_key_types) ? object.pub_key_types.map((e: any) => e) : []
    };
  },
  toAmino(message: ValidatorParams): ValidatorParamsAmino {
    const obj: any = {};
    if (message.pubKeyTypes) {
      obj.pub_key_types = message.pubKeyTypes.map(e => e);
    } else {
      obj.pub_key_types = [];
    }
    return obj;
  },
  fromAminoMsg(object: ValidatorParamsAminoMsg): ValidatorParams {
    return ValidatorParams.fromAmino(object.value);
  },
  fromProtoMsg(message: ValidatorParamsProtoMsg): ValidatorParams {
    return ValidatorParams.decode(message.value);
  },
  toProto(message: ValidatorParams): Uint8Array {
    return ValidatorParams.encode(message).finish();
  },
  toProtoMsg(message: ValidatorParams): ValidatorParamsProtoMsg {
    return {
      typeUrl: "/tendermint.types.ValidatorParams",
      value: ValidatorParams.encode(message).finish()
    };
  }
};
function createBaseVersionParams(): VersionParams {
  return {
    app: Long.UZERO
  };
}
export const VersionParams = {
  typeUrl: "/tendermint.types.VersionParams",
  encode(message: VersionParams, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.app.isZero()) {
      writer.uint32(8).uint64(message.app);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): VersionParams {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseVersionParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.app = (reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<VersionParams>): VersionParams {
    const message = createBaseVersionParams();
    message.app = object.app !== undefined && object.app !== null ? Long.fromValue(object.app) : Long.UZERO;
    return message;
  },
  fromAmino(object: VersionParamsAmino): VersionParams {
    return {
      app: Long.fromString(object.app)
    };
  },
  toAmino(message: VersionParams): VersionParamsAmino {
    const obj: any = {};
    obj.app = message.app ? message.app.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: VersionParamsAminoMsg): VersionParams {
    return VersionParams.fromAmino(object.value);
  },
  fromProtoMsg(message: VersionParamsProtoMsg): VersionParams {
    return VersionParams.decode(message.value);
  },
  toProto(message: VersionParams): Uint8Array {
    return VersionParams.encode(message).finish();
  },
  toProtoMsg(message: VersionParams): VersionParamsProtoMsg {
    return {
      typeUrl: "/tendermint.types.VersionParams",
      value: VersionParams.encode(message).finish()
    };
  }
};
function createBaseHashedParams(): HashedParams {
  return {
    blockMaxBytes: Long.ZERO,
    blockMaxGas: Long.ZERO
  };
}
export const HashedParams = {
  typeUrl: "/tendermint.types.HashedParams",
  encode(message: HashedParams, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.blockMaxBytes.isZero()) {
      writer.uint32(8).int64(message.blockMaxBytes);
    }
    if (!message.blockMaxGas.isZero()) {
      writer.uint32(16).int64(message.blockMaxGas);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): HashedParams {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseHashedParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.blockMaxBytes = (reader.int64() as Long);
          break;
        case 2:
          message.blockMaxGas = (reader.int64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<HashedParams>): HashedParams {
    const message = createBaseHashedParams();
    message.blockMaxBytes = object.blockMaxBytes !== undefined && object.blockMaxBytes !== null ? Long.fromValue(object.blockMaxBytes) : Long.ZERO;
    message.blockMaxGas = object.blockMaxGas !== undefined && object.blockMaxGas !== null ? Long.fromValue(object.blockMaxGas) : Long.ZERO;
    return message;
  },
  fromAmino(object: HashedParamsAmino): HashedParams {
    return {
      blockMaxBytes: Long.fromString(object.block_max_bytes),
      blockMaxGas: Long.fromString(object.block_max_gas)
    };
  },
  toAmino(message: HashedParams): HashedParamsAmino {
    const obj: any = {};
    obj.block_max_bytes = message.blockMaxBytes ? message.blockMaxBytes.toString() : undefined;
    obj.block_max_gas = message.blockMaxGas ? message.blockMaxGas.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: HashedParamsAminoMsg): HashedParams {
    return HashedParams.fromAmino(object.value);
  },
  fromProtoMsg(message: HashedParamsProtoMsg): HashedParams {
    return HashedParams.decode(message.value);
  },
  toProto(message: HashedParams): Uint8Array {
    return HashedParams.encode(message).finish();
  },
  toProtoMsg(message: HashedParams): HashedParamsProtoMsg {
    return {
      typeUrl: "/tendermint.types.HashedParams",
      value: HashedParams.encode(message).finish()
    };
  }
};
function createBaseABCIParams(): ABCIParams {
  return {
    voteExtensionsEnableHeight: Long.ZERO
  };
}
export const ABCIParams = {
  typeUrl: "/tendermint.types.ABCIParams",
  encode(message: ABCIParams, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.voteExtensionsEnableHeight.isZero()) {
      writer.uint32(8).int64(message.voteExtensionsEnableHeight);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): ABCIParams {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseABCIParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.voteExtensionsEnableHeight = (reader.int64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<ABCIParams>): ABCIParams {
    const message = createBaseABCIParams();
    message.voteExtensionsEnableHeight = object.voteExtensionsEnableHeight !== undefined && object.voteExtensionsEnableHeight !== null ? Long.fromValue(object.voteExtensionsEnableHeight) : Long.ZERO;
    return message;
  },
  fromAmino(object: ABCIParamsAmino): ABCIParams {
    return {
      voteExtensionsEnableHeight: Long.fromString(object.vote_extensions_enable_height)
    };
  },
  toAmino(message: ABCIParams): ABCIParamsAmino {
    const obj: any = {};
    obj.vote_extensions_enable_height = message.voteExtensionsEnableHeight ? message.voteExtensionsEnableHeight.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: ABCIParamsAminoMsg): ABCIParams {
    return ABCIParams.fromAmino(object.value);
  },
  fromProtoMsg(message: ABCIParamsProtoMsg): ABCIParams {
    return ABCIParams.decode(message.value);
  },
  toProto(message: ABCIParams): Uint8Array {
    return ABCIParams.encode(message).finish();
  },
  toProtoMsg(message: ABCIParams): ABCIParamsProtoMsg {
    return {
      typeUrl: "/tendermint.types.ABCIParams",
      value: ABCIParams.encode(message).finish()
    };
  }
};