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
    content: External References
    url: '../external-references'
  next:
    content: Pedigree
    url: '../pedigree'
---

## Establishing Relationships With BOM-Link
With CycloneDX, it is possible to reference a component, service, or vulnerability inside a BOM from other systems or
other BOMs. This deep-linking capability is referred to as BOM-Link and is a
[formally registered URN](https://www.iana.org/assignments/urn-formal/cdx), governed by [IANA](https://www.iana.org),
and compliant with [RFC-8141](https://www.rfc-editor.org/rfc/rfc8141.html).

**Syntax**:
```ini
urn:cdx:serialNumber/version#bom-ref
```

**Examples**:
```ini
urn:cdx:f08a6ccd-4dce-4759-bd84-c626675d60a7/1
urn:cdx:f08a6ccd-4dce-4759-bd84-c626675d60a7/1#componentA
```

| Field        | Description                                                                       |
| ------------ | --------------------------------------------------------------------------------- |
| serialNumber | The unique serial number of the BOM. The serial number MUST conform to RFC-4122.  |
| version      | The version of the BOM. The default version is `1`.                               |
| bom-ref      | The unique identifier of the component, service, or vulnerability within the BOM. |

There are many use cases that BOM-Link supports. Two common scenarios are:
* Reference one BOM from another BOM
* Reference a specific component or service in one BOM from another BOM

### Linking to External BOMs
As mentioned earlier, external references point to resources outside the object they're associated with and may be 
external to the BOM, or may refer to resources within the BOM. External references can be applied to individual 
components, services, or to the BOM itself. For example, a component could specify an external reference pointing to the
BOM describing that component.

```json
"externalReferences": [
  {
    "type": "bom",
    "url": "urn:cdx:bdd819e6-ee8f-42d7-a4d0-166ff44d51e8/5",
    "comment": "Refers to version 5 of a specific BOM.",
    "hashes": [
      {
        "alg": "SHA-256",
        "content": "c7be1ed902fb8dd4d48997c6452f5d7e509fbcdbe2808b16bcf4edce4c07d14e"
      }
    ]
  }
]
```

There are many common use cases where referencing external BOMs is desirable. One common case involves a component in a 
BOM, where the supplier of the component has published their own BOM specific to that component. The BOM for the 
application may simply list the component and refer to that component's externalized BOM for details of the inventory 
specific to that component. This is especially useful for proprietary components where the inventory may not be easily 
obtainable.

The following illustration provides an example of such a scenario. In this case, the supplier of the Acme Application 
includes Components A-F, Component C includes an assembly of D and E, and components D, E, and F are included in the BOM 
for Acme Application. The BOMs for D, E, and F are external and provided by other suppliers. The supplier of the Acme 
Application can leverage the BOMs provided by those suppliers by utilizing external references. Consumers should ensure
they can resolve and process externally referencable BOMs when encountered.

<div style="page-break-after: always; visibility: hidden">
\emptyparagraph
</div>

![BOM Linking BOMs](../../../theme/assets/images/guides/SBOM/bom-linking-boms.svg)

<div style="page-break-after: always; visibility: hidden">
\emptyparagraph
</div>

The following example helps to illustrate what Component F may look like when represented in the BOM for Acme Application:

```json
"components": [
  {
    "bom-ref": "component-f",
    "type": "library",
    "name": "Component F",
    "version": "1.0.0",
    "externalReferences": [
      {
        "type": "bom",
        "url": "https://example.com/sbom/component-f-1.0.0.cdx.json",
        "hashes": [
          {
            "alg": "SHA-256",
            "content": "708f1f53b41f11f02d12a11b1a38d2905d47b099afc71a0f1124ef8582ec7313"
          }
        ]
      }
    ]
  }
]
```

Another common case involves individual BOMs, per layer, in a deployed stack. For example, a BOM may contain multiple 
components, each with external references to its own individual BOMs. A hardware component could link to the 
corresponding Hardware Bill of Material (HBOM), the operating system component could link to its corresponding SBOM, 
and an application component could do the same.

A third case involves a service defined in a BOM where the provider of the service has published a SaaSBOM containing 
the individual microservices that make up that consumer-facing service. They may also have published a corresponding 
SBOM defining the individual software components powering individual services.

### Linking to Objects Within The Same BOM
With BOM-Link, relationships can also be established between objects in the same BOM. For example, let's establish
a relationship where a component defines a threat model. In the example below, `acme-application` defines an external 
reference of type `threat-model` and uses BOM-Link to reference another component in the same BOM. The threat model
components scope is `excluded`, indicating that it's omitted from inventory. The `acme-threatmodel` component in this 
example is a data component but could easily have been a file component. Using a data component allows for the inclusion
of the threat model itself to be captured in the BOM. This approach may be ideal for audit use cases or for instances 
where access to external systems is prohibited, such as air-gapped environments.

```json
{
  "bomFormat": "CycloneDX",
  "specVersion": "1.5",
  "serialNumber": "urn:uuid:3e671687-395b-41f5-a30f-a58921a69b79",
  "version": 1,
  "components": [
    {
      "bom-ref": "acme-application",
      "type": "application",
      "name": "Acme Application",
      "version": "1.0.0",
      "externalReferences": [
        {
          "type": "threat-model",
          "url": "urn:cdx:3e671687-395b-41f5-a30f-a58921a69b79/1#acme-threatmodel"
        }
      ]
    },
    {
      "bom-ref": "acme-threatmodel",
      "type": "data",
      "name": "Acme Threat Model",
      "scope": "excluded",
      "data": [
        {
          "type": "other",
          "contents": {
            "attachment": {
              "encoding": "base64",
              "contentType": "application/pdf",
              "content": "VGhyZWF0IG1vZGVsIGdvZXMgaGVyZQ=="
            }
          }
        }
      ]
    }
  ]
}
```

Whether the goal is a separation of concerns or increased cost efficiency and quality, the modularity that CycloneDX
provides is immensely powerful.

### Linking External VEX to BOM Inventory
Vulnerability Exploitability eXchange (VEX) is a core capability of CycloneDX that can convey the exploitability of 
vulnerable components in the context of the product in which they're used. VEX information may be very dynamic and
subject to change, while the product's SBOM will typically remain static until such time that the inventory changes.
Therefore, it is recommended to decouple the VEX from the BOM. This allows VEX information to be updated without having 
to create and track additional BOMs.

In the following example, a vulnerability is identified in a component called Jackson Databind, and the VEX provides a
direct link to the precise component within a BOM.

```json
"vulnerabilities": [
  {
    "id": "CVE-2018-7489",
    "source": {
      "name": "NVD",
      "url": "https://nvd.nist.gov/vuln/detail/CVE-2019-9997"
    },
    "analysis": {
      "state": "not_affected",
      "justification": "code_not_reachable",
      "response": ["will_not_fix", "update"],
      "detail": "An optional explanation of why the application is not affected by the vulnerable component."
    },
    "affects": [
      {
        "ref": "urn:cdx:3e671687-395b-41f5-a30f-a58921a69b79/1#jackson-databind-2.8.0"
      }
    ]
  }
]
```

<div style="page-break-after: always; visibility: hidden">
\newpage
</div>
