import type BN from 'bn.js';
import type {ReturnNumber} from '@supercolony/typechain-types';

export type ProposalVote = {
	againstVotes: number,
	forVotes: number
}

export type Key = string | number[]

export type Proposal = {
	to: AccountId,
	description: Array<number>,
	voteStart: number,
	voteEnd: number,
	executed: boolean
}

export type AccountId = string | number[]

export enum GovernorError {
	amountShouldNotBeZero = 'AmountShouldNotBeZero',
	durationError = 'DurationError',
	proposalNotFound = 'ProposalNotFound',
	proposalAlreadyExecuted = 'ProposalAlreadyExecuted',
	votePeriodEnded = 'VotePeriodEnded',
	alreadyVoted = 'AlreadyVoted',
	votePeriodNotEnded = 'VotePeriodNotEnded',
	quorumNotReached = 'QuorumNotReached',
	transferError = 'TransferError',
	proposalNotAccepted = 'ProposalNotAccepted',
	callerIsNotOwner = 'CallerIsNotOwner',
	voteIsWrong = 'VoteIsWrong',
	evalIsWrong = 'EvalIsWrong'
}

export enum VoteType {
	against = 'Against',
	for = 'For'
}

export enum EvalType {
	against = 'Against',
	for = 'For'
}

