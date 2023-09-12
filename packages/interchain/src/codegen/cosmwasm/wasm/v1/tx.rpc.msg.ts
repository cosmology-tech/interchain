import { Rpc } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
import { MsgStoreCode, MsgStoreCodeResponse, MsgInstantiateContract, MsgInstantiateContractResponse, MsgInstantiateContract2, MsgInstantiateContract2Response, MsgExecuteContract, MsgExecuteContractResponse, MsgMigrateContract, MsgMigrateContractResponse, MsgUpdateAdmin, MsgUpdateAdminResponse, MsgClearAdmin, MsgClearAdminResponse, MsgUpdateInstantiateConfig, MsgUpdateInstantiateConfigResponse, MsgUpdateParams, MsgUpdateParamsResponse, MsgSudoContract, MsgSudoContractResponse, MsgPinCodes, MsgPinCodesResponse, MsgUnpinCodes, MsgUnpinCodesResponse, MsgStoreAndInstantiateContract, MsgStoreAndInstantiateContractResponse, MsgRemoveCodeUploadParamsAddresses, MsgRemoveCodeUploadParamsAddressesResponse, MsgAddCodeUploadParamsAddresses, MsgAddCodeUploadParamsAddressesResponse } from "./tx";
/** Msg defines the wasm Msg service. */
export interface Msg {
  /** StoreCode to submit Wasm code to the system */
  storeCode(request: MsgStoreCode): Promise<MsgStoreCodeResponse>;
  /**
   * InstantiateContract creates a new smart contract instance for the given
   *  code id.
   */
  instantiateContract(request: MsgInstantiateContract): Promise<MsgInstantiateContractResponse>;
  /**
   * InstantiateContract2 creates a new smart contract instance for the given
   *  code id with a predictable address
   */
  instantiateContract2(request: MsgInstantiateContract2): Promise<MsgInstantiateContract2Response>;
  /** Execute submits the given message data to a smart contract */
  executeContract(request: MsgExecuteContract): Promise<MsgExecuteContractResponse>;
  /** Migrate runs a code upgrade/ downgrade for a smart contract */
  migrateContract(request: MsgMigrateContract): Promise<MsgMigrateContractResponse>;
  /** UpdateAdmin sets a new   admin for a smart contract */
  updateAdmin(request: MsgUpdateAdmin): Promise<MsgUpdateAdminResponse>;
  /** ClearAdmin removes any admin stored for a smart contract */
  clearAdmin(request: MsgClearAdmin): Promise<MsgClearAdminResponse>;
  /** UpdateInstantiateConfig updates instantiate config for a smart contract */
  updateInstantiateConfig(request: MsgUpdateInstantiateConfig): Promise<MsgUpdateInstantiateConfigResponse>;
  /**
   * UpdateParams defines a governance operation for updating the x/wasm
   * module parameters. The authority is defined in the keeper.
   * 
   * Since: 0.40
   */
  updateParams(request: MsgUpdateParams): Promise<MsgUpdateParamsResponse>;
  /**
   * SudoContract defines a governance operation for calling sudo
   * on a contract. The authority is defined in the keeper.
   * 
   * Since: 0.40
   */
  sudoContract(request: MsgSudoContract): Promise<MsgSudoContractResponse>;
  /**
   * PinCodes defines a governance operation for pinning a set of
   * code ids in the wasmvm cache. The authority is defined in the keeper.
   * 
   * Since: 0.40
   */
  pinCodes(request: MsgPinCodes): Promise<MsgPinCodesResponse>;
  /**
   * UnpinCodes defines a governance operation for unpinning a set of
   * code ids in the wasmvm cache. The authority is defined in the keeper.
   * 
   * Since: 0.40
   */
  unpinCodes(request: MsgUnpinCodes): Promise<MsgUnpinCodesResponse>;
  /**
   * StoreAndInstantiateContract defines a governance operation for storing
   * and instantiating the contract. The authority is defined in the keeper.
   * 
   * Since: 0.40
   */
  storeAndInstantiateContract(request: MsgStoreAndInstantiateContract): Promise<MsgStoreAndInstantiateContractResponse>;
  /**
   * RemoveCodeUploadParamsAddresses defines a governance operation for
   * removing addresses from code upload params.
   * The authority is defined in the keeper.
   */
  removeCodeUploadParamsAddresses(request: MsgRemoveCodeUploadParamsAddresses): Promise<MsgRemoveCodeUploadParamsAddressesResponse>;
  /**
   * AddCodeUploadParamsAddresses defines a governance operation for
   * adding addresses to code upload params.
   * The authority is defined in the keeper.
   */
  addCodeUploadParamsAddresses(request: MsgAddCodeUploadParamsAddresses): Promise<MsgAddCodeUploadParamsAddressesResponse>;
}
export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
  }
  /* StoreCode to submit Wasm code to the system */
  storeCode = async (request: MsgStoreCode): Promise<MsgStoreCodeResponse> => {
    const data = MsgStoreCode.encode(request).finish();
    const promise = this.rpc.request("cosmwasm.wasm.v1.Msg", "StoreCode", data);
    return promise.then(data => MsgStoreCodeResponse.decode(new _m0.Reader(data)));
  };
  /* InstantiateContract creates a new smart contract instance for the given
    code id. */
  instantiateContract = async (request: MsgInstantiateContract): Promise<MsgInstantiateContractResponse> => {
    const data = MsgInstantiateContract.encode(request).finish();
    const promise = this.rpc.request("cosmwasm.wasm.v1.Msg", "InstantiateContract", data);
    return promise.then(data => MsgInstantiateContractResponse.decode(new _m0.Reader(data)));
  };
  /* InstantiateContract2 creates a new smart contract instance for the given
    code id with a predictable address */
  instantiateContract2 = async (request: MsgInstantiateContract2): Promise<MsgInstantiateContract2Response> => {
    const data = MsgInstantiateContract2.encode(request).finish();
    const promise = this.rpc.request("cosmwasm.wasm.v1.Msg", "InstantiateContract2", data);
    return promise.then(data => MsgInstantiateContract2Response.decode(new _m0.Reader(data)));
  };
  /* Execute submits the given message data to a smart contract */
  executeContract = async (request: MsgExecuteContract): Promise<MsgExecuteContractResponse> => {
    const data = MsgExecuteContract.encode(request).finish();
    const promise = this.rpc.request("cosmwasm.wasm.v1.Msg", "ExecuteContract", data);
    return promise.then(data => MsgExecuteContractResponse.decode(new _m0.Reader(data)));
  };
  /* Migrate runs a code upgrade/ downgrade for a smart contract */
  migrateContract = async (request: MsgMigrateContract): Promise<MsgMigrateContractResponse> => {
    const data = MsgMigrateContract.encode(request).finish();
    const promise = this.rpc.request("cosmwasm.wasm.v1.Msg", "MigrateContract", data);
    return promise.then(data => MsgMigrateContractResponse.decode(new _m0.Reader(data)));
  };
  /* UpdateAdmin sets a new   admin for a smart contract */
  updateAdmin = async (request: MsgUpdateAdmin): Promise<MsgUpdateAdminResponse> => {
    const data = MsgUpdateAdmin.encode(request).finish();
    const promise = this.rpc.request("cosmwasm.wasm.v1.Msg", "UpdateAdmin", data);
    return promise.then(data => MsgUpdateAdminResponse.decode(new _m0.Reader(data)));
  };
  /* ClearAdmin removes any admin stored for a smart contract */
  clearAdmin = async (request: MsgClearAdmin): Promise<MsgClearAdminResponse> => {
    const data = MsgClearAdmin.encode(request).finish();
    const promise = this.rpc.request("cosmwasm.wasm.v1.Msg", "ClearAdmin", data);
    return promise.then(data => MsgClearAdminResponse.decode(new _m0.Reader(data)));
  };
  /* UpdateInstantiateConfig updates instantiate config for a smart contract */
  updateInstantiateConfig = async (request: MsgUpdateInstantiateConfig): Promise<MsgUpdateInstantiateConfigResponse> => {
    const data = MsgUpdateInstantiateConfig.encode(request).finish();
    const promise = this.rpc.request("cosmwasm.wasm.v1.Msg", "UpdateInstantiateConfig", data);
    return promise.then(data => MsgUpdateInstantiateConfigResponse.decode(new _m0.Reader(data)));
  };
  /* UpdateParams defines a governance operation for updating the x/wasm
   module parameters. The authority is defined in the keeper.
  
   Since: 0.40 */
  updateParams = async (request: MsgUpdateParams): Promise<MsgUpdateParamsResponse> => {
    const data = MsgUpdateParams.encode(request).finish();
    const promise = this.rpc.request("cosmwasm.wasm.v1.Msg", "UpdateParams", data);
    return promise.then(data => MsgUpdateParamsResponse.decode(new _m0.Reader(data)));
  };
  /* SudoContract defines a governance operation for calling sudo
   on a contract. The authority is defined in the keeper.
  
   Since: 0.40 */
  sudoContract = async (request: MsgSudoContract): Promise<MsgSudoContractResponse> => {
    const data = MsgSudoContract.encode(request).finish();
    const promise = this.rpc.request("cosmwasm.wasm.v1.Msg", "SudoContract", data);
    return promise.then(data => MsgSudoContractResponse.decode(new _m0.Reader(data)));
  };
  /* PinCodes defines a governance operation for pinning a set of
   code ids in the wasmvm cache. The authority is defined in the keeper.
  
   Since: 0.40 */
  pinCodes = async (request: MsgPinCodes): Promise<MsgPinCodesResponse> => {
    const data = MsgPinCodes.encode(request).finish();
    const promise = this.rpc.request("cosmwasm.wasm.v1.Msg", "PinCodes", data);
    return promise.then(data => MsgPinCodesResponse.decode(new _m0.Reader(data)));
  };
  /* UnpinCodes defines a governance operation for unpinning a set of
   code ids in the wasmvm cache. The authority is defined in the keeper.
  
   Since: 0.40 */
  unpinCodes = async (request: MsgUnpinCodes): Promise<MsgUnpinCodesResponse> => {
    const data = MsgUnpinCodes.encode(request).finish();
    const promise = this.rpc.request("cosmwasm.wasm.v1.Msg", "UnpinCodes", data);
    return promise.then(data => MsgUnpinCodesResponse.decode(new _m0.Reader(data)));
  };
  /* StoreAndInstantiateContract defines a governance operation for storing
   and instantiating the contract. The authority is defined in the keeper.
  
   Since: 0.40 */
  storeAndInstantiateContract = async (request: MsgStoreAndInstantiateContract): Promise<MsgStoreAndInstantiateContractResponse> => {
    const data = MsgStoreAndInstantiateContract.encode(request).finish();
    const promise = this.rpc.request("cosmwasm.wasm.v1.Msg", "StoreAndInstantiateContract", data);
    return promise.then(data => MsgStoreAndInstantiateContractResponse.decode(new _m0.Reader(data)));
  };
  /* RemoveCodeUploadParamsAddresses defines a governance operation for
   removing addresses from code upload params.
   The authority is defined in the keeper. */
  removeCodeUploadParamsAddresses = async (request: MsgRemoveCodeUploadParamsAddresses): Promise<MsgRemoveCodeUploadParamsAddressesResponse> => {
    const data = MsgRemoveCodeUploadParamsAddresses.encode(request).finish();
    const promise = this.rpc.request("cosmwasm.wasm.v1.Msg", "RemoveCodeUploadParamsAddresses", data);
    return promise.then(data => MsgRemoveCodeUploadParamsAddressesResponse.decode(new _m0.Reader(data)));
  };
  /* AddCodeUploadParamsAddresses defines a governance operation for
   adding addresses to code upload params.
   The authority is defined in the keeper. */
  addCodeUploadParamsAddresses = async (request: MsgAddCodeUploadParamsAddresses): Promise<MsgAddCodeUploadParamsAddressesResponse> => {
    const data = MsgAddCodeUploadParamsAddresses.encode(request).finish();
    const promise = this.rpc.request("cosmwasm.wasm.v1.Msg", "AddCodeUploadParamsAddresses", data);
    return promise.then(data => MsgAddCodeUploadParamsAddressesResponse.decode(new _m0.Reader(data)));
  };
}