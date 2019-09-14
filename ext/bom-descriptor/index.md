---
# Page settings
layout: extension
keywords: application security, software security, software bill of material, SBOM, BOM, open source, supply chain, specification, spdx, license, package url, purl, cpe
comments: false
banner: false

# Hero section
title: CycloneDX Extensions
window_title: CycloneDX Extension - BOM Descriptor
description: The CycloneDX BOM Descriptor extension provides the ability to add additional metadata about the system, asset, or application the BOM describes.

# Micro navigation
micro_nav: true

# Page navigation

---

## Extension: BOM Descriptor

The CycloneDX BOM Descriptor extension provides the ability to add additional metadata about the system, asset, or 
application the BOM describes. When communicating SBOM contents to outside parties, it is important to be specific 
about what the BOM describes. The BOM Descriptor extension provides this capability.

| Version | Namespace |
| ------- | --------- |
| 0.9 | http://cyclonedx.org/schema/ext/bom-descriptor/0.9 |

### Example Usage

```xml
<?xml version="1.0"?>
<bom serialNumber="urn:uuid:3e671687-395b-41f5-a30f-a58921a69b79" version="1"
     xmlns="http://cyclonedx.org/schema/bom/1.1"
     xmlns:bd="http://cyclonedx.org/schema/ext/bom-descriptor/0.9">
  
    <components>
        <!-- Components here -->
    </components>
    <bd:metadata>
        <bd:softwareName>Sample Application</bd:softwareName>
        <bd:softwareVersion>1.0</bd:softwareVersion>
        <bd:softwareEdition>Professional</bd:softwareEdition>
        <bd:hashes>
            <hash alg="SHA-1">75068c26abbed3ad3980685bae21d7202d288317</hash>
        </bd:hashes>
        <bd:licenses>
            <license>
                <name>Acme Consumer License</name>
            </license>
        </bd:licenses>
        <bd:copyright>Copyright Acme Incorporated</bd:copyright>
        <bd:cpe>cpe:2.3:a:acme:sample_application:1.0:*:*:*:*:*:*:*</bd:cpe>
        <bd:manufacture>
            <bd:name>Acme</bd:name>
            <bd:url>https://www.example.com/</bd:url>
            <bd:contact>
                <bd:name>Jane Wison</bd:name>
                <bd:email>jane.wilson@example.com</bd:email>
            </bd:contact>
        </bd:manufacture>
        <bd:supplier>
            <bd:name>Acme</bd:name>
            <bd:url>https://www.example.com/</bd:url>
            <bd:contact>
                <bd:name>Jane Wison</bd:name>
                <bd:email>jane.wilson@example.com</bd:email>
            </bd:contact>
        </bd:supplier>
    </bd:metadata>
</bom>
```
