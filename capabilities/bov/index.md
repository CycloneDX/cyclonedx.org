---
# Page settings
layout: document
keywords: application security, software security, software bill of material, SBOM, BOM, open source, supply chain, specification, spdx, license, package url, purl, cpe
comments: false
banner: false

# Hero section
title: Bill of Vulnerabilities
window_title: CycloneDX - Bill of Vulnerabilities
description: Bill of Vulnerabilities

# Micro navigation
micro_nav: false

breadcrumbs:
  - title: CYCLONEDX
  - title: GETTING STARTED
  - title: CAPABILITIES
  - title: BOV

# Page navigation
    
---

# Bill of Vulnerabilities (BOV)

&nbsp;<!-- without this hack, the dropdown menu has issues due to h1 and h2 happening right after each other -->

<div id="capabilities-section">
<p class="large-quote">Share vulnerability data between systems and sources of vulnerability intelligence</p>
{% include capabilities-stack.html %}
</div>

CycloneDX BOMs may consist solely of vulnerabilities, thus can be used to share vulnerability data between systems and
sources of vulnerability intelligence. Complex vulnerability data can be represented including:

* Source of vulnerability intelligence
* References to other sources of intelligence containing the same vulnerability
* Multiple severity and/or risk ratiings
* Complete vulnerability details and recommendations
* Organizations and individuals credited with discovery
* Affected software and their versions

## Advisory Format

CycloneDX is also an ideal advisory format, thus providing a common standard and tool chain for BOM and advisory 
information. A BOV which additionally contains the analysis of the vulnerability along with a metadata reference to the 
component itself provides the details necessary for full-featured advisory use cases.

## High-Level Object Model

![CycloneDX Object Model Swimlane](../../theme/assets/images/CycloneDX-Object-Model-Swimlane.svg){: width="900"}

## Additional Capabilities
{% include capabilities-selection.html %}