export const bLesson = {
  slug: 'b',
  number: '49',
  title: '<b>',
  category: 'Inline Text Semantics',
  subtitle: 'Draws the reader\'s attention to a span of text without conveying extra importance or emphasis',
  sections: [
    {
      id: 'overview',
      title: 'Overview & Semantic Meaning',
      type: 'text',
      badge: 'Attention',
      paragraphs: [
        'The <b> HTML element is used to draw the reader\'s attention to the element\'s contents, which are not otherwise granted special importance.',
        'This was formerly known as the "Boldface" element in older HTML specifications. In HTML5, it is semantically redefined for use cases like product names in a review, keywords in a document summary, or lead sentences in an article.',
        'User-agent stylesheets render <b> with bold font-weight (font-weight: bold).',
      ],
    },
    {
      id: 'syntax',
      title: 'Formal Syntax',
      type: 'syntax',
      syntax: '<p>The <b>primary colors</b> in traditional art are red, yellow, and blue.</p>',
      syntaxNote: 'Normal inline element requiring both start and closing tags. Contains phrasing content.',
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
      title: 'Drawing Attention Without Urgency',
      type: 'code-example',
      codeTitle: 'Product Highlights and Keywords',
      code: `<!-- Keywords in a summary -->
<p>
  This guide covers <b>variable declarations</b>, <b>control flow structures</b>, 
  and <b>error handling techniques</b> in modern JavaScript.
</p>

<!-- Lead sentence / run-in heading -->
<p>
  <b>Preheat your oven:</b> Set the thermostat to 400 degrees Fahrenheit before preparing the batter.
</p>

<!-- Product review names -->
<p>
  Both the <b>Model X</b> and the <b>Model Y</b> feature all-wheel drive dual motors.
</p>`,
      demo: {
        title: 'Native Browser Output',
        html: `<p>
  This guide covers <b>variable declarations</b>, <b>control flow structures</b>, 
  and <b>error handling techniques</b> in modern JavaScript.
</p>
<p>
  <b>Preheat your oven:</b> Set the thermostat to 400 degrees Fahrenheit before preparing the batter.
</p>
<p>
  Both the <b>Model X</b> and the <b>Model Y</b> feature all-wheel drive dual motors.
</p>`,
        interactive: false,
      },
    },
    {
      id: 'accessibility',
      title: '<b> vs <strong> Guidance',
      type: 'list',
      items: [
        'Use <strong> when text has serious importance, danger, or urgency (e.g. warnings, caveats).',
        'Use <b> for utilitarian typographic callouts where no urgency or emotional emphasis exists.',
        'Do not use <b> solely for decorative styling; use CSS font-weight: bold for presentational requirements.',
      ],
      callout: {
        type: 'tip',
        title: 'Summary Keywords',
        content: 'Search engines and screen readers treat `<b>` as ordinary text visually highlighted for skimming, making it ideal for lede phrases and document keywords.',
      },
    },
  ],
};
