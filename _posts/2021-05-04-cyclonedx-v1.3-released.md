---
# Page settings
layout: document
keywords: application security, software security, software bill of material, SBOM, BOM, open source, supply chain, specification, spdx, license, package url, purl, cpe
comments: false
banner: false

# News article settings
title: CycloneDX v1.3 Released
window_title: CycloneDX v1.3 Released
description: CycloneDX v1.3 Released
location:
subtitle: Adds enhanced support for known unknowns, copyright and license evidence, protocol buffers, and extensibility improvements
excerpt: Continuing our risk-based approach to standards development, CycloneDX v1.3 includes several backward-compatible improvements including Compositions which describe the completeness of inventory and relationships, support for describing evidence of copyright statements and additional licenses, support for Protocol Buffers (protobuf) for highly efficient machine-to-machine transport, and support for Properties which is a name/value store allowing easy extensibility of the spec.
image: https://cyclonedx.org/theme/assets/images/hero-subheader.png

# Micro navigation
micro_nav: false

# Page navigation
    
---

# CycloneDX v1.3 Released
**04 May 2021**

Continuing our risk-based approach to standards development, CycloneDX v1.3 includes several backward-compatible improvements including:

### Compositions
The inventory of components, services, and their relationships to one another can be described using compositions. The aggregate of each composition can be described as complete, incomplete, incomplete first-party only, incomplete third-party only, or unknown. This allows SBOM authors to describe how complete the SBOM is or if there are components in the SBOM where completeness is unknown.

### Properties / name-value store
The CycloneDX standard is fully extensible allowing for complex data to be represented in the SBOM that is not provided by the core specification. In many cases however, name-value pairs are a simpler option. CycloneDX supports Properties which is a name-value store that can be used to describe additional data about the components, services, or the SBOM that isn’t native to the core specification. Unlike key-value stores, properties support duplicate names, each potentially having different values.

### Copyright and license evidence
In addition to the existing support for component-level copyrights, SPDX license IDs, SPDX license expressions, and unresolved license names, CycloneDX now supports evidence of copyrights and licenses. Evidence is not an assertion of copyright or license, but a factual observation that may be in addition to the copyright and licenses of the component itself.

### SBOM license
The CycloneDX spec has never defaulted to a specific license, but now includes the ability to specify a license for which the SBOM itself is licensed under. This may be useful for incorporating confidential info, terms-of-use, and other contractual obligations the receiving organization may be subject to when the SBOM is distributed.

### Protocol Buffers
The CycloneDX ecosystem has long taken an automation-first approach. Many organizations have CycloneDX embedded in all organizational builds, while others have CycloneDX embedded in the software factories themselves. With this level of automation already in place, attention must be placed on efficiency. Therefore, we’ve added support for protobuf. Protobuf is a highly efficient binary serialization format for machine to machine transport in resource constrained environments. Protobuf support has been in limited production for over a year in some organizations. CycloneDX now officially supports protobuf as a third serialization format.

---

In addition to these five major features, there were several minor enhancements and overall quality improvements.

Special thanks to the community and to the CycloneDX Industry Working Group for providing much needed feedback and guidance. Version 1.3 would not have been possible without you.

-- CycloneDX Core Team --
