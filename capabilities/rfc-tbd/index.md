---
# Page settings
layout: document
keywords: application security, software security, software bill of material, SBOM, BOM, open source, supply chain, specification, spdx, license, package url, purl, cpe
comments: false
banner: false

# Hero section
title: IETF RFC TBD
window_title: CycloneDX - RFC TBD
description: IETF RFC TBD

# Micro navigation
micro_nav: false

# Page navigation
    
---

# IETF RFC-TBD

&nbsp;<!-- without this hack, the dropdown menu has issues due to h1 and h2 happening right after each other -->

{% include capabilities.html %}

With CycloneDX, it is possible to reference a component, service, or vulnerability inside a BOM from other systems or
other BOMs. This deep-linking capability is known as BOM-Link. The specification is defined in 
[RFC-TBD](https://datatracker.ietf.org/doc/html/rfcTBD).

**Syntax**:
```
urn:cdx:serialNumber/version#bomref
```

**Examples**:
```
urn:cdx:f08a6ccd-4dce-4759-bd84-c626675d60a7/1
urn:cdx:f08a6ccd-4dce-4759-bd84-c626675d60a7/1#componentA
```

There are many use cases that BOM-Link supports. Two common scenarios are to:
* Reference one BOM from another BOM
* Reference a specific component or service in one BOM from another BOM

## Linking to External BOMs
External references provide a way to document systems, sites, and information that may be relevant but which are not 
included with the BOM. External references can be applied to individual components, services, or to the BOM itself.
One external reference type is `bom` which can point to a URL of where the BOM is located, or BOM-Link URI that 
references the precise serial number and version of the BOM.

{% include examples/bom-link-bom.html %}

Refer to the [External References Use Case](http://0.0.0.0:4000/use-cases/#external-references) for additional information.

## Linking VEX to BOM Inventory
Inventory described in a BOM (SBOM, SaaSBOM, etc) will typically remain static until such time the inventory changes.
However, vulnerability information is much more dynamic and subject to change. Therefore, it is recommended to decouple
the VEX from the BOM. This allows VEX information to be updated without having to create and track additional BOMs.

VEX is an integral part of the CycloneDX specification providing the convenience of leveraging a single format and tool chain.

In the following example, a vulnerability is identified in a component called Jackson Databind, and the VEX provides a 
direct link to the precise component within a BOM.

<h3>Example</h3>

{% include examples/bom-link-vex.html %}
