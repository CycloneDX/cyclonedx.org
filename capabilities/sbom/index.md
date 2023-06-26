---
# Page settings
layout: document
keywords: application security, software security, software bill of material, SBOM, BOM, open source, supply chain, specification, spdx, license, package url, purl, cpe
comments: false
banner: false

# Hero section
title: Software Bill of Materials (SBOM)
window_title: CycloneDX - Software Bill of Materials (SBOM)
description: Software Bill of Materials (SBOM)

# Micro navigation
micro_nav: false

breadcrumbs:
  - title: CYCLONEDX
  - title: GETTING STARTED
  - title: CAPABILITIES
  - title: SBOM

# Page navigation
    
---

# Software Bill of Materials (SBOM)

&nbsp;<!-- without this hack, the dropdown menu has issues due to h1 and h2 happening right after each other -->

<div id="capabilities-section">
<p class="large-quote">Inventory software components and services and the dependency relationships between them</p>
{% include capabilities-stack.html %}
</div>

A complete and accurate inventory of all first-party and third-party components is essential for risk identification. 
BOMs should ideally contain all direct and transitive components and the dependency relationships between them.

CycloneDX far exceeds the [Minimum Elements for Software Bill of Materials](https://www.ntia.gov/files/ntia/publications/sbom_minimum_elements_report.pdf) 
as defined by the [National Telecommunications and Information Administration (NTIA)](https://www.ntia.gov/) in response 
to [U.S. Executive Order 14028](https://www.whitehouse.gov/briefing-room/presidential-actions/2021/05/12/executive-order-on-improving-the-nations-cybersecurity/).

Adopting CycloneDX allows organizations to quickly meet these minimum requirements and mature into using more 
sophisticated use cases over time. CycloneDX is capable of achieving all SBOM requirements defined in the 
[OWASP Software Component Verification Standard (SCVS)](http://owasp.org/scvs).

## High-Level Object Model

CycloneDX can represent any type of software component along with services the software relies on. Refer to [Use Cases](../../use-cases) 
for details on the many possibilities that exist for beginner, intermediate, and advanced
SBOM use cases.

![CycloneDX Object Model Swimlane](../../theme/assets/images/CycloneDX-Object-Model-Swimlane.svg){: width="900" }

## Examples

BOMs demonstrating SBOM capabilities can be found at
[https://github.com/CycloneDX/bom-examples](https://github.com/CycloneDX/bom-examples)

## Additional Capabilities
{% include capabilities-selection.html %}