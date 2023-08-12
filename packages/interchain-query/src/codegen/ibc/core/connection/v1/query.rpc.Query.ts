import { Rpc } from "../../../../helpers";
import { BinaryReader } from "../../../../binary";
import { QueryClient, createProtobufRpcClient, ProtobufRpcClient } from "@cosmjs/stargate";
import { ReactQueryParams } from "../../../../react-query";
import { useQuery } from "@tanstack/react-query";
import { QueryConnectionRequest, QueryConnectionResponse, QueryConnectionsRequest, QueryConnectionsResponse, QueryClientConnectionsRequest, QueryClientConnectionsResponse, QueryConnectionClientStateRequest, QueryConnectionClientStateResponse, QueryConnectionConsensusStateRequest, QueryConnectionConsensusStateResponse, QueryConnectionParamsRequest, QueryConnectionParamsResponse } from "./query";
/** Query provides defines the gRPC querier service */
export interface Query {
  /** Connection queries an IBC connection end. */
  connection(request: QueryConnectionRequest): Promise<QueryConnectionResponse>;
  /** Connections queries all the IBC connections of a chain. */
  connections(request?: QueryConnectionsRequest): Promise<QueryConnectionsResponse>;
  /**
   * ClientConnections queries the connection paths associated with a client
   * state.
   */
  clientConnections(request: QueryClientConnectionsRequest): Promise<QueryClientConnectionsResponse>;
  /**
   * ConnectionClientState queries the client state associated with the
   * connection.
   */
  connectionClientState(request: QueryConnectionClientStateRequest): Promise<QueryConnectionClientStateResponse>;
  /**
   * ConnectionConsensusState queries the consensus state associated with the
   * connection.
   */
  connectionConsensusState(request: QueryConnectionConsensusStateRequest): Promise<QueryConnectionConsensusStateResponse>;
  /** ConnectionParams queries all parameters of the ibc connection submodule. */
  connectionParams(request?: QueryConnectionParamsRequest): Promise<QueryConnectionParamsResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.connection = this.connection.bind(this);
    this.connections = this.connections.bind(this);
    this.clientConnections = this.clientConnections.bind(this);
    this.connectionClientState = this.connectionClientState.bind(this);
    this.connectionConsensusState = this.connectionConsensusState.bind(this);
    this.connectionParams = this.connectionParams.bind(this);
  }
  connection(request: QueryConnectionRequest): Promise<QueryConnectionResponse> {
    const data = QueryConnectionRequest.encode(request).finish();
    const promise = this.rpc.request("ibc.core.connection.v1.Query", "Connection", data);
    return promise.then(data => QueryConnectionResponse.decode(new BinaryReader(data)));
  }
  connections(request: QueryConnectionsRequest = {
    pagination: undefined
  }): Promise<QueryConnectionsResponse> {
    const data = QueryConnectionsRequest.encode(request).finish();
    const promise = this.rpc.request("ibc.core.connection.v1.Query", "Connections", data);
    return promise.then(data => QueryConnectionsResponse.decode(new BinaryReader(data)));
  }
  clientConnections(request: QueryClientConnectionsRequest): Promise<QueryClientConnectionsResponse> {
    const data = QueryClientConnectionsRequest.encode(request).finish();
    const promise = this.rpc.request("ibc.core.connection.v1.Query", "ClientConnections", data);
    return promise.then(data => QueryClientConnectionsResponse.decode(new BinaryReader(data)));
  }
  connectionClientState(request: QueryConnectionClientStateRequest): Promise<QueryConnectionClientStateResponse> {
    const data = QueryConnectionClientStateRequest.encode(request).finish();
    const promise = this.rpc.request("ibc.core.connection.v1.Query", "ConnectionClientState", data);
    return promise.then(data => QueryConnectionClientStateResponse.decode(new BinaryReader(data)));
  }
  connectionConsensusState(request: QueryConnectionConsensusStateRequest): Promise<QueryConnectionConsensusStateResponse> {
    const data = QueryConnectionConsensusStateRequest.encode(request).finish();
    const promise = this.rpc.request("ibc.core.connection.v1.Query", "ConnectionConsensusState", data);
    return promise.then(data => QueryConnectionConsensusStateResponse.decode(new BinaryReader(data)));
  }
  connectionParams(request: QueryConnectionParamsRequest = {}): Promise<QueryConnectionParamsResponse> {
    const data = QueryConnectionParamsRequest.encode(request).finish();
    const promise = this.rpc.request("ibc.core.connection.v1.Query", "ConnectionParams", data);
    return promise.then(data => QueryConnectionParamsResponse.decode(new BinaryReader(data)));
  }
}
export const createRpcQueryExtension = (base: QueryClient) => {
  const rpc = createProtobufRpcClient(base);
  const queryService = new QueryClientImpl(rpc);
  return {
    connection(request: QueryConnectionRequest): Promise<QueryConnectionResponse> {
      return queryService.connection(request);
    },
    connections(request?: QueryConnectionsRequest): Promise<QueryConnectionsResponse> {
      return queryService.connections(request);
    },
    clientConnections(request: QueryClientConnectionsRequest): Promise<QueryClientConnectionsResponse> {
      return queryService.clientConnections(request);
    },
    connectionClientState(request: QueryConnectionClientStateRequest): Promise<QueryConnectionClientStateResponse> {
      return queryService.connectionClientState(request);
    },
    connectionConsensusState(request: QueryConnectionConsensusStateRequest): Promise<QueryConnectionConsensusStateResponse> {
      return queryService.connectionConsensusState(request);
    },
    connectionParams(request?: QueryConnectionParamsRequest): Promise<QueryConnectionParamsResponse> {
      return queryService.connectionParams(request);
    }
  };
};
export interface UseConnectionQuery<TData> extends ReactQueryParams<QueryConnectionResponse, TData> {
  request: QueryConnectionRequest;
}
export interface UseConnectionsQuery<TData> extends ReactQueryParams<QueryConnectionsResponse, TData> {
  request?: QueryConnectionsRequest;
}
export interface UseClientConnectionsQuery<TData> extends ReactQueryParams<QueryClientConnectionsResponse, TData> {
  request: QueryClientConnectionsRequest;
}
export interface UseConnectionClientStateQuery<TData> extends ReactQueryParams<QueryConnectionClientStateResponse, TData> {
  request: QueryConnectionClientStateRequest;
}
export interface UseConnectionConsensusStateQuery<TData> extends ReactQueryParams<QueryConnectionConsensusStateResponse, TData> {
  request: QueryConnectionConsensusStateRequest;
}
export interface UseConnectionParamsQuery<TData> extends ReactQueryParams<QueryConnectionParamsResponse, TData> {
  request?: QueryConnectionParamsRequest;
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
  const useConnection = <TData = QueryConnectionResponse,>({
    request,
    options
  }: UseConnectionQuery<TData>) => {
    return useQuery<QueryConnectionResponse, Error, TData>(["connectionQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.connection(request);
    }, options);
  };
  const useConnections = <TData = QueryConnectionsResponse,>({
    request,
    options
  }: UseConnectionsQuery<TData>) => {
    return useQuery<QueryConnectionsResponse, Error, TData>(["connectionsQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.connections(request);
    }, options);
  };
  const useClientConnections = <TData = QueryClientConnectionsResponse,>({
    request,
    options
  }: UseClientConnectionsQuery<TData>) => {
    return useQuery<QueryClientConnectionsResponse, Error, TData>(["clientConnectionsQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.clientConnections(request);
    }, options);
  };
  const useConnectionClientState = <TData = QueryConnectionClientStateResponse,>({
    request,
    options
  }: UseConnectionClientStateQuery<TData>) => {
    return useQuery<QueryConnectionClientStateResponse, Error, TData>(["connectionClientStateQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.connectionClientState(request);
    }, options);
  };
  const useConnectionConsensusState = <TData = QueryConnectionConsensusStateResponse,>({
    request,
    options
  }: UseConnectionConsensusStateQuery<TData>) => {
    return useQuery<QueryConnectionConsensusStateResponse, Error, TData>(["connectionConsensusStateQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.connectionConsensusState(request);
    }, options);
  };
  const useConnectionParams = <TData = QueryConnectionParamsResponse,>({
    request,
    options
  }: UseConnectionParamsQuery<TData>) => {
    return useQuery<QueryConnectionParamsResponse, Error, TData>(["connectionParamsQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.connectionParams(request);
    }, options);
  };
  return {
    /** Connection queries an IBC connection end. */useConnection,
    /** Connections queries all the IBC connections of a chain. */useConnections,
    /**
     * ClientConnections queries the connection paths associated with a client
     * state.
     */
    useClientConnections,
    /**
     * ConnectionClientState queries the client state associated with the
     * connection.
     */
    useConnectionClientState,
    /**
     * ConnectionConsensusState queries the consensus state associated with the
     * connection.
     */
    useConnectionConsensusState,
    /** ConnectionParams queries all parameters of the ibc connection submodule. */useConnectionParams
  };
};