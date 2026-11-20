export const figureLesson = {
  slug: 'figure',
  number: '30',
  title: '<figure>',
  category: 'Text Content & Grouping',
  subtitle: 'Represents self-contained flow content with an optional caption (<figcaption>)',
  sections: [
    {
      id: 'overview',
      title: 'Overview & Semantic Meaning',
      type: 'text',
      badge: 'Figure',
      paragraphs: [
        'The <figure> HTML element represents self-contained content, potentially with an optional caption, which is specified using the <figcaption> element.',
        'The figure, its caption, and its contents are referenced as a single unit from the main flow of the document. Although it is related to the main flow, its position is independent of the main flow, and removing or moving it to an appendix should not affect the meaning of the flow.',
        'Common uses include diagrams, illustrations, photos, code snippets, poems, or audio/video clips referenced in an article.',
      ],
    },
    {
      id: 'syntax',
      title: 'Formal Syntax',
      type: 'syntax',
      syntax: '<figure>\n  <!-- Media, code, or illustration -->\n  <figcaption>Caption text</figcaption>\n</figure>',
      syntaxNote: 'Normal element requiring opening and closing tags. Contains flow content and optionally at most one <figcaption> as its first or last child.',
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
      title: 'Self-Contained Content Demonstrations',
      type: 'code-example',
      codeTitle: 'Figure with Code Listing and Image Placeholder',
      code: `<!-- Figure wrapping a code listing -->
<figure>
  <figcaption>Listing 1: A simple hello world in C</figcaption>
  <pre><code>#include &lt;stdio.h&gt;

int main(void) {
    printf("Hello, World!\\n");
    return 0;
}</code></pre>
</figure>

<!-- Figure with text and quote -->
<figure>
  <blockquote>
    "Simplicity is prerequisite for reliability."
  </blockquote>
  <figcaption>— Edsger W. Dijkstra</figcaption>
</figure>`,
      demo: {
        title: 'Native Browser Output',
        html: `<figure>
  <figcaption>Listing 1: A simple hello world in C</figcaption>
  <pre><code>#include &lt;stdio.h&gt;

int main(void) {
    printf("Hello, World!\\n");
    return 0;
}</code></pre>
</figure>

<figure>
  <blockquote>
    "Simplicity is prerequisite for reliability."
  </blockquote>
  <figcaption>— Edsger W. Dijkstra</figcaption>
</figure>`,
        interactive: false,
      },
    },
    {
      id: 'accessibility',
      title: 'Accessibility & Landmark Features',
      type: 'list',
      items: [
        'Browsers and screen readers expose <figure> with a figure role, associating its <figcaption> as the accessible name.',
        'By default, user-agent stylesheets apply 1em top/bottom margins and 40px left/right margins to <figure>.',
        'Not every image needs a <figure>; use it only when the image is self-contained and referenced from the main text or requires a formal caption.',
      ],
      callout: {
        type: 'tip',
        title: 'Placement of <figcaption>',
        content: 'The <figcaption> element must be either the first child or the last child of <figure>. It cannot appear between other sibling elements.',
      },
    },
  ],
};
