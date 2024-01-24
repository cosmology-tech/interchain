import { ProtobufRpcClient } from "@cosmjs/stargate";
import * as _CosmosAccountsV1Queryrpc from "./cosmos/accounts/v1/query.rpc.Query";
import * as _CosmosAppV1alpha1Queryrpc from "./cosmos/app/v1alpha1/query.rpc.Query";
import * as _CosmosAuthV1beta1Queryrpc from "./cosmos/auth/v1beta1/query.rpc.Query";
import * as _CosmosAuthzV1beta1Queryrpc from "./cosmos/authz/v1beta1/query.rpc.Query";
import * as _CosmosBankV1beta1Queryrpc from "./cosmos/bank/v1beta1/query.rpc.Query";
import * as _CosmosBaseNodeV1beta1Queryrpc from "./cosmos/base/node/v1beta1/query.rpc.Service";
import * as _CosmosBaseTendermintV1beta1Queryrpc from "./cosmos/base/tendermint/v1beta1/query.rpc.Service";
import * as _CosmosCircuitV1Queryrpc from "./cosmos/circuit/v1/query.rpc.Query";
import * as _CosmosConsensusV1Queryrpc from "./cosmos/consensus/v1/query.rpc.Query";
import * as _CosmosDistributionV1beta1Queryrpc from "./cosmos/distribution/v1beta1/query.rpc.Query";
import * as _CosmosEvidenceV1beta1Queryrpc from "./cosmos/evidence/v1beta1/query.rpc.Query";
import * as _CosmosFeegrantV1beta1Queryrpc from "./cosmos/feegrant/v1beta1/query.rpc.Query";
import * as _CosmosGovV1Queryrpc from "./cosmos/gov/v1/query.rpc.Query";
import * as _CosmosGovV1beta1Queryrpc from "./cosmos/gov/v1beta1/query.rpc.Query";
import * as _CosmosGroupV1Queryrpc from "./cosmos/group/v1/query.rpc.Query";
import * as _CosmosMintV1beta1Queryrpc from "./cosmos/mint/v1beta1/query.rpc.Query";
import * as _CosmosNftV1beta1Queryrpc from "./cosmos/nft/v1beta1/query.rpc.Query";
import * as _CosmosOrmQueryV1alpha1Queryrpc from "./cosmos/orm/query/v1alpha1/query.rpc.Query";
import * as _CosmosParamsV1beta1Queryrpc from "./cosmos/params/v1beta1/query.rpc.Query";
import * as _CosmosSlashingV1beta1Queryrpc from "./cosmos/slashing/v1beta1/query.rpc.Query";
import * as _CosmosStakingV1beta1Queryrpc from "./cosmos/staking/v1beta1/query.rpc.Query";
import * as _CosmosTxV1beta1Servicerpc from "./cosmos/tx/v1beta1/service.rpc.Service";
import * as _CosmosUpgradeV1beta1Queryrpc from "./cosmos/upgrade/v1beta1/query.rpc.Query";
import * as _IbcApplicationsFeeV1Queryrpc from "./ibc/applications/fee/v1/query.rpc.Query";
import * as _IbcApplicationsInterchainAccountsControllerV1Queryrpc from "./ibc/applications/interchain_accounts/controller/v1/query.rpc.Query";
import * as _IbcApplicationsInterchainAccountsHostV1Queryrpc from "./ibc/applications/interchain_accounts/host/v1/query.rpc.Query";
import * as _IbcApplicationsTransferV1Queryrpc from "./ibc/applications/transfer/v1/query.rpc.Query";
import * as _IbcCoreChannelV1Queryrpc from "./ibc/core/channel/v1/query.rpc.Query";
import * as _IbcCoreClientV1Queryrpc from "./ibc/core/client/v1/query.rpc.Query";
import * as _IbcCoreConnectionV1Queryrpc from "./ibc/core/connection/v1/query.rpc.Query";
import * as _CosmwasmWasmV1Queryrpc from "./cosmwasm/wasm/v1/query.rpc.Query";
export const createRpcQueryHooks = ({
  rpc
}: {
  rpc: ProtobufRpcClient | undefined;
}) => {
  return {
    cosmos: {
      accounts: {
        v1: _CosmosAccountsV1Queryrpc.createRpcQueryHooks(rpc)
      },
      app: {
        v1alpha1: _CosmosAppV1alpha1Queryrpc.createRpcQueryHooks(rpc)
      },
      auth: {
        v1beta1: _CosmosAuthV1beta1Queryrpc.createRpcQueryHooks(rpc)
      },
      authz: {
        v1beta1: _CosmosAuthzV1beta1Queryrpc.createRpcQueryHooks(rpc)
      },
      bank: {
        v1beta1: _CosmosBankV1beta1Queryrpc.createRpcQueryHooks(rpc)
      },
      base: {
        node: {
          v1beta1: _CosmosBaseNodeV1beta1Queryrpc.createRpcQueryHooks(rpc)
        },
        tendermint: {
          v1beta1: _CosmosBaseTendermintV1beta1Queryrpc.createRpcQueryHooks(rpc)
        }
      },
      circuit: {
        v1: _CosmosCircuitV1Queryrpc.createRpcQueryHooks(rpc)
      },
      consensus: {
        v1: _CosmosConsensusV1Queryrpc.createRpcQueryHooks(rpc)
      },
      distribution: {
        v1beta1: _CosmosDistributionV1beta1Queryrpc.createRpcQueryHooks(rpc)
      },
      evidence: {
        v1beta1: _CosmosEvidenceV1beta1Queryrpc.createRpcQueryHooks(rpc)
      },
      feegrant: {
        v1beta1: _CosmosFeegrantV1beta1Queryrpc.createRpcQueryHooks(rpc)
      },
      gov: {
        v1: _CosmosGovV1Queryrpc.createRpcQueryHooks(rpc),
        v1beta1: _CosmosGovV1beta1Queryrpc.createRpcQueryHooks(rpc)
      },
      group: {
        v1: _CosmosGroupV1Queryrpc.createRpcQueryHooks(rpc)
      },
      mint: {
        v1beta1: _CosmosMintV1beta1Queryrpc.createRpcQueryHooks(rpc)
      },
      nft: {
        v1beta1: _CosmosNftV1beta1Queryrpc.createRpcQueryHooks(rpc)
      },
      orm: {
        query: {
          v1alpha1: _CosmosOrmQueryV1alpha1Queryrpc.createRpcQueryHooks(rpc)
        }
      },
      params: {
        v1beta1: _CosmosParamsV1beta1Queryrpc.createRpcQueryHooks(rpc)
      },
      slashing: {
        v1beta1: _CosmosSlashingV1beta1Queryrpc.createRpcQueryHooks(rpc)
      },
      staking: {
        v1beta1: _CosmosStakingV1beta1Queryrpc.createRpcQueryHooks(rpc)
      },
      tx: {
        v1beta1: _CosmosTxV1beta1Servicerpc.createRpcQueryHooks(rpc)
      },
      upgrade: {
        v1beta1: _CosmosUpgradeV1beta1Queryrpc.createRpcQueryHooks(rpc)
      }
    },
    ibc: {
      applications: {
        fee: {
          v1: _IbcApplicationsFeeV1Queryrpc.createRpcQueryHooks(rpc)
        },
        interchain_accounts: {
          controller: {
            v1: _IbcApplicationsInterchainAccountsControllerV1Queryrpc.createRpcQueryHooks(rpc)
          },
          host: {
            v1: _IbcApplicationsInterchainAccountsHostV1Queryrpc.createRpcQueryHooks(rpc)
          }
        },
        transfer: {
          v1: _IbcApplicationsTransferV1Queryrpc.createRpcQueryHooks(rpc)
        }
      },
      core: {
        channel: {
          v1: _IbcCoreChannelV1Queryrpc.createRpcQueryHooks(rpc)
        },
        client: {
          v1: _IbcCoreClientV1Queryrpc.createRpcQueryHooks(rpc)
        },
        connection: {
          v1: _IbcCoreConnectionV1Queryrpc.createRpcQueryHooks(rpc)
        }
      }
    },
    cosmwasm: {
      wasm: {
        v1: _CosmwasmWasmV1Queryrpc.createRpcQueryHooks(rpc)
      }
    },
    /**
     * cosmos.accounts.v1.useAccountQuery
     * AccountQuery runs an account query.
     */
    useAccountQuery: _CosmosAccountsV1Queryrpc.createRpcQueryHooks(rpc).useAccountQuery,
    /**
     * cosmos.app.v1alpha1.useConfig
     * Config returns the current app config.
     */
    useCosmosAppConfig: _CosmosAppV1alpha1Queryrpc.createRpcQueryHooks(rpc).useConfig,
    /**
     * cosmos.auth.v1beta1.useAccounts
     * Accounts returns all the existing accounts.
     * 
     * When called from another module, this query might consume a high amount of
     * gas if the pagination field is incorrectly set.
     * 
     * Since: cosmos-sdk 0.43
     */
    useCosmosAuthAccounts: _CosmosAuthV1beta1Queryrpc.createRpcQueryHooks(rpc).useAccounts,
    /**
     * cosmos.auth.v1beta1.useAccount
     * Account returns account details based on address.
     */
    useCosmosAuthAccount: _CosmosAuthV1beta1Queryrpc.createRpcQueryHooks(rpc).useAccount,
    /**
     * cosmos.auth.v1beta1.useAccountAddressByID
     * AccountAddressByID returns account address based on account number.
     * 
     * Since: cosmos-sdk 0.46.2
     */
    useAccountAddressByID: _CosmosAuthV1beta1Queryrpc.createRpcQueryHooks(rpc).useAccountAddressByID,
    /**
     * cosmos.auth.v1beta1.useParams
     * Params queries all parameters.
     */
    useParams: _CosmosAuthV1beta1Queryrpc.createRpcQueryHooks(rpc).useParams,
    /**
     * cosmos.auth.v1beta1.useModuleAccounts
     * ModuleAccounts returns all the existing module accounts.
     * 
     * Since: cosmos-sdk 0.46
     */
    useModuleAccounts: _CosmosAuthV1beta1Queryrpc.createRpcQueryHooks(rpc).useModuleAccounts,
    /**
     * cosmos.auth.v1beta1.useModuleAccountByName
     * ModuleAccountByName returns the module account info by module name
     */
    useModuleAccountByName: _CosmosAuthV1beta1Queryrpc.createRpcQueryHooks(rpc).useModuleAccountByName,
    /**
     * cosmos.auth.v1beta1.useBech32Prefix
     * Bech32Prefix queries bech32Prefix
     * 
     * Since: cosmos-sdk 0.46
     */
    useBech32Prefix: _CosmosAuthV1beta1Queryrpc.createRpcQueryHooks(rpc).useBech32Prefix,
    /**
     * cosmos.auth.v1beta1.useAddressBytesToString
     * AddressBytesToString converts Account Address bytes to string
     * 
     * Since: cosmos-sdk 0.46
     */
    useAddressBytesToString: _CosmosAuthV1beta1Queryrpc.createRpcQueryHooks(rpc).useAddressBytesToString,
    /**
     * cosmos.auth.v1beta1.useAddressStringToBytes
     * AddressStringToBytes converts Address string to bytes
     * 
     * Since: cosmos-sdk 0.46
     */
    useAddressStringToBytes: _CosmosAuthV1beta1Queryrpc.createRpcQueryHooks(rpc).useAddressStringToBytes,
    /**
     * cosmos.auth.v1beta1.useAccountInfo
     * AccountInfo queries account info which is common to all account types.
     * 
     * Since: cosmos-sdk 0.47
     */
    useAccountInfo: _CosmosAuthV1beta1Queryrpc.createRpcQueryHooks(rpc).useAccountInfo,
    /**
     * cosmos.authz.v1beta1.useGrants
     * Returns list of `Authorization`, granted to the grantee by the granter.
     */
    useGrants: _CosmosAuthzV1beta1Queryrpc.createRpcQueryHooks(rpc).useGrants,
    /**
     * cosmos.authz.v1beta1.useGranterGrants
     * GranterGrants returns list of `GrantAuthorization`, granted by granter.
     * 
     * Since: cosmos-sdk 0.46
     */
    useGranterGrants: _CosmosAuthzV1beta1Queryrpc.createRpcQueryHooks(rpc).useGranterGrants,
    /**
     * cosmos.authz.v1beta1.useGranteeGrants
     * GranteeGrants returns a list of `GrantAuthorization` by grantee.
     * 
     * Since: cosmos-sdk 0.46
     */
    useGranteeGrants: _CosmosAuthzV1beta1Queryrpc.createRpcQueryHooks(rpc).useGranteeGrants,
    /**
     * cosmos.bank.v1beta1.useBalance
     * Balance queries the balance of a single coin for a single account.
     */
    useBankBalance: _CosmosBankV1beta1Queryrpc.createRpcQueryHooks(rpc).useBalance,
    /**
     * cosmos.bank.v1beta1.useAllBalances
     * AllBalances queries the balance of all coins for a single account.
     * 
     * When called from another module, this query might consume a high amount of
     * gas if the pagination field is incorrectly set.
     */
    useAllBalances: _CosmosBankV1beta1Queryrpc.createRpcQueryHooks(rpc).useAllBalances,
    /**
     * cosmos.bank.v1beta1.useSpendableBalances
     * SpendableBalances queries the spendable balance of all coins for a single
     * account.
     * 
     * When called from another module, this query might consume a high amount of
     * gas if the pagination field is incorrectly set.
     * 
     * Since: cosmos-sdk 0.46
     */
    useSpendableBalances: _CosmosBankV1beta1Queryrpc.createRpcQueryHooks(rpc).useSpendableBalances,
    /**
     * cosmos.bank.v1beta1.useSpendableBalanceByDenom
     * SpendableBalanceByDenom queries the spendable balance of a single denom for
     * a single account.
     * 
     * When called from another module, this query might consume a high amount of
     * gas if the pagination field is incorrectly set.
     * 
     * Since: cosmos-sdk 0.47
     */
    useSpendableBalanceByDenom: _CosmosBankV1beta1Queryrpc.createRpcQueryHooks(rpc).useSpendableBalanceByDenom,
    /**
     * cosmos.bank.v1beta1.useTotalSupply
     * TotalSupply queries the total supply of all coins.
     * 
     * When called from another module, this query might consume a high amount of
     * gas if the pagination field is incorrectly set.
     */
    useTotalSupply: _CosmosBankV1beta1Queryrpc.createRpcQueryHooks(rpc).useTotalSupply,
    /**
     * cosmos.bank.v1beta1.useSupplyOf
     * SupplyOf queries the supply of a single coin.
     * 
     * When called from another module, this query might consume a high amount of
     * gas if the pagination field is incorrectly set.
     */
    useSupplyOf: _CosmosBankV1beta1Queryrpc.createRpcQueryHooks(rpc).useSupplyOf,
    /**
     * cosmos.bank.v1beta1.useParams
     * Params queries the parameters of x/bank module.
     */
    useCosmosBankV1beta1Params: _CosmosBankV1beta1Queryrpc.createRpcQueryHooks(rpc).useParams,
    /**
     * cosmos.bank.v1beta1.useDenomMetadata
     * DenomsMetadata queries the client metadata of a given coin denomination.
     */
    useDenomMetadata: _CosmosBankV1beta1Queryrpc.createRpcQueryHooks(rpc).useDenomMetadata,
    /**
     * cosmos.bank.v1beta1.useDenomMetadataByQueryString
     * DenomsMetadata queries the client metadata of a given coin denomination.
     */
    useDenomMetadataByQueryString: _CosmosBankV1beta1Queryrpc.createRpcQueryHooks(rpc).useDenomMetadataByQueryString,
    /**
     * cosmos.bank.v1beta1.useDenomsMetadata
     * DenomsMetadata queries the client metadata for all registered coin
     * denominations.
     */
    useDenomsMetadata: _CosmosBankV1beta1Queryrpc.createRpcQueryHooks(rpc).useDenomsMetadata,
    /**
     * cosmos.bank.v1beta1.useDenomOwners
     * DenomOwners queries for all account addresses that own a particular token
     * denomination.
     * 
     * When called from another module, this query might consume a high amount of
     * gas if the pagination field is incorrectly set.
     * 
     * Since: cosmos-sdk 0.46
     */
    useDenomOwners: _CosmosBankV1beta1Queryrpc.createRpcQueryHooks(rpc).useDenomOwners,
    /**
     * cosmos.bank.v1beta1.useSendEnabled
     * SendEnabled queries for SendEnabled entries.
     * 
     * This query only returns denominations that have specific SendEnabled settings.
     * Any denomination that does not have a specific setting will use the default
     * params.default_send_enabled, and will not be returned by this query.
     * 
     * Since: cosmos-sdk 0.47
     */
    useSendEnabled: _CosmosBankV1beta1Queryrpc.createRpcQueryHooks(rpc).useSendEnabled,
    /**
     * cosmos.base.node.v1beta1.useConfig
     * Config queries for the operator configuration.
     */
    useCosmosBaseNodeConfig: _CosmosBaseNodeV1beta1Queryrpc.createRpcQueryHooks(rpc).useConfig,
    /**
     * cosmos.base.node.v1beta1.useStatus
     * Status queries for the node status.
     */
    useStatus: _CosmosBaseNodeV1beta1Queryrpc.createRpcQueryHooks(rpc).useStatus,
    /**
     * cosmos.base.tendermint.v1beta1.useGetNodeInfo
     * GetNodeInfo queries the current node info.
     */
    useGetNodeInfo: _CosmosBaseTendermintV1beta1Queryrpc.createRpcQueryHooks(rpc).useGetNodeInfo,
    /**
     * cosmos.base.tendermint.v1beta1.useGetSyncing
     * GetSyncing queries node syncing.
     */
    useGetSyncing: _CosmosBaseTendermintV1beta1Queryrpc.createRpcQueryHooks(rpc).useGetSyncing,
    /**
     * cosmos.base.tendermint.v1beta1.useGetLatestBlock
     * GetLatestBlock returns the latest block.
     */
    useGetLatestBlock: _CosmosBaseTendermintV1beta1Queryrpc.createRpcQueryHooks(rpc).useGetLatestBlock,
    /**
     * cosmos.base.tendermint.v1beta1.useGetBlockByHeight
     * GetBlockByHeight queries block for given height.
     */
    useGetBlockByHeight: _CosmosBaseTendermintV1beta1Queryrpc.createRpcQueryHooks(rpc).useGetBlockByHeight,
    /**
     * cosmos.base.tendermint.v1beta1.useGetLatestValidatorSet
     * GetLatestValidatorSet queries latest validator-set.
     */
    useGetLatestValidatorSet: _CosmosBaseTendermintV1beta1Queryrpc.createRpcQueryHooks(rpc).useGetLatestValidatorSet,
    /**
     * cosmos.base.tendermint.v1beta1.useGetValidatorSetByHeight
     * GetValidatorSetByHeight queries validator-set at a given height.
     */
    useGetValidatorSetByHeight: _CosmosBaseTendermintV1beta1Queryrpc.createRpcQueryHooks(rpc).useGetValidatorSetByHeight,
    /**
     * cosmos.base.tendermint.v1beta1.useABCIQuery
     * ABCIQuery defines a query handler that supports ABCI queries directly to the
     * application, bypassing Tendermint completely. The ABCI query must contain
     * a valid and supported path, including app, custom, p2p, and store.
     * 
     * Since: cosmos-sdk 0.46
     */
    useABCIQuery: _CosmosBaseTendermintV1beta1Queryrpc.createRpcQueryHooks(rpc).useABCIQuery,
    /**
     * cosmos.circuit.v1.useAccount
     * Account returns account permissions.
     */
    useCosmosCircuitAccount: _CosmosCircuitV1Queryrpc.createRpcQueryHooks(rpc).useAccount,
    /**
     * cosmos.circuit.v1.useAccounts
     * Account returns account permissions.
     */
    useCosmosCircuitAccounts: _CosmosCircuitV1Queryrpc.createRpcQueryHooks(rpc).useAccounts,
    /**
     * cosmos.circuit.v1.useDisabledList
     * DisabledList returns a list of disabled message urls
     */
    useDisabledList: _CosmosCircuitV1Queryrpc.createRpcQueryHooks(rpc).useDisabledList,
    /**
     * cosmos.consensus.v1.useParams
     * Params queries the parameters of x/consensus module.
     */
    useCosmosConsensusV1Params: _CosmosConsensusV1Queryrpc.createRpcQueryHooks(rpc).useParams,
    /**
     * cosmos.distribution.v1beta1.useParams
     * Params queries params of the distribution module.
     */
    useCosmosDistributionV1beta1Params: _CosmosDistributionV1beta1Queryrpc.createRpcQueryHooks(rpc).useParams,
    /**
     * cosmos.distribution.v1beta1.useValidatorDistributionInfo
     * ValidatorDistributionInfo queries validator commission and self-delegation rewards for validator
     */
    useValidatorDistributionInfo: _CosmosDistributionV1beta1Queryrpc.createRpcQueryHooks(rpc).useValidatorDistributionInfo,
    /**
     * cosmos.distribution.v1beta1.useValidatorOutstandingRewards
     * ValidatorOutstandingRewards queries rewards of a validator address.
     */
    useValidatorOutstandingRewards: _CosmosDistributionV1beta1Queryrpc.createRpcQueryHooks(rpc).useValidatorOutstandingRewards,
    /**
     * cosmos.distribution.v1beta1.useValidatorCommission
     * ValidatorCommission queries accumulated commission for a validator.
     */
    useValidatorCommission: _CosmosDistributionV1beta1Queryrpc.createRpcQueryHooks(rpc).useValidatorCommission,
    /**
     * cosmos.distribution.v1beta1.useValidatorSlashes
     * ValidatorSlashes queries slash events of a validator.
     */
    useValidatorSlashes: _CosmosDistributionV1beta1Queryrpc.createRpcQueryHooks(rpc).useValidatorSlashes,
    /**
     * cosmos.distribution.v1beta1.useDelegationRewards
     * DelegationRewards queries the total rewards accrued by a delegation.
     */
    useDelegationRewards: _CosmosDistributionV1beta1Queryrpc.createRpcQueryHooks(rpc).useDelegationRewards,
    /**
     * cosmos.distribution.v1beta1.useDelegationTotalRewards
     * DelegationTotalRewards queries the total rewards accrued by each
     * validator.
     */
    useDelegationTotalRewards: _CosmosDistributionV1beta1Queryrpc.createRpcQueryHooks(rpc).useDelegationTotalRewards,
    /**
     * cosmos.distribution.v1beta1.useDelegatorValidators
     * DelegatorValidators queries the validators of a delegator.
     */
    useCosmosDistDelegatorValidators: _CosmosDistributionV1beta1Queryrpc.createRpcQueryHooks(rpc).useDelegatorValidators,
    /**
     * cosmos.distribution.v1beta1.useDelegatorWithdrawAddress
     * DelegatorWithdrawAddress queries withdraw address of a delegator.
     */
    useDelegatorWithdrawAddress: _CosmosDistributionV1beta1Queryrpc.createRpcQueryHooks(rpc).useDelegatorWithdrawAddress,
    /**
     * cosmos.distribution.v1beta1.useCommunityPool
     * CommunityPool queries the community pool coins.
     */
    useCommunityPool: _CosmosDistributionV1beta1Queryrpc.createRpcQueryHooks(rpc).useCommunityPool,
    /**
     * cosmos.evidence.v1beta1.useEvidence
     * Evidence queries evidence based on evidence hash.
     */
    useEvidence: _CosmosEvidenceV1beta1Queryrpc.createRpcQueryHooks(rpc).useEvidence,
    /**
     * cosmos.evidence.v1beta1.useAllEvidence
     * AllEvidence queries all evidence.
     */
    useAllEvidence: _CosmosEvidenceV1beta1Queryrpc.createRpcQueryHooks(rpc).useAllEvidence,
    /**
     * cosmos.feegrant.v1beta1.useAllowance
     * Allowance returns granted allwance to the grantee by the granter.
     */
    useAllowance: _CosmosFeegrantV1beta1Queryrpc.createRpcQueryHooks(rpc).useAllowance,
    /**
     * cosmos.feegrant.v1beta1.useAllowances
     * Allowances returns all the grants for the given grantee address.
     */
    useAllowances: _CosmosFeegrantV1beta1Queryrpc.createRpcQueryHooks(rpc).useAllowances,
    /**
     * cosmos.feegrant.v1beta1.useAllowancesByGranter
     * AllowancesByGranter returns all the grants given by an address
     * 
     * Since: cosmos-sdk 0.46
     */
    useAllowancesByGranter: _CosmosFeegrantV1beta1Queryrpc.createRpcQueryHooks(rpc).useAllowancesByGranter,
    /**
     * cosmos.gov.v1.useConstitution
     * Constitution queries the chain's constitution.
     */
    useConstitution: _CosmosGovV1Queryrpc.createRpcQueryHooks(rpc).useConstitution,
    /**
     * cosmos.gov.v1.useProposal
     * Proposal queries proposal details based on ProposalID.
     */
    useProposal: _CosmosGovV1Queryrpc.createRpcQueryHooks(rpc).useProposal,
    /**
     * cosmos.gov.v1.useProposals
     * Proposals queries all proposals based on given status.
     */
    useProposals: _CosmosGovV1Queryrpc.createRpcQueryHooks(rpc).useProposals,
    /**
     * cosmos.gov.v1.useVote
     * Vote queries voted information based on proposalID, voterAddr.
     */
    useVote: _CosmosGovV1Queryrpc.createRpcQueryHooks(rpc).useVote,
    /**
     * cosmos.gov.v1.useVotes
     * Votes queries votes of a given proposal.
     */
    useVotes: _CosmosGovV1Queryrpc.createRpcQueryHooks(rpc).useVotes,
    /**
     * cosmos.gov.v1.useParams
     * Params queries all parameters of the gov module.
     */
    useCosmosGovV1Params: _CosmosGovV1Queryrpc.createRpcQueryHooks(rpc).useParams,
    /**
     * cosmos.gov.v1.useDeposit
     * Deposit queries single deposit information based on proposalID, depositAddr.
     */
    useDeposit: _CosmosGovV1Queryrpc.createRpcQueryHooks(rpc).useDeposit,
    /**
     * cosmos.gov.v1.useDeposits
     * Deposits queries all deposits of a single proposal.
     */
    useDeposits: _CosmosGovV1Queryrpc.createRpcQueryHooks(rpc).useDeposits,
    /**
     * cosmos.gov.v1.useTallyResult
     * TallyResult queries the tally of a proposal vote.
     */
    useTallyResult: _CosmosGovV1Queryrpc.createRpcQueryHooks(rpc).useTallyResult,
    /**
     * cosmos.gov.v1beta1.useProposal
     * Proposal queries proposal details based on ProposalID.
     */
    useCosmosGovV1beta1Proposal: _CosmosGovV1beta1Queryrpc.createRpcQueryHooks(rpc).useProposal,
    /**
     * cosmos.gov.v1beta1.useProposals
     * Proposals queries all proposals based on given status.
     */
    useCosmosGovV1beta1Proposals: _CosmosGovV1beta1Queryrpc.createRpcQueryHooks(rpc).useProposals,
    /**
     * cosmos.gov.v1beta1.useVote
     * Vote queries voted information based on proposalID, voterAddr.
     * Due to how we handle state, this query would error for proposals that has already been finished.
     */
    useCosmosGovV1beta1Vote: _CosmosGovV1beta1Queryrpc.createRpcQueryHooks(rpc).useVote,
    /**
     * cosmos.gov.v1beta1.useVotes
     * Votes queries votes of a given proposal.
     */
    useCosmosGovV1beta1Votes: _CosmosGovV1beta1Queryrpc.createRpcQueryHooks(rpc).useVotes,
    /**
     * cosmos.gov.v1beta1.useParams
     * Params queries all parameters of the gov module.
     */
    useCosmosGovV1beta1Params: _CosmosGovV1beta1Queryrpc.createRpcQueryHooks(rpc).useParams,
    /**
     * cosmos.gov.v1beta1.useDeposit
     * Deposit queries single deposit information based on proposalID, depositor address.
     */
    useCosmosGovV1beta1Deposit: _CosmosGovV1beta1Queryrpc.createRpcQueryHooks(rpc).useDeposit,
    /**
     * cosmos.gov.v1beta1.useDeposits
     * Deposits queries all deposits of a single proposal.
     */
    useCosmosGovV1beta1Deposits: _CosmosGovV1beta1Queryrpc.createRpcQueryHooks(rpc).useDeposits,
    /**
     * cosmos.gov.v1beta1.useTallyResult
     * TallyResult queries the tally of a proposal vote.
     */
    useCosmosGovV1beta1TallyResult: _CosmosGovV1beta1Queryrpc.createRpcQueryHooks(rpc).useTallyResult,
    /**
     * cosmos.group.v1.useGroupInfo
     * GroupInfo queries group info based on group id.
     */
    useGroupInfo: _CosmosGroupV1Queryrpc.createRpcQueryHooks(rpc).useGroupInfo,
    /**
     * cosmos.group.v1.useGroupPolicyInfo
     * GroupPolicyInfo queries group policy info based on account address of group policy.
     */
    useGroupPolicyInfo: _CosmosGroupV1Queryrpc.createRpcQueryHooks(rpc).useGroupPolicyInfo,
    /**
     * cosmos.group.v1.useGroupMembers
     * GroupMembers queries members of a group by group id.
     */
    useGroupMembers: _CosmosGroupV1Queryrpc.createRpcQueryHooks(rpc).useGroupMembers,
    /**
     * cosmos.group.v1.useGroupsByAdmin
     * GroupsByAdmin queries groups by admin address.
     */
    useGroupsByAdmin: _CosmosGroupV1Queryrpc.createRpcQueryHooks(rpc).useGroupsByAdmin,
    /**
     * cosmos.group.v1.useGroupPoliciesByGroup
     * GroupPoliciesByGroup queries group policies by group id.
     */
    useGroupPoliciesByGroup: _CosmosGroupV1Queryrpc.createRpcQueryHooks(rpc).useGroupPoliciesByGroup,
    /**
     * cosmos.group.v1.useGroupPoliciesByAdmin
     * GroupPoliciesByAdmin queries group policies by admin address.
     */
    useGroupPoliciesByAdmin: _CosmosGroupV1Queryrpc.createRpcQueryHooks(rpc).useGroupPoliciesByAdmin,
    /**
     * cosmos.group.v1.useProposal
     * Proposal queries a proposal based on proposal id.
     */
    useCosmosGroupV1Proposal: _CosmosGroupV1Queryrpc.createRpcQueryHooks(rpc).useProposal,
    /**
     * cosmos.group.v1.useProposalsByGroupPolicy
     * ProposalsByGroupPolicy queries proposals based on account address of group policy.
     */
    useProposalsByGroupPolicy: _CosmosGroupV1Queryrpc.createRpcQueryHooks(rpc).useProposalsByGroupPolicy,
    /**
     * cosmos.group.v1.useVoteByProposalVoter
     * VoteByProposalVoter queries a vote by proposal id and voter.
     */
    useVoteByProposalVoter: _CosmosGroupV1Queryrpc.createRpcQueryHooks(rpc).useVoteByProposalVoter,
    /**
     * cosmos.group.v1.useVotesByProposal
     * VotesByProposal queries a vote by proposal id.
     */
    useVotesByProposal: _CosmosGroupV1Queryrpc.createRpcQueryHooks(rpc).useVotesByProposal,
    /**
     * cosmos.group.v1.useVotesByVoter
     * VotesByVoter queries a vote by voter.
     */
    useVotesByVoter: _CosmosGroupV1Queryrpc.createRpcQueryHooks(rpc).useVotesByVoter,
    /**
     * cosmos.group.v1.useGroupsByMember
     * GroupsByMember queries groups by member address.
     */
    useGroupsByMember: _CosmosGroupV1Queryrpc.createRpcQueryHooks(rpc).useGroupsByMember,
    /**
     * cosmos.group.v1.useTallyResult
     * TallyResult returns the tally result of a proposal. If the proposal is
     * still in voting period, then this query computes the current tally state,
     * which might not be final. On the other hand, if the proposal is final,
     * then it simply returns the `final_tally_result` state stored in the
     * proposal itself.
     */
    useCosmosGroupV1TallyResult: _CosmosGroupV1Queryrpc.createRpcQueryHooks(rpc).useTallyResult,
    /**
     * cosmos.group.v1.useGroups
     * Groups queries all groups in state.
     * 
     * Since: cosmos-sdk 0.47.1
     */
    useGroups: _CosmosGroupV1Queryrpc.createRpcQueryHooks(rpc).useGroups,
    /**
     * cosmos.mint.v1beta1.useParams
     * Params returns the total set of minting parameters.
     */
    useCosmosMintV1beta1Params: _CosmosMintV1beta1Queryrpc.createRpcQueryHooks(rpc).useParams,
    /**
     * cosmos.mint.v1beta1.useInflation
     * Inflation returns the current minting inflation value.
     */
    useInflation: _CosmosMintV1beta1Queryrpc.createRpcQueryHooks(rpc).useInflation,
    /**
     * cosmos.mint.v1beta1.useAnnualProvisions
     * AnnualProvisions current minting annual provisions value.
     */
    useAnnualProvisions: _CosmosMintV1beta1Queryrpc.createRpcQueryHooks(rpc).useAnnualProvisions,
    /**
     * cosmos.nft.v1beta1.useBalance
     * Balance queries the number of NFTs of a given class owned by the owner, same as balanceOf in ERC721
     */
    useNftBalance: _CosmosNftV1beta1Queryrpc.createRpcQueryHooks(rpc).useBalance,
    /**
     * cosmos.nft.v1beta1.useOwner
     * Owner queries the owner of the NFT based on its class and id, same as ownerOf in ERC721
     */
    useOwner: _CosmosNftV1beta1Queryrpc.createRpcQueryHooks(rpc).useOwner,
    /**
     * cosmos.nft.v1beta1.useSupply
     * Supply queries the number of NFTs from the given class, same as totalSupply of ERC721.
     */
    useSupply: _CosmosNftV1beta1Queryrpc.createRpcQueryHooks(rpc).useSupply,
    /**
     * cosmos.nft.v1beta1.useNFTs
     * NFTs queries all NFTs of a given class or owner,choose at least one of the two, similar to tokenByIndex in
     * ERC721Enumerable
     */
    useNFTs: _CosmosNftV1beta1Queryrpc.createRpcQueryHooks(rpc).useNFTs,
    /**
     * cosmos.nft.v1beta1.useNFT
     * NFT queries an NFT based on its class and id.
     */
    useNFT: _CosmosNftV1beta1Queryrpc.createRpcQueryHooks(rpc).useNFT,
    /**
     * cosmos.nft.v1beta1.useClass
     * Class queries an NFT class based on its id
     */
    useClass: _CosmosNftV1beta1Queryrpc.createRpcQueryHooks(rpc).useClass,
    /**
     * cosmos.nft.v1beta1.useClasses
     * Classes queries all NFT classes
     */
    useClasses: _CosmosNftV1beta1Queryrpc.createRpcQueryHooks(rpc).useClasses,
    /**
     * cosmos.orm.query.v1alpha1.useGet
     * Get queries an ORM table against an unique index.
     */
    useGet: _CosmosOrmQueryV1alpha1Queryrpc.createRpcQueryHooks(rpc).useGet,
    /**
     * cosmos.orm.query.v1alpha1.useList
     * List queries an ORM table against an index.
     */
    useList: _CosmosOrmQueryV1alpha1Queryrpc.createRpcQueryHooks(rpc).useList,
    /**
     * cosmos.params.v1beta1.useParams
     * Params queries a specific parameter of a module, given its subspace and
     * key.
     */
    useCosmosParamsV1beta1Params: _CosmosParamsV1beta1Queryrpc.createRpcQueryHooks(rpc).useParams,
    /**
     * cosmos.params.v1beta1.useSubspaces
     * Subspaces queries for all registered subspaces and all keys for a subspace.
     * 
     * Since: cosmos-sdk 0.46
     */
    useSubspaces: _CosmosParamsV1beta1Queryrpc.createRpcQueryHooks(rpc).useSubspaces,
    /**
     * cosmos.slashing.v1beta1.useParams
     * Params queries the parameters of slashing module
     */
    useCosmosSlashingV1beta1Params: _CosmosSlashingV1beta1Queryrpc.createRpcQueryHooks(rpc).useParams,
    /**
     * cosmos.slashing.v1beta1.useSigningInfo
     * SigningInfo queries the signing info of given cons address
     */
    useSigningInfo: _CosmosSlashingV1beta1Queryrpc.createRpcQueryHooks(rpc).useSigningInfo,
    /**
     * cosmos.slashing.v1beta1.useSigningInfos
     * SigningInfos queries signing info of all validators
     */
    useSigningInfos: _CosmosSlashingV1beta1Queryrpc.createRpcQueryHooks(rpc).useSigningInfos,
    /**
     * cosmos.staking.v1beta1.useValidators
     * Validators queries all validators that match the given status.
     * 
     * When called from another module, this query might consume a high amount of
     * gas if the pagination field is incorrectly set.
     */
    useValidators: _CosmosStakingV1beta1Queryrpc.createRpcQueryHooks(rpc).useValidators,
    /**
     * cosmos.staking.v1beta1.useValidator
     * Validator queries validator info for given validator address.
     */
    useValidator: _CosmosStakingV1beta1Queryrpc.createRpcQueryHooks(rpc).useValidator,
    /**
     * cosmos.staking.v1beta1.useValidatorDelegations
     * ValidatorDelegations queries delegate info for given validator.
     * 
     * When called from another module, this query might consume a high amount of
     * gas if the pagination field is incorrectly set.
     */
    useValidatorDelegations: _CosmosStakingV1beta1Queryrpc.createRpcQueryHooks(rpc).useValidatorDelegations,
    /**
     * cosmos.staking.v1beta1.useValidatorUnbondingDelegations
     * ValidatorUnbondingDelegations queries unbonding delegations of a validator.
     * 
     * When called from another module, this query might consume a high amount of
     * gas if the pagination field is incorrectly set.
     */
    useValidatorUnbondingDelegations: _CosmosStakingV1beta1Queryrpc.createRpcQueryHooks(rpc).useValidatorUnbondingDelegations,
    /**
     * cosmos.staking.v1beta1.useDelegation
     * Delegation queries delegate info for given validator delegator pair.
     */
    useDelegation: _CosmosStakingV1beta1Queryrpc.createRpcQueryHooks(rpc).useDelegation,
    /**
     * cosmos.staking.v1beta1.useUnbondingDelegation
     * UnbondingDelegation queries unbonding info for given validator delegator
     * pair.
     */
    useUnbondingDelegation: _CosmosStakingV1beta1Queryrpc.createRpcQueryHooks(rpc).useUnbondingDelegation,
    /**
     * cosmos.staking.v1beta1.useDelegatorDelegations
     * DelegatorDelegations queries all delegations of a given delegator address.
     * 
     * When called from another module, this query might consume a high amount of
     * gas if the pagination field is incorrectly set.
     */
    useDelegatorDelegations: _CosmosStakingV1beta1Queryrpc.createRpcQueryHooks(rpc).useDelegatorDelegations,
    /**
     * cosmos.staking.v1beta1.useDelegatorUnbondingDelegations
     * DelegatorUnbondingDelegations queries all unbonding delegations of a given
     * delegator address.
     * 
     * When called from another module, this query might consume a high amount of
     * gas if the pagination field is incorrectly set.
     */
    useDelegatorUnbondingDelegations: _CosmosStakingV1beta1Queryrpc.createRpcQueryHooks(rpc).useDelegatorUnbondingDelegations,
    /**
     * cosmos.staking.v1beta1.useRedelegations
     * Redelegations queries redelegations of given address.
     * 
     * When called from another module, this query might consume a high amount of
     * gas if the pagination field is incorrectly set.
     */
    useRedelegations: _CosmosStakingV1beta1Queryrpc.createRpcQueryHooks(rpc).useRedelegations,
    /**
     * cosmos.staking.v1beta1.useDelegatorValidators
     * DelegatorValidators queries all validators info for given delegator
     * address.
     * 
     * When called from another module, this query might consume a high amount of
     * gas if the pagination field is incorrectly set.
     */
    useCosmosStakingDelegatorValidators: _CosmosStakingV1beta1Queryrpc.createRpcQueryHooks(rpc).useDelegatorValidators,
    /**
     * cosmos.staking.v1beta1.useDelegatorValidator
     * DelegatorValidator queries validator info for given delegator validator
     * pair.
     */
    useDelegatorValidator: _CosmosStakingV1beta1Queryrpc.createRpcQueryHooks(rpc).useDelegatorValidator,
    /**
     * cosmos.staking.v1beta1.useHistoricalInfo
     * HistoricalInfo queries the historical info for given height.
     */
    useHistoricalInfo: _CosmosStakingV1beta1Queryrpc.createRpcQueryHooks(rpc).useHistoricalInfo,
    /**
     * cosmos.staking.v1beta1.usePool
     * Pool queries the pool info.
     */
    usePool: _CosmosStakingV1beta1Queryrpc.createRpcQueryHooks(rpc).usePool,
    /**
     * cosmos.staking.v1beta1.useParams
     * Parameters queries the staking parameters.
     */
    useCosmosStakingV1beta1Params: _CosmosStakingV1beta1Queryrpc.createRpcQueryHooks(rpc).useParams,
    /**
     * cosmos.tx.v1beta1.useSimulate
     * Simulate simulates executing a transaction for estimating gas usage.
     */
    useSimulate: _CosmosTxV1beta1Servicerpc.createRpcQueryHooks(rpc).useSimulate,
    /**
     * cosmos.tx.v1beta1.useGetTx
     * GetTx fetches a tx by hash.
     */
    useGetTx: _CosmosTxV1beta1Servicerpc.createRpcQueryHooks(rpc).useGetTx,
    /**
     * cosmos.tx.v1beta1.useBroadcastTx
     * BroadcastTx broadcast transaction.
     */
    useBroadcastTx: _CosmosTxV1beta1Servicerpc.createRpcQueryHooks(rpc).useBroadcastTx,
    /**
     * cosmos.tx.v1beta1.useGetTxsEvent
     * GetTxsEvent fetches txs by event.
     */
    useGetTxsEvent: _CosmosTxV1beta1Servicerpc.createRpcQueryHooks(rpc).useGetTxsEvent,
    /**
     * cosmos.tx.v1beta1.useGetBlockWithTxs
     * GetBlockWithTxs fetches a block with decoded txs.
     * 
     * Since: cosmos-sdk 0.45.2
     */
    useGetBlockWithTxs: _CosmosTxV1beta1Servicerpc.createRpcQueryHooks(rpc).useGetBlockWithTxs,
    /**
     * cosmos.tx.v1beta1.useTxDecode
     * TxDecode decodes the transaction.
     * 
     * Since: cosmos-sdk 0.47
     */
    useTxDecode: _CosmosTxV1beta1Servicerpc.createRpcQueryHooks(rpc).useTxDecode,
    /**
     * cosmos.tx.v1beta1.useTxEncode
     * TxEncode encodes the transaction.
     * 
     * Since: cosmos-sdk 0.47
     */
    useTxEncode: _CosmosTxV1beta1Servicerpc.createRpcQueryHooks(rpc).useTxEncode,
    /**
     * cosmos.tx.v1beta1.useTxEncodeAmino
     * TxEncodeAmino encodes an Amino transaction from JSON to encoded bytes.
     * 
     * Since: cosmos-sdk 0.47
     */
    useTxEncodeAmino: _CosmosTxV1beta1Servicerpc.createRpcQueryHooks(rpc).useTxEncodeAmino,
    /**
     * cosmos.tx.v1beta1.useTxDecodeAmino
     * TxDecodeAmino decodes an Amino transaction from encoded bytes to JSON.
     * 
     * Since: cosmos-sdk 0.47
     */
    useTxDecodeAmino: _CosmosTxV1beta1Servicerpc.createRpcQueryHooks(rpc).useTxDecodeAmino,
    /**
     * cosmos.upgrade.v1beta1.useCurrentPlan
     * CurrentPlan queries the current upgrade plan.
     */
    useCurrentPlan: _CosmosUpgradeV1beta1Queryrpc.createRpcQueryHooks(rpc).useCurrentPlan,
    /**
     * cosmos.upgrade.v1beta1.useAppliedPlan
     * AppliedPlan queries a previously applied upgrade plan by its name.
     */
    useAppliedPlan: _CosmosUpgradeV1beta1Queryrpc.createRpcQueryHooks(rpc).useAppliedPlan,
    /**
     * cosmos.upgrade.v1beta1.useUpgradedConsensusState
     * UpgradedConsensusState queries the consensus state that will serve
     * as a trusted kernel for the next version of this chain. It will only be
     * stored at the last height of this chain.
     * UpgradedConsensusState RPC not supported with legacy querier
     * This rpc is deprecated now that IBC has its own replacement
     * (https://github.com/cosmos/ibc-go/blob/2c880a22e9f9cc75f62b527ca94aa75ce1106001/proto/ibc/core/client/v1/query.proto#L54)
     */
    useUpgradedConsensusState: _CosmosUpgradeV1beta1Queryrpc.createRpcQueryHooks(rpc).useUpgradedConsensusState,
    /**
     * cosmos.upgrade.v1beta1.useModuleVersions
     * ModuleVersions queries the list of module versions from state.
     * 
     * Since: cosmos-sdk 0.43
     */
    useModuleVersions: _CosmosUpgradeV1beta1Queryrpc.createRpcQueryHooks(rpc).useModuleVersions,
    /**
     * cosmos.upgrade.v1beta1.useAuthority
     * Returns the account with authority to conduct upgrades
     * 
     * Since: cosmos-sdk 0.46
     */
    useAuthority: _CosmosUpgradeV1beta1Queryrpc.createRpcQueryHooks(rpc).useAuthority,
    /**
     * ibc.applications.fee.v1.useIncentivizedPackets
     * IncentivizedPackets returns all incentivized packets and their associated fees
     */
    useIncentivizedPackets: _IbcApplicationsFeeV1Queryrpc.createRpcQueryHooks(rpc).useIncentivizedPackets,
    /**
     * ibc.applications.fee.v1.useIncentivizedPacket
     * IncentivizedPacket returns all packet fees for a packet given its identifier
     */
    useIncentivizedPacket: _IbcApplicationsFeeV1Queryrpc.createRpcQueryHooks(rpc).useIncentivizedPacket,
    /**
     * ibc.applications.fee.v1.useIncentivizedPacketsForChannel
     * Gets all incentivized packets for a specific channel
     */
    useIncentivizedPacketsForChannel: _IbcApplicationsFeeV1Queryrpc.createRpcQueryHooks(rpc).useIncentivizedPacketsForChannel,
    /**
     * ibc.applications.fee.v1.useTotalRecvFees
     * TotalRecvFees returns the total receive fees for a packet given its identifier
     */
    useTotalRecvFees: _IbcApplicationsFeeV1Queryrpc.createRpcQueryHooks(rpc).useTotalRecvFees,
    /**
     * ibc.applications.fee.v1.useTotalAckFees
     * TotalAckFees returns the total acknowledgement fees for a packet given its identifier
     */
    useTotalAckFees: _IbcApplicationsFeeV1Queryrpc.createRpcQueryHooks(rpc).useTotalAckFees,
    /**
     * ibc.applications.fee.v1.useTotalTimeoutFees
     * TotalTimeoutFees returns the total timeout fees for a packet given its identifier
     */
    useTotalTimeoutFees: _IbcApplicationsFeeV1Queryrpc.createRpcQueryHooks(rpc).useTotalTimeoutFees,
    /**
     * ibc.applications.fee.v1.usePayee
     * Payee returns the registered payee address for a specific channel given the relayer address
     */
    usePayee: _IbcApplicationsFeeV1Queryrpc.createRpcQueryHooks(rpc).usePayee,
    /**
     * ibc.applications.fee.v1.useCounterpartyPayee
     * CounterpartyPayee returns the registered counterparty payee for forward relaying
     */
    useCounterpartyPayee: _IbcApplicationsFeeV1Queryrpc.createRpcQueryHooks(rpc).useCounterpartyPayee,
    /**
     * ibc.applications.fee.v1.useFeeEnabledChannels
     * FeeEnabledChannels returns a list of all fee enabled channels
     */
    useFeeEnabledChannels: _IbcApplicationsFeeV1Queryrpc.createRpcQueryHooks(rpc).useFeeEnabledChannels,
    /**
     * ibc.applications.fee.v1.useFeeEnabledChannel
     * FeeEnabledChannel returns true if the provided port and channel identifiers belong to a fee enabled channel
     */
    useFeeEnabledChannel: _IbcApplicationsFeeV1Queryrpc.createRpcQueryHooks(rpc).useFeeEnabledChannel,
    /**
     * ibc.applications.interchain_accounts.controller.v1.useInterchainAccount
     * InterchainAccount returns the interchain account address for a given owner address on a given connection
     */
    useInterchainAccount: _IbcApplicationsInterchainAccountsControllerV1Queryrpc.createRpcQueryHooks(rpc).useInterchainAccount,
    /**
     * ibc.applications.interchain_accounts.controller.v1.useParams
     * Params queries all parameters of the ICA controller submodule.
     */
    useIbcApplicationsInterchainAccountsControllerV1Params: _IbcApplicationsInterchainAccountsControllerV1Queryrpc.createRpcQueryHooks(rpc).useParams,
    /**
     * ibc.applications.interchain_accounts.host.v1.useParams
     * Params queries all parameters of the ICA host submodule.
     */
    useIbcApplicationsInterchainAccountsHostV1Params: _IbcApplicationsInterchainAccountsHostV1Queryrpc.createRpcQueryHooks(rpc).useParams,
    /**
     * ibc.applications.transfer.v1.useDenomTraces
     * DenomTraces queries all denomination traces.
     */
    useDenomTraces: _IbcApplicationsTransferV1Queryrpc.createRpcQueryHooks(rpc).useDenomTraces,
    /**
     * ibc.applications.transfer.v1.useDenomTrace
     * DenomTrace queries a denomination trace information.
     */
    useDenomTrace: _IbcApplicationsTransferV1Queryrpc.createRpcQueryHooks(rpc).useDenomTrace,
    /**
     * ibc.applications.transfer.v1.useParams
     * Params queries all parameters of the ibc-transfer module.
     */
    useIbcApplicationsTransferV1Params: _IbcApplicationsTransferV1Queryrpc.createRpcQueryHooks(rpc).useParams,
    /**
     * ibc.applications.transfer.v1.useDenomHash
     * DenomHash queries a denomination hash information.
     */
    useDenomHash: _IbcApplicationsTransferV1Queryrpc.createRpcQueryHooks(rpc).useDenomHash,
    /**
     * ibc.applications.transfer.v1.useEscrowAddress
     * EscrowAddress returns the escrow address for a particular port and channel id.
     */
    useEscrowAddress: _IbcApplicationsTransferV1Queryrpc.createRpcQueryHooks(rpc).useEscrowAddress,
    /**
     * ibc.applications.transfer.v1.useTotalEscrowForDenom
     * TotalEscrowForDenom returns the total amount of tokens in escrow based on the denom.
     */
    useTotalEscrowForDenom: _IbcApplicationsTransferV1Queryrpc.createRpcQueryHooks(rpc).useTotalEscrowForDenom,
    /**
     * ibc.core.channel.v1.useChannel
     * Channel queries an IBC Channel.
     */
    useChannel: _IbcCoreChannelV1Queryrpc.createRpcQueryHooks(rpc).useChannel,
    /**
     * ibc.core.channel.v1.useChannels
     * Channels queries all the IBC channels of a chain.
     */
    useChannels: _IbcCoreChannelV1Queryrpc.createRpcQueryHooks(rpc).useChannels,
    /**
     * ibc.core.channel.v1.useConnectionChannels
     * ConnectionChannels queries all the channels associated with a connection
     * end.
     */
    useConnectionChannels: _IbcCoreChannelV1Queryrpc.createRpcQueryHooks(rpc).useConnectionChannels,
    /**
     * ibc.core.channel.v1.useChannelClientState
     * ChannelClientState queries for the client state for the channel associated
     * with the provided channel identifiers.
     */
    useChannelClientState: _IbcCoreChannelV1Queryrpc.createRpcQueryHooks(rpc).useChannelClientState,
    /**
     * ibc.core.channel.v1.useChannelConsensusState
     * ChannelConsensusState queries for the consensus state for the channel
     * associated with the provided channel identifiers.
     */
    useChannelConsensusState: _IbcCoreChannelV1Queryrpc.createRpcQueryHooks(rpc).useChannelConsensusState,
    /**
     * ibc.core.channel.v1.usePacketCommitment
     * PacketCommitment queries a stored packet commitment hash.
     */
    usePacketCommitment: _IbcCoreChannelV1Queryrpc.createRpcQueryHooks(rpc).usePacketCommitment,
    /**
     * ibc.core.channel.v1.usePacketCommitments
     * PacketCommitments returns all the packet commitments hashes associated
     * with a channel.
     */
    usePacketCommitments: _IbcCoreChannelV1Queryrpc.createRpcQueryHooks(rpc).usePacketCommitments,
    /**
     * ibc.core.channel.v1.usePacketReceipt
     * PacketReceipt queries if a given packet sequence has been received on the
     * queried chain
     */
    usePacketReceipt: _IbcCoreChannelV1Queryrpc.createRpcQueryHooks(rpc).usePacketReceipt,
    /**
     * ibc.core.channel.v1.usePacketAcknowledgement
     * PacketAcknowledgement queries a stored packet acknowledgement hash.
     */
    usePacketAcknowledgement: _IbcCoreChannelV1Queryrpc.createRpcQueryHooks(rpc).usePacketAcknowledgement,
    /**
     * ibc.core.channel.v1.usePacketAcknowledgements
     * PacketAcknowledgements returns all the packet acknowledgements associated
     * with a channel.
     */
    usePacketAcknowledgements: _IbcCoreChannelV1Queryrpc.createRpcQueryHooks(rpc).usePacketAcknowledgements,
    /**
     * ibc.core.channel.v1.useUnreceivedPackets
     * UnreceivedPackets returns all the unreceived IBC packets associated with a
     * channel and sequences.
     */
    useUnreceivedPackets: _IbcCoreChannelV1Queryrpc.createRpcQueryHooks(rpc).useUnreceivedPackets,
    /**
     * ibc.core.channel.v1.useUnreceivedAcks
     * UnreceivedAcks returns all the unreceived IBC acknowledgements associated
     * with a channel and sequences.
     */
    useUnreceivedAcks: _IbcCoreChannelV1Queryrpc.createRpcQueryHooks(rpc).useUnreceivedAcks,
    /**
     * ibc.core.channel.v1.useNextSequenceReceive
     * NextSequenceReceive returns the next receive sequence for a given channel.
     */
    useNextSequenceReceive: _IbcCoreChannelV1Queryrpc.createRpcQueryHooks(rpc).useNextSequenceReceive,
    /**
     * ibc.core.channel.v1.useNextSequenceSend
     * NextSequenceSend returns the next send sequence for a given channel.
     */
    useNextSequenceSend: _IbcCoreChannelV1Queryrpc.createRpcQueryHooks(rpc).useNextSequenceSend,
    /**
     * ibc.core.client.v1.useClientState
     * ClientState queries an IBC light client.
     */
    useClientState: _IbcCoreClientV1Queryrpc.createRpcQueryHooks(rpc).useClientState,
    /**
     * ibc.core.client.v1.useClientStates
     * ClientStates queries all the IBC light clients of a chain.
     */
    useClientStates: _IbcCoreClientV1Queryrpc.createRpcQueryHooks(rpc).useClientStates,
    /**
     * ibc.core.client.v1.useConsensusState
     * ConsensusState queries a consensus state associated with a client state at
     * a given height.
     */
    useConsensusState: _IbcCoreClientV1Queryrpc.createRpcQueryHooks(rpc).useConsensusState,
    /**
     * ibc.core.client.v1.useConsensusStates
     * ConsensusStates queries all the consensus state associated with a given
     * client.
     */
    useConsensusStates: _IbcCoreClientV1Queryrpc.createRpcQueryHooks(rpc).useConsensusStates,
    /**
     * ibc.core.client.v1.useConsensusStateHeights
     * ConsensusStateHeights queries the height of every consensus states associated with a given client.
     */
    useConsensusStateHeights: _IbcCoreClientV1Queryrpc.createRpcQueryHooks(rpc).useConsensusStateHeights,
    /**
     * ibc.core.client.v1.useClientStatus
     * Status queries the status of an IBC client.
     */
    useClientStatus: _IbcCoreClientV1Queryrpc.createRpcQueryHooks(rpc).useClientStatus,
    /**
     * ibc.core.client.v1.useClientParams
     * ClientParams queries all parameters of the ibc client submodule.
     */
    useClientParams: _IbcCoreClientV1Queryrpc.createRpcQueryHooks(rpc).useClientParams,
    /**
     * ibc.core.client.v1.useUpgradedClientState
     * UpgradedClientState queries an Upgraded IBC light client.
     */
    useUpgradedClientState: _IbcCoreClientV1Queryrpc.createRpcQueryHooks(rpc).useUpgradedClientState,
    /**
     * ibc.core.client.v1.useUpgradedConsensusState
     * UpgradedConsensusState queries an Upgraded IBC consensus state.
     */
    useIBCUpgradedConsensusState: _IbcCoreClientV1Queryrpc.createRpcQueryHooks(rpc).useUpgradedConsensusState,
    /**
     * ibc.core.connection.v1.useConnection
     * Connection queries an IBC connection end.
     */
    useConnection: _IbcCoreConnectionV1Queryrpc.createRpcQueryHooks(rpc).useConnection,
    /**
     * ibc.core.connection.v1.useConnections
     * Connections queries all the IBC connections of a chain.
     */
    useConnections: _IbcCoreConnectionV1Queryrpc.createRpcQueryHooks(rpc).useConnections,
    /**
     * ibc.core.connection.v1.useClientConnections
     * ClientConnections queries the connection paths associated with a client
     * state.
     */
    useClientConnections: _IbcCoreConnectionV1Queryrpc.createRpcQueryHooks(rpc).useClientConnections,
    /**
     * ibc.core.connection.v1.useConnectionClientState
     * ConnectionClientState queries the client state associated with the
     * connection.
     */
    useConnectionClientState: _IbcCoreConnectionV1Queryrpc.createRpcQueryHooks(rpc).useConnectionClientState,
    /**
     * ibc.core.connection.v1.useConnectionConsensusState
     * ConnectionConsensusState queries the consensus state associated with the
     * connection.
     */
    useConnectionConsensusState: _IbcCoreConnectionV1Queryrpc.createRpcQueryHooks(rpc).useConnectionConsensusState,
    /**
     * ibc.core.connection.v1.useConnectionParams
     * ConnectionParams queries all parameters of the ibc connection submodule.
     */
    useConnectionParams: _IbcCoreConnectionV1Queryrpc.createRpcQueryHooks(rpc).useConnectionParams,
    /**
     * cosmwasm.wasm.v1.useContractInfo
     * ContractInfo gets the contract meta data
     */
    useContractInfo: _CosmwasmWasmV1Queryrpc.createRpcQueryHooks(rpc).useContractInfo,
    /**
     * cosmwasm.wasm.v1.useContractHistory
     * ContractHistory gets the contract code history
     */
    useContractHistory: _CosmwasmWasmV1Queryrpc.createRpcQueryHooks(rpc).useContractHistory,
    /**
     * cosmwasm.wasm.v1.useContractsByCode
     * ContractsByCode lists all smart contracts for a code id
     */
    useContractsByCode: _CosmwasmWasmV1Queryrpc.createRpcQueryHooks(rpc).useContractsByCode,
    /**
     * cosmwasm.wasm.v1.useAllContractState
     * AllContractState gets all raw store data for a single contract
     */
    useAllContractState: _CosmwasmWasmV1Queryrpc.createRpcQueryHooks(rpc).useAllContractState,
    /**
     * cosmwasm.wasm.v1.useRawContractState
     * RawContractState gets single key from the raw store data of a contract
     */
    useRawContractState: _CosmwasmWasmV1Queryrpc.createRpcQueryHooks(rpc).useRawContractState,
    /**
     * cosmwasm.wasm.v1.useSmartContractState
     * SmartContractState get smart query result from the contract
     */
    useSmartContractState: _CosmwasmWasmV1Queryrpc.createRpcQueryHooks(rpc).useSmartContractState,
    /**
     * cosmwasm.wasm.v1.useCode
     * Code gets the binary code and metadata for a singe wasm code
     */
    useCode: _CosmwasmWasmV1Queryrpc.createRpcQueryHooks(rpc).useCode,
    /**
     * cosmwasm.wasm.v1.useCodes
     * Codes gets the metadata for all stored wasm codes
     */
    useCodes: _CosmwasmWasmV1Queryrpc.createRpcQueryHooks(rpc).useCodes,
    /**
     * cosmwasm.wasm.v1.usePinnedCodes
     * PinnedCodes gets the pinned code ids
     */
    usePinnedCodes: _CosmwasmWasmV1Queryrpc.createRpcQueryHooks(rpc).usePinnedCodes,
    /**
     * cosmwasm.wasm.v1.useParams
     * Params gets the module params
     */
    useCosmwasmWasmV1Params: _CosmwasmWasmV1Queryrpc.createRpcQueryHooks(rpc).useParams,
    /**
     * cosmwasm.wasm.v1.useContractsByCreator
     * ContractsByCreator gets the contracts by creator
     */
    useContractsByCreator: _CosmwasmWasmV1Queryrpc.createRpcQueryHooks(rpc).useContractsByCreator
  };
};