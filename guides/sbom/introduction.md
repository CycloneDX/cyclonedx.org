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
    content: Preface
    url: '/guides/sbom'
  next:
    content: Object-Model
    url: '../object-model'
---

# Introduction
CycloneDX is a modern standard for the software supply chain. At its core, CycloneDX is a general-purpose Bill of
Materials (BOM) standard capable of representing software, hardware, services, and other types of inventory. The CycloneDX
standard began in 2017 in the Open Worldwide Application Security Project (OWASP) community. CycloneDX is an OWASP 
flagship project, has a formal standardization process and governance model, and is supported by the global information 
security community.

## Design Philosophy and Guiding Principles
The simplicity of design is at the forefront of the CycloneDX philosophy. The format is easily understandable by a wide 
range of technical and non-technical roles. CycloneDX is a full-stack BOM format with many advanced capabilities that 
are achieved without sacrificing the design philosophy. Some guiding principles influencing its design include:

* Be easy to adopt and easy to contribute to
* Identify risk to as many adopters as possible, as quickly as possible
* Avoid blockers that prevent the identification of risk
* Continuous improvement - innovate quickly and improve over time
* Encourage innovation and competition through extensions
* Produce immutable and backward-compatible releases
* Focus on high degrees of automation
* Provide a smooth path to specification compliance through prescriptive design

## Defining Software Bill of Materials
The U.S. National Telecommunications and Information Administration (NTIA) defines software bill as materials as
"_a formal, machine-readable inventory of software components and dependencies, information about those components,
and their hierarchical relationships_." OWASP CycloneDX implements this definition and extends it in many ways, including
adding services as a foundational component in a Software Bill of Materials.

## The Role of SBOM in Software Transparency
Software transparency involves providing clear and accurate information about the components used in an application,
including their name, version, supplier, and any dependencies required by the component. This information helps
identify and manage the risks associated with the software whilst also enabling compliance with relevant regulations and
standards. With the growing importance of software in our daily lives, transparency is critical to building trust in
software and ensuring that it is safe, secure, and reliable.

SBOMs are the vehicle through which software transparency can be achieved. With SBOMs, parties throughout the software
supply chain can leverage the information within to enable various use cases that would not otherwise be
easily achievable. SBOMs play a vital role in promoting software transparency, allowing users to make informed 
decisions about the software they use.

## High-Level SBOM Use Cases
A complete and accurate inventory of all first-party and third-party components is essential for risk identification.
SBOMs should ideally contain all direct and transitive components and the dependency relationships between them.

CycloneDX far exceeds the [Minimum Elements for Software Bill of Materials](https://www.ntia.gov/files/ntia/publications/sbom_minimum_elements_report.pdf)
as defined by the [National Telecommunications and Information Administration (NTIA)](https://www.ntia.gov/) in response
to [U.S. Executive Order 14028](https://www.whitehouse.gov/briefing-room/presidential-actions/2021/05/12/executive-order-on-improving-the-nations-cybersecurity/).

Adopting CycloneDX allows organizations to quickly meet these minimum requirements and mature into using more
sophisticated use cases over time. CycloneDX is capable of achieving all SBOM requirements defined in the
[OWASP Software Component Verification Standard (SCVS)](https://owasp.org/scvs).

A few high-level use cases for SBOM include:

* Product security, architectural, and license risk
* Procurement and M&A
* Software component transparency
* Supply chain transparency
* Vendor risk management

## xBOM Capabilities
CycloneDX provides advanced supply chain capabilities for cyber risk reduction. Among these capabilities are:

* Software Bill of Materials (SBOM)
* Software-as-a-Service Bill of Materials (SaaSBOM)
* Hardware Bill of Materials (HBOM)
* Machine Learning Bill of Materials (ML-BOM)
* Operations Bill of Materials (OBOM)
* Manufacturing Bill of Materials (MBOM)
* Bill of Attestations (BOA)
* Bill of Vulnerabilities (BOV)
* Vulnerability Disclosure Report (VDR)
* Vulnerability Exploitability eXchange (VEX)
* Common Release Notes Format

<div style="page-break-after: always; visibility: hidden">
\newpage
</div>

### Software Bill of Materials (SBOM)
SBOMs describe the inventory of software components and services and the dependency relationships between them.
A complete and accurate inventory of all first-party and third-party components is essential for risk identification.
SBOMs should ideally contain all direct and transitive components and the dependency relationships between them.

### Software-as-a-Service BOM (SaaSBOM)
SaaSBOMs provide an inventory of services, endpoints, and data flows and classifications that power cloud-native applications.
CycloneDX is capable of describing any type of service, including microservices, Service Orientated Architecture (SOA),
Function as a Service (FaaS), and System of Systems.

SaaSBOMs complement Infrastructure-as-Code (IaC) by providing a logical representation of a complex system, complete
with an inventory of all services, their reliance on other services, endpoint URLs, data classifications, and the directional
flow of data between services. Optionally, SaaSBOMs may also include the software components that make up each service.

### Hardware Bill of Materials (HBOM)
CycloneDX supports many types of components, including hardware devices, making it ideal for use with consumer
electronics, IoT, ICS, and other types of embedded devices. CycloneDX fills an important role in between traditional
eBOM and mBOM use cases for hardware devices.

###  Machine Learning Bill of Materials (ML-BOM)
ML-BOMs provide transparency for machine learning models and datasets, which provide visibility into possible security,
privacy, safety, and ethical considerations. CycloneDX standardizes model cards in a way where the inventory of models 
and datasets can be used independently or combined with the inventory of software and hardware components or services 
defined in HBOMs, SBOMs, and SaaSBOMs.

### Operations Bill of Materials (OBOM)
OBOMs provide a full-stack inventory of runtime environments, configurations, and additional dependencies. CycloneDX is a
full-stack bill of materials standard supporting entire runtime environments consisting of hardware, firmware, containers,
operating systems, applications, and libraries. Coupled with the ability to specify configuration makes CycloneDX
ideal for Operations Bill of Materials.

### Manufacturing Bill of Materials (MBOM)
CycloneDX can describe declared and observed formulations for reproducibility throughout the product lifecycle of components
and services. This advanced capability provides transparency into how components were made, how a model was trained, or
how a service was created or deployed. In addition, every component and service in a CycloneDX BOM can optionally specify
formulation and do so in existing BOMs or in dedicated MBOMs. By externalizing formulation into dedicated MBOMs, SBOMs 
can link to MBOMs for their components and services, and access control can be managed independently. This allows
organizations to maintain tighter control over what parties gain access to inventory information in a BOM and what parties 
have access to MBOM information which may have higher sensitivity and data classification.

### Bill of Attestations (BOA)
BOA's are machine-readable statements of claims, evidence, and testimony in compliance with regulations, standards, and
frameworks. CycloneDX implements a general-purpose attestation strategy that allows it to be leveraged across many
industries and for a wide variety of purposes. This may include compliance with ISO 27001, SOC 2, NIST SSDF, and OWASP
ASVS.

### Bill of Vulnerabilities (BOV)
CycloneDX BOMs may consist solely of vulnerabilities and thus can be used to share vulnerability data between systems 
and sources of vulnerability intelligence. Complex vulnerability data can be represented, including the vulnerability 
source, references, multiple severities, risk ratings, details and recommendations, and the affected software and 
hardware, along with their versions.

### Vulnerability Disclosure Report (VDR)
VDRs communicate known and unknown vulnerabilities affecting components and services. Known vulnerabilities inherited
from the use of third-party and open-source software can be communicated with CycloneDX. Previously unknown vulnerabilities
affecting both components and services may also be disclosed using CycloneDX, making it ideal for Vulnerability Disclosure
Report (VDR) use cases. CycloneDX exceeds the data field requirements defined in 
[ISO/IEC 29147:2018](https://www.iso.org/standard/72311.html) for vulnerability disclosure information.

### Vulnerability Exploitability eXchange (VEX)
VEX conveys the exploitability of vulnerable components in the context of the product in which they're used. VEX is a
subset of VDR. Oftentimes, products are not affected by a vulnerability simply by including an otherwise vulnerable
component. VEX allows software vendors and other parties to communicate the exploitability status of vulnerabilities,
providing clarity on the vulnerabilities that pose a risk and the ones that do not.

### Common Release Notes Format
CycloneDX standardizes release notes into a common, machine-readable format. This capability unlocks new workflow
potential for software publishers and consumers alike. This functionality works with or without the Bill of Materials
capabilities of the specification.

<div style="page-break-after: always; visibility: hidden">
\newpage
</div>
