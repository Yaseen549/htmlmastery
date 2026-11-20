export const titleLesson = {
  slug: 'title',
  number: '04',
  title: '<title>',
  category: 'Document Metadata & Root',
  subtitle: 'Specifies the human-readable document title shown in browser tabs, search results, and bookmarks',
  sections: [
    {
      id: 'overview',
      title: 'Overview & Semantic Meaning',
      type: 'text',
      badge: 'Document Title',
      paragraphs: [
        'The <title> HTML element defines the document title that is shown in a browser title bar or page tab. It must only contain plain text; tags within the element are ignored and treated as literal characters.',
        'The title is mandatory for all documents conforming to HTML standards. It is one of the most critical elements for search engine optimization (SEO) and web accessibility.',
      ],
    },
    {
      id: 'syntax',
      title: 'Formal Syntax',
      type: 'syntax',
      syntax: '<title>Descriptive Plain Text Title</title>',
      syntaxNote: 'Permitted parent: <head>. Only plain text is permitted inside (no child elements like <span> or <b>).',
    },
    {
      id: 'attributes',
      title: 'Properties & Technical Rules',
      type: 'attributes-table',
      headers: ['Property', 'Constraint', 'Impact', 'Recommendation'],
      rows: [
        ['Character length', '50 - 60 characters', 'Search Engines', 'Google truncates titles longer than 600px (~60 chars).'],
        ['Uniqueness', 'Page-unique', 'Navigation & SEO', 'Every page on a website should have a distinct, informative title.'],
        ['Structure', 'Page Title | Site Name', 'User clarity', 'Place specific page title first, followed by brand suffix.'],
        ['HTML entities', 'Supported', 'Encoding', 'Use &amp; for ampersands and &quot; for quotes.'],
      ],
    },
    {
      id: 'code-example',
      title: 'Standard Title Implementation',
      type: 'code-example',
      codeTitle: 'SEO & Accessible Title Pattern',
      code: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Payment Settings — Acme Dashboard</title>
</head>
<body>
  <h1>Payment Settings</h1>
  <p>The &lt;title&gt; element is not drawn inside the page body; instead, it provides the name for the browser tab, bookmarks, and search engine result pages.</p>
</body>
</html>`,
      demo: {
        title: 'Native Browser Output',
        html: `<h1>Payment Settings</h1>
<p>The &lt;title&gt; element is not drawn inside the page body; instead, it provides the name for the browser tab, bookmarks, and search engine result pages.</p>`,
        interactive: false,
      },
    },
    {
      id: 'accessibility',
      title: 'Accessibility & Screen Reader Criteria',
      type: 'list',
      items: [
        'WCAG 2.1 Success Criterion 2.4.2 (Page Titled) requires a descriptive title that helps users find content and navigate through open tabs.',
        'When a user opens or switches tabs, screen readers announce the contents of the <title> tag first. If all pages share a generic title like "Dashboard", blind users cannot distinguish open tabs.',
        'When forms fail validation, update the title dynamically to "Error (2 fields): Payment Form" so screen reader users are alerted instantly.',
      ],
      callout: {
        type: 'accessibility',
        title: 'Front-Loading Principle',
        content: 'Put the most specific information at the beginning of the title (e.g., "Invoice #4028 — Accounting" rather than "Accounting Software — Invoices — #4028").',
      },
    },
  ],
};
