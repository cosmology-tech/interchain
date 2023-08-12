import { Rpc } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
import { MsgUpdateParams, MsgUpdateParamsResponse } from "./tx";
/** Msg defines the consensus Msg service. */
export interface Msg {
  /**
   * UpdateParams defines a governance operation for updating the x/consensus module parameters.
   * The authority is defined in the keeper.
   * 
   * Since: cosmos-sdk 0.47
   */
  updateParams(request: MsgUpdateParams): Promise<MsgUpdateParamsResponse>;
}
export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
  }
  /* UpdateParams defines a governance operation for updating the x/consensus module parameters.
   The authority is defined in the keeper.
  
   Since: cosmos-sdk 0.47 */
  updateParams = async (request: MsgUpdateParams): Promise<MsgUpdateParamsResponse> => {
    const data = MsgUpdateParams.encode(request).finish();
    const promise = this.rpc.request("cosmos.consensus.v1.Msg", "UpdateParams", data);
    return promise.then(data => MsgUpdateParamsResponse.decode(new _m0.Reader(data)));
  };
}