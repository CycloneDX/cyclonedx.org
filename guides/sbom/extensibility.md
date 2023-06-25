---
# Page settings
layout: guide
keywords: application security, software security, software bill of material, SBOM, BOM, open source, supply chain, specification, spdx, license, package url, purl, cpe

# Hero section
title: Authoritative Guide to SBOM
window_title: OWASP CycloneDX Authoritative Guide to SBOM
description: Implement and Optimize use of Software Bill of Materials

# Micro navigation
micro_nav: false

# Guide
guide_url: https://cyclonedx.org/guides/sbom/sbom.pdf

# Page navigation
page_nav:
  prev:
    content: Scenarios
    url: '../scenarios'
  next:
    content: Glossary
    url: '../glossary'
---

# Extensibility

Multiple extension points exist throughout the CycloneDX object model allowing fast prototyping of new capabilities and 
support for specialized and future use cases. The CycloneDX project maintains extensions that are beneficial to the 
larger community. The project encourages community participation and development of extensions that target specialized 
or industry-specific use cases.

There are three primary means of extending CycloneDX.
* CycloneDX properties
* CycloneDX properties using registered namespace
* XML extensions

**Note on hardened schemas**: The XML and JSON schemas are hardened by design. This prevents unexpected markup, object
types, and values from being present in the SBOMs that have not been pre-defined in the schemas. Hardened schemas are 
required for many high-assurance use cases. The security protections inherent in hardened schemas benefit the entire
CycloneDX community. While these protections are highly beneficial, they do restrict serialization formats that are 
not extensible by design, most notably, JSON.

## CycloneDX Properties
The CycloneDX standard is fully extensible allowing for complex data to be represented in the BOM that is not provided
by the core specification. In many cases, name-value pairs are a simple option. CycloneDX supports Properties which is a 
name-value store that can be used to describe additional data about the components, services, or the BOM
that isn't native to the core specification. Unlike key-value stores, properties support duplicate names, each
potentially having different values. CycloneDX properties are a core part of the specification and are supported 
in all serialization formats including XML, JSON, and protocol buffers.

### JSON Example
```json
"properties": [
  {
    "name": "Foo",
    "value": "Bar"
  }
]
```

### XML Example
```xml
<properties>
    <property name="Foo">Bar</property>
</properties>
```

## CycloneDX Properties and Registered Namespaces
The CycloneDX standard does not impose restrictions on the property names used. However, standardization can assist tool 
implementers and BOM consumers. CycloneDX achieves this through formally registered namespaces. These namespaces
prefix the property name and are defined by the organization or project that registered the namespace.

Namespaces are hierarchical and delimited with a `:` and may optionally start with `urn:`. Examples include:

TODO: 

Organizations and open source projects can register a dedicated namespace at the CycloneDX Property Taxonomy repository
on GitHub. 
[https://github.com/CycloneDX/cyclonedx-property-taxonomy](https://github.com/CycloneDX/cyclonedx-property-taxonomy)

## XML Extensions

TODO


<div style="page-break-after: always; visibility: hidden">
\newpage
</div>