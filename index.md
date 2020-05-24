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
* **26 May 2020**: [CycloneDX SBOM specification v1.2](https://cyclonedx.org/schema/bom-1.2.xsd) has been released and includes 'firmware' and 'container' component types, SWID tags, service components, applied patches, JSON support, and enhanced BOM metadata and dependency graphs previously only available through extensions.

## Introduction

Modern software is assembled using third-party and open source components, glued together in complex and unique ways, 
and integrated with original code to provide the desired functionality. Reusing components has many economic and
technical advantages. Documenting the use of all components is often desirable in order to perform 
[supply chain component analysis](https://owasp.org/www-community/Component_Analysis). 
CycloneDX was created for this purpose.

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
- [Analyze components for being out of date](/use-cases#package-evaluation)
- [License identification and compliance](/use-cases#license-compliance)
- [Describe complex component assemblies](/use-cases#assembly)
- [Capture dependency relationships](/use-cases#dependency-graph)
- [Describe component provenance](/use-cases#provenance)
- [Describe component pedigree](/use-cases#pedigree)
- [Describe reliance on services](/use-cases#service-definition)


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
      <purl>pkg:maven/org.apache.tomcat/tomcat-catalina@9.0.14?packaging=jar</purl>
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
  "coming-soon": true,
  "coming": "fjdkal",
  "fjdkla": [
    {
      "fjdkal": "fjkdla"
    }
  ]
}
{% endraw %}
{% endhighlight %}
{% include code-example-tabs-tail.html %}

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
