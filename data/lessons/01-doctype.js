export const doctypeLesson = {
  slug: 'doctype',
  number: '01',
  title: '<!DOCTYPE>',
  category: 'Document Metadata & Root',
  subtitle: 'The document type declaration informing web browsers to render in standard HTML5 mode',
  sections: [
    {
      id: 'overview',
      title: 'Overview & Semantic Purpose',
      type: 'text',
      badge: 'Specification',
      paragraphs: [
        'The <!DOCTYPE html> declaration is not an HTML tag; it is an instruction to the web browser about what version of HTML the page is written in.',
        'In HTML5, the DOCTYPE is radically simplified compared to earlier HTML 4.01 and XHTML 1.0 strict standards. It is required at the very top of every HTML document before the <html> tag.',
        'Its sole purpose in modern browsers is to trigger "standards mode", preventing the browser from falling back into "quirks mode", which mimics legacy bugs from 1990s Netscape Navigator and Internet Explorer.',
      ],
    },
    {
      id: 'syntax',
      title: 'Formal Syntax',
      type: 'syntax',
      syntax: '<!DOCTYPE html>',
      syntaxNote: 'Case-insensitive string: <!doctype html>, <!DOCTYPE HTML>, or <!DoCtYpE HtMl> are parsed identically according to WHATWG.',
      paragraphs: [
        'The declaration has no closing tag and cannot contain child elements. It must be the very first line of characters in the file, with no leading whitespace or comments preceding it.',
      ],
    },
    {
      id: 'attributes',
      title: 'Attributes & Properties',
      type: 'attributes-table',
      headers: ['Property', 'Value', 'Status', 'Description'],
      rows: [
        ['html', 'Literal keyword', 'Standard', 'Specifies standard HTML5 living standard mode.'],
        ['system_id', 'None', 'Obsolete', 'Historical DTD URLs are completely eliminated in HTML5.'],
        ['public_id', 'None', 'Obsolete', 'Public identifiers (like W3C DTD) are no longer required.'],
        ['Case sensitivity', 'Case-insensitive', 'Standard', 'Accepts any mix of uppercase or lowercase.'],
      ],
    },
    {
      id: 'code-example',
      title: 'Minimal Valid HTML5 Document',
      type: 'code-example',
      codeTitle: 'Standard HTML5 Document Skeleton',
      code: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>HTML5 Standards Mode Document</title>
</head>
<body>
  <h1>Standards Mode Active</h1>
  <p>The browser renders elements according to the modern CSS box model and HTML living standard specifications.</p>
</body>
</html>`,
      demo: {
        title: 'Native Browser Output',
        html: `<h1>Standards Mode Active</h1>
<p>The browser renders elements according to the modern CSS box model and HTML living standard specifications.</p>`,
        interactive: false,
      },
    },
    {
      id: 'accessibility',
      title: 'Accessibility & Quality Guidelines',
      type: 'list',
      items: [
        'Always include <!DOCTYPE html> to ensure assistive technologies and accessibility trees receive predictable DOM node dimensions.',
        'Always combine with <html lang="..."> immediately following the DOCTYPE so screen readers detect the language of the page.',
        'Never place comments, HTML tags, or empty lines before the DOCTYPE declaration to prevent Internet Explorer and old user agents from slipping into quirks mode.',
      ],
      callout: {
        type: 'important',
        title: 'Quirks Mode Hazard',
        content: 'Omitting <!DOCTYPE html> causes modern browsers to alter CSS box sizing formulas and table cell height computations to match 25-year-old bugs.',
      },
    },
  ],
};
