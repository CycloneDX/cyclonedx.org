---
# Page settings
layout: document
keywords: application security, software security, software bill of material, SBOM, BOM, open source, supply chain, specification, spdx, license, package url, purl, cpe
comments: false
banner: false

# Hero section
title: Machine Learning Bill of Materials (ML-BOM)
window_title: CycloneDX - Machine Learning Bill of Materials (ML-BOM)
description: Machine Learning Bill of Materials (ML-BOM)

# Micro navigation
micro_nav: false

breadcrumbs:
  - title: CYCLONEDX
  - title: GETTING STARTED
  - title: CAPABILITIES
  - title: ML-BOM

# Page navigation
    
---

# Machine Learning Bill of Materials (ML-BOM)

&nbsp;<!-- without this hack, the dropdown menu has issues due to h1 and h2 happening right after each other -->

<div id="capabilities-section">
<p class="large-quote">Model and dataset transparency for security, privacy, safety and ethical considerations</p>
{% include capabilities-stack.html %}
</div>

ML-BOMs provide transparency for machine learning models and datasets, which provide visibility into possible security,
privacy, safety, and ethical considerations. CycloneDX standardizes model cards in a way where the inventory of models
and datasets can be used independently or combined with the inventory of software and hardware components or services
defined in HBOMs, SBOMs, and SaaSBOMs.

## High-Level Object Model
![CycloneDX Object Model Swimlane](../../theme/assets/images/CycloneDX-Object-Model-Swimlane.svg){: width="900"}

## See also

* [Authoritative Guide to SBOM](../../guides/sbom/introduction/#machine-learning-bill-of-materials-ml-bom)

## Additional Capabilities
{% include capabilities-selection.html %}
