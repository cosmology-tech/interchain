import * as _156 from "./wasm/v1/authz";
import * as _157 from "./wasm/v1/genesis";
import * as _158 from "./wasm/v1/ibc";
import * as _159 from "./wasm/v1/proposal";
import * as _160 from "./wasm/v1/query";
import * as _161 from "./wasm/v1/tx";
import * as _162 from "./wasm/v1/types";
import * as _266 from "./wasm/v1/tx.amino";
import * as _267 from "./wasm/v1/tx.registry";
import * as _268 from "./wasm/v1/query.lcd";
import * as _269 from "./wasm/v1/query.rpc.Query";
import * as _270 from "./wasm/v1/tx.rpc.msg";
import * as _277 from "./lcd";
import * as _278 from "./rpc.query";
import * as _279 from "./rpc.tx";
export namespace cosmwasm {
  export namespace wasm {
    export const v1 = {
      ..._156,
      ..._157,
      ..._158,
      ..._159,
      ..._160,
      ..._161,
      ..._162,
      ..._266,
      ..._267,
      ..._268,
      ..._269,
      ..._270
    };
  }
  export const ClientFactory = {
    ..._277,
    ..._278,
    ..._279
  };
}