import { BinaryReader, BinaryWriter } from "../../../../binary";
import { isSet, DeepPartial } from "../../../../helpers";
import { GlobalDecoderRegistry } from "../../../../registry";
/** Module is the config object for the runtime module. */
export interface Module {
  /** app_name is the name of the app. */
  appName: string;
  /**
   * begin_blockers specifies the module names of begin blockers
   * to call in the order in which they should be called. If this is left empty
   * no begin blocker will be registered.
   */
  beginBlockers: string[];
  /**
   * end_blockers specifies the module names of the end blockers
   * to call in the order in which they should be called. If this is left empty
   * no end blocker will be registered.
   */
  endBlockers: string[];
  /**
   * init_genesis specifies the module names of init genesis functions
   * to call in the order in which they should be called. If this is left empty
   * no init genesis function will be registered.
   */
  initGenesis: string[];
  /**
   * export_genesis specifies the order in which to export module genesis data.
   * If this is left empty, the init_genesis order will be used for export genesis
   * if it is specified.
   */
  exportGenesis: string[];
  /**
   * override_store_keys is an optional list of overrides for the module store keys
   * to be used in keeper construction.
   */
  overrideStoreKeys: StoreKeyConfig[];
  /**
   * order_migrations defines the order in which module migrations are performed.
   * If this is left empty, it uses the default migration order.
   * https://pkg.go.dev/github.com/cosmos/cosmos-sdk@v0.47.0-alpha2/types/module#DefaultMigrationsOrder
   */
  orderMigrations: string[];
  /**
   * precommiters specifies the module names of the precommiters
   * to call in the order in which they should be called. If this is left empty
   * no precommit function will be registered.
   */
  precommiters: string[];
  /**
   * prepare_check_staters specifies the module names of the prepare_check_staters
   * to call in the order in which they should be called. If this is left empty
   * no preparecheckstate function will be registered.
   */
  prepareCheckStaters: string[];
  /**
   * pre_blockers specifies the module names of pre blockers
   * to call in the order in which they should be called. If this is left empty
   * no pre blocker will be registered.
   */
  preBlockers: string[];
}
export interface ModuleProtoMsg {
  typeUrl: "/cosmos.app.runtime.v1alpha1.Module";
  value: Uint8Array;
}
/** Module is the config object for the runtime module. */
export interface ModuleAmino {
  /** app_name is the name of the app. */
  app_name?: string;
  /**
   * begin_blockers specifies the module names of begin blockers
   * to call in the order in which they should be called. If this is left empty
   * no begin blocker will be registered.
   */
  begin_blockers?: string[];
  /**
   * end_blockers specifies the module names of the end blockers
   * to call in the order in which they should be called. If this is left empty
   * no end blocker will be registered.
   */
  end_blockers?: string[];
  /**
   * init_genesis specifies the module names of init genesis functions
   * to call in the order in which they should be called. If this is left empty
   * no init genesis function will be registered.
   */
  init_genesis?: string[];
  /**
   * export_genesis specifies the order in which to export module genesis data.
   * If this is left empty, the init_genesis order will be used for export genesis
   * if it is specified.
   */
  export_genesis?: string[];
  /**
   * override_store_keys is an optional list of overrides for the module store keys
   * to be used in keeper construction.
   */
  override_store_keys?: StoreKeyConfigAmino[];
  /**
   * order_migrations defines the order in which module migrations are performed.
   * If this is left empty, it uses the default migration order.
   * https://pkg.go.dev/github.com/cosmos/cosmos-sdk@v0.47.0-alpha2/types/module#DefaultMigrationsOrder
   */
  order_migrations?: string[];
  /**
   * precommiters specifies the module names of the precommiters
   * to call in the order in which they should be called. If this is left empty
   * no precommit function will be registered.
   */
  precommiters?: string[];
  /**
   * prepare_check_staters specifies the module names of the prepare_check_staters
   * to call in the order in which they should be called. If this is left empty
   * no preparecheckstate function will be registered.
   */
  prepare_check_staters?: string[];
  /**
   * pre_blockers specifies the module names of pre blockers
   * to call in the order in which they should be called. If this is left empty
   * no pre blocker will be registered.
   */
  pre_blockers?: string[];
}
export interface ModuleAminoMsg {
  type: "cosmos-sdk/Module";
  value: ModuleAmino;
}
/** Module is the config object for the runtime module. */
export interface ModuleSDKType {
  app_name: string;
  begin_blockers: string[];
  end_blockers: string[];
  init_genesis: string[];
  export_genesis: string[];
  override_store_keys: StoreKeyConfigSDKType[];
  order_migrations: string[];
  precommiters: string[];
  prepare_check_staters: string[];
  pre_blockers: string[];
}
/**
 * StoreKeyConfig may be supplied to override the default module store key, which
 * is the module name.
 */
export interface StoreKeyConfig {
  /** name of the module to override the store key of */
  moduleName: string;
  /** the kv store key to use instead of the module name. */
  kvStoreKey: string;
}
export interface StoreKeyConfigProtoMsg {
  typeUrl: "/cosmos.app.runtime.v1alpha1.StoreKeyConfig";
  value: Uint8Array;
}
/**
 * StoreKeyConfig may be supplied to override the default module store key, which
 * is the module name.
 */
export interface StoreKeyConfigAmino {
  /** name of the module to override the store key of */
  module_name?: string;
  /** the kv store key to use instead of the module name. */
  kv_store_key?: string;
}
export interface StoreKeyConfigAminoMsg {
  type: "cosmos-sdk/StoreKeyConfig";
  value: StoreKeyConfigAmino;
}
/**
 * StoreKeyConfig may be supplied to override the default module store key, which
 * is the module name.
 */
export interface StoreKeyConfigSDKType {
  module_name: string;
  kv_store_key: string;
}
function createBaseModule(): Module {
  return {
    appName: "",
    beginBlockers: [],
    endBlockers: [],
    initGenesis: [],
    exportGenesis: [],
    overrideStoreKeys: [],
    orderMigrations: [],
    precommiters: [],
    prepareCheckStaters: [],
    preBlockers: []
  };
}
export const Module = {
  typeUrl: "/cosmos.app.runtime.v1alpha1.Module",
  aminoType: "cosmos-sdk/Module",
  is(o: any): o is Module {
    return o && (o.$typeUrl === Module.typeUrl || typeof o.appName === "string" && Array.isArray(o.beginBlockers) && (!o.beginBlockers.length || typeof o.beginBlockers[0] === "string") && Array.isArray(o.endBlockers) && (!o.endBlockers.length || typeof o.endBlockers[0] === "string") && Array.isArray(o.initGenesis) && (!o.initGenesis.length || typeof o.initGenesis[0] === "string") && Array.isArray(o.exportGenesis) && (!o.exportGenesis.length || typeof o.exportGenesis[0] === "string") && Array.isArray(o.overrideStoreKeys) && (!o.overrideStoreKeys.length || StoreKeyConfig.is(o.overrideStoreKeys[0])) && Array.isArray(o.orderMigrations) && (!o.orderMigrations.length || typeof o.orderMigrations[0] === "string") && Array.isArray(o.precommiters) && (!o.precommiters.length || typeof o.precommiters[0] === "string") && Array.isArray(o.prepareCheckStaters) && (!o.prepareCheckStaters.length || typeof o.prepareCheckStaters[0] === "string") && Array.isArray(o.preBlockers) && (!o.preBlockers.length || typeof o.preBlockers[0] === "string"));
  },
  isSDK(o: any): o is ModuleSDKType {
    return o && (o.$typeUrl === Module.typeUrl || typeof o.app_name === "string" && Array.isArray(o.begin_blockers) && (!o.begin_blockers.length || typeof o.begin_blockers[0] === "string") && Array.isArray(o.end_blockers) && (!o.end_blockers.length || typeof o.end_blockers[0] === "string") && Array.isArray(o.init_genesis) && (!o.init_genesis.length || typeof o.init_genesis[0] === "string") && Array.isArray(o.export_genesis) && (!o.export_genesis.length || typeof o.export_genesis[0] === "string") && Array.isArray(o.override_store_keys) && (!o.override_store_keys.length || StoreKeyConfig.isSDK(o.override_store_keys[0])) && Array.isArray(o.order_migrations) && (!o.order_migrations.length || typeof o.order_migrations[0] === "string") && Array.isArray(o.precommiters) && (!o.precommiters.length || typeof o.precommiters[0] === "string") && Array.isArray(o.prepare_check_staters) && (!o.prepare_check_staters.length || typeof o.prepare_check_staters[0] === "string") && Array.isArray(o.pre_blockers) && (!o.pre_blockers.length || typeof o.pre_blockers[0] === "string"));
  },
  isAmino(o: any): o is ModuleAmino {
    return o && (o.$typeUrl === Module.typeUrl || typeof o.app_name === "string" && Array.isArray(o.begin_blockers) && (!o.begin_blockers.length || typeof o.begin_blockers[0] === "string") && Array.isArray(o.end_blockers) && (!o.end_blockers.length || typeof o.end_blockers[0] === "string") && Array.isArray(o.init_genesis) && (!o.init_genesis.length || typeof o.init_genesis[0] === "string") && Array.isArray(o.export_genesis) && (!o.export_genesis.length || typeof o.export_genesis[0] === "string") && Array.isArray(o.override_store_keys) && (!o.override_store_keys.length || StoreKeyConfig.isAmino(o.override_store_keys[0])) && Array.isArray(o.order_migrations) && (!o.order_migrations.length || typeof o.order_migrations[0] === "string") && Array.isArray(o.precommiters) && (!o.precommiters.length || typeof o.precommiters[0] === "string") && Array.isArray(o.prepare_check_staters) && (!o.prepare_check_staters.length || typeof o.prepare_check_staters[0] === "string") && Array.isArray(o.pre_blockers) && (!o.pre_blockers.length || typeof o.pre_blockers[0] === "string"));
  },
  encode(message: Module, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.appName !== "") {
      writer.uint32(10).string(message.appName);
    }
    for (const v of message.beginBlockers) {
      writer.uint32(18).string(v!);
    }
    for (const v of message.endBlockers) {
      writer.uint32(26).string(v!);
    }
    for (const v of message.initGenesis) {
      writer.uint32(34).string(v!);
    }
    for (const v of message.exportGenesis) {
      writer.uint32(42).string(v!);
    }
    for (const v of message.overrideStoreKeys) {
      StoreKeyConfig.encode(v!, writer.uint32(50).fork()).ldelim();
    }
    for (const v of message.orderMigrations) {
      writer.uint32(58).string(v!);
    }
    for (const v of message.precommiters) {
      writer.uint32(66).string(v!);
    }
    for (const v of message.prepareCheckStaters) {
      writer.uint32(74).string(v!);
    }
    for (const v of message.preBlockers) {
      writer.uint32(82).string(v!);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Module {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseModule();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.appName = reader.string();
          break;
        case 2:
          message.beginBlockers.push(reader.string());
          break;
        case 3:
          message.endBlockers.push(reader.string());
          break;
        case 4:
          message.initGenesis.push(reader.string());
          break;
        case 5:
          message.exportGenesis.push(reader.string());
          break;
        case 6:
          message.overrideStoreKeys.push(StoreKeyConfig.decode(reader, reader.uint32()));
          break;
        case 7:
          message.orderMigrations.push(reader.string());
          break;
        case 8:
          message.precommiters.push(reader.string());
          break;
        case 9:
          message.prepareCheckStaters.push(reader.string());
          break;
        case 10:
          message.preBlockers.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Module {
    return {
      appName: isSet(object.appName) ? String(object.appName) : "",
      beginBlockers: Array.isArray(object?.beginBlockers) ? object.beginBlockers.map((e: any) => String(e)) : [],
      endBlockers: Array.isArray(object?.endBlockers) ? object.endBlockers.map((e: any) => String(e)) : [],
      initGenesis: Array.isArray(object?.initGenesis) ? object.initGenesis.map((e: any) => String(e)) : [],
      exportGenesis: Array.isArray(object?.exportGenesis) ? object.exportGenesis.map((e: any) => String(e)) : [],
      overrideStoreKeys: Array.isArray(object?.overrideStoreKeys) ? object.overrideStoreKeys.map((e: any) => StoreKeyConfig.fromJSON(e)) : [],
      orderMigrations: Array.isArray(object?.orderMigrations) ? object.orderMigrations.map((e: any) => String(e)) : [],
      precommiters: Array.isArray(object?.precommiters) ? object.precommiters.map((e: any) => String(e)) : [],
      prepareCheckStaters: Array.isArray(object?.prepareCheckStaters) ? object.prepareCheckStaters.map((e: any) => String(e)) : [],
      preBlockers: Array.isArray(object?.preBlockers) ? object.preBlockers.map((e: any) => String(e)) : []
    };
  },
  toJSON(message: Module): unknown {
    const obj: any = {};
    message.appName !== undefined && (obj.appName = message.appName);
    if (message.beginBlockers) {
      obj.beginBlockers = message.beginBlockers.map(e => e);
    } else {
      obj.beginBlockers = [];
    }
    if (message.endBlockers) {
      obj.endBlockers = message.endBlockers.map(e => e);
    } else {
      obj.endBlockers = [];
    }
    if (message.initGenesis) {
      obj.initGenesis = message.initGenesis.map(e => e);
    } else {
      obj.initGenesis = [];
    }
    if (message.exportGenesis) {
      obj.exportGenesis = message.exportGenesis.map(e => e);
    } else {
      obj.exportGenesis = [];
    }
    if (message.overrideStoreKeys) {
      obj.overrideStoreKeys = message.overrideStoreKeys.map(e => e ? StoreKeyConfig.toJSON(e) : undefined);
    } else {
      obj.overrideStoreKeys = [];
    }
    if (message.orderMigrations) {
      obj.orderMigrations = message.orderMigrations.map(e => e);
    } else {
      obj.orderMigrations = [];
    }
    if (message.precommiters) {
      obj.precommiters = message.precommiters.map(e => e);
    } else {
      obj.precommiters = [];
    }
    if (message.prepareCheckStaters) {
      obj.prepareCheckStaters = message.prepareCheckStaters.map(e => e);
    } else {
      obj.prepareCheckStaters = [];
    }
    if (message.preBlockers) {
      obj.preBlockers = message.preBlockers.map(e => e);
    } else {
      obj.preBlockers = [];
    }
    return obj;
  },
  fromPartial(object: DeepPartial<Module>): Module {
    const message = createBaseModule();
    message.appName = object.appName ?? "";
    message.beginBlockers = object.beginBlockers?.map(e => e) || [];
    message.endBlockers = object.endBlockers?.map(e => e) || [];
    message.initGenesis = object.initGenesis?.map(e => e) || [];
    message.exportGenesis = object.exportGenesis?.map(e => e) || [];
    message.overrideStoreKeys = object.overrideStoreKeys?.map(e => StoreKeyConfig.fromPartial(e)) || [];
    message.orderMigrations = object.orderMigrations?.map(e => e) || [];
    message.precommiters = object.precommiters?.map(e => e) || [];
    message.prepareCheckStaters = object.prepareCheckStaters?.map(e => e) || [];
    message.preBlockers = object.preBlockers?.map(e => e) || [];
    return message;
  },
  fromSDK(object: ModuleSDKType): Module {
    return {
      appName: object?.app_name,
      beginBlockers: Array.isArray(object?.begin_blockers) ? object.begin_blockers.map((e: any) => e) : [],
      endBlockers: Array.isArray(object?.end_blockers) ? object.end_blockers.map((e: any) => e) : [],
      initGenesis: Array.isArray(object?.init_genesis) ? object.init_genesis.map((e: any) => e) : [],
      exportGenesis: Array.isArray(object?.export_genesis) ? object.export_genesis.map((e: any) => e) : [],
      overrideStoreKeys: Array.isArray(object?.override_store_keys) ? object.override_store_keys.map((e: any) => StoreKeyConfig.fromSDK(e)) : [],
      orderMigrations: Array.isArray(object?.order_migrations) ? object.order_migrations.map((e: any) => e) : [],
      precommiters: Array.isArray(object?.precommiters) ? object.precommiters.map((e: any) => e) : [],
      prepareCheckStaters: Array.isArray(object?.prepare_check_staters) ? object.prepare_check_staters.map((e: any) => e) : [],
      preBlockers: Array.isArray(object?.pre_blockers) ? object.pre_blockers.map((e: any) => e) : []
    };
  },
  toSDK(message: Module): ModuleSDKType {
    const obj: any = {};
    obj.app_name = message.appName;
    if (message.beginBlockers) {
      obj.begin_blockers = message.beginBlockers.map(e => e);
    } else {
      obj.begin_blockers = [];
    }
    if (message.endBlockers) {
      obj.end_blockers = message.endBlockers.map(e => e);
    } else {
      obj.end_blockers = [];
    }
    if (message.initGenesis) {
      obj.init_genesis = message.initGenesis.map(e => e);
    } else {
      obj.init_genesis = [];
    }
    if (message.exportGenesis) {
      obj.export_genesis = message.exportGenesis.map(e => e);
    } else {
      obj.export_genesis = [];
    }
    if (message.overrideStoreKeys) {
      obj.override_store_keys = message.overrideStoreKeys.map(e => e ? StoreKeyConfig.toSDK(e) : undefined);
    } else {
      obj.override_store_keys = [];
    }
    if (message.orderMigrations) {
      obj.order_migrations = message.orderMigrations.map(e => e);
    } else {
      obj.order_migrations = [];
    }
    if (message.precommiters) {
      obj.precommiters = message.precommiters.map(e => e);
    } else {
      obj.precommiters = [];
    }
    if (message.prepareCheckStaters) {
      obj.prepare_check_staters = message.prepareCheckStaters.map(e => e);
    } else {
      obj.prepare_check_staters = [];
    }
    if (message.preBlockers) {
      obj.pre_blockers = message.preBlockers.map(e => e);
    } else {
      obj.pre_blockers = [];
    }
    return obj;
  },
  fromAmino(object: ModuleAmino): Module {
    const message = createBaseModule();
    if (object.app_name !== undefined && object.app_name !== null) {
      message.appName = object.app_name;
    }
    message.beginBlockers = object.begin_blockers?.map(e => e) || [];
    message.endBlockers = object.end_blockers?.map(e => e) || [];
    message.initGenesis = object.init_genesis?.map(e => e) || [];
    message.exportGenesis = object.export_genesis?.map(e => e) || [];
    message.overrideStoreKeys = object.override_store_keys?.map(e => StoreKeyConfig.fromAmino(e)) || [];
    message.orderMigrations = object.order_migrations?.map(e => e) || [];
    message.precommiters = object.precommiters?.map(e => e) || [];
    message.prepareCheckStaters = object.prepare_check_staters?.map(e => e) || [];
    message.preBlockers = object.pre_blockers?.map(e => e) || [];
    return message;
  },
  toAmino(message: Module): ModuleAmino {
    const obj: any = {};
    obj.app_name = message.appName;
    if (message.beginBlockers) {
      obj.begin_blockers = message.beginBlockers.map(e => e);
    } else {
      obj.begin_blockers = [];
    }
    if (message.endBlockers) {
      obj.end_blockers = message.endBlockers.map(e => e);
    } else {
      obj.end_blockers = [];
    }
    if (message.initGenesis) {
      obj.init_genesis = message.initGenesis.map(e => e);
    } else {
      obj.init_genesis = [];
    }
    if (message.exportGenesis) {
      obj.export_genesis = message.exportGenesis.map(e => e);
    } else {
      obj.export_genesis = [];
    }
    if (message.overrideStoreKeys) {
      obj.override_store_keys = message.overrideStoreKeys.map(e => e ? StoreKeyConfig.toAmino(e) : undefined);
    } else {
      obj.override_store_keys = [];
    }
    if (message.orderMigrations) {
      obj.order_migrations = message.orderMigrations.map(e => e);
    } else {
      obj.order_migrations = [];
    }
    if (message.precommiters) {
      obj.precommiters = message.precommiters.map(e => e);
    } else {
      obj.precommiters = [];
    }
    if (message.prepareCheckStaters) {
      obj.prepare_check_staters = message.prepareCheckStaters.map(e => e);
    } else {
      obj.prepare_check_staters = [];
    }
    if (message.preBlockers) {
      obj.pre_blockers = message.preBlockers.map(e => e);
    } else {
      obj.pre_blockers = [];
    }
    return obj;
  },
  fromAminoMsg(object: ModuleAminoMsg): Module {
    return Module.fromAmino(object.value);
  },
  toAminoMsg(message: Module): ModuleAminoMsg {
    return {
      type: "cosmos-sdk/Module",
      value: Module.toAmino(message)
    };
  },
  fromProtoMsg(message: ModuleProtoMsg): Module {
    return Module.decode(message.value);
  },
  toProto(message: Module): Uint8Array {
    return Module.encode(message).finish();
  },
  toProtoMsg(message: Module): ModuleProtoMsg {
    return {
      typeUrl: "/cosmos.app.runtime.v1alpha1.Module",
      value: Module.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(Module.typeUrl, Module);
GlobalDecoderRegistry.registerAminoProtoMapping(Module.aminoType, Module.typeUrl);
function createBaseStoreKeyConfig(): StoreKeyConfig {
  return {
    moduleName: "",
    kvStoreKey: ""
  };
}
export const StoreKeyConfig = {
  typeUrl: "/cosmos.app.runtime.v1alpha1.StoreKeyConfig",
  aminoType: "cosmos-sdk/StoreKeyConfig",
  is(o: any): o is StoreKeyConfig {
    return o && (o.$typeUrl === StoreKeyConfig.typeUrl || typeof o.moduleName === "string" && typeof o.kvStoreKey === "string");
  },
  isSDK(o: any): o is StoreKeyConfigSDKType {
    return o && (o.$typeUrl === StoreKeyConfig.typeUrl || typeof o.module_name === "string" && typeof o.kv_store_key === "string");
  },
  isAmino(o: any): o is StoreKeyConfigAmino {
    return o && (o.$typeUrl === StoreKeyConfig.typeUrl || typeof o.module_name === "string" && typeof o.kv_store_key === "string");
  },
  encode(message: StoreKeyConfig, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.moduleName !== "") {
      writer.uint32(10).string(message.moduleName);
    }
    if (message.kvStoreKey !== "") {
      writer.uint32(18).string(message.kvStoreKey);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): StoreKeyConfig {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseStoreKeyConfig();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.moduleName = reader.string();
          break;
        case 2:
          message.kvStoreKey = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): StoreKeyConfig {
    return {
      moduleName: isSet(object.moduleName) ? String(object.moduleName) : "",
      kvStoreKey: isSet(object.kvStoreKey) ? String(object.kvStoreKey) : ""
    };
  },
  toJSON(message: StoreKeyConfig): unknown {
    const obj: any = {};
    message.moduleName !== undefined && (obj.moduleName = message.moduleName);
    message.kvStoreKey !== undefined && (obj.kvStoreKey = message.kvStoreKey);
    return obj;
  },
  fromPartial(object: DeepPartial<StoreKeyConfig>): StoreKeyConfig {
    const message = createBaseStoreKeyConfig();
    message.moduleName = object.moduleName ?? "";
    message.kvStoreKey = object.kvStoreKey ?? "";
    return message;
  },
  fromSDK(object: StoreKeyConfigSDKType): StoreKeyConfig {
    return {
      moduleName: object?.module_name,
      kvStoreKey: object?.kv_store_key
    };
  },
  toSDK(message: StoreKeyConfig): StoreKeyConfigSDKType {
    const obj: any = {};
    obj.module_name = message.moduleName;
    obj.kv_store_key = message.kvStoreKey;
    return obj;
  },
  fromAmino(object: StoreKeyConfigAmino): StoreKeyConfig {
    const message = createBaseStoreKeyConfig();
    if (object.module_name !== undefined && object.module_name !== null) {
      message.moduleName = object.module_name;
    }
    if (object.kv_store_key !== undefined && object.kv_store_key !== null) {
      message.kvStoreKey = object.kv_store_key;
    }
    return message;
  },
  toAmino(message: StoreKeyConfig): StoreKeyConfigAmino {
    const obj: any = {};
    obj.module_name = message.moduleName;
    obj.kv_store_key = message.kvStoreKey;
    return obj;
  },
  fromAminoMsg(object: StoreKeyConfigAminoMsg): StoreKeyConfig {
    return StoreKeyConfig.fromAmino(object.value);
  },
  toAminoMsg(message: StoreKeyConfig): StoreKeyConfigAminoMsg {
    return {
      type: "cosmos-sdk/StoreKeyConfig",
      value: StoreKeyConfig.toAmino(message)
    };
  },
  fromProtoMsg(message: StoreKeyConfigProtoMsg): StoreKeyConfig {
    return StoreKeyConfig.decode(message.value);
  },
  toProto(message: StoreKeyConfig): Uint8Array {
    return StoreKeyConfig.encode(message).finish();
  },
  toProtoMsg(message: StoreKeyConfig): StoreKeyConfigProtoMsg {
    return {
      typeUrl: "/cosmos.app.runtime.v1alpha1.StoreKeyConfig",
      value: StoreKeyConfig.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(StoreKeyConfig.typeUrl, StoreKeyConfig);
GlobalDecoderRegistry.registerAminoProtoMapping(StoreKeyConfig.aminoType, StoreKeyConfig.typeUrl);