export const headLesson = {
  slug: 'head',
  number: '03',
  title: '<head>',
  category: 'Document Metadata & Root',
  subtitle: 'The machine-readable metadata container hosting document titles, scripts, stylesheets, and meta declarations',
  sections: [
    {
      id: 'overview',
      title: 'Overview & Semantic Meaning',
      type: 'text',
      badge: 'Metadata Container',
      paragraphs: [
        'The <head> element contains machine-readable information (metadata) about the document, like its title, scripts, stylesheets, and links to external resources.',
        'With the exception of the <title> tag (which appears in the browser tab) and embedded UI elements like favicons, none of the content placed directly inside the <head> element is visually displayed in the browser viewport.',
        'In the DOM tree, the <head> element must be the first child of the <html> element, appearing immediately prior to the <body> element.',
      ],
    },
    {
      id: 'syntax',
      title: 'Formal Syntax',
      type: 'syntax',
      syntax: '<head> ... metadata elements ... </head>',
      syntaxNote: 'Permitted child elements: <title>, <meta>, <link>, <style>, <script>, <noscript>, <base>, and <template>.',
    },
    {
      id: 'attributes',
      title: 'Allowed Metadata Child Elements',
      type: 'attributes-table',
      headers: ['Child Element', 'Quantity Allowed', 'Requirement', 'Primary Function'],
      rows: [
        ['<title>', 'Exactly 1', 'Mandatory', 'Defines the human-readable document title.'],
        ['<meta>', '0 or more', 'Recommended', 'Defines charset (UTF-8), viewport, SEO descriptions, and OG tags.'],
        ['<link>', '0 or more', 'Optional', 'Connects external stylesheets, preconnect links, and favicons.'],
        ['<style>', '0 or more', 'Optional', 'Inlines internal CSS declarations.'],
        ['<script>', '0 or more', 'Optional', 'Embeds or links JavaScript execution engines.'],
        ['<base>', '0 or 1', 'Optional', 'Configures global base URL for relative hyperlinks.'],
      ],
    },
    {
      id: 'code-example',
      title: 'Standard Production <head> Blueprint',
      type: 'code-example',
      codeTitle: 'Optimized HTML5 Head Configuration',
      code: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Acme Software Platform</title>
</head>
<body>
  <h1>Document Body Content</h1>
  <p>Notice that elements defined inside the &lt;head&gt; are parsed by the browser before this visible content displays.</p>
</body>
</html>`,
      demo: {
        title: 'Native Browser Output',
        html: `<h1>Document Body Content</h1>
<p>Notice that elements defined inside the &lt;head&gt; are parsed by the browser before this visible content displays.</p>`,
        interactive: false,
      },
    },
    {
      id: 'accessibility',
      title: 'Parsing Performance & Best Practices',
      type: 'list',
      items: [
        'Always place <meta charset="UTF-8"> within the first 1024 bytes of the document to prevent charset re-parsing penalties.',
        'Always place <title> before external stylesheets so that the browser tab title renders immediately while styles download in parallel.',
        'Use script defer or type="module" on scripts in <head> so the HTML document parser is not blocked waiting for scripts to download and execute.',
      ],
      callout: {
        type: 'tip',
        title: 'Ordering Rule for Optimal Speed',
        content: 'Recommended sequence: <meta charset> -> <meta viewport> -> <title> -> preconnect <link> -> stylesheets -> deferred <script>.',
      },
    },
  ],
};
