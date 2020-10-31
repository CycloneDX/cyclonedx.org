---
# Page settings
layout: default
keywords: application security, software security, software bill of materials, SBOM, BOM, open source, supply chain, specification, spdx, license, package url, purl, cpe, swid
comments: false
banner: true

# Hero section
title: CycloneDX
window_title: CycloneDX Software Bill of Materials (SBOM) Standard
description: CycloneDX is a lightweight software bill of materials (SBOM) standard designed for use in application security contexts and supply chain component analysis.

# Micro navigation
micro_nav: false

# Page navigation

---

## News
* **26 May 2020**: [CycloneDX SBOM specification v1.2](https://cyclonedx.org/schema/bom-1.2.xsd) has been released and includes 'firmware' and 'container' component types, SWID tags, service components, applied patches, JSON support, and enhanced BOM metadata and dependency graphs previously only available through extensions.

## Introduction

Modern software is assembled using third-party and open source components, glued together in complex and unique ways, 
and integrated with original code to achieve the desired functionality. An accurate inventory of all components used in 
the creation of software enables organizations to identify risk. Application-specific and organization-wide component 
inventories allows for greater transparency, promotes software standardization and reuse, and enables rapid impact analysis.

CycloneDX was created for this purpose.

The CycloneDX Software Bill of Materials specification is maintained by the CycloneDX Core working group, with origins 
in the [OWASP](https://owasp.org) community.

## Project Goals
- Define a vendor agnostic specification independent of language or ecosystem
- Specification should be machine readable
- Specification should be easy to implement with minimal effort
- Specification should be simple and performant to parse
- Specification should provide lightweight schema definitions for JSON and XML
- Specification should reuse parts of existing specs where beneficial
- Specification should be extensible to support specialized and future use cases
- Specification should be decentralized, authoritative, and security focused
- Specification should promote continuous component analysis
- Specification should support hardware, libraries, frameworks, applications, containers, and operating systems


## Achievable Use Cases
- [Document complete and accurate inventory](/use-cases#inventory)
- [Security vulnerability analysis](/use-cases#known-vulnerabilities)
- [Integrity verification](/use-cases#integrity-verification)
- [Software package evaluation](/use-cases#package-evaluation)
- [License identification and compliance](/use-cases#license-compliance)
- [Describe complex component assemblies](/use-cases#assembly)
- [Capture dependency relationships](/use-cases#dependency-graph)
- [Describe component provenance](/use-cases#provenance)
- [Describe component pedigree](/use-cases#pedigree)
- [Describe reliance on services](/use-cases#service-definition)


## Namespaces
CycloneDX defines two unique namespaces, a bill-of-material (bom) namespace and a SPDX namespace. The SPDX namespace
evolves independently of the bom namespace and consists of license identifiers. As new SPDX licenses are added to 
the SPDX specification over time, those changes will be reflected in the bom schema automatically.

<h5>XML</h5>
CycloneDX is a versioned schema and operates as follows:

* `http://cyclonedx.org/schema/bom` will always reference the latest version of the spec.
* Supplying a version after /bom such as `http://cyclonedx.org/schema/bom/1.2` will specify a specific version of the spec.

<h5>JSON</h5>
CycloneDX is a versioned schema and conforms to JSON Schema draft-07.

* Supplying a version, such as `http://cyclonedx.org/schema/bom-1.2.schema.json` will specify a specific version of the spec (starting with 1.2).


## Example SBOM
{% include code-example-tabs-head.html id="general-example" %}
{% include code-example-tabs-tab1.html id="general-example" %}
<div class="example example-xml"></div>
{% highlight xml %}
{% raw %}
<?xml version="1.0" encoding="UTF-8"?>
<bom xmlns="http://cyclonedx.org/schema/bom/1.2" serialNumber="urn:uuid:3e671687-395b-41f5-a30f-a58921a69b79" version="1">
  <components>
    <component type="library">
      <publisher>Apache</publisher>
      <group>org.apache.tomcat</group>
      <name>tomcat-catalina</name>
      <version>9.0.14</version>
      <hashes>
        <hash alg="MD5">3942447fac867ae5cdb3229b658f4d48</hash>
        <hash alg="SHA-1">e6b1000b94e835ffd37f4c6dcbdad43f4b48a02a</hash>
        <hash alg="SHA-256">f498a8ff2dd007e29c2074f5e4b01a9a01775c3ff3aeaf6906ea503bc5791b7b</hash>
        <hash alg="SHA-512">e8f33e424f3f4ed6db76a482fde1a5298970e442c531729119e37991884bdffab4f9426b7ee11fccd074eeda0634d71697d6f88a460dce0ac8d627a29f7d1282</hash>
      </hashes>
      <licenses>
        <license>
          <id>Apache-2.0</id>
        </license>
      </licenses>
      <purl>pkg:maven/org.apache.tomcat/tomcat-catalina@9.0.14</purl>
    </component>
      <!-- More components here -->
  </components>
</bom>
{% endraw %}
{% endhighlight %}
{% include code-example-tabs-tab2.html id="general-example" %}
<div class="example example-json"></div>
{% highlight json %}
{% raw %}
{
  "bomFormat": "CycloneDX",
  "specVersion": "1.2",
  "serialNumber": "urn:uuid:3e671687-395b-41f5-a30f-a58921a69b79",
  "version": 1,
  "components": [
    {
      "type": "library",
      "publisher": "Apache",
      "group": "org.apache.tomcat",
      "name": "tomcat-catalina",
      "version": "9.0.14",
      "hashes": [
        {
          "alg": "MD5",
          "content": "3942447fac867ae5cdb3229b658f4d48"
        },
        {
          "alg": "SHA-1",
          "content": "e6b1000b94e835ffd37f4c6dcbdad43f4b48a02a"
        },
        {
          "alg": "SHA-256",
          "content": "f498a8ff2dd007e29c2074f5e4b01a9a01775c3ff3aeaf6906ea503bc5791b7b"
        },
        {
          "alg": "SHA-512",
          "content": "e8f33e424f3f4ed6db76a482fde1a5298970e442c531729119e37991884bdffab4f9426b7ee11fccd074eeda0634d71697d6f88a460dce0ac8d627a29f7d1282"
        }
      ],
      "licenses": [
        {
          "license": {
            "id": "Apache-2.0"
          }
        }
      ],
      "purl": "pkg:maven/org.apache.tomcat/tomcat-catalina@9.0.14"
    }
  ]
}
{% endraw %}
{% endhighlight %}
{% include code-example-tabs-tail.html %}

## Implementations
A wide variety of implementations are available in the [CycloneDX Tool Center](https://cyclonedx.org/tool-center/).
The Tool Center is a community effort to establish a marketplace of free, open source, and proprietary tools and 
solutions that support the CycloneDX specification.

CycloneDX is designed with simplicity in mind. The specification is well [documented](https://cyclonedx.org/docs/1.2) and
includes [examples of common use cases](https://cyclonedx.org/use-cases/). CycloneDX is language, ecosystem, and vendor 
agnostic and encourages community innovation in the creation of new implementations. 

## Extensions
Support for additional use-cases or metadata is enabled through the use of schema extensions. Several
extensions from the CycloneDX community have been created which build upon a SBOMs base capabilities. 

#### BOM Descriptor
The BOM Descriptor extension provides the ability to add additional metadata about the system, asset, or application 
the BOM describes. This extension is applicable to CycloneDX v1.1 only.

<i class="icon icon--book"></i> [Documentation and examples](/ext/bom-descriptor)

#### Dependency Graph
The Dependency Graph extension provides the ability to describe components and their dependency on other components.
This extension is applicable to CycloneDX v1.1 only.

<i class="icon icon--book"></i> [Documentation and examples](/ext/dependency-graph)

#### Vulnerability
The Vulnerability extension provides the ability to represent component vulnerabilities in a BOM.
This extension is applicable to CycloneDX v1.1 and higher.

<i class="icon icon--book"></i> [Documentation and examples](/ext/vulnerability)

## Release History

| Version | Release Date |
| ------- | --------- |
| CycloneDX 1.2 | 26 May 2020 |
| CycloneDX 1.1 | 03 March 2019 |
| CycloneDX 1.0 | 26 March 2018 |
| Initial Prototype | 01 May 2017 |

## Project History
CycloneDX was designed in 2017 for use with [OWASP Dependency-Track](https://dependencytrack.org), an open-source 
Supply Chain Component Analysis platform. The primary use-cases CycloneDX was designed to solve were vulnerability 
identification, license compliance, and outdated component analysis. Additional capabilities were added in subsequent 
releases of the specification. 

The value of a lightweight software bill-of-material specification, capable of achieving real-world usecases, transcends 
the boundaries of a single vendor or supplier. Therefore, a dedicated open source project, independent of OWASP, was 
setup to develop the specification, the implementations, and move the format into widespread adoption. Today, thousands 
of organizations ranging from financial services, manufacturing, government, software, and security firms are producing 
and consuming CycloneDX SBOMs.
