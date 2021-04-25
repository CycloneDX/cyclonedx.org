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
all optional fields would be populated in order to achieve all use cases. Many of the cases highlighted are
directly or closely related to security.

## Inventory

A complete and accurate inventory of all first-party and third-party components is essential for risk identification.
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

## Known vulnerabilities

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
[XML Signature](https://www.w3.org/TR/xmldsig-core/), [JSON Web Signature (JWS)](https://tools.ietf.org/html/rfc7515),
and [JSON Signature Format (JSF)](https://cyberphone.github.io/doc/security/jsf.html).
Signed BOMs benefit by providing advanced integrity and non-repudiation capabilities.

{% include examples/authenticity.html %}

## Package evaluation

[Package URL](https://github.com/package-url/purl-spec) (PURL) standardizes how software 
package metadata is represented so that packages can universally be located regardless of what vendor, project, or 
ecosystem the packages belongs. Locating packages varies by ecosystem. Once located, the age of the component, whether
it is out-of-date, published hashes, and overall project health are candidates for evaluation.

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
multiple systems, to cloud-native deployments containing large collections of related micro-services. Assemblies can
also describe simpler inclusions such as software packages which contain supporting files.

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
SWID documents. Package URL can describe the origin repository in which a library was retrieved from. Provenance 
capabilities can be used together with [assemblies](#assembly) to represent complex packaging, repackaging, and 
redistribution use cases.

{% include examples/provenance.html %}

## Pedigree
CycloneDX can represent component pedigree including ancestors, descendants, and variants which describe 
component lineage from any viewpoint and the commits, patches, and diffs which make it unique. The addition of a 
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

## Properties / name-value store
The CycloneDX standard is fully extensible allowing for complex data to be represented in the BOM that is not provided
by the core specification. In many cases however, name-value pairs are a simpler option. CycloneDX supports Properties
which is a name-value store that can be used to describe additional data about the components, services, or the BOM
that isn't native to the core specification. Unlike key-value stores, properties support duplicate names, each 
potentially having different values.

{% include examples/properties.html %}

## Packaging and distribution 

For software that is produced for the consumption of others, it is important to apply additional metadata about the
produced software including detailed component information, manufacturing and supplier information, and the tools
used to create the BOM. 

{% include examples/packaging-distribution.html %}

## Composition completeness

The inventory of components, services, and their relationships to one another can be described through the use of 
compositions. The aggregate of each composition can be described as complete, incomplete, incomplete first-party only,
incomplete third-party only, or unknown. This allows BOM authors to describe how complete the BOM is or if there are
components in the BOM where completeness is unknown.

{% include examples/compositions.html %}

## Vulnerability remediation

By leveraging the [pedigree](#pedigree) capabilities of CycloneDX, it is possible to describe remediations made to
vulnerable components. In some cases, upgrading to a non-vulnerable version of a component may not be possible due to
incompatibilities, or the project may no longer be maintained. In these situations, CycloneDX can describe all changes 
that were made to the components along with the vulnerabilities those changes resolve.

{% include examples/vulnerability-remediation.html %}

## Vulnerability disclosure

CycloneDX can optionally include vulnerabilities from the inventory of components and services. This is accomplished
through the use of the [vulnerability schema extension](/ext/vulnerability). Common use cases of this extension are 
seen in Software Composition Analysis (SCA) tools, OCI container analysis tools, and other software or systems that 
analyze components, identify inherited risk, and generate SBOMs with component inventory and associated vulnerabilities.

Vulnerability data is subject to change, even if the SBOM and its inventory of components does not. Due to the dynamic
nature of vulnerability data, it is recommended that SBOMs with this information have a relatively short shelf-life and
not persisted or referenced for longer periods of time. 

CycloneDX can also reference dynamic vulnerability information through its support of 
[security advisories](#security-advisories).

<div class="callout callout--warning">
The vulnerability schema extension is only available in XML. It is not currently available in JSON.
</div>

{% include examples/vulnerability-disclosure.html %}

## Security advisories

CycloneDX supports many different types of [external references](#external-references) including security advisories.
Zero or more URLs to security advisories for a given component or service can be specified. CycloneDX does not prescribe
the advisory format, however the [Common Security Advisory Framework (CSAF)](https://www.oasis-open.org/committees/tc_home.php?wg_abbrev=csaf) 
is recommended.

{% include examples/security-advisories.html %}

