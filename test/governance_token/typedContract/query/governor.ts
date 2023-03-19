/* This file is auto-generated */

import type { ContractPromise } from '@polkadot/api-contract';
import type { GasLimit, GasLimitAndRequiredValue, Result } from '@supercolony/typechain-types';
import type { QueryReturnType } from '@supercolony/typechain-types';
import { queryJSON, queryOkJSON, handleReturnType } from '@supercolony/typechain-types';
import type * as ArgumentTypes from '../types-arguments/governor';
import type * as ReturnTypes from '../types-returns/governor';
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
	* setEvalToken
	*
	* @param { ArgumentTypes.AccountId } evalToken,
	* @returns { Result<null, ReturnTypes.GovernorError> }
	*/
	"setEvalToken" (
		evalToken: ArgumentTypes.AccountId,
		__options ? : GasLimit,
	): Promise< QueryReturnType< Result<null, ReturnTypes.GovernorError> > >{
		return queryOkJSON( this.__nativeContract, this.__callerAddress, "setEvalToken", [evalToken], __options , (result) => { return handleReturnType(result, getTypeDescription(15, 'governor')); });
	}

	/**
	* propose
	*
	* @param { ArgumentTypes.AccountId } to,
	* @param { (number | string | BN) } duration,
	* @param { Array<(number | string | BN)> } description,
	* @returns { Result<null, ReturnTypes.GovernorError> }
	*/
	"propose" (
		to: ArgumentTypes.AccountId,
		duration: (number | string | BN),
		description: Array<(number | string | BN)>,
		__options ? : GasLimit,
	): Promise< QueryReturnType< Result<null, ReturnTypes.GovernorError> > >{
		return queryOkJSON( this.__nativeContract, this.__callerAddress, "propose", [to, duration, description], __options , (result) => { return handleReturnType(result, getTypeDescription(15, 'governor')); });
	}

	/**
	* vote
	*
	* @param { (number | string | BN) } proposalId,
	* @param { ArgumentTypes.VoteType } vote,
	* @param { ArgumentTypes.EvalType } eval,
	* @returns { Result<null, ReturnTypes.GovernorError> }
	*/
	"vote" (
		proposalId: (number | string | BN),
		vote: ArgumentTypes.VoteType,
		eval: ArgumentTypes.EvalType,
		__options ? : GasLimit,
	): Promise< QueryReturnType< Result<null, ReturnTypes.GovernorError> > >{
		return queryOkJSON( this.__nativeContract, this.__callerAddress, "vote", [proposalId, vote, eval], __options , (result) => { return handleReturnType(result, getTypeDescription(15, 'governor')); });
	}

	/**
	* execute
	*
	* @param { (number | string | BN) } proposalId,
	* @returns { Result<null, ReturnTypes.GovernorError> }
	*/
	"execute" (
		proposalId: (number | string | BN),
		__options ? : GasLimit,
	): Promise< QueryReturnType< Result<null, ReturnTypes.GovernorError> > >{
		return queryOkJSON( this.__nativeContract, this.__callerAddress, "execute", [proposalId], __options , (result) => { return handleReturnType(result, getTypeDescription(15, 'governor')); });
	}

	/**
	* getProposalVote
	*
	* @param { (number | string | BN) } proposalId,
	* @returns { ReturnTypes.ProposalVote | null }
	*/
	"getProposalVote" (
		proposalId: (number | string | BN),
		__options ? : GasLimit,
	): Promise< QueryReturnType< ReturnTypes.ProposalVote | null > >{
		return queryJSON( this.__nativeContract, this.__callerAddress, "getProposalVote", [proposalId], __options , (result) => { return handleReturnType(result, getTypeDescription(19, 'governor')); });
	}

	/**
	* getProposal
	*
	* @param { (number | string | BN) } proposalId,
	* @returns { ReturnTypes.Proposal | null }
	*/
	"getProposal" (
		proposalId: (number | string | BN),
		__options ? : GasLimit,
	): Promise< QueryReturnType< ReturnTypes.Proposal | null > >{
		return queryJSON( this.__nativeContract, this.__callerAddress, "getProposal", [proposalId], __options , (result) => { return handleReturnType(result, getTypeDescription(20, 'governor')); });
	}

	/**
	* hasVoted
	*
	* @param { (number | string | BN) } proposalId,
	* @param { ArgumentTypes.AccountId } accountId,
	* @returns { boolean }
	*/
	"hasVoted" (
		proposalId: (number | string | BN),
		accountId: ArgumentTypes.AccountId,
		__options ? : GasLimit,
	): Promise< QueryReturnType< boolean > >{
		return queryJSON( this.__nativeContract, this.__callerAddress, "hasVoted", [proposalId, accountId], __options );
	}

}