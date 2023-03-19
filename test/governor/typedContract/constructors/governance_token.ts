import {CodePromise} from "@polkadot/api-contract";
import type {KeyringPair} from "@polkadot/keyring/types";
import Files from "fs";
import type {ApiPromise} from "@polkadot/api";
import {_signAndSend, SignAndSendSuccessResponse} from "@supercolony/typechain-types";
import type {ConstructorOptions} from "@supercolony/typechain-types";
import type * as ArgumentTypes from '../types-arguments/governance_token';
import type BN from 'bn.js';

export default class Constructors {
	readonly nativeAPI: ApiPromise;
	readonly signer: KeyringPair;

	constructor(
		nativeAPI: ApiPromise,
		signer: KeyringPair,
	) {
		this.nativeAPI = nativeAPI;
		this.signer = signer;
	}

    /**
    * new
    *
	* @param { Array<(number | string | BN)> | null } name,
	* @param { Array<(number | string | BN)> | null } symbol,
	* @param { (number | string | BN) } decimal,
	*/
   	async "new" (
   		name: Array<(number | string | BN)> | null,
   		symbol: Array<(number | string | BN)> | null,
   		decimal: (number | string | BN),
   		__options ? : ConstructorOptions,
   	) {
   		const __contract = JSON.parse(Files.readFileSync("./artifacts/governance_token.contract").toString());
		const code = new CodePromise(this.nativeAPI, __contract, __contract.source.wasm);
		const gasLimit = 100000 * 1000000 || __options?.gasLimit;

		const storageDepositLimit = __options?.storageDepositLimit;
        const tx = code.tx["new"]!({ gasLimit, storageDepositLimit, value: __options?.value }, name, symbol, decimal);
		let response;

		try {
			response = await _signAndSend(this.nativeAPI.registry, tx, this.signer, (event: any) => event);
		}
		catch (error) {
			console.log(error);
		}

		return {
			result: response as SignAndSendSuccessResponse,
			// @ts-ignore
			address: (response as SignAndSendSuccessResponse)!.result!.contract.address.toString(),
		}
   	}
}