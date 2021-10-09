---
# Page settings
layout: extension
keywords: application security, software security, software bill of material, SBOM, BOM, open source, supply chain, specification, spdx, license, package url, purl, cpe
comments: false
banner: false

# Hero section
title: News
window_title: News
description: 

# Micro navigation
micro_nav: true

# Page navigation

---

# News

<p>Subscribe with <a href="{{ site.baseurl }}/feed.xml">RSS</a> to keep up with the latest from the OWASP SBOM community.</p>

<div class="articles">
	{% for article in site.posts limit:100 %}
		<div class="article-item">
			<div class="title"><a href="{{ site.url }}{{ article.url }}">{{ article.title }}</a></div>
            <div class="subtitle">{{ article.subtitle }}</div>
			<div class="overview"><span class="date">{{ article.date | date: "%d %B %Y" }}</span>{% if article.location %} &#8211; {{ article.location }} {% endif %} &#8211;
			{{ article.excerpt | xml_escape }}
            </div>
		</div>
	{% endfor %}
</div>
