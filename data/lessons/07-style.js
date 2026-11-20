export const styleLesson = {
  slug: 'style',
  number: '07',
  title: '<style>',
  category: 'Document Metadata & Root',
  subtitle: 'Declares internal CSS style rules scoped to the document or specific components',
  sections: [
    {
      id: 'overview',
      title: 'Overview & Semantic Meaning',
      type: 'text',
      badge: 'Style Block',
      paragraphs: [
        'The <style> HTML element contains style information for a document, or a part of a document. It contains CSS rules which are applied to the contents of the document containing the <style> element.',
        'In HTML5, the type="text/css" attribute is completely obsolete; modern browsers assume CSS by default.',
        'While large applications benefit from external stylesheets for cacheability, <style> tags are critical for inlining Above-The-Fold Critical CSS to achieve sub-second Core Web Vitals (Largest Contentful Paint).',
      ],
    },
    {
      id: 'syntax',
      title: 'Formal Syntax',
      type: 'syntax',
      syntax: '<style> selector { property: value; } </style>',
      syntaxNote: 'Normal element requiring both opening <style> and closing </style> tags.',
    },
    {
      id: 'attributes',
      title: 'Attributes Reference',
      type: 'attributes-table',
      headers: ['Attribute', 'Type', 'Default', 'Description'],
      rows: [
        ['media', 'Media Query', 'all', 'Specifies which media (screen, print, dark-mode) the style block applies to.'],
        ['nonce', 'Cryptographic Token', 'None', 'Content Security Policy (CSP) random nonce allowing inline execution.'],
        ['blocking', 'render', 'None', 'HTML Living Standard token indicating the element explicitly blocks rendering until parsed.'],
        ['type', 'MIME Type', 'text/css', 'Obsolete in HTML5. Do not include type="text/css".'],
      ],
    },
    {
      id: 'code-example',
      title: 'Document-Scoped Style Demonstration',
      type: 'code-example',
      codeTitle: 'Basic Internal CSS Rules',
      code: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Internal Style Example</title>
  <style>
    h1 {
      color: darkred;
    }
    p {
      line-height: 1.6;
    }
  </style>
</head>
<body>
  <h1>Styled Heading</h1>
  <p>This paragraph is styled by the internal &lt;style&gt; tag defined above.</p>
</body>
</html>`,
      demo: {
        title: 'Native Browser Output',
        html: `<style>
  h1 { color: darkred; }
  p { line-height: 1.6; }
</style>
<h1>Styled Heading</h1>
<p>This paragraph is styled by the internal &lt;style&gt; tag defined above.</p>`,
        interactive: false,
      },
    },
    {
      id: 'accessibility',
      title: 'Security & Best Practices',
      type: 'list',
      items: [
        'When using Content Security Policy (CSP), unsafe-inline is blocked by modern browsers unless paired with a nonce or SHA-256 hash.',
        'Avoid scattering multiple <style> tags throughout the <body>; centralize them in the <head> to avoid re-triggering browser layout passes.',
        'Never write text or HTML content outside of CSS rules inside the <style> block, as parsers will attempt to interpret it as CSS syntax.',
      ],
      callout: {
        type: 'warning',
        title: 'Security (CSP Nonce)',
        content: 'If your server sends strict CSP headers, inline styles without a matching nonce attribute (e.g. <style nonce="rAnd0m...">) will be rejected by the browser.',
      },
    },
  ],
};
