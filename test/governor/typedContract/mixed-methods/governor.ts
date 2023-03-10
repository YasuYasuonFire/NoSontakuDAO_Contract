/* This file is auto-generated */

import type { ContractPromise } from '@polkadot/api-contract';
import type { ApiPromise } from '@polkadot/api';
import type { KeyringPair } from '@polkadot/keyring/types';
import type { GasLimit, GasLimitAndRequiredValue, Result } from '@supercolony/typechain-types';
import type { QueryReturnType } from '@supercolony/typechain-types';
import { queryOkJSON, queryJSON, handleReturnType } from '@supercolony/typechain-types';
import { txSignAndSend } from '@supercolony/typechain-types';
import type * as ArgumentTypes from '../types-arguments/governor';
import type * as ReturnTypes from '../types-returns/governor';
import type BN from 'bn.js';
import {ReturnNumber} from '@supercolony/typechain-types';
import {getTypeDescription} from './../shared/utils';
// @ts-ignore
import type {EventRecord} from "@polkadot/api/submittable";
import {decodeEvents} from "../shared/utils";


export default class Methods {
	private __nativeContract : ContractPromise;
	private __keyringPair : KeyringPair;
	private __callerAddress : string;
	private __apiPromise: ApiPromise;

	constructor(
		apiPromise : ApiPromise,
		nativeContract : ContractPromise,
		keyringPair : KeyringPair,
	) {
		this.__apiPromise = apiPromise;
		this.__nativeContract = nativeContract;
		this.__keyringPair = keyringPair;
		this.__callerAddress = keyringPair.address;
	}

	/**
	* propose
	*
	* @param { ArgumentTypes.AccountId } to,
	* @param { (number | string | BN) } duration,
	* @param { Array<(number | string | BN)> } description,
	* @returns { void }
	*/
	"propose" (
		to: ArgumentTypes.AccountId,
		duration: (number | string | BN),
		description: Array<(number | string | BN)>,
		__options: GasLimit,
	){
		return txSignAndSend( this.__apiPromise, this.__nativeContract, this.__keyringPair, "propose", (events: EventRecord) => {
			return decodeEvents(events, this.__nativeContract, "governor");
		}, [to, duration, description], __options);
	}

	/**
	* vote
	*
	* @param { (number | string | BN) } proposalId,
	* @param { ArgumentTypes.VoteType } vote,
	* @param { ArgumentTypes.EvalType } eval,
	* @returns { void }
	*/
	"vote" (
		proposalId: (number | string | BN),
		vote: ArgumentTypes.VoteType,
		eval: ArgumentTypes.EvalType,
		__options: GasLimit,
	){
		return txSignAndSend( this.__apiPromise, this.__nativeContract, this.__keyringPair, "vote", (events: EventRecord) => {
			return decodeEvents(events, this.__nativeContract, "governor");
		}, [proposalId, vote, eval], __options);
	}

	/**
	* execute
	*
	* @param { (number | string | BN) } proposalId,
	* @returns { void }
	*/
	"execute" (
		proposalId: (number | string | BN),
		__options: GasLimit,
	){
		return txSignAndSend( this.__apiPromise, this.__nativeContract, this.__keyringPair, "execute", (events: EventRecord) => {
			return decodeEvents(events, this.__nativeContract, "governor");
		}, [proposalId], __options);
	}

	/**
	* getProposalVote
	*
	* @param { (number | string | BN) } proposalId,
	* @returns { ReturnTypes.ProposalVote | null }
	*/
	"getProposalVote" (
		proposalId: (number | string | BN),
		__options: GasLimit,
	): Promise< QueryReturnType< ReturnTypes.ProposalVote | null > >{
		return queryJSON( this.__nativeContract, this.__callerAddress, "getProposalVote", [proposalId], __options, (result) => { return handleReturnType(result, getTypeDescription(19, 'governor')); });
	}

	/**
	* getProposal
	*
	* @param { (number | string | BN) } proposalId,
	* @returns { ReturnTypes.Proposal | null }
	*/
	"getProposal" (
		proposalId: (number | string | BN),
		__options: GasLimit,
	): Promise< QueryReturnType< ReturnTypes.Proposal | null > >{
		return queryJSON( this.__nativeContract, this.__callerAddress, "getProposal", [proposalId], __options, (result) => { return handleReturnType(result, getTypeDescription(20, 'governor')); });
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
		__options: GasLimit,
	): Promise< QueryReturnType< boolean > >{
		return queryJSON( this.__nativeContract, this.__callerAddress, "hasVoted", [proposalId, accountId], __options);
	}

}