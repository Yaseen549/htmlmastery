export const pLesson = {
  slug: 'p',
  number: '20',
  title: '<p>',
  category: 'Text Content & Grouping',
  subtitle: 'Represents a paragraph of text content with native vertical margins',
  sections: [
    {
      id: 'overview',
      title: 'Overview & Semantic Meaning',
      type: 'text',
      badge: 'Paragraph',
      paragraphs: [
        'The <p> HTML element represents a paragraph. Paragraphs are usually represented in visual media as blocks of text separated from adjacent blocks by blank lines and/or first-line indentation.',
        'Paragraphs are block-level elements that naturally wrap inline text, hyperlinks, images, and formatting tags. If another block-level element (such as <div>, <h1>, <ul>, or another <p>) is encountered by the HTML parser while a <p> tag is open, the browser automatically closes the open paragraph.',
      ],
    },
    {
      id: 'syntax',
      title: 'Formal Syntax',
      type: 'syntax',
      syntax: '<p>Text content of the paragraph...</p>',
      syntaxNote: 'Normal element. While HTML syntax rules allow the closing </p> tag to be omitted if immediately followed by another block element, omitting it is strongly discouraged.',
    },
    {
      id: 'attributes',
      title: 'Attributes & Properties',
      type: 'attributes-table',
      headers: ['Attribute', 'Type', 'Status', 'Description'],
      rows: [
        ['align', 'left | center | right | justify', 'Obsolete in HTML5', 'Use CSS text-align instead.'],
        ['Global attributes', 'Supported', 'Standard', 'Supports class, id, title, lang, dir, etc.'],
      ],
    },
    {
      id: 'code-example',
      title: 'Standard Paragraph Usage',
      type: 'code-example',
      codeTitle: 'Consecutive Paragraph Blocks',
      code: `<p>
  HTML (HyperText Markup Language) is the most basic building block of the Web.
  It defines the meaning and structure of web content.
</p>

<p>
  Other technologies besides HTML are generally used to describe a web page's
  appearance/presentation (CSS) or functionality/behavior (JavaScript).
</p>`,
      demo: {
        title: 'Native Browser Output',
        html: `<p>
  HTML (HyperText Markup Language) is the most basic building block of the Web.
  It defines the meaning and structure of web content.
</p>
<p>
  Other technologies besides HTML are generally used to describe a web page's
  appearance/presentation (CSS) or functionality/behavior (JavaScript).
</p>`,
        interactive: false,
      },
    },
    {
      id: 'accessibility',
      title: 'Accessibility & Typography Guidelines',
      type: 'list',
      items: [
        'Screen readers pause between paragraphs, giving listeners a natural break in synthesized speech.',
        'Never use empty <p></p> tags simply to add vertical spacing between elements; use CSS margins instead.',
        'Do not wrap interactive elements (like a full form or multiple headings) inside a <p> tag.',
      ],
      callout: {
        type: 'warning',
        title: 'Do Not Nest Block Elements in <p>',
        content: 'Writing <p><div>Content</div></p> is invalid HTML. When the parser hits <div>, it immediately forces the <p> element to close, producing unexpected layout bugs.',
      },
    },
  ],
};
