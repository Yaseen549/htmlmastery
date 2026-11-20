export const qLesson = {
  slug: 'q',
  number: '39',
  title: '<q>',
  category: 'Inline Text Semantics',
  subtitle: 'Represents an inline quotation automatically enclosed in language-appropriate quotes',
  sections: [
    {
      id: 'overview',
      title: 'Overview & Semantic Meaning',
      type: 'text',
      badge: 'Inline Quote',
      paragraphs: [
        'The <q> HTML element indicates that the enclosed text is an inline quotation. Most modern browsers implement this by surrounding the text in quotation marks.',
        'This element is intended for short quotations that do not require paragraph breaks; for long block quotations, use the <blockquote> element.',
        'Browsers automatically pick quotation mark conventions based on the document or element\'s lang attribute (e.g., curly quotes in English, guillemets « » in French).',
      ],
    },
    {
      id: 'syntax',
      title: 'Formal Syntax',
      type: 'syntax',
      syntax: '<p>Dennis Ritchie once said, <q cite="https://example.com/quotes">UNIX is basically a simple operating system...</q></p>',
      syntaxNote: 'Normal inline element requiring opening and closing tags. Contains phrasing content.',
    },
    {
      id: 'attributes',
      title: 'Attributes & Properties',
      type: 'attributes-table',
      headers: ['Attribute', 'Type / Values', 'Default', 'Description'],
      rows: [
        ['cite', 'URL', 'none', 'A URL that designates a source document or message for the information quoted of.'],
        ['Global attributes', 'Supported', 'Standard', 'Supports class, id, title, lang, dir, etc.'],
      ],
    },
    {
      id: 'code-example',
      title: 'Inline Quotes and Automatic Quotation Marks',
      type: 'code-example',
      codeTitle: 'English and French Quotation Mark Localization',
      code: `<!-- Standard English quotes (automatic curly quotes) -->
<p>
  As Antoine de Saint-Exupéry wrote:
  <q>Perfection is achieved not when there is nothing more to add, but when there is nothing left to take away.</q>
</p>

<!-- Quotes with language localization (renders guillemets « ») -->
<p lang="fr">
  Comme disait Descartes: <q>Je pense, donc je suis.</q>
</p>`,
      demo: {
        title: 'Native Browser Output',
        html: `<p>
  As Antoine de Saint-Exupéry wrote:
  <q>Perfection is achieved not when there is nothing more to add, but when there is nothing left to take away.</q>
</p>
<p lang="fr">
  Comme disait Descartes: <q>Je pense, donc je suis.</q>
</p>`,
        interactive: false,
      },
    },
    {
      id: 'accessibility',
      title: 'Screen Reader & Typographic Rules',
      type: 'list',
      items: [
        'Do NOT manually type literal quotation mark characters inside <q>; the browser automatically inserts them via CSS pseudo-elements (quotes: auto).',
        'Screen readers announce <q> with quote inflection or explicit "quote ... end quote" phrases.',
        'The cite attribute is optional and points to the external web reference for the quotation.',
      ],
      callout: {
        type: 'tip',
        title: 'No Manual Quotation Marks',
        content: 'Writing `<p><q>"Hello"</q></p>` results in double quotation marks like `""Hello""`. Always let the browser insert the native quotes.',
      },
    },
  ],
};
