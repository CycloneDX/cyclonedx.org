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
    content: Use Cases
    url: '../use_cases'
  next:
    content: Generation
    url: '../generation'
---

# BOM Coverage, Maturity, and Quality

## NTIA Minimum Elements
The U.S. [National Telecommunications and Information Administration](https://ntia.gov/) (NTIA) defines the following
[minimum elements of an SBOM](https://www.ntia.gov/files/ntia/publications/sbom_minimum_elements_report.pdf). They are:

| **Field**                | **CycloneDX Field**                              | **Description**                                                                                            |
|--------------------------|--------------------------------------------------|------------------------------------------------------------------------------------------------------------|
| Supplier                 | bom.metadata.supplier, bom.components[].supplier | The name of an entity that creates, defines, and identifies components.                                    |
| Component Name           | bom.components[].name                            | Designation assigned to a unit of software defined by the original supplier.                               |
| Component Version        | bom.components[].version                         | Identifier used by the supplier to specify a change in software from a previously identified version.      |
| Other Unique Identifiers | bom.components[].cpe,purl,swid                   | Other identifiers that are used to identify a component, or serve as a look-up key for relevant databases. |
| Dependency Relationship  | bom.dependencies[]                               | Characterizing the relationship that an upstream component X is included in software Y.                    |
| Author of SBOM Data      | bom.metadata.author                              | The name of the entity that creates the SBOM data for this component.                                      |
| Timestamp                | bom.metadata.timestamp                           | Record of the date and time of the SBOM data assembly.                                                     |

<div style="page-break-after: always; visibility: hidden">
\emptyparagraph
</div>

CycloneDX highly encourages organizations to exceed the NTIA minimum elements whenever possible. Suggestions for other
types of data will vary by use case but generally should include:


| **Field**            | **CycloneDX Field**                    | **Description**                                                                                                                            |
|----------------------|----------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------|
| BOM Lifecycles       | bom.metadata.lifecycles[]              | The stage in which data in the BOM was captured                                                                                            |
| BOM Generation Tools | bom.metadata.tools[]                   | The tool(s) used to create the BOM                                                                                                         |
| Component Hash       | bom.components[].hashes[]              | The hash values of the file or package                                                                                                     |
| Component License    | bom.components[].licenses[]            | The license(s) in which the component is released under                                                                                    |
| Component Evidence   | bom.components[].evidence[].identity.* | The evidence of identity including the methods, techniques, and confidence of how components were identified                               |
| External References  | bom.components[].externalReferences[]  | Locations to advisories, version control and build systems, etc                                                                            |
| Services             | bom.services[].*                       | A complete inventory of services including endpoint URLs, data classifications, etc which the product and/or individual components rely on |
| Known Unknowns       | bom.compositions[].*                   | Assertions on the completeness of the inventory of components and services, along with the completeness of dependency relationships        |


## SCVS BOM Maturity Model
The [OWASP Software Component Verification Standard](https://scvs.owasp.org/) (SCVS) is a way for organizations to measure
and improve their software supply chain assurance. SCVS is required in 
[NIST SP 800-218](https://csrc.nist.gov/publications/detail/sp/800-218/final) (SSDF v1.1) and similar frameworks. 

In addition to the supply chain controls it recommends, SCVS also has a complementary [BOM Maturity Model](https://scvs.owasp.org/bom-maturity-model/) 
which allows bill of materials to be evaluated. The model consists of:

- a formal taxonomy of different types of data possible in a bill of materials, independent of BOM format
- a unique identifier, description, and other metadata about each item in the taxonomy 
- the level of complexity or difficulty in supporting different types of data

The model can be used to evaluate:

- Incoming BOMs adherance to organizational policy by supporting the data required by various stakeholders
- BOM generation and consumption tools
- Current and future BOM formats against each other and their alignment with organizational requirements

Combined with the ability to create profiles, SCVS will facilitate:

- The creation of a new breed of tools (SBOM Profilers) which evaluate BOMs against various profiles so that end users may know what types of analysis can be performed on them
- The adoption of organizational policy, defined in profiles, for what is acceptable and not acceptable for various use cases

## SBOM Quality
SBOMs can be analyzed for their overall usefulness for given use cases. The "quality" of an SBOM may differ depending
on the stakeholder role and type of analysis required for that role. Quality is a multidimensional construct
and not a single characteristic. OWASP supports a holistic view of quality. The following illustrates an example
of dimensions to consider in determining quality.

![Quality Dimensions](../../../theme/assets/images/guides/SBOM/quality-dimensions.svg)

| **Dimension** | **Support** | **Description**                                                                                                     |
|---------------|-------------|---------------------------------------------------------------------------------------------------------------------|
| Breadth       | SCVS        | The coverage in the types of data represented within a BOM.                                                         |
| Depth         | SCVS        | The amount of detail or difficulty needed to represent data within a BOM.                                           |
| Lifecycles    | CycloneDX   | The number of lifecycles or the favorability of specific lifecycles in the creation of a BOM.                       |
| Techniques    | CycloneDX   | The approaches used to determine component identity.                                                                |
| Confidence    | CycloneDX   | The confidence of individual techniques, and the analysis of the sum of all techniques used to identity components. |

<div style="page-break-after: always; visibility: hidden">
\emptyparagraph
</div>

The [OWASP SCVS BOM Maturity Model](https://scvs.owasp.org/bom-maturity-model/) is a formal taxonomy of different types
of data possible in a Bill of Materials along with the level of complexity or difficulty in supporting different types of
data. The BOM Maturity Model can be used as the basis for the Breadth and Depth dimensions.

Lifecycles are supported in CycloneDX. Refer to the "Lifecycle Phases" chapter for more information. Evidence is also a
capability of CycloneDX. Identity evidence consists of:
- The field for which the evidence describes (name, version, purl, etc)
- The overall confidence derived from all supporting evidence
- The methods which include the techniques used to determine component identity and the confidence of each technique
- The tools used which performed the analysis

Together, the BOM Maturity Model and native features of CycloneDX can be leveraged to form a high-quality, high-confidence
assessment of SBOM quality.
