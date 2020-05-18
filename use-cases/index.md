---
# Page settings
layout: examples
keywords: application security, software security, software bill of material, SBOM, BOM, open source, supply chain, specification, spdx, license, package url, purl, cpe
comments: false
banner: false

# Hero section
title: CycloneDX Use Cases
window_title: CycloneDX Use Cases
description: CycloneDX examples of common use cases

# Micro navigation
micro_nav: true

# Page navigation
    
---

<h1>Use Cases</h1>
The following examples provide guidance as to the minimal fields required to achieve specific use cases. Ideally, 
all optional fields would be populated in order to achieve all use cases.

## Inventory

An accurate and complete inventory of all first-party and third-party components is essential for risk identification.
BOMs should ideally contain all direct and transitive components and the dependency relationships between them.

CycloneDX is capable of describing the following types of components:

| Component Type | Class |
| ------- | --------- |
| Application | Component |
| Container | Component |
| Device | Component |
| Library | Component |
| File | Component |
| Firmware | Component |
| Framework | Component |
| Operating System | Component |
| Service | Service | 

{% include examples/inventory.html %}

## Security

Identifying known vulnerabilities in components can be achieved through the use of three fields: `cpe`, `swid`, and 
`purl`. Not all fields apply to all types of components. 
The [CPE](https://nvd.nist.gov/products/cpe) specification was designed for operating 
systems, applications, and hardware devices. CPE is maintained by the NVD and has been deprecated.
Software ID (SWID) as defined in [ISO/IEC 19770-2:2015](https://www.iso.org/standard/65666.html) is used primarily to 
identify installed software and is the preferred format of the NVD. 
[Package URL](https://github.com/package-url/purl-spec) (PURL) standardizes how software 
package metadata is represented so that packages can universally be located regardless of what vendor, project, or 
ecosystem the packages belongs.

Components that have a cpe, swid, or purl defined can be analyzed for known vulnerabilities.

<h4>Guidelines</h4>

| Use | Recommendation |
| ------- | --------- |
| Client or Server Application | CPE or SWID |
| Container | PURL or SWID |
| Firmware | CPE or SWID |
| Library or Framework (package) | PURL |
| Library or Framework (non-package) | SWID |
| Operating System | CPE or SWID |
| Operating System Package | PURL or SWID |

<div class="callout callout--warning">
Not all sources of vulnerability intelligence support all three fields. Use of multiple sources may be required to
obtain accurate and actionable results.
</div>

{% include examples/security.html %}

## Integrity verification

Every component in a BOM may contain zero or more hash values computed from cryptographic hash functions. The values 
may be used to verify a component has not been tampered with. Stronger hash functions provide higher levels
of assurance.

CycloneDX also supports integrity as a property of digital signing. Refer to [Authenticity](#authenticity).

{% include examples/integrity.html %}

## Authenticity

Digital signatures may be applied to a BOM or to an [assembly](#assembly) within a BOM. CycloneDX supports 
[XML Signature](https://www.w3.org/TR/xmldsig-core/) and [JSON Web Signature (JWS)](https://tools.ietf.org/html/rfc7515).
Signed BOMs benefit by providing advanced integrity and non-repudiation capabilities.

{% include examples/authenticity.html %}

## Outdated component

[Package URL](https://github.com/package-url/purl-spec) (PURL) standardizes how software 
package metadata is represented so that packages can universally be located regardless of what vendor, project, or 
ecosystem the packages belongs. Locating packages varies by ecosystem, but once components are located in their 
respective repository, the repository may be queried to determine the latest version of a given component.

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

{% include examples/outdated.html %}

## License compliance

CycloneDX incorporates SPDX license IDs and expressions to document stated licenses of open source components. Licenses
can be expressed three ways, by SPDX license ID, by SPDX license expression, or as a license name. Zero or more licenses
can be defined by ID or by name.

<div class="callout callout--warning">
If multiple license IDs or names are specified, the CycloneDX spec does not state if a consumer can choose between 
licenses, or if multiple licenses must be accepted. The spec is intentionally ambiguous with regard to this meaning.
</div>

SPDX expressions provide a way to represent complex license usages including the choice between licenses, or the 
requirement that multiple licenses must be accepted.

If an SPDX license cannot be resolved to a license ID, or if the license is not in the 
[SPDX license list](https://spdx.org/licenses/), then the name of the license can be used. 

| License Choice | Validation | Attachment |
| ------- | --------- |
| SPDX License ID | Strict - Ensures the license ID is valid | &#10003; |
| SPDX License Expression | None | |
| License name | None | &#10003; |

When defining a license by its ID or by name, the textual content of the license can be included in the BOM. This is 
especially useful for licenses that allow the header of the license to contain copyright, authorship, or other data
that make the license unique.

{% include examples/license-compliance.html %}

## Assembly 

Components in a BOM can be nested to form an assembly. An assembly is a collection of components that are included in 
a parent component. As an analogy, an automotive dashboard contains an instrument panel component. And the instrument 
panel component contains a speedometer component. This nested relationship is called an assembly in CycloneDX. 
Software assemblies that can be represented in CycloneDX can range from large enterprise solutions comprising 
multiple systems, to cloud-native deployments containing large collections of related micro-services.

<div class="callout callout--success" markdown="1">
Assemblies, or leafs within an assembly, can independently be signed. BOMs comprising component assemblies from 
multiple suppliers can benefit from this capability. Each supplier can sign their respective assembly. The creator 
of final goods can then sign the BOM as a whole. Refer to [Authenticity](#authenticity).
</div>

{% include examples/assembly.html %}

## Dependency graph

CycloneDX provides the ability to describe components and their dependency on other components. 
This relies on a components `bom-ref` to associate the component to the dependency element in the graph. 
The only requirement for bom-ref is that it is unique within the BOM. Package URL (PURL) is an ideal choice for 
bom-ref as it will be both unique and readable. If PURL is not an option or not all components represented in 
the BOM contain a PURL, then UUID is recommended. A dependency graph is typically one node deep and capable of
representing both direct and transitive relationships.

Although an entire dependency tree is capable of being represented, it is not advisable due to circular dependencies
or other complex relationships that have the potential to cause endless loops. Graphs with one node of depth are
recommended.

<div class="callout callout--info">
Components that do not have their own dependencies MUST be declared as empty
elements within the graph. Components that are not represented in the dependency graph MAY
have unknown dependencies. It is RECOMMENDED that implementations assume this to be opaque
and not an indicator of a component being dependency-free.
</div>

{% include examples/dependency-graph.html %}

## Provenance
CycloneDX is capable of representing component authorship and the suppliers from which components were obtained.
Textual fields representing the author(s) and publisher(s) can be used, as well as SWID metadata or complete inline 
SWID documents. Provenance capabilities can be used together with [assemblies](#assembly) to represent complex 
packaging, repackaging, and redistribution use cases.

{% include examples/provenance.html %}

## Pedigree
CycloneDX can represent a component pedigree including ancestors, descendants, and variants which describe a 
components lineage from any viewpoint and the commits, patches, and diffs which make it unique. The addition of a 
[digital signature](#authenticity) applied to a component with detailed pedigree information serves as affirmation to
the accuracy of the pedigree.

<div class="callout callout--info">
Maintaining accurate pedigree information is especially important with open source components whos source code is
readily available, modifiable, and redistributable. Identifying changes to a component or a components coordinates 
along with information describing the original component, may be necessary for the analysis of various forms of risk.
</div>

{% include examples/pedigree.html %}

## Service definition

CycloneDX can be used to describe services including the provider, endpoint URI's, authentication requirements, and 
trust boundary traversals. The flow of data between software and services can also be described including the
data classifications, and the flow direction of each type. 

BOMs with services defined can be used for various forms of deployment and runtime verification, seed dynamic analysis 
security tools, and used to populate data flow diagrams and threat models. They can also aid in identifying potential 
privacy or regulatory concerns.

<div class="callout callout--success" markdown="1">
Components that depend on services can be represented in a [dependency graph](#dependency-graph) just like dependencies
between components. Additionally, services that depend on other services can also be represented.
</div>

{% include examples/services.html %}

## Packaging and distribution 

// todo bom metadata

<div class="callout callout--info" markdown="1">
</div>

{% include examples/packaging-distribution.html %}

## Exploitability

Vulnerability and Exploitability (VEX) use cases are also possible through the use of the optional [vulnerability
schema extension](/ext/vulnerability). Through the use of this extension, it is possible to document known 
vulnerabilities per component as well as zero or more risk ratings per vulnerability. For example, a component
may have a CVE with a CVSS score of 9.8, however, if the vulnerable function or method in the component is not called or
if there are mitigating controls, additional risk ratings may be added to the vulnerability to provide a more accurate
representation of risk.

<div class="callout callout--warning">
The vulnerability schema extension is only available in XML. It is not currently available in JSON.
</div>

{% include examples/vex.html %}
