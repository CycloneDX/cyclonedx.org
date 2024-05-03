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
guide_url: /guides/sbom/OWASP_CycloneDX-SBOM-Guide-en.pdf

# Page navigation
page_nav:
  prev:
    content: Generation
    url: '../generation'
  next:
    content: Data Components
    url: '../data_components'
---

# Consuming CycloneDX BOMs
Consuming CycloneDX BOMs can be done efficiently using various tools specifically designed to ingest and analyze BOMs.
In general, there are three classifications of tools. They are:

![BOM Tool Ladder](../../../theme/assets/images/guides/SBOM/bom-tool-ladder.svg)

1. **BOM Tools**: This classification of tool is generally small, purpose-built, and often a command-line utility. These types of tools generally focus on vulnerability scanning, license compliance, or dependency analysis. While there are many tools that provide this functionality, a few honorable open source mentions are [Bomber](https://github.com/devops-kung-fu/bomber), [dep-scan](https://github.com/AppThreat/dep-scan), [Grype](https://github.com/anchore/grype), and [Trivy](https://trivy.dev/). All these tools can accept CycloneDX BOMs as input and analyze them for known security risk.
2. **BOM Platforms**: These higher complexity tools offer robust and collaborative features and are generally purpose-built for BOM consumption. They typically consume BOMs from CI/CD pipelines or external systems, such as procurement. Notable open source projects in this category are [GUAC](https://guac.sh/), a supply chain intelligence platform, and [OWASP Dependency-Track](https://dependencytrack.org/), a reference platform for BOM consumption and analysis.
3. **Enterprise Platforms**: Often times these are large CMDB's or similar systems that provide a wide-range of IT, procurement, and business applications. These platforms are typically more general-purpose, capable of a wide range of use cases, including SBOM consumption.

For a list of known tools that support the CycloneDX standard, visit the [CycloneDX Tool Center](https://cyclonedx.org/tool-center/).

<div style="page-break-after: always; visibility: hidden">
\newpage
</div>
