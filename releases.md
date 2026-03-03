---
layout: default
title: Releases
permalink: /releases/
---

# Releases

<ul class="release-list">
{%- for release in collections.releases -%}
  <li>
    <a href="{{ release.url }}" class="release-item">
      <img src="{{ release.data.artwork }}" alt="{{ release.data.title }}" class="release-artwork">
      <div class="release-info">
        <div class="release-title">{{ release.data.title }}</div>
        <div class="meta">{{ release.data.artist }}</div>
        <div class="meta">{{ release.date | date: "%B %Y" }}</div>
      </div>
    </a>
  </li>
{%- endfor -%}
</ul>
