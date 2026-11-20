export const htmlLesson = {
  slug: 'html',
  number: '02',
  title: '<html>',
  category: 'Document Metadata & Root',
  subtitle: 'The top-level root element that encapsulates all content and sub-elements of an HTML document',
  sections: [
    {
      id: 'overview',
      title: 'Overview & Semantic Meaning',
      type: 'text',
      badge: 'Root Element',
      paragraphs: [
        'The <html> element represents the root (top-level element) of an HTML document, so it is also referred to as the root element. All other elements must be descendants of this element.',
        'Although web browser parsers automatically infer the <html> tag if omitted, omitting it is considered bad practice. Explicitly defining it is required for setting the document primary language, text directionality, and XML namespaces.',
      ],
    },
    {
      id: 'syntax',
      title: 'Formal Syntax',
      type: 'syntax',
      syntax: '<html lang="en" dir="ltr"> ... </html>',
      syntaxNote: 'Normal element requiring both start and closing tags enclosing exactly one <head> followed by one <body>.',
    },
    {
      id: 'attributes',
      title: 'Attributes & Properties',
      type: 'attributes-table',
      headers: ['Attribute', 'Type', 'Default', 'Description'],
      rows: [
        ['lang', 'Language Code', 'None', 'Primary natural language of the document (e.g., "en", "es", "ar", "zh-CN"). Essential for screen readers and SEO.'],
        ['dir', 'ltr | rtl | auto', 'ltr', 'Base text directionality across the entire document. "rtl" is used for Arabic, Hebrew, Urdu, Persian.'],
        ['xmlns', 'URI String', 'http://www.w3.org/1999/xhtml', 'XML namespace attribute for polyglot HTML documents served as XML.'],
        ['Global attributes', 'Any', 'None', 'Supports all standard global attributes including id, class, and style.'],
      ],
    },
    {
      id: 'code-example',
      title: 'Complete Root Configuration Example',
      type: 'code-example',
      codeTitle: 'Multilingual and Bi-directional Setup',
      code: `<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="UTF-8">
    <title>HTML Root Element Demonstration</title>
  </head>
  <body>
    <h1>Welcome to the HTML5 Living Standard</h1>
    <p>This document's natural language is declared as English with left-to-right flow.</p>
    <hr>
    <div dir="rtl">
      <h2>مرحبًا بكم في معيار HTML5</h2>
      <p>هذا النص يتدفق من اليمين إلى اليسار تلقائيًا.</p>
    </div>
  </body>
</html>`,
      demo: {
        title: 'Native Browser Output',
        html: `<h1>Welcome to the HTML5 Living Standard</h1>
<p>This document's natural language is declared as English with left-to-right flow.</p>
<hr>
<div dir="rtl">
  <h2>مرحبًا بكم في معيار HTML5</h2>
  <p>هذا النص يتدفق من اليمين إلى اليسار تلقائيًا.</p>
</div>`,
        interactive: false,
      },
    },
    {
      id: 'accessibility',
      title: 'Accessibility & ARIA Guidelines',
      type: 'list',
      items: [
        'WCAG 2.1 Success Criterion 3.1.1 (Language of Page) strictly mandates a valid BCP 47 language code on the <html> element.',
        'Screen readers switch text-to-speech pronunciation engines based on the lang attribute. An omitted or incorrect lang attribute forces screen readers to mispronounce words in an unintended accent.',
        'Translation engines (Google Translate, Safari Translate) use the <html> lang attribute to decide whether to offer instant page translation.',
      ],
      callout: {
        type: 'accessibility',
        title: 'Screen Reader Pronunciation Warning',
        content: 'Without lang="en", a Spanish screen reader user visiting an English page will hear English text phonetically pronounced with Spanish voice rules, resulting in unintelligible speech.',
      },
    },
  ],
};
