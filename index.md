---
# Page settings
layout: default
keywords: application security, software security, software bill of material, SBOM, BOM, open source, supply chain, specification, spdx, license, package url, purl, cpe
comments: false
banner: true

# Hero section
title: CycloneDX
window_title: CycloneDX Software Bill of Material Specification (SBOM)
description: CycloneDX is a lightweight software bill-of-material (SBOM) specification designed for use in application security contexts and supply chain component analysis.

# Micro navigation
micro_nav: false

# Page navigation

---

## News
* **18 April, 2020** [BOM Descriptor 1.0 extension](/ext/bom-descriptor) released
* **21 Sept, 2019** [Vulnerability 1.0 extension](/ext/vulnerability) released
* **14 Sept, 2019** [Dependency Graph 1.0 extension](/ext/dependency-graph) released
* **3 March, 2019**: [CycloneDX SBOM specification v1.1](https://cyclonedx.org/schema/bom-1.1.xsd) has been released and includes numerous improvements including external references, component pedigree, license enhancements, and is more extensible.

## Introduction

Modern software is assembled using third-party and open source components, glued together in complex and unique ways, 
and integrated with original code to provide the desired functionality. Reusing components has many economic and
technical advantages. Documenting the use of third-party and open source components is often desirable in 
order to perform [supply chain component analysis](https://owasp.org/www-community/Component_Analysis). 
CycloneDX was created for this purpose.

## Project Goals
- Define a vendor agnostic specification independent of language or ecosystem
- Specification should be simultaneously human and machine readable
- Specification should be simple to implement with minimal effort
- Specification should provide lightweight schema definitions for JSON and XML
- Specification should reuse parts of existing specs where beneficial
- Specification should be decentralized, authoritative, and security focused
- Specification should promote continuous component analysis
- Specification should support hardware, libraries, frameworks, applications, and operating systems


## Achievable Use Cases
- Vulnerability analysis (software and hardware)
- Outdated component analysis
- License identification and compliance
- File verification
- Hierarchical representation of component assemblies
- Document a components pedigree including ancestors, descendants, variants, and commits, representing a components lineage from any viewpoint and the attributes which make it unique
- Analyze modified open source libraries without any loss of fidelity
- Human and machine readable format designed to be simple to use, extensible, and easily adoptable


## Namespaces
CycloneDX defines two unique namespaces, a bill-of-material (bom) namespace and a SPDX namespace. The SPDX namespace
evolves independently from the bom namespace and consists of license identifiers. As new SPDX licenses are added to 
the SPDX specification over time, those changes will be reflected in the bom schema automatically.

CycloneDX is a versioned namespace and operates as follows:

* `http://cyclonedx.org/schema/bom` will always reference the latest version of the spec.
* Supplying a version after /bom such as `http://cyclonedx.org/schema/bom/1.1` will specify a specific version of the spec.


## Specification Overview

| Field | Description | Required |
| ------|-------------| :------: |
|type| Describes if the component is a library, framework, application, operating system, hardware device, or file | &#x2714; |
|publisher| The person(s) or organization(s) that published the component | |
|group| The high-level classification that a project self-describes as. This will often be a shortened, single name of the company or project that produced the component, or the source package or domain name. | |
|name| The name of the component as defined by the project | &#x2714; |
|version| The version of the component as defined by the project | &#x2714; |
|description| A description of the component | |
|scope| Specifies the scope of the component. If scope is not specified, 'runtime' scope will be assumed. | |
|hashes| File hashes supporting MD5, SHA1, SHA2, and SHA3 | |
|license| Describes zero or more license names, SPDX license IDs or expressions | |
|copyright| An optional copyright notice informing users of the underlying claims to copyright ownership in a published work| |
|purl| The Package URL of the component | |
|cpe| An optional mapping to an existing CPE identifier | |
|modified| Indicates if the component has been modified from the official distribution | |
|pedigree| A node which contains component ancestors, descendants, variants, and the commits which make it unique | |
|externalReferences| A node which contains various types of references to external resources | |
|components| Specifies optional sub-components. This is not a dependency tree. It provides a hierarchical representation of component assemblies | |


## Example SBOM
```xml
<?xml version="1.0" encoding="UTF-8"?>
<bom xmlns="http://cyclonedx.org/schema/bom/1.1" serialNumber="urn:uuid:3e671687-395b-41f5-a30f-a58921a69b79" version="1">
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
      <purl>pkg:maven/org.apache.tomcat/tomcat-catalina@9.0.14?packaging=jar</purl>
    </component>
      <!-- More components here -->
  </components>
</bom>
```

## Implementations
Build plugins for a number of ecosystems have been created which support the automatic identification of all project 
dependencies and automatically generate CycloneDX SBOMs. The resulting SBOMs may contain many of the elements above 
including group, name, version, description, file hashes, license, and PackageURL. Additionally, a standalone Java API 
was created for the programmatic creation and validation of CycloneDX SBOMs.

- [CycloneDX .NET Core](https://github.com/CycloneDX/cyclonedx-dotnet)
- [CycloneDX Node.js Module](https://github.com/CycloneDX/cyclonedx-node-module)
- [CycloneDX Java (Maven) Plugin](https://github.com/CycloneDX/cyclonedx-maven-plugin)
- [CycloneDX Java (Gradle) Plugin](https://github.com/CycloneDX/cyclonedx-gradle-plugin)
- [CycloneDX Java API](https://github.com/CycloneDX/cyclonedx-core-java)
- [CycloneDX PHP Composer](https://github.com/CycloneDX/cyclonedx-php-composer)
- [CycloneDX Python Module](https://github.com/CycloneDX/cyclonedx-python)
- [CycloneDX Ruby Gem](https://github.com/CycloneDX/cyclonedx-ruby-gem)
- [CycloneDX Rust Cargo](https://github.com/CycloneDX/cyclonedx-rust-cargo)


Additional build plugins are planned and we're actively looking for volunteers to assist.


{% include implementations.html %}

## Community Implementations
A growing community of CycloneDX adopters are producing various tools for the generation, analysis, and 
reporting of CycloneDX SBOMs. 

- [CycloneDX for Go](https://github.com/ozonru/cyclonedx-go)
- [CycloneDX SBT Plugin for Scala](https://github.com/siculo/sbt-bom)
- [CycloneDX Mix Task for Erlang/Elixir](https://hex.pm/packages/sbom)
- [CycloneDX Rebar3 Plugin for Erlang/Elixir](https://hex.pm/packages/rebar3_sbom)
- [OSS Review Toolkit](https://github.com/heremaps/oss-review-toolkit)
- [OWASP Dependency-Track](https://dependencytrack.org/)
- [Sonatype Nexus IQ Server](https://www.sonatype.com/nexus-iq-server)


## Extensions
Support for additional use-cases or metadata is enabled through the use of schema extensions. Several
extensions from the CycloneDX community have been created which build upon a SBOMs base capabilities. 

#### BOM Descriptor
The BOM Descriptor extension provides the ability to add additional metadata about the system, asset, or application 
the BOM describes. 

<i class="icon icon--book"></i> [Documentation and examples](/ext/bom-descriptor)

#### Dependency Graph
The Dependency Graph extension provides the ability to describe components and their dependency on other components.

<i class="icon icon--book"></i> [Documentation and examples](/ext/dependency-graph)

#### Vulnerability
The Vulnerability extension provides the ability to represent component vulnerabilities in a BOM.

<i class="icon icon--book"></i> [Documentation and examples](/ext/vulnerability)

## Component Ecosystems
Components often belong to one or more ecosystems. These ecosystems typically have one or more sources of 
truth that provide additional data about the components. For example, Maven Central and the NPM repository provide 
information about Java and Node components respectively. Likewise, Linux distributions typically utilize one or more
repositories for packages within their ecosystem including RPM, Debian, and Solus.

### Package URL (purl)
Package URL was created to standardize how software package metadata is represented so that packages could universally
be located regardless of what vendor, project, or ecosystem the packages belong. 
Package URL conforms to [RFC-3986](https://tools.ietf.org/html/rfc3986).

The syntax of Package URL is:
```
scheme:type/namespace/name@version?qualifiers#subpath
```

* **Scheme**: Will always be 'pkg' to indicate a Package URL (required)
* **Type**: The package "type" or package "protocol" such as maven, npm, nuget, gem, pypi, etc. Required.
* **Namespace**: Some name prefix such as a Maven groupid, a Docker image owner, a GitHub user or organization. Optional and type-specific.
* **Name**: The name of the package. Required.
* **Version**: The version of the package. Optional.
* **Qualifiers**: Extra qualifying data for a package such as an OS, architecture, a distro, etc. Optional and type-specific.
* **Subpath**: Extra subpath within a package, relative to the package root. Optional.

## History
CycloneDX was designed in 2017 for use with [OWASP Dependency-Track](https://dependencytrack.org), an open-source 
Software Composition Analysis (SCA) platform. The primary use-cases CycloneDX was designed to solve were vulnerability 
identification, license compliance, and outdated component analysis. Additional capabilities were added in subsequent 
releases of the specification. 

The value of a lightweight software bill-of-material specification, capable of achieving real-world usecases, transcends 
the boundaries of a single vendor or supplier. Therefore, a dedicated project, independent of OWASP, was setup to develop 
the specification, the implementations, and move the format into widespread adoption. Today, thousands of organizations 
ranging from financial services, manufacturing, software, and security firms are producing and consuming CycloneDX SBOMs.
