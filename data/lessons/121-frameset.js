export const framesetLesson = {
  slug: 'frameset',
  number: '121',
  title: '<frameset>',
  category: 'Obsolete & Deprecated Reference',
  subtitle: 'Deprecated multi-window frame grid; obsolete in HTML5, replaced with CSS Grid / Flexbox',
  sections: [
    {
      id: 'overview',
      title: 'Historical Background & Deprecation',
      type: 'text',
      badge: 'Obsolete in HTML5',
      paragraphs: [
        'The <frameset> HTML element was used to contain <frame> elements in place of the standard <body> element in HTML 4.',
        'It divided the browser window into a grid of independent rows and columns, each loading a completely separate HTML file.',
        'It is completely obsolete in HTML5. Modern layouts use CSS Grid, Flexbox, and responsive media queries.',
      ],
    },
    {
      id: 'syntax',
      title: 'Obsolete Syntax & Modern Replacement',
      type: 'syntax',
      syntax: '<!-- Obsolete HTML 4 Frameset Document (No <body>) -->\n<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Frameset//EN">\n<html>\n  <head><title>Frameset</title></head>\n  <frameset rows="20%,80%">\n    <frame src="header.html">\n    <frame src="content.html">\n  </frameset>\n</html>',
      syntaxNote: 'Obsolete element. Illegal in HTML5 documents.',
    },
    {
      id: 'attributes',
      title: 'Obsolete Attributes Matrix',
      type: 'attributes-table',
      headers: ['Attribute', 'Historical Purpose', 'Status', 'Modern CSS Replacement'],
      rows: [
        ['cols', 'Comma-separated column widths', 'Obsolete', 'CSS grid-template-columns'],
        ['rows', 'Comma-separated row heights', 'Obsolete', 'CSS grid-template-rows'],
      ],
    },
    {
      id: 'code-example',
      title: 'Modern CSS Layout Equivalent',
      type: 'code-example',
      codeTitle: 'Modern Standard Layout Structure',
      code: `<!-- Modern HTML5 layout replacement using semantic tags -->
<div style="border: 1px solid #ccc; padding: 12px;">
  <header style="border-bottom: 1px solid #ddd; padding-bottom: 8px;">
    <strong>Site Header</strong> (Replaces top frame)
  </header>
  <main style="padding-top: 8px;">
    <p>Main content area (Replaces content frame) — built with standard HTML5 semantic elements.</p>
  </main>
</div>`,
      demo: {
        title: 'Native Browser Output',
        html: `<div style="border: 1px solid #ccc; padding: 12px;">
  <header style="border-bottom: 1px solid #ddd; padding-bottom: 8px;">
    <strong>Site Header</strong> (Replaces top frame)
  </header>
  <main style="padding-top: 8px;">
    <p>Main content area (Replaces content frame) — built with standard HTML5 semantic elements.</p>
  </main>
</div>`,
        interactive: false,
      },
    },
    {
      id: 'accessibility',
      title: 'Document Root Incompatibility',
      type: 'list',
      items: [
        'An HTML document containing <frameset> was not allowed to have a standard <body> element.',
        'This completely broke document semantics, CSS cascading, and assistive navigation.',
      ],
      callout: {
        type: 'warning',
        title: 'Obsolete Standard',
        content: 'HTML5 Living Standard does not recognize `<frameset>`. Modern browser parsers treat `<frameset>` inside a standard HTML5 document as invalid markup.',
      },
    },
  ],
};
