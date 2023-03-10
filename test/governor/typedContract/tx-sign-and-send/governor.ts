/* This file is auto-generated */

import type { ContractPromise } from '@polkadot/api-contract';
import type { KeyringPair } from '@polkadot/keyring/types';
import type { ApiPromise } from '@polkadot/api';
import type { GasLimit, GasLimitAndRequiredValue, Result } from '@supercolony/typechain-types';
import { txSignAndSend } from '@supercolony/typechain-types';
import type * as ArgumentTypes from '../types-arguments/governor';
import type BN from 'bn.js';
// @ts-ignore
import type {EventRecord} from "@polkadot/api/submittable";
import {decodeEvents} from "../shared/utils";


export default class Methods {
	private __nativeContract : ContractPromise;
	private __keyringPair : KeyringPair;
	private __apiPromise: ApiPromise;

	constructor(
		apiPromise: ApiPromise,
		nativeContract : ContractPromise,
		keyringPair : KeyringPair,
	) {
		this.__apiPromise = apiPromise;
		this.__nativeContract = nativeContract;
		this.__keyringPair = keyringPair;
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
		__options ? : GasLimit,
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
	*/
	"vote" (
		proposalId: (number | string | BN),
		vote: ArgumentTypes.VoteType,
		eval: ArgumentTypes.EvalType,
		__options ? : GasLimit,
	){
		return txSignAndSend( this.__apiPromise, this.__nativeContract, this.__keyringPair, "vote", (events: EventRecord) => {
			return decodeEvents(events, this.__nativeContract, "governor");
		}, [proposalId, vote, eval], __options);
	}

	/**
	* execute
	*
	* @param { (number | string | BN) } proposalId,
	*/
	"execute" (
		proposalId: (number | string | BN),
		__options ? : GasLimit,
	){
		return txSignAndSend( this.__apiPromise, this.__nativeContract, this.__keyringPair, "execute", (events: EventRecord) => {
			return decodeEvents(events, this.__nativeContract, "governor");
		}, [proposalId], __options);
	}

	/**
	* getProposalVote
	*
	* @param { (number | string | BN) } proposalId,
	*/
	"getProposalVote" (
		proposalId: (number | string | BN),
		__options ? : GasLimit,
	){
		return txSignAndSend( this.__apiPromise, this.__nativeContract, this.__keyringPair, "getProposalVote", (events: EventRecord) => {
			return decodeEvents(events, this.__nativeContract, "governor");
		}, [proposalId], __options);
	}

	/**
	* getProposal
	*
	* @param { (number | string | BN) } proposalId,
	*/
	"getProposal" (
		proposalId: (number | string | BN),
		__options ? : GasLimit,
	){
		return txSignAndSend( this.__apiPromise, this.__nativeContract, this.__keyringPair, "getProposal", (events: EventRecord) => {
			return decodeEvents(events, this.__nativeContract, "governor");
		}, [proposalId], __options);
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
		__options ? : GasLimit,
	){
		return txSignAndSend( this.__apiPromise, this.__nativeContract, this.__keyringPair, "hasVoted", (events: EventRecord) => {
			return decodeEvents(events, this.__nativeContract, "governor");
		}, [proposalId, accountId], __options);
	}

}