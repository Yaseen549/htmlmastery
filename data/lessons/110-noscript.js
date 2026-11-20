export const noscriptLesson = {
  slug: 'noscript',
  number: '110',
  title: '<noscript>',
  category: 'Edits & Scripting',
  subtitle: 'Defines fallback HTML markup displayed when client-side scripting is disabled or unsupported',
  sections: [
    {
      id: 'overview',
      title: 'Overview & Semantic Meaning',
      type: 'text',
      badge: 'Script Fallback',
      paragraphs: [
        'The <noscript> HTML element defines a section of HTML to be inserted if a script type on the page is unsupported or if scripting is currently turned off in the browser.',
        'When JavaScript is enabled (the default state in standard web browsing), browsers completely ignore everything inside <noscript>.',
        'When JavaScript is disabled in browser privacy settings or when viewed by non-scripting crawlers, the contents of <noscript> are rendered in place.',
      ],
    },
    {
      id: 'syntax',
      title: 'Formal Syntax',
      type: 'syntax',
      syntax: '<noscript>\n  <div class="alert">\n    JavaScript is disabled in your browser. Some interactive features will not be available.\n  </div>\n</noscript>',
      syntaxNote: 'Normal element requiring opening and closing tags. Contains flow content when used in <body>.',
    },
    {
      id: 'attributes',
      title: 'Attributes & Properties',
      type: 'attributes-table',
      headers: ['Attribute', 'Type', 'Status', 'Description'],
      rows: [
        ['Global attributes', 'Supported', 'Standard', 'Supports class, id, title, lang, dir, etc.'],
      ],
    },
    {
      id: 'code-example',
      title: 'Fallback Notice for Script-Disabled Browsers',
      type: 'code-example',
      codeTitle: 'Noscript Warning Block',
      code: `<!-- When JavaScript is active, this block is completely hidden by the browser -->
<noscript>
  <div style="border: 2px solid #ef4444; padding: 12px; background: #fee2e2; color: #991b1b;">
    <strong>Notice:</strong> JavaScript is currently turned off in your browser settings. 
    Please enable JavaScript to use real-time interactive calculations.
  </div>
</noscript>

<p>
  <em>In standard modern browsers with JavaScript enabled, the &lt;noscript&gt; block above is completely hidden.</em>
</p>`,
      demo: {
        title: 'Native Browser Output',
        html: `<noscript>
  <div style="border: 2px solid #ef4444; padding: 12px; background: #fee2e2; color: #991b1b;">
    <strong>Notice:</strong> JavaScript is currently turned off in your browser settings. 
    Please enable JavaScript to use real-time interactive calculations.
  </div>
</noscript>
<p>
  <em>In standard modern browsers with JavaScript enabled, the &lt;noscript&gt; block above is completely hidden.</em>
</p>`,
        interactive: false,
      },
    },
    {
      id: 'accessibility',
      title: 'Head and Body Placement Rules',
      type: 'list',
      items: [
        'When used in <head>, <noscript> can only contain <link>, <style>, and <meta> elements.',
        'When used in <body>, <noscript> can contain any standard flow content.',
      ],
      callout: {
        type: 'note',
        title: 'Search Engine Indexing',
        content: 'Search engines that do not execute complex JavaScript rely on `<noscript>` to discover critical baseline content or alternative links.',
      },
    },
  ],
};
