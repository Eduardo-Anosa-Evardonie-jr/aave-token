/* Generated by ts-generator ver. 0.0.8 */
/* tslint:disable */

import { Contract, ContractTransaction, EventFilter, Signer } from "ethers";
import { Listener, Provider } from "ethers/providers";
import { Arrayish, BigNumber, BigNumberish, Interface } from "ethers/utils";
import {
  TransactionOverrides,
  TypedEventDescription,
  TypedFunctionDescription
} from ".";

interface ITransferHookInterface extends Interface {
  functions: {
    onTransfer: TypedFunctionDescription<{
      encode([from, to, amount]: [string, string, BigNumberish]): string;
    }>;
  };

  events: {};
}

export class ITransferHook extends Contract {
  connect(signerOrProvider: Signer | Provider | string): ITransferHook;
  attach(addressOrName: string): ITransferHook;
  deployed(): Promise<ITransferHook>;

  on(event: EventFilter | string, listener: Listener): ITransferHook;
  once(event: EventFilter | string, listener: Listener): ITransferHook;
  addListener(
    eventName: EventFilter | string,
    listener: Listener
  ): ITransferHook;
  removeAllListeners(eventName: EventFilter | string): ITransferHook;
  removeListener(eventName: any, listener: Listener): ITransferHook;

  interface: ITransferHookInterface;

  functions: {
    onTransfer(
      from: string,
      to: string,
      amount: BigNumberish,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;
  };

  onTransfer(
    from: string,
    to: string,
    amount: BigNumberish,
    overrides?: TransactionOverrides
  ): Promise<ContractTransaction>;

  filters: {};

  estimate: {
    onTransfer(
      from: string,
      to: string,
      amount: BigNumberish
    ): Promise<BigNumber>;
  };
}
