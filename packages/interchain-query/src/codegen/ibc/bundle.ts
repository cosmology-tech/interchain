import * as _144 from "./applications/fee/v1/ack";
import * as _145 from "./applications/fee/v1/fee";
import * as _146 from "./applications/fee/v1/genesis";
import * as _147 from "./applications/fee/v1/metadata";
import * as _148 from "./applications/fee/v1/query";
import * as _149 from "./applications/fee/v1/tx";
import * as _150 from "./applications/interchain_accounts/controller/v1/controller";
import * as _151 from "./applications/interchain_accounts/controller/v1/query";
import * as _152 from "./applications/interchain_accounts/controller/v1/tx";
import * as _153 from "./applications/interchain_accounts/genesis/v1/genesis";
import * as _154 from "./applications/interchain_accounts/host/v1/host";
import * as _155 from "./applications/interchain_accounts/host/v1/query";
import * as _156 from "./applications/interchain_accounts/host/v1/tx";
import * as _157 from "./applications/interchain_accounts/v1/account";
import * as _158 from "./applications/interchain_accounts/v1/metadata";
import * as _159 from "./applications/interchain_accounts/v1/packet";
import * as _160 from "./applications/transfer/v1/authz";
import * as _161 from "./applications/transfer/v1/genesis";
import * as _162 from "./applications/transfer/v1/query";
import * as _163 from "./applications/transfer/v1/transfer";
import * as _164 from "./applications/transfer/v1/tx";
import * as _165 from "./applications/transfer/v2/packet";
import * as _166 from "./core/channel/v1/channel";
import * as _167 from "./core/channel/v1/genesis";
import * as _168 from "./core/channel/v1/query";
import * as _169 from "./core/channel/v1/tx";
import * as _170 from "./core/client/v1/client";
import * as _171 from "./core/client/v1/genesis";
import * as _172 from "./core/client/v1/query";
import * as _173 from "./core/client/v1/tx";
import * as _174 from "./core/commitment/v1/commitment";
import * as _175 from "./core/connection/v1/connection";
import * as _176 from "./core/connection/v1/genesis";
import * as _177 from "./core/connection/v1/query";
import * as _178 from "./core/connection/v1/tx";
import * as _179 from "./core/types/v1/genesis";
import * as _180 from "./lightclients/localhost/v2/localhost";
import * as _181 from "./lightclients/solomachine/v2/solomachine";
import * as _182 from "./lightclients/solomachine/v3/solomachine";
import * as _183 from "./lightclients/tendermint/v1/tendermint";
import * as _280 from "./applications/fee/v1/tx.amino";
import * as _281 from "./applications/interchain_accounts/controller/v1/tx.amino";
import * as _282 from "./applications/interchain_accounts/host/v1/tx.amino";
import * as _283 from "./applications/transfer/v1/tx.amino";
import * as _284 from "./core/channel/v1/tx.amino";
import * as _285 from "./core/client/v1/tx.amino";
import * as _286 from "./core/connection/v1/tx.amino";
import * as _287 from "./applications/fee/v1/tx.registry";
import * as _288 from "./applications/interchain_accounts/controller/v1/tx.registry";
import * as _289 from "./applications/interchain_accounts/host/v1/tx.registry";
import * as _290 from "./applications/transfer/v1/tx.registry";
import * as _291 from "./core/channel/v1/tx.registry";
import * as _292 from "./core/client/v1/tx.registry";
import * as _293 from "./core/connection/v1/tx.registry";
import * as _294 from "./applications/fee/v1/query.rpc.Query";
import * as _295 from "./applications/interchain_accounts/controller/v1/query.rpc.Query";
import * as _296 from "./applications/interchain_accounts/host/v1/query.rpc.Query";
import * as _297 from "./applications/transfer/v1/query.rpc.Query";
import * as _298 from "./core/channel/v1/query.rpc.Query";
import * as _299 from "./core/client/v1/query.rpc.Query";
import * as _300 from "./core/connection/v1/query.rpc.Query";
import * as _301 from "./applications/fee/v1/tx.rpc.msg";
import * as _302 from "./applications/interchain_accounts/controller/v1/tx.rpc.msg";
import * as _303 from "./applications/interchain_accounts/host/v1/tx.rpc.msg";
import * as _304 from "./applications/transfer/v1/tx.rpc.msg";
import * as _305 from "./core/channel/v1/tx.rpc.msg";
import * as _306 from "./core/client/v1/tx.rpc.msg";
import * as _307 from "./core/connection/v1/tx.rpc.msg";
import * as _314 from "./rpc.query";
import * as _315 from "./rpc.tx";
export namespace ibc {
  export namespace applications {
    export namespace fee {
      export const v1 = {
        ..._144,
        ..._145,
        ..._146,
        ..._147,
        ..._148,
        ..._149,
        ..._280,
        ..._287,
        ..._294,
        ..._301
      };
    }
    export namespace interchain_accounts {
      export namespace controller {
        export const v1 = {
          ..._150,
          ..._151,
          ..._152,
          ..._281,
          ..._288,
          ..._295,
          ..._302
        };
      }
      export namespace genesis {
        export const v1 = {
          ..._153
        };
      }
      export namespace host {
        export const v1 = {
          ..._154,
          ..._155,
          ..._156,
          ..._282,
          ..._289,
          ..._296,
          ..._303
        };
      }
      export const v1 = {
        ..._157,
        ..._158,
        ..._159
      };
    }
    export namespace transfer {
      export const v1 = {
        ..._160,
        ..._161,
        ..._162,
        ..._163,
        ..._164,
        ..._283,
        ..._290,
        ..._297,
        ..._304
      };
      export const v2 = {
        ..._165
      };
    }
  }
  export namespace core {
    export namespace channel {
      export const v1 = {
        ..._166,
        ..._167,
        ..._168,
        ..._169,
        ..._284,
        ..._291,
        ..._298,
        ..._305
      };
    }
    export namespace client {
      export const v1 = {
        ..._170,
        ..._171,
        ..._172,
        ..._173,
        ..._285,
        ..._292,
        ..._299,
        ..._306
      };
    }
    export namespace commitment {
      export const v1 = {
        ..._174
      };
    }
    export namespace connection {
      export const v1 = {
        ..._175,
        ..._176,
        ..._177,
        ..._178,
        ..._286,
        ..._293,
        ..._300,
        ..._307
      };
    }
    export namespace types {
      export const v1 = {
        ..._179
      };
    }
  }
  export namespace lightclients {
    export namespace localhost {
      export const v2 = {
        ..._180
      };
    }
    export namespace solomachine {
      export const v2 = {
        ..._181
      };
      export const v3 = {
        ..._182
      };
    }
    export namespace tendermint {
      export const v1 = {
        ..._183
      };
    }
  }
  export const ClientFactory = {
    ..._314,
    ..._315
  };
}