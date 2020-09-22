/* Generated by ts-generator ver. 0.0.8 */
/* tslint:disable */

import { Contract, Signer } from "ethers";
import { Provider } from "ethers/providers";

import { Proxy } from "./Proxy";

export class ProxyFactory {
  static connect(address: string, signerOrProvider: Signer | Provider): Proxy {
    return new Contract(address, _abi, signerOrProvider) as Proxy;
  }
}

const _abi = [
  {
    stateMutability: "payable",
    type: "fallback"
  }
];
