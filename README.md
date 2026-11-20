# HTML5 Complete Reference & Educational Platform

> **A simple, clean reference covering every HTML tag, its attributes, accessibility rules, and real browser output.**

[![Next.js](https://img.shields.io/badge/Next.js-16.4-black?style=flat&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.3-blue?style=flat&logo=react)](https://react.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-38bdf8?style=flat&logo=tailwindcss)](https://tailwindcss.com/)
[![HTML5 Standard](https://img.shields.io/badge/WHATWG-100%25%20Living%20Standard-E34F26?style=flat&logo=html5)](https://html.spec.whatwg.org/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

---

## Overview

A modern, distraction-free educational documentation platform covering **every HTML element, global attribute, and character entity** in existence. 

Unlike conventional tutorials that inject heavy CSS frameworks, resets, or artificial card styling into examples, this platform demonstrates **authentic native browser HTML rendering** using the browser's default User-Agent stylesheet.

---

## Key Features

- **100% WHATWG & W3C Tag Coverage (134 Elements):** Every single standard, interactive, and historical tag documented with syntax, attributes, code blocks, accessibility roles, and native previews.
- **Pure Native HTML Demonstrations:** Embedded live previews run in isolated sandboxed viewports with **zero injected author CSS, zero Tailwind, and zero resets** so learners see how browsers actually render HTML out of the box.
- **Global Attributes Master Reference (`/attributes`):** Comprehensive guide to all 26 attributes valid on every HTML tag (`id`, `class`, `hidden`, `contenteditable`, `popover`, `inert`, `dir`, etc.) with interactive demos.
- **Character Entities Dictionary (`/entities`):** Searchable reference of 130 named entities, currency signs, math operators, Greek letters, and fractions with one-click copy.
- **Interactive HTML Playground (`/playground`):** Live code sandbox with pre-built templates, tab indentation, export/download, and Full vs. Mobile (375px) viewports.
- **WAI-ARIA Accessibility Mappings:** Screen reader considerations, implicit ARIA roles, and keyboard navigation rules for every element.
- **Independent 3-Column Layout:** Sticky header, fixed categorized sidebar with pinned search, reading canvas with smooth scrolling, and an independent "On this page" table of contents.
- **Social OpenGraph Previews:** Dynamic 1200×630 OG image generation for root and all 134 topic pages.
- **Multi-Layer Defensive Security:** Strict Content Security Policy (`script-src 'none'`), sandboxed opaque `null` origins, and HTTP security headers (`nosniff`, `SAMEORIGIN`).
- **Strict Zero-TypeScript Architecture:** Built entirely in modern, standard JavaScript (`.js`, `.jsx`).

---

## HTML Tag Categories (134 Total)

1. **Document Metadata & Root (9 tags):** `<!DOCTYPE>`, `<html>`, `<head>`, `<title>`, `<meta>`, `<link>`, `<style>`, `<base>`, `<body>`
2. **Sectioning & Landmarks (11 tags):** `<header>`, `<nav>`, `<main>`, `<article>`, `<section>`, `<aside>`, `<footer>`, `<h1>`–`<h6>`, `<hgroup>`, `<address>`, `<search>`
3. **Text Content & Grouping (13 tags):** `<p>`, `<hr>`, `<pre>`, `<blockquote>`, `<ol>`, `<ul>`, `<li>`, `<dl>`, `<dt>`, `<dd>`, `<figure>`, `<figcaption>`, `<div>`
4. **Inline Text Semantics (30 tags):** `<a>`, `<em>`, `<strong>`, `<small>`, `<s>`, `<cite>`, `<q>`, `<dfn>`, `<abbr>`, `<code>`, `<var>`, `<samp>`, `<kbd>`, `<sub>`, `<sup>`, `<i>`, `<b>`, `<u>`, `<mark>`, `<span>`, `<br>`, `<wbr>`, `<data>`, `<time>`, `<bdi>`, `<bdo>`, `<ruby>`, `<rt>`, `<rp>`, `<rb>`
5. **Images & Multimedia (14 tags):** `<img>`, `<picture>`, `<source>`, `<video>`, `<audio>`, `<track>`, `<map>`, `<area>`, `<iframe>`, `<embed>`, `<object>`, `<svg>`, `<math>`, `<canvas>`
6. **Tables & Tabular Data (10 tags):** `<table>`, `<caption>`, `<colgroup>`, `<col>`, `<thead>`, `<tbody>`, `<tfoot>`, `<tr>`, `<th>`, `<td>`
7. **Forms & Input Controls (14 tags + 22 Input Types):** `<form>`, `<label>`, `<input>`, `<button>`, `<select>`, `<datalist>`, `<optgroup>`, `<option>`, `<textarea>`, `<output>`, `<progress>`, `<meter>`, `<fieldset>`, `<legend>`
8. **Interactive & Web Components (6 tags):** `<details>`, `<summary>`, `<dialog>`, `<menu>`, `<template>`, `<slot>`
9. **Edits & Scripting (4 tags):** `<del>`, `<ins>`, `<script>`, `<noscript>`
10. **Obsolete & Deprecated (23 tags):** `<marquee>`, `<blink>`, `<center>`, `<font>`, `<big>`, `<strike>`, `<tt>`, `<acronym>`, `<applet>`, `<frame>`, `<frameset>`, `<noframes>`, `<dir>`, `<basefont>`, `<param>`, `<keygen>`, `<bgsound>`, `<nobr>`, `<plaintext>`, `<xmp>`, `<listing>`, `<isindex>`, `<rtc>`

---

## Tech Stack

- **Framework:** [Next.js 16](https://nextjs.org/) (App Router, Turbopack)
- **Library:** [React 19](https://react.dev/)
- **Styling:** [Tailwind CSS 3.4](https://tailwindcss.com/)
- **Syntax Highlighting:** [Shiki](https://shiki.style/) (`github-dark` theme)
- **Icons:** [Lucide React](https://lucide.dev/) + [Devicons](https://devicon.dev/)
- **Social Cards:** `@vercel/og` (`next/og` ImageResponse)

---

## Getting Started

### Prerequisites

- Node.js 18.17 or higher
- npm, yarn, or pnpm

### Installation

```bash
# Clone the repository
git clone https://github.com/<your-username>/html5-complete-reference.git

# Navigate into project directory
cd html5-complete-reference

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build

```bash
# Build optimized static and dynamic routes
npm run build

# Start production server
npm run start
```

---

## Project Structure

```
├── app/
│   ├── about/page.js              # About the platform
│   ├── attributes/page.js         # 26 Global attributes master guide
│   ├── entities/page.js           # 130 Character entities dictionary
│   ├── playground/page.js         # Interactive live HTML sandbox
│   ├── topics/page.js             # Categorized element index
│   ├── topics/[slug]/page.js      # Individual element lesson pages
│   ├── opengraph-image.js         # Dynamic social card generator (1200x630)
│   ├── twitter-image.js           # Twitter summary card
│   ├── robots.js                  # Dynamic robots.txt
│   ├── sitemap.js                 # Dynamic sitemap.xml for 145+ URLs
│   ├── layout.js                  # Root layout & social metadata
│   └── page.js                    # Home landing page
├── components/
│   ├── layout/                    # Header, Sidebar, Footer, DocShell, TOC
│   ├── learning/                  # LessonContent, HtmlDemoSandbox, CodeBlock
│   └── ui/                        # Logo, SearchModal, ThemeToggle
├── data/
│   ├── attributes.js              # Full WHATWG global attributes dataset
│   ├── entities.js                # HTML character entities dataset
│   ├── topics.js                  # Topic registry & category definitions
│   └── lessons/                   # 134 Individual tag lesson modules
└── public/
    ├── favicon.svg                # Official Devicon HTML5 SVG
    └── og.svg                     # Vector fallback social card
```

---

## Deployment to Vercel

1. Push your repository to GitHub.
2. Go to [Vercel](https://vercel.com/) and click **Add New Project**.
3. Import your GitHub repository.
4. Set the Environment Variable:
   - `NEXT_PUBLIC_SITE_URL` = `https://your-domain.vercel.app`
5. Click **Deploy**.

---

## Author & Attribution

Made with 🧡 by **Yaseen**  
- Portfolio: [iamyaseen.vercel.app](https://iamyaseen.vercel.app)

---

## License

This project is licensed under the MIT License — see the [LICENSE](LICENSE) file for details.
