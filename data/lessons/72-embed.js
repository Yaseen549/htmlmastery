export const embedLesson = {
  slug: 'embed',
  number: '72',
  title: '<embed>',
  category: 'Images & Multimedia',
  subtitle: 'Integration point for external applications, media files, or plugin-driven content',
  sections: [
    {
      id: 'overview',
      title: 'Overview & Semantic Meaning',
      type: 'text',
      badge: 'Plugin Embed',
      paragraphs: [
        'The <embed> HTML element embeds external content at the specified point in the document. This content is provided by an external application or other source of interactive content.',
        'Historically used for browser plugins such as Java applets and Flash movies, in modern HTML5 it is primarily used for displaying PDF documents or vector SVG files.',
        'It is a void element — it contains no child elements and has no closing tag.',
      ],
    },
    {
      id: 'syntax',
      title: 'Formal Syntax',
      type: 'syntax',
      syntax: '<embed type="application/pdf" src="document.pdf" width="600" height="400">',
      syntaxNote: 'Void element with no closing tag. Never write </embed>.',
    },
    {
      id: 'attributes',
      title: 'Attributes & Properties',
      type: 'attributes-table',
      headers: ['Attribute', 'Type / Values', 'Default', 'Description'],
      rows: [
        ['src', 'URL', 'none', 'The address of the resource being embedded.'],
        ['type', 'MIME type string', 'none', 'MIME type to use to select the plugin or viewer application.'],
        ['width', 'Integer / CSS pixels', '300', 'Display width in pixels.'],
        ['height', 'Integer / CSS pixels', '150', 'Display height in pixels.'],
      ],
    },
    {
      id: 'code-example',
      title: 'Embedding External Media',
      type: 'code-example',
      codeTitle: 'Vector Graphic Embed Demonstration',
      code: `<!-- Embedding an SVG document via embed -->
<embed 
  type="image/svg+xml" 
  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='120'%3E%3Crect width='300' height='120' fill='%236366f1'/%3E%3Ctext x='50%25' y='50%25' fill='%23ffffff' dominant-baseline='middle' text-anchor='middle' font-family='sans-serif' font-size='16'%3EEmbedded External Graphic%3C/text%3E%3C/svg%3E" 
  width="300" 
  height="120"
>`,
      demo: {
        title: 'Native Browser Output',
        html: `<embed 
  type="image/svg+xml" 
  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='120'%3E%3Crect width='300' height='120' fill='%236366f1'/%3E%3Ctext x='50%25' y='50%25' fill='%23ffffff' dominant-baseline='middle' text-anchor='middle' font-family='sans-serif' font-size='16'%3EEmbedded External Graphic%3C/text%3E%3C/svg%3E" 
  width="300" 
  height="120"
>`,
        interactive: false,
      },
    },
    {
      id: 'accessibility',
      title: '<embed> vs <object>',
      type: 'list',
      items: [
        '<embed> has no closing tag and cannot contain fallback content.',
        '<object> supports rich fallback markup (nested images, text, links) if the plugin or viewer cannot load.',
        'For modern web media, prefer <video>, <audio>, <iframe>, or <object> over <embed>.',
      ],
      callout: {
        type: 'note',
        title: 'No Fallback Content',
        content: 'Because `<embed>` is a void element, it cannot provide fallback text. If you require graceful degradation when the resource fails, use `<object>` instead.',
      },
    },
  ],
};
