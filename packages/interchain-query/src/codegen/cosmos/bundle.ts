import * as _0 from "./ics23/v1/proofs";
import * as _1 from "./auth/v1beta1/auth";
import * as _2 from "./auth/v1beta1/genesis";
import * as _3 from "./auth/v1beta1/query";
import * as _4 from "./authz/v1beta1/authz";
import * as _5 from "./authz/v1beta1/event";
import * as _6 from "./authz/v1beta1/genesis";
import * as _7 from "./authz/v1beta1/query";
import * as _8 from "./authz/v1beta1/tx";
import * as _9 from "./bank/v1beta1/authz";
import * as _10 from "./bank/v1beta1/bank";
import * as _11 from "./bank/v1beta1/genesis";
import * as _12 from "./bank/v1beta1/query";
import * as _13 from "./bank/v1beta1/tx";
import * as _14 from "./base/abci/v1beta1/abci";
import * as _15 from "./base/kv/v1beta1/kv";
import * as _16 from "./base/node/v1beta1/query";
import * as _17 from "./base/query/v1beta1/pagination";
import * as _18 from "./base/reflection/v1beta1/reflection";
import * as _19 from "./base/reflection/v2alpha1/reflection";
import * as _20 from "./base/snapshots/v1beta1/snapshot";
import * as _21 from "./base/store/v1beta1/commit_info";
import * as _22 from "./base/store/v1beta1/listening";
import * as _23 from "./base/tendermint/v1beta1/query";
import * as _24 from "./base/v1beta1/coin";
import * as _25 from "./capability/v1beta1/capability";
import * as _26 from "./capability/v1beta1/genesis";
import * as _27 from "./crisis/v1beta1/genesis";
import * as _28 from "./crisis/v1beta1/tx";
import * as _29 from "./crypto/ed25519/keys";
import * as _30 from "./crypto/multisig/keys";
import * as _31 from "./crypto/secp256k1/keys";
import * as _32 from "./crypto/secp256r1/keys";
import * as _33 from "./crypto/hd/v1/hd";
import * as _34 from "./crypto/keyring/v1/record";
import * as _35 from "./distribution/v1beta1/distribution";
import * as _36 from "./distribution/v1beta1/genesis";
import * as _37 from "./distribution/v1beta1/query";
import * as _38 from "./distribution/v1beta1/tx";
import * as _39 from "./evidence/v1beta1/evidence";
import * as _40 from "./evidence/v1beta1/genesis";
import * as _41 from "./evidence/v1beta1/query";
import * as _42 from "./evidence/v1beta1/tx";
import * as _43 from "./feegrant/v1beta1/feegrant";
import * as _44 from "./feegrant/v1beta1/genesis";
import * as _45 from "./feegrant/v1beta1/query";
import * as _46 from "./feegrant/v1beta1/tx";
import * as _47 from "./genutil/v1beta1/genesis";
import * as _48 from "./gov/v1beta1/genesis";
import * as _49 from "./gov/v1beta1/gov";
import * as _50 from "./gov/v1beta1/query";
import * as _51 from "./gov/v1beta1/tx";
import * as _52 from "./gov/v1/genesis";
import * as _53 from "./gov/v1/gov";
import * as _54 from "./gov/v1/query";
import * as _55 from "./gov/v1/tx";
import * as _56 from "./mint/v1beta1/genesis";
import * as _57 from "./mint/v1beta1/mint";
import * as _58 from "./mint/v1beta1/query";
import * as _59 from "./params/v1beta1/params";
import * as _60 from "./params/v1beta1/query";
import * as _61 from "./slashing/v1beta1/genesis";
import * as _62 from "./slashing/v1beta1/query";
import * as _63 from "./slashing/v1beta1/slashing";
import * as _64 from "./slashing/v1beta1/tx";
import * as _65 from "./staking/v1beta1/authz";
import * as _66 from "./staking/v1beta1/genesis";
import * as _67 from "./staking/v1beta1/query";
import * as _68 from "./staking/v1beta1/staking";
import * as _69 from "./staking/v1beta1/tx";
import * as _70 from "./tx/signing/v1beta1/signing";
import * as _71 from "./tx/v1beta1/service";
import * as _72 from "./tx/v1beta1/tx";
import * as _73 from "./upgrade/v1beta1/query";
import * as _74 from "./upgrade/v1beta1/upgrade";
import * as _75 from "./upgrade/v1beta1/tx";
import * as _76 from "./vesting/v1beta1/tx";
import * as _77 from "./vesting/v1beta1/vesting";
import * as _78 from "./app/v1alpha1/config";
import * as _79 from "./app/v1alpha1/module";
import * as _80 from "./app/v1alpha1/query";
import * as _81 from "./group/v1/events";
import * as _82 from "./group/v1/genesis";
import * as _83 from "./group/v1/query";
import * as _84 from "./group/v1/tx";
import * as _85 from "./group/v1/types";
import * as _86 from "./msg/v1/msg";
import * as _87 from "./nft/v1beta1/event";
import * as _88 from "./nft/v1beta1/genesis";
import * as _89 from "./nft/v1beta1/nft";
import * as _90 from "./nft/v1beta1/query";
import * as _91 from "./nft/v1beta1/tx";
import * as _92 from "./orm/v1/orm";
import * as _93 from "./orm/v1alpha1/schema";
import * as _165 from "./authz/v1beta1/tx.amino";
import * as _166 from "./bank/v1beta1/tx.amino";
import * as _167 from "./crisis/v1beta1/tx.amino";
import * as _168 from "./distribution/v1beta1/tx.amino";
import * as _169 from "./evidence/v1beta1/tx.amino";
import * as _170 from "./feegrant/v1beta1/tx.amino";
import * as _171 from "./gov/v1beta1/tx.amino";
import * as _172 from "./slashing/v1beta1/tx.amino";
import * as _173 from "./staking/v1beta1/tx.amino";
import * as _174 from "./vesting/v1beta1/tx.amino";
import * as _175 from "./gov/v1/tx.amino";
import * as _176 from "./group/v1/tx.amino";
import * as _177 from "./nft/v1beta1/tx.amino";
import * as _178 from "./upgrade/v1beta1/tx.amino";
import * as _179 from "./authz/v1beta1/tx.registry";
import * as _180 from "./bank/v1beta1/tx.registry";
import * as _181 from "./crisis/v1beta1/tx.registry";
import * as _182 from "./distribution/v1beta1/tx.registry";
import * as _183 from "./evidence/v1beta1/tx.registry";
import * as _184 from "./feegrant/v1beta1/tx.registry";
import * as _185 from "./gov/v1beta1/tx.registry";
import * as _186 from "./slashing/v1beta1/tx.registry";
import * as _187 from "./staking/v1beta1/tx.registry";
import * as _188 from "./vesting/v1beta1/tx.registry";
import * as _189 from "./gov/v1/tx.registry";
import * as _190 from "./group/v1/tx.registry";
import * as _191 from "./nft/v1beta1/tx.registry";
import * as _192 from "./upgrade/v1beta1/tx.registry";
import * as _193 from "./auth/v1beta1/query.rpc.Query";
import * as _194 from "./authz/v1beta1/query.rpc.Query";
import * as _195 from "./bank/v1beta1/query.rpc.Query";
import * as _196 from "./base/node/v1beta1/query.rpc.Service";
import * as _197 from "./base/tendermint/v1beta1/query.rpc.Service";
import * as _198 from "./distribution/v1beta1/query.rpc.Query";
import * as _199 from "./evidence/v1beta1/query.rpc.Query";
import * as _200 from "./feegrant/v1beta1/query.rpc.Query";
import * as _201 from "./gov/v1beta1/query.rpc.Query";
import * as _202 from "./mint/v1beta1/query.rpc.Query";
import * as _203 from "./params/v1beta1/query.rpc.Query";
import * as _204 from "./slashing/v1beta1/query.rpc.Query";
import * as _205 from "./staking/v1beta1/query.rpc.Query";
import * as _206 from "./tx/v1beta1/service.rpc.Service";
import * as _207 from "./upgrade/v1beta1/query.rpc.Query";
import * as _208 from "./app/v1alpha1/query.rpc.Query";
import * as _209 from "./gov/v1/query.rpc.Query";
import * as _210 from "./group/v1/query.rpc.Query";
import * as _211 from "./nft/v1beta1/query.rpc.Query";
import * as _212 from "./authz/v1beta1/tx.rpc.msg";
import * as _213 from "./bank/v1beta1/tx.rpc.msg";
import * as _214 from "./crisis/v1beta1/tx.rpc.msg";
import * as _215 from "./distribution/v1beta1/tx.rpc.msg";
import * as _216 from "./evidence/v1beta1/tx.rpc.msg";
import * as _217 from "./feegrant/v1beta1/tx.rpc.msg";
import * as _218 from "./gov/v1beta1/tx.rpc.msg";
import * as _219 from "./slashing/v1beta1/tx.rpc.msg";
import * as _220 from "./staking/v1beta1/tx.rpc.msg";
import * as _221 from "./vesting/v1beta1/tx.rpc.msg";
import * as _222 from "./gov/v1/tx.rpc.msg";
import * as _223 from "./group/v1/tx.rpc.msg";
import * as _224 from "./nft/v1beta1/tx.rpc.msg";
import * as _225 from "./upgrade/v1beta1/tx.rpc.msg";
import * as _258 from "./rpc.query";
import * as _259 from "./rpc.tx";
export namespace cosmos {
  export namespace ics23 {
    export const v1 = {
      ..._0
    };
  }
  export namespace auth {
    export const v1beta1 = {
      ..._1,
      ..._2,
      ..._3,
      ..._193
    };
  }
  export namespace authz {
    export const v1beta1 = {
      ..._4,
      ..._5,
      ..._6,
      ..._7,
      ..._8,
      ..._165,
      ..._179,
      ..._194,
      ..._212
    };
  }
  export namespace bank {
    export const v1beta1 = {
      ..._9,
      ..._10,
      ..._11,
      ..._12,
      ..._13,
      ..._166,
      ..._180,
      ..._195,
      ..._213
    };
  }
  export namespace base {
    export namespace abci {
      export const v1beta1 = {
        ..._14
      };
    }
    export namespace kv {
      export const v1beta1 = {
        ..._15
      };
    }
    export namespace node {
      export const v1beta1 = {
        ..._16,
        ..._196
      };
    }
    export namespace query {
      export const v1beta1 = {
        ..._17
      };
    }
    export namespace reflection {
      export const v1beta1 = {
        ..._18
      };
      export const v2alpha1 = {
        ..._19
      };
    }
    export namespace snapshots {
      export const v1beta1 = {
        ..._20
      };
    }
    export namespace store {
      export const v1beta1 = {
        ..._21,
        ..._22
      };
    }
    export namespace tendermint {
      export const v1beta1 = {
        ..._23,
        ..._197
      };
    }
    export const v1beta1 = {
      ..._24
    };
  }
  export namespace capability {
    export const v1beta1 = {
      ..._25,
      ..._26
    };
  }
  export namespace crisis {
    export const v1beta1 = {
      ..._27,
      ..._28,
      ..._167,
      ..._181,
      ..._214
    };
  }
  export namespace crypto {
    export const ed25519 = {
      ..._29
    };
    export const multisig = {
      ..._30
    };
    export const secp256k1 = {
      ..._31
    };
    export const secp256r1 = {
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
  }
  export namespace distribution {
    export const v1beta1 = {
      ..._35,
      ..._36,
      ..._37,
      ..._38,
      ..._168,
      ..._182,
      ..._198,
      ..._215
    };
  }
  export namespace evidence {
    export const v1beta1 = {
      ..._39,
      ..._40,
      ..._41,
      ..._42,
      ..._169,
      ..._183,
      ..._199,
      ..._216
    };
  }
  export namespace feegrant {
    export const v1beta1 = {
      ..._43,
      ..._44,
      ..._45,
      ..._46,
      ..._170,
      ..._184,
      ..._200,
      ..._217
    };
  }
  export namespace genutil {
    export const v1beta1 = {
      ..._47
    };
  }
  export namespace gov {
    export const v1beta1 = {
      ..._48,
      ..._49,
      ..._50,
      ..._51,
      ..._171,
      ..._185,
      ..._201,
      ..._218
    };
    export const v1 = {
      ..._52,
      ..._53,
      ..._54,
      ..._55,
      ..._175,
      ..._189,
      ..._209,
      ..._222
    };
  }
  export namespace mint {
    export const v1beta1 = {
      ..._56,
      ..._57,
      ..._58,
      ..._202
    };
  }
  export namespace params {
    export const v1beta1 = {
      ..._59,
      ..._60,
      ..._203
    };
  }
  export namespace slashing {
    export const v1beta1 = {
      ..._61,
      ..._62,
      ..._63,
      ..._64,
      ..._172,
      ..._186,
      ..._204,
      ..._219
    };
  }
  export namespace staking {
    export const v1beta1 = {
      ..._65,
      ..._66,
      ..._67,
      ..._68,
      ..._69,
      ..._173,
      ..._187,
      ..._205,
      ..._220
    };
  }
  export namespace tx {
    export namespace signing {
      export const v1beta1 = {
        ..._70
      };
    }
    export const v1beta1 = {
      ..._71,
      ..._72,
      ..._206
    };
  }
  export namespace upgrade {
    export const v1beta1 = {
      ..._73,
      ..._74,
      ..._75,
      ..._178,
      ..._192,
      ..._207,
      ..._225
    };
  }
  export namespace vesting {
    export const v1beta1 = {
      ..._76,
      ..._77,
      ..._174,
      ..._188,
      ..._221
    };
  }
  export namespace app {
    export const v1alpha1 = {
      ..._78,
      ..._79,
      ..._80,
      ..._208
    };
  }
  export namespace group {
    export const v1 = {
      ..._81,
      ..._82,
      ..._83,
      ..._84,
      ..._85,
      ..._176,
      ..._190,
      ..._210,
      ..._223
    };
  }
  export namespace msg {
    export const v1 = {
      ..._86
    };
  }
  export namespace nft {
    export const v1beta1 = {
      ..._87,
      ..._88,
      ..._89,
      ..._90,
      ..._91,
      ..._177,
      ..._191,
      ..._211,
      ..._224
    };
  }
  export namespace orm {
    export const v1 = {
      ..._92
    };
    export const v1alpha1 = {
      ..._93
    };
  }
  export const ClientFactory = {
    ..._258,
    ..._259
  };
}