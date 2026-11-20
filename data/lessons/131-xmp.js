export const xmpLesson = {
  slug: 'xmp',
  number: '131',
  title: '<xmp>',
  category: 'Obsolete & Deprecated Reference',
  subtitle: 'Deprecated example formatted text container; obsolete in HTML5, replaced by <pre><code>',
  sections: [
    {
      id: 'overview',
      title: 'Historical Background & Deprecation',
      type: 'text',
      badge: 'Obsolete in HTML5',
      paragraphs: [
        'The <xmp> (Example) HTML element rendered text between the start and end tags without interpreting the HTML in between, displaying it in a monospace font.',
        'It was deprecated in HTML 3.2 and is obsolete in HTML5.',
        'The modern standard approach is to use `<pre><code>` with HTML character entities (`&lt;` and `&gt;`) for displaying raw code examples.',
      ],
    },
    {
      id: 'syntax',
      title: 'Obsolete Syntax & Modern Replacement',
      type: 'syntax',
      syntax: '<!-- Obsolete HTML 3.2 Tag -->\n<xmp><b>Uninterpreted HTML</b></xmp>\n\n<!-- Standard Modern HTML5 Replacement -->\n<pre><code>&lt;b&gt;Uninterpreted HTML&lt;/b&gt;</code></pre>',
      syntaxNote: 'Obsolete element. Fails modern HTML5 validator checks.',
    },
    {
      id: 'attributes',
      title: 'Attributes & Properties',
      type: 'attributes-table',
      headers: ['Attribute', 'Type', 'Status', 'Description'],
      rows: [
        ['Global attributes', 'Supported', 'Obsolete', 'Only global attributes applied.'],
      ],
    },
    {
      id: 'code-example',
      title: 'Modern Standard Code Listing',
      type: 'code-example',
      codeTitle: 'Standard Preformatted Code Block',
      code: `<!-- Modern standards-compliant code display -->
<pre><code>&lt;div class="card"&gt;
  &lt;p&gt;Properly escaped HTML code snippet.&lt;/p&gt;
&lt;/div&gt;</code></pre>`,
      demo: {
        title: 'Native Browser Output',
        html: `<pre><code>&lt;div class="card"&gt;
  &lt;p&gt;Properly escaped HTML code snippet.&lt;/p&gt;
&lt;/div&gt;</code></pre>`,
        interactive: false,
      },
    },
    {
      id: 'accessibility',
      title: 'Character Escaping Standard',
      type: 'list',
      items: [
        'Always escape < as &lt; and > as &gt; in modern HTML.',
        'Screen readers recognize <pre><code> as a computer code listing.',
      ],
      callout: {
        type: 'tip',
        title: 'Use <pre><code>',
        content: 'Combine `<pre>` (for whitespace preservation) with `<code>` (for semantic code designation) to replace `<xmp>`.',
      },
    },
  ],
};
