---
# Page settings
layout: document
keywords: application security, software security, software bill of material, SBOM, BOM, open source, supply chain, specification, spdx, license, package url, purl, cpe
comments: false
banner: false

# Hero section
title: CycloneDX Capabilities
window_title: CycloneDX Capabilities
description: CycloneDX Capabilities

# Micro navigation
micro_nav: false

# Page navigation
    
---

# Capabilities

&nbsp;<!-- without this hack, the dropdown menu has issues due to h1 and h2 happening right after each other -->

{% include capabilities.html %}

CycloneDX was designed from the ground-up to be a Bill of Materials (BOM) format, capable of capturing complex inventory information for a wide range of cybersecurity and software supply chain [use cases](../use-cases).

## Software Bill of Materials (SBOM)
A complete and accurate inventory of all first-party and third-party components is essential for risk identification. BOMs should ideally contain all direct and transitive components and the dependency relationships between them.
CycloneDX supports a wide range of software components, including:
* Applications
* Containers
* Libraries
* Files
* Firmware
* Frameworks
* Operating Systems

<i class="icon icon--arrow-right call-out"></i> Learn more about [Software Bill of Materials (SBOM)](sbom)

## Software-as-a-Service BOM (SaaSBOM)
Modern software often relies on external services, or is made up entirely of services. CycloneDX is capable of describing any type of service including:
- Microservice Architecture
- Service Orientated Architecture (SOA)
- Function as a Service (FaaS)
- n-Tier Architecture
- Actor model
- System of Systems

CycloneDX is protocol agnostic and is capable of describing services over HTTP(S), REST, GraphQL, MQTT, and intra-process communication. 
The specification provides enough information about services to automatically generate dataflow diagrams useful in threat modeling.

<i class="icon icon--arrow-right call-out"></i> Learn more about [Software-as-a-Service BOM (SaaSBOM)](saasbom)

## Vulnerability Exploitability Exchange (VEX)
Known vulnerabilities inherited from the use of third-party and open source software and the exploitability of the vulnerabilities 
can be communicated with CycloneDX. Previously unknown vulnerabilities affecting both components and services may also be disclosed
using CycloneDX, making it ideal for both VEX and security advisory use cases.
- VEX information can be represented inside an existing BOM, or in a dedicated VEX BOM
- Supports known and unknown vulnerabilities against components and services
- Communicates the vulnerability details, exploitability, and detailed analysis

<i class="icon icon--arrow-right call-out"></i> Learn more about [Vulnerability Exploitability Exchange (VEX)](vex)

## Manufacturing Bill of Materials (MBOM)
CycloneDX supports many types of components, including hardware devices, making it ideal for use with consumer electronics, 
<abbr data-title="Internet of Things">IoT</abbr>, <abbr data-title="Industrial Control System">ICS</abbr>, and other
types of embedded devices. CycloneDX fills an important role in-between traditional 
<abbr data-title="Engineering Bill of Materials">eBOM</abbr> and <abbr data-title="Manufacturing Bill of Materials">mBOM</abbr>
use cases for hardware devices.
- Supports `device` as a first-class component type
- Utilizes a formal and extensible taxonomy that defines a wide range of hardware devices and configurations

<i class="icon icon--arrow-right call-out"></i> Learn more about [Manufacturing Bill of Materials (MBOM)](mbom)

## Operations Bill of Materials (OBOM)
CycloneDX is a full-stack bill of materials standard supporting entire runtime environments consisting of hardware, 
firmware, containers, operating systems, applications and their libraries. Coupled with the ability to specify configuration
makes CycloneDX ideal for Operational Bill of Materials. OBOM is a security behavior defined in [BSIMM](https://www.bsimm.com/) 
and similar maturity models.

<i class="icon icon--arrow-right call-out"></i> Learn more about [Operations Bill of Materials (OBOM)](obom)

## Bill of Vulnerabilities (BOV)
CycloneDX BOMs may consist solely of vulnerabilities, thus can be used to share vulnerability data between systems and 
sources of vulnerability intelligence. 

<i class="icon icon--arrow-right call-out"></i> Learn more about [Bill of Vulnerabilities (BOV)](bov)

## Common Release Notes Format
CycloneDX standardizes release notes into a common, machine-readable format. This capability unlocks new workflow 
potential for software publishers and consumers alike. This functionality works with or without the Bill of Materials
capabilities of the spec.

<i class="icon icon--arrow-right call-out"></i> Learn more about [Common Release Notes Format](release-notes)
