export const plaintextLesson = {
  slug: 'plaintext',
  number: '130',
  title: '<plaintext>',
  category: 'Obsolete & Deprecated Reference',
  subtitle: 'Deprecated raw plain text container from HTML 1.0; obsolete, replaced by <pre>',
  sections: [
    {
      id: 'overview',
      title: 'Historical Background & Deprecation',
      type: 'text',
      badge: 'Obsolete in HTML5',
      paragraphs: [
        'The <plaintext> HTML element was introduced in the earliest drafts of HTML (HTML 1.0) to render everything that followed as raw, unformatted text.',
        'Notoriously, `<plaintext>` had no closing tag — once the browser encountered `<plaintext>`, it stopped parsing HTML markup entirely for the rest of the document, rendering even subsequent tags like `</html>` as plain text.',
        'It was deprecated in HTML 2.0 and is completely obsolete in modern standards. It has been replaced by the `<pre>` and `<code>` elements.',
      ],
    },
    {
      id: 'syntax',
      title: 'Obsolete Syntax & Modern Replacement',
      type: 'syntax',
      syntax: '<!-- Obsolete HTML 1.0 Tag (Stops all HTML parsing) -->\n<plaintext>\nEverything after this point is raw text!\n\n<!-- Standard Modern HTML5 Replacement -->\n<pre><code>Preformatted text with preserved whitespace.</code></pre>',
      syntaxNote: 'Obsolete element. Do not use in modern documents.',
    },
    {
      id: 'attributes',
      title: 'Attributes & Properties',
      type: 'attributes-table',
      headers: ['Attribute', 'Type', 'Status', 'Description'],
      rows: [
        ['Global attributes', 'Ignored', 'Obsolete', 'No attributes supported.'],
      ],
    },
    {
      id: 'code-example',
      title: 'Modern Standard <pre> Replacement',
      type: 'code-example',
      codeTitle: 'Standard Preformatted Text Block',
      code: `<!-- Modern preformatted text block -->
<pre>
  Line 1: Whitespace is preserved.
  Line 2: Indentation is respected.
  Line 3: Closed cleanly with &lt;/pre&gt;.
</pre>`,
      demo: {
        title: 'Native Browser Output',
        html: `<pre>
  Line 1: Whitespace is preserved.
  Line 2: Indentation is respected.
  Line 3: Closed cleanly with &lt;/pre&gt;.
</pre>`,
        interactive: false,
      },
    },
    {
      id: 'accessibility',
      title: 'HTML Parser Architecture',
      type: 'list',
      items: [
        'Modern HTML parsers must support a special parser mode for <plaintext> solely to handle ancient archive web pages.',
        'Never write <plaintext> in modern HTML documents; it prevents the browser from closing the document structure.',
      ],
      callout: {
        type: 'warning',
        title: 'Dangerous Tag',
        content: '`<plaintext>` cannot be closed by `</plaintext>`. Once opened, the browser treats all remaining document markup as raw plain text.',
      },
    },
  ],
};
