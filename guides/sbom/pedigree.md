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
    content: Linking
    url: '../linking'
  next:
    content: Formulation
    url: '../formulation'
---

## Pedigree
CycloneDX can represent component pedigree including ancestors, descendants, and variants which describe component 
lineage from any viewpoint and the commits, patches, and diffs which make it unique. The addition of a digital signature 
applied to a component with detailed pedigree information serves as affirmation to the accuracy of the pedigree.


| **Pedigree** | **Description**                                                                                                                                                                                                                                                                    |
|--------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| ancestors    | Describes zero or more components from which a component is derived. This is commonly used to describe forks from existing projects where the forked version contains a ancestor node containing the original component it was forked from.                                     |
| descendants  | Descendants are the exact opposite of ancestors. This provides a way to document all forks (and their forks) of an original or root component.                                                                                                                                     |
| variants     | Variants describe relations where the relationship between the components are not known. For example, if Component A contains nearly identical code to Component B. They are both related, but it is unclear if one is derived from the other, or if they share a common ancestor. |

The following example illustrates two important aspects of pedigree, namely identity and provenance.

```json
"components": [
{
    "type": "library", 
    "group": "com.example",
    "name": "log4j-core",
    "version": "2.14.0",
    "purl": "pkg:maven/com.example/log4j-core@2.14.0?repository_url=registry.example.com",
    "pedigree": {
      "ancestors": [
        {
          "type": "library",
          "group": "org.apache.logging.log4j",
          "name": "log4j-core",
          "version": "2.14.0",
          "purl": "pkg:maven/org.apache.logging.log4j/log4j-core@2.14.0"
        }
      ]
    }
  }
]
```

The example above illustrates two important aspects of pedigree:
1. log4j-core from the Apache LOG4J 2™ project was modified. The modified version has an identity that is unique from its upstream source. Both the modified and original components are represented in the pedigree relationship.
2. According to the Package URL (purl), the original component was obtained from Maven Central (the default for Maven artifacts) while the modified component resides in a repository controlled by example.com. The provenance of the artifacts are maintained.

The pedigree capabilities in CycloneDX go much further than establishing relationships; the specification can also 
optionally provide transparency into the changes that were made and their purpose. For example, the precise commits 
made to the version control system can be represented.

```json
"pedigree": {
  "ancestors": [ ... ],
  "commits": [
    {
      "uid": "7638417db6d59f3c431d3e1f261cc637155684cd",
      "url": "https://location/to/7638417db6d59f3c431d3e1f261cc637155684cd",
      "committer": {
        "timestamp": "2022-02-13T20:20:39+00:00",
        "name": "Astra Snyder",
        "email": "astra.snyder@example.com"
      },
      "message": "Fixes security issue"
    }
  ]
}
```

Maintaining accurate pedigree information is especially important with open source components whos source code is readily
available, modifiable, and redistributable. In the following example, a patch is described indicating that the purpose for
the modification was to backport a security fix. In addition, the diff can be attached or referenced via a URL so that
SBOM consumers can independently verify the validity and correctness of the patch.

```json
"pedigree": {
  "ancestors": [ ... ],
  "patches": [
    {
      "type": "backport",
      "diff": {
        "text": {
          "contentType": "text/plain",
          "encoding": "base64",
          "content": "ZXhhbXBsZSBkaWZmIGhlcmU="
        },
        "url": "https://example.com/path/to/changes.diff"
      },
      "resolves": [
        {
          "type": "security",
          "id": "CVE-2021-45105",
          "source": {
            "name": "NVD",
            "url": "https://nvd.nist.gov/vuln/detail/CVE-2021-45105"
          }
        }
      ]
    }
  ]
}
```

<div style="page-break-after: always; visibility: hidden">
\newpage
</div>
