---
# Page settings
layout: document
keywords: application security, software security, software bill of material, SBOM, BOM, open source, supply chain, specification, spdx, license, package url, purl, cpe
comments: false
banner: false

# Hero section
title: CycloneDX Specification Overview
window_title: CycloneDX Specification Overview
description: CycloneDX Specification Overview

# Micro navigation
micro_nav: false

# Page navigation

---

# Specification Overview

&nbsp;<!-- without this hack, the dropdown menu has issues due to h1 and h2 happening right after each other -->

<img src="/theme/assets/images/high-level-object-model-small.svg" width="331" height="202" alt="CycloneDX Object Model Overview" style="display:block; float:right; margin:10px">

The CycloneDX object model:
* is defined in [JSON Schema](https://github.com/CycloneDX/specification/blob/1.4/schema/bom-1.4.schema.json), [XML Schema](https://github.com/CycloneDX/specification/blob/1.4/schema/bom-1.4.xsd), and [Protocol Buffers](https://github.com/CycloneDX/specification/blob/1.4/schema/bom-1.4.proto)
* consists of [metadata](#bom-metadata), [components](#components), [services](#services), [dependencies](#dependencies), [compositions](#compositions), and [vulnerabilities](#vulnerabilities).
* is prescriptive and simple to use
* is designed for <abbr data-title="Software Bill of Materials">SBOM</abbr>, <abbr data-title="Software-as-a-Service Bill of Materials">SaaSBOM</abbr>, <abbr data-title="Operations Bill of Materials">OBOM</abbr>, <abbr data-title="Manufacturing Bill of Materials">MBOM</abbr>, and <abbr data-title="Vulnerability Exploitability Exchange">VEX</abbr> use cases
* can easily describe complex relationships
* is [extensible](#extensions) to support specialized and future use cases


## BOM Metadata
BOM metadata includes the supplier, manufacturer, and the target component for which the BOM describes. It also includes
the tools used to create the BOM, and license information for the BOM document itself.

## Components
Components describe the complete inventory of first-party and third-party components. Component identity can be represented as:
* Coordinates (group, name, version)
* [Package URL](https://github.com/package-url/purl-spec)
* [Common Platform Enumeration (CPE)](https://nvd.nist.gov/products/cpe)
* [SWID (ISO/IEC 19770-2:2015)](https://www.iso.org/standard/65666.html)
* Cryptographic hash functions (SHA-1, SHA-2, SHA-3, BLAKE2b, BLAKE3)

CycloneDX can represent applications, frameworks, libraries, containers, operating systems, devices, firmware, files, along
with the manufacturer information, license and copyright details, and complete pedigree and provenance for every component.

## Services
Services describe external APIs that the software may call. Services describe endpoint URI’s, authentication requirements,
and trust boundary traversals. The flow of data between software and services can also be described including the data
classifications, and the flow direction of each type.

## Dependencies
CycloneDX provides the ability to describe components and their dependency on other components. The dependency graph is
capable of representing both direct and transitive relationships. Components that depend on services can be represented
in the dependency graph and services that depend on other services can be represented as well.

## Compositions
Compositions describe constituent parts (including components, services, and dependency relationships) and their
completeness. The aggregate of each composition can be described as complete, incomplete, incomplete first-party only,
incomplete third-party only, or unknown.

## Vulnerabilities
Known vulnerabilities inherited from the use of third-party and open source software and the exploitability of the vulnerabilities
can be communicated with CycloneDX. Previously unknown vulnerabilities affecting both components and services may also be disclosed
using CycloneDX, making it ideal for both VEX and security advisory use cases.

## Extensions
Multiple extension points exist throughout the CycloneDX object model allowing fast prototyping of new capabilities
and support for specialized and future use cases. The CycloneDX project maintains extensions that are beneficial to
the larger community. The project encourages community participation and development of extensions that target
specialized or industry-specific use cases.

## High-Level Object Model

![CycloneDX Object Model Swimlane](../../theme/assets/images/CycloneDX-Object-Model-Swimlane.svg){: width="900"}

## Registered Media Types

The following media types are officially registered with IANA:

| Media Type | Format | Assignment |
| ------- | --------- | --------- |
| application/vnd.cyclonedx+xml | XML | [IANA](https://www.iana.org/assignments/media-types/application/vnd.cyclonedx+xml) |
| application/vnd.cyclonedx+json | JSON | [IANA](https://www.iana.org/assignments/media-types/application/vnd.cyclonedx+json) |

Specific versions of CycloneDX can be specified by using the version parameter. i.e. `application/vnd.cyclonedx+xml; version=1.4`.

The officially supported media type for Protocol Buffer format is `application/x.vnd.cyclonedx+protobuf`.

### Recognized file patterns

The following file names are conventionally used for storing CycloneDX BOM files -

- `bom.json` for `JSON` encoded CycloneDX BOM files.
- `bom.xml` for `XML` encoded CycloneDX BOM files.

Alternatively, files that match the glob pattern below are also recognized -

- `*.cdx.json` for `JSON` encoded CycloneDX BOM files.
- `*.cdx.xml` for `XML` encoded CycloneDX BOM files.

### Recognized predicate type

Many tools in the software supply chain capture attestations at the time of execution. A 'predicate' contains metadata 
about the attestation. Tools such as in-toto use predicate types to provide context about the subject of the predicate. 
CycloneDX recognizes `https://cyclonedx.org/bom` as the official predicate type for all bill of material types including
SBOM, SaaSBOM, and HBOM.