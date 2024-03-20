/**
* This file and any referenced files were automatically generated by @cosmology/telescope@1.5.0
* DO NOT MODIFY BY HAND. Instead, download the latest proto files for your chain
* and run the transpile command or yarn proto command to regenerate this bundle.
*/

import { getRpcClient } from './extern'
import {
    useQuery,
    UseQueryOptions,
} from '@tanstack/react-query';

import { HttpEndpoint, ProtobufRpcClient } from '@cosmjs/stargate';
import { CometClient, connectComet, Tendermint34Client, Tendermint37Client } from '@cosmjs/tendermint-rpc';

export interface ReactQueryParams<TResponse, TData = TResponse> {
    options?: UseQueryOptions<TResponse, Error, TData>;
}

export interface UseRpcClientQuery<TData> extends ReactQueryParams<ProtobufRpcClient, TData> {
    rpcEndpoint: string | HttpEndpoint;
}

export interface UseRpcEndpointQuery<TData> extends ReactQueryParams<string | HttpEndpoint, TData> {
    getter: () => Promise<string | HttpEndpoint>;
}

export const useRpcEndpoint = <TData = string | HttpEndpoint>({
    getter,
    options,
}: UseRpcEndpointQuery<TData>) => {
    return useQuery<string | HttpEndpoint, Error, TData>(['rpcEndpoint', getter], async () => {
        return await getter();
    }, options);
};

export const useRpcClient = <TData = ProtobufRpcClient>({
    rpcEndpoint,
    options,
}: UseRpcClientQuery<TData>) => {
    return useQuery<ProtobufRpcClient, Error, TData>(['rpcClient', rpcEndpoint], async () => {
        return await getRpcClient(rpcEndpoint);
    }, options);
};

interface UseTendermintClient extends ReactQueryParams<Tendermint34Client | Tendermint37Client | CometClient> {
    rpcEndpoint: string | HttpEndpoint;
}

/**
 * Hook that uses react-query to cache a connected tendermint client.
 */
export const useTendermintClient = ({
    rpcEndpoint,
    options,
}: UseTendermintClient) => {
    const { data: client } = useQuery<Tendermint34Client | Tendermint37Client | CometClient, Error, Tendermint34Client | Tendermint37Client | CometClient>(
        ['client', 'tendermint', rpcEndpoint],
        () => connectComet(rpcEndpoint),
        {
            // allow overriding
            onError: (e) => {
                throw new Error(`Failed to connect to ${rpcEndpoint}` + '\n' + e)
            },
            ...options,
        }
    )
    return { client }
};
