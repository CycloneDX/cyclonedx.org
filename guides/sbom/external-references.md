---
# Page settings
layout: guide
keywords: application security, software security, software bill of material, SBOM, BOM, open source, supply chain, specification, spdx, license, package url, purl, cpe

# Hero section
title: Authoritative Guide to SBOM
window_title: OWASP CycloneDX Authoritative Guide to SBOM
description: Implement and Optimize use of Software Bill of Materials

# Micro navigation
micro_nav: false

# Guide
guide_url: OWASP_CycloneDX-SBOM-Guide-en.pdf

# Page navigation
page_nav:
  prev:
    content: Relationships
    url: '../relationships'
  next:
    content: Linking
    url: '../linking'
---

## External References
External references provide a way to document systems, sites, and information that are relevant to a component, service, 
or the BOM itself. External references point to resources outside the object they're associated with and may be external 
to the BOM, or may refer to resources within the BOM. 

External references are established through a URI (URL or URN) and, therefore, can accept any URL scheme, including https, 
mailto, tel, and dns. External references may also include formally registered URNs such as CycloneDX BOM-Link to
reference CycloneDX BOMs or any object within a BOM. BOM-Link transforms applicable external references into relationships 
that can be expressed in a BOM or across BOMs.

External references provide an extensible and data-rich method of forming relationships.


| **Reference Type**        | **Description**                                                                                                                                                                                                                                                                                                                                                      |
|---------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| vcs                       | Version Control System                                                                                                                                                                                                                                                                                                                                               |
| issue-tracker             | Issue or defect tracking system, or an Application Lifecycle Management (ALM) system                                                                                                                                                                                                                                                                                 |
| website                   | Website                                                                                                                                                                                                                                                                                                                                                              |
| advisories                | Security advisories                                                                                                                                                                                                                                                                                                                                                  |
| bom                       | Bill-of-materials (SBOM, OBOM, HBOM, SaaSBOM, etc)                                                                                                                                                                                                                                                                                                                   |
| mailing-list              | Mailing list or discussion group                                                                                                                                                                                                                                                                                                                                     |
| social                    | Social media account                                                                                                                                                                                                                                                                                                                                                 |
| chat                      | Real-time chat platform                                                                                                                                                                                                                                                                                                                                              |
| documentation             | Documentation, guides, or how-to instructions                                                                                                                                                                                                                                                                                                                        |
| support                   | Community or commercial support                                                                                                                                                                                                                                                                                                                                      |
| distribution              | Direct or repository download location                                                                                                                                                                                                                                                                                                                               |
| distribution-intake       | The location where a component was published to. This is often the same as "distribution" but may also include specialized publishing processes that act as an intermediary                                                                                                                                                                                          |
| license                   | The URL to the license file. If a license URL has been defined in the license node, it should also be defined as an external reference for completeness                                                                                                                                                                                                              |
| build-meta                | Build-system specific meta file (i.e. pom.xml, package.json, .nuspec, etc)                                                                                                                                                                                                                                                                                           |
| build-system              | URL to an automated build system                                                                                                                                                                                                                                                                                                                                     |
| release-notes             | URL to release notes                                                                                                                                                                                                                                                                                                                                                 |
| security-contact          | Specifies a way to contact the maintainer, supplier, or provider in the event of a security incident. Common URIs include links to a disclosure procedure, a mailto (RFC-2368) that specifies an email address, a tel (RFC-3966) that specifies a phone number, or dns (RFC-4501) that specifies the records containing DNS Security TXT                             |
| model-card                | A model card describes the intended uses of a machine learning model, potential limitations, biases, ethical considerations, training parameters, datasets                                                                                                                                                                                                           |
| attestation               | Human or machine-readable statements containing facts, evidence, or testimony                                                                                                                                                                                                                                                                                        |
| threat-model              | An enumeration of identified weaknesses, threats, and countermeasures, dataflow diagram (DFD), attack tree, and other supporting documentation in human-readable or machine-readable format                                                                                                                                                                          |
| adversary-model           | The defined assumptions, goals, and capabilities of an adversary                                                                                                                                                                                                                                                                                                     |
| risk-assessment           | Identifies and analyzes the potential of future events that may negatively impact individuals, assets, and/or the environment. Risk assessments may also include judgments on the tolerability of each risk                                                                                                                                                          |
| vulnerability-assertion   | A Vulnerability Disclosure Report (VDR) which asserts the known and previously unknown vulnerabilities that affect a component, service, or product including the analysis and findings describing the impact (or lack of impact) that the reported vulnerability has on a component, service, or product                                                            |
| exploitability-statement  | A Vulnerability Exploitability eXchange (VEX) which asserts the known vulnerabilities that do not affect a product, product family, or organization, and optionally the ones that do. The VEX should include the analysis and findings describing the impact (or lack of impact) that the reported vulnerability has on the product, product family, or organization |
| pentest-report            | Results from an authorized simulated cyberattack on a component or service, otherwise known as a penetration test                                                                                                                                                                                                                                                    |
| static-analysis-report    | SARIF or proprietary machine or human-readable report for which static analysis has identified code quality, security, and other potential issues with the source code                                                                                                                                                                                               |
| dynamic-analysis-report   | Dynamic analysis report that has identified issues such as vulnerabilities and misconfigurations                                                                                                                                                                                                                                                                     |
| runtime-analysis-report   | Report generated by analyzing the call stack of a running application                                                                                                                                                                                                                                                                                                |
| component-analysis-report | Report generated by Software Composition Analysis (SCA), container analysis, or other forms of component analysis                                                                                                                                                                                                                                                    |
| maturity-report           | Report containing a formal assessment of an organization, business unit, or team against a maturity model                                                                                                                                                                                                                                                            |
| certification-report      | Industry, regulatory, or other certification from an accredited (if applicable) certification body                                                                                                                                                                                                                                                                   |
| quality-metrics           | Report or system in which quality metrics can be obtained                                                                                                                                                                                                                                                                                                            |
| codified-infrastructure   | Code or configuration that defines and provisions virtualized infrastructure, commonly referred to as Infrastructure as Code (IaC)                                                                                                                                                                                                                                   |
| evidence                  | Data collected through various forms of extraction or analysis                                                                                                                                                                                                                                                                                                       |
| formulation               | The observed or declared formulas for how components or services were manufactured or deployed                                                                                                                                                                                                                                                                       |
| poam                      | Plans of Action and Milestones (POAM) compliment an "attestation" external reference. POAM is defined by NIST as a "document that identifies tasks needing to be accomplished. It details resources required to accomplish the elements of the plan, any milestones in meeting the tasks and scheduled completion dates for the milestones".                         |
| other                     | Use this if no other types accurately describe the purpose of the external reference                                                                                                                                                                                                                                                                                 |

The following are example external references applied to a component:

```json
"components": [
  {
    "type": "application",
    "name": "portal-server",
    "version": "1.0.0",
    "externalReferences": [
      {
        "type": "advisories",
        "url": "https://example.org/security/feed/csaf"
      },
      {
        "type": "bom",
        "url": "https://example.org/support/sbom/portal-server/1.0.0",
        "hashes": [
          {
            "alg": "SHA-256",
            "content": "708f1f53b41f11f02d12a11b1a38d2905d47b099afc71a0f1124ef8582ec7313"
          }
        ]
      },
      {
        "type": "documentation",
        "url": "https://example.org/support/documentation/portal-server/1.0.0"
      }
    ]
  }
]
```
