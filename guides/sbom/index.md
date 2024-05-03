---
# Page settings
layout: table-of-contents
keywords: application security, software security, software bill of material, SBOM, BOM, open source, supply chain, specification, spdx, license, package url, purl, cpe

# Hero section
title: Authoritative Guide to SBOM
window_title: OWASP CycloneDX Authoritative Guide to SBOM
description: Implement and Optimize use of Software Bill of Materials

# Micro navigation
micro_nav: false

# Guide
guide_url: /guides/sbom/OWASP_CycloneDX-SBOM-Guide-en.pdf

# Child pages
children:
  - name: Frontispiece
    url: ./frontispiece
  - name: Preface
    url: ./preface
  - name: Introduction
    url: ./introduction
    headings:
      - Design Philosophy and Guiding Principles
      - Defining Software Bill of Materials
      - The Role of SBOM in Software Transparency
      - High-Level SBOM Use Cases
      - xBOM Capabilities
  - name: CycloneDX Object Model
    url: ./object-model
    headings:
      - BOM Identity
      - The Anatomy of a CycloneDX BOM
      - Serialization Formats
  - name: Lifecycle Phases
    url: ./lifecycle_phases
  - name: Use Cases
    url: ./use_cases
    headings:
        - Inventory
        - Vulnerability Management
        - Enterprise Configuration Management Database (CMDB)
        - Integrity Verification
        - Authenticity
        - License Compliance
        - Outdated Component Analysis
        - Provenance
        - Pedigree
        - Foreign Ownership, Control, or Influence (FOCI)
        - Export Compliance
        - Procurement
        - Vendor Risk Management
        - Supply Chain Management
        - Composition Completeness and “Known Unknowns”
        - Formulation Assurance and Verification
  - name: BOM Coverage, Maturity, and Quality
    url: ./bom
    headings:
      - NTIA Minimum Elements
      - SCVS BOM Maturity Model
      - SBOM Quality
  - name: Generating CycloneDX BOMs
    url: ./generation
    headings:
        - Approaches to Generating CycloneDX SBOMs
        - Generating SBOMs for Source Files
        - Integrating CycloneDX Into The Build Process
        - Generating BOMs at Runtime
        - Generating BOMs from Evidence (from binaries)
        - Building CycloneDX BOMs Manually
  - name: Consuming CycloneDX BOMs
    url: ./consumption
  - name: Leveraging Data Components
    url: ./data_components
  - name: Establishing Relationships in CycloneDX
    url: ./relationships
    headings:
        - Component Assemblies
        - Service Assemblies
        - Dependencies
  - name: External References
    url: ./external-references
  - name: Establishing Relationships With BOM-Link
    url: ./linking
  - name: Pedigree
    url: ./pedigree
  - name: Formulation
    url: ./formulation
  - name: Evidence
    url: ./evidence
    headings:
        - Component Identity
        - Recommendations
        - Occurrences
        - Reachability Using Call Stacks
        - License and Copyright
  - name: Scenarios and Recommendations
    url: ./scenarios
    headings:
        - General Guidance
        - Microservice
        - Single Application (monolith, mobile app, etc)
        - Multi- Product Solution
        - Multi- Module Product
        - Using Modified Open Source Software
        - SBOM as Resource Locator
        - SBOM in Release Management
  - name: Extensibility
    url: ./extensibility
    headings:
        - CycloneDX Properties
        - CycloneDX Properties and Registered Namespaces
        - XML Extensions
  - name: "Appendix A: Glossary"
    url: ./glossary
  - name: "Appendix B: References"
    url: ./references
---

# Contents

