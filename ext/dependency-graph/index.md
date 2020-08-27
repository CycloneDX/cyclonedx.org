---
# Page settings
layout: extension
keywords: application security, software security, software bill of material, SBOM, BOM, open source, supply chain, specification, spdx, license, package url, purl, cpe
comments: false
banner: false

# Hero section
title: CycloneDX Extensions
window_title: CycloneDX Extension - Dependency Graph (Tree)
description: The CycloneDX Dependency Graph extension provides the ability to optionally describe component dependencies 

# Micro navigation
micro_nav: true

# Page navigation

---

# Extension: Dependency Graph
The Dependency Graph extension provides the ability to describe components and their dependency on other components. 
This extension relies on a components `bom-ref` to associate the component to the dependency element in the graph. 
The only requirement for bom-ref is that it is unique within the BOM. The Package URL (PURL) is an ideal choice for 
bom-ref as it will be both unique and readable. If PURL is not an option or not all components represented in 
the BOM contain a PURL, then UUID is recommended.

| Version | Namespace |
| ------- | --------- |
| 1.0 | http://cyclonedx.org/schema/ext/dependency-graph/1.0 |

<div class="callout callout--warning">
This schema extension is applicable to CycloneDX v1.1 only. It has been incorporated (with minor changes) into
CycloneDX v1.2 and higher.
</div>

### Example Usage

```xml
<?xml version="1.0"?>
<bom serialNumber="urn:uuid:3e671687-395b-41f5-a30f-a58921a69b79" version="1"
     xmlns="http://cyclonedx.org/schema/bom/1.1"
     xmlns:dg="http://cyclonedx.org/schema/ext/dependency-graph/1.0">

    <components>
        <component type="framework" bom-ref="pkg:maven/org.example.acme/web-framework@1.0.0">
            <group>org.example.acme</group>
            <name>web-framework</name>
            <version>1.0.0</version>
            <purl>pkg:maven/org.example.acme/web-framework@1.0.0</purl>
        </component>
        <component type="library" bom-ref="pkg:maven/org.example.acme/persistence@3.1.0">
            <group>org.example.acme</group>
            <name>persistence</name>
            <version>3.1.0</version>
            <purl>pkg:maven/org.example.acme/persistence@3.1.0</purl>
        </component>
        <component type="library" bom-ref="pkg:maven/org.example.acme/common-util@3.0.0">
            <group>com.example.acme</group>
            <name>common-util</name>
            <version>3.0.0</version>
            <purl>pkg:maven/org.example.acme/common-util@3.0.0</purl>
        </component>
    </components>
    <dg:dependencies>
        <dg:dependency ref="pkg:maven/org.example.acme/web-framework@1.0.0">
            <dg:dependency ref="pkg:maven/org.example.acme/common-util@3.0.0"/>
        </dg:dependency>
        <dg:dependency ref="pkg:maven/org.example.acme/persistence@3.1.0">
            <dg:dependency ref="pkg:maven/org.example.acme/common-util@3.0.0"/>
        </dg:dependency>
        <dg:dependency ref="pkg:maven/org.example.acme/common-util@3.0.0"/>
    </dg:dependencies>
 </bom>
```

### Usage Notes

Components that do not have their own dependencies MUST be declared as empty
elements within the graph. Components that are not represented in the dependency graph MAY
have unknown dependencies. It is RECOMMENDED that implementations assume this to be opaque
and not an indicator of a component being dependency-free.
