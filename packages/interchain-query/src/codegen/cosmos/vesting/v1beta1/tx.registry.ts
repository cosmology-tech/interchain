//@ts-nocheck
import { GeneratedType, Registry } from "@cosmjs/proto-signing";
import { MsgCreateVestingAccount, MsgCreateClawbackVestingAccount, MsgClawback } from "./tx";
export const registry: ReadonlyArray<[string, GeneratedType]> = [["/cosmos.vesting.v1beta1.MsgCreateVestingAccount", MsgCreateVestingAccount], ["/cosmos.vesting.v1beta1.MsgCreateClawbackVestingAccount", MsgCreateClawbackVestingAccount], ["/cosmos.vesting.v1beta1.MsgClawback", MsgClawback]];
export const load = (protoRegistry: Registry) => {
  registry.forEach(([typeUrl, mod]) => {
    protoRegistry.register(typeUrl, mod);
  });
};
export const MessageComposer = {
  encoded: {
    createVestingAccount(value: MsgCreateVestingAccount) {
      return {
        typeUrl: "/cosmos.vesting.v1beta1.MsgCreateVestingAccount",
        value: MsgCreateVestingAccount.encode(value).finish()
      };
    },
    createClawbackVestingAccount(value: MsgCreateClawbackVestingAccount) {
      return {
        typeUrl: "/cosmos.vesting.v1beta1.MsgCreateClawbackVestingAccount",
        value: MsgCreateClawbackVestingAccount.encode(value).finish()
      };
    },
    clawback(value: MsgClawback) {
      return {
        typeUrl: "/cosmos.vesting.v1beta1.MsgClawback",
        value: MsgClawback.encode(value).finish()
      };
    }
  },
  withTypeUrl: {
    createVestingAccount(value: MsgCreateVestingAccount) {
      return {
        typeUrl: "/cosmos.vesting.v1beta1.MsgCreateVestingAccount",
        value
      };
    },
    createClawbackVestingAccount(value: MsgCreateClawbackVestingAccount) {
      return {
        typeUrl: "/cosmos.vesting.v1beta1.MsgCreateClawbackVestingAccount",
        value
      };
    },
    clawback(value: MsgClawback) {
      return {
        typeUrl: "/cosmos.vesting.v1beta1.MsgClawback",
        value
      };
    }
  },
  toJSON: {
    createVestingAccount(value: MsgCreateVestingAccount) {
      return {
        typeUrl: "/cosmos.vesting.v1beta1.MsgCreateVestingAccount",
        value: MsgCreateVestingAccount.toJSON(value)
      };
    },
    createClawbackVestingAccount(value: MsgCreateClawbackVestingAccount) {
      return {
        typeUrl: "/cosmos.vesting.v1beta1.MsgCreateClawbackVestingAccount",
        value: MsgCreateClawbackVestingAccount.toJSON(value)
      };
    },
    clawback(value: MsgClawback) {
      return {
        typeUrl: "/cosmos.vesting.v1beta1.MsgClawback",
        value: MsgClawback.toJSON(value)
      };
    }
  },
  fromJSON: {
    createVestingAccount(value: any) {
      return {
        typeUrl: "/cosmos.vesting.v1beta1.MsgCreateVestingAccount",
        value: MsgCreateVestingAccount.fromJSON(value)
      };
    },
    createClawbackVestingAccount(value: any) {
      return {
        typeUrl: "/cosmos.vesting.v1beta1.MsgCreateClawbackVestingAccount",
        value: MsgCreateClawbackVestingAccount.fromJSON(value)
      };
    },
    clawback(value: any) {
      return {
        typeUrl: "/cosmos.vesting.v1beta1.MsgClawback",
        value: MsgClawback.fromJSON(value)
      };
    }
  },
  fromPartial: {
    createVestingAccount(value: MsgCreateVestingAccount) {
      return {
        typeUrl: "/cosmos.vesting.v1beta1.MsgCreateVestingAccount",
        value: MsgCreateVestingAccount.fromPartial(value)
      };
    },
    createClawbackVestingAccount(value: MsgCreateClawbackVestingAccount) {
      return {
        typeUrl: "/cosmos.vesting.v1beta1.MsgCreateClawbackVestingAccount",
        value: MsgCreateClawbackVestingAccount.fromPartial(value)
      };
    },
    clawback(value: MsgClawback) {
      return {
        typeUrl: "/cosmos.vesting.v1beta1.MsgClawback",
        value: MsgClawback.fromPartial(value)
      };
    }
  }
};