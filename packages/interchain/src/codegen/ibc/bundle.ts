import * as _105 from "./applications/interchain_accounts/controller/v1/controller";
import * as _106 from "./applications/interchain_accounts/controller/v1/query";
import * as _107 from "./applications/interchain_accounts/controller/v1/tx";
import * as _108 from "./applications/interchain_accounts/genesis/v1/genesis";
import * as _109 from "./applications/interchain_accounts/host/v1/host";
import * as _110 from "./applications/interchain_accounts/host/v1/query";
import * as _111 from "./applications/interchain_accounts/host/v1/tx";
import * as _112 from "./applications/interchain_accounts/v1/account";
import * as _113 from "./applications/interchain_accounts/v1/metadata";
import * as _114 from "./applications/interchain_accounts/v1/packet";
import * as _115 from "./applications/transfer/v1/authz";
import * as _116 from "./applications/transfer/v1/genesis";
import * as _117 from "./applications/transfer/v1/query";
import * as _118 from "./applications/transfer/v1/transfer";
import * as _119 from "./applications/transfer/v1/tx";
import * as _120 from "./applications/transfer/v2/packet";
import * as _121 from "./core/channel/v1/channel";
import * as _122 from "./core/channel/v1/genesis";
import * as _123 from "./core/channel/v1/query";
import * as _124 from "./core/channel/v1/tx";
import * as _125 from "./core/client/v1/client";
import * as _126 from "./core/client/v1/genesis";
import * as _127 from "./core/client/v1/query";
import * as _128 from "./core/client/v1/tx";
import * as _129 from "./core/commitment/v1/commitment";
import * as _130 from "./core/connection/v1/connection";
import * as _131 from "./core/connection/v1/genesis";
import * as _132 from "./core/connection/v1/query";
import * as _133 from "./core/connection/v1/tx";
import * as _134 from "./lightclients/localhost/v2/localhost";
import * as _135 from "./lightclients/solomachine/v2/solomachine";
import * as _136 from "./lightclients/solomachine/v3/solomachine";
import * as _137 from "./lightclients/tendermint/v1/tendermint";
import * as _205 from "./applications/interchain_accounts/controller/v1/tx.amino";
import * as _206 from "./applications/interchain_accounts/host/v1/tx.amino";
import * as _207 from "./applications/transfer/v1/tx.amino";
import * as _208 from "./core/channel/v1/tx.amino";
import * as _209 from "./core/client/v1/tx.amino";
import * as _210 from "./core/connection/v1/tx.amino";
import * as _211 from "./applications/interchain_accounts/controller/v1/tx.registry";
import * as _212 from "./applications/interchain_accounts/host/v1/tx.registry";
import * as _213 from "./applications/transfer/v1/tx.registry";
import * as _214 from "./core/channel/v1/tx.registry";
import * as _215 from "./core/client/v1/tx.registry";
import * as _216 from "./core/connection/v1/tx.registry";
import * as _217 from "./applications/interchain_accounts/controller/v1/query.lcd";
import * as _218 from "./applications/interchain_accounts/host/v1/query.lcd";
import * as _219 from "./applications/transfer/v1/query.lcd";
import * as _220 from "./core/channel/v1/query.lcd";
import * as _221 from "./core/client/v1/query.lcd";
import * as _222 from "./core/connection/v1/query.lcd";
import * as _223 from "./applications/interchain_accounts/controller/v1/query.rpc.Query";
import * as _224 from "./applications/interchain_accounts/host/v1/query.rpc.Query";
import * as _225 from "./applications/transfer/v1/query.rpc.Query";
import * as _226 from "./core/channel/v1/query.rpc.Query";
import * as _227 from "./core/client/v1/query.rpc.Query";
import * as _228 from "./core/connection/v1/query.rpc.Query";
import * as _229 from "./applications/interchain_accounts/controller/v1/tx.rpc.msg";
import * as _230 from "./applications/interchain_accounts/host/v1/tx.rpc.msg";
import * as _231 from "./applications/transfer/v1/tx.rpc.msg";
import * as _232 from "./core/channel/v1/tx.rpc.msg";
import * as _233 from "./core/client/v1/tx.rpc.msg";
import * as _234 from "./core/connection/v1/tx.rpc.msg";
import * as _238 from "./lcd";
import * as _239 from "./rpc.query";
import * as _240 from "./rpc.tx";
export namespace ibc {
  export namespace applications {
    export namespace interchain_accounts {
      export namespace controller {
        export const v1 = {
          ..._105,
          ..._106,
          ..._107,
          ..._205,
          ..._211,
          ..._217,
          ..._223,
          ..._229
        };
      }
      export namespace genesis {
        export const v1 = {
          ..._108
        };
      }
      export namespace host {
        export const v1 = {
          ..._109,
          ..._110,
          ..._111,
          ..._206,
          ..._212,
          ..._218,
          ..._224,
          ..._230
        };
      }
      export const v1 = {
        ..._112,
        ..._113,
        ..._114
      };
    }
    export namespace transfer {
      export const v1 = {
        ..._115,
        ..._116,
        ..._117,
        ..._118,
        ..._119,
        ..._207,
        ..._213,
        ..._219,
        ..._225,
        ..._231
      };
      export const v2 = {
        ..._120
      };
    }
  }
  export namespace core {
    export namespace channel {
      export const v1 = {
        ..._121,
        ..._122,
        ..._123,
        ..._124,
        ..._208,
        ..._214,
        ..._220,
        ..._226,
        ..._232
      };
    }
    export namespace client {
      export const v1 = {
        ..._125,
        ..._126,
        ..._127,
        ..._128,
        ..._209,
        ..._215,
        ..._221,
        ..._227,
        ..._233
      };
    }
    export namespace commitment {
      export const v1 = {
        ..._129
      };
    }
    export namespace connection {
      export const v1 = {
        ..._130,
        ..._131,
        ..._132,
        ..._133,
        ..._210,
        ..._216,
        ..._222,
        ..._228,
        ..._234
      };
    }
  }
  export namespace lightclients {
    export namespace localhost {
      export const v2 = {
        ..._134
      };
    }
    export namespace solomachine {
      export const v2 = {
        ..._135
      };
      export const v3 = {
        ..._136
      };
    }
    export namespace tendermint {
      export const v1 = {
        ..._137
      };
    }
  }
  export const ClientFactory = {
    ..._238,
    ..._239,
    ..._240
  };
}