import * as _111 from "./applications/interchain_accounts/controller/v1/controller";
import * as _112 from "./applications/interchain_accounts/controller/v1/query";
import * as _113 from "./applications/interchain_accounts/controller/v1/tx";
import * as _114 from "./applications/interchain_accounts/genesis/v1/genesis";
import * as _115 from "./applications/interchain_accounts/host/v1/host";
import * as _116 from "./applications/interchain_accounts/host/v1/query";
import * as _117 from "./applications/interchain_accounts/host/v1/tx";
import * as _118 from "./applications/interchain_accounts/v1/account";
import * as _119 from "./applications/interchain_accounts/v1/metadata";
import * as _120 from "./applications/interchain_accounts/v1/packet";
import * as _121 from "./applications/transfer/v1/authz";
import * as _122 from "./applications/transfer/v1/genesis";
import * as _123 from "./applications/transfer/v1/query";
import * as _124 from "./applications/transfer/v1/transfer";
import * as _125 from "./applications/transfer/v1/tx";
import * as _126 from "./applications/transfer/v2/packet";
import * as _127 from "./core/channel/v1/channel";
import * as _128 from "./core/channel/v1/genesis";
import * as _129 from "./core/channel/v1/query";
import * as _130 from "./core/channel/v1/tx";
import * as _131 from "./core/client/v1/client";
import * as _132 from "./core/client/v1/genesis";
import * as _133 from "./core/client/v1/query";
import * as _134 from "./core/client/v1/tx";
import * as _135 from "./core/commitment/v1/commitment";
import * as _136 from "./core/connection/v1/connection";
import * as _137 from "./core/connection/v1/genesis";
import * as _138 from "./core/connection/v1/query";
import * as _139 from "./core/connection/v1/tx";
import * as _140 from "./lightclients/localhost/v2/localhost";
import * as _141 from "./lightclients/solomachine/v2/solomachine";
import * as _142 from "./lightclients/solomachine/v3/solomachine";
import * as _143 from "./lightclients/tendermint/v1/tendermint";
import * as _226 from "./applications/interchain_accounts/controller/v1/tx.amino";
import * as _227 from "./applications/interchain_accounts/host/v1/tx.amino";
import * as _228 from "./applications/transfer/v1/tx.amino";
import * as _229 from "./core/channel/v1/tx.amino";
import * as _230 from "./core/client/v1/tx.amino";
import * as _231 from "./core/connection/v1/tx.amino";
import * as _232 from "./applications/interchain_accounts/controller/v1/tx.registry";
import * as _233 from "./applications/interchain_accounts/host/v1/tx.registry";
import * as _234 from "./applications/transfer/v1/tx.registry";
import * as _235 from "./core/channel/v1/tx.registry";
import * as _236 from "./core/client/v1/tx.registry";
import * as _237 from "./core/connection/v1/tx.registry";
import * as _238 from "./applications/interchain_accounts/controller/v1/query.lcd";
import * as _239 from "./applications/interchain_accounts/host/v1/query.lcd";
import * as _240 from "./applications/transfer/v1/query.lcd";
import * as _241 from "./core/channel/v1/query.lcd";
import * as _242 from "./core/client/v1/query.lcd";
import * as _243 from "./core/connection/v1/query.lcd";
import * as _244 from "./applications/interchain_accounts/controller/v1/query.rpc.Query";
import * as _245 from "./applications/interchain_accounts/host/v1/query.rpc.Query";
import * as _246 from "./applications/transfer/v1/query.rpc.Query";
import * as _247 from "./core/channel/v1/query.rpc.Query";
import * as _248 from "./core/client/v1/query.rpc.Query";
import * as _249 from "./core/connection/v1/query.rpc.Query";
import * as _250 from "./applications/interchain_accounts/controller/v1/tx.rpc.msg";
import * as _251 from "./applications/interchain_accounts/host/v1/tx.rpc.msg";
import * as _252 from "./applications/transfer/v1/tx.rpc.msg";
import * as _253 from "./core/channel/v1/tx.rpc.msg";
import * as _254 from "./core/client/v1/tx.rpc.msg";
import * as _255 from "./core/connection/v1/tx.rpc.msg";
import * as _264 from "./lcd";
import * as _265 from "./rpc.query";
import * as _266 from "./rpc.tx";
export namespace ibc {
  export namespace applications {
    export namespace interchain_accounts {
      export namespace controller {
        export const v1 = {
          ..._111,
          ..._112,
          ..._113,
          ..._226,
          ..._232,
          ..._238,
          ..._244,
          ..._250
        };
      }
      export namespace genesis {
        export const v1 = {
          ..._114
        };
      }
      export namespace host {
        export const v1 = {
          ..._115,
          ..._116,
          ..._117,
          ..._227,
          ..._233,
          ..._239,
          ..._245,
          ..._251
        };
      }
      export const v1 = {
        ..._118,
        ..._119,
        ..._120
      };
    }
    export namespace transfer {
      export const v1 = {
        ..._121,
        ..._122,
        ..._123,
        ..._124,
        ..._125,
        ..._228,
        ..._234,
        ..._240,
        ..._246,
        ..._252
      };
      export const v2 = {
        ..._126
      };
    }
  }
  export namespace core {
    export namespace channel {
      export const v1 = {
        ..._127,
        ..._128,
        ..._129,
        ..._130,
        ..._229,
        ..._235,
        ..._241,
        ..._247,
        ..._253
      };
    }
    export namespace client {
      export const v1 = {
        ..._131,
        ..._132,
        ..._133,
        ..._134,
        ..._230,
        ..._236,
        ..._242,
        ..._248,
        ..._254
      };
    }
    export namespace commitment {
      export const v1 = {
        ..._135
      };
    }
    export namespace connection {
      export const v1 = {
        ..._136,
        ..._137,
        ..._138,
        ..._139,
        ..._231,
        ..._237,
        ..._243,
        ..._249,
        ..._255
      };
    }
  }
  export namespace lightclients {
    export namespace localhost {
      export const v2 = {
        ..._140
      };
    }
    export namespace solomachine {
      export const v2 = {
        ..._141
      };
      export const v3 = {
        ..._142
      };
    }
    export namespace tendermint {
      export const v1 = {
        ..._143
      };
    }
  }
  export const ClientFactory = {
    ..._264,
    ..._265,
    ..._266
  };
}