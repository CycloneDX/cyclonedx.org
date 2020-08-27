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

# Extension: BOM Descriptor

The CycloneDX BOM Descriptor extension provides the ability to add additional metadata about the system, asset, or 
application the BOM describes. When communicating SBOM contents to outside parties, it is important to be specific 
about what the BOM describes. The BOM Descriptor extension provides this capability.

| Version | Namespace |
| ------- | --------- |
| 1.0 | http://cyclonedx.org/schema/ext/bom-descriptor/1.0 |

<div class="callout callout--warning">
This schema extension is applicable to CycloneDX v1.1 only. It has been incorporated (with minor changes) into
CycloneDX v1.2 and higher.
</div>

### Example Usage

```xml
<?xml version="1.0"?>
<bom serialNumber="urn:uuid:3e671687-395b-41f5-a30f-a58921a69b79" version="1"
     xmlns="http://cyclonedx.org/schema/bom/1.1"
     xmlns:bd="http://cyclonedx.org/schema/ext/bom-descriptor/1.0">
  
    <components>
        <!-- Components here -->
    </components>
    <bd:metadata>
        <bd:timestamp>2020-05-30T09:00:00Z</bd:timestamp>
        <bd:tool>
            <bd:vendor>Some Tool Vendor</bd:vendor>
            <bd:name>Some BOM Creation Tool</bd:name>
            <bd:version>1.0</bd:version>
            <bd:hashes>
                <bd:hash alg="SHA-256">8B7DF143D91C716ECFA5FC1730022F6B421B05CEDEE8FD52B1FC65A96030AD52</bd:hash>
            </bd:hashes>
        </bd:tool>
        <bd:authors>
            <bd:author>
                <bd:name>Mike Peters</bd:name>
                <bd:email>mike.peters@example.com</bd:email>
            </bd:author>
        </bd:authors>
        <bd:component type="application">
            <publisher>Acme Inc</publisher>
            <group>com.example</group>
            <name>sample-application</name>
            <version>1.0.0</version>
            <licenses>
                <license>
                    <name>Acme Consumer License</name>
                </license>
            </licenses>
            <copyright>Copyright Acme Incorporated</copyright>
            <cpe>cpe:2.3:a:acme:sample_application:1.0:*:*:*:*:*:*:*</cpe>
        </bd:component>
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
