import { AccessConfig, AccessConfigAmino, AccessConfigSDKType, Params, ParamsAmino, ParamsSDKType } from "./types";
import { Coin, CoinAmino, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet, bytesFromBase64, base64FromBytes, DeepPartial } from "../../../helpers";
import { fromBase64, toBase64, toUtf8, fromUtf8 } from "@cosmjs/encoding";
/** MsgStoreCode submit Wasm code to the system */
export interface MsgStoreCode {
  /** Sender is the actor that signed the messages */
  sender: string;
  /** WASMByteCode can be raw or gzip compressed */
  wasmByteCode: Uint8Array;
  /**
   * InstantiatePermission access control to apply on contract creation,
   * optional
   */
  instantiatePermission: AccessConfig | undefined;
}
export interface MsgStoreCodeProtoMsg {
  typeUrl: "/cosmwasm.wasm.v1.MsgStoreCode";
  value: Uint8Array;
}
/** MsgStoreCode submit Wasm code to the system */
export interface MsgStoreCodeAmino {
  /** Sender is the actor that signed the messages */
  sender: string;
  /** WASMByteCode can be raw or gzip compressed */
  wasm_byte_code: string;
  /**
   * InstantiatePermission access control to apply on contract creation,
   * optional
   */
  instantiate_permission?: AccessConfigAmino | undefined;
}
export interface MsgStoreCodeAminoMsg {
  type: "wasm/MsgStoreCode";
  value: MsgStoreCodeAmino;
}
/** MsgStoreCode submit Wasm code to the system */
export interface MsgStoreCodeSDKType {
  sender: string;
  wasm_byte_code: Uint8Array;
  instantiate_permission: AccessConfigSDKType | undefined;
}
/** MsgStoreCodeResponse returns store result data. */
export interface MsgStoreCodeResponse {
  /** CodeID is the reference to the stored WASM code */
  codeId: bigint;
  /** Checksum is the sha256 hash of the stored code */
  checksum: Uint8Array;
}
export interface MsgStoreCodeResponseProtoMsg {
  typeUrl: "/cosmwasm.wasm.v1.MsgStoreCodeResponse";
  value: Uint8Array;
}
/** MsgStoreCodeResponse returns store result data. */
export interface MsgStoreCodeResponseAmino {
  /** CodeID is the reference to the stored WASM code */
  code_id: string;
  /** Checksum is the sha256 hash of the stored code */
  checksum: Uint8Array;
}
export interface MsgStoreCodeResponseAminoMsg {
  type: "wasm/MsgStoreCodeResponse";
  value: MsgStoreCodeResponseAmino;
}
/** MsgStoreCodeResponse returns store result data. */
export interface MsgStoreCodeResponseSDKType {
  code_id: bigint;
  checksum: Uint8Array;
}
/**
 * MsgInstantiateContract create a new smart contract instance for the given
 * code id.
 */
export interface MsgInstantiateContract {
  /** Sender is the that actor that signed the messages */
  sender: string;
  /** Admin is an optional address that can execute migrations */
  admin: string;
  /** CodeID is the reference to the stored WASM code */
  codeId: bigint;
  /** Label is optional metadata to be stored with a contract instance. */
  label: string;
  /** Msg json encoded message to be passed to the contract on instantiation */
  msg: Uint8Array;
  /** Funds coins that are transferred to the contract on instantiation */
  funds: Coin[];
}
export interface MsgInstantiateContractProtoMsg {
  typeUrl: "/cosmwasm.wasm.v1.MsgInstantiateContract";
  value: Uint8Array;
}
/**
 * MsgInstantiateContract create a new smart contract instance for the given
 * code id.
 */
export interface MsgInstantiateContractAmino {
  /** Sender is the that actor that signed the messages */
  sender: string;
  /** Admin is an optional address that can execute migrations */
  admin: string;
  /** CodeID is the reference to the stored WASM code */
  code_id: string;
  /** Label is optional metadata to be stored with a contract instance. */
  label: string;
  /** Msg json encoded message to be passed to the contract on instantiation */
  msg: Uint8Array;
  /** Funds coins that are transferred to the contract on instantiation */
  funds: CoinAmino[];
}
export interface MsgInstantiateContractAminoMsg {
  type: "wasm/MsgInstantiateContract";
  value: MsgInstantiateContractAmino;
}
/**
 * MsgInstantiateContract create a new smart contract instance for the given
 * code id.
 */
export interface MsgInstantiateContractSDKType {
  sender: string;
  admin: string;
  code_id: bigint;
  label: string;
  msg: Uint8Array;
  funds: CoinSDKType[];
}
/** MsgInstantiateContractResponse return instantiation result data */
export interface MsgInstantiateContractResponse {
  /** Address is the bech32 address of the new contract instance. */
  address: string;
  /** Data contains bytes to returned from the contract */
  data: Uint8Array;
}
export interface MsgInstantiateContractResponseProtoMsg {
  typeUrl: "/cosmwasm.wasm.v1.MsgInstantiateContractResponse";
  value: Uint8Array;
}
/** MsgInstantiateContractResponse return instantiation result data */
export interface MsgInstantiateContractResponseAmino {
  /** Address is the bech32 address of the new contract instance. */
  address: string;
  /** Data contains bytes to returned from the contract */
  data: Uint8Array;
}
export interface MsgInstantiateContractResponseAminoMsg {
  type: "wasm/MsgInstantiateContractResponse";
  value: MsgInstantiateContractResponseAmino;
}
/** MsgInstantiateContractResponse return instantiation result data */
export interface MsgInstantiateContractResponseSDKType {
  address: string;
  data: Uint8Array;
}
/**
 * MsgInstantiateContract2 create a new smart contract instance for the given
 * code id with a predicable address.
 */
export interface MsgInstantiateContract2 {
  /** Sender is the that actor that signed the messages */
  sender: string;
  /** Admin is an optional address that can execute migrations */
  admin: string;
  /** CodeID is the reference to the stored WASM code */
  codeId: bigint;
  /** Label is optional metadata to be stored with a contract instance. */
  label: string;
  /** Msg json encoded message to be passed to the contract on instantiation */
  msg: Uint8Array;
  /** Funds coins that are transferred to the contract on instantiation */
  funds: Coin[];
  /** Salt is an arbitrary value provided by the sender. Size can be 1 to 64. */
  salt: Uint8Array;
  /**
   * FixMsg include the msg value into the hash for the predictable address.
   * Default is false
   */
  fixMsg: boolean;
}
export interface MsgInstantiateContract2ProtoMsg {
  typeUrl: "/cosmwasm.wasm.v1.MsgInstantiateContract2";
  value: Uint8Array;
}
/**
 * MsgInstantiateContract2 create a new smart contract instance for the given
 * code id with a predicable address.
 */
export interface MsgInstantiateContract2Amino {
  /** Sender is the that actor that signed the messages */
  sender: string;
  /** Admin is an optional address that can execute migrations */
  admin: string;
  /** CodeID is the reference to the stored WASM code */
  code_id: string;
  /** Label is optional metadata to be stored with a contract instance. */
  label: string;
  /** Msg json encoded message to be passed to the contract on instantiation */
  msg: Uint8Array;
  /** Funds coins that are transferred to the contract on instantiation */
  funds: CoinAmino[];
  /** Salt is an arbitrary value provided by the sender. Size can be 1 to 64. */
  salt: Uint8Array;
  /**
   * FixMsg include the msg value into the hash for the predictable address.
   * Default is false
   */
  fix_msg: boolean;
}
export interface MsgInstantiateContract2AminoMsg {
  type: "wasm/MsgInstantiateContract2";
  value: MsgInstantiateContract2Amino;
}
/**
 * MsgInstantiateContract2 create a new smart contract instance for the given
 * code id with a predicable address.
 */
export interface MsgInstantiateContract2SDKType {
  sender: string;
  admin: string;
  code_id: bigint;
  label: string;
  msg: Uint8Array;
  funds: CoinSDKType[];
  salt: Uint8Array;
  fix_msg: boolean;
}
/** MsgInstantiateContract2Response return instantiation result data */
export interface MsgInstantiateContract2Response {
  /** Address is the bech32 address of the new contract instance. */
  address: string;
  /** Data contains bytes to returned from the contract */
  data: Uint8Array;
}
export interface MsgInstantiateContract2ResponseProtoMsg {
  typeUrl: "/cosmwasm.wasm.v1.MsgInstantiateContract2Response";
  value: Uint8Array;
}
/** MsgInstantiateContract2Response return instantiation result data */
export interface MsgInstantiateContract2ResponseAmino {
  /** Address is the bech32 address of the new contract instance. */
  address: string;
  /** Data contains bytes to returned from the contract */
  data: Uint8Array;
}
export interface MsgInstantiateContract2ResponseAminoMsg {
  type: "wasm/MsgInstantiateContract2Response";
  value: MsgInstantiateContract2ResponseAmino;
}
/** MsgInstantiateContract2Response return instantiation result data */
export interface MsgInstantiateContract2ResponseSDKType {
  address: string;
  data: Uint8Array;
}
/** MsgExecuteContract submits the given message data to a smart contract */
export interface MsgExecuteContract {
  /** Sender is the that actor that signed the messages */
  sender: string;
  /** Contract is the address of the smart contract */
  contract: string;
  /** Msg json encoded message to be passed to the contract */
  msg: Uint8Array;
  /** Funds coins that are transferred to the contract on execution */
  funds: Coin[];
}
export interface MsgExecuteContractProtoMsg {
  typeUrl: "/cosmwasm.wasm.v1.MsgExecuteContract";
  value: Uint8Array;
}
/** MsgExecuteContract submits the given message data to a smart contract */
export interface MsgExecuteContractAmino {
  /** Sender is the that actor that signed the messages */
  sender: string;
  /** Contract is the address of the smart contract */
  contract: string;
  /** Msg json encoded message to be passed to the contract */
  msg: Uint8Array;
  /** Funds coins that are transferred to the contract on execution */
  funds: CoinAmino[];
}
export interface MsgExecuteContractAminoMsg {
  type: "wasm/MsgExecuteContract";
  value: MsgExecuteContractAmino;
}
/** MsgExecuteContract submits the given message data to a smart contract */
export interface MsgExecuteContractSDKType {
  sender: string;
  contract: string;
  msg: Uint8Array;
  funds: CoinSDKType[];
}
/** MsgExecuteContractResponse returns execution result data. */
export interface MsgExecuteContractResponse {
  /** Data contains bytes to returned from the contract */
  data: Uint8Array;
}
export interface MsgExecuteContractResponseProtoMsg {
  typeUrl: "/cosmwasm.wasm.v1.MsgExecuteContractResponse";
  value: Uint8Array;
}
/** MsgExecuteContractResponse returns execution result data. */
export interface MsgExecuteContractResponseAmino {
  /** Data contains bytes to returned from the contract */
  data: Uint8Array;
}
export interface MsgExecuteContractResponseAminoMsg {
  type: "wasm/MsgExecuteContractResponse";
  value: MsgExecuteContractResponseAmino;
}
/** MsgExecuteContractResponse returns execution result data. */
export interface MsgExecuteContractResponseSDKType {
  data: Uint8Array;
}
/** MsgMigrateContract runs a code upgrade/ downgrade for a smart contract */
export interface MsgMigrateContract {
  /** Sender is the that actor that signed the messages */
  sender: string;
  /** Contract is the address of the smart contract */
  contract: string;
  /** CodeID references the new WASM code */
  codeId: bigint;
  /** Msg json encoded message to be passed to the contract on migration */
  msg: Uint8Array;
}
export interface MsgMigrateContractProtoMsg {
  typeUrl: "/cosmwasm.wasm.v1.MsgMigrateContract";
  value: Uint8Array;
}
/** MsgMigrateContract runs a code upgrade/ downgrade for a smart contract */
export interface MsgMigrateContractAmino {
  /** Sender is the that actor that signed the messages */
  sender: string;
  /** Contract is the address of the smart contract */
  contract: string;
  /** CodeID references the new WASM code */
  code_id: string;
  /** Msg json encoded message to be passed to the contract on migration */
  msg: Uint8Array;
}
export interface MsgMigrateContractAminoMsg {
  type: "wasm/MsgMigrateContract";
  value: MsgMigrateContractAmino;
}
/** MsgMigrateContract runs a code upgrade/ downgrade for a smart contract */
export interface MsgMigrateContractSDKType {
  sender: string;
  contract: string;
  code_id: bigint;
  msg: Uint8Array;
}
/** MsgMigrateContractResponse returns contract migration result data. */
export interface MsgMigrateContractResponse {
  /**
   * Data contains same raw bytes returned as data from the wasm contract.
   * (May be empty)
   */
  data: Uint8Array;
}
export interface MsgMigrateContractResponseProtoMsg {
  typeUrl: "/cosmwasm.wasm.v1.MsgMigrateContractResponse";
  value: Uint8Array;
}
/** MsgMigrateContractResponse returns contract migration result data. */
export interface MsgMigrateContractResponseAmino {
  /**
   * Data contains same raw bytes returned as data from the wasm contract.
   * (May be empty)
   */
  data: Uint8Array;
}
export interface MsgMigrateContractResponseAminoMsg {
  type: "wasm/MsgMigrateContractResponse";
  value: MsgMigrateContractResponseAmino;
}
/** MsgMigrateContractResponse returns contract migration result data. */
export interface MsgMigrateContractResponseSDKType {
  data: Uint8Array;
}
/** MsgUpdateAdmin sets a new admin for a smart contract */
export interface MsgUpdateAdmin {
  /** Sender is the that actor that signed the messages */
  sender: string;
  /** NewAdmin address to be set */
  newAdmin: string;
  /** Contract is the address of the smart contract */
  contract: string;
}
export interface MsgUpdateAdminProtoMsg {
  typeUrl: "/cosmwasm.wasm.v1.MsgUpdateAdmin";
  value: Uint8Array;
}
/** MsgUpdateAdmin sets a new admin for a smart contract */
export interface MsgUpdateAdminAmino {
  /** Sender is the that actor that signed the messages */
  sender: string;
  /** NewAdmin address to be set */
  new_admin: string;
  /** Contract is the address of the smart contract */
  contract: string;
}
export interface MsgUpdateAdminAminoMsg {
  type: "wasm/MsgUpdateAdmin";
  value: MsgUpdateAdminAmino;
}
/** MsgUpdateAdmin sets a new admin for a smart contract */
export interface MsgUpdateAdminSDKType {
  sender: string;
  new_admin: string;
  contract: string;
}
/** MsgUpdateAdminResponse returns empty data */
export interface MsgUpdateAdminResponse {}
export interface MsgUpdateAdminResponseProtoMsg {
  typeUrl: "/cosmwasm.wasm.v1.MsgUpdateAdminResponse";
  value: Uint8Array;
}
/** MsgUpdateAdminResponse returns empty data */
export interface MsgUpdateAdminResponseAmino {}
export interface MsgUpdateAdminResponseAminoMsg {
  type: "wasm/MsgUpdateAdminResponse";
  value: MsgUpdateAdminResponseAmino;
}
/** MsgUpdateAdminResponse returns empty data */
export interface MsgUpdateAdminResponseSDKType {}
/** MsgClearAdmin removes any admin stored for a smart contract */
export interface MsgClearAdmin {
  /** Sender is the actor that signed the messages */
  sender: string;
  /** Contract is the address of the smart contract */
  contract: string;
}
export interface MsgClearAdminProtoMsg {
  typeUrl: "/cosmwasm.wasm.v1.MsgClearAdmin";
  value: Uint8Array;
}
/** MsgClearAdmin removes any admin stored for a smart contract */
export interface MsgClearAdminAmino {
  /** Sender is the actor that signed the messages */
  sender: string;
  /** Contract is the address of the smart contract */
  contract: string;
}
export interface MsgClearAdminAminoMsg {
  type: "wasm/MsgClearAdmin";
  value: MsgClearAdminAmino;
}
/** MsgClearAdmin removes any admin stored for a smart contract */
export interface MsgClearAdminSDKType {
  sender: string;
  contract: string;
}
/** MsgClearAdminResponse returns empty data */
export interface MsgClearAdminResponse {}
export interface MsgClearAdminResponseProtoMsg {
  typeUrl: "/cosmwasm.wasm.v1.MsgClearAdminResponse";
  value: Uint8Array;
}
/** MsgClearAdminResponse returns empty data */
export interface MsgClearAdminResponseAmino {}
export interface MsgClearAdminResponseAminoMsg {
  type: "wasm/MsgClearAdminResponse";
  value: MsgClearAdminResponseAmino;
}
/** MsgClearAdminResponse returns empty data */
export interface MsgClearAdminResponseSDKType {}
/** MsgUpdateInstantiateConfig updates instantiate config for a smart contract */
export interface MsgUpdateInstantiateConfig {
  /** Sender is the that actor that signed the messages */
  sender: string;
  /** CodeID references the stored WASM code */
  codeId: bigint;
  /** NewInstantiatePermission is the new access control */
  newInstantiatePermission: AccessConfig | undefined;
}
export interface MsgUpdateInstantiateConfigProtoMsg {
  typeUrl: "/cosmwasm.wasm.v1.MsgUpdateInstantiateConfig";
  value: Uint8Array;
}
/** MsgUpdateInstantiateConfig updates instantiate config for a smart contract */
export interface MsgUpdateInstantiateConfigAmino {
  /** Sender is the that actor that signed the messages */
  sender: string;
  /** CodeID references the stored WASM code */
  code_id: string;
  /** NewInstantiatePermission is the new access control */
  new_instantiate_permission?: AccessConfigAmino | undefined;
}
export interface MsgUpdateInstantiateConfigAminoMsg {
  type: "wasm/MsgUpdateInstantiateConfig";
  value: MsgUpdateInstantiateConfigAmino;
}
/** MsgUpdateInstantiateConfig updates instantiate config for a smart contract */
export interface MsgUpdateInstantiateConfigSDKType {
  sender: string;
  code_id: bigint;
  new_instantiate_permission: AccessConfigSDKType | undefined;
}
/** MsgUpdateInstantiateConfigResponse returns empty data */
export interface MsgUpdateInstantiateConfigResponse {}
export interface MsgUpdateInstantiateConfigResponseProtoMsg {
  typeUrl: "/cosmwasm.wasm.v1.MsgUpdateInstantiateConfigResponse";
  value: Uint8Array;
}
/** MsgUpdateInstantiateConfigResponse returns empty data */
export interface MsgUpdateInstantiateConfigResponseAmino {}
export interface MsgUpdateInstantiateConfigResponseAminoMsg {
  type: "wasm/MsgUpdateInstantiateConfigResponse";
  value: MsgUpdateInstantiateConfigResponseAmino;
}
/** MsgUpdateInstantiateConfigResponse returns empty data */
export interface MsgUpdateInstantiateConfigResponseSDKType {}
/**
 * MsgUpdateParams is the MsgUpdateParams request type.
 * 
 * Since: 0.40
 */
export interface MsgUpdateParams {
  /** Authority is the address of the governance account. */
  authority: string;
  /**
   * params defines the x/wasm parameters to update.
   * 
   * NOTE: All parameters must be supplied.
   */
  params: Params | undefined;
}
export interface MsgUpdateParamsProtoMsg {
  typeUrl: "/cosmwasm.wasm.v1.MsgUpdateParams";
  value: Uint8Array;
}
/**
 * MsgUpdateParams is the MsgUpdateParams request type.
 * 
 * Since: 0.40
 */
export interface MsgUpdateParamsAmino {
  /** Authority is the address of the governance account. */
  authority: string;
  /**
   * params defines the x/wasm parameters to update.
   * 
   * NOTE: All parameters must be supplied.
   */
  params?: ParamsAmino | undefined;
}
export interface MsgUpdateParamsAminoMsg {
  type: "wasm/MsgUpdateParams";
  value: MsgUpdateParamsAmino;
}
/**
 * MsgUpdateParams is the MsgUpdateParams request type.
 * 
 * Since: 0.40
 */
export interface MsgUpdateParamsSDKType {
  authority: string;
  params: ParamsSDKType | undefined;
}
/**
 * MsgUpdateParamsResponse defines the response structure for executing a
 * MsgUpdateParams message.
 * 
 * Since: 0.40
 */
export interface MsgUpdateParamsResponse {}
export interface MsgUpdateParamsResponseProtoMsg {
  typeUrl: "/cosmwasm.wasm.v1.MsgUpdateParamsResponse";
  value: Uint8Array;
}
/**
 * MsgUpdateParamsResponse defines the response structure for executing a
 * MsgUpdateParams message.
 * 
 * Since: 0.40
 */
export interface MsgUpdateParamsResponseAmino {}
export interface MsgUpdateParamsResponseAminoMsg {
  type: "wasm/MsgUpdateParamsResponse";
  value: MsgUpdateParamsResponseAmino;
}
/**
 * MsgUpdateParamsResponse defines the response structure for executing a
 * MsgUpdateParams message.
 * 
 * Since: 0.40
 */
export interface MsgUpdateParamsResponseSDKType {}
/**
 * MsgSudoContract is the MsgSudoContract request type.
 * 
 * Since: 0.40
 */
export interface MsgSudoContract {
  /** Authority is the address of the governance account. */
  authority: string;
  /** Contract is the address of the smart contract */
  contract: string;
  /** Msg json encoded message to be passed to the contract as sudo */
  msg: Uint8Array;
}
export interface MsgSudoContractProtoMsg {
  typeUrl: "/cosmwasm.wasm.v1.MsgSudoContract";
  value: Uint8Array;
}
/**
 * MsgSudoContract is the MsgSudoContract request type.
 * 
 * Since: 0.40
 */
export interface MsgSudoContractAmino {
  /** Authority is the address of the governance account. */
  authority: string;
  /** Contract is the address of the smart contract */
  contract: string;
  /** Msg json encoded message to be passed to the contract as sudo */
  msg: Uint8Array;
}
export interface MsgSudoContractAminoMsg {
  type: "wasm/MsgSudoContract";
  value: MsgSudoContractAmino;
}
/**
 * MsgSudoContract is the MsgSudoContract request type.
 * 
 * Since: 0.40
 */
export interface MsgSudoContractSDKType {
  authority: string;
  contract: string;
  msg: Uint8Array;
}
/**
 * MsgSudoContractResponse defines the response structure for executing a
 * MsgSudoContract message.
 * 
 * Since: 0.40
 */
export interface MsgSudoContractResponse {
  /** Data contains bytes to returned from the contract */
  data: Uint8Array;
}
export interface MsgSudoContractResponseProtoMsg {
  typeUrl: "/cosmwasm.wasm.v1.MsgSudoContractResponse";
  value: Uint8Array;
}
/**
 * MsgSudoContractResponse defines the response structure for executing a
 * MsgSudoContract message.
 * 
 * Since: 0.40
 */
export interface MsgSudoContractResponseAmino {
  /** Data contains bytes to returned from the contract */
  data: Uint8Array;
}
export interface MsgSudoContractResponseAminoMsg {
  type: "wasm/MsgSudoContractResponse";
  value: MsgSudoContractResponseAmino;
}
/**
 * MsgSudoContractResponse defines the response structure for executing a
 * MsgSudoContract message.
 * 
 * Since: 0.40
 */
export interface MsgSudoContractResponseSDKType {
  data: Uint8Array;
}
/**
 * MsgPinCodes is the MsgPinCodes request type.
 * 
 * Since: 0.40
 */
export interface MsgPinCodes {
  /** Authority is the address of the governance account. */
  authority: string;
  /** CodeIDs references the new WASM codes */
  codeIds: bigint[];
}
export interface MsgPinCodesProtoMsg {
  typeUrl: "/cosmwasm.wasm.v1.MsgPinCodes";
  value: Uint8Array;
}
/**
 * MsgPinCodes is the MsgPinCodes request type.
 * 
 * Since: 0.40
 */
export interface MsgPinCodesAmino {
  /** Authority is the address of the governance account. */
  authority: string;
  /** CodeIDs references the new WASM codes */
  code_ids: string[];
}
export interface MsgPinCodesAminoMsg {
  type: "wasm/MsgPinCodes";
  value: MsgPinCodesAmino;
}
/**
 * MsgPinCodes is the MsgPinCodes request type.
 * 
 * Since: 0.40
 */
export interface MsgPinCodesSDKType {
  authority: string;
  code_ids: bigint[];
}
/**
 * MsgPinCodesResponse defines the response structure for executing a
 * MsgPinCodes message.
 * 
 * Since: 0.40
 */
export interface MsgPinCodesResponse {}
export interface MsgPinCodesResponseProtoMsg {
  typeUrl: "/cosmwasm.wasm.v1.MsgPinCodesResponse";
  value: Uint8Array;
}
/**
 * MsgPinCodesResponse defines the response structure for executing a
 * MsgPinCodes message.
 * 
 * Since: 0.40
 */
export interface MsgPinCodesResponseAmino {}
export interface MsgPinCodesResponseAminoMsg {
  type: "wasm/MsgPinCodesResponse";
  value: MsgPinCodesResponseAmino;
}
/**
 * MsgPinCodesResponse defines the response structure for executing a
 * MsgPinCodes message.
 * 
 * Since: 0.40
 */
export interface MsgPinCodesResponseSDKType {}
/**
 * MsgUnpinCodes is the MsgUnpinCodes request type.
 * 
 * Since: 0.40
 */
export interface MsgUnpinCodes {
  /** Authority is the address of the governance account. */
  authority: string;
  /** CodeIDs references the WASM codes */
  codeIds: bigint[];
}
export interface MsgUnpinCodesProtoMsg {
  typeUrl: "/cosmwasm.wasm.v1.MsgUnpinCodes";
  value: Uint8Array;
}
/**
 * MsgUnpinCodes is the MsgUnpinCodes request type.
 * 
 * Since: 0.40
 */
export interface MsgUnpinCodesAmino {
  /** Authority is the address of the governance account. */
  authority: string;
  /** CodeIDs references the WASM codes */
  code_ids: string[];
}
export interface MsgUnpinCodesAminoMsg {
  type: "wasm/MsgUnpinCodes";
  value: MsgUnpinCodesAmino;
}
/**
 * MsgUnpinCodes is the MsgUnpinCodes request type.
 * 
 * Since: 0.40
 */
export interface MsgUnpinCodesSDKType {
  authority: string;
  code_ids: bigint[];
}
/**
 * MsgUnpinCodesResponse defines the response structure for executing a
 * MsgUnpinCodes message.
 * 
 * Since: 0.40
 */
export interface MsgUnpinCodesResponse {}
export interface MsgUnpinCodesResponseProtoMsg {
  typeUrl: "/cosmwasm.wasm.v1.MsgUnpinCodesResponse";
  value: Uint8Array;
}
/**
 * MsgUnpinCodesResponse defines the response structure for executing a
 * MsgUnpinCodes message.
 * 
 * Since: 0.40
 */
export interface MsgUnpinCodesResponseAmino {}
export interface MsgUnpinCodesResponseAminoMsg {
  type: "wasm/MsgUnpinCodesResponse";
  value: MsgUnpinCodesResponseAmino;
}
/**
 * MsgUnpinCodesResponse defines the response structure for executing a
 * MsgUnpinCodes message.
 * 
 * Since: 0.40
 */
export interface MsgUnpinCodesResponseSDKType {}
/**
 * MsgStoreAndInstantiateContract is the MsgStoreAndInstantiateContract
 * request type.
 * 
 * Since: 0.40
 */
export interface MsgStoreAndInstantiateContract {
  /** Authority is the address of the governance account. */
  authority: string;
  /** WASMByteCode can be raw or gzip compressed */
  wasmByteCode: Uint8Array;
  /** InstantiatePermission to apply on contract creation, optional */
  instantiatePermission: AccessConfig | undefined;
  /**
   * UnpinCode code on upload, optional. As default the uploaded contract is
   * pinned to cache.
   */
  unpinCode: boolean;
  /** Admin is an optional address that can execute migrations */
  admin: string;
  /** Label is optional metadata to be stored with a constract instance. */
  label: string;
  /** Msg json encoded message to be passed to the contract on instantiation */
  msg: Uint8Array;
  /**
   * Funds coins that are transferred from the authority account to the contract
   * on instantiation
   */
  funds: Coin[];
  /** Source is the URL where the code is hosted */
  source: string;
  /**
   * Builder is the docker image used to build the code deterministically, used
   * for smart contract verification
   */
  builder: string;
  /**
   * CodeHash is the SHA256 sum of the code outputted by builder, used for smart
   * contract verification
   */
  codeHash: Uint8Array;
}
export interface MsgStoreAndInstantiateContractProtoMsg {
  typeUrl: "/cosmwasm.wasm.v1.MsgStoreAndInstantiateContract";
  value: Uint8Array;
}
/**
 * MsgStoreAndInstantiateContract is the MsgStoreAndInstantiateContract
 * request type.
 * 
 * Since: 0.40
 */
export interface MsgStoreAndInstantiateContractAmino {
  /** Authority is the address of the governance account. */
  authority: string;
  /** WASMByteCode can be raw or gzip compressed */
  wasm_byte_code: string;
  /** InstantiatePermission to apply on contract creation, optional */
  instantiate_permission?: AccessConfigAmino | undefined;
  /**
   * UnpinCode code on upload, optional. As default the uploaded contract is
   * pinned to cache.
   */
  unpin_code: boolean;
  /** Admin is an optional address that can execute migrations */
  admin: string;
  /** Label is optional metadata to be stored with a constract instance. */
  label: string;
  /** Msg json encoded message to be passed to the contract on instantiation */
  msg: Uint8Array;
  /**
   * Funds coins that are transferred from the authority account to the contract
   * on instantiation
   */
  funds: CoinAmino[];
  /** Source is the URL where the code is hosted */
  source: string;
  /**
   * Builder is the docker image used to build the code deterministically, used
   * for smart contract verification
   */
  builder: string;
  /**
   * CodeHash is the SHA256 sum of the code outputted by builder, used for smart
   * contract verification
   */
  code_hash: Uint8Array;
}
export interface MsgStoreAndInstantiateContractAminoMsg {
  type: "wasm/MsgStoreAndInstantiateContract";
  value: MsgStoreAndInstantiateContractAmino;
}
/**
 * MsgStoreAndInstantiateContract is the MsgStoreAndInstantiateContract
 * request type.
 * 
 * Since: 0.40
 */
export interface MsgStoreAndInstantiateContractSDKType {
  authority: string;
  wasm_byte_code: Uint8Array;
  instantiate_permission: AccessConfigSDKType | undefined;
  unpin_code: boolean;
  admin: string;
  label: string;
  msg: Uint8Array;
  funds: CoinSDKType[];
  source: string;
  builder: string;
  code_hash: Uint8Array;
}
/**
 * MsgStoreAndInstantiateContractResponse defines the response structure
 * for executing a MsgStoreAndInstantiateContract message.
 * 
 * Since: 0.40
 */
export interface MsgStoreAndInstantiateContractResponse {
  /** Address is the bech32 address of the new contract instance. */
  address: string;
  /** Data contains bytes to returned from the contract */
  data: Uint8Array;
}
export interface MsgStoreAndInstantiateContractResponseProtoMsg {
  typeUrl: "/cosmwasm.wasm.v1.MsgStoreAndInstantiateContractResponse";
  value: Uint8Array;
}
/**
 * MsgStoreAndInstantiateContractResponse defines the response structure
 * for executing a MsgStoreAndInstantiateContract message.
 * 
 * Since: 0.40
 */
export interface MsgStoreAndInstantiateContractResponseAmino {
  /** Address is the bech32 address of the new contract instance. */
  address: string;
  /** Data contains bytes to returned from the contract */
  data: Uint8Array;
}
export interface MsgStoreAndInstantiateContractResponseAminoMsg {
  type: "wasm/MsgStoreAndInstantiateContractResponse";
  value: MsgStoreAndInstantiateContractResponseAmino;
}
/**
 * MsgStoreAndInstantiateContractResponse defines the response structure
 * for executing a MsgStoreAndInstantiateContract message.
 * 
 * Since: 0.40
 */
export interface MsgStoreAndInstantiateContractResponseSDKType {
  address: string;
  data: Uint8Array;
}
function createBaseMsgStoreCode(): MsgStoreCode {
  return {
    sender: "",
    wasmByteCode: new Uint8Array(),
    instantiatePermission: AccessConfig.fromPartial({})
  };
}
export const MsgStoreCode = {
  typeUrl: "/cosmwasm.wasm.v1.MsgStoreCode",
  aminoType: "wasm/MsgStoreCode",
  encode(message: MsgStoreCode, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    if (message.wasmByteCode.length !== 0) {
      writer.uint32(18).bytes(message.wasmByteCode);
    }
    if (message.instantiatePermission !== undefined) {
      AccessConfig.encode(message.instantiatePermission, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgStoreCode {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgStoreCode();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;
        case 2:
          message.wasmByteCode = reader.bytes();
          break;
        case 5:
          message.instantiatePermission = AccessConfig.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgStoreCode {
    return {
      sender: isSet(object.sender) ? String(object.sender) : "",
      wasmByteCode: isSet(object.wasmByteCode) ? bytesFromBase64(object.wasmByteCode) : new Uint8Array(),
      instantiatePermission: isSet(object.instantiatePermission) ? AccessConfig.fromJSON(object.instantiatePermission) : undefined
    };
  },
  toJSON(message: MsgStoreCode): unknown {
    const obj: any = {};
    message.sender !== undefined && (obj.sender = message.sender);
    message.wasmByteCode !== undefined && (obj.wasmByteCode = base64FromBytes(message.wasmByteCode !== undefined ? message.wasmByteCode : new Uint8Array()));
    message.instantiatePermission !== undefined && (obj.instantiatePermission = message.instantiatePermission ? AccessConfig.toJSON(message.instantiatePermission) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<MsgStoreCode>): MsgStoreCode {
    const message = createBaseMsgStoreCode();
    message.sender = object.sender ?? "";
    message.wasmByteCode = object.wasmByteCode ?? new Uint8Array();
    message.instantiatePermission = object.instantiatePermission !== undefined && object.instantiatePermission !== null ? AccessConfig.fromPartial(object.instantiatePermission) : undefined;
    return message;
  },
  fromSDK(object: MsgStoreCodeSDKType): MsgStoreCode {
    return {
      sender: object?.sender,
      wasmByteCode: object?.wasm_byte_code,
      instantiatePermission: object.instantiate_permission ? AccessConfig.fromSDK(object.instantiate_permission) : undefined
    };
  },
  toSDK(message: MsgStoreCode): MsgStoreCodeSDKType {
    const obj: any = {};
    obj.sender = message.sender;
    obj.wasm_byte_code = message.wasmByteCode;
    message.instantiatePermission !== undefined && (obj.instantiate_permission = message.instantiatePermission ? AccessConfig.toSDK(message.instantiatePermission) : undefined);
    return obj;
  },
  fromAmino(object: MsgStoreCodeAmino): MsgStoreCode {
    return {
      sender: object.sender,
      wasmByteCode: fromBase64(object.wasm_byte_code),
      instantiatePermission: object?.instantiate_permission ? AccessConfig.fromAmino(object.instantiate_permission) : undefined
    };
  },
  toAmino(message: MsgStoreCode): MsgStoreCodeAmino {
    const obj: any = {};
    obj.sender = message.sender;
    obj.wasm_byte_code = message.wasmByteCode ? toBase64(message.wasmByteCode) : undefined;
    obj.instantiate_permission = message.instantiatePermission ? AccessConfig.toAmino(message.instantiatePermission) : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgStoreCodeAminoMsg): MsgStoreCode {
    return MsgStoreCode.fromAmino(object.value);
  },
  toAminoMsg(message: MsgStoreCode): MsgStoreCodeAminoMsg {
    return {
      type: "wasm/MsgStoreCode",
      value: MsgStoreCode.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgStoreCodeProtoMsg): MsgStoreCode {
    return MsgStoreCode.decode(message.value);
  },
  toProto(message: MsgStoreCode): Uint8Array {
    return MsgStoreCode.encode(message).finish();
  },
  toProtoMsg(message: MsgStoreCode): MsgStoreCodeProtoMsg {
    return {
      typeUrl: "/cosmwasm.wasm.v1.MsgStoreCode",
      value: MsgStoreCode.encode(message).finish()
    };
  }
};
function createBaseMsgStoreCodeResponse(): MsgStoreCodeResponse {
  return {
    codeId: BigInt(0),
    checksum: new Uint8Array()
  };
}
export const MsgStoreCodeResponse = {
  typeUrl: "/cosmwasm.wasm.v1.MsgStoreCodeResponse",
  aminoType: "wasm/MsgStoreCodeResponse",
  encode(message: MsgStoreCodeResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.codeId !== BigInt(0)) {
      writer.uint32(8).uint64(message.codeId);
    }
    if (message.checksum.length !== 0) {
      writer.uint32(18).bytes(message.checksum);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgStoreCodeResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgStoreCodeResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.codeId = reader.uint64();
          break;
        case 2:
          message.checksum = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgStoreCodeResponse {
    return {
      codeId: isSet(object.codeId) ? BigInt(object.codeId.toString()) : BigInt(0),
      checksum: isSet(object.checksum) ? bytesFromBase64(object.checksum) : new Uint8Array()
    };
  },
  toJSON(message: MsgStoreCodeResponse): unknown {
    const obj: any = {};
    message.codeId !== undefined && (obj.codeId = (message.codeId || BigInt(0)).toString());
    message.checksum !== undefined && (obj.checksum = base64FromBytes(message.checksum !== undefined ? message.checksum : new Uint8Array()));
    return obj;
  },
  fromPartial(object: DeepPartial<MsgStoreCodeResponse>): MsgStoreCodeResponse {
    const message = createBaseMsgStoreCodeResponse();
    message.codeId = object.codeId !== undefined && object.codeId !== null ? BigInt(object.codeId.toString()) : BigInt(0);
    message.checksum = object.checksum ?? new Uint8Array();
    return message;
  },
  fromSDK(object: MsgStoreCodeResponseSDKType): MsgStoreCodeResponse {
    return {
      codeId: object?.code_id,
      checksum: object?.checksum
    };
  },
  toSDK(message: MsgStoreCodeResponse): MsgStoreCodeResponseSDKType {
    const obj: any = {};
    obj.code_id = message.codeId;
    obj.checksum = message.checksum;
    return obj;
  },
  fromAmino(object: MsgStoreCodeResponseAmino): MsgStoreCodeResponse {
    return {
      codeId: BigInt(object.code_id),
      checksum: object.checksum
    };
  },
  toAmino(message: MsgStoreCodeResponse): MsgStoreCodeResponseAmino {
    const obj: any = {};
    obj.code_id = message.codeId ? message.codeId.toString() : undefined;
    obj.checksum = message.checksum;
    return obj;
  },
  fromAminoMsg(object: MsgStoreCodeResponseAminoMsg): MsgStoreCodeResponse {
    return MsgStoreCodeResponse.fromAmino(object.value);
  },
  toAminoMsg(message: MsgStoreCodeResponse): MsgStoreCodeResponseAminoMsg {
    return {
      type: "wasm/MsgStoreCodeResponse",
      value: MsgStoreCodeResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgStoreCodeResponseProtoMsg): MsgStoreCodeResponse {
    return MsgStoreCodeResponse.decode(message.value);
  },
  toProto(message: MsgStoreCodeResponse): Uint8Array {
    return MsgStoreCodeResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgStoreCodeResponse): MsgStoreCodeResponseProtoMsg {
    return {
      typeUrl: "/cosmwasm.wasm.v1.MsgStoreCodeResponse",
      value: MsgStoreCodeResponse.encode(message).finish()
    };
  }
};
function createBaseMsgInstantiateContract(): MsgInstantiateContract {
  return {
    sender: "",
    admin: "",
    codeId: BigInt(0),
    label: "",
    msg: new Uint8Array(),
    funds: []
  };
}
export const MsgInstantiateContract = {
  typeUrl: "/cosmwasm.wasm.v1.MsgInstantiateContract",
  aminoType: "wasm/MsgInstantiateContract",
  encode(message: MsgInstantiateContract, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    if (message.admin !== "") {
      writer.uint32(18).string(message.admin);
    }
    if (message.codeId !== BigInt(0)) {
      writer.uint32(24).uint64(message.codeId);
    }
    if (message.label !== "") {
      writer.uint32(34).string(message.label);
    }
    if (message.msg.length !== 0) {
      writer.uint32(42).bytes(message.msg);
    }
    for (const v of message.funds) {
      Coin.encode(v!, writer.uint32(50).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgInstantiateContract {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgInstantiateContract();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;
        case 2:
          message.admin = reader.string();
          break;
        case 3:
          message.codeId = reader.uint64();
          break;
        case 4:
          message.label = reader.string();
          break;
        case 5:
          message.msg = reader.bytes();
          break;
        case 6:
          message.funds.push(Coin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgInstantiateContract {
    return {
      sender: isSet(object.sender) ? String(object.sender) : "",
      admin: isSet(object.admin) ? String(object.admin) : "",
      codeId: isSet(object.codeId) ? BigInt(object.codeId.toString()) : BigInt(0),
      label: isSet(object.label) ? String(object.label) : "",
      msg: isSet(object.msg) ? bytesFromBase64(object.msg) : new Uint8Array(),
      funds: Array.isArray(object?.funds) ? object.funds.map((e: any) => Coin.fromJSON(e)) : []
    };
  },
  toJSON(message: MsgInstantiateContract): unknown {
    const obj: any = {};
    message.sender !== undefined && (obj.sender = message.sender);
    message.admin !== undefined && (obj.admin = message.admin);
    message.codeId !== undefined && (obj.codeId = (message.codeId || BigInt(0)).toString());
    message.label !== undefined && (obj.label = message.label);
    message.msg !== undefined && (obj.msg = base64FromBytes(message.msg !== undefined ? message.msg : new Uint8Array()));
    if (message.funds) {
      obj.funds = message.funds.map(e => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.funds = [];
    }
    return obj;
  },
  fromPartial(object: DeepPartial<MsgInstantiateContract>): MsgInstantiateContract {
    const message = createBaseMsgInstantiateContract();
    message.sender = object.sender ?? "";
    message.admin = object.admin ?? "";
    message.codeId = object.codeId !== undefined && object.codeId !== null ? BigInt(object.codeId.toString()) : BigInt(0);
    message.label = object.label ?? "";
    message.msg = object.msg ?? new Uint8Array();
    message.funds = object.funds?.map(e => Coin.fromPartial(e)) || [];
    return message;
  },
  fromSDK(object: MsgInstantiateContractSDKType): MsgInstantiateContract {
    return {
      sender: object?.sender,
      admin: object?.admin,
      codeId: object?.code_id,
      label: object?.label,
      msg: object?.msg,
      funds: Array.isArray(object?.funds) ? object.funds.map((e: any) => Coin.fromSDK(e)) : []
    };
  },
  toSDK(message: MsgInstantiateContract): MsgInstantiateContractSDKType {
    const obj: any = {};
    obj.sender = message.sender;
    obj.admin = message.admin;
    obj.code_id = message.codeId;
    obj.label = message.label;
    obj.msg = message.msg;
    if (message.funds) {
      obj.funds = message.funds.map(e => e ? Coin.toSDK(e) : undefined);
    } else {
      obj.funds = [];
    }
    return obj;
  },
  fromAmino(object: MsgInstantiateContractAmino): MsgInstantiateContract {
    return {
      sender: object.sender,
      admin: object.admin,
      codeId: BigInt(object.code_id),
      label: object.label,
      msg: toUtf8(JSON.stringify(object.msg)),
      funds: Array.isArray(object?.funds) ? object.funds.map((e: any) => Coin.fromAmino(e)) : []
    };
  },
  toAmino(message: MsgInstantiateContract): MsgInstantiateContractAmino {
    const obj: any = {};
    obj.sender = message.sender;
    obj.admin = message.admin;
    obj.code_id = message.codeId ? message.codeId.toString() : undefined;
    obj.label = message.label;
    obj.msg = message.msg ? JSON.parse(fromUtf8(message.msg)) : undefined;
    if (message.funds) {
      obj.funds = message.funds.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.funds = [];
    }
    return obj;
  },
  fromAminoMsg(object: MsgInstantiateContractAminoMsg): MsgInstantiateContract {
    return MsgInstantiateContract.fromAmino(object.value);
  },
  toAminoMsg(message: MsgInstantiateContract): MsgInstantiateContractAminoMsg {
    return {
      type: "wasm/MsgInstantiateContract",
      value: MsgInstantiateContract.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgInstantiateContractProtoMsg): MsgInstantiateContract {
    return MsgInstantiateContract.decode(message.value);
  },
  toProto(message: MsgInstantiateContract): Uint8Array {
    return MsgInstantiateContract.encode(message).finish();
  },
  toProtoMsg(message: MsgInstantiateContract): MsgInstantiateContractProtoMsg {
    return {
      typeUrl: "/cosmwasm.wasm.v1.MsgInstantiateContract",
      value: MsgInstantiateContract.encode(message).finish()
    };
  }
};
function createBaseMsgInstantiateContractResponse(): MsgInstantiateContractResponse {
  return {
    address: "",
    data: new Uint8Array()
  };
}
export const MsgInstantiateContractResponse = {
  typeUrl: "/cosmwasm.wasm.v1.MsgInstantiateContractResponse",
  aminoType: "wasm/MsgInstantiateContractResponse",
  encode(message: MsgInstantiateContractResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.data.length !== 0) {
      writer.uint32(18).bytes(message.data);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgInstantiateContractResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgInstantiateContractResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        case 2:
          message.data = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgInstantiateContractResponse {
    return {
      address: isSet(object.address) ? String(object.address) : "",
      data: isSet(object.data) ? bytesFromBase64(object.data) : new Uint8Array()
    };
  },
  toJSON(message: MsgInstantiateContractResponse): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    message.data !== undefined && (obj.data = base64FromBytes(message.data !== undefined ? message.data : new Uint8Array()));
    return obj;
  },
  fromPartial(object: DeepPartial<MsgInstantiateContractResponse>): MsgInstantiateContractResponse {
    const message = createBaseMsgInstantiateContractResponse();
    message.address = object.address ?? "";
    message.data = object.data ?? new Uint8Array();
    return message;
  },
  fromSDK(object: MsgInstantiateContractResponseSDKType): MsgInstantiateContractResponse {
    return {
      address: object?.address,
      data: object?.data
    };
  },
  toSDK(message: MsgInstantiateContractResponse): MsgInstantiateContractResponseSDKType {
    const obj: any = {};
    obj.address = message.address;
    obj.data = message.data;
    return obj;
  },
  fromAmino(object: MsgInstantiateContractResponseAmino): MsgInstantiateContractResponse {
    return {
      address: object.address,
      data: object.data
    };
  },
  toAmino(message: MsgInstantiateContractResponse): MsgInstantiateContractResponseAmino {
    const obj: any = {};
    obj.address = message.address;
    obj.data = message.data;
    return obj;
  },
  fromAminoMsg(object: MsgInstantiateContractResponseAminoMsg): MsgInstantiateContractResponse {
    return MsgInstantiateContractResponse.fromAmino(object.value);
  },
  toAminoMsg(message: MsgInstantiateContractResponse): MsgInstantiateContractResponseAminoMsg {
    return {
      type: "wasm/MsgInstantiateContractResponse",
      value: MsgInstantiateContractResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgInstantiateContractResponseProtoMsg): MsgInstantiateContractResponse {
    return MsgInstantiateContractResponse.decode(message.value);
  },
  toProto(message: MsgInstantiateContractResponse): Uint8Array {
    return MsgInstantiateContractResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgInstantiateContractResponse): MsgInstantiateContractResponseProtoMsg {
    return {
      typeUrl: "/cosmwasm.wasm.v1.MsgInstantiateContractResponse",
      value: MsgInstantiateContractResponse.encode(message).finish()
    };
  }
};
function createBaseMsgInstantiateContract2(): MsgInstantiateContract2 {
  return {
    sender: "",
    admin: "",
    codeId: BigInt(0),
    label: "",
    msg: new Uint8Array(),
    funds: [],
    salt: new Uint8Array(),
    fixMsg: false
  };
}
export const MsgInstantiateContract2 = {
  typeUrl: "/cosmwasm.wasm.v1.MsgInstantiateContract2",
  aminoType: "wasm/MsgInstantiateContract2",
  encode(message: MsgInstantiateContract2, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    if (message.admin !== "") {
      writer.uint32(18).string(message.admin);
    }
    if (message.codeId !== BigInt(0)) {
      writer.uint32(24).uint64(message.codeId);
    }
    if (message.label !== "") {
      writer.uint32(34).string(message.label);
    }
    if (message.msg.length !== 0) {
      writer.uint32(42).bytes(message.msg);
    }
    for (const v of message.funds) {
      Coin.encode(v!, writer.uint32(50).fork()).ldelim();
    }
    if (message.salt.length !== 0) {
      writer.uint32(58).bytes(message.salt);
    }
    if (message.fixMsg === true) {
      writer.uint32(64).bool(message.fixMsg);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgInstantiateContract2 {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgInstantiateContract2();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;
        case 2:
          message.admin = reader.string();
          break;
        case 3:
          message.codeId = reader.uint64();
          break;
        case 4:
          message.label = reader.string();
          break;
        case 5:
          message.msg = reader.bytes();
          break;
        case 6:
          message.funds.push(Coin.decode(reader, reader.uint32()));
          break;
        case 7:
          message.salt = reader.bytes();
          break;
        case 8:
          message.fixMsg = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgInstantiateContract2 {
    return {
      sender: isSet(object.sender) ? String(object.sender) : "",
      admin: isSet(object.admin) ? String(object.admin) : "",
      codeId: isSet(object.codeId) ? BigInt(object.codeId.toString()) : BigInt(0),
      label: isSet(object.label) ? String(object.label) : "",
      msg: isSet(object.msg) ? bytesFromBase64(object.msg) : new Uint8Array(),
      funds: Array.isArray(object?.funds) ? object.funds.map((e: any) => Coin.fromJSON(e)) : [],
      salt: isSet(object.salt) ? bytesFromBase64(object.salt) : new Uint8Array(),
      fixMsg: isSet(object.fixMsg) ? Boolean(object.fixMsg) : false
    };
  },
  toJSON(message: MsgInstantiateContract2): unknown {
    const obj: any = {};
    message.sender !== undefined && (obj.sender = message.sender);
    message.admin !== undefined && (obj.admin = message.admin);
    message.codeId !== undefined && (obj.codeId = (message.codeId || BigInt(0)).toString());
    message.label !== undefined && (obj.label = message.label);
    message.msg !== undefined && (obj.msg = base64FromBytes(message.msg !== undefined ? message.msg : new Uint8Array()));
    if (message.funds) {
      obj.funds = message.funds.map(e => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.funds = [];
    }
    message.salt !== undefined && (obj.salt = base64FromBytes(message.salt !== undefined ? message.salt : new Uint8Array()));
    message.fixMsg !== undefined && (obj.fixMsg = message.fixMsg);
    return obj;
  },
  fromPartial(object: DeepPartial<MsgInstantiateContract2>): MsgInstantiateContract2 {
    const message = createBaseMsgInstantiateContract2();
    message.sender = object.sender ?? "";
    message.admin = object.admin ?? "";
    message.codeId = object.codeId !== undefined && object.codeId !== null ? BigInt(object.codeId.toString()) : BigInt(0);
    message.label = object.label ?? "";
    message.msg = object.msg ?? new Uint8Array();
    message.funds = object.funds?.map(e => Coin.fromPartial(e)) || [];
    message.salt = object.salt ?? new Uint8Array();
    message.fixMsg = object.fixMsg ?? false;
    return message;
  },
  fromSDK(object: MsgInstantiateContract2SDKType): MsgInstantiateContract2 {
    return {
      sender: object?.sender,
      admin: object?.admin,
      codeId: object?.code_id,
      label: object?.label,
      msg: object?.msg,
      funds: Array.isArray(object?.funds) ? object.funds.map((e: any) => Coin.fromSDK(e)) : [],
      salt: object?.salt,
      fixMsg: object?.fix_msg
    };
  },
  toSDK(message: MsgInstantiateContract2): MsgInstantiateContract2SDKType {
    const obj: any = {};
    obj.sender = message.sender;
    obj.admin = message.admin;
    obj.code_id = message.codeId;
    obj.label = message.label;
    obj.msg = message.msg;
    if (message.funds) {
      obj.funds = message.funds.map(e => e ? Coin.toSDK(e) : undefined);
    } else {
      obj.funds = [];
    }
    obj.salt = message.salt;
    obj.fix_msg = message.fixMsg;
    return obj;
  },
  fromAmino(object: MsgInstantiateContract2Amino): MsgInstantiateContract2 {
    return {
      sender: object.sender,
      admin: object.admin,
      codeId: BigInt(object.code_id),
      label: object.label,
      msg: toUtf8(JSON.stringify(object.msg)),
      funds: Array.isArray(object?.funds) ? object.funds.map((e: any) => Coin.fromAmino(e)) : [],
      salt: object.salt,
      fixMsg: object.fix_msg
    };
  },
  toAmino(message: MsgInstantiateContract2): MsgInstantiateContract2Amino {
    const obj: any = {};
    obj.sender = message.sender;
    obj.admin = message.admin;
    obj.code_id = message.codeId ? message.codeId.toString() : undefined;
    obj.label = message.label;
    obj.msg = message.msg ? JSON.parse(fromUtf8(message.msg)) : undefined;
    if (message.funds) {
      obj.funds = message.funds.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.funds = [];
    }
    obj.salt = message.salt;
    obj.fix_msg = message.fixMsg;
    return obj;
  },
  fromAminoMsg(object: MsgInstantiateContract2AminoMsg): MsgInstantiateContract2 {
    return MsgInstantiateContract2.fromAmino(object.value);
  },
  toAminoMsg(message: MsgInstantiateContract2): MsgInstantiateContract2AminoMsg {
    return {
      type: "wasm/MsgInstantiateContract2",
      value: MsgInstantiateContract2.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgInstantiateContract2ProtoMsg): MsgInstantiateContract2 {
    return MsgInstantiateContract2.decode(message.value);
  },
  toProto(message: MsgInstantiateContract2): Uint8Array {
    return MsgInstantiateContract2.encode(message).finish();
  },
  toProtoMsg(message: MsgInstantiateContract2): MsgInstantiateContract2ProtoMsg {
    return {
      typeUrl: "/cosmwasm.wasm.v1.MsgInstantiateContract2",
      value: MsgInstantiateContract2.encode(message).finish()
    };
  }
};
function createBaseMsgInstantiateContract2Response(): MsgInstantiateContract2Response {
  return {
    address: "",
    data: new Uint8Array()
  };
}
export const MsgInstantiateContract2Response = {
  typeUrl: "/cosmwasm.wasm.v1.MsgInstantiateContract2Response",
  aminoType: "wasm/MsgInstantiateContract2Response",
  encode(message: MsgInstantiateContract2Response, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.data.length !== 0) {
      writer.uint32(18).bytes(message.data);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgInstantiateContract2Response {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgInstantiateContract2Response();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        case 2:
          message.data = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgInstantiateContract2Response {
    return {
      address: isSet(object.address) ? String(object.address) : "",
      data: isSet(object.data) ? bytesFromBase64(object.data) : new Uint8Array()
    };
  },
  toJSON(message: MsgInstantiateContract2Response): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    message.data !== undefined && (obj.data = base64FromBytes(message.data !== undefined ? message.data : new Uint8Array()));
    return obj;
  },
  fromPartial(object: DeepPartial<MsgInstantiateContract2Response>): MsgInstantiateContract2Response {
    const message = createBaseMsgInstantiateContract2Response();
    message.address = object.address ?? "";
    message.data = object.data ?? new Uint8Array();
    return message;
  },
  fromSDK(object: MsgInstantiateContract2ResponseSDKType): MsgInstantiateContract2Response {
    return {
      address: object?.address,
      data: object?.data
    };
  },
  toSDK(message: MsgInstantiateContract2Response): MsgInstantiateContract2ResponseSDKType {
    const obj: any = {};
    obj.address = message.address;
    obj.data = message.data;
    return obj;
  },
  fromAmino(object: MsgInstantiateContract2ResponseAmino): MsgInstantiateContract2Response {
    return {
      address: object.address,
      data: object.data
    };
  },
  toAmino(message: MsgInstantiateContract2Response): MsgInstantiateContract2ResponseAmino {
    const obj: any = {};
    obj.address = message.address;
    obj.data = message.data;
    return obj;
  },
  fromAminoMsg(object: MsgInstantiateContract2ResponseAminoMsg): MsgInstantiateContract2Response {
    return MsgInstantiateContract2Response.fromAmino(object.value);
  },
  toAminoMsg(message: MsgInstantiateContract2Response): MsgInstantiateContract2ResponseAminoMsg {
    return {
      type: "wasm/MsgInstantiateContract2Response",
      value: MsgInstantiateContract2Response.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgInstantiateContract2ResponseProtoMsg): MsgInstantiateContract2Response {
    return MsgInstantiateContract2Response.decode(message.value);
  },
  toProto(message: MsgInstantiateContract2Response): Uint8Array {
    return MsgInstantiateContract2Response.encode(message).finish();
  },
  toProtoMsg(message: MsgInstantiateContract2Response): MsgInstantiateContract2ResponseProtoMsg {
    return {
      typeUrl: "/cosmwasm.wasm.v1.MsgInstantiateContract2Response",
      value: MsgInstantiateContract2Response.encode(message).finish()
    };
  }
};
function createBaseMsgExecuteContract(): MsgExecuteContract {
  return {
    sender: "",
    contract: "",
    msg: new Uint8Array(),
    funds: []
  };
}
export const MsgExecuteContract = {
  typeUrl: "/cosmwasm.wasm.v1.MsgExecuteContract",
  aminoType: "wasm/MsgExecuteContract",
  encode(message: MsgExecuteContract, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    if (message.contract !== "") {
      writer.uint32(18).string(message.contract);
    }
    if (message.msg.length !== 0) {
      writer.uint32(26).bytes(message.msg);
    }
    for (const v of message.funds) {
      Coin.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgExecuteContract {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgExecuteContract();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;
        case 2:
          message.contract = reader.string();
          break;
        case 3:
          message.msg = reader.bytes();
          break;
        case 5:
          message.funds.push(Coin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgExecuteContract {
    return {
      sender: isSet(object.sender) ? String(object.sender) : "",
      contract: isSet(object.contract) ? String(object.contract) : "",
      msg: isSet(object.msg) ? bytesFromBase64(object.msg) : new Uint8Array(),
      funds: Array.isArray(object?.funds) ? object.funds.map((e: any) => Coin.fromJSON(e)) : []
    };
  },
  toJSON(message: MsgExecuteContract): unknown {
    const obj: any = {};
    message.sender !== undefined && (obj.sender = message.sender);
    message.contract !== undefined && (obj.contract = message.contract);
    message.msg !== undefined && (obj.msg = base64FromBytes(message.msg !== undefined ? message.msg : new Uint8Array()));
    if (message.funds) {
      obj.funds = message.funds.map(e => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.funds = [];
    }
    return obj;
  },
  fromPartial(object: DeepPartial<MsgExecuteContract>): MsgExecuteContract {
    const message = createBaseMsgExecuteContract();
    message.sender = object.sender ?? "";
    message.contract = object.contract ?? "";
    message.msg = object.msg ?? new Uint8Array();
    message.funds = object.funds?.map(e => Coin.fromPartial(e)) || [];
    return message;
  },
  fromSDK(object: MsgExecuteContractSDKType): MsgExecuteContract {
    return {
      sender: object?.sender,
      contract: object?.contract,
      msg: object?.msg,
      funds: Array.isArray(object?.funds) ? object.funds.map((e: any) => Coin.fromSDK(e)) : []
    };
  },
  toSDK(message: MsgExecuteContract): MsgExecuteContractSDKType {
    const obj: any = {};
    obj.sender = message.sender;
    obj.contract = message.contract;
    obj.msg = message.msg;
    if (message.funds) {
      obj.funds = message.funds.map(e => e ? Coin.toSDK(e) : undefined);
    } else {
      obj.funds = [];
    }
    return obj;
  },
  fromAmino(object: MsgExecuteContractAmino): MsgExecuteContract {
    return {
      sender: object.sender,
      contract: object.contract,
      msg: toUtf8(JSON.stringify(object.msg)),
      funds: Array.isArray(object?.funds) ? object.funds.map((e: any) => Coin.fromAmino(e)) : []
    };
  },
  toAmino(message: MsgExecuteContract): MsgExecuteContractAmino {
    const obj: any = {};
    obj.sender = message.sender;
    obj.contract = message.contract;
    obj.msg = message.msg ? JSON.parse(fromUtf8(message.msg)) : undefined;
    if (message.funds) {
      obj.funds = message.funds.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.funds = [];
    }
    return obj;
  },
  fromAminoMsg(object: MsgExecuteContractAminoMsg): MsgExecuteContract {
    return MsgExecuteContract.fromAmino(object.value);
  },
  toAminoMsg(message: MsgExecuteContract): MsgExecuteContractAminoMsg {
    return {
      type: "wasm/MsgExecuteContract",
      value: MsgExecuteContract.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgExecuteContractProtoMsg): MsgExecuteContract {
    return MsgExecuteContract.decode(message.value);
  },
  toProto(message: MsgExecuteContract): Uint8Array {
    return MsgExecuteContract.encode(message).finish();
  },
  toProtoMsg(message: MsgExecuteContract): MsgExecuteContractProtoMsg {
    return {
      typeUrl: "/cosmwasm.wasm.v1.MsgExecuteContract",
      value: MsgExecuteContract.encode(message).finish()
    };
  }
};
function createBaseMsgExecuteContractResponse(): MsgExecuteContractResponse {
  return {
    data: new Uint8Array()
  };
}
export const MsgExecuteContractResponse = {
  typeUrl: "/cosmwasm.wasm.v1.MsgExecuteContractResponse",
  aminoType: "wasm/MsgExecuteContractResponse",
  encode(message: MsgExecuteContractResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.data.length !== 0) {
      writer.uint32(10).bytes(message.data);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgExecuteContractResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgExecuteContractResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.data = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgExecuteContractResponse {
    return {
      data: isSet(object.data) ? bytesFromBase64(object.data) : new Uint8Array()
    };
  },
  toJSON(message: MsgExecuteContractResponse): unknown {
    const obj: any = {};
    message.data !== undefined && (obj.data = base64FromBytes(message.data !== undefined ? message.data : new Uint8Array()));
    return obj;
  },
  fromPartial(object: DeepPartial<MsgExecuteContractResponse>): MsgExecuteContractResponse {
    const message = createBaseMsgExecuteContractResponse();
    message.data = object.data ?? new Uint8Array();
    return message;
  },
  fromSDK(object: MsgExecuteContractResponseSDKType): MsgExecuteContractResponse {
    return {
      data: object?.data
    };
  },
  toSDK(message: MsgExecuteContractResponse): MsgExecuteContractResponseSDKType {
    const obj: any = {};
    obj.data = message.data;
    return obj;
  },
  fromAmino(object: MsgExecuteContractResponseAmino): MsgExecuteContractResponse {
    return {
      data: object.data
    };
  },
  toAmino(message: MsgExecuteContractResponse): MsgExecuteContractResponseAmino {
    const obj: any = {};
    obj.data = message.data;
    return obj;
  },
  fromAminoMsg(object: MsgExecuteContractResponseAminoMsg): MsgExecuteContractResponse {
    return MsgExecuteContractResponse.fromAmino(object.value);
  },
  toAminoMsg(message: MsgExecuteContractResponse): MsgExecuteContractResponseAminoMsg {
    return {
      type: "wasm/MsgExecuteContractResponse",
      value: MsgExecuteContractResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgExecuteContractResponseProtoMsg): MsgExecuteContractResponse {
    return MsgExecuteContractResponse.decode(message.value);
  },
  toProto(message: MsgExecuteContractResponse): Uint8Array {
    return MsgExecuteContractResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgExecuteContractResponse): MsgExecuteContractResponseProtoMsg {
    return {
      typeUrl: "/cosmwasm.wasm.v1.MsgExecuteContractResponse",
      value: MsgExecuteContractResponse.encode(message).finish()
    };
  }
};
function createBaseMsgMigrateContract(): MsgMigrateContract {
  return {
    sender: "",
    contract: "",
    codeId: BigInt(0),
    msg: new Uint8Array()
  };
}
export const MsgMigrateContract = {
  typeUrl: "/cosmwasm.wasm.v1.MsgMigrateContract",
  aminoType: "wasm/MsgMigrateContract",
  encode(message: MsgMigrateContract, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    if (message.contract !== "") {
      writer.uint32(18).string(message.contract);
    }
    if (message.codeId !== BigInt(0)) {
      writer.uint32(24).uint64(message.codeId);
    }
    if (message.msg.length !== 0) {
      writer.uint32(34).bytes(message.msg);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgMigrateContract {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgMigrateContract();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;
        case 2:
          message.contract = reader.string();
          break;
        case 3:
          message.codeId = reader.uint64();
          break;
        case 4:
          message.msg = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgMigrateContract {
    return {
      sender: isSet(object.sender) ? String(object.sender) : "",
      contract: isSet(object.contract) ? String(object.contract) : "",
      codeId: isSet(object.codeId) ? BigInt(object.codeId.toString()) : BigInt(0),
      msg: isSet(object.msg) ? bytesFromBase64(object.msg) : new Uint8Array()
    };
  },
  toJSON(message: MsgMigrateContract): unknown {
    const obj: any = {};
    message.sender !== undefined && (obj.sender = message.sender);
    message.contract !== undefined && (obj.contract = message.contract);
    message.codeId !== undefined && (obj.codeId = (message.codeId || BigInt(0)).toString());
    message.msg !== undefined && (obj.msg = base64FromBytes(message.msg !== undefined ? message.msg : new Uint8Array()));
    return obj;
  },
  fromPartial(object: DeepPartial<MsgMigrateContract>): MsgMigrateContract {
    const message = createBaseMsgMigrateContract();
    message.sender = object.sender ?? "";
    message.contract = object.contract ?? "";
    message.codeId = object.codeId !== undefined && object.codeId !== null ? BigInt(object.codeId.toString()) : BigInt(0);
    message.msg = object.msg ?? new Uint8Array();
    return message;
  },
  fromSDK(object: MsgMigrateContractSDKType): MsgMigrateContract {
    return {
      sender: object?.sender,
      contract: object?.contract,
      codeId: object?.code_id,
      msg: object?.msg
    };
  },
  toSDK(message: MsgMigrateContract): MsgMigrateContractSDKType {
    const obj: any = {};
    obj.sender = message.sender;
    obj.contract = message.contract;
    obj.code_id = message.codeId;
    obj.msg = message.msg;
    return obj;
  },
  fromAmino(object: MsgMigrateContractAmino): MsgMigrateContract {
    return {
      sender: object.sender,
      contract: object.contract,
      codeId: BigInt(object.code_id),
      msg: toUtf8(JSON.stringify(object.msg))
    };
  },
  toAmino(message: MsgMigrateContract): MsgMigrateContractAmino {
    const obj: any = {};
    obj.sender = message.sender;
    obj.contract = message.contract;
    obj.code_id = message.codeId ? message.codeId.toString() : undefined;
    obj.msg = message.msg ? JSON.parse(fromUtf8(message.msg)) : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgMigrateContractAminoMsg): MsgMigrateContract {
    return MsgMigrateContract.fromAmino(object.value);
  },
  toAminoMsg(message: MsgMigrateContract): MsgMigrateContractAminoMsg {
    return {
      type: "wasm/MsgMigrateContract",
      value: MsgMigrateContract.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgMigrateContractProtoMsg): MsgMigrateContract {
    return MsgMigrateContract.decode(message.value);
  },
  toProto(message: MsgMigrateContract): Uint8Array {
    return MsgMigrateContract.encode(message).finish();
  },
  toProtoMsg(message: MsgMigrateContract): MsgMigrateContractProtoMsg {
    return {
      typeUrl: "/cosmwasm.wasm.v1.MsgMigrateContract",
      value: MsgMigrateContract.encode(message).finish()
    };
  }
};
function createBaseMsgMigrateContractResponse(): MsgMigrateContractResponse {
  return {
    data: new Uint8Array()
  };
}
export const MsgMigrateContractResponse = {
  typeUrl: "/cosmwasm.wasm.v1.MsgMigrateContractResponse",
  aminoType: "wasm/MsgMigrateContractResponse",
  encode(message: MsgMigrateContractResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.data.length !== 0) {
      writer.uint32(10).bytes(message.data);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgMigrateContractResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgMigrateContractResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.data = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgMigrateContractResponse {
    return {
      data: isSet(object.data) ? bytesFromBase64(object.data) : new Uint8Array()
    };
  },
  toJSON(message: MsgMigrateContractResponse): unknown {
    const obj: any = {};
    message.data !== undefined && (obj.data = base64FromBytes(message.data !== undefined ? message.data : new Uint8Array()));
    return obj;
  },
  fromPartial(object: DeepPartial<MsgMigrateContractResponse>): MsgMigrateContractResponse {
    const message = createBaseMsgMigrateContractResponse();
    message.data = object.data ?? new Uint8Array();
    return message;
  },
  fromSDK(object: MsgMigrateContractResponseSDKType): MsgMigrateContractResponse {
    return {
      data: object?.data
    };
  },
  toSDK(message: MsgMigrateContractResponse): MsgMigrateContractResponseSDKType {
    const obj: any = {};
    obj.data = message.data;
    return obj;
  },
  fromAmino(object: MsgMigrateContractResponseAmino): MsgMigrateContractResponse {
    return {
      data: object.data
    };
  },
  toAmino(message: MsgMigrateContractResponse): MsgMigrateContractResponseAmino {
    const obj: any = {};
    obj.data = message.data;
    return obj;
  },
  fromAminoMsg(object: MsgMigrateContractResponseAminoMsg): MsgMigrateContractResponse {
    return MsgMigrateContractResponse.fromAmino(object.value);
  },
  toAminoMsg(message: MsgMigrateContractResponse): MsgMigrateContractResponseAminoMsg {
    return {
      type: "wasm/MsgMigrateContractResponse",
      value: MsgMigrateContractResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgMigrateContractResponseProtoMsg): MsgMigrateContractResponse {
    return MsgMigrateContractResponse.decode(message.value);
  },
  toProto(message: MsgMigrateContractResponse): Uint8Array {
    return MsgMigrateContractResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgMigrateContractResponse): MsgMigrateContractResponseProtoMsg {
    return {
      typeUrl: "/cosmwasm.wasm.v1.MsgMigrateContractResponse",
      value: MsgMigrateContractResponse.encode(message).finish()
    };
  }
};
function createBaseMsgUpdateAdmin(): MsgUpdateAdmin {
  return {
    sender: "",
    newAdmin: "",
    contract: ""
  };
}
export const MsgUpdateAdmin = {
  typeUrl: "/cosmwasm.wasm.v1.MsgUpdateAdmin",
  aminoType: "wasm/MsgUpdateAdmin",
  encode(message: MsgUpdateAdmin, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    if (message.newAdmin !== "") {
      writer.uint32(18).string(message.newAdmin);
    }
    if (message.contract !== "") {
      writer.uint32(26).string(message.contract);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateAdmin {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateAdmin();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;
        case 2:
          message.newAdmin = reader.string();
          break;
        case 3:
          message.contract = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgUpdateAdmin {
    return {
      sender: isSet(object.sender) ? String(object.sender) : "",
      newAdmin: isSet(object.newAdmin) ? String(object.newAdmin) : "",
      contract: isSet(object.contract) ? String(object.contract) : ""
    };
  },
  toJSON(message: MsgUpdateAdmin): unknown {
    const obj: any = {};
    message.sender !== undefined && (obj.sender = message.sender);
    message.newAdmin !== undefined && (obj.newAdmin = message.newAdmin);
    message.contract !== undefined && (obj.contract = message.contract);
    return obj;
  },
  fromPartial(object: DeepPartial<MsgUpdateAdmin>): MsgUpdateAdmin {
    const message = createBaseMsgUpdateAdmin();
    message.sender = object.sender ?? "";
    message.newAdmin = object.newAdmin ?? "";
    message.contract = object.contract ?? "";
    return message;
  },
  fromSDK(object: MsgUpdateAdminSDKType): MsgUpdateAdmin {
    return {
      sender: object?.sender,
      newAdmin: object?.new_admin,
      contract: object?.contract
    };
  },
  toSDK(message: MsgUpdateAdmin): MsgUpdateAdminSDKType {
    const obj: any = {};
    obj.sender = message.sender;
    obj.new_admin = message.newAdmin;
    obj.contract = message.contract;
    return obj;
  },
  fromAmino(object: MsgUpdateAdminAmino): MsgUpdateAdmin {
    return {
      sender: object.sender,
      newAdmin: object.new_admin,
      contract: object.contract
    };
  },
  toAmino(message: MsgUpdateAdmin): MsgUpdateAdminAmino {
    const obj: any = {};
    obj.sender = message.sender;
    obj.new_admin = message.newAdmin;
    obj.contract = message.contract;
    return obj;
  },
  fromAminoMsg(object: MsgUpdateAdminAminoMsg): MsgUpdateAdmin {
    return MsgUpdateAdmin.fromAmino(object.value);
  },
  toAminoMsg(message: MsgUpdateAdmin): MsgUpdateAdminAminoMsg {
    return {
      type: "wasm/MsgUpdateAdmin",
      value: MsgUpdateAdmin.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgUpdateAdminProtoMsg): MsgUpdateAdmin {
    return MsgUpdateAdmin.decode(message.value);
  },
  toProto(message: MsgUpdateAdmin): Uint8Array {
    return MsgUpdateAdmin.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateAdmin): MsgUpdateAdminProtoMsg {
    return {
      typeUrl: "/cosmwasm.wasm.v1.MsgUpdateAdmin",
      value: MsgUpdateAdmin.encode(message).finish()
    };
  }
};
function createBaseMsgUpdateAdminResponse(): MsgUpdateAdminResponse {
  return {};
}
export const MsgUpdateAdminResponse = {
  typeUrl: "/cosmwasm.wasm.v1.MsgUpdateAdminResponse",
  aminoType: "wasm/MsgUpdateAdminResponse",
  encode(_: MsgUpdateAdminResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateAdminResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateAdminResponse();
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
  fromJSON(_: any): MsgUpdateAdminResponse {
    return {};
  },
  toJSON(_: MsgUpdateAdminResponse): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: DeepPartial<MsgUpdateAdminResponse>): MsgUpdateAdminResponse {
    const message = createBaseMsgUpdateAdminResponse();
    return message;
  },
  fromSDK(_: MsgUpdateAdminResponseSDKType): MsgUpdateAdminResponse {
    return {};
  },
  toSDK(_: MsgUpdateAdminResponse): MsgUpdateAdminResponseSDKType {
    const obj: any = {};
    return obj;
  },
  fromAmino(_: MsgUpdateAdminResponseAmino): MsgUpdateAdminResponse {
    return {};
  },
  toAmino(_: MsgUpdateAdminResponse): MsgUpdateAdminResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgUpdateAdminResponseAminoMsg): MsgUpdateAdminResponse {
    return MsgUpdateAdminResponse.fromAmino(object.value);
  },
  toAminoMsg(message: MsgUpdateAdminResponse): MsgUpdateAdminResponseAminoMsg {
    return {
      type: "wasm/MsgUpdateAdminResponse",
      value: MsgUpdateAdminResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgUpdateAdminResponseProtoMsg): MsgUpdateAdminResponse {
    return MsgUpdateAdminResponse.decode(message.value);
  },
  toProto(message: MsgUpdateAdminResponse): Uint8Array {
    return MsgUpdateAdminResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateAdminResponse): MsgUpdateAdminResponseProtoMsg {
    return {
      typeUrl: "/cosmwasm.wasm.v1.MsgUpdateAdminResponse",
      value: MsgUpdateAdminResponse.encode(message).finish()
    };
  }
};
function createBaseMsgClearAdmin(): MsgClearAdmin {
  return {
    sender: "",
    contract: ""
  };
}
export const MsgClearAdmin = {
  typeUrl: "/cosmwasm.wasm.v1.MsgClearAdmin",
  aminoType: "wasm/MsgClearAdmin",
  encode(message: MsgClearAdmin, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    if (message.contract !== "") {
      writer.uint32(26).string(message.contract);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgClearAdmin {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgClearAdmin();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;
        case 3:
          message.contract = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgClearAdmin {
    return {
      sender: isSet(object.sender) ? String(object.sender) : "",
      contract: isSet(object.contract) ? String(object.contract) : ""
    };
  },
  toJSON(message: MsgClearAdmin): unknown {
    const obj: any = {};
    message.sender !== undefined && (obj.sender = message.sender);
    message.contract !== undefined && (obj.contract = message.contract);
    return obj;
  },
  fromPartial(object: DeepPartial<MsgClearAdmin>): MsgClearAdmin {
    const message = createBaseMsgClearAdmin();
    message.sender = object.sender ?? "";
    message.contract = object.contract ?? "";
    return message;
  },
  fromSDK(object: MsgClearAdminSDKType): MsgClearAdmin {
    return {
      sender: object?.sender,
      contract: object?.contract
    };
  },
  toSDK(message: MsgClearAdmin): MsgClearAdminSDKType {
    const obj: any = {};
    obj.sender = message.sender;
    obj.contract = message.contract;
    return obj;
  },
  fromAmino(object: MsgClearAdminAmino): MsgClearAdmin {
    return {
      sender: object.sender,
      contract: object.contract
    };
  },
  toAmino(message: MsgClearAdmin): MsgClearAdminAmino {
    const obj: any = {};
    obj.sender = message.sender;
    obj.contract = message.contract;
    return obj;
  },
  fromAminoMsg(object: MsgClearAdminAminoMsg): MsgClearAdmin {
    return MsgClearAdmin.fromAmino(object.value);
  },
  toAminoMsg(message: MsgClearAdmin): MsgClearAdminAminoMsg {
    return {
      type: "wasm/MsgClearAdmin",
      value: MsgClearAdmin.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgClearAdminProtoMsg): MsgClearAdmin {
    return MsgClearAdmin.decode(message.value);
  },
  toProto(message: MsgClearAdmin): Uint8Array {
    return MsgClearAdmin.encode(message).finish();
  },
  toProtoMsg(message: MsgClearAdmin): MsgClearAdminProtoMsg {
    return {
      typeUrl: "/cosmwasm.wasm.v1.MsgClearAdmin",
      value: MsgClearAdmin.encode(message).finish()
    };
  }
};
function createBaseMsgClearAdminResponse(): MsgClearAdminResponse {
  return {};
}
export const MsgClearAdminResponse = {
  typeUrl: "/cosmwasm.wasm.v1.MsgClearAdminResponse",
  aminoType: "wasm/MsgClearAdminResponse",
  encode(_: MsgClearAdminResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgClearAdminResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgClearAdminResponse();
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
  fromJSON(_: any): MsgClearAdminResponse {
    return {};
  },
  toJSON(_: MsgClearAdminResponse): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: DeepPartial<MsgClearAdminResponse>): MsgClearAdminResponse {
    const message = createBaseMsgClearAdminResponse();
    return message;
  },
  fromSDK(_: MsgClearAdminResponseSDKType): MsgClearAdminResponse {
    return {};
  },
  toSDK(_: MsgClearAdminResponse): MsgClearAdminResponseSDKType {
    const obj: any = {};
    return obj;
  },
  fromAmino(_: MsgClearAdminResponseAmino): MsgClearAdminResponse {
    return {};
  },
  toAmino(_: MsgClearAdminResponse): MsgClearAdminResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgClearAdminResponseAminoMsg): MsgClearAdminResponse {
    return MsgClearAdminResponse.fromAmino(object.value);
  },
  toAminoMsg(message: MsgClearAdminResponse): MsgClearAdminResponseAminoMsg {
    return {
      type: "wasm/MsgClearAdminResponse",
      value: MsgClearAdminResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgClearAdminResponseProtoMsg): MsgClearAdminResponse {
    return MsgClearAdminResponse.decode(message.value);
  },
  toProto(message: MsgClearAdminResponse): Uint8Array {
    return MsgClearAdminResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgClearAdminResponse): MsgClearAdminResponseProtoMsg {
    return {
      typeUrl: "/cosmwasm.wasm.v1.MsgClearAdminResponse",
      value: MsgClearAdminResponse.encode(message).finish()
    };
  }
};
function createBaseMsgUpdateInstantiateConfig(): MsgUpdateInstantiateConfig {
  return {
    sender: "",
    codeId: BigInt(0),
    newInstantiatePermission: AccessConfig.fromPartial({})
  };
}
export const MsgUpdateInstantiateConfig = {
  typeUrl: "/cosmwasm.wasm.v1.MsgUpdateInstantiateConfig",
  aminoType: "wasm/MsgUpdateInstantiateConfig",
  encode(message: MsgUpdateInstantiateConfig, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    if (message.codeId !== BigInt(0)) {
      writer.uint32(16).uint64(message.codeId);
    }
    if (message.newInstantiatePermission !== undefined) {
      AccessConfig.encode(message.newInstantiatePermission, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateInstantiateConfig {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateInstantiateConfig();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;
        case 2:
          message.codeId = reader.uint64();
          break;
        case 3:
          message.newInstantiatePermission = AccessConfig.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgUpdateInstantiateConfig {
    return {
      sender: isSet(object.sender) ? String(object.sender) : "",
      codeId: isSet(object.codeId) ? BigInt(object.codeId.toString()) : BigInt(0),
      newInstantiatePermission: isSet(object.newInstantiatePermission) ? AccessConfig.fromJSON(object.newInstantiatePermission) : undefined
    };
  },
  toJSON(message: MsgUpdateInstantiateConfig): unknown {
    const obj: any = {};
    message.sender !== undefined && (obj.sender = message.sender);
    message.codeId !== undefined && (obj.codeId = (message.codeId || BigInt(0)).toString());
    message.newInstantiatePermission !== undefined && (obj.newInstantiatePermission = message.newInstantiatePermission ? AccessConfig.toJSON(message.newInstantiatePermission) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<MsgUpdateInstantiateConfig>): MsgUpdateInstantiateConfig {
    const message = createBaseMsgUpdateInstantiateConfig();
    message.sender = object.sender ?? "";
    message.codeId = object.codeId !== undefined && object.codeId !== null ? BigInt(object.codeId.toString()) : BigInt(0);
    message.newInstantiatePermission = object.newInstantiatePermission !== undefined && object.newInstantiatePermission !== null ? AccessConfig.fromPartial(object.newInstantiatePermission) : undefined;
    return message;
  },
  fromSDK(object: MsgUpdateInstantiateConfigSDKType): MsgUpdateInstantiateConfig {
    return {
      sender: object?.sender,
      codeId: object?.code_id,
      newInstantiatePermission: object.new_instantiate_permission ? AccessConfig.fromSDK(object.new_instantiate_permission) : undefined
    };
  },
  toSDK(message: MsgUpdateInstantiateConfig): MsgUpdateInstantiateConfigSDKType {
    const obj: any = {};
    obj.sender = message.sender;
    obj.code_id = message.codeId;
    message.newInstantiatePermission !== undefined && (obj.new_instantiate_permission = message.newInstantiatePermission ? AccessConfig.toSDK(message.newInstantiatePermission) : undefined);
    return obj;
  },
  fromAmino(object: MsgUpdateInstantiateConfigAmino): MsgUpdateInstantiateConfig {
    return {
      sender: object.sender,
      codeId: BigInt(object.code_id),
      newInstantiatePermission: object?.new_instantiate_permission ? AccessConfig.fromAmino(object.new_instantiate_permission) : undefined
    };
  },
  toAmino(message: MsgUpdateInstantiateConfig): MsgUpdateInstantiateConfigAmino {
    const obj: any = {};
    obj.sender = message.sender;
    obj.code_id = message.codeId ? message.codeId.toString() : undefined;
    obj.new_instantiate_permission = message.newInstantiatePermission ? AccessConfig.toAmino(message.newInstantiatePermission) : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgUpdateInstantiateConfigAminoMsg): MsgUpdateInstantiateConfig {
    return MsgUpdateInstantiateConfig.fromAmino(object.value);
  },
  toAminoMsg(message: MsgUpdateInstantiateConfig): MsgUpdateInstantiateConfigAminoMsg {
    return {
      type: "wasm/MsgUpdateInstantiateConfig",
      value: MsgUpdateInstantiateConfig.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgUpdateInstantiateConfigProtoMsg): MsgUpdateInstantiateConfig {
    return MsgUpdateInstantiateConfig.decode(message.value);
  },
  toProto(message: MsgUpdateInstantiateConfig): Uint8Array {
    return MsgUpdateInstantiateConfig.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateInstantiateConfig): MsgUpdateInstantiateConfigProtoMsg {
    return {
      typeUrl: "/cosmwasm.wasm.v1.MsgUpdateInstantiateConfig",
      value: MsgUpdateInstantiateConfig.encode(message).finish()
    };
  }
};
function createBaseMsgUpdateInstantiateConfigResponse(): MsgUpdateInstantiateConfigResponse {
  return {};
}
export const MsgUpdateInstantiateConfigResponse = {
  typeUrl: "/cosmwasm.wasm.v1.MsgUpdateInstantiateConfigResponse",
  aminoType: "wasm/MsgUpdateInstantiateConfigResponse",
  encode(_: MsgUpdateInstantiateConfigResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateInstantiateConfigResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateInstantiateConfigResponse();
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
  fromJSON(_: any): MsgUpdateInstantiateConfigResponse {
    return {};
  },
  toJSON(_: MsgUpdateInstantiateConfigResponse): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: DeepPartial<MsgUpdateInstantiateConfigResponse>): MsgUpdateInstantiateConfigResponse {
    const message = createBaseMsgUpdateInstantiateConfigResponse();
    return message;
  },
  fromSDK(_: MsgUpdateInstantiateConfigResponseSDKType): MsgUpdateInstantiateConfigResponse {
    return {};
  },
  toSDK(_: MsgUpdateInstantiateConfigResponse): MsgUpdateInstantiateConfigResponseSDKType {
    const obj: any = {};
    return obj;
  },
  fromAmino(_: MsgUpdateInstantiateConfigResponseAmino): MsgUpdateInstantiateConfigResponse {
    return {};
  },
  toAmino(_: MsgUpdateInstantiateConfigResponse): MsgUpdateInstantiateConfigResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgUpdateInstantiateConfigResponseAminoMsg): MsgUpdateInstantiateConfigResponse {
    return MsgUpdateInstantiateConfigResponse.fromAmino(object.value);
  },
  toAminoMsg(message: MsgUpdateInstantiateConfigResponse): MsgUpdateInstantiateConfigResponseAminoMsg {
    return {
      type: "wasm/MsgUpdateInstantiateConfigResponse",
      value: MsgUpdateInstantiateConfigResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgUpdateInstantiateConfigResponseProtoMsg): MsgUpdateInstantiateConfigResponse {
    return MsgUpdateInstantiateConfigResponse.decode(message.value);
  },
  toProto(message: MsgUpdateInstantiateConfigResponse): Uint8Array {
    return MsgUpdateInstantiateConfigResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateInstantiateConfigResponse): MsgUpdateInstantiateConfigResponseProtoMsg {
    return {
      typeUrl: "/cosmwasm.wasm.v1.MsgUpdateInstantiateConfigResponse",
      value: MsgUpdateInstantiateConfigResponse.encode(message).finish()
    };
  }
};
function createBaseMsgUpdateParams(): MsgUpdateParams {
  return {
    authority: "",
    params: Params.fromPartial({})
  };
}
export const MsgUpdateParams = {
  typeUrl: "/cosmwasm.wasm.v1.MsgUpdateParams",
  aminoType: "wasm/MsgUpdateParams",
  encode(message: MsgUpdateParams, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateParams {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.authority = reader.string();
          break;
        case 2:
          message.params = Params.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgUpdateParams {
    return {
      authority: isSet(object.authority) ? String(object.authority) : "",
      params: isSet(object.params) ? Params.fromJSON(object.params) : undefined
    };
  },
  toJSON(message: MsgUpdateParams): unknown {
    const obj: any = {};
    message.authority !== undefined && (obj.authority = message.authority);
    message.params !== undefined && (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<MsgUpdateParams>): MsgUpdateParams {
    const message = createBaseMsgUpdateParams();
    message.authority = object.authority ?? "";
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    return message;
  },
  fromSDK(object: MsgUpdateParamsSDKType): MsgUpdateParams {
    return {
      authority: object?.authority,
      params: object.params ? Params.fromSDK(object.params) : undefined
    };
  },
  toSDK(message: MsgUpdateParams): MsgUpdateParamsSDKType {
    const obj: any = {};
    obj.authority = message.authority;
    message.params !== undefined && (obj.params = message.params ? Params.toSDK(message.params) : undefined);
    return obj;
  },
  fromAmino(object: MsgUpdateParamsAmino): MsgUpdateParams {
    return {
      authority: object.authority,
      params: object?.params ? Params.fromAmino(object.params) : undefined
    };
  },
  toAmino(message: MsgUpdateParams): MsgUpdateParamsAmino {
    const obj: any = {};
    obj.authority = message.authority;
    obj.params = message.params ? Params.toAmino(message.params) : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgUpdateParamsAminoMsg): MsgUpdateParams {
    return MsgUpdateParams.fromAmino(object.value);
  },
  toAminoMsg(message: MsgUpdateParams): MsgUpdateParamsAminoMsg {
    return {
      type: "wasm/MsgUpdateParams",
      value: MsgUpdateParams.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgUpdateParamsProtoMsg): MsgUpdateParams {
    return MsgUpdateParams.decode(message.value);
  },
  toProto(message: MsgUpdateParams): Uint8Array {
    return MsgUpdateParams.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateParams): MsgUpdateParamsProtoMsg {
    return {
      typeUrl: "/cosmwasm.wasm.v1.MsgUpdateParams",
      value: MsgUpdateParams.encode(message).finish()
    };
  }
};
function createBaseMsgUpdateParamsResponse(): MsgUpdateParamsResponse {
  return {};
}
export const MsgUpdateParamsResponse = {
  typeUrl: "/cosmwasm.wasm.v1.MsgUpdateParamsResponse",
  aminoType: "wasm/MsgUpdateParamsResponse",
  encode(_: MsgUpdateParamsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateParamsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateParamsResponse();
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
  fromJSON(_: any): MsgUpdateParamsResponse {
    return {};
  },
  toJSON(_: MsgUpdateParamsResponse): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: DeepPartial<MsgUpdateParamsResponse>): MsgUpdateParamsResponse {
    const message = createBaseMsgUpdateParamsResponse();
    return message;
  },
  fromSDK(_: MsgUpdateParamsResponseSDKType): MsgUpdateParamsResponse {
    return {};
  },
  toSDK(_: MsgUpdateParamsResponse): MsgUpdateParamsResponseSDKType {
    const obj: any = {};
    return obj;
  },
  fromAmino(_: MsgUpdateParamsResponseAmino): MsgUpdateParamsResponse {
    return {};
  },
  toAmino(_: MsgUpdateParamsResponse): MsgUpdateParamsResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgUpdateParamsResponseAminoMsg): MsgUpdateParamsResponse {
    return MsgUpdateParamsResponse.fromAmino(object.value);
  },
  toAminoMsg(message: MsgUpdateParamsResponse): MsgUpdateParamsResponseAminoMsg {
    return {
      type: "wasm/MsgUpdateParamsResponse",
      value: MsgUpdateParamsResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgUpdateParamsResponseProtoMsg): MsgUpdateParamsResponse {
    return MsgUpdateParamsResponse.decode(message.value);
  },
  toProto(message: MsgUpdateParamsResponse): Uint8Array {
    return MsgUpdateParamsResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateParamsResponse): MsgUpdateParamsResponseProtoMsg {
    return {
      typeUrl: "/cosmwasm.wasm.v1.MsgUpdateParamsResponse",
      value: MsgUpdateParamsResponse.encode(message).finish()
    };
  }
};
function createBaseMsgSudoContract(): MsgSudoContract {
  return {
    authority: "",
    contract: "",
    msg: new Uint8Array()
  };
}
export const MsgSudoContract = {
  typeUrl: "/cosmwasm.wasm.v1.MsgSudoContract",
  aminoType: "wasm/MsgSudoContract",
  encode(message: MsgSudoContract, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    if (message.contract !== "") {
      writer.uint32(18).string(message.contract);
    }
    if (message.msg.length !== 0) {
      writer.uint32(26).bytes(message.msg);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgSudoContract {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSudoContract();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.authority = reader.string();
          break;
        case 2:
          message.contract = reader.string();
          break;
        case 3:
          message.msg = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgSudoContract {
    return {
      authority: isSet(object.authority) ? String(object.authority) : "",
      contract: isSet(object.contract) ? String(object.contract) : "",
      msg: isSet(object.msg) ? bytesFromBase64(object.msg) : new Uint8Array()
    };
  },
  toJSON(message: MsgSudoContract): unknown {
    const obj: any = {};
    message.authority !== undefined && (obj.authority = message.authority);
    message.contract !== undefined && (obj.contract = message.contract);
    message.msg !== undefined && (obj.msg = base64FromBytes(message.msg !== undefined ? message.msg : new Uint8Array()));
    return obj;
  },
  fromPartial(object: DeepPartial<MsgSudoContract>): MsgSudoContract {
    const message = createBaseMsgSudoContract();
    message.authority = object.authority ?? "";
    message.contract = object.contract ?? "";
    message.msg = object.msg ?? new Uint8Array();
    return message;
  },
  fromSDK(object: MsgSudoContractSDKType): MsgSudoContract {
    return {
      authority: object?.authority,
      contract: object?.contract,
      msg: object?.msg
    };
  },
  toSDK(message: MsgSudoContract): MsgSudoContractSDKType {
    const obj: any = {};
    obj.authority = message.authority;
    obj.contract = message.contract;
    obj.msg = message.msg;
    return obj;
  },
  fromAmino(object: MsgSudoContractAmino): MsgSudoContract {
    return {
      authority: object.authority,
      contract: object.contract,
      msg: toUtf8(JSON.stringify(object.msg))
    };
  },
  toAmino(message: MsgSudoContract): MsgSudoContractAmino {
    const obj: any = {};
    obj.authority = message.authority;
    obj.contract = message.contract;
    obj.msg = message.msg ? JSON.parse(fromUtf8(message.msg)) : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgSudoContractAminoMsg): MsgSudoContract {
    return MsgSudoContract.fromAmino(object.value);
  },
  toAminoMsg(message: MsgSudoContract): MsgSudoContractAminoMsg {
    return {
      type: "wasm/MsgSudoContract",
      value: MsgSudoContract.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgSudoContractProtoMsg): MsgSudoContract {
    return MsgSudoContract.decode(message.value);
  },
  toProto(message: MsgSudoContract): Uint8Array {
    return MsgSudoContract.encode(message).finish();
  },
  toProtoMsg(message: MsgSudoContract): MsgSudoContractProtoMsg {
    return {
      typeUrl: "/cosmwasm.wasm.v1.MsgSudoContract",
      value: MsgSudoContract.encode(message).finish()
    };
  }
};
function createBaseMsgSudoContractResponse(): MsgSudoContractResponse {
  return {
    data: new Uint8Array()
  };
}
export const MsgSudoContractResponse = {
  typeUrl: "/cosmwasm.wasm.v1.MsgSudoContractResponse",
  aminoType: "wasm/MsgSudoContractResponse",
  encode(message: MsgSudoContractResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.data.length !== 0) {
      writer.uint32(10).bytes(message.data);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgSudoContractResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSudoContractResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.data = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgSudoContractResponse {
    return {
      data: isSet(object.data) ? bytesFromBase64(object.data) : new Uint8Array()
    };
  },
  toJSON(message: MsgSudoContractResponse): unknown {
    const obj: any = {};
    message.data !== undefined && (obj.data = base64FromBytes(message.data !== undefined ? message.data : new Uint8Array()));
    return obj;
  },
  fromPartial(object: DeepPartial<MsgSudoContractResponse>): MsgSudoContractResponse {
    const message = createBaseMsgSudoContractResponse();
    message.data = object.data ?? new Uint8Array();
    return message;
  },
  fromSDK(object: MsgSudoContractResponseSDKType): MsgSudoContractResponse {
    return {
      data: object?.data
    };
  },
  toSDK(message: MsgSudoContractResponse): MsgSudoContractResponseSDKType {
    const obj: any = {};
    obj.data = message.data;
    return obj;
  },
  fromAmino(object: MsgSudoContractResponseAmino): MsgSudoContractResponse {
    return {
      data: object.data
    };
  },
  toAmino(message: MsgSudoContractResponse): MsgSudoContractResponseAmino {
    const obj: any = {};
    obj.data = message.data;
    return obj;
  },
  fromAminoMsg(object: MsgSudoContractResponseAminoMsg): MsgSudoContractResponse {
    return MsgSudoContractResponse.fromAmino(object.value);
  },
  toAminoMsg(message: MsgSudoContractResponse): MsgSudoContractResponseAminoMsg {
    return {
      type: "wasm/MsgSudoContractResponse",
      value: MsgSudoContractResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgSudoContractResponseProtoMsg): MsgSudoContractResponse {
    return MsgSudoContractResponse.decode(message.value);
  },
  toProto(message: MsgSudoContractResponse): Uint8Array {
    return MsgSudoContractResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgSudoContractResponse): MsgSudoContractResponseProtoMsg {
    return {
      typeUrl: "/cosmwasm.wasm.v1.MsgSudoContractResponse",
      value: MsgSudoContractResponse.encode(message).finish()
    };
  }
};
function createBaseMsgPinCodes(): MsgPinCodes {
  return {
    authority: "",
    codeIds: []
  };
}
export const MsgPinCodes = {
  typeUrl: "/cosmwasm.wasm.v1.MsgPinCodes",
  aminoType: "wasm/MsgPinCodes",
  encode(message: MsgPinCodes, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    writer.uint32(18).fork();
    for (const v of message.codeIds) {
      writer.uint64(v);
    }
    writer.ldelim();
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgPinCodes {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgPinCodes();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.authority = reader.string();
          break;
        case 2:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.codeIds.push(reader.uint64());
            }
          } else {
            message.codeIds.push(reader.uint64());
          }
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgPinCodes {
    return {
      authority: isSet(object.authority) ? String(object.authority) : "",
      codeIds: Array.isArray(object?.codeIds) ? object.codeIds.map((e: any) => BigInt(e.toString())) : []
    };
  },
  toJSON(message: MsgPinCodes): unknown {
    const obj: any = {};
    message.authority !== undefined && (obj.authority = message.authority);
    if (message.codeIds) {
      obj.codeIds = message.codeIds.map(e => (e || BigInt(0)).toString());
    } else {
      obj.codeIds = [];
    }
    return obj;
  },
  fromPartial(object: DeepPartial<MsgPinCodes>): MsgPinCodes {
    const message = createBaseMsgPinCodes();
    message.authority = object.authority ?? "";
    message.codeIds = object.codeIds?.map(e => BigInt(e.toString())) || [];
    return message;
  },
  fromSDK(object: MsgPinCodesSDKType): MsgPinCodes {
    return {
      authority: object?.authority,
      codeIds: Array.isArray(object?.code_ids) ? object.code_ids.map((e: any) => e) : []
    };
  },
  toSDK(message: MsgPinCodes): MsgPinCodesSDKType {
    const obj: any = {};
    obj.authority = message.authority;
    if (message.codeIds) {
      obj.code_ids = message.codeIds.map(e => e);
    } else {
      obj.code_ids = [];
    }
    return obj;
  },
  fromAmino(object: MsgPinCodesAmino): MsgPinCodes {
    return {
      authority: object.authority,
      codeIds: Array.isArray(object?.code_ids) ? object.code_ids.map((e: any) => BigInt(e)) : []
    };
  },
  toAmino(message: MsgPinCodes): MsgPinCodesAmino {
    const obj: any = {};
    obj.authority = message.authority;
    if (message.codeIds) {
      obj.code_ids = message.codeIds.map(e => e.toString());
    } else {
      obj.code_ids = [];
    }
    return obj;
  },
  fromAminoMsg(object: MsgPinCodesAminoMsg): MsgPinCodes {
    return MsgPinCodes.fromAmino(object.value);
  },
  toAminoMsg(message: MsgPinCodes): MsgPinCodesAminoMsg {
    return {
      type: "wasm/MsgPinCodes",
      value: MsgPinCodes.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgPinCodesProtoMsg): MsgPinCodes {
    return MsgPinCodes.decode(message.value);
  },
  toProto(message: MsgPinCodes): Uint8Array {
    return MsgPinCodes.encode(message).finish();
  },
  toProtoMsg(message: MsgPinCodes): MsgPinCodesProtoMsg {
    return {
      typeUrl: "/cosmwasm.wasm.v1.MsgPinCodes",
      value: MsgPinCodes.encode(message).finish()
    };
  }
};
function createBaseMsgPinCodesResponse(): MsgPinCodesResponse {
  return {};
}
export const MsgPinCodesResponse = {
  typeUrl: "/cosmwasm.wasm.v1.MsgPinCodesResponse",
  aminoType: "wasm/MsgPinCodesResponse",
  encode(_: MsgPinCodesResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgPinCodesResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgPinCodesResponse();
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
  fromJSON(_: any): MsgPinCodesResponse {
    return {};
  },
  toJSON(_: MsgPinCodesResponse): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: DeepPartial<MsgPinCodesResponse>): MsgPinCodesResponse {
    const message = createBaseMsgPinCodesResponse();
    return message;
  },
  fromSDK(_: MsgPinCodesResponseSDKType): MsgPinCodesResponse {
    return {};
  },
  toSDK(_: MsgPinCodesResponse): MsgPinCodesResponseSDKType {
    const obj: any = {};
    return obj;
  },
  fromAmino(_: MsgPinCodesResponseAmino): MsgPinCodesResponse {
    return {};
  },
  toAmino(_: MsgPinCodesResponse): MsgPinCodesResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgPinCodesResponseAminoMsg): MsgPinCodesResponse {
    return MsgPinCodesResponse.fromAmino(object.value);
  },
  toAminoMsg(message: MsgPinCodesResponse): MsgPinCodesResponseAminoMsg {
    return {
      type: "wasm/MsgPinCodesResponse",
      value: MsgPinCodesResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgPinCodesResponseProtoMsg): MsgPinCodesResponse {
    return MsgPinCodesResponse.decode(message.value);
  },
  toProto(message: MsgPinCodesResponse): Uint8Array {
    return MsgPinCodesResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgPinCodesResponse): MsgPinCodesResponseProtoMsg {
    return {
      typeUrl: "/cosmwasm.wasm.v1.MsgPinCodesResponse",
      value: MsgPinCodesResponse.encode(message).finish()
    };
  }
};
function createBaseMsgUnpinCodes(): MsgUnpinCodes {
  return {
    authority: "",
    codeIds: []
  };
}
export const MsgUnpinCodes = {
  typeUrl: "/cosmwasm.wasm.v1.MsgUnpinCodes",
  aminoType: "wasm/MsgUnpinCodes",
  encode(message: MsgUnpinCodes, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    writer.uint32(18).fork();
    for (const v of message.codeIds) {
      writer.uint64(v);
    }
    writer.ldelim();
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUnpinCodes {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUnpinCodes();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.authority = reader.string();
          break;
        case 2:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.codeIds.push(reader.uint64());
            }
          } else {
            message.codeIds.push(reader.uint64());
          }
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgUnpinCodes {
    return {
      authority: isSet(object.authority) ? String(object.authority) : "",
      codeIds: Array.isArray(object?.codeIds) ? object.codeIds.map((e: any) => BigInt(e.toString())) : []
    };
  },
  toJSON(message: MsgUnpinCodes): unknown {
    const obj: any = {};
    message.authority !== undefined && (obj.authority = message.authority);
    if (message.codeIds) {
      obj.codeIds = message.codeIds.map(e => (e || BigInt(0)).toString());
    } else {
      obj.codeIds = [];
    }
    return obj;
  },
  fromPartial(object: DeepPartial<MsgUnpinCodes>): MsgUnpinCodes {
    const message = createBaseMsgUnpinCodes();
    message.authority = object.authority ?? "";
    message.codeIds = object.codeIds?.map(e => BigInt(e.toString())) || [];
    return message;
  },
  fromSDK(object: MsgUnpinCodesSDKType): MsgUnpinCodes {
    return {
      authority: object?.authority,
      codeIds: Array.isArray(object?.code_ids) ? object.code_ids.map((e: any) => e) : []
    };
  },
  toSDK(message: MsgUnpinCodes): MsgUnpinCodesSDKType {
    const obj: any = {};
    obj.authority = message.authority;
    if (message.codeIds) {
      obj.code_ids = message.codeIds.map(e => e);
    } else {
      obj.code_ids = [];
    }
    return obj;
  },
  fromAmino(object: MsgUnpinCodesAmino): MsgUnpinCodes {
    return {
      authority: object.authority,
      codeIds: Array.isArray(object?.code_ids) ? object.code_ids.map((e: any) => BigInt(e)) : []
    };
  },
  toAmino(message: MsgUnpinCodes): MsgUnpinCodesAmino {
    const obj: any = {};
    obj.authority = message.authority;
    if (message.codeIds) {
      obj.code_ids = message.codeIds.map(e => e.toString());
    } else {
      obj.code_ids = [];
    }
    return obj;
  },
  fromAminoMsg(object: MsgUnpinCodesAminoMsg): MsgUnpinCodes {
    return MsgUnpinCodes.fromAmino(object.value);
  },
  toAminoMsg(message: MsgUnpinCodes): MsgUnpinCodesAminoMsg {
    return {
      type: "wasm/MsgUnpinCodes",
      value: MsgUnpinCodes.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgUnpinCodesProtoMsg): MsgUnpinCodes {
    return MsgUnpinCodes.decode(message.value);
  },
  toProto(message: MsgUnpinCodes): Uint8Array {
    return MsgUnpinCodes.encode(message).finish();
  },
  toProtoMsg(message: MsgUnpinCodes): MsgUnpinCodesProtoMsg {
    return {
      typeUrl: "/cosmwasm.wasm.v1.MsgUnpinCodes",
      value: MsgUnpinCodes.encode(message).finish()
    };
  }
};
function createBaseMsgUnpinCodesResponse(): MsgUnpinCodesResponse {
  return {};
}
export const MsgUnpinCodesResponse = {
  typeUrl: "/cosmwasm.wasm.v1.MsgUnpinCodesResponse",
  aminoType: "wasm/MsgUnpinCodesResponse",
  encode(_: MsgUnpinCodesResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUnpinCodesResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUnpinCodesResponse();
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
  fromJSON(_: any): MsgUnpinCodesResponse {
    return {};
  },
  toJSON(_: MsgUnpinCodesResponse): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: DeepPartial<MsgUnpinCodesResponse>): MsgUnpinCodesResponse {
    const message = createBaseMsgUnpinCodesResponse();
    return message;
  },
  fromSDK(_: MsgUnpinCodesResponseSDKType): MsgUnpinCodesResponse {
    return {};
  },
  toSDK(_: MsgUnpinCodesResponse): MsgUnpinCodesResponseSDKType {
    const obj: any = {};
    return obj;
  },
  fromAmino(_: MsgUnpinCodesResponseAmino): MsgUnpinCodesResponse {
    return {};
  },
  toAmino(_: MsgUnpinCodesResponse): MsgUnpinCodesResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgUnpinCodesResponseAminoMsg): MsgUnpinCodesResponse {
    return MsgUnpinCodesResponse.fromAmino(object.value);
  },
  toAminoMsg(message: MsgUnpinCodesResponse): MsgUnpinCodesResponseAminoMsg {
    return {
      type: "wasm/MsgUnpinCodesResponse",
      value: MsgUnpinCodesResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgUnpinCodesResponseProtoMsg): MsgUnpinCodesResponse {
    return MsgUnpinCodesResponse.decode(message.value);
  },
  toProto(message: MsgUnpinCodesResponse): Uint8Array {
    return MsgUnpinCodesResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgUnpinCodesResponse): MsgUnpinCodesResponseProtoMsg {
    return {
      typeUrl: "/cosmwasm.wasm.v1.MsgUnpinCodesResponse",
      value: MsgUnpinCodesResponse.encode(message).finish()
    };
  }
};
function createBaseMsgStoreAndInstantiateContract(): MsgStoreAndInstantiateContract {
  return {
    authority: "",
    wasmByteCode: new Uint8Array(),
    instantiatePermission: AccessConfig.fromPartial({}),
    unpinCode: false,
    admin: "",
    label: "",
    msg: new Uint8Array(),
    funds: [],
    source: "",
    builder: "",
    codeHash: new Uint8Array()
  };
}
export const MsgStoreAndInstantiateContract = {
  typeUrl: "/cosmwasm.wasm.v1.MsgStoreAndInstantiateContract",
  aminoType: "wasm/MsgStoreAndInstantiateContract",
  encode(message: MsgStoreAndInstantiateContract, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    if (message.wasmByteCode.length !== 0) {
      writer.uint32(26).bytes(message.wasmByteCode);
    }
    if (message.instantiatePermission !== undefined) {
      AccessConfig.encode(message.instantiatePermission, writer.uint32(34).fork()).ldelim();
    }
    if (message.unpinCode === true) {
      writer.uint32(40).bool(message.unpinCode);
    }
    if (message.admin !== "") {
      writer.uint32(50).string(message.admin);
    }
    if (message.label !== "") {
      writer.uint32(58).string(message.label);
    }
    if (message.msg.length !== 0) {
      writer.uint32(66).bytes(message.msg);
    }
    for (const v of message.funds) {
      Coin.encode(v!, writer.uint32(74).fork()).ldelim();
    }
    if (message.source !== "") {
      writer.uint32(82).string(message.source);
    }
    if (message.builder !== "") {
      writer.uint32(90).string(message.builder);
    }
    if (message.codeHash.length !== 0) {
      writer.uint32(98).bytes(message.codeHash);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgStoreAndInstantiateContract {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgStoreAndInstantiateContract();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.authority = reader.string();
          break;
        case 3:
          message.wasmByteCode = reader.bytes();
          break;
        case 4:
          message.instantiatePermission = AccessConfig.decode(reader, reader.uint32());
          break;
        case 5:
          message.unpinCode = reader.bool();
          break;
        case 6:
          message.admin = reader.string();
          break;
        case 7:
          message.label = reader.string();
          break;
        case 8:
          message.msg = reader.bytes();
          break;
        case 9:
          message.funds.push(Coin.decode(reader, reader.uint32()));
          break;
        case 10:
          message.source = reader.string();
          break;
        case 11:
          message.builder = reader.string();
          break;
        case 12:
          message.codeHash = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgStoreAndInstantiateContract {
    return {
      authority: isSet(object.authority) ? String(object.authority) : "",
      wasmByteCode: isSet(object.wasmByteCode) ? bytesFromBase64(object.wasmByteCode) : new Uint8Array(),
      instantiatePermission: isSet(object.instantiatePermission) ? AccessConfig.fromJSON(object.instantiatePermission) : undefined,
      unpinCode: isSet(object.unpinCode) ? Boolean(object.unpinCode) : false,
      admin: isSet(object.admin) ? String(object.admin) : "",
      label: isSet(object.label) ? String(object.label) : "",
      msg: isSet(object.msg) ? bytesFromBase64(object.msg) : new Uint8Array(),
      funds: Array.isArray(object?.funds) ? object.funds.map((e: any) => Coin.fromJSON(e)) : [],
      source: isSet(object.source) ? String(object.source) : "",
      builder: isSet(object.builder) ? String(object.builder) : "",
      codeHash: isSet(object.codeHash) ? bytesFromBase64(object.codeHash) : new Uint8Array()
    };
  },
  toJSON(message: MsgStoreAndInstantiateContract): unknown {
    const obj: any = {};
    message.authority !== undefined && (obj.authority = message.authority);
    message.wasmByteCode !== undefined && (obj.wasmByteCode = base64FromBytes(message.wasmByteCode !== undefined ? message.wasmByteCode : new Uint8Array()));
    message.instantiatePermission !== undefined && (obj.instantiatePermission = message.instantiatePermission ? AccessConfig.toJSON(message.instantiatePermission) : undefined);
    message.unpinCode !== undefined && (obj.unpinCode = message.unpinCode);
    message.admin !== undefined && (obj.admin = message.admin);
    message.label !== undefined && (obj.label = message.label);
    message.msg !== undefined && (obj.msg = base64FromBytes(message.msg !== undefined ? message.msg : new Uint8Array()));
    if (message.funds) {
      obj.funds = message.funds.map(e => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.funds = [];
    }
    message.source !== undefined && (obj.source = message.source);
    message.builder !== undefined && (obj.builder = message.builder);
    message.codeHash !== undefined && (obj.codeHash = base64FromBytes(message.codeHash !== undefined ? message.codeHash : new Uint8Array()));
    return obj;
  },
  fromPartial(object: DeepPartial<MsgStoreAndInstantiateContract>): MsgStoreAndInstantiateContract {
    const message = createBaseMsgStoreAndInstantiateContract();
    message.authority = object.authority ?? "";
    message.wasmByteCode = object.wasmByteCode ?? new Uint8Array();
    message.instantiatePermission = object.instantiatePermission !== undefined && object.instantiatePermission !== null ? AccessConfig.fromPartial(object.instantiatePermission) : undefined;
    message.unpinCode = object.unpinCode ?? false;
    message.admin = object.admin ?? "";
    message.label = object.label ?? "";
    message.msg = object.msg ?? new Uint8Array();
    message.funds = object.funds?.map(e => Coin.fromPartial(e)) || [];
    message.source = object.source ?? "";
    message.builder = object.builder ?? "";
    message.codeHash = object.codeHash ?? new Uint8Array();
    return message;
  },
  fromSDK(object: MsgStoreAndInstantiateContractSDKType): MsgStoreAndInstantiateContract {
    return {
      authority: object?.authority,
      wasmByteCode: object?.wasm_byte_code,
      instantiatePermission: object.instantiate_permission ? AccessConfig.fromSDK(object.instantiate_permission) : undefined,
      unpinCode: object?.unpin_code,
      admin: object?.admin,
      label: object?.label,
      msg: object?.msg,
      funds: Array.isArray(object?.funds) ? object.funds.map((e: any) => Coin.fromSDK(e)) : [],
      source: object?.source,
      builder: object?.builder,
      codeHash: object?.code_hash
    };
  },
  toSDK(message: MsgStoreAndInstantiateContract): MsgStoreAndInstantiateContractSDKType {
    const obj: any = {};
    obj.authority = message.authority;
    obj.wasm_byte_code = message.wasmByteCode;
    message.instantiatePermission !== undefined && (obj.instantiate_permission = message.instantiatePermission ? AccessConfig.toSDK(message.instantiatePermission) : undefined);
    obj.unpin_code = message.unpinCode;
    obj.admin = message.admin;
    obj.label = message.label;
    obj.msg = message.msg;
    if (message.funds) {
      obj.funds = message.funds.map(e => e ? Coin.toSDK(e) : undefined);
    } else {
      obj.funds = [];
    }
    obj.source = message.source;
    obj.builder = message.builder;
    obj.code_hash = message.codeHash;
    return obj;
  },
  fromAmino(object: MsgStoreAndInstantiateContractAmino): MsgStoreAndInstantiateContract {
    return {
      authority: object.authority,
      wasmByteCode: fromBase64(object.wasm_byte_code),
      instantiatePermission: object?.instantiate_permission ? AccessConfig.fromAmino(object.instantiate_permission) : undefined,
      unpinCode: object.unpin_code,
      admin: object.admin,
      label: object.label,
      msg: toUtf8(JSON.stringify(object.msg)),
      funds: Array.isArray(object?.funds) ? object.funds.map((e: any) => Coin.fromAmino(e)) : [],
      source: object.source,
      builder: object.builder,
      codeHash: object.code_hash
    };
  },
  toAmino(message: MsgStoreAndInstantiateContract): MsgStoreAndInstantiateContractAmino {
    const obj: any = {};
    obj.authority = message.authority;
    obj.wasm_byte_code = message.wasmByteCode ? toBase64(message.wasmByteCode) : undefined;
    obj.instantiate_permission = message.instantiatePermission ? AccessConfig.toAmino(message.instantiatePermission) : undefined;
    obj.unpin_code = message.unpinCode;
    obj.admin = message.admin;
    obj.label = message.label;
    obj.msg = message.msg ? JSON.parse(fromUtf8(message.msg)) : undefined;
    if (message.funds) {
      obj.funds = message.funds.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.funds = [];
    }
    obj.source = message.source;
    obj.builder = message.builder;
    obj.code_hash = message.codeHash;
    return obj;
  },
  fromAminoMsg(object: MsgStoreAndInstantiateContractAminoMsg): MsgStoreAndInstantiateContract {
    return MsgStoreAndInstantiateContract.fromAmino(object.value);
  },
  toAminoMsg(message: MsgStoreAndInstantiateContract): MsgStoreAndInstantiateContractAminoMsg {
    return {
      type: "wasm/MsgStoreAndInstantiateContract",
      value: MsgStoreAndInstantiateContract.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgStoreAndInstantiateContractProtoMsg): MsgStoreAndInstantiateContract {
    return MsgStoreAndInstantiateContract.decode(message.value);
  },
  toProto(message: MsgStoreAndInstantiateContract): Uint8Array {
    return MsgStoreAndInstantiateContract.encode(message).finish();
  },
  toProtoMsg(message: MsgStoreAndInstantiateContract): MsgStoreAndInstantiateContractProtoMsg {
    return {
      typeUrl: "/cosmwasm.wasm.v1.MsgStoreAndInstantiateContract",
      value: MsgStoreAndInstantiateContract.encode(message).finish()
    };
  }
};
function createBaseMsgStoreAndInstantiateContractResponse(): MsgStoreAndInstantiateContractResponse {
  return {
    address: "",
    data: new Uint8Array()
  };
}
export const MsgStoreAndInstantiateContractResponse = {
  typeUrl: "/cosmwasm.wasm.v1.MsgStoreAndInstantiateContractResponse",
  aminoType: "wasm/MsgStoreAndInstantiateContractResponse",
  encode(message: MsgStoreAndInstantiateContractResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.data.length !== 0) {
      writer.uint32(18).bytes(message.data);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgStoreAndInstantiateContractResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgStoreAndInstantiateContractResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        case 2:
          message.data = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgStoreAndInstantiateContractResponse {
    return {
      address: isSet(object.address) ? String(object.address) : "",
      data: isSet(object.data) ? bytesFromBase64(object.data) : new Uint8Array()
    };
  },
  toJSON(message: MsgStoreAndInstantiateContractResponse): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    message.data !== undefined && (obj.data = base64FromBytes(message.data !== undefined ? message.data : new Uint8Array()));
    return obj;
  },
  fromPartial(object: DeepPartial<MsgStoreAndInstantiateContractResponse>): MsgStoreAndInstantiateContractResponse {
    const message = createBaseMsgStoreAndInstantiateContractResponse();
    message.address = object.address ?? "";
    message.data = object.data ?? new Uint8Array();
    return message;
  },
  fromSDK(object: MsgStoreAndInstantiateContractResponseSDKType): MsgStoreAndInstantiateContractResponse {
    return {
      address: object?.address,
      data: object?.data
    };
  },
  toSDK(message: MsgStoreAndInstantiateContractResponse): MsgStoreAndInstantiateContractResponseSDKType {
    const obj: any = {};
    obj.address = message.address;
    obj.data = message.data;
    return obj;
  },
  fromAmino(object: MsgStoreAndInstantiateContractResponseAmino): MsgStoreAndInstantiateContractResponse {
    return {
      address: object.address,
      data: object.data
    };
  },
  toAmino(message: MsgStoreAndInstantiateContractResponse): MsgStoreAndInstantiateContractResponseAmino {
    const obj: any = {};
    obj.address = message.address;
    obj.data = message.data;
    return obj;
  },
  fromAminoMsg(object: MsgStoreAndInstantiateContractResponseAminoMsg): MsgStoreAndInstantiateContractResponse {
    return MsgStoreAndInstantiateContractResponse.fromAmino(object.value);
  },
  toAminoMsg(message: MsgStoreAndInstantiateContractResponse): MsgStoreAndInstantiateContractResponseAminoMsg {
    return {
      type: "wasm/MsgStoreAndInstantiateContractResponse",
      value: MsgStoreAndInstantiateContractResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgStoreAndInstantiateContractResponseProtoMsg): MsgStoreAndInstantiateContractResponse {
    return MsgStoreAndInstantiateContractResponse.decode(message.value);
  },
  toProto(message: MsgStoreAndInstantiateContractResponse): Uint8Array {
    return MsgStoreAndInstantiateContractResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgStoreAndInstantiateContractResponse): MsgStoreAndInstantiateContractResponseProtoMsg {
    return {
      typeUrl: "/cosmwasm.wasm.v1.MsgStoreAndInstantiateContractResponse",
      value: MsgStoreAndInstantiateContractResponse.encode(message).finish()
    };
  }
};