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
    content: Formulation
    url: '../formulation'
  next:
    content: Scenarios
    url: '../scenarios'
---

# Evidence
As we've seen, a BOM is crucial for understanding the composition of the software and its associated risks, including 
vulnerabilities and licensing obligations. CycloneDX can include evidence substantiating the declared identity of 
components within the BOM to ensure accuracy and integrity, prevent the inclusion of unauthorized components, and 
facilitate effective vulnerability management. CycloneDX includes other observations about the component inventory, such 
as multiple occurrences, call stack reachability, and evidence of licenses and copyrights, enhances the understanding of 
dependencies, potential risks, and compliance obligations, enabling organizations to manage security, quality, legal, 
and intellectual property concerns effectively.

## Component Identity
CycloneDX includes evidence substantiating the declared identity of components within the BOM. This is vital for 
communicating the quality and general trustworthiness of the BOMs' contents. Evidence helps establish the accuracy of the 
BOM by validating that the declared components match the actual software components used.

Component identity evidence is made up of the following elements:
![Identity Tree](../../../theme/assets/images/guides/SBOM/identity-tree.svg)

### Field
The identity field of the component which the evidence describes.

| Field   | Description                                                                                                                                                               |
|---------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| group   | The grouping name or identifier. This will often be a shortened, single name of the company or project that produced the component, or the source package or domain name. |
| name    | The name of the component. This will often be a shortened, single name of the component.                                                                                  |
| version | The component version                                                                                                                                                     |
| purl    | The Package URL (purl) specification                                                                                                                                      |
| cpe     | The Common Platform Enumeration (CPE) conforming to the CPE 2.2 or 2.3 specification                                                                                      |
| swid    | ISO-IEC 19770-2: Software Identification (SWID) Tags                                                                                                                      |
| hash    | The cryptographic hash of the component                                                                                                                                   |

<div style="page-break-after: always; visibility: hidden">
\newpage
</div>

### Methods
Multiple methods may be specified. Each method includes the specific technique used, the confidence of each technique, 
and the value of the evidence that the technique revealed. 

### Techniques
The technique used in this method of analysis.

| Technique            | Description                                                                                                                                 |
|----------------------|---------------------------------------------------------------------------------------------------------------------------------------------|
| source-code-analysis | Examines the source code without executing it                                                                                               |
| binary-analysis      | Examines a compiled binary through reverse engineering, typically via disassembly or bytecode reversal                                      |
| manifest-analysis    | Examines a package management system such as those used for building software or installing software                                        |
| ast-fingerprint      | Examines the Abstract Syntax Tree (AST) of source code or a compiled binary                                                                 |
| hash-comparison      | Evaluates the cryptographic hash of a component against a set of pre-computed hashes of identified software                                 |
| instrumentation      | Examines the call stack of running applications by intercepting and monitoring application logic without the need to modify the application |
| dynamic-analysis     | Evaluates a running application                                                                                                             |
| filename             | Evaluates file name of a component against a set of known file names of identified software                                                 |
| attestation          | A testimony to the accuracy of the identify of a component made by an individual or entity                                                  |
| other                | Any other technique                                                                                                                         |

<div style="page-break-after: always; visibility: hidden">
\emptyparagraph
</div>

### Confidence
Confidence is supported per-technique along with a cumulative of all methods used. The confidence is specified as a decimal, 
from 0 to 1, where 1 is 100% confidence.

### Tools
The tools (components or services) which extracted the evidence, performed the analysis, or evaluated the results.

<div style="page-break-after: always; visibility: hidden">
\newpage
</div>

### Example
```json
"identity": {
  "field": "purl",
  "confidence": 1,
  "methods": [
    {
      "technique": "filename",
      "confidence": 0.1,
      "value": "findbugs-project-3.0.0.jar"
    },
    {
      "technique": "hash-comparison",
      "confidence": 0.8,
      "value": "7c547a9d67cc7bc315c93b6e2ff8e4b6b41ae5be454ac249655ecb5ca2a85abf"
    }
  ]
}
```

## Recommendations
The following are recommendations for tool creators and BOM consumers. Each technique is a general category. Tools
may employ general purpose or highly specialized rules and analysis, each with varying degrees of confidence.

| Technique            | Confidence | Guidance |
|----------------------|------------|--|
| source-code-analysis | 0.3 - 1.0  | Confidence will vary based on rules, type of analyzers used, or 1:1 matching of source with a known good dataset. | 
| binary-analysis      | 0.2 - 0.7  | The individual rules, analyzers, and dataset coverage will influence confidence. |
| manifest-analysis    | 0.4 - 0.6  | Manifests have known limitations and abuse cases and have moderate confidence. |
| ast-fingerprint      | 0.3 - 1.0  | Wide range of possible confidence due to source and binary variations, but it has the potential for precise results.  |
| hash-comparison      | 0.7 - 1.0  | Can successfully match components given a large dataset. Confidence may vary based on the cryptographic hash function used and its resistance to collisions. |
| instrumentation      | 0.3 - 0.8 | Confidence similar to source-code-analysis with the added benefit of supporting call-stack evidence |
| dynamic-analysis     | 0.2 - 0.6 | Low to moderate confidence due to the "black box" approach of many tools. |
| filename             | 0 - 0.1    | Filename matching is low-confidence |
| attestation          | 0.7 - 1.0  | The testimony of a supplier or trusted third-party, especially when legally binding, may have high confidence. |

## Occurrences
CycloneDX provides a mechanism to describe identical components spread across multiple locations. For example,
a component may be used by a command-line tool and included as part of a user interface. As such, the component
may be installed in multiple locations on the filesystem. CycloneDX provides a way to represent this using evidence.

```json
"components": [
  {
    "type": "library",
    "name": "acme-persistence",
    "version": "1.0.0",
    "evidence": {
      "occurrences": [
        {
          "bom-ref": "d6bf237e-4e11-4713-9f62-56d18d5e2079",
          "location": "/path/to/component"
        },
        {
          "bom-ref": "b574d5d1-e3cf-4dcd-9ba5-f3507eb1b175",
          "location": "/another/path/to/component"
        }
      ]
    }
  }
]
```

## Reachability Using Call Stacks
Evidence of the components use through the call stack can be described using CycloneDX. This helps organizations 
understand the reachability and potential impact of a specific software component. By tracing the call stack, which 
describes how different components interact with each other, BOM producers and consumers have an elevated level of
confidence that a component or vulnerable function within a component is invoked or not.

```json
"callstack": {
  "frames": [
    {
      "package": "com.apache.logging.log4j.core",
      "module": "Logger.class",
      "function": "logMessage",
      "parameters": [
        "com.acme.HelloWorld", "Level.INFO", "null", "Hello World"
      ],
      "line": 150,
      "column": 17,
      "fullFilename": "/path/to/log4j-core-2.14.0.jar!/org/apache/logging/log4j/core/Logger.class"
    },
    {
      "module": "HelloWorld.class",
      "function": "main",
      "line": 20,
      "column": 12,
      "fullFilename": "/path/to/HelloWorld.class"
    }
  ]
}
```



## License and Copyright
CycloneDX incorporates SPDX license IDs and expressions to document stated licenses of open-source components and 
individual source files. Observed licenses and copyright statements are also fully supported in the form of evidence. 
In OpenChain terms, a CycloneDX BOM is classified as a compliance artifact.

Organizations seeking OpenChain conformance should review the specification and ensure all verification requirements are 
met, including fully documented processes for how the CycloneDX BOMs were created, distributed, and archived. 
The CycloneDX [BOM Repository Server](https://github.com/CycloneDX/cyclonedx-bom-repo-server) is a simple and effective
way to automate the publishing, versioning, and archiving of BOMs.

```json
"evidence": {
  "licenses": [
    {
      "license": {
        "id": "Apache-2.0",
        "url": "http://www.apache.org/licenses/LICENSE-2.0"
      }
    },
    {
      "license": {
        "id": "LGPL-2.1-only",
        "url": "https://opensource.org/licenses/LGPL-2.1"
      }
    }
  ],
  "copyright": [
    { "text": "Copyright 2012 Amce Inc. All Rights Reserved." },
    { "text": "Copyright (C) 2004,2005 Example Co" }
  ]
}
```

<div style="page-break-after: always; visibility: hidden">
\newpage
</div>