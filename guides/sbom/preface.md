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
guide_url: /guides/sbom/OWASP_CycloneDX-SBOM-Guide-en.pdf

# Page navigation
page_nav:
  prev:
    content: Frontispiece
    url: '../frontispiece'
  next:
    content: Introduction
    url: '../introduction'
---

# Preface

Secure supply chains are the foundational building block of modern cyber security. Without being able to describe a system’s components in a machine-consumable way, organizations and software consumers are in the dark if they are at risk of exploitation of known defects or vulnerabilities.

Innovation drives the evolution of Software Bill of Materials (SBOM). I was lucky enough to attend one of the meetings held between the CycloneDX and SPDX teams at a Linux Foundation conference moderated by the fine folks at CISA. The drivers for CycloneDX 1.5 include improvements in interoperability and transparency.

Software authors, from hobbyists to software vendors, can quickly adopt CycloneDX in their tooling, producing artifacts that will help consumers understand and manage the risk of the multitude of software that most organizations rely on daily.

A few years ago, I was involved in a project to review 1700 business-critical applications in 90 days for known software vulnerabilities. If the organization had access to CycloneDX SBOMs, this would have been a trivial task, time that could have been more usefully spent on remediation rather than discovery. Sadly, most of the time was spent working out what software had old faulty components rather than addressing the very real risk of known software vulnerabilities. We were plagued with false positives from the tooling we used simply because scanning software without SBOMs is a heuristic-driven discovery process that is inefficient and wastes a great deal of time we didn’t have. SBOMs resolve these issues, reduce costs, and reduce risk to all involved.

I commend the CycloneDX team for a highly polished revision of their standard, one that evolves the state of the art.

---

Andrew van der Stock  
Executive Director, OWASP Foundation

<div style="page-break-after: always; visibility: hidden">
\newpage
</div>
