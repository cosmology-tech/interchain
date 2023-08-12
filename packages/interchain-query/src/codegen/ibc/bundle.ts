import * as _141 from "./applications/fee/v1/ack";
import * as _142 from "./applications/fee/v1/fee";
import * as _143 from "./applications/fee/v1/genesis";
import * as _144 from "./applications/fee/v1/metadata";
import * as _145 from "./applications/fee/v1/query";
import * as _146 from "./applications/fee/v1/tx";
import * as _147 from "./applications/interchain_accounts/controller/v1/controller";
import * as _148 from "./applications/interchain_accounts/controller/v1/query";
import * as _149 from "./applications/interchain_accounts/controller/v1/tx";
import * as _150 from "./applications/interchain_accounts/genesis/v1/genesis";
import * as _151 from "./applications/interchain_accounts/host/v1/host";
import * as _152 from "./applications/interchain_accounts/host/v1/query";
import * as _153 from "./applications/interchain_accounts/host/v1/tx";
import * as _154 from "./applications/interchain_accounts/v1/account";
import * as _155 from "./applications/interchain_accounts/v1/metadata";
import * as _156 from "./applications/interchain_accounts/v1/packet";
import * as _157 from "./applications/transfer/v1/authz";
import * as _158 from "./applications/transfer/v1/genesis";
import * as _159 from "./applications/transfer/v1/query";
import * as _160 from "./applications/transfer/v1/transfer";
import * as _161 from "./applications/transfer/v1/tx";
import * as _162 from "./applications/transfer/v2/packet";
import * as _163 from "./core/channel/v1/channel";
import * as _164 from "./core/channel/v1/genesis";
import * as _165 from "./core/channel/v1/query";
import * as _166 from "./core/channel/v1/tx";
import * as _167 from "./core/client/v1/client";
import * as _168 from "./core/client/v1/genesis";
import * as _169 from "./core/client/v1/query";
import * as _170 from "./core/client/v1/tx";
import * as _171 from "./core/commitment/v1/commitment";
import * as _172 from "./core/connection/v1/connection";
import * as _173 from "./core/connection/v1/genesis";
import * as _174 from "./core/connection/v1/query";
import * as _175 from "./core/connection/v1/tx";
import * as _176 from "./core/types/v1/genesis";
import * as _177 from "./lightclients/localhost/v2/localhost";
import * as _178 from "./lightclients/solomachine/v2/solomachine";
import * as _179 from "./lightclients/solomachine/v3/solomachine";
import * as _180 from "./lightclients/tendermint/v1/tendermint";
import * as _266 from "./applications/fee/v1/tx.amino";
import * as _267 from "./applications/interchain_accounts/controller/v1/tx.amino";
import * as _268 from "./applications/interchain_accounts/host/v1/tx.amino";
import * as _269 from "./applications/transfer/v1/tx.amino";
import * as _270 from "./core/channel/v1/tx.amino";
import * as _271 from "./core/client/v1/tx.amino";
import * as _272 from "./core/connection/v1/tx.amino";
import * as _273 from "./applications/fee/v1/tx.registry";
import * as _274 from "./applications/interchain_accounts/controller/v1/tx.registry";
import * as _275 from "./applications/interchain_accounts/host/v1/tx.registry";
import * as _276 from "./applications/transfer/v1/tx.registry";
import * as _277 from "./core/channel/v1/tx.registry";
import * as _278 from "./core/client/v1/tx.registry";
import * as _279 from "./core/connection/v1/tx.registry";
import * as _280 from "./applications/fee/v1/query.rpc.Query";
import * as _281 from "./applications/interchain_accounts/controller/v1/query.rpc.Query";
import * as _282 from "./applications/interchain_accounts/host/v1/query.rpc.Query";
import * as _283 from "./applications/transfer/v1/query.rpc.Query";
import * as _284 from "./core/channel/v1/query.rpc.Query";
import * as _285 from "./core/client/v1/query.rpc.Query";
import * as _286 from "./core/connection/v1/query.rpc.Query";
import * as _287 from "./applications/fee/v1/tx.rpc.msg";
import * as _288 from "./applications/interchain_accounts/controller/v1/tx.rpc.msg";
import * as _289 from "./applications/interchain_accounts/host/v1/tx.rpc.msg";
import * as _290 from "./applications/transfer/v1/tx.rpc.msg";
import * as _291 from "./core/channel/v1/tx.rpc.msg";
import * as _292 from "./core/client/v1/tx.rpc.msg";
import * as _293 from "./core/connection/v1/tx.rpc.msg";
import * as _296 from "./rpc.query";
import * as _297 from "./rpc.tx";
export namespace ibc {
  export namespace applications {
    export namespace fee {
      export const v1 = {
        ..._141,
        ..._142,
        ..._143,
        ..._144,
        ..._145,
        ..._146,
        ..._266,
        ..._273,
        ..._280,
        ..._287
      };
    }
    export namespace interchain_accounts {
      export namespace controller {
        export const v1 = {
          ..._147,
          ..._148,
          ..._149,
          ..._267,
          ..._274,
          ..._281,
          ..._288
        };
      }
      export namespace genesis {
        export const v1 = {
          ..._150
        };
      }
      export namespace host {
        export const v1 = {
          ..._151,
          ..._152,
          ..._153,
          ..._268,
          ..._275,
          ..._282,
          ..._289
        };
      }
      export const v1 = {
        ..._154,
        ..._155,
        ..._156
      };
    }
    export namespace transfer {
      export const v1 = {
        ..._157,
        ..._158,
        ..._159,
        ..._160,
        ..._161,
        ..._269,
        ..._276,
        ..._283,
        ..._290
      };
      export const v2 = {
        ..._162
      };
    }
  }
  export namespace core {
    export namespace channel {
      export const v1 = {
        ..._163,
        ..._164,
        ..._165,
        ..._166,
        ..._270,
        ..._277,
        ..._284,
        ..._291
      };
    }
    export namespace client {
      export const v1 = {
        ..._167,
        ..._168,
        ..._169,
        ..._170,
        ..._271,
        ..._278,
        ..._285,
        ..._292
      };
    }
    export namespace commitment {
      export const v1 = {
        ..._171
      };
    }
    export namespace connection {
      export const v1 = {
        ..._172,
        ..._173,
        ..._174,
        ..._175,
        ..._272,
        ..._279,
        ..._286,
        ..._293
      };
    }
    export namespace types {
      export const v1 = {
        ..._176
      };
    }
  }
  export namespace lightclients {
    export namespace localhost {
      export const v2 = {
        ..._177
      };
    }
    export namespace solomachine {
      export const v2 = {
        ..._178
      };
      export const v3 = {
        ..._179
      };
    }
    export namespace tendermint {
      export const v1 = {
        ..._180
      };
    }
  }
  export const ClientFactory = {
    ..._296,
    ..._297
  };
}