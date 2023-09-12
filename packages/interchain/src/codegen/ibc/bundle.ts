import * as _116 from "./applications/interchain_accounts/controller/v1/controller";
import * as _117 from "./applications/interchain_accounts/controller/v1/query";
import * as _118 from "./applications/interchain_accounts/controller/v1/tx";
import * as _119 from "./applications/interchain_accounts/genesis/v1/genesis";
import * as _120 from "./applications/interchain_accounts/host/v1/host";
import * as _121 from "./applications/interchain_accounts/host/v1/query";
import * as _122 from "./applications/interchain_accounts/host/v1/tx";
import * as _123 from "./applications/interchain_accounts/v1/account";
import * as _124 from "./applications/interchain_accounts/v1/metadata";
import * as _125 from "./applications/interchain_accounts/v1/packet";
import * as _126 from "./applications/transfer/v1/authz";
import * as _127 from "./applications/transfer/v1/genesis";
import * as _128 from "./applications/transfer/v1/query";
import * as _129 from "./applications/transfer/v1/transfer";
import * as _130 from "./applications/transfer/v1/tx";
import * as _131 from "./applications/transfer/v2/packet";
import * as _132 from "./core/channel/v1/channel";
import * as _133 from "./core/channel/v1/genesis";
import * as _134 from "./core/channel/v1/query";
import * as _135 from "./core/channel/v1/tx";
import * as _136 from "./core/client/v1/client";
import * as _137 from "./core/client/v1/genesis";
import * as _138 from "./core/client/v1/query";
import * as _139 from "./core/client/v1/tx";
import * as _140 from "./core/commitment/v1/commitment";
import * as _141 from "./core/connection/v1/connection";
import * as _142 from "./core/connection/v1/genesis";
import * as _143 from "./core/connection/v1/query";
import * as _144 from "./core/connection/v1/tx";
import * as _145 from "./lightclients/localhost/v2/localhost";
import * as _146 from "./lightclients/solomachine/v2/solomachine";
import * as _147 from "./lightclients/solomachine/v3/solomachine";
import * as _148 from "./lightclients/tendermint/v1/tendermint";
import * as _236 from "./applications/interchain_accounts/controller/v1/tx.amino";
import * as _237 from "./applications/interchain_accounts/host/v1/tx.amino";
import * as _238 from "./applications/transfer/v1/tx.amino";
import * as _239 from "./core/channel/v1/tx.amino";
import * as _240 from "./core/client/v1/tx.amino";
import * as _241 from "./core/connection/v1/tx.amino";
import * as _242 from "./applications/interchain_accounts/controller/v1/tx.registry";
import * as _243 from "./applications/interchain_accounts/host/v1/tx.registry";
import * as _244 from "./applications/transfer/v1/tx.registry";
import * as _245 from "./core/channel/v1/tx.registry";
import * as _246 from "./core/client/v1/tx.registry";
import * as _247 from "./core/connection/v1/tx.registry";
import * as _248 from "./applications/interchain_accounts/controller/v1/query.lcd";
import * as _249 from "./applications/interchain_accounts/host/v1/query.lcd";
import * as _250 from "./applications/transfer/v1/query.lcd";
import * as _251 from "./core/channel/v1/query.lcd";
import * as _252 from "./core/client/v1/query.lcd";
import * as _253 from "./core/connection/v1/query.lcd";
import * as _254 from "./applications/interchain_accounts/controller/v1/query.rpc.Query";
import * as _255 from "./applications/interchain_accounts/host/v1/query.rpc.Query";
import * as _256 from "./applications/transfer/v1/query.rpc.Query";
import * as _257 from "./core/channel/v1/query.rpc.Query";
import * as _258 from "./core/client/v1/query.rpc.Query";
import * as _259 from "./core/connection/v1/query.rpc.Query";
import * as _260 from "./applications/interchain_accounts/controller/v1/tx.rpc.msg";
import * as _261 from "./applications/interchain_accounts/host/v1/tx.rpc.msg";
import * as _262 from "./applications/transfer/v1/tx.rpc.msg";
import * as _263 from "./core/channel/v1/tx.rpc.msg";
import * as _264 from "./core/client/v1/tx.rpc.msg";
import * as _265 from "./core/connection/v1/tx.rpc.msg";
import * as _274 from "./lcd";
import * as _275 from "./rpc.query";
import * as _276 from "./rpc.tx";
export namespace ibc {
  export namespace applications {
    export namespace interchain_accounts {
      export namespace controller {
        export const v1 = {
          ..._116,
          ..._117,
          ..._118,
          ..._236,
          ..._242,
          ..._248,
          ..._254,
          ..._260
        };
      }
      export namespace genesis {
        export const v1 = {
          ..._119
        };
      }
      export namespace host {
        export const v1 = {
          ..._120,
          ..._121,
          ..._122,
          ..._237,
          ..._243,
          ..._249,
          ..._255,
          ..._261
        };
      }
      export const v1 = {
        ..._123,
        ..._124,
        ..._125
      };
    }
    export namespace transfer {
      export const v1 = {
        ..._126,
        ..._127,
        ..._128,
        ..._129,
        ..._130,
        ..._238,
        ..._244,
        ..._250,
        ..._256,
        ..._262
      };
      export const v2 = {
        ..._131
      };
    }
  }
  export namespace core {
    export namespace channel {
      export const v1 = {
        ..._132,
        ..._133,
        ..._134,
        ..._135,
        ..._239,
        ..._245,
        ..._251,
        ..._257,
        ..._263
      };
    }
    export namespace client {
      export const v1 = {
        ..._136,
        ..._137,
        ..._138,
        ..._139,
        ..._240,
        ..._246,
        ..._252,
        ..._258,
        ..._264
      };
    }
    export namespace commitment {
      export const v1 = {
        ..._140
      };
    }
    export namespace connection {
      export const v1 = {
        ..._141,
        ..._142,
        ..._143,
        ..._144,
        ..._241,
        ..._247,
        ..._253,
        ..._259,
        ..._265
      };
    }
  }
  export namespace lightclients {
    export namespace localhost {
      export const v2 = {
        ..._145
      };
    }
    export namespace solomachine {
      export const v2 = {
        ..._146
      };
      export const v3 = {
        ..._147
      };
    }
    export namespace tendermint {
      export const v1 = {
        ..._148
      };
    }
  }
  export const ClientFactory = {
    ..._274,
    ..._275,
    ..._276
  };
}