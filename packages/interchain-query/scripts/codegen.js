const { join, resolve } = require("path");
const telescope = require("@cosmology/telescope").default;
const rimraf = require("rimraf").rimrafSync;

const protoDirs = [
  join(__dirname, "/../../../protos/cosmos-sdk/proto"),
  join(__dirname, "/../../../protos/ibc-go/proto"),
  join(__dirname, "/../../../protos/ics23/proto"),
  join(__dirname, "/../../../protos/proto"),
].map((a) => resolve(a));

const outPath = join(__dirname, "../src/codegen");
rimraf(outPath);

telescope({
  protoDirs,
  outPath,
  options: {
    env: "v-next",
    tsDisable: {
      patterns: ["**/tx.registry.ts"],

      files: [
        "cosmos/auth/v1beta1/query.ts",
        "cosmos/authz/v1beta1/authz.ts",
        "cosmos/feegrant/v1beta1/feegrant.ts",
        "cosmos/feegrant/v1beta1/tx.ts",
        "cosmos/gov/v1/tx.ts",
        "cosmos/gov/v1beta1/gov.ts",
        "cosmos/gov/v1beta1/tx.ts",
        "cosmos/group/v1/tx.ts",
        "cosmos/group/v1/types.ts",
      ],
    },
    interfaces: {
      enabled: true,
      useUnionTypes: true,
    },
    prototypes: {
      enabled: true,
      parser: {
        keepCase: false,
      },
      excluded: {
        packages: ["cosmos.autocli.v1"],
      },
      addAminoTypeToObjects: true,
      addTypeUrlToObjects: true,
      addTypeUrlToDecoders: true,
      typingsFormat: {
        customTypes: {
          useCosmosSDKDec: true,
        },
        num64: "bigint",
        useDeepPartial: true,
        useExact: false,
        timestamp: "date",
        duration: "duration",
      },

      methods: {
        encode: true,
        decode: true,
        fromJSON: true,
        toJSON: true,
        fromPartial: true,
        toSDK: true,
        fromSDK: true,
        //
        toAmino: true,
        fromAmino: true,
        fromProto: true,
        toProto: true,
      },
      includePackageVar: false,
      fieldDefaultIsOptional: true,
      useOptionalNullable: true,
      allowUndefinedTypes: true,

      optionalQueryParams: true,
    },
    reactQuery: {
      enabled: true,
    },
    aminoEncoding: {
      enabled: true,
      useLegacyInlineEncoding: false,
    },
    lcdClients: {
      enabled: false,
    },
    rpcClients: {
      enabled: true,
      camelCase: true,
    },
  },
})
  .then(() => {
    console.log("✨ all done!");
  })
  .catch((e) => {
    console.error(e);
    process.exit(1);
  });
