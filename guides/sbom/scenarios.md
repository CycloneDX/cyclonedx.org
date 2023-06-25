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
guide_url: https://cyclonedx.org/guides/sbom/sbom.pdf

# Page navigation
page_nav:
  prev:
    content: Evidence
    url: '../evidence'
  next:
    content: Extensibility
    url: '../extensibility'
---

# Scenarios and Recommendations
The following recommendations are for common scenarios that are frequently cited or inquired about by the CycloneDX community.

## General Guidance
- The SBOM should have a single `bom.metadata.component` without subcomponents
- The SBOM should describe the software components and external services the application depends on in `bom.components` and `bom.services`, respectively
- The SBOM should include as much information about the components and services as possible
- The SBOM should describe the dependencies between software components and any services
- The SBOM should describe the lifecycles involved in the creation of the SBOM
- The SBOM should provide evidence of component identity, the methods and techniques used, and their associated confidence
- The SBOM should provide evidence of observed licenses and copyright statements

## Microservice
- Each microservice should have an independent SBOM
- Optionally, a SaaSBOM can be leveraged to describe the inventory of all services that make up an application
  - Each service in the SaaSBOM can then reference the SBOM specific to that service

## Single Application (monolith, mobile app, etc)
- Optionally, the runtime environment and configuration of the application may also be specified

## Multi-Product Solution
- The SBOM should have a single `bom.metadata.component` and leverage subcomponents
- The "solution" is the `bom.metadata.component`. For each product included, ensure each is listed as a subcomponent of `bom.metadata.component`

## Multi-Module Product
- The SBOM should have a single `bom.metadata.component` without subcomponents
- Each module should be its own component, specified under `bom.components`. Each module may then either:
  - Include subcomponents, thus creating a hierarchy, or
  - Use external references to link to each modules independent SBOM

## Using Modified Open Source Software
- Include component pedigree for each modified open source component

## SBOM as Resource Locator
- Use of external references transforms CycloneDX into a "table of contents" for all relevant information about a product or any component included in a product.
- Possibilities include referencing threat models, maturity models, and quality metrics

## SBOM in Release Management
- For products defined in `bom.metadata.component`, include machine-readable release notes
- Create a publishing process for CycloneDX release notes which transforms them into PDF, Markdown, HTML, or plain text
- Leverage custom lifecycles and properties for release management and governance
- Sign SBOMs prior to distribution

<div style="page-break-after: always; visibility: hidden">
\newpage
</div>
