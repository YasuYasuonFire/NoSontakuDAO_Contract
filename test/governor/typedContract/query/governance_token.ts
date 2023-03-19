/* This file is auto-generated */

import type { ContractPromise } from '@polkadot/api-contract';
import type { GasLimit, GasLimitAndRequiredValue, Result } from '@supercolony/typechain-types';
import type { QueryReturnType } from '@supercolony/typechain-types';
import { queryJSON, queryOkJSON, handleReturnType } from '@supercolony/typechain-types';
import type * as ArgumentTypes from '../types-arguments/governance_token';
import type * as ReturnTypes from '../types-returns/governance_token';
import type BN from 'bn.js';
import {ReturnNumber} from '@supercolony/typechain-types';
import {getTypeDescription} from './../shared/utils';


export default class Methods {
	private __nativeContract : ContractPromise;
	private __callerAddress : string;

	constructor(
		nativeContract : ContractPromise,
		callerAddress : string,
	) {
		this.__nativeContract = nativeContract;
		this.__callerAddress = callerAddress;
	}

	/**
	* balanceOf
	*
	* @param { ArgumentTypes.AccountId } owner,
	* @returns { ReturnNumber }
	*/
	"balanceOf" (
		owner: ArgumentTypes.AccountId,
		__options ? : GasLimit,
	): Promise< QueryReturnType< ReturnNumber > >{
		return queryJSON< ReturnNumber >( this.__nativeContract, this.__callerAddress, "psp22::balanceOf", [owner], __options , (result) => { return new ReturnNumber(result as (number | string)); });
	}

	/**
	* approve
	*
	* @param { ArgumentTypes.AccountId } spender,
	* @param { (string | number | BN) } value,
	* @returns { Result<null, ReturnTypes.PSP22Error> }
	*/
	"approve" (
		spender: ArgumentTypes.AccountId,
		value: (string | number | BN),
		__options ? : GasLimit,
	): Promise< QueryReturnType< Result<null, ReturnTypes.PSP22Error> > >{
		return queryOkJSON( this.__nativeContract, this.__callerAddress, "psp22::approve", [spender, value], __options , (result) => { return handleReturnType(result, getTypeDescription(14, 'governance_token')); });
	}

	/**
	* totalSupply
	*
	* @returns { ReturnNumber }
	*/
	"totalSupply" (
		__options ? : GasLimit,
	): Promise< QueryReturnType< ReturnNumber > >{
		return queryJSON< ReturnNumber >( this.__nativeContract, this.__callerAddress, "psp22::totalSupply", [], __options , (result) => { return new ReturnNumber(result as (number | string)); });
	}

	/**
	* transferFrom
	*
	* @param { ArgumentTypes.AccountId } from,
	* @param { ArgumentTypes.AccountId } to,
	* @param { (string | number | BN) } value,
	* @param { Array<(number | string | BN)> } data,
	* @returns { Result<null, ReturnTypes.PSP22Error> }
	*/
	"transferFrom" (
		from: ArgumentTypes.AccountId,
		to: ArgumentTypes.AccountId,
		value: (string | number | BN),
		data: Array<(number | string | BN)>,
		__options ? : GasLimit,
	): Promise< QueryReturnType< Result<null, ReturnTypes.PSP22Error> > >{
		return queryOkJSON( this.__nativeContract, this.__callerAddress, "psp22::transferFrom", [from, to, value, data], __options , (result) => { return handleReturnType(result, getTypeDescription(14, 'governance_token')); });
	}

	/**
	* increaseAllowance
	*
	* @param { ArgumentTypes.AccountId } spender,
	* @param { (string | number | BN) } deltaValue,
	* @returns { Result<null, ReturnTypes.PSP22Error> }
	*/
	"increaseAllowance" (
		spender: ArgumentTypes.AccountId,
		deltaValue: (string | number | BN),
		__options ? : GasLimit,
	): Promise< QueryReturnType< Result<null, ReturnTypes.PSP22Error> > >{
		return queryOkJSON( this.__nativeContract, this.__callerAddress, "psp22::increaseAllowance", [spender, deltaValue], __options , (result) => { return handleReturnType(result, getTypeDescription(14, 'governance_token')); });
	}

	/**
	* transfer
	*
	* @param { ArgumentTypes.AccountId } to,
	* @param { (string | number | BN) } value,
	* @param { Array<(number | string | BN)> } data,
	* @returns { Result<null, ReturnTypes.PSP22Error> }
	*/
	"transfer" (
		to: ArgumentTypes.AccountId,
		value: (string | number | BN),
		data: Array<(number | string | BN)>,
		__options ? : GasLimit,
	): Promise< QueryReturnType< Result<null, ReturnTypes.PSP22Error> > >{
		return queryOkJSON( this.__nativeContract, this.__callerAddress, "psp22::transfer", [to, value, data], __options , (result) => { return handleReturnType(result, getTypeDescription(14, 'governance_token')); });
	}

	/**
	* allowance
	*
	* @param { ArgumentTypes.AccountId } owner,
	* @param { ArgumentTypes.AccountId } spender,
	* @returns { ReturnNumber }
	*/
	"allowance" (
		owner: ArgumentTypes.AccountId,
		spender: ArgumentTypes.AccountId,
		__options ? : GasLimit,
	): Promise< QueryReturnType< ReturnNumber > >{
		return queryJSON< ReturnNumber >( this.__nativeContract, this.__callerAddress, "psp22::allowance", [owner, spender], __options , (result) => { return new ReturnNumber(result as (number | string)); });
	}

	/**
	* decreaseAllowance
	*
	* @param { ArgumentTypes.AccountId } spender,
	* @param { (string | number | BN) } deltaValue,
	* @returns { Result<null, ReturnTypes.PSP22Error> }
	*/
	"decreaseAllowance" (
		spender: ArgumentTypes.AccountId,
		deltaValue: (string | number | BN),
		__options ? : GasLimit,
	): Promise< QueryReturnType< Result<null, ReturnTypes.PSP22Error> > >{
		return queryOkJSON( this.__nativeContract, this.__callerAddress, "psp22::decreaseAllowance", [spender, deltaValue], __options , (result) => { return handleReturnType(result, getTypeDescription(14, 'governance_token')); });
	}

	/**
	* burn
	*
	* @param { ArgumentTypes.AccountId } account,
	* @param { (string | number | BN) } amount,
	* @returns { Result<null, ReturnTypes.PSP22Error> }
	*/
	"burn" (
		account: ArgumentTypes.AccountId,
		amount: (string | number | BN),
		__options ? : GasLimit,
	): Promise< QueryReturnType< Result<null, ReturnTypes.PSP22Error> > >{
		return queryOkJSON( this.__nativeContract, this.__callerAddress, "psp22Burnable::burn", [account, amount], __options , (result) => { return handleReturnType(result, getTypeDescription(14, 'governance_token')); });
	}

	/**
	* mint
	*
	* @param { ArgumentTypes.AccountId } account,
	* @param { (string | number | BN) } amount,
	* @returns { Result<null, ReturnTypes.PSP22Error> }
	*/
	"mint" (
		account: ArgumentTypes.AccountId,
		amount: (string | number | BN),
		__options ? : GasLimit,
	): Promise< QueryReturnType< Result<null, ReturnTypes.PSP22Error> > >{
		return queryOkJSON( this.__nativeContract, this.__callerAddress, "psp22Mintable::mint", [account, amount], __options , (result) => { return handleReturnType(result, getTypeDescription(14, 'governance_token')); });
	}

	/**
	* tokenName
	*
	* @returns { Array<number> | null }
	*/
	"tokenName" (
		__options ? : GasLimit,
	): Promise< QueryReturnType< Array<number> | null > >{
		return queryJSON( this.__nativeContract, this.__callerAddress, "psp22Metadata::tokenName", [], __options , (result) => { return handleReturnType(result, getTypeDescription(13, 'governance_token')); });
	}

	/**
	* tokenSymbol
	*
	* @returns { Array<number> | null }
	*/
	"tokenSymbol" (
		__options ? : GasLimit,
	): Promise< QueryReturnType< Array<number> | null > >{
		return queryJSON( this.__nativeContract, this.__callerAddress, "psp22Metadata::tokenSymbol", [], __options , (result) => { return handleReturnType(result, getTypeDescription(13, 'governance_token')); });
	}

	/**
	* tokenDecimals
	*
	* @returns { number }
	*/
	"tokenDecimals" (
		__options ? : GasLimit,
	): Promise< QueryReturnType< number > >{
		return queryJSON( this.__nativeContract, this.__callerAddress, "psp22Metadata::tokenDecimals", [], __options );
	}

}