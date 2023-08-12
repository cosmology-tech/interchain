import { Rpc } from "../../../../helpers";
import { BinaryReader } from "../../../../binary";
import { QueryClient, createProtobufRpcClient, ProtobufRpcClient } from "@cosmjs/stargate";
import { ReactQueryParams } from "../../../../react-query";
import { useQuery } from "@tanstack/react-query";
import { ConfigRequest, ConfigResponse, StatusRequest, StatusResponse } from "./query";
/** Service defines the gRPC querier service for node related queries. */
export interface Service {
  /** Config queries for the operator configuration. */
  config(request?: ConfigRequest): Promise<ConfigResponse>;
  /** Status queries for the node status. */
  status(request?: StatusRequest): Promise<StatusResponse>;
}
export class ServiceClientImpl implements Service {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.config = this.config.bind(this);
    this.status = this.status.bind(this);
  }
  config(request: ConfigRequest = {}): Promise<ConfigResponse> {
    const data = ConfigRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.base.node.v1beta1.Service", "Config", data);
    return promise.then(data => ConfigResponse.decode(new BinaryReader(data)));
  }
  status(request: StatusRequest = {}): Promise<StatusResponse> {
    const data = StatusRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.base.node.v1beta1.Service", "Status", data);
    return promise.then(data => StatusResponse.decode(new BinaryReader(data)));
  }
}
export const createRpcQueryExtension = (base: QueryClient) => {
  const rpc = createProtobufRpcClient(base);
  const queryService = new ServiceClientImpl(rpc);
  return {
    config(request?: ConfigRequest): Promise<ConfigResponse> {
      return queryService.config(request);
    },
    status(request?: StatusRequest): Promise<StatusResponse> {
      return queryService.status(request);
    }
  };
};
export interface UseConfigQuery<TData> extends ReactQueryParams<ConfigResponse, TData> {
  request?: ConfigRequest;
}
export interface UseStatusQuery<TData> extends ReactQueryParams<StatusResponse, TData> {
  request?: StatusRequest;
}
const _queryClients: WeakMap<ProtobufRpcClient, ServiceClientImpl> = new WeakMap();
const getQueryService = (rpc: ProtobufRpcClient | undefined): ServiceClientImpl | undefined => {
  if (!rpc) return;
  if (_queryClients.has(rpc)) {
    return _queryClients.get(rpc);
  }
  const queryService = new ServiceClientImpl(rpc);
  _queryClients.set(rpc, queryService);
  return queryService;
};
export const createRpcQueryHooks = (rpc: ProtobufRpcClient | undefined) => {
  const queryService = getQueryService(rpc);
  const useConfig = <TData = ConfigResponse,>({
    request,
    options
  }: UseConfigQuery<TData>) => {
    return useQuery<ConfigResponse, Error, TData>(["configQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.config(request);
    }, options);
  };
  const useStatus = <TData = StatusResponse,>({
    request,
    options
  }: UseStatusQuery<TData>) => {
    return useQuery<StatusResponse, Error, TData>(["statusQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.status(request);
    }, options);
  };
  return {
    /** Config queries for the operator configuration. */useConfig,
    /** Status queries for the node status. */useStatus
  };
};