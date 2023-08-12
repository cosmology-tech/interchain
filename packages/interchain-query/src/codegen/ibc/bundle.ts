import * as _108 from "./applications/fee/v1/ack";
import * as _109 from "./applications/fee/v1/fee";
import * as _110 from "./applications/fee/v1/genesis";
import * as _111 from "./applications/fee/v1/metadata";
import * as _112 from "./applications/fee/v1/query";
import * as _113 from "./applications/fee/v1/tx";
import * as _114 from "./applications/interchain_accounts/controller/v1/controller";
import * as _115 from "./applications/interchain_accounts/controller/v1/query";
import * as _116 from "./applications/interchain_accounts/controller/v1/tx";
import * as _117 from "./applications/interchain_accounts/genesis/v1/genesis";
import * as _118 from "./applications/interchain_accounts/host/v1/host";
import * as _119 from "./applications/interchain_accounts/host/v1/query";
import * as _120 from "./applications/interchain_accounts/host/v1/tx";
import * as _121 from "./applications/interchain_accounts/v1/account";
import * as _122 from "./applications/interchain_accounts/v1/metadata";
import * as _123 from "./applications/interchain_accounts/v1/packet";
import * as _124 from "./applications/transfer/v1/authz";
import * as _125 from "./applications/transfer/v1/genesis";
import * as _126 from "./applications/transfer/v1/query";
import * as _127 from "./applications/transfer/v1/transfer";
import * as _128 from "./applications/transfer/v1/tx";
import * as _129 from "./applications/transfer/v2/packet";
import * as _130 from "./core/channel/v1/channel";
import * as _131 from "./core/channel/v1/genesis";
import * as _132 from "./core/channel/v1/query";
import * as _133 from "./core/channel/v1/tx";
import * as _134 from "./core/client/v1/client";
import * as _135 from "./core/client/v1/genesis";
import * as _136 from "./core/client/v1/query";
import * as _137 from "./core/client/v1/tx";
import * as _138 from "./core/commitment/v1/commitment";
import * as _139 from "./core/connection/v1/connection";
import * as _140 from "./core/connection/v1/genesis";
import * as _141 from "./core/connection/v1/query";
import * as _142 from "./core/connection/v1/tx";
import * as _143 from "./core/types/v1/genesis";
import * as _144 from "./lightclients/localhost/v2/localhost";
import * as _145 from "./lightclients/solomachine/v2/solomachine";
import * as _146 from "./lightclients/solomachine/v3/solomachine";
import * as _147 from "./lightclients/tendermint/v1/tendermint";
import * as _226 from "./applications/fee/v1/tx.amino";
import * as _227 from "./applications/interchain_accounts/controller/v1/tx.amino";
import * as _228 from "./applications/interchain_accounts/host/v1/tx.amino";
import * as _229 from "./applications/transfer/v1/tx.amino";
import * as _230 from "./core/channel/v1/tx.amino";
import * as _231 from "./core/client/v1/tx.amino";
import * as _232 from "./core/connection/v1/tx.amino";
import * as _233 from "./applications/fee/v1/tx.registry";
import * as _234 from "./applications/interchain_accounts/controller/v1/tx.registry";
import * as _235 from "./applications/interchain_accounts/host/v1/tx.registry";
import * as _236 from "./applications/transfer/v1/tx.registry";
import * as _237 from "./core/channel/v1/tx.registry";
import * as _238 from "./core/client/v1/tx.registry";
import * as _239 from "./core/connection/v1/tx.registry";
import * as _240 from "./applications/fee/v1/query.rpc.Query";
import * as _241 from "./applications/interchain_accounts/controller/v1/query.rpc.Query";
import * as _242 from "./applications/interchain_accounts/host/v1/query.rpc.Query";
import * as _243 from "./applications/transfer/v1/query.rpc.Query";
import * as _244 from "./core/channel/v1/query.rpc.Query";
import * as _245 from "./core/client/v1/query.rpc.Query";
import * as _246 from "./core/connection/v1/query.rpc.Query";
import * as _247 from "./applications/fee/v1/tx.rpc.msg";
import * as _248 from "./applications/interchain_accounts/controller/v1/tx.rpc.msg";
import * as _249 from "./applications/interchain_accounts/host/v1/tx.rpc.msg";
import * as _250 from "./applications/transfer/v1/tx.rpc.msg";
import * as _251 from "./core/channel/v1/tx.rpc.msg";
import * as _252 from "./core/client/v1/tx.rpc.msg";
import * as _253 from "./core/connection/v1/tx.rpc.msg";
import * as _260 from "./rpc.query";
import * as _261 from "./rpc.tx";
export namespace ibc {
  export namespace applications {
    export namespace fee {
      export const v1 = {
        ..._108,
        ..._109,
        ..._110,
        ..._111,
        ..._112,
        ..._113,
        ..._226,
        ..._233,
        ..._240,
        ..._247
      };
    }
    export namespace interchain_accounts {
      export namespace controller {
        export const v1 = {
          ..._114,
          ..._115,
          ..._116,
          ..._227,
          ..._234,
          ..._241,
          ..._248
        };
      }
      export namespace genesis {
        export const v1 = {
          ..._117
        };
      }
      export namespace host {
        export const v1 = {
          ..._118,
          ..._119,
          ..._120,
          ..._228,
          ..._235,
          ..._242,
          ..._249
        };
      }
      export const v1 = {
        ..._121,
        ..._122,
        ..._123
      };
    }
    export namespace transfer {
      export const v1 = {
        ..._124,
        ..._125,
        ..._126,
        ..._127,
        ..._128,
        ..._229,
        ..._236,
        ..._243,
        ..._250
      };
      export const v2 = {
        ..._129
      };
    }
  }
  export namespace core {
    export namespace channel {
      export const v1 = {
        ..._130,
        ..._131,
        ..._132,
        ..._133,
        ..._230,
        ..._237,
        ..._244,
        ..._251
      };
    }
    export namespace client {
      export const v1 = {
        ..._134,
        ..._135,
        ..._136,
        ..._137,
        ..._231,
        ..._238,
        ..._245,
        ..._252
      };
    }
    export namespace commitment {
      export const v1 = {
        ..._138
      };
    }
    export namespace connection {
      export const v1 = {
        ..._139,
        ..._140,
        ..._141,
        ..._142,
        ..._232,
        ..._239,
        ..._246,
        ..._253
      };
    }
    export namespace types {
      export const v1 = {
        ..._143
      };
    }
  }
  export namespace lightclients {
    export namespace localhost {
      export const v2 = {
        ..._144
      };
    }
    export namespace solomachine {
      export const v2 = {
        ..._145
      };
      export const v3 = {
        ..._146
      };
    }
    export namespace tendermint {
      export const v1 = {
        ..._147
      };
    }
  }
  export const ClientFactory = {
    ..._260,
    ..._261
  };
}