/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../../common";
import type {
  SenderZEVM,
  SenderZEVMInterface,
} from "../../../../contracts/prototypes/zevm/SenderZEVM";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_gateway",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "ApprovalFailed",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "bytes",
        name: "receiver",
        type: "bytes",
      },
      {
        internalType: "string",
        name: "str",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "num",
        type: "uint256",
      },
      {
        internalType: "bool",
        name: "flag",
        type: "bool",
      },
    ],
    name: "callReceiver",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "gateway",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes",
        name: "receiver",
        type: "bytes",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "zrc20",
        type: "address",
      },
      {
        internalType: "string",
        name: "str",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "num",
        type: "uint256",
      },
      {
        internalType: "bool",
        name: "flag",
        type: "bool",
      },
    ],
    name: "withdrawAndCallReceiver",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x608060405234801561001057600080fd5b50604051610bcd380380610bcd8339818101604052810190610032919061008d565b806000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050610108565b600081519050610087816100f1565b92915050565b6000602082840312156100a3576100a26100ec565b5b60006100b184828501610078565b91505092915050565b60006100c5826100cc565b9050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b600080fd5b6100fa816100ba565b811461010557600080fd5b50565b610ab6806101176000396000f3fe608060405234801561001057600080fd5b50600436106100415760003560e01c80630abd890514610046578063116191b614610062578063a0a1730b14610080575b600080fd5b610060600480360381019061005b91906105fd565b61009c565b005b61006a6102af565b6040516100779190610761565b60405180910390f35b61009a6004803603810190610095919061055e565b6102d3565b005b60008383836040516024016100b39392919061082f565b6040516020818303038152906040527fe04d4f97000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff838183161783525050505090508473ffffffffffffffffffffffffffffffffffffffff1663095ea7b360008054906101000a900473ffffffffffffffffffffffffffffffffffffffff16886040518363ffffffff1660e01b815260040161018d92919061077c565b602060405180830381600087803b1580156101a757600080fd5b505af11580156101bb573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906101df9190610531565b610215576040517f8164f84200000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16637993c1e0888888856040518563ffffffff1660e01b815260040161027494939291906107dc565b600060405180830381600087803b15801561028e57600080fd5b505af11580156102a2573d6000803e3d6000fd5b5050505050505050505050565b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60008383836040516024016102ea9392919061082f565b6040516020818303038152906040527fe04d4f97000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff8381831617835250505050905060008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16630ac7c44c86836040518363ffffffff1660e01b81526004016103c49291906107a5565b600060405180830381600087803b1580156103de57600080fd5b505af11580156103f2573d6000803e3d6000fd5b505050505050505050565b600061041061040b84610892565b61086d565b90508281526020810184848401111561042c5761042b610a1b565b5b610437848285610974565b509392505050565b600061045261044d846108c3565b61086d565b90508281526020810184848401111561046e5761046d610a1b565b5b610479848285610974565b509392505050565b60008135905061049081610a3b565b92915050565b6000813590506104a581610a52565b92915050565b6000815190506104ba81610a52565b92915050565b600082601f8301126104d5576104d4610a16565b5b81356104e58482602086016103fd565b91505092915050565b600082601f83011261050357610502610a16565b5b813561051384826020860161043f565b91505092915050565b60008135905061052b81610a69565b92915050565b60006020828403121561054757610546610a25565b5b6000610555848285016104ab565b91505092915050565b6000806000806080858703121561057857610577610a25565b5b600085013567ffffffffffffffff81111561059657610595610a20565b5b6105a2878288016104c0565b945050602085013567ffffffffffffffff8111156105c3576105c2610a20565b5b6105cf878288016104ee565b93505060406105e08782880161051c565b92505060606105f187828801610496565b91505092959194509250565b60008060008060008060c0878903121561061a57610619610a25565b5b600087013567ffffffffffffffff81111561063857610637610a20565b5b61064489828a016104c0565b965050602061065589828a0161051c565b955050604061066689828a01610481565b945050606087013567ffffffffffffffff81111561068757610686610a20565b5b61069389828a016104ee565b93505060806106a489828a0161051c565b92505060a06106b589828a01610496565b9150509295509295509295565b6106cb8161092c565b82525050565b6106da8161093e565b82525050565b60006106eb826108f4565b6106f5818561090a565b9350610705818560208601610983565b61070e81610a2a565b840191505092915050565b6000610724826108ff565b61072e818561091b565b935061073e818560208601610983565b61074781610a2a565b840191505092915050565b61075b8161096a565b82525050565b600060208201905061077660008301846106c2565b92915050565b600060408201905061079160008301856106c2565b61079e6020830184610752565b9392505050565b600060408201905081810360008301526107bf81856106e0565b905081810360208301526107d381846106e0565b90509392505050565b600060808201905081810360008301526107f681876106e0565b90506108056020830186610752565b61081260408301856106c2565b818103606083015261082481846106e0565b905095945050505050565b600060608201905081810360008301526108498186610719565b90506108586020830185610752565b61086560408301846106d1565b949350505050565b6000610877610888565b905061088382826109b6565b919050565b6000604051905090565b600067ffffffffffffffff8211156108ad576108ac6109e7565b5b6108b682610a2a565b9050602081019050919050565b600067ffffffffffffffff8211156108de576108dd6109e7565b5b6108e782610a2a565b9050602081019050919050565b600081519050919050565b600081519050919050565b600082825260208201905092915050565b600082825260208201905092915050565b60006109378261094a565b9050919050565b60008115159050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b82818337600083830152505050565b60005b838110156109a1578082015181840152602081019050610986565b838111156109b0576000848401525b50505050565b6109bf82610a2a565b810181811067ffffffffffffffff821117156109de576109dd6109e7565b5b80604052505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b600080fd5b600080fd5b600080fd5b600080fd5b6000601f19601f8301169050919050565b610a448161092c565b8114610a4f57600080fd5b50565b610a5b8161093e565b8114610a6657600080fd5b50565b610a728161096a565b8114610a7d57600080fd5b5056fea2646970667358221220192b4e23b9b6daaae9f30fb00f65433e56a5d8a6906223e4fbd169def800a8a264736f6c63430008070033";

type SenderZEVMConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: SenderZEVMConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class SenderZEVM__factory extends ContractFactory {
  constructor(...args: SenderZEVMConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    _gateway: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<SenderZEVM> {
    return super.deploy(_gateway, overrides || {}) as Promise<SenderZEVM>;
  }
  override getDeployTransaction(
    _gateway: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_gateway, overrides || {});
  }
  override attach(address: string): SenderZEVM {
    return super.attach(address) as SenderZEVM;
  }
  override connect(signer: Signer): SenderZEVM__factory {
    return super.connect(signer) as SenderZEVM__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): SenderZEVMInterface {
    return new utils.Interface(_abi) as SenderZEVMInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): SenderZEVM {
    return new Contract(address, _abi, signerOrProvider) as SenderZEVM;
  }
}