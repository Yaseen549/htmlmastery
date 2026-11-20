# HTML5 Complete Catalog Specification

This rule file guarantees that every HTML5 element is cataloged, categorized, and covered without omission.

## Category 1: Document Metadata & Root (8 Elements)
- `<!DOCTYPE>`: Document type declaration (HTML5 standard `<!DOCTYPE html>`)
- `<html>`: Top-level root element
- `<head>`: Document metadata container
- `<title>`: Document title displayed in browser tab
- `<base>`: Base URL for all relative URLs in a document
- `<link>`: External resource relationship (stylesheets, favicons, preconnect)
- `<meta>`: Document metadata (charset, viewport, SEO, OpenGraph)
- `<style>`: Internal stylesheet declaration

## Category 2: Sectioning & Semantic Landmarks (11 Elements)
- `<header>`: Introductory content or navigational aid
- `<nav>`: Major navigation blocks
- `<main>`: Central dominant content of the document `<body>`
- `<article>`: Self-contained, independently distributable composition
- `<section>`: Generic standalone section of a document
- `<aside>`: Tangentially related side content (sidebar, callouts)
- `<footer>`: Footer for nearest sectioning content or root
- `<address>`: Contact information for author or organization
- `<h1>`-`<h6>`: Heading levels 1 through 6
- `<hgroup>`: Heading grouping element for subtitle/heading pairs
- `<search>`: Landmark for search or filter functionalities

## Category 3: Text Content & Grouping (13 Elements)
- `<p>`: Paragraph
- `<hr>`: Thematic break between paragraph-level elements
- `<pre>`: Preformatted text preserving whitespace
- `<blockquote>`: Quotation from another source
- `<ol>`: Ordered list (numbered)
- `<ul>`: Unordered list (bulleted)
- `<li>`: List item
- `<dl>`: Description list
- `<dt>`: Term or name in description list
- `<dd>`: Description, definition, or value
- `<figure>`: Self-contained content with optional caption
- `<figcaption>`: Caption for figure
- `<div>`: Generic flow content division container

## Category 4: Inline Text Semantics (30 Elements)
- `<a>`: Anchor / hyperlink
- `<em>`: Stress emphasis
- `<strong>`: Strong importance or urgency
- `<small>`: Side comments and small print (legal notices)
- `<s>`: Content no longer accurate or relevant
- `<cite>`: Title of a creative work
- `<q>`: Inline quotation
- `<dfn>`: Defining instance of a term
- `<abbr>`: Abbreviation or acronym
- `<code>`: Inline computer code
- `<var>`: Variable in mathematical expression or programming context
- `<samp>`: Inline sample output from a program
- `<kbd>`: User keystroke input
- `<sub>`: Subscript text
- `<sup>`: Superscript text
- `<i>`: Alternate voice or mood (technical terms, idiomatic phrases)
- `<b>`: Stylistically offset text without extra importance
- `<u>`: Unarticulated annotation (spelling errors, proper names)
- `<mark>`: Highlighted or marked text
- `<span>`: Generic inline phrasing container
- `<br>`: Line break
- `<wbr>`: Word break opportunity
- `<data>`: Machine-readable data translation
- `<time>`: Machine-readable date/time
- `<bdi>`: Bi-directional isolation
- `<bdo>`: Bi-directional override
- `<ruby>`: East Asian typographic ruby annotation
- `<rt>`: Ruby text component
- `<rp>`: Ruby parentheses fallback
- `<rb>`: Ruby base text

## Category 5: Multimedia & Embedded Elements (14 Elements)
- `<img>`: Image embedding
- `<picture>`: Responsive image container
- `<source>`: Media resource for picture, audio, or video
- `<video>`: Video playback engine
- `<audio>`: Audio playback engine
- `<track>`: Timed text subtitles/captions (WebVTT)
- `<iframe>`: Inline nested browsing context
- `<embed>`: External application or interactive plugin
- `<object>`: External resource representation
- `<param>`: Parameters for plugins inside object
- `<map>`: Client-side image map
- `<area>`: Hyperlinked area on an image map
- `<svg>`: Scalable vector graphics container
- `<math>`: MathML mathematical formulas container

## Category 6: Tables & Tabular Data (10 Elements)
- `<table>`: Tabular data grid
- `<caption>`: Table title or explanation
- `<colgroup>`: Column grouping specification
- `<col>`: Column properties definition
- `<thead>`: Table header row group
- `<tbody>`: Table body row group
- `<tfoot>`: Table footer row group
- `<tr>`: Table row
- `<th>`: Header cell
- `<td>`: Data cell

## Category 7: Forms & Input Controls (16 Elements + 22 Input Types)
- Elements: `<form>`, `<label>`, `<input>`, `<button>`, `<select>`, `<optgroup>`, `<option>`, `<datalist>`, `<textarea>`, `<fieldset>`, `<legend>`, `<output>`, `<progress>`, `<meter>`
- Input Types: `text`, `password`, `email`, `number`, `tel`, `url`, `search`, `date`, `time`, `datetime-local`, `month`, `week`, `range`, `color`, `checkbox`, `radio`, `file`, `hidden`, `submit`, `reset`, `button`, `image`

## Category 8: Interactive Elements & Web Components (7 Elements)
- `<details>`: Disclosure box
- `<summary>`: Summary heading for details disclosure
- `<dialog>`: Native dialog box or modal window
- `<menu>`: Semantic menu toolbar
- `<canvas>`: Scriptable 2D/3D graphics canvas
- `<template>`: Inert client-side HTML template
- `<slot>`: Web component shadow DOM placeholder

## Category 9: Edits & Scripting (4 Elements)
- `<ins>`: Inserted text demarcation
- `<del>`: Deleted text demarcation
- `<script>`: Executable script embedding
- `<noscript>`: Fallback content for disabled script execution

## Category 10: Deprecated / Obsolete Historical Reference (20+ Elements)
- `<marquee>`, `<blink>`, `<center>`, `<font>`, `<basefont>`, `<big>`, `<strike>`, `<tt>`, `<acronym>`, `<applet>`, `<frame>`, `<frameset>`, `<noframes>`, `<dir>`, `<isindex>`, `<listing>`, `<xmp>`, `<plaintext>`, `<bgsound>`, `<nobr>`, `<noembed>`, `<keygen>`
- Each with reason for deprecation and modern CSS/HTML replacements.
