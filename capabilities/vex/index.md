---
# Page settings
layout: document
keywords: application security, software security, software bill of material, SBOM, BOM, HBOM, VEX, VDR, open source, supply chain, specification, spdx, license, package url, purl, cpe
comments: false
banner: false

# Hero section
title: Vulnerability Exploitability eXchange (VEX)
window_title: CycloneDX - Vulnerability Exploitability eXchange (VEX)
description: Vulnerability Exploitability eXchange (VEX)

# Micro navigation
micro_nav: false

breadcrumbs:
  - title: CYCLONEDX
  - title: GETTING STARTED
  - title: CAPABILITIES
  - title: VEX

# Page navigation
    
---

# Vulnerability Exploitability eXchange (VEX)

&nbsp;<!-- without this hack, the dropdown menu has issues due to h1 and h2 happening right after each other -->

<div id="capabilities-section">
<p class="large-quote">Convey the exploitability of vulnerable components in the context of the product in which they're used</p>
{% include capabilities-stack.html %}
</div>

Vulnerability Exploitability eXchange (VEX) is a form of a security advisory where the goal is to communicate the exploitability
of components with known vulnerabilities in the context of the product in which they are used. Often times, products 
are not affected by a vulnerability simply by including an otherwise vulnerable component. VEX allows software vendors 
and other parties to communicate the exploitability status of vulnerabilities, providing clarity on the vulnerabilities
that pose risk and the ones that do not.

VEX is a critical capability necessary to operationalize SBOM. 

- VEX information can be represented inside an existing BOM, or in a dedicated VEX BOM
- Communicates the vulnerability details, exploitability, and detailed analysis
- Informs software consumers on actions the vendor has taken, or which the consumer must take, to reduce risk

![Abstract of VDR and VEX data represented in a BOM](../../theme/assets/images/VDR+VEX-BOM-Cascade.svg)

## Independent BOM and VEX BOM
Inventory described in a BOM (SBOM, SaaSBOM, etc) will typically remain static until such time the inventory changes. 
However, vulnerability information is much more dynamic and subject to change. Therefore, it is recommended to decouple 
the VEX from the BOM. This allows VEX information to be updated without having to create and track additional BOMs.

VEX is an integral part of the CycloneDX specification providing the convenience of leveraging a single format and tool chain.

![Independent BOM and VEX Document](../../theme/assets/images/vexbom.svg){: width="500" }

With CycloneDX, it is possible to reference a component, service, or vulnerability inside a BOM from other systems or 
other BOMs. This deep-linking capability is referred to as [BOM-Link](../bomlink) and is a 
[formally registered URN](https://www.iana.org/assignments/urn-formal/cdx).

Learn more about how CycloneDX makes use of [BOM-Link](../bomlink).

CycloneDX VEX BOMs can also be used with alternative SBOM formats such as SPDX, but without the tight integration or
support of an [IETF standard](https://www.iana.org/assignments/urn-namespaces) for linkage. Vendor support may vary.

## BOM With Embedded VEX

![BOM With Embedded VEX](../../theme/assets/images/embedded-vex.svg){: width="167" }

CycloneDX also supports embedding VEX information inside a BOM, thus having a single artifact that describes both
inventory and VEX data. There are several uses for embedding VEX data including:

* Audit use cases where inventory and vulnerability data need to be captured at a specific point in time
* Automated security tools may opt to create a single BOM with embedded vulnerability or VEX data for convenience and portability

## CycloneDX and Third-Party Advisory Formats

Every component or service defined in a CycloneDX BOM may optionally define external references to security advisory 
feeds. CycloneDX is agnostic to the advisory format, however, the 
[Common Security Advisory Framework (CSAF)](https://www.oasis-open.org/committees/csaf), an OASIS Open standard, is 
recommended. Refer to the [Security Advisories Use Case](../../use-cases/#security-advisories) for more information.

CSAF also supports an optional VEX profile which can be used with CycloneDX.

## High-Level Object Model

![CycloneDX Object Model Swimlane](../../theme/assets/images/CycloneDX-Object-Model-Swimlane.svg){: width="900"}

## Examples

BOMs demonstrating VEX capabilities can be found at
[https://github.com/CycloneDX/bom-examples](https://github.com/CycloneDX/bom-examples)

## Additional Capabilities
{% include capabilities-selection.html %}