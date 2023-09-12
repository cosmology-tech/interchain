import * as _151 from "./wasm/v1/authz";
import * as _152 from "./wasm/v1/genesis";
import * as _153 from "./wasm/v1/ibc";
import * as _154 from "./wasm/v1/proposal";
import * as _155 from "./wasm/v1/query";
import * as _156 from "./wasm/v1/tx";
import * as _157 from "./wasm/v1/types";
import * as _256 from "./wasm/v1/tx.amino";
import * as _257 from "./wasm/v1/tx.registry";
import * as _258 from "./wasm/v1/query.lcd";
import * as _259 from "./wasm/v1/query.rpc.Query";
import * as _260 from "./wasm/v1/tx.rpc.msg";
import * as _267 from "./lcd";
import * as _268 from "./rpc.query";
import * as _269 from "./rpc.tx";
export namespace cosmwasm {
  export namespace wasm {
    export const v1 = {
      ..._151,
      ..._152,
      ..._153,
      ..._154,
      ..._155,
      ..._156,
      ..._157,
      ..._256,
      ..._257,
      ..._258,
      ..._259,
      ..._260
    };
  }
  export const ClientFactory = {
    ..._267,
    ..._268,
    ..._269
  };
}