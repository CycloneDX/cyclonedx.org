---
# Page settings
layout: document
keywords: application security, software security, software bill of material, SBOM, BOM, open source, supply chain, specification, spdx, license, package url, purl, cpe
comments: false
banner: false

# Hero section
title: Voting Process
window_title: Voting Process
description: Voting Process

# Micro navigation
micro_nav: false

# Page navigation
    
---

# Voting Process
**December 2020**

## Introduction
The CycloneDX Voting Process is based on [Voting in meritocratic governance projects](http://oss-watch.ac.uk/resources/meritocraticgovernancevoting) 
by Gabriel Hanganu. And is licensed under the [Creative Commons Attribution-ShareAlike 4.0 International License](http://creativecommons.org/licenses/by-sa/4.0/).

## Voting
Depending on the proposal, voting may be performed directly in the project issue tracker or via the mailing list.

Voting in the issue tracker is signaled by tagging an issue with “open for voting”, adding a comment calling for a vote, and announcing the vote by sending an email with ‘[VOTE]’ in the subject line to the mailing list. The email should contain a brief summary of the proposal and a reference to the issue being voted on.

Voting via the mailing list is signaled by sending an email with ‘[VOTE]’ in the subject line to the mailing list. The email should contain the proposal being voted on.

If a formal vote on a proposal is called, all participants on the project contributors’ list may express an opinion and vote. They do this by responding to the issue comment calling for a vote, with the following vote and information:
* +1 ‘yes’, ‘agree’: also willing to help bring about the proposed action, indicated by a thumbs up reaction
* +0 ‘yes’, ‘agree’: not willing or able to help bring about the proposed action, indicated by a comment
* -0 ‘no’, ‘disagree’: but will not oppose the action’s going forward, indicated by a comment
* -1 ‘no’, ‘disagree’: opposes the action’s going forward and must propose an alternative action to address the issue (or a justification for not addressing the issue), indicated by a thumbs down reaction

To abstain from the vote, participants simply do not respond to the call for a vote. However, it can be more helpful to cast a ‘+0’ or ‘-0’ than to abstain, since this allows the team to gauge the general feeling of the community if the proposal should be controversial.

Every member of the community, from interested user to the most active developer, has a vote. The project encourages all members to express their opinions in all discussions and all votes.

However, only some members have binding votes for the purposes of decision making; these are the committers, Industry Working Group members and/or the members of the Core Team.

It is therefore their responsibility to ensure that the opinions of all community members are considered. While not all members may have a binding vote, a well-justified ‘-1’ from a non-committer must be considered by the community, and if appropriate, supported by a binding ‘-1’.

A ‘-1’ can also indicate a veto, depending on the type of vote and who is using it. Someone without a binding vote cannot veto a proposal, so in their case a -1 would simply indicate an objection.

When a [VOTE] receives a ‘-1’, it is the responsibility of the community as a whole to address the objection. Such discussion will continue until the objection is either rescinded, overruled (in the case of a non-binding veto) or the proposal itself is altered in order to achieve consensus (possibly by withdrawing it altogether). In the rare circumstance that consensus cannot be achieved, the Core Team will decide the forward course of action.

In summary:
* Those who don’t agree with the proposal and think they have a better idea should vote -1 and defend their counter-proposal.
* Those who don’t agree but don’t have a better idea should vote -0.
* Those who agree but will not actively assist in implementing the proposal should vote +0.
* Those who agree and will actively assist in implementing the proposal should vote +1.

## Types of approval
Different actions require different types of approval, ranging from lazy consensus to a majority decision by the Core Team. These are summarised in the table below. The section after the table describes which type of approval should be used in common situations.

| Type | Description | Duration |
| ----- | ----- | ----- |
| Lazy consensus | An action with lazy consensus is implicitly allowed, unless a binding -1 vote is received. Depending on the type of action, a vote will then be called. Note that even though a binding -1 is required to prevent the action, all community members are encouraged to cast a -1 vote with supporting argument. Committers are expected to evaluate the argument and, if necessary, support it with a binding -1. | N/A |
| Lazy majority | A lazy majority vote requires more binding +1 votes than binding -1 votes. | 72 hours |
| Consensus approval | Consensus approval requires three binding +1 votes and no binding -1 votes. | 72 hours |
| Unanimous consensus | All of the binding votes that are cast are to be +1 and there can be no binding vetoes (-1). | 120 hours |
| 2/3 majority | Some strategic actions require a 2/3 majority of Core Team members; in addition, 2/3 of the binding votes cast must be +1. Such actions typically affect the foundation of the project (e.g. adopting a new codebase to replace an existing product). | 120 hours |

## When is a vote required?
Every effort is made to allow the majority of decisions to be taken through lazy consensus. That is, simply stating one’s intentions is assumed to be enough to proceed, unless an objection is raised. However, some activities require a more formal approval process in order to ensure fully transparent decision making.

The table below describes some of the actions that will require a vote. It also identifies which type of vote should be called.

| Action | Description | Approval type |
| ----- | ----- | ----- |
| Specification Release plan | Defines the features, timetable and actions for a release. A release plan cannot be vetoed (hence lazy majority). | Lazy majority |
| Specification release | When a release of the specification is ready, a vote is required to accept the release as an official release of the project. A release cannot be vetoed (hence lazy majority). | Lazy majority |
| New Team member | A new Team member has been proposed. | Consensus approval of the Core Team |
| New Core Team member | A new Core Team member has been proposed. | Consensus approval of the community |
| Committer removal | When removal of commit privileges is sought. | Unanimous consensus of the Core Team |
| Core Team member removal | When removal of Core Team membership is sought. | Unanimous consensus of the community |
