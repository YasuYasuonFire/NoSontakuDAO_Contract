/* This file is auto-generated */

import type { ContractPromise } from '@polkadot/api-contract';
import type { GasLimit, GasLimitAndRequiredValue } from '@supercolony/typechain-types';
import { buildSubmittableExtrinsic } from '@supercolony/typechain-types';
import type * as ArgumentTypes from '../types-arguments/governance_token';
import type BN from 'bn.js';



export default class Methods {
	private __nativeContract : ContractPromise;

	constructor(
		nativeContract : ContractPromise,
	) {
		this.__nativeContract = nativeContract;
	}
	/**
	 * balanceOf
	 *
	 * @param { ArgumentTypes.AccountId } owner,
	*/
	"balanceOf" (
		owner: ArgumentTypes.AccountId,
		__options: GasLimit,
	){
		return buildSubmittableExtrinsic( this.__nativeContract, "psp22::balanceOf", [owner], __options);
	}

	/**
	 * approve
	 *
	 * @param { ArgumentTypes.AccountId } spender,
	 * @param { (string | number | BN) } value,
	*/
	"approve" (
		spender: ArgumentTypes.AccountId,
		value: (string | number | BN),
		__options: GasLimit,
	){
		return buildSubmittableExtrinsic( this.__nativeContract, "psp22::approve", [spender, value], __options);
	}

	/**
	 * totalSupply
	 *
	*/
	"totalSupply" (
		__options: GasLimit,
	){
		return buildSubmittableExtrinsic( this.__nativeContract, "psp22::totalSupply", [], __options);
	}

	/**
	 * transferFrom
	 *
	 * @param { ArgumentTypes.AccountId } from,
	 * @param { ArgumentTypes.AccountId } to,
	 * @param { (string | number | BN) } value,
	 * @param { Array<(number | string | BN)> } data,
	*/
	"transferFrom" (
		from: ArgumentTypes.AccountId,
		to: ArgumentTypes.AccountId,
		value: (string | number | BN),
		data: Array<(number | string | BN)>,
		__options: GasLimit,
	){
		return buildSubmittableExtrinsic( this.__nativeContract, "psp22::transferFrom", [from, to, value, data], __options);
	}

	/**
	 * increaseAllowance
	 *
	 * @param { ArgumentTypes.AccountId } spender,
	 * @param { (string | number | BN) } deltaValue,
	*/
	"increaseAllowance" (
		spender: ArgumentTypes.AccountId,
		deltaValue: (string | number | BN),
		__options: GasLimit,
	){
		return buildSubmittableExtrinsic( this.__nativeContract, "psp22::increaseAllowance", [spender, deltaValue], __options);
	}

	/**
	 * transfer
	 *
	 * @param { ArgumentTypes.AccountId } to,
	 * @param { (string | number | BN) } value,
	 * @param { Array<(number | string | BN)> } data,
	*/
	"transfer" (
		to: ArgumentTypes.AccountId,
		value: (string | number | BN),
		data: Array<(number | string | BN)>,
		__options: GasLimit,
	){
		return buildSubmittableExtrinsic( this.__nativeContract, "psp22::transfer", [to, value, data], __options);
	}

	/**
	 * allowance
	 *
	 * @param { ArgumentTypes.AccountId } owner,
	 * @param { ArgumentTypes.AccountId } spender,
	*/
	"allowance" (
		owner: ArgumentTypes.AccountId,
		spender: ArgumentTypes.AccountId,
		__options: GasLimit,
	){
		return buildSubmittableExtrinsic( this.__nativeContract, "psp22::allowance", [owner, spender], __options);
	}

	/**
	 * decreaseAllowance
	 *
	 * @param { ArgumentTypes.AccountId } spender,
	 * @param { (string | number | BN) } deltaValue,
	*/
	"decreaseAllowance" (
		spender: ArgumentTypes.AccountId,
		deltaValue: (string | number | BN),
		__options: GasLimit,
	){
		return buildSubmittableExtrinsic( this.__nativeContract, "psp22::decreaseAllowance", [spender, deltaValue], __options);
	}

	/**
	 * burn
	 *
	 * @param { ArgumentTypes.AccountId } account,
	 * @param { (string | number | BN) } amount,
	*/
	"burn" (
		account: ArgumentTypes.AccountId,
		amount: (string | number | BN),
		__options: GasLimit,
	){
		return buildSubmittableExtrinsic( this.__nativeContract, "psp22Burnable::burn", [account, amount], __options);
	}

	/**
	 * mint
	 *
	 * @param { ArgumentTypes.AccountId } account,
	 * @param { (string | number | BN) } amount,
	*/
	"mint" (
		account: ArgumentTypes.AccountId,
		amount: (string | number | BN),
		__options: GasLimit,
	){
		return buildSubmittableExtrinsic( this.__nativeContract, "psp22Mintable::mint", [account, amount], __options);
	}

	/**
	 * tokenName
	 *
	*/
	"tokenName" (
		__options: GasLimit,
	){
		return buildSubmittableExtrinsic( this.__nativeContract, "psp22Metadata::tokenName", [], __options);
	}

	/**
	 * tokenSymbol
	 *
	*/
	"tokenSymbol" (
		__options: GasLimit,
	){
		return buildSubmittableExtrinsic( this.__nativeContract, "psp22Metadata::tokenSymbol", [], __options);
	}

	/**
	 * tokenDecimals
	 *
	*/
	"tokenDecimals" (
		__options: GasLimit,
	){
		return buildSubmittableExtrinsic( this.__nativeContract, "psp22Metadata::tokenDecimals", [], __options);
	}

}