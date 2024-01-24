import { Rpc } from "../../../helpers";
import { BinaryReader } from "../../../binary";
import { MsgInit, MsgInitResponse, MsgExecute, MsgExecuteResponse } from "./tx";
/** Msg defines the Msg service for the x/accounts module. */
export interface Msg {
  /** Init creates a new account in the chain. */
  init(request: MsgInit): Promise<MsgInitResponse>;
  /** Execute executes a message to the target account. */
  execute(request: MsgExecute): Promise<MsgExecuteResponse>;
}
export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.init = this.init.bind(this);
    this.execute = this.execute.bind(this);
  }
  init(request: MsgInit): Promise<MsgInitResponse> {
    const data = MsgInit.encode(request).finish();
    const promise = this.rpc.request("cosmos.accounts.v1.Msg", "Init", data);
    return promise.then(data => MsgInitResponse.decode(new BinaryReader(data)));
  }
  execute(request: MsgExecute): Promise<MsgExecuteResponse> {
    const data = MsgExecute.encode(request).finish();
    const promise = this.rpc.request("cosmos.accounts.v1.Msg", "Execute", data);
    return promise.then(data => MsgExecuteResponse.decode(new BinaryReader(data)));
  }
}
export const createClientImpl = (rpc: Rpc) => {
  return new MsgClientImpl(rpc);
};