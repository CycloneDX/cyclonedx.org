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

The syntax is:
```
urn:cdx:serialNumber/version#bomref
```

For example, a VEX BOM could reference componentA in version 1 of a BOM with serial number `f08a6ccd-4dce-4759-bd84-c626675d60a7`,
using the following syntax:

```
urn:cdx:f08a6ccd-4dce-4759-bd84-c626675d60a7/1#componentA
```
