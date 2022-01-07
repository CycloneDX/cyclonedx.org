---
# Page settings
layout: document
keywords: application security, software security, software bill of material, SBOM, BOM, open source, supply chain, specification, spdx, license, package url, purl, cpe
comments: false
banner: false

# Hero section
title: Software-as-a-Service BOM (SaaSBOM)
window_title: CycloneDX - Software-as-a-Service BOM (SaaSBOM)
description: Software-as-a-Service BOM (SaaSBOM)

# Micro navigation
micro_nav: false

# Page navigation
    
---

# Software-as-a-Service BOM (SaaSBOM)

&nbsp;<!-- without this hack, the dropdown menu has issues due to h1 and h2 happening right after each other -->

{% include capabilities.html %}

Modern software often relies on external services, or is made up entirely of services. CycloneDX is capable of describing any type of service including:
- Microservice Architecture
- Service Orientated Architecture (SOA)
- Function as a Service (FaaS)
- n-Tier Architecture
- Actor model
- System of Systems

SaaSBOMs compliment Infrastructure-as-Code (IaC) by providing a logical representation of a complex system, complete with
inventory of all services, their reliance on other services, endpoint URLs, data classifications, and the directional
flow of data between services. Optionally, SaaSBOMs may also include the software components that make up each service.

CycloneDX is protocol agnostic and is capable of describing services over HTTP(S), REST, GraphQL, MQTT, and intra-process communication.
The specification provides enough information about services to automatically generate dataflow diagrams useful in 
security and privacy threat modeling. Refer to [Use Cases](../../use-cases) for details on services.

Use of CycloneDX SaaSBOMs is recommended by the [Cloud Security Alliance](https://cloudsecurityalliance.org/).

## High-Level Object Model

![CycloneDX Object Model Swimlane](../../theme/assets/images/CycloneDX-Object-Model-Swimlane.svg){: width="900"}
