import * as _1 from "./app/runtime/v1alpha1/module";
import * as _2 from "./auth/module/v1/module";
import * as _3 from "./auth/v1beta1/auth";
import * as _4 from "./auth/v1beta1/genesis";
import * as _5 from "./auth/v1beta1/query";
import * as _6 from "./auth/v1beta1/tx";
import * as _7 from "./authz/module/v1/module";
import * as _8 from "./authz/v1beta1/authz";
import * as _9 from "./authz/v1beta1/event";
import * as _10 from "./authz/v1beta1/genesis";
import * as _11 from "./authz/v1beta1/query";
import * as _12 from "./authz/v1beta1/tx";
import * as _13 from "./bank/module/v1/module";
import * as _14 from "./bank/v1beta1/authz";
import * as _15 from "./bank/v1beta1/bank";
import * as _16 from "./bank/v1beta1/genesis";
import * as _17 from "./bank/v1beta1/query";
import * as _18 from "./bank/v1beta1/tx";
import * as _19 from "./base/abci/v1beta1/abci";
import * as _20 from "./base/node/v1beta1/query";
import * as _21 from "./base/query/v1beta1/pagination";
import * as _22 from "./base/reflection/v2alpha1/reflection";
import * as _23 from "./base/v1beta1/coin";
import * as _24 from "./circuit/module/v1/module";
import * as _25 from "./circuit/v1/query";
import * as _26 from "./circuit/v1/tx";
import * as _27 from "./circuit/v1/types";
import * as _28 from "./consensus/module/v1/module";
import * as _29 from "./consensus/v1/query";
import * as _30 from "./consensus/v1/tx";
import * as _31 from "./crisis/module/v1/module";
import * as _32 from "./crypto/ed25519/keys";
import * as _33 from "./crypto/hd/v1/hd";
import * as _34 from "./crypto/keyring/v1/record";
import * as _35 from "./crypto/multisig/keys";
import * as _36 from "./crypto/secp256k1/keys";
import * as _37 from "./crypto/secp256r1/keys";
import * as _38 from "./distribution/module/v1/module";
import * as _39 from "./distribution/v1beta1/distribution";
import * as _40 from "./distribution/v1beta1/genesis";
import * as _41 from "./distribution/v1beta1/query";
import * as _42 from "./distribution/v1beta1/tx";
import * as _43 from "./evidence/module/v1/module";
import * as _44 from "./feegrant/module/v1/module";
import * as _45 from "./genutil/module/v1/module";
import * as _46 from "./gov/module/v1/module";
import * as _47 from "./gov/v1/genesis";
import * as _48 from "./gov/v1/gov";
import * as _49 from "./gov/v1/query";
import * as _50 from "./gov/v1/tx";
import * as _51 from "./gov/v1beta1/genesis";
import * as _52 from "./gov/v1beta1/gov";
import * as _53 from "./gov/v1beta1/query";
import * as _54 from "./gov/v1beta1/tx";
import * as _55 from "./group/module/v1/module";
import * as _56 from "./mint/module/v1/module";
import * as _57 from "./mint/v1beta1/genesis";
import * as _58 from "./mint/v1beta1/mint";
import * as _59 from "./mint/v1beta1/query";
import * as _60 from "./mint/v1beta1/tx";
import * as _61 from "./msg/textual/v1/textual";
import * as _62 from "./nft/module/v1/module";
import * as _63 from "./orm/module/v1alpha1/module";
import * as _64 from "./orm/query/v1alpha1/query";
import * as _65 from "./params/module/v1/module";
import * as _66 from "./query/v1/query";
import * as _67 from "./reflection/v1/reflection";
import * as _68 from "./slashing/module/v1/module";
import * as _69 from "./staking/module/v1/module";
import * as _70 from "./staking/v1beta1/authz";
import * as _71 from "./staking/v1beta1/genesis";
import * as _72 from "./staking/v1beta1/query";
import * as _73 from "./staking/v1beta1/staking";
import * as _74 from "./staking/v1beta1/tx";
import * as _75 from "./store/internal/kv/v1beta1/kv";
import * as _76 from "./store/snapshots/v1/snapshot";
import * as _77 from "./store/streaming/abci/grpc";
import * as _78 from "./store/v1beta1/commit_info";
import * as _79 from "./store/v1beta1/listening";
import * as _80 from "./tx/config/v1/config";
import * as _81 from "./tx/signing/v1beta1/signing";
import * as _82 from "./tx/v1beta1/service";
import * as _83 from "./tx/v1beta1/tx";
import * as _84 from "./upgrade/module/v1/module";
import * as _85 from "./upgrade/v1beta1/query";
import * as _86 from "./upgrade/v1beta1/tx";
import * as _87 from "./upgrade/v1beta1/upgrade";
import * as _88 from "./vesting/module/v1/module";
import * as _89 from "./ics23/v1/proofs";
import * as _143 from "./auth/v1beta1/tx.amino";
import * as _144 from "./bank/v1beta1/tx.amino";
import * as _145 from "./circuit/v1/tx.amino";
import * as _146 from "./consensus/v1/tx.amino";
import * as _147 from "./distribution/v1beta1/tx.amino";
import * as _148 from "./gov/v1/tx.amino";
import * as _149 from "./gov/v1beta1/tx.amino";
import * as _150 from "./mint/v1beta1/tx.amino";
import * as _151 from "./staking/v1beta1/tx.amino";
import * as _152 from "./upgrade/v1beta1/tx.amino";
import * as _153 from "./auth/v1beta1/tx.registry";
import * as _154 from "./bank/v1beta1/tx.registry";
import * as _155 from "./circuit/v1/tx.registry";
import * as _156 from "./consensus/v1/tx.registry";
import * as _157 from "./distribution/v1beta1/tx.registry";
import * as _158 from "./gov/v1/tx.registry";
import * as _159 from "./gov/v1beta1/tx.registry";
import * as _160 from "./mint/v1beta1/tx.registry";
import * as _161 from "./staking/v1beta1/tx.registry";
import * as _162 from "./upgrade/v1beta1/tx.registry";
import * as _163 from "./auth/v1beta1/query.lcd";
import * as _164 from "./authz/v1beta1/query.lcd";
import * as _165 from "./bank/v1beta1/query.lcd";
import * as _166 from "./base/node/v1beta1/query.lcd";
import * as _167 from "./circuit/v1/query.lcd";
import * as _168 from "./consensus/v1/query.lcd";
import * as _169 from "./distribution/v1beta1/query.lcd";
import * as _170 from "./gov/v1/query.lcd";
import * as _171 from "./gov/v1beta1/query.lcd";
import * as _172 from "./mint/v1beta1/query.lcd";
import * as _173 from "./staking/v1beta1/query.lcd";
import * as _174 from "./tx/v1beta1/service.lcd";
import * as _175 from "./upgrade/v1beta1/query.lcd";
import * as _176 from "./auth/v1beta1/query.rpc.Query";
import * as _177 from "./authz/v1beta1/query.rpc.Query";
import * as _178 from "./bank/v1beta1/query.rpc.Query";
import * as _179 from "./base/node/v1beta1/query.rpc.Service";
import * as _180 from "./circuit/v1/query.rpc.Query";
import * as _181 from "./consensus/v1/query.rpc.Query";
import * as _182 from "./distribution/v1beta1/query.rpc.Query";
import * as _183 from "./gov/v1/query.rpc.Query";
import * as _184 from "./gov/v1beta1/query.rpc.Query";
import * as _185 from "./mint/v1beta1/query.rpc.Query";
import * as _186 from "./orm/query/v1alpha1/query.rpc.Query";
import * as _187 from "./staking/v1beta1/query.rpc.Query";
import * as _188 from "./tx/v1beta1/service.rpc.Service";
import * as _189 from "./upgrade/v1beta1/query.rpc.Query";
import * as _190 from "./auth/v1beta1/tx.rpc.msg";
import * as _191 from "./authz/v1beta1/tx.rpc.msg";
import * as _192 from "./bank/v1beta1/tx.rpc.msg";
import * as _193 from "./circuit/v1/tx.rpc.msg";
import * as _194 from "./consensus/v1/tx.rpc.msg";
import * as _195 from "./distribution/v1beta1/tx.rpc.msg";
import * as _196 from "./gov/v1/tx.rpc.msg";
import * as _197 from "./gov/v1beta1/tx.rpc.msg";
import * as _198 from "./mint/v1beta1/tx.rpc.msg";
import * as _199 from "./staking/v1beta1/tx.rpc.msg";
import * as _200 from "./upgrade/v1beta1/tx.rpc.msg";
import * as _231 from "./lcd";
import * as _232 from "./rpc.query";
import * as _233 from "./rpc.tx";
export namespace cosmos {
  export namespace app {
    export namespace runtime {
      export const v1alpha1 = {
        ..._1
      };
    }
  }
  export namespace auth {
    export namespace module {
      export const v1 = {
        ..._2
      };
    }
    export const v1beta1 = {
      ..._3,
      ..._4,
      ..._5,
      ..._6,
      ..._143,
      ..._153,
      ..._163,
      ..._176,
      ..._190
    };
  }
  export namespace authz {
    export namespace module {
      export const v1 = {
        ..._7
      };
    }
    export const v1beta1 = {
      ..._8,
      ..._9,
      ..._10,
      ..._11,
      ..._12,
      ..._164,
      ..._177,
      ..._191
    };
  }
  export namespace bank {
    export namespace module {
      export const v1 = {
        ..._13
      };
    }
    export const v1beta1 = {
      ..._14,
      ..._15,
      ..._16,
      ..._17,
      ..._18,
      ..._144,
      ..._154,
      ..._165,
      ..._178,
      ..._192
    };
  }
  export namespace base {
    export namespace abci {
      export const v1beta1 = {
        ..._19
      };
    }
    export namespace node {
      export const v1beta1 = {
        ..._20,
        ..._166,
        ..._179
      };
    }
    export namespace query {
      export const v1beta1 = {
        ..._21
      };
    }
    export namespace reflection {
      export const v2alpha1 = {
        ..._22
      };
    }
    export const v1beta1 = {
      ..._23
    };
  }
  export namespace circuit {
    export namespace module {
      export const v1 = {
        ..._24
      };
    }
    export const v1 = {
      ..._25,
      ..._26,
      ..._27,
      ..._145,
      ..._155,
      ..._167,
      ..._180,
      ..._193
    };
  }
  export namespace consensus {
    export namespace module {
      export const v1 = {
        ..._28
      };
    }
    export const v1 = {
      ..._29,
      ..._30,
      ..._146,
      ..._156,
      ..._168,
      ..._181,
      ..._194
    };
  }
  export namespace crisis {
    export namespace module {
      export const v1 = {
        ..._31
      };
    }
  }
  export namespace crypto {
    export const ed25519 = {
      ..._32
    };
    export namespace hd {
      export const v1 = {
        ..._33
      };
    }
    export namespace keyring {
      export const v1 = {
        ..._34
      };
    }
    export const multisig = {
      ..._35
    };
    export const secp256k1 = {
      ..._36
    };
    export const secp256r1 = {
      ..._37
    };
  }
  export namespace distribution {
    export namespace module {
      export const v1 = {
        ..._38
      };
    }
    export const v1beta1 = {
      ..._39,
      ..._40,
      ..._41,
      ..._42,
      ..._147,
      ..._157,
      ..._169,
      ..._182,
      ..._195
    };
  }
  export namespace evidence {
    export namespace module {
      export const v1 = {
        ..._43
      };
    }
  }
  export namespace feegrant {
    export namespace module {
      export const v1 = {
        ..._44
      };
    }
  }
  export namespace genutil {
    export namespace module {
      export const v1 = {
        ..._45
      };
    }
  }
  export namespace gov {
    export namespace module {
      export const v1 = {
        ..._46
      };
    }
    export const v1 = {
      ..._47,
      ..._48,
      ..._49,
      ..._50,
      ..._148,
      ..._158,
      ..._170,
      ..._183,
      ..._196
    };
    export const v1beta1 = {
      ..._51,
      ..._52,
      ..._53,
      ..._54,
      ..._149,
      ..._159,
      ..._171,
      ..._184,
      ..._197
    };
  }
  export namespace group {
    export namespace module {
      export const v1 = {
        ..._55
      };
    }
  }
  export namespace mint {
    export namespace module {
      export const v1 = {
        ..._56
      };
    }
    export const v1beta1 = {
      ..._57,
      ..._58,
      ..._59,
      ..._60,
      ..._150,
      ..._160,
      ..._172,
      ..._185,
      ..._198
    };
  }
  export namespace msg {
    export namespace textual {
      export const v1 = {
        ..._61
      };
    }
  }
  export namespace nft {
    export namespace module {
      export const v1 = {
        ..._62
      };
    }
  }
  export namespace orm {
    export namespace module {
      export const v1alpha1 = {
        ..._63
      };
    }
    export namespace query {
      export const v1alpha1 = {
        ..._64,
        ..._186
      };
    }
  }
  export namespace params {
    export namespace module {
      export const v1 = {
        ..._65
      };
    }
  }
  export namespace query {
    export const v1 = {
      ..._66
    };
  }
  export namespace reflection {
    export const v1 = {
      ..._67
    };
  }
  export namespace slashing {
    export namespace module {
      export const v1 = {
        ..._68
      };
    }
  }
  export namespace staking {
    export namespace module {
      export const v1 = {
        ..._69
      };
    }
    export const v1beta1 = {
      ..._70,
      ..._71,
      ..._72,
      ..._73,
      ..._74,
      ..._151,
      ..._161,
      ..._173,
      ..._187,
      ..._199
    };
  }
  export namespace store {
    export namespace internal {
      export namespace kv {
        export const v1beta1 = {
          ..._75
        };
      }
    }
    export namespace snapshots {
      export const v1 = {
        ..._76
      };
    }
    export namespace streaming {
      export const abci = {
        ..._77
      };
    }
    export const v1beta1 = {
      ..._78,
      ..._79
    };
  }
  export namespace tx {
    export namespace config {
      export const v1 = {
        ..._80
      };
    }
    export namespace signing {
      export const v1beta1 = {
        ..._81
      };
    }
    export const v1beta1 = {
      ..._82,
      ..._83,
      ..._174,
      ..._188
    };
  }
  export namespace upgrade {
    export namespace module {
      export const v1 = {
        ..._84
      };
    }
    export const v1beta1 = {
      ..._85,
      ..._86,
      ..._87,
      ..._152,
      ..._162,
      ..._175,
      ..._189,
      ..._200
    };
  }
  export namespace vesting {
    export namespace module {
      export const v1 = {
        ..._88
      };
    }
  }
  export namespace ics23 {
    export const v1 = {
      ..._89
    };
  }
  export const ClientFactory = {
    ..._231,
    ..._232,
    ..._233
  };
}