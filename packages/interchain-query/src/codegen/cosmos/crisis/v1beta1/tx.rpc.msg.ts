import { Rpc } from "../../../helpers";
import { BinaryReader } from "../../../binary";
import { MsgVerifyInvariant, MsgVerifyInvariantResponse, MsgUpdateParams, MsgUpdateParamsResponse } from "./tx";
/** Msg defines the bank Msg service. */
export interface Msg {
  /** VerifyInvariant defines a method to verify a particular invariant. */
  verifyInvariant(request: MsgVerifyInvariant): Promise<MsgVerifyInvariantResponse>;
  /**
   * UpdateParams defines a governance operation for updating the x/crisis module
   * parameters. The authority is defined in the keeper.
   * 
   * Since: cosmos-sdk 0.47
   */
  updateParams(request: MsgUpdateParams): Promise<MsgUpdateParamsResponse>;
}
export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.verifyInvariant = this.verifyInvariant.bind(this);
    this.updateParams = this.updateParams.bind(this);
  }
  verifyInvariant(request: MsgVerifyInvariant): Promise<MsgVerifyInvariantResponse> {
    const data = MsgVerifyInvariant.encode(request).finish();
    const promise = this.rpc.request("cosmos.crisis.v1beta1.Msg", "VerifyInvariant", data);
    return promise.then(data => MsgVerifyInvariantResponse.decode(new BinaryReader(data)));
  }
  updateParams(request: MsgUpdateParams): Promise<MsgUpdateParamsResponse> {
    const data = MsgUpdateParams.encode(request).finish();
    const promise = this.rpc.request("cosmos.crisis.v1beta1.Msg", "UpdateParams", data);
    return promise.then(data => MsgUpdateParamsResponse.decode(new BinaryReader(data)));
  }
}
export const createClientImpl = (rpc: Rpc) => {
  return new MsgClientImpl(rpc);
};