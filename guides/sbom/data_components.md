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
    content: Consumption
    url: '../consumption'
  next:
    content: Relationships
    url: '../relationships'
---

# Leveraging Data Components

Data components provide the ability to inventory data as part of a bill of material. This specialized type of component
benefits from all the other capabilities that CycloneDX provides, including tracking the provenance and pedigree of data.

A data "type" describes the general theme or subject matter of the data being specified. The following are supported types:

| Type          | Description                                                                   |
|---------------|-------------------------------------------------------------------------------|
| configuration | Parameters or settings that may be used by other components.                  |
| dataset       | A collection of data.                                                         |
| definition    | Data that can be used to create new instances of what the definition defines. |
| source-code   | Any type of code, code snippet, or data-as-code.                              |
| other         | Any other type of data that does not fit into existing definitions.           |


<div style="page-break-after: always; visibility: hidden">
\emptyparagraph
</div>

To help visualize a typical scenario, let's describe an application with a few different data components that represent
custom source code and configurations bundled in an application.

![Nested Component Data](../../../theme/assets/images/guides/SBOM/Nested_Component_Data.svg)

Other possible scenarios include:
- Inclusion of all source code that makes up a component.
- Inclusion of inline datasets bundled with a component.
- Externalizing the data components using an External Reference of type 'bom'.
- Leveraging CycloneDX lifecycles and External References to create an Operations Bill of Materials (OBOM) linking the SBOM of the application, the HBOM of the hardware it's running on, and describing the runtime configuration of the system in the OBOM. 

<div style="page-break-after: always; visibility: hidden">
\newpage
</div>

This example, similar to the previous illustration, involves Acme Application which includes the Javascript source code 
for a shutdown hook. In this case, both are from different suppliers.

```json
"components": [
  {
    "bom-ref": "acme-application",
    "type": "application",
    "name": "Acme Application",
    "version": "1.0.0",
    "supplier": { "name": "Acme Inc" },
    "components": [
      {
        "type": "data",
        "name": "Shutdown Hook",
        "supplier": { "name": "Example Company" },      
        "data": [
          {
            "type": "source-code",
            "contents": {
              "attachment": {
                "contentType": "text/javascript",
                "encoding": "base64",
                "content": "Y29uc29sZS5sb2coJ0dvb2RCeWUnKQ=="
              }
            }
          }
        ]
      }
    ]
  }
]
```

CycloneDX does not attempt to normalize configurations into a common vocabulary. Systems and applications may have 
specialized ways of representing configurations that are specific to them. Rather, CycloneDX leverages existing support for
name/value pairs (properties), attachments, and URLs to external resources. With this approach, common and specialized
configuration mechanisms are supported. Consumers of BOMs with data components will need to understand the context and
semantics of the data specified.

<div style="page-break-after: always; visibility: hidden">
\newpage
</div>
