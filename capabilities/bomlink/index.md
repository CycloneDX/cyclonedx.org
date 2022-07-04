---
# Page settings
layout: document
keywords: application security, software security, software bill of material, SBOM, BOM, open source, supply chain, specification, spdx, license, package url, purl, cpe
comments: false
banner: false
redirect_from:
- /capabilities/rfc-tbd/

# Hero section
title: CycloneDX BOM-Link
window_title: CycloneDX BOM-Link
description: CycloneDX BOM-Link is a formally registered URN that provides the ability to reference components, services, or vulnerabilities inside a BOM from other systems or other BOMs.

# Micro navigation
micro_nav: false

# Page navigation
    
---

# CycloneDX BOM-Link

&nbsp;<!-- without this hack, the dropdown menu has issues due to h1 and h2 happening right after each other -->

{% include capabilities.html %}

With CycloneDX, it is possible to reference a component, service, or vulnerability inside a BOM from other systems or
other BOMs. This deep-linking capability is referred to as [BOM-Link](../bomlink) and is a 
[formally registered URN](https://www.iana.org/assignments/urn-formal/cdx), governed by [IANA](https://www.iana.org), 
and compliant with [RFC-8141](https://www.rfc-editor.org/rfc/rfc8141.html).

**Syntax**:
```
urn:cdx:serialNumber/version#bom-ref
```

**Examples**:
```
urn:cdx:f08a6ccd-4dce-4759-bd84-c626675d60a7/1
urn:cdx:f08a6ccd-4dce-4759-bd84-c626675d60a7/1#componentA
```

| Field        | Description                                                                       |
| ------------ | --------------------------------------------------------------------------------- |
| serialNumber | The unique serial number of the BOM. The serial number MUST conform to RFC-4122.  |
| version      | The version of the BOM. The default version is `1`.                               |
| bom-ref      | The unique identifier of the component, service, or vulnerability within the BOM. |

There are many use cases that BOM-Link supports. Two common scenarios are to:
* Reference one BOM from another BOM
* Reference a specific component or service in one BOM from another BOM

## Linking to External BOMs
External references provide a way to document systems, sites, and information that may be relevant but which are not 
included with the BOM. External references can be applied to individual components, services, or to the BOM itself.
One external reference type is `bom` which can point to a URL of where the BOM is located, or BOM-Link URI that 
references the precise serial number and version of the BOM.

{% include examples/bom-link-bom.html %}

Refer to the [External References Use Case](/use-cases/#external-references) for additional information.

## Linking External VEX to BOM Inventory
Inventory described in a BOM (SBOM, SaaSBOM, etc) will typically remain static until such time the inventory changes.
However, vulnerability information is much more dynamic and subject to change. Therefore, it is recommended to decouple
the VEX from the BOM. This allows VEX information to be updated without having to create and track additional BOMs.

VEX is an integral part of the CycloneDX specification providing the convenience of leveraging a single format and tool chain.

In the following example, a vulnerability is identified in a component called Jackson Databind, and the VEX provides a 
direct link to the precise component within a BOM.

<h3>Example</h3>

{% include examples/bom-link-vex.html %}
