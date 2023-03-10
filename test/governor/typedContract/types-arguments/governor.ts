import type BN from 'bn.js';

export type ProposalVote = {
	againstVotes: (number | string | BN),
	forVotes: (number | string | BN)
}

export type Key = string | number[]

export type Proposal = {
	to: AccountId,
	description: Array<(number | string | BN)>,
	voteStart: (number | string | BN),
	voteEnd: (number | string | BN),
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
	callerIsNotOwner = 'CallerIsNotOwner'
}

export enum VoteType {
	against = 'Against',
	for = 'For'
}

export enum EvalType {
	against = 'Against',
	for = 'For'
}

