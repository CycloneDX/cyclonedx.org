---
# Page settings
layout: default
keywords: application security, software security, software bill of material, SBOM, BOM, open source, supply chain, specification, spdx, license, package url, purl, cpe
comments: false

# Hero section
title: CycloneDX
window_title: CycloneDX Software Bill of Material Specification (SBOM)
description: CycloneDX is a lightweight software bill-of-material (SBOM) specification designed for use in application security contexts and supply chain component analysis.

# Micro navigation
micro_nav: false

# Page navigation

---

## News
* **20 February, 2019**: Schema version [1.1-DRAFT-2](https://cyclonedx.org/schema/bom-1.1-DRAFT-2.xsd) is available for review and adds support for SPDX expressions, license text and URL.
* **6 February, 2019**: Schema version [1.1-DRAFT-1](https://cyclonedx.org/schema/bom-1.1-DRAFT-1.xsd) is available for preview along with a [sample BOM](https://github.com/CycloneDX/specification/blob/master/examples/1.1-draft/bom.xml) that conforms to it.
* **1 February, 2019**: Work is underway to define v1.1 of the CycloneDX specification. Expected additions to this 
release include support for [component pedigree](https://github.com/CycloneDX/specification/issues/6), 
[external references](https://github.com/CycloneDX/specification/issues/7), 
[file-type components](https://github.com/CycloneDX/specification/issues/8), and
[SPDX license expressions](https://github.com/CycloneDX/specification/issues/1).

## Introduction

In software engineering, it is common to build new software by leveraging existing components. In doing so, it is 
often necessary to provide a bill of material that describes the components that are packaged with an application. 

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
- Track component usage and risk with optional hierarchical representation
- Generate automatically from multiple development ecosystems
- Portable, single file which can be supplied by development teams, business partners, and vendors
#### Coming Soon:
- Document a components pedigree including ancestors, descendants, and variants, representing a components lineage from any viewpoint
- Analyze modified open source libraries without any loss of fidelity 


## Namespaces
CycloneDX defines two unique namespaces, a bill-of-material (bom) namespace and a SPDX namespace. The SPDX namespace
evolves independently from the bom namespace. As new SPDX licenses are added to the SPDX specification, those changes 
will be reflected in the bom namespace automatically, without having to change namespaces.

CycloneDX is a versioned namespace and operates as follows:

* `http://cyclonedx.org/schema/bom` will always reference the latest version of the spec.
* Supplying a version after /bom such as `http://cyclonedx.org/schema/bom/1.0` will specify a specific version of the spec.


## Specification Overview

| Field | Description | Required |
| ------|-------------| :------: |
|type| Describes if the component is a library, framework, application, operating system, or hardware device | 	&#x2714; |
|publisher| The person(s) or organization(s) that published the component | |
|group| The high-level classification that a project self-describes as. This will often be a shortened, single name of the company or project that produced the component, or the source package or domain name. | |
|name| The name of the component as defined by the project | &#x2714; |
|version| The version of the component as defined by the project | &#x2714; |
|description| A description of the component | |
|scope| Specifies the scope of the component. If scope is not specified, 'runtime' scope will be assumed. | |
|hashes| File hashes supporting MD5, SHA1, SHA2, and SHA3 | |
|license| Zero or more license names or SPDX license IDs | |
|copyright| An optional copyright notice informing users of the underlying claims to copyright ownership in a published work| |
|purl| The Package URL of the component | |
|cpe| An optional mapping to an existing CPE identifier | |
|modified| Indicates if the component has been modified from the official distribution | &#x2714; |
|components| Specifies optional sub-components. This is not a dependency tree. It simply provides an optional way to group large sets of components together. | |

## Example BOM
```xml
<?xml version="1.0" encoding="UTF-8"?>
<bom xmlns="http://cyclonedx.org/schema/bom/1.0" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" version="1" xsi:schemaLocation="http://cyclonedx.org/schema/bom/1.0 http://cyclonedx.org/schema/bom/1.0">
  <components>
    <component type="library">
      <group>org.jboss.resteasy</group>
      <name>resteasy-jaxrs</name>
      <version>3.1.0.Final</version>
      <description>JAX-RS bindings for RestEasy</description>
      <hashes>
        <hash alg="SHA-1">6427a9a622bff4dbe99d6f08dabd0dd89af85235</hash>
        <hash alg="SHA-256">97bb6890cea26ed6f107603426fdb19f1444932c310705895ecf9cc24992da0d</hash>
      </hashes>
      <licenses>
        <license>
          <id>Apache-2.0</id>
        </license>
      </licenses>
      <purl>pkg:maven/org.jboss.resteasy/resteasy-jaxrs@3.1.0-Final?type=jar</purl>
      <cpe>cpe:2.3:a:redhat:resteasy:3.1.0:*:*:*:*:*:*:*</cpe>
      <modified>false</modified>
    </component>
    <!-- More components here -->
  </components>
</bom>
```

## Implementations
Build plugins for a number of ecosystems have been created which support the automatic identification of all project 
dependencies and automatically generate CycloneDX BOMs. The resulting BOMs may contain many of the elements above 
including group, name, version, description, file hashes, license, and PackageURL. Additionally, a standalone Java API 
was created for the programmatic creation and validation of CycloneDX BOMs.

- [CycloneDX .NET Core](https://github.com/CycloneDX/cyclonedx-dotnet)
- [CycloneDX Node.js Module](https://github.com/CycloneDX/cyclonedx-node-module)
- [CycloneDX Maven Plugin](https://github.com/CycloneDX/cyclonedx-maven-plugin)
- [CycloneDX Python Module](https://github.com/CycloneDX/cyclonedx-python)
- [CycloneDX Java API](https://github.com/CycloneDX/cyclonedx-core-java)


Additional build plugins are planned and we're actively looking for volunteers to assist.


{% include implementations.html %}


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
CycloneDX was originally designed for use with [OWASP Dependency-Track](https://dependencytrack.org), an open-source 
software composition analysis platform with a focus on continuous component analysis. Research into existing specifications 
such as [SWID](https://tagvault.org/standards/swid_tagstandard/) and [SPDX](https://spdx.org/) revealed that neither 
specification was robust enough for application security contexts nor did these projects meet the basic requirements 
for wide-spread adoption within both enterprise build systems and the open source community.

After many discussions with Dependency-Track users and volunteers, a decision was made to create a new specification with
the sole purpose of being lightweight, easily adoptable, and with a security-first approach. The new specification would
build upon existing specifications where possible. CycloneDX incorporated [SPDX license IDs](https://spdx.org/licenses/) 
as they were widely adopted and recognized within the community. Adoption for the emerging 
[Package URL](https://github.com/package-url/purl-spec) (purl) specification was also included to provide CycloneDX a 
reference to the native ecosystem metadata about the component.

Today, many organizations using Dependency-Track do so using CycloneDX as their preferred BOM format. Publishing
CycloneDX BOMs can be handled through an API or via the [Dependency-Track Jenkins plugin](https://plugins.jenkins.io/dependency-track), 
currently in use by thousands of organizations. 