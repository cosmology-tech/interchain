import { Rpc } from "../../../helpers";
import { BinaryReader } from "../../../binary";
import { MsgCreateVestingAccount, MsgCreateVestingAccountResponse, MsgCreateClawbackVestingAccount, MsgCreateClawbackVestingAccountResponse, MsgClawback, MsgClawbackResponse } from "./tx";
/** Msg defines the bank Msg service. */
export interface Msg {
  /**
   * CreateVestingAccount defines a method that enables creating a vesting
   * account.
   */
  createVestingAccount(request: MsgCreateVestingAccount): Promise<MsgCreateVestingAccountResponse>;
  /**
   * CreateClawbackVestingAccount creats a vesting account that is subject to
   * clawback and the configuration of vesting and lockup schedules.
   */
  createClawbackVestingAccount(request: MsgCreateClawbackVestingAccount): Promise<MsgCreateClawbackVestingAccountResponse>;
  /** Clawback removes the unvested tokens from a ClawbackVestingAccount. */
  clawback(request: MsgClawback): Promise<MsgClawbackResponse>;
}
export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.createVestingAccount = this.createVestingAccount.bind(this);
    this.createClawbackVestingAccount = this.createClawbackVestingAccount.bind(this);
    this.clawback = this.clawback.bind(this);
  }
  createVestingAccount(request: MsgCreateVestingAccount): Promise<MsgCreateVestingAccountResponse> {
    const data = MsgCreateVestingAccount.encode(request).finish();
    const promise = this.rpc.request("cosmos.vesting.v1beta1.Msg", "CreateVestingAccount", data);
    return promise.then(data => MsgCreateVestingAccountResponse.decode(new BinaryReader(data)));
  }
  createClawbackVestingAccount(request: MsgCreateClawbackVestingAccount): Promise<MsgCreateClawbackVestingAccountResponse> {
    const data = MsgCreateClawbackVestingAccount.encode(request).finish();
    const promise = this.rpc.request("cosmos.vesting.v1beta1.Msg", "CreateClawbackVestingAccount", data);
    return promise.then(data => MsgCreateClawbackVestingAccountResponse.decode(new BinaryReader(data)));
  }
  clawback(request: MsgClawback): Promise<MsgClawbackResponse> {
    const data = MsgClawback.encode(request).finish();
    const promise = this.rpc.request("cosmos.vesting.v1beta1.Msg", "Clawback", data);
    return promise.then(data => MsgClawbackResponse.decode(new BinaryReader(data)));
  }
}