import { Rpc } from "../../../helpers";
import { BinaryReader } from "../../../binary";
import { QueryClient, createProtobufRpcClient, ProtobufRpcClient } from "@cosmjs/stargate";
import { ReactQueryParams } from "../../../react-query";
import { useQuery } from "@tanstack/react-query";
import { QueryAllowanceRequest, QueryAllowanceResponse, QueryAllowancesRequest, QueryAllowancesResponse } from "./query";
/** Query defines the gRPC querier service. */
export interface Query {
  /** Allowance returns fee granted to the grantee by the granter. */
  allowance(request: QueryAllowanceRequest): Promise<QueryAllowanceResponse>;
  /** Allowances returns all the grants for address. */
  allowances(request: QueryAllowancesRequest): Promise<QueryAllowancesResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.allowance = this.allowance.bind(this);
    this.allowances = this.allowances.bind(this);
  }
  allowance(request: QueryAllowanceRequest): Promise<QueryAllowanceResponse> {
    const data = QueryAllowanceRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.feegrant.v1beta1.Query", "Allowance", data);
    return promise.then(data => QueryAllowanceResponse.decode(new BinaryReader(data)));
  }
  allowances(request: QueryAllowancesRequest): Promise<QueryAllowancesResponse> {
    const data = QueryAllowancesRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.feegrant.v1beta1.Query", "Allowances", data);
    return promise.then(data => QueryAllowancesResponse.decode(new BinaryReader(data)));
  }
}
export const createRpcQueryExtension = (base: QueryClient) => {
  const rpc = createProtobufRpcClient(base);
  const queryService = new QueryClientImpl(rpc);
  return {
    allowance(request: QueryAllowanceRequest): Promise<QueryAllowanceResponse> {
      return queryService.allowance(request);
    },
    allowances(request: QueryAllowancesRequest): Promise<QueryAllowancesResponse> {
      return queryService.allowances(request);
    }
  };
};
export interface UseAllowanceQuery<TData> extends ReactQueryParams<QueryAllowanceResponse, TData> {
  request: QueryAllowanceRequest;
}
export interface UseAllowancesQuery<TData> extends ReactQueryParams<QueryAllowancesResponse, TData> {
  request: QueryAllowancesRequest;
}
const _queryClients: WeakMap<ProtobufRpcClient, QueryClientImpl> = new WeakMap();
const getQueryService = (rpc: ProtobufRpcClient | undefined): QueryClientImpl | undefined => {
  if (!rpc) return;
  if (_queryClients.has(rpc)) {
    return _queryClients.get(rpc);
  }
  const queryService = new QueryClientImpl(rpc);
  _queryClients.set(rpc, queryService);
  return queryService;
};
export const createRpcQueryHooks = (rpc: ProtobufRpcClient | undefined) => {
  const queryService = getQueryService(rpc);
  const useAllowance = <TData = QueryAllowanceResponse,>({
    request,
    options
  }: UseAllowanceQuery<TData>) => {
    return useQuery<QueryAllowanceResponse, Error, TData>(["allowanceQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.allowance(request);
    }, options);
  };
  const useAllowances = <TData = QueryAllowancesResponse,>({
    request,
    options
  }: UseAllowancesQuery<TData>) => {
    return useQuery<QueryAllowancesResponse, Error, TData>(["allowancesQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.allowances(request);
    }, options);
  };
  return {
    /** Allowance returns fee granted to the grantee by the granter. */useAllowance,
    /** Allowances returns all the grants for address. */useAllowances
  };
};