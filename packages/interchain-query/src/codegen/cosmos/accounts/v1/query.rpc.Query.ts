import { Rpc } from "../../../helpers";
import { BinaryReader } from "../../../binary";
import { QueryClient, createProtobufRpcClient, ProtobufRpcClient } from "@cosmjs/stargate";
import { ReactQueryParams } from "../../../react-query";
import { useQuery } from "@tanstack/react-query";
import { AccountQueryRequest, AccountQueryResponse } from "./query";
/** Query defines the Query service for the x/accounts module. */
export interface Query {
  /** AccountQuery runs an account query. */
  accountQuery(request: AccountQueryRequest): Promise<AccountQueryResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.accountQuery = this.accountQuery.bind(this);
  }
  accountQuery(request: AccountQueryRequest): Promise<AccountQueryResponse> {
    const data = AccountQueryRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.accounts.v1.Query", "AccountQuery", data);
    return promise.then(data => AccountQueryResponse.decode(new BinaryReader(data)));
  }
}
export const createRpcQueryExtension = (base: QueryClient) => {
  const rpc = createProtobufRpcClient(base);
  const queryService = new QueryClientImpl(rpc);
  return {
    accountQuery(request: AccountQueryRequest): Promise<AccountQueryResponse> {
      return queryService.accountQuery(request);
    }
  };
};
export interface UseAccountQueryQuery<TData> extends ReactQueryParams<AccountQueryResponse, TData> {
  request: AccountQueryRequest;
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
  const useAccountQuery = <TData = AccountQueryResponse,>({
    request,
    options
  }: UseAccountQueryQuery<TData>) => {
    return useQuery<AccountQueryResponse, Error, TData>(["accountQueryQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.accountQuery(request);
    }, options);
  };
  return {
    /** AccountQuery runs an account query. */useAccountQuery
  };
};