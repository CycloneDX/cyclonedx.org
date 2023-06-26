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
    content: Lifecycle Phases
    url: '../lifecycle_phases'
  next:
    content: BOM Coverage, Maturity, and Quality
    url: '../bom'
---

# Use Cases
CycloneDX provides a comprehensive inventory of all software components, libraries, frameworks, and dependencies in a 
particular software application or system. It provides a detailed breakdown of the software supply chain, enabling 
transparency and accountability in software development. The benefits of BOMs are far-reaching and apply to various 
software, systems, and devices across different domains. Let's explore the types of software, systems, and devices that 
can significantly benefit from the transparency provided by Bills of Materials.

1. **Operating Systems**:
Operating systems are the foundation for all software and devices, making them a critical component to benefit from software transparency. By having an SBOM for an operating system, developers, IT administrators, and end-users can understand the underlying software components, identify vulnerabilities, and apply patches when necessary. This allows them to make informed decisions regarding security, updates, and mitigating potential risks.

2. **Software Applications**:
From productivity tools to enterprise applications, software applications of all types can benefit from an SBOM. It helps developers and users understand the software's building blocks, including open-source libraries, commercial components, and all other third-party dependencies. With an SBOM, developers can track vulnerabilities, identify license obligations, and facilitate timely updates to ensure the security and stability of their applications.

3. **Internet of Things (IoT) Devices**:
IoT devices encompass a wide range of connected physical objects, such as smart home devices, industrial sensors, healthcare wearables, and more. Unfortunately, these devices often rely on software components that may introduce security risks. By implementing an SBOM, manufacturers and users can gain visibility into the software supply chain of IoT devices, identify vulnerabilities, and implement necessary security measures. This transparency can enhance the security and privacy of IoT ecosystems.

4. **Medical Devices**:
In the healthcare sector, medical devices play a crucial role in patient care and safety. Transparency in the software components used in medical devices is paramount to ensure their reliability and security. An SBOM can help manufacturers, regulatory authorities, and healthcare providers understand the software components, identify potential vulnerabilities or risks, and establish appropriate maintenance and update protocols. This can enhance patient safety and regulatory compliance.

5. **Automotive Systems**:
Modern vehicles heavily rely on software-driven systems for various functionalities, including infotainment, advanced driver assistance, and autonomous driving features. Transparency in the software components used in automotive systems is vital to ensure safety, security, and effective maintenance. An SBOM provides the transparency necessary to identify vulnerabilities, increase license compliance, and manage potential risks effectively.

6. **Critical Infrastructure**:
Software systems that underpin critical infrastructure, such as power grids, transportation networks, and financial systems, demand utmost transparency and security. An SBOM can offer visibility into the software components used in these systems, helping stakeholders assess vulnerabilities, apply security patches, and mitigate potential risks. This transparency contributes to the resilience, reliability, and stability of critical infrastructure.

<div style="page-break-after: always; visibility: hidden">
\newpage
</div>

In the context of national security and military operations, the transparency provided by Software Bill of Materials 
is of utmost importance. Let's explore the specific types of software, systems, and devices in the national security and 
military domain that greatly benefit from software transparency:

1. **Command and Control Systems**:
Command and control systems are crucial in military operations, facilitating real-time decision-making and coordination of forces. Transparency in the software components used in these systems allows military authorities to assess potential vulnerabilities and ensure the integrity and security of the systems. In addition, it enables the identification of potential backdoors, unauthorized access points, or malicious components, helping safeguard critical military operations and information.

2. **Cybersecurity and Information Assurance Tools**:
In the realm of national security, robust cybersecurity and information assurance tools are vital to protect against cyber threats and ensure secure communication and data management. Software transparency in these tools enables military authorities to evaluate the software supply chain, identify vulnerabilities, and ensure the use of trusted and up-to-date components. This enhances the resilience and effectiveness of cybersecurity measures and helps counter potential attacks or data breaches.

3. **Cryptographic Systems and Algorithms**:
Cryptographic systems and algorithms are critical in securing sensitive information, communications, and strategic operations. Transparency in the software components underpinning cryptographic systems allows military authorities to analyze the security properties of these components. In addition, it helps assess potential vulnerabilities, validate the use of approved cryptographic standards, and ensure the integrity of encryption algorithms employed in national security and military applications.

4. **Intelligence Analysis and Data Processing Software**:
Intelligence analysis and data processing software are vital in gathering, analyzing, and interpreting vast amounts of information for national security purposes. Software transparency in these software systems provides military intelligence agencies with insights into the underlying components and dependencies. It helps identify potential vulnerabilities that could compromise the accuracy, confidentiality, or integrity of intelligence data. This transparency assists in maintaining the security and reliability of intelligence operations.

5. **Unmanned Aerial Vehicles (UAVs) and Autonomous Systems**:
Unmanned Aerial Vehicles (UAVs) and autonomous systems are increasingly employed in national security and military operations. Transparency in the software components used in these systems enables military authorities to evaluate potential vulnerabilities and ensure the secure and reliable operation of UAVs. In addition, it helps identify potential risks associated with software-dependent functions, such as autonomous navigation, target acquisition, and mission execution, contributing to the overall effectiveness and safety of military operations.

6. **Communication and Encryption Devices**:
Secure and reliable communication is critical for national security and military operations. Software transparency in communication and encryption devices, such as radios, cryptographic hardware, and secure communication protocols, ensures the evaluation of software components involved. It helps identify vulnerabilities, ensure compliance with encryption standards, and protect against potential interception, tampering, or unauthorized access, strengthening the confidentiality and integrity of sensitive communications.

The transparency provided by a Software Bill of Materials is vital to national security, benefiting a range of software, 
systems, and devices. The software transparency capabilities of CycloneDX enables military authorities to assess 
vulnerabilities, identify risks, and enhance the security and effectiveness of these critical assets. This transparency 
contributes to the protection of national security interests and the successful execution of military operations.

Let's explore some specific use cases that CycloneDX BOMs unlock.


## Inventory
A complete and accurate inventory of all first-party and third-party components is essential for risk identification. 
BOMs should ideally contain all direct and transitive components and the dependency relationships between them.

CycloneDX is capable of describing the following types of components:

| **Type**               | **Class** | **Description**                                                                                                                                                                                                                                                                                                 |
|------------------------|-----------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Application            | Component | A software application                                                                                                                                                                                                                                                                                          |
| Container              | Component | A packaging and/or runtime format, not specific to any particular technology, which isolates software inside the container from software outside of a container through virtualization technology.                                                                                                              |
| Data                   | Component | A collection of discrete values that convey information.                                                                                                                                                                                                                                                        |
| Device                 | Component | A hardware device such as a processor, or chip-set. A hardware device containing firmware SHOULD include a component for the physical hardware itself, and another component of type 'firmware' or 'operating-system' (whichever is relevant), describing information about the software running on the device. |
| Device Driver          | Component | A special type of software that operates or controls a particular type of device.                                                                                                                                                                                                                               |
| File                   | Component | A computer file.                                                                                                                                                                                                                                                                                                |
| Firmware               | Component | A special type of software that provides low-level control over a device's hardware.                                                                                                                                                                                                                             |
| Framework              | Component | A software framework                                                                                                                                                                                                                                                                                            |
| Library                | Component | A software library. Many third-party and open source reusable components are libraries. If the library also has key features of a framework, then it should be classified as a framework. If not, or is unknown, then specifying library is RECOMMENDED.                                                        |
| Machine Learning Model | Component | A model based on training data that can make predictions or decisions without being explicitly programmed to do so.                                                                                                                                                                                             |
| Operating System       | Component | A software operating system without regard to deployment model (i.e. installed on physical hardware, virtual machine, image, etc)                                                                                                                                                                               |
| Platform               | Component | A runtime environment which interprets or executes software. This may include runtimes such as those that execute bytecode or low-code/no-code application platforms.                                                                                                                                           |
| Service                | Service   | A service including microservices, function-as-a-service, and other types of network or intra-process services.                                                                                                                                                                                                 |


> The component type is a required property for every component. It is an abstract concept to aid development and 
> security teams with separation of concerns. The types represent the highest level of abstraction in a modular 
> system or design. They also aid Software Asset Management (SAM) and IT Asset Management (ITAM) systems in classifying
> the inventory of software and constituent parts.


Component identity is an essential requirement for managing inventory. CycloneDX supports multiple methods of identity
including:

- Coordinates: The combination of the group, name, and version fields form the coordinates of a component.
- Package URL: [Package URL](https://github.com/package-url/purl-spec) (PURL) standardizes how software package metadata is represented so that packages can universally be identified and located regardless of what vendor, project, or ecosystem the packages belongs to. 
- SWID: Software ID (SWID) as defined in [ISO/IEC 19770-2:2015](https://www.iso.org/standard/65666.html) is used primarily to identify installed software.
- CPE: The [Common Platform Enumeration](https://nvd.nist.gov/products/cpe) (CPE) specification was designed for operating systems, applications, and hardware devices. CPE is maintained by the NVD.

Assertion of identity can also be substantiated in the form of evidence, which includes the methods and techniques used 
during analysis, the confidence, and the tool(s) that performed the analysis. Refer to the "Evidence" chapter for more
information.

The following example illustrates component identity in CycloneDX.

```json
"components": [
  {
    "type": "library",
    "group": "com.example",
    "name": "awesome-library",
    "version": "1.0.0",
    "cpe": "cpe:2.3:a:acme:awesome:1.0.0:*:*:*:*:*:*:*",
    "purl": "pkg:maven/com.example/awesome-library@1.0.0",
    "swid": {
      "tagId": "swidgen-242eb18a-503e-ca37-393b-cf156ef09691_1.0.0",
      "name": "Acme Awesome Library",
      "version": "1.0.0",
      "text": {
        "contentType": "text/xml",
        "encoding": "base64",
        "content": "U1dJRCBkb2N1bWVudCBkb2VzIGhlcmU="
      }
    }
  }
]
```

CycloneDX also supports several identifiers specific to hardware devices. Refer to https://cyclonedx.org/capabilities/hbom/
for more information.

<div style="page-break-after: always; visibility: hidden">
\newpage
</div>

## Vulnerability Management
CycloneDX is ideal for vulnerability management and impact analysis through the support of comprehensive inventory and
assertions of component identity. With this information, security teams can identify which components are affected
by known vulnerabilities, estimate effort, and quickly prioritize remediation.

By leveraging CycloneDX in this way, organizations can enhance their software supply chain security and reduce the
risks associated with software vulnerabilities.

> Identifying known vulnerabilities in components can be achieved through the use of three fields: `cpe`, `purl`, and
`swid`. Not all fields apply to all types of components. Components with a cpe, purl, or swid defined can be analyzed
for known vulnerabilities.

There are many tools and platforms that support vulnerability management use cases using CycloneDX, including [OWASP
Dependency-Track](https://dependencytrack.org/), often cited as a reference implementation for consuming and 
analyzing SBOMs. Using a platform such as Dependency-Track, organizations can quickly identify what is affected and
where in their environment they are affected.

> Not all sources of vulnerability intelligence support all three fields. The use of multiple sources may be required to 
> obtain accurate and actionable results.

## Enterprise Configuration Management Database (CMDB)
A Configuration Management Database (CMDB) is a repository that stores information about an organization's assets, 
including hardware, software, and other components. Tracking assets in a CMDB involves collecting and maintaining 
accurate information about each asset's configuration, location, status, and relationships with other assets. This 
information helps organizations manage their assets more effectively, including monitoring their performance, 
identifying potential risks, and supporting incident management.

Software Asset Management (SAM) and IT Asset Management (ITAM) are typical applications that build upon CMDBs.
There are tremendous benefits in capturing BOMs for assets tracked in a CMDB. Organizations gain a more comprehensive 
view of their assets, which can help them make more informed decisions about managing their IT and OT infrastructure. 
They also benefit from having the broadest array of possible use cases, including DevOps, vendor risk management, 
procurement, vulnerability response, and supply chain management.

CycloneDX complements and meets the requirements of [ISO/IEC 19770-1:2017](https://www.iso.org/standard/68531.html)
which defines IT asset management systems, including license management, security management, and asset lifecycles, making
it uniquely applicable for enterprise adoption.

## Integrity Verification
Integrity verification is the process of ensuring that the software components have not been modified or tampered with 
since they were released. This helps to identify unauthorized modifications to software components that may introduce 
security vulnerabilities or cause the software to malfunction. Integrity verification uses a cryptographic hash function 
that is used to generate a unique digital fingerprint, or hash value, for each software component. The hash value can then 
be compared with the expected hash value for that component to ensure that it has not been altered.

CycloneDX can be used for integrity verification using cryptographic hashing algorithms. The specification allows for the 
inclusion of cryptographic hashes, such as SHA-256, SHA-384, or SHA-512, for each software component listed in the BOM. 
By calculating the hash of each file, package, or library and comparing it with the hash value listed in the BOM, 
organizations can verify the integrity of the software and detect unauthorized modifications. 

The following example illustrates how to represent hashes on a component.

```json
"components": [
    {
      "type": "library",
      "name": "acme-example",
      "version": "1.0.0",
      "hashes": [{
        "alg": "SHA-256",
        "content": "d88bc4e70bfb34d18b5542136639acbb26a8ae2429aa1e47489332fb389cc964"
      },{
        "alg": "BLAKE3",
        "content": "26cdc7fb3fd65fc3b621a4ef70bc7d2489d5c19e70c76cf7ec20e538df0047cf"
      }]
    }
  ]
}
```

In addition, external references (covered later in the "Relationships" chapter) also support hashes. The following 
example illustrates how CycloneDX can refer to an external BOM and include the hashes for that BOM. In doing so, the
integrity of the external BOM can be evaluated prior to use.

```json
"components": [
  {
    "type": "library",
    "group": "com.example",
    "name": "persistence",
    "version": "5.2.0",
    "externalReferences": [
      {
        "type": "bom",
        "url": "https://example.com/sbom.json",
        "hashes": [
          {
            "alg": "SHA-256",
            "content": "9048a24d72d3d4a1a0384f8f925566b44f133dd2a0194111a2daeb1cf9f7015b"
          }
        ]
      }
    ]
  }
]
```

CycloneDX supports SHA-1, SHA-2, and SHA-3 hashing algorithms along with BLAKE2b and BLAKE3.

By leveraging CycloneDX for integrity verification, organizations can enhance the security and reliability of their 
software applications and systems.

## Authenticity
Authenticity refers to the assurance that a component, or the BOM itself, came from the expected source and has not been 
tampered with. Authenticity can be verified through the use of digital signatures and code-signing certificates, which are 
issued by trusted certificate authorities. These signatures allow users to verify the supplier's identity and ensure that
the artifact has not been modified since it was signed.

When a BOM is signed, the authenticity and integrity of the BOM can be verified. This verification can ensure that the 
data in the BOM has not been altered. Using signed BOMs increases trust and confidence in a software product, particularly 
in cases where the product is used in sensitive or critical applications.

CycloneDX supports enveloped signing, including XML Signature (xmlsig) and JSON Signature Format (JSF). In addition, 
detached signatures are also supported.

The following example illustrates the use of enveloped signing using JSF.

```json
"signature": {
  "algorithm": "RS512",
  "publicKey": {
    "kty": "RSA",
    "n": "qOSWbDOGS31lv3aUZVOgqZyLVrKXXRfmxFQxEylc...",
    "e": "AQAB"
  },
  "value": "HGIX_ccdIcqmaOpkxDzKH_j0ozSHUAUyBxGpXS..."
}
```

## License Compliance
CycloneDX can be used for open-source and commercial license compliance. By leveraging the licensing capabilities of
CycloneDX, organizations can identify any licenses that may be incompatible or require specific compliance obligations, 
such as attribution or sharing of source code. 

### Open Source Licensing
The following is an example of a components license. CycloneDX communicates this information using the SPDX license IDs 
along with optionally including a Base64 encoded representation of the full license text.

```json
"licenses": [
  {
    "license": {
      "id": "Apache-2.0",
      "text": {
        "contentType": "text/plain",
        "encoding": "base64",
        "content": "RW5jb2RlZCBsaWNlbnNlIHRleHQgZ29lcyBoZXJlLg=="
      },
      "url": "https://www.apache.org/licenses/LICENSE-2.0.txt"
    }
  }
]
```

SPDX license expressions are also fully supported.

```json
"licenses": [
  {
    "expression": "(LGPL-2.1 OR BSD-3-Clause AND MIT)"
  }
]
```

In addition to asserting the license(s) of a component, CycloneDX also supports evidence of other licenses and copyrights
found in a given component. For example:

```json
"evidence": {
  "licenses": [
    { "license": { "id": "Apache-2.0" } },
    { "license": { "id": "LGPL-2.1-only" } }
  ],
  "copyright": [
    { "text": "Copyright 2012 Acme Inc. All Rights Reserved." },
    { "text": "Copyright (C) 2004,2005 University of Example" }
  ]
}
```
Refer to the "Evidence" chapter for more information.

### Commercial Licensing
CycloneDX can also help organizations manage their commercial software licenses by providing a clear understanding of 
what licenses are in use and which ones require renewal or additional purchases, which may impact the operational aspects
of applications or systems. By leveraging CycloneDX for commercial license compliance, organizations can reduce the risks
associated with license violations, enhance their license management practices, and align their SBOM practice with
Software Asset Management (SAM) and IT Asset Management (ITAM) systems for enterprise visibility.

The following example illustrates a commercial license for a given component. 

```json
"licenses": [
  {
    "license": {
      "name": "Acme Commercial License",
      "licensing": {
        "licensor": {
          "organization": {
            "name": "Acme Inc",
          }
        },
        "licensee": {
          "organization": {
            "name": "Example Co."
          }
        },
        "purchaser": {
          "individual": {
            "name": "Samantha Wright",
            "email": "samantha.wright@gmail.com",
            "phone": "800-555-1212"
          }
        },
        "purchaseOrder": "PO-12345",
        "licenseTypes": [ "appliance" ],
        "lastRenewal": "2022-04-13T20:20:39+00:00",
        "expiration": "2023-04-13T20:20:39+00:00"
      }
    }
  }
]
```

All commercial license fields are optional. The licensor, licensee, and purchaser may be an organization or individual.
Multiple license types may be specified and include:

| **License Type** | **Description**                                                                                                                                                   |
|------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| academic         | A license that grants use of software solely for the purpose of education or research.                                                                            |
| appliance        | A license covering use of software embedded in a specific piece of hardware.                                                                                      |
| client-access    | A Client Access License (CAL) allows client computers to access services provided by server software.                                                             |
| concurrent-user  | A Concurrent User license (aka floating license) limits the number of licenses for a software application and licenses are shared among a larger number of users. |
| core-points      | A license where the core of a computer's processor is assigned a specific number of points.                                                                       |
| custom-metric    | A license for which consumption is measured by non-standard metrics.                                                                                              |
| device           | A license that covers a defined number of installations on computers and other types of devices.                                                                  |
| evaluation       | A license that grants permission to install and use software for trial purposes.                                                                                  |
| named-user       | A license that grants access to the software to one or more pre-defined users.                                                                                    |
| node-locked      | A license that grants access to the software on one or more pre-defined computers or devices.                                                                     |
| oem              | An Original Equipment Manufacturer license that is delivered with hardware, cannot be transferred to other hardware, and is valid for the life of the hardware.   |
| perpetual        | A license where the software is sold on a one-time basis and the licensee can use a copy of the software indefinitely.                                            |
| processor-points | A license where each installation consumes points per processor.                                                                                                  |
| subscription     | A license where the licensee pays a fee to use the software or service.                                                                                           |
| user             | A license that grants access to the software or service by a specified number of users.                                                                           |
| other            | Another license type.                                                                                                                                             |


Solutions supporting the Software Development Life Cycle (SDLC) typically involve open-source license compliance or 
intellectual property use cases. Whereas Software Asset Management (SAM) is primarily concerned with commercial license 
and procurement use cases. OWASP CycloneDX has extensive support for both and can be applied to any component or service
within a BOM.

## Outdated Component Analysis
Relying on outdated components can have a significant impact on the security, stability, and performance of the software. 
Outdated components may have known vulnerabilities that can be exploited by attackers, leading to data breaches or other
security issues. Additionally, newer versions of components may include bug fixes or performance improvements that can 
enhance the overall functionality of the software. 

Updating components is not a one-time task but a continuous process. New vulnerabilities and bugs are constantly being 
discovered, and the latest updates are being released to fix them. Thus, it is crucial to regularly check for updates and 
keep components up to date. Ignoring updates and running software with outdated components can lead to increased time to 
mitigate vulnerabilities should a previously unknown vulnerability become known.

Identifying end-of-life components can be challenging as the data may be difficult to obtain. However, some sources of
commercial vulnerability intelligence do provide this data, and also help identify up-to-date components that are
otherwise no longer supported.

## Provenance
Provenance refers to the history of the origin and ownership of a component. In the context of a software supply chain, 
provenance provides a way to trace the lineage of a component and ensure its authenticity is in alignment.

Provenance information can help software developers and users identify the source of a component, and helps to establish 
trust and accountability among different parties involved in the software supply chain, such as software vendors, 
distributors, and consumers.

By maintaining a record of provenance information throughout the software supply chain, organizations can improve their 
ability to detect and mitigate security risks, reduce the likelihood of supply chain attacks, and increase the overall 
reliability and quality of their software products.

Furthermore, regulatory compliance requirements (such as those related to data privacy, data protection, and intellectual 
property) often mandate the use of provenance tracking to ensure compliance with legal and ethical standards.

CycloneDX supports provenance via four distinct fields: `author`, `publisher`, `supplier`, and `manufacturer`. In addition,
components that are modified from the original can be described along with the complete authorship, including commits 
and the person or account that authored and committed the modifications.

## Pedigree
CycloneDX can represent component pedigree, including ancestors, descendants, and variants that describe component 
lineage from any viewpoint and the commits, patches, and diffs which make it unique. The addition of a digital signature
applied to a component with detailed pedigree information serves as an affirmation of the accuracy of the pedigree.

Maintaining accurate pedigree information is especially important with open-source components whose source code is readily
available, modifiable, and redistributable. Identifying changes to a component or a components coordinates along with 
information describing the original component, may be necessary for the analysis of various forms of risk.

Refer to the "Relationships" chapter for detailed information on pedigree.

## Foreign Ownership, Control, or Influence (FOCI)
Foreign Ownership, Control, or Influence (FOCI) is a critical concern in the software supply chain that should be taken 
seriously by all organizations involved. FOCI refers to the degree to which foreign entities have control or influence
over the operations or assets of companies in another government's jurisdiction. FOCI is a term specific to the U.S., but
many world governments have similar concepts.

Indicators that may be relevant in identifying FOCI concerns can be derived from several fields, including `author`, 
`publisher`, `manufacturer`, and `supplier` but can also be extended to other fields such as the components `group` name.
The CPE may also indicate the vendor and the PURL can identify a potentially foreign namespace or repository or download
URL for the package. Many external references may also provide a clue, especially those pointing to the version control
system (vcs) and commit history, issue tracker, distribution, and documentation websites.

Commercial sources of supply chain intelligence, including both physical and cyber, are available and can aid in 
identifying FOCI and other supply chain risk.

## Export Compliance
CycloneDX can help organizations achieve export compliance in the software supply chain by providing a comprehensive 
inventory of all software components used in a product, including their origin, version, and licensing. This information 
can enable organizations to identify potential export control issues, such as using components developed in foreign
countries or containing encryption technology, and take appropriate measures to ensure compliance.

## Procurement
Purchasing of software and IT assets can be enhanced with bill of materials. Model contract language that would require
BOMs for all new procurements and renewals of deployable software and any IT asset containing software should be considered.
Sourcing may then strategically favor vendors who provide BOMs or further negotiate costs with vendors that don't. 
Procurement processes can be enhanced to request BOMs from vendors, which may then be consumed by the procurement 
system and shared with enterprise Software Asset Management (SAM) or IT Asset Management (ITAM) systems. Automating BOM 
requests, retrieval, consumption, and sharing across systems should be considered for organizations on a quest for digital
transformation.

## Vendor Risk Management
A Vendor Risk Assessment (VRA) is a process used to identify and evaluate potential risks or hazards associated with a 
vendor's operations and products and their potential impact on an organization. VRA is part of an overall Vendor Risk
Management process. VRAs are often an integrated part of the procurement process for new vendors. VRAs may also be
triggered periodically for existing vendors. VRA processes can be enhanced through the use of BOMs. With BOMs, not only 
can the supplier of the software or asset can be evaluated, but every supplier of the constituent components that make 
up the software or asset can be evaluated. Additionally, the report from a VRA can be specified in CycloneDX using the
`risk-assessment` external reference type. The transparency that CycloneDX BOMs provide can result in more impactful 
assessments and significant risk reduction.

## Supply Chain Management
Supply chain management is a strategic discipline that encompasses the coordinated planning, implementation, and control
of the flow of goods, services, and information from the point of origin to the point of consumption. It involves a 
systematic approach to optimizing every aspect of the supply chain. 

Dr. W. Edwards Deming, a renowned quality management expert, emphasized the importance of collaboration, data-driven 
decision-making, and a relentless pursuit of excellence throughout the entire supply chain. Deming believed that by 
focusing on quality and process improvement, organizations can achieve higher levels of customer satisfaction and 
long-term success.

Deming's supply chain management strategy included using fewer and better suppliers, utilizing the best 
quality components from those suppliers, and tracking component usage across the entire supply chain. By focusing on 
fewer suppliers, organizations can reduce variability and drive efficiency. Deming emphasized the importance of selecting 
suppliers who consistently deliver top-quality components, which improves the overall quality of products or services.
Additionally, tracking component usage across the supply chain allows organizations to identify inefficiencies, optimize 
processes, and eliminate waste.

Supply chain management of physical goods shares several similarities with software supply chain management. Both 
disciplines involve sourcing, production, distribution, and inventory management to ensure the smooth flow of goods or 
software throughout the supply chain. Just as physical goods move from suppliers to manufacturers to end-users, software
components are sourced, developed, and integrated to create a final software product. While there are differences in the 
nature of the products being managed, the core principles of efficient sourcing, production, and distribution are 
applicable to physical goods and software.

CycloneDX BOMs play a crucial role in supply chain management as they enhance collaboration and enable effective 
supply chain management and governance of software components from sourcing to deployment.

## Composition Completeness and "Known Unknowns"
The inventory of components, services, and their relationships to one another can be described through the use of 
compositions. Compositions describe constituent parts (including components, services, and dependency relationships) and
their completeness. The completeness of vulnerabilities expressed in a BOM may also be described. This allows BOM authors
to describe how complete the BOM is or if there are components in the BOM where completeness is unknown.

| Aggregate                               | Description                                                                                                                                                                              |
|-----------------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| complete                                | The relationship is complete. No further relationships including constituent components, services, or dependencies are known to exist.                                                   |
| incomplete                              | The relationship is incomplete.                                                                                                                                                          |
| incomplete_first_party_only             | The relationship is incomplete. Only relationships for first-party components, services, or their dependencies are represented.                                                          |
| incomplete_first_party_proprietary_only | The relationship is incomplete. Only relationships for third-party components, services, or their dependencies are represented, limited specifically to those that are proprietary.      |
| incomplete_first_party_opensource_only  | The relationship is incomplete. Only relationships for third-party components, services, or their dependencies are represented, limited specifically to those that are opensource.       |
| incomplete_third_party_only             | The relationship is incomplete. Only relationships for third-party components, services, or their dependencies are represented.                                                          |
| incomplete_third_party_proprietary_only | The relationship is incomplete. Only relationships for third-party components, services, or their dependencies are represented, limited specifically to those that are proprietary.      |
| incomplete_third_party_opensource_only  | The relationship is incomplete. Only relationships for third-party components, services, or their dependencies are represented, limited specifically to those that are opensource.       |
| unknown                                 | The relationship may be complete or incomplete. This usually signifies a 'best-effort' to obtain constituent components, services, or dependencies but the completeness is inconclusive. |

## Formulation Assurance and Verification
CycloneDX can describe declared and observed formulations for reproducibility throughout the product lifecycle of components
and services. This advanced capability provides transparency into how components were made, how a model was trained, or
how a service was created or deployed. Generally, the formulation is externalized from the SBOM into a dedicated Manufacturing
Bill of Material (MBOM). The SBOM references the MBOM that describes the environment, configuration, tools, and
all other considerations necessary to replicate a build with utmost precision. This capability allows other parties to
independently verify inputs and outputs from a build which can increase the software's assurance.


<div style="page-break-after: always; visibility: hidden">
\newpage
</div>
