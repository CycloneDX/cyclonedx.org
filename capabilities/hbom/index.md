---
# Page settings
layout: document
keywords: application security, software security, software bill of material, SBOM, BOM, open source, supply chain, specification, spdx, license, package url, purl, cpe
comments: false
banner: false

# Hero section
title: Hardware Bill of Materials (HBOM)
window_title: CycloneDX - Hardware Bill of Materials (HBOM)
description: Hardware Bill of Materials (HBOM)

# Micro navigation
micro_nav: false

breadcrumbs:
  - title: CYCLONEDX
  - title: GETTING STARTED
  - title: CAPABILITIES
  - title: HBOM

# Page navigation
    
---

# Hardware Bill of Materials (HBOM)

&nbsp;<!-- without this hack, the dropdown menu has issues due to h1 and h2 happening right after each other -->

<div id="capabilities-section">
<p class="large-quote">Inventory hardware components for IoT, ICS, and other types of embedded and connected devices</p>
{% include capabilities-stack.html %}
</div>

CycloneDX supports many types of components, including hardware devices, making it ideal for use with consumer electronics,
<abbr data-title="Internet of Things">IoT</abbr>, <abbr data-title="Industrial Control System">ICS</abbr>, and other
types of embedded devices. CycloneDX fills an important role in-between traditional
<abbr data-title="Engineering Bill of Materials">eBOM</abbr> and <abbr data-title="Manufacturing Bill of Materials">mBOM</abbr>
use cases for hardware devices.
- Supports `device` as a first-class component type
- Utilizes a [formal and extensible taxonomy](https://cyclonedx.github.io/cyclonedx-property-taxonomy/cdx/device) that defines a wide range of hardware devices and configurations

CycloneDX can represent any type of software component, service, and the firmware and hardware devices in an 'as-built'
product. A formal property taxonomy can be leveraged and extended to describe any type of hardware attribute or configuration.
CycloneDX can also reference documentation that may describe the 'recipe' for how the product is manufactured.  
Organizations, or entire industries, can also leverage multiple extension points to develop advanced models.

## High-Level Object Model

![CycloneDX Object Model Swimlane](../../theme/assets/images/CycloneDX-Object-Model-Swimlane.svg){: width="900"}

## Examples

BOMs demonstrating HBOM capabilities can be found at
[https://github.com/CycloneDX/bom-examples](https://github.com/CycloneDX/bom-examples)

## See also

* [Authoritative Guide to SBOM](../../guides/sbom/introduction/#hardware-bill-of-materials-hbom)

## Additional Capabilities
{% include capabilities-selection.html %}