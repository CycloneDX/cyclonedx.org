---
# Page settings
layout: document
keywords: application security, software security, software bill of material, SBOM, BOM, open source, supply chain, specification, spdx, license, package url, purl, cpe
comments: false
banner: false

# Hero section
title: Standardization Process
window_title: Standardization Process
description: Standardization Process

# Micro navigation
micro_nav: false

# Page navigation
    
---

# Standardization Process
**28 November 2023**

## Introduction
OWASP CycloneDX is an open, consensus-based community project, which aims to be inclusive of all contributions and contributors. Anyone with an interest in the project can join the community, contribute to the project design and participate in the development of the standard and supporting ecosystem of libraries, tools, and documentation. CycloneDX consists of multiple working groups. They are:

|-----|-----|
| **Ecma TC54** | Technical committee of [Ecma International](https://www.ecma-international.org/) responsible for final technical reviews of CycloneDX features and specification versions. Ecma members are encouraged to participate in the work of OWASP and vice versa. |
| **Community** | OWASP projects are vendor neutral, allowing any organization or individual to contribute and have an equal seat at the table. The community may consist of OWASP members and non-members, adopters, and SBOM enthusiasts. |
| **Core (CWG)** | The Core Working Group are OWASP members that are responsible for the entirety of the CycloneDX project, including the specification, all tools and libraries, onboarding and offboarding maintainers, and community outreach. The Core Working Group ensures that CycloneDX maintains project continuity. OWASP classifies these individuals as “Leaders” and are documented at [https://owasp.org/cyclonedx](https://owasp.org/cyclonedx). |
| **Industry (IWG)** | This is an invite only working group of vendors that use the specification in some way, typically through implementation in one or more products. The IWG is similar to an “on-site customer” in the extreme programming methodology. They provide insight into real-world usage, challenges, and opportunities. |
| **Feature (FWG)** | For large features, Feature Working Groups are initiated and tasked with developing the core functionality of that specific feature. Once complete, the feature proceeds through the normal standardization process. All FWG meetings are recorded and [publicly accessible on YouTube](https://www.youtube.com/@CycloneDX). |

This approach has allowed CycloneDX to gather invaluable feedback from the community, iterate often, and release yearly updates to the specification that move the entire industry forward without sacrificing quality or backward-compatibility.

![Release Timeline](/theme/assets/images/cyclonedx-release-timeline.svg#center)

## Working Model
With some minor changes to the previous CycloneDX operating model, we leverage existing working groups in a way where CycloneDX can benefit from a formalized structure that Ecma provides, while still maintaining vendor neutrality, project continuity, and the ability to release yearly updates to the specification.

![Working Model Diagram #1](/theme/assets/images/standardization-working-model-1.svg#center)

Proposed modifications and additions to the core specification and official extensions start as a discussion in the specification issue tracker and originate from the community, which may include OWASP and Ecma TC54 members.

Creation of and providing feedback on proposals is open to the entire community

The purpose of the proposal is to gather community feedback on real world use cases and requirements. The proposal is used to record all relevant discussions. This may include discussions directly in the issue tracker but will also be used as the public record of meeting minutes and other relevant discussions.

Proposals may be accepted or rejected at the discretion of the CycloneDX Core Working Group.

Once the proposal is accepted, it will be recorded in the specification issue tracker to track implementation. The issue will be linked to the initial proposal discussion and assigned to the CycloneDX community member responsible for leading the implementation.

The implementation of changes to the specification are submitted as a pull request in the specification repository. The purpose of the pull request is to gather community feedback on the final implementation. However, all feedback should be relevant to the in-scope use cases and requirements. Pull requests can be initially created in “draft” to enable early community feedback.

When the draft implementation is ready for public comments, the CycloneDX Core Working Group will announce the RFC on the CycloneDX mailing list and Slack workspace. The default deadline for comments is four weeks, but can be specified when the RFC is created. Extensions may be granted to ensure sufficient feedback is received from relevant subject-matter experts in the community. Extensions will be at the discretion of the CycloneDX Core Working Group.

At the end of the RFC period, the CycloneDX community will vote, by [lazy consensus](https://cyclonedx.org/about/voting-process/), to accept or reject the proposal and the initial in-scope use cases and requirements that have been discussed. This will be announced via the CycloneDX mailing list and Slack workspace.

If accepted, the CycloneDX Core Working Group will promote the feature candidate to Ecma TC54 for final review. If Ecma TC54 is satisfied that the feature candidate meets its goals and is complete, TC54 will attempt to reach a decision by rough consensus of committee members, with the option of a rare fallback to a vote according to Ecma rules (one vote per member organization, abstention counts as no) in the event of a lack of consensus on what to do. Voting will be announced via the CycloneDX mailing list and Slack workspace.

TC54 may opt to send the candidate back to draft state in the event the candidate did not meet expectations or if a potential conflict exists with other candidates currently in progress.

![Working Model Diagram #2](/theme/assets/images/standardization-working-model-2.svg#center)

Once a collection of candidates, forming a new specification version, has been approved by the CycloneDX Core Working Group and TC54, the CycloneDX Core Working Group will vote, by a lazy majority, to release a new version of the CycloneDX specification. This is immediately followed by a vote by TC54, by a lazy majority and the option of a rare fallback to a vote according to Ecma rules, to propose a new CycloneDX specification version to the Ecma Executive Committee (Execom).

Once a new specification version has been approved by TC54 and recommended to the Ecma Execom, the Execom recommends to the Ecma General Assembly (GA) for an approval vote.

The GA votes at their scheduled meetings. Before an approval vote is confirmed the GA may bring back to TC54 questions, clarifications and changes, if significant. These queries should be reviewed and developed by the CycloneDX community, and also reviewed by TC54, then submitted again for an approval vote to the GA. It should be noted that it is historically-uncommon to receive a vote of rejection.

The new version becomes an official Ecma standard after a favorable vote. Ecma will work towards delivering ISO recognition of the Ecma standard.
