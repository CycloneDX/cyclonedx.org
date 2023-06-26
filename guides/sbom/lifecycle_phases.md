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
guide_url: OWASP_CycloneDX-SBOM-Guide-en.pdf

# Page navigation
page_nav:
  prev:
    content: Object-Model
    url: '../object-model'
  next:
    content: Use Cases
    url: '../use_cases'
---

# Lifecycle Phases
The Software Development Life Cycle (SDLC) is a process that outlines the phases involved in software development from
conception to deployment and maintenance. It typically includes planning, analysis, design, implementation, testing,
deployment, and maintenance; each phase has its own activities and deliverables. The purpose of the SDLC is
to provide a structured and systematic approach to software development that ensures the final product meets the customer's
requirements, is of high quality, is delivered on time and within budget, and can be maintained and supported throughout
its' lifecycle.

Lifecycle phases communicate the stage in which data in the BOM was captured. This support extends beyond software to 
capture hardware, IoT, and cloud-native use cases. Different types of data may be available at various phases of a 
lifecycle, and thus a BOM may include data specific to or only obtainable in a given lifecycle. Incorporating lifecycle phases
in a CycloneDX BOM provides additional context of when and how the BOM was created. It becomes an additional datapoint 
that may be useful in the overall analysis of the BOM.

CycloneDX defines the following phases:

| **Phase**    | **Description**                                                                                                                                                                                                                                                                                                                                                                                                                          |
|--------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Design       | BOM produced early in the development lifecycle containing an inventory of components and services that are proposed or planned to be used. The inventory may need to be procured, retrieved, or resourced prior to use.                                                                                                                                                                                                                 |
| Pre-build    | BOM consisting of information obtained prior to a build process and may contain source files, development artifacts, and manifests. The inventory may need to be resolved and retrieved prior to use.                                                                                                                                                                                                                                    |
| Build        | BOM consisting of information obtained during a build process where component inventory is available for use. The precise versions of resolved components are usually available at this time as well as the provenance of where the components were retrieved from.                                                                                                                                                                      |
| Post-build   | BOM consisting of information obtained after a build process has completed and the resulting components(s) are available for further analysis. Built components may exist as the result of a CI/CD process, may have been installed or deployed to a system or device, and may need to be retrieved or extracted from the system or device.                                                                                              |
| Operations   | BOM produced that represents inventory that is running and operational. This may include staging or production environments and will generally encompass multiple SBOMs describing the applications and operating system, along with HBOMs describing the hardware that makes up the system. Operations Bill of Materials (OBOM) can provide a full-stack inventory of runtime environments, configurations, and additional dependencies. |
| Discovery    | BOM consisting of information observed through network discovery providing point-in-time enumeration of embedded, on-premise, and cloud-native services such as server applications, connected devices, microservices, and serverless functions.                                                                                                                                                                                         |
| Decommission | BOM containing inventory that will be or has been retired from operations.                                                                                                                                                                                                                                                                                                                                                               |

In addition, CycloneDX provides a mechanism to supply user-defined lifecycle phases as well.

<div style="page-break-after: always; visibility: hidden">
\newpage
</div>

Software Asset Management (SAM) is a set of processes, policies, and procedures that help organizations
manage and optimize their software assets throughout their lifecycle. SAM involves the identification, acquisition,
deployment, maintenance, utilization, and disposal of software assets to ensure compliance with licensing agreements,
mitigate risks associated with software usage, and optimize costs. Likewise, IT Asset Management (ITAM) has a similar 
function, encompassing hardware, software, and other IT assets. Unlike the SDLC, which has widely accepted phases, 
SAM and ITAM lifecycles may vary. For example, the lifecycles defined in [ISO/IEC 19770-1:2017](https://www.iso.org/standard/68531.html),
which specifies requirements for IT asset management systems, are different from the lifecycles defined in [NIST SP 1800-5](https://csrc.nist.gov/publications/detail/sp/1800-5/final).
The out-of-the-box lifecycles provided by enterprise ITAM solutions also vary by vendor and can further be customized
by organizations adopting these products. Therefore, CycloneDX includes predefined lifecycles that apply to both SDLC and
SAM/ITAM, while also providing the flexibility in defining custom lifecycles. This allows CycloneDX to be fully integrated 
with existing enterprise SAM/ITAM practices.


<div style="page-break-after: always; visibility: hidden">
\emptyparagraph
</div>

![Lifecycles](../../../theme/assets/images/guides/SBOM/Lifecycles.svg)

<div style="page-break-after: always; visibility: hidden">
\emptyparagraph
</div>

The following example illustrates a BOM that was produced in the `build` and `post-build` lifecycle phases.
In addition, a custom phase (platform-integration-testing) was involved as well.

<div style="page-break-after: always; visibility: hidden">
\emptyparagraph
</div>

```json
"metadata": {
  "lifecycles": [
    {
      "phase": "build"
    },
    {
      "phase": "post-build"
    },
    {
      "name": "platform-integration-testing",
      "description": "Integration testing specific to the runtime platform"
    }
  ]
}
```

<div style="page-break-after: always; visibility: hidden">
\emptyparagraph
</div>

Support for SAM and ITAM use cases is critical for enterprise adoption. An interesting distinction between SDLC and SAM 
use cases center around license compliance. Solutions supporting the SDLC typically involve open-source license compliance
or intellectual property use cases. Whereas SAM is largely concerned with commercial license and procurement use cases. 
OWASP CycloneDX has extensive support for both. Refer to the "Use Cases" chapter for more information.

<div style="page-break-after: always; visibility: hidden">
\newpage
</div>
