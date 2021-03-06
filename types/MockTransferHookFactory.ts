/* Generated by ts-generator ver. 0.0.8 */
/* tslint:disable */

import { Contract, ContractFactory, Signer } from "ethers";
import { Provider } from "ethers/providers";
import { UnsignedTransaction } from "ethers/utils/transaction";

import { TransactionOverrides } from ".";
import { MockTransferHook } from "./MockTransferHook";

export class MockTransferHookFactory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(overrides?: TransactionOverrides): Promise<MockTransferHook> {
    return super.deploy(overrides) as Promise<MockTransferHook>;
  }
  getDeployTransaction(overrides?: TransactionOverrides): UnsignedTransaction {
    return super.getDeployTransaction(overrides);
  }
  attach(address: string): MockTransferHook {
    return super.attach(address) as MockTransferHook;
  }
  connect(signer: Signer): MockTransferHookFactory {
    return super.connect(signer) as MockTransferHookFactory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): MockTransferHook {
    return new Contract(address, _abi, signerOrProvider) as MockTransferHook;
  }
}

const _abi = [
  {
    anonymous: false,
    inputs: [],
    name: "MockHookEvent",
    type: "event"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address"
      },
      {
        internalType: "address",
        name: "to",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256"
      }
    ],
    name: "onTransfer",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  }
];

const _bytecode =
  "0x6080604052348015600f57600080fd5b5060c68061001e6000396000f3fe6080604052348015600f57600080fd5b506004361060285760003560e01c80634a39314914602d575b600080fd5b606060048036036060811015604157600080fd5b506001600160a01b038135811691602081013590911690604001356062565b005b6040517f34250cbfa6d218c1d0a9b5950b60dac352f03d00642722e501cbc86d1ea8130190600090a150505056fea26469706673582212201ab5541a5ef6ac76bf620168e48ccc7886dac259a46ee83b9a222bf16621aaf064736f6c634300060a0033";
