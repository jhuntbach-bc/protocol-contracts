/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumberish,
  BytesLike,
  FunctionFragment,
  Result,
  Interface,
  EventFragment,
  AddressLike,
  ContractRunner,
  ContractMethod,
  Listener,
} from "ethers";
import type {
  TypedContractEvent,
  TypedDeferredTopicFilter,
  TypedEventLog,
  TypedLogDescription,
  TypedListener,
  TypedContractMethod,
} from "../common";

export interface ZRC20Interface extends Interface {
  getFunction(
    nameOrSignature:
      | "CHAIN_ID"
      | "COIN_TYPE"
      | "FUNGIBLE_MODULE_ADDRESS"
      | "GAS_LIMIT"
      | "GATEWAY_CONTRACT_ADDRESS"
      | "PROTOCOL_FLAT_FEE"
      | "SYSTEM_CONTRACT_ADDRESS"
      | "allowance"
      | "approve"
      | "balanceOf"
      | "burn"
      | "decimals"
      | "deposit"
      | "name"
      | "symbol"
      | "totalSupply"
      | "transfer"
      | "transferFrom"
      | "updateGasLimit"
      | "updateProtocolFlatFee"
      | "updateSystemContractAddress"
      | "withdraw"
      | "withdrawGasFee"
  ): FunctionFragment;

  getEvent(
    nameOrSignatureOrTopic:
      | "Approval"
      | "Deposit"
      | "Transfer"
      | "UpdatedGasLimit"
      | "UpdatedProtocolFlatFee"
      | "UpdatedSystemContract"
      | "Withdrawal"
  ): EventFragment;

  encodeFunctionData(functionFragment: "CHAIN_ID", values?: undefined): string;
  encodeFunctionData(functionFragment: "COIN_TYPE", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "FUNGIBLE_MODULE_ADDRESS",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "GAS_LIMIT", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "GATEWAY_CONTRACT_ADDRESS",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "PROTOCOL_FLAT_FEE",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "SYSTEM_CONTRACT_ADDRESS",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "allowance",
    values: [AddressLike, AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "approve",
    values: [AddressLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "balanceOf",
    values: [AddressLike]
  ): string;
  encodeFunctionData(functionFragment: "burn", values: [BigNumberish]): string;
  encodeFunctionData(functionFragment: "decimals", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "deposit",
    values: [AddressLike, BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "name", values?: undefined): string;
  encodeFunctionData(functionFragment: "symbol", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "totalSupply",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "transfer",
    values: [AddressLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "transferFrom",
    values: [AddressLike, AddressLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "updateGasLimit",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "updateProtocolFlatFee",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "updateSystemContractAddress",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "withdraw",
    values: [BytesLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "withdrawGasFee",
    values?: undefined
  ): string;

  decodeFunctionResult(functionFragment: "CHAIN_ID", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "COIN_TYPE", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "FUNGIBLE_MODULE_ADDRESS",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "GAS_LIMIT", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "GATEWAY_CONTRACT_ADDRESS",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "PROTOCOL_FLAT_FEE",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "SYSTEM_CONTRACT_ADDRESS",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "allowance", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "approve", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "balanceOf", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "burn", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "decimals", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "deposit", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "name", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "symbol", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "totalSupply",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "transfer", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "transferFrom",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "updateGasLimit",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "updateProtocolFlatFee",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "updateSystemContractAddress",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "withdraw", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "withdrawGasFee",
    data: BytesLike
  ): Result;
}

export namespace ApprovalEvent {
  export type InputTuple = [
    owner: AddressLike,
    spender: AddressLike,
    value: BigNumberish
  ];
  export type OutputTuple = [owner: string, spender: string, value: bigint];
  export interface OutputObject {
    owner: string;
    spender: string;
    value: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace DepositEvent {
  export type InputTuple = [
    from: BytesLike,
    to: AddressLike,
    value: BigNumberish
  ];
  export type OutputTuple = [from: string, to: string, value: bigint];
  export interface OutputObject {
    from: string;
    to: string;
    value: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace TransferEvent {
  export type InputTuple = [
    from: AddressLike,
    to: AddressLike,
    value: BigNumberish
  ];
  export type OutputTuple = [from: string, to: string, value: bigint];
  export interface OutputObject {
    from: string;
    to: string;
    value: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace UpdatedGasLimitEvent {
  export type InputTuple = [gasLimit: BigNumberish];
  export type OutputTuple = [gasLimit: bigint];
  export interface OutputObject {
    gasLimit: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace UpdatedProtocolFlatFeeEvent {
  export type InputTuple = [protocolFlatFee: BigNumberish];
  export type OutputTuple = [protocolFlatFee: bigint];
  export interface OutputObject {
    protocolFlatFee: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace UpdatedSystemContractEvent {
  export type InputTuple = [systemContract: AddressLike];
  export type OutputTuple = [systemContract: string];
  export interface OutputObject {
    systemContract: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace WithdrawalEvent {
  export type InputTuple = [
    from: AddressLike,
    to: BytesLike,
    value: BigNumberish,
    gasFee: BigNumberish,
    protocolFlatFee: BigNumberish
  ];
  export type OutputTuple = [
    from: string,
    to: string,
    value: bigint,
    gasFee: bigint,
    protocolFlatFee: bigint
  ];
  export interface OutputObject {
    from: string;
    to: string;
    value: bigint;
    gasFee: bigint;
    protocolFlatFee: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export interface ZRC20 extends BaseContract {
  connect(runner?: ContractRunner | null): ZRC20;
  waitForDeployment(): Promise<this>;

  interface: ZRC20Interface;

  queryFilter<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEventLog<TCEvent>>>;
  queryFilter<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEventLog<TCEvent>>>;

  on<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>
  ): Promise<this>;
  on<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>
  ): Promise<this>;

  once<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>
  ): Promise<this>;
  once<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>
  ): Promise<this>;

  listeners<TCEvent extends TypedContractEvent>(
    event: TCEvent
  ): Promise<Array<TypedListener<TCEvent>>>;
  listeners(eventName?: string): Promise<Array<Listener>>;
  removeAllListeners<TCEvent extends TypedContractEvent>(
    event?: TCEvent
  ): Promise<this>;

  CHAIN_ID: TypedContractMethod<[], [bigint], "view">;

  COIN_TYPE: TypedContractMethod<[], [bigint], "view">;

  FUNGIBLE_MODULE_ADDRESS: TypedContractMethod<[], [string], "view">;

  GAS_LIMIT: TypedContractMethod<[], [bigint], "view">;

  GATEWAY_CONTRACT_ADDRESS: TypedContractMethod<[], [string], "view">;

  PROTOCOL_FLAT_FEE: TypedContractMethod<[], [bigint], "view">;

  SYSTEM_CONTRACT_ADDRESS: TypedContractMethod<[], [string], "view">;

  allowance: TypedContractMethod<
    [owner: AddressLike, spender: AddressLike],
    [bigint],
    "view"
  >;

  approve: TypedContractMethod<
    [spender: AddressLike, amount: BigNumberish],
    [boolean],
    "nonpayable"
  >;

  balanceOf: TypedContractMethod<[account: AddressLike], [bigint], "view">;

  burn: TypedContractMethod<[amount: BigNumberish], [boolean], "nonpayable">;

  decimals: TypedContractMethod<[], [bigint], "view">;

  deposit: TypedContractMethod<
    [to: AddressLike, amount: BigNumberish],
    [boolean],
    "nonpayable"
  >;

  name: TypedContractMethod<[], [string], "view">;

  symbol: TypedContractMethod<[], [string], "view">;

  totalSupply: TypedContractMethod<[], [bigint], "view">;

  transfer: TypedContractMethod<
    [recipient: AddressLike, amount: BigNumberish],
    [boolean],
    "nonpayable"
  >;

  transferFrom: TypedContractMethod<
    [sender: AddressLike, recipient: AddressLike, amount: BigNumberish],
    [boolean],
    "nonpayable"
  >;

  updateGasLimit: TypedContractMethod<
    [gasLimit: BigNumberish],
    [void],
    "nonpayable"
  >;

  updateProtocolFlatFee: TypedContractMethod<
    [protocolFlatFee: BigNumberish],
    [void],
    "nonpayable"
  >;

  updateSystemContractAddress: TypedContractMethod<
    [addr: AddressLike],
    [void],
    "nonpayable"
  >;

  withdraw: TypedContractMethod<
    [to: BytesLike, amount: BigNumberish],
    [boolean],
    "nonpayable"
  >;

  withdrawGasFee: TypedContractMethod<[], [[string, bigint]], "view">;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "CHAIN_ID"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "COIN_TYPE"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "FUNGIBLE_MODULE_ADDRESS"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "GAS_LIMIT"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "GATEWAY_CONTRACT_ADDRESS"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "PROTOCOL_FLAT_FEE"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "SYSTEM_CONTRACT_ADDRESS"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "allowance"
  ): TypedContractMethod<
    [owner: AddressLike, spender: AddressLike],
    [bigint],
    "view"
  >;
  getFunction(
    nameOrSignature: "approve"
  ): TypedContractMethod<
    [spender: AddressLike, amount: BigNumberish],
    [boolean],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "balanceOf"
  ): TypedContractMethod<[account: AddressLike], [bigint], "view">;
  getFunction(
    nameOrSignature: "burn"
  ): TypedContractMethod<[amount: BigNumberish], [boolean], "nonpayable">;
  getFunction(
    nameOrSignature: "decimals"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "deposit"
  ): TypedContractMethod<
    [to: AddressLike, amount: BigNumberish],
    [boolean],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "name"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "symbol"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "totalSupply"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "transfer"
  ): TypedContractMethod<
    [recipient: AddressLike, amount: BigNumberish],
    [boolean],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "transferFrom"
  ): TypedContractMethod<
    [sender: AddressLike, recipient: AddressLike, amount: BigNumberish],
    [boolean],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "updateGasLimit"
  ): TypedContractMethod<[gasLimit: BigNumberish], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "updateProtocolFlatFee"
  ): TypedContractMethod<[protocolFlatFee: BigNumberish], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "updateSystemContractAddress"
  ): TypedContractMethod<[addr: AddressLike], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "withdraw"
  ): TypedContractMethod<
    [to: BytesLike, amount: BigNumberish],
    [boolean],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "withdrawGasFee"
  ): TypedContractMethod<[], [[string, bigint]], "view">;

  getEvent(
    key: "Approval"
  ): TypedContractEvent<
    ApprovalEvent.InputTuple,
    ApprovalEvent.OutputTuple,
    ApprovalEvent.OutputObject
  >;
  getEvent(
    key: "Deposit"
  ): TypedContractEvent<
    DepositEvent.InputTuple,
    DepositEvent.OutputTuple,
    DepositEvent.OutputObject
  >;
  getEvent(
    key: "Transfer"
  ): TypedContractEvent<
    TransferEvent.InputTuple,
    TransferEvent.OutputTuple,
    TransferEvent.OutputObject
  >;
  getEvent(
    key: "UpdatedGasLimit"
  ): TypedContractEvent<
    UpdatedGasLimitEvent.InputTuple,
    UpdatedGasLimitEvent.OutputTuple,
    UpdatedGasLimitEvent.OutputObject
  >;
  getEvent(
    key: "UpdatedProtocolFlatFee"
  ): TypedContractEvent<
    UpdatedProtocolFlatFeeEvent.InputTuple,
    UpdatedProtocolFlatFeeEvent.OutputTuple,
    UpdatedProtocolFlatFeeEvent.OutputObject
  >;
  getEvent(
    key: "UpdatedSystemContract"
  ): TypedContractEvent<
    UpdatedSystemContractEvent.InputTuple,
    UpdatedSystemContractEvent.OutputTuple,
    UpdatedSystemContractEvent.OutputObject
  >;
  getEvent(
    key: "Withdrawal"
  ): TypedContractEvent<
    WithdrawalEvent.InputTuple,
    WithdrawalEvent.OutputTuple,
    WithdrawalEvent.OutputObject
  >;

  filters: {
    "Approval(address,address,uint256)": TypedContractEvent<
      ApprovalEvent.InputTuple,
      ApprovalEvent.OutputTuple,
      ApprovalEvent.OutputObject
    >;
    Approval: TypedContractEvent<
      ApprovalEvent.InputTuple,
      ApprovalEvent.OutputTuple,
      ApprovalEvent.OutputObject
    >;

    "Deposit(bytes,address,uint256)": TypedContractEvent<
      DepositEvent.InputTuple,
      DepositEvent.OutputTuple,
      DepositEvent.OutputObject
    >;
    Deposit: TypedContractEvent<
      DepositEvent.InputTuple,
      DepositEvent.OutputTuple,
      DepositEvent.OutputObject
    >;

    "Transfer(address,address,uint256)": TypedContractEvent<
      TransferEvent.InputTuple,
      TransferEvent.OutputTuple,
      TransferEvent.OutputObject
    >;
    Transfer: TypedContractEvent<
      TransferEvent.InputTuple,
      TransferEvent.OutputTuple,
      TransferEvent.OutputObject
    >;

    "UpdatedGasLimit(uint256)": TypedContractEvent<
      UpdatedGasLimitEvent.InputTuple,
      UpdatedGasLimitEvent.OutputTuple,
      UpdatedGasLimitEvent.OutputObject
    >;
    UpdatedGasLimit: TypedContractEvent<
      UpdatedGasLimitEvent.InputTuple,
      UpdatedGasLimitEvent.OutputTuple,
      UpdatedGasLimitEvent.OutputObject
    >;

    "UpdatedProtocolFlatFee(uint256)": TypedContractEvent<
      UpdatedProtocolFlatFeeEvent.InputTuple,
      UpdatedProtocolFlatFeeEvent.OutputTuple,
      UpdatedProtocolFlatFeeEvent.OutputObject
    >;
    UpdatedProtocolFlatFee: TypedContractEvent<
      UpdatedProtocolFlatFeeEvent.InputTuple,
      UpdatedProtocolFlatFeeEvent.OutputTuple,
      UpdatedProtocolFlatFeeEvent.OutputObject
    >;

    "UpdatedSystemContract(address)": TypedContractEvent<
      UpdatedSystemContractEvent.InputTuple,
      UpdatedSystemContractEvent.OutputTuple,
      UpdatedSystemContractEvent.OutputObject
    >;
    UpdatedSystemContract: TypedContractEvent<
      UpdatedSystemContractEvent.InputTuple,
      UpdatedSystemContractEvent.OutputTuple,
      UpdatedSystemContractEvent.OutputObject
    >;

    "Withdrawal(address,bytes,uint256,uint256,uint256)": TypedContractEvent<
      WithdrawalEvent.InputTuple,
      WithdrawalEvent.OutputTuple,
      WithdrawalEvent.OutputObject
    >;
    Withdrawal: TypedContractEvent<
      WithdrawalEvent.InputTuple,
      WithdrawalEvent.OutputTuple,
      WithdrawalEvent.OutputObject
    >;
  };
}
