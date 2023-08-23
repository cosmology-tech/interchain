import * as _92 from "./abci/types";
import * as _93 from "./crypto/keys";
import * as _94 from "./crypto/proof";
import * as _95 from "./libs/bits/types";
import * as _96 from "./p2p/types";
import * as _97 from "./types/block";
import * as _98 from "./types/evidence";
import * as _99 from "./types/params";
import * as _100 from "./types/types";
import * as _101 from "./types/validator";
import * as _102 from "./version/types";
export namespace tendermint {
  export const abci = {
    ..._92
  };
  export const crypto = {
    ..._93,
    ..._94
  };
  export namespace libs {
    export const bits = {
      ..._95
    };
  }
  export const p2p = {
    ..._96
  };
  export const types = {
    ..._97,
    ..._98,
    ..._99,
    ..._100,
    ..._101
  };
  export const version = {
    ..._102
  };
}