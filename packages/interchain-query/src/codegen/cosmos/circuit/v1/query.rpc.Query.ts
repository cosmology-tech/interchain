import { Rpc } from "../../../helpers";
import { BinaryReader } from "../../../binary";
import { QueryClient, createProtobufRpcClient, ProtobufRpcClient } from "@cosmjs/stargate";
import { ReactQueryParams } from "../../../react-query";
import { useQuery } from "@tanstack/react-query";
import { QueryAccountRequest, AccountResponse, QueryAccountsRequest, AccountsResponse, QueryDisabledListRequest, DisabledListResponse } from "./query";
/** Query defines the circuit gRPC querier service. */
export interface Query {
  /** Account returns account permissions. */
  account(request: QueryAccountRequest): Promise<AccountResponse>;
  /** Account returns account permissions. */
  accounts(request?: QueryAccountsRequest): Promise<AccountsResponse>;
  /** DisabledList returns a list of disabled message urls */
  disabledList(request?: QueryDisabledListRequest): Promise<DisabledListResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.account = this.account.bind(this);
    this.accounts = this.accounts.bind(this);
    this.disabledList = this.disabledList.bind(this);
  }
  account(request: QueryAccountRequest): Promise<AccountResponse> {
    const data = QueryAccountRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.circuit.v1.Query", "Account", data);
    return promise.then(data => AccountResponse.decode(new BinaryReader(data)));
  }
  accounts(request: QueryAccountsRequest = {
    pagination: undefined
  }): Promise<AccountsResponse> {
    const data = QueryAccountsRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.circuit.v1.Query", "Accounts", data);
    return promise.then(data => AccountsResponse.decode(new BinaryReader(data)));
  }
  disabledList(request: QueryDisabledListRequest = {}): Promise<DisabledListResponse> {
    const data = QueryDisabledListRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.circuit.v1.Query", "DisabledList", data);
    return promise.then(data => DisabledListResponse.decode(new BinaryReader(data)));
  }
}
export const createRpcQueryExtension = (base: QueryClient) => {
  const rpc = createProtobufRpcClient(base);
  const queryService = new QueryClientImpl(rpc);
  return {
    account(request: QueryAccountRequest): Promise<AccountResponse> {
      return queryService.account(request);
    },
    accounts(request?: QueryAccountsRequest): Promise<AccountsResponse> {
      return queryService.accounts(request);
    },
    disabledList(request?: QueryDisabledListRequest): Promise<DisabledListResponse> {
      return queryService.disabledList(request);
    }
  };
};
export interface UseAccountQuery<TData> extends ReactQueryParams<AccountResponse, TData> {
  request: QueryAccountRequest;
}
export interface UseAccountsQuery<TData> extends ReactQueryParams<AccountsResponse, TData> {
  request?: QueryAccountsRequest;
}
export interface UseDisabledListQuery<TData> extends ReactQueryParams<DisabledListResponse, TData> {
  request?: QueryDisabledListRequest;
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
  const useAccount = <TData = AccountResponse,>({
    request,
    options
  }: UseAccountQuery<TData>) => {
    return useQuery<AccountResponse, Error, TData>(["accountQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.account(request);
    }, options);
  };
  const useAccounts = <TData = AccountsResponse,>({
    request,
    options
  }: UseAccountsQuery<TData>) => {
    return useQuery<AccountsResponse, Error, TData>(["accountsQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.accounts(request);
    }, options);
  };
  const useDisabledList = <TData = DisabledListResponse,>({
    request,
    options
  }: UseDisabledListQuery<TData>) => {
    return useQuery<DisabledListResponse, Error, TData>(["disabledListQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.disabledList(request);
    }, options);
  };
  return {
    /** Account returns account permissions. */useAccount,
    /** Account returns account permissions. */useAccounts,
    /** DisabledList returns a list of disabled message urls */useDisabledList
  };
};