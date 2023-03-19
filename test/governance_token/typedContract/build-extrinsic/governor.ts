/* This file is auto-generated */

import type { ContractPromise } from '@polkadot/api-contract';
import type { GasLimit, GasLimitAndRequiredValue } from '@supercolony/typechain-types';
import { buildSubmittableExtrinsic } from '@supercolony/typechain-types';
import type * as ArgumentTypes from '../types-arguments/governor';
import type BN from 'bn.js';



export default class Methods {
	private __nativeContract : ContractPromise;

	constructor(
		nativeContract : ContractPromise,
	) {
		this.__nativeContract = nativeContract;
	}
	/**
	 * setEvalToken
	 *
	 * @param { ArgumentTypes.AccountId } evalToken,
	*/
	"setEvalToken" (
		evalToken: ArgumentTypes.AccountId,
		__options: GasLimit,
	){
		return buildSubmittableExtrinsic( this.__nativeContract, "setEvalToken", [evalToken], __options);
	}

	/**
	 * propose
	 *
	 * @param { ArgumentTypes.AccountId } to,
	 * @param { (number | string | BN) } duration,
	 * @param { Array<(number | string | BN)> } description,
	*/
	"propose" (
		to: ArgumentTypes.AccountId,
		duration: (number | string | BN),
		description: Array<(number | string | BN)>,
		__options: GasLimit,
	){
		return buildSubmittableExtrinsic( this.__nativeContract, "propose", [to, duration, description], __options);
	}

	/**
	 * vote
	 *
	 * @param { (number | string | BN) } proposalId,
	 * @param { ArgumentTypes.VoteType } vote,
	 * @param { ArgumentTypes.EvalType } eval,
	*/
	"vote" (
		proposalId: (number | string | BN),
		vote: ArgumentTypes.VoteType,
		eval: ArgumentTypes.EvalType,
		__options: GasLimit,
	){
		return buildSubmittableExtrinsic( this.__nativeContract, "vote", [proposalId, vote, eval], __options);
	}

	/**
	 * execute
	 *
	 * @param { (number | string | BN) } proposalId,
	*/
	"execute" (
		proposalId: (number | string | BN),
		__options: GasLimit,
	){
		return buildSubmittableExtrinsic( this.__nativeContract, "execute", [proposalId], __options);
	}

	/**
	 * getProposalVote
	 *
	 * @param { (number | string | BN) } proposalId,
	*/
	"getProposalVote" (
		proposalId: (number | string | BN),
		__options: GasLimit,
	){
		return buildSubmittableExtrinsic( this.__nativeContract, "getProposalVote", [proposalId], __options);
	}

	/**
	 * getProposal
	 *
	 * @param { (number | string | BN) } proposalId,
	*/
	"getProposal" (
		proposalId: (number | string | BN),
		__options: GasLimit,
	){
		return buildSubmittableExtrinsic( this.__nativeContract, "getProposal", [proposalId], __options);
	}

	/**
	 * hasVoted
	 *
	 * @param { (number | string | BN) } proposalId,
	 * @param { ArgumentTypes.AccountId } accountId,
	*/
	"hasVoted" (
		proposalId: (number | string | BN),
		accountId: ArgumentTypes.AccountId,
		__options: GasLimit,
	){
		return buildSubmittableExtrinsic( this.__nativeContract, "hasVoted", [proposalId, accountId], __options);
	}

}