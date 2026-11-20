export const objectLesson = {
  slug: 'object',
  number: '73',
  title: '<object>',
  category: 'Images & Multimedia',
  subtitle: 'External resource container representing an image, PDF document, or nested context with fallbacks',
  sections: [
    {
      id: 'overview',
      title: 'Overview & Semantic Meaning',
      type: 'text',
      badge: 'Resource Object',
      paragraphs: [
        'The <object> HTML element represents an external resource, which can be treated as an image, a nested browsing context, or a resource to be handled by a plugin.',
        'A key strength of <object> is its robust fallback mechanism: any content placed between the opening <object> and closing </object> tags is rendered if and only if the specified resource fails to load or cannot be displayed.',
        'It is commonly used to embed PDF documents, SVG drawings, audio/video streams, or HTML sub-pages.',
      ],
    },
    {
      id: 'syntax',
      title: 'Formal Syntax',
      type: 'syntax',
      syntax: '<object data="document.pdf" type="application/pdf" width="800" height="500">\n  <p>Unable to display PDF. <a href="document.pdf">Download file</a> instead.</p>\n</object>',
      syntaxNote: 'Normal element requiring opening and closing tags. Contains fallback flow content inside.',
    },
    {
      id: 'attributes',
      title: 'Attributes & Properties',
      type: 'attributes-table',
      headers: ['Attribute', 'Type / Values', 'Default', 'Description'],
      rows: [
        ['data', 'URL', 'none', 'Address of the resource as a valid URL.'],
        ['type', 'MIME type string', 'none', 'Content type of the resource specified by data.'],
        ['name', 'String', 'none', 'Name of valid browsing context for target references.'],
        ['width', 'Integer / CSS pixels', '300', 'Width of the object in pixels.'],
        ['height', 'Integer / CSS pixels', '150', 'Height of the object in pixels.'],
      ],
    },
    {
      id: 'code-example',
      title: 'External Resource with Fallback',
      type: 'code-example',
      codeTitle: 'Embedded Vector Object with Text Fallback',
      code: `<!-- Object element with fallback message -->
<object 
  data="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='120'%3E%3Crect width='300' height='120' fill='%23059669'/%3E%3Ctext x='50%25' y='50%25' fill='%23ffffff' dominant-baseline='middle' text-anchor='middle' font-family='sans-serif' font-size='16'%3EObject Vector Canvas%3C/text%3E%3C/svg%3E" 
  type="image/svg+xml" 
  width="300" 
  height="120"
>
  <p>Your browser could not render the embedded object resource.</p>
</object>`,
      demo: {
        title: 'Native Browser Output',
        html: `<object 
  data="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='120'%3E%3Crect width='300' height='120' fill='%23059669'/%3E%3Ctext x='50%25' y='50%25' fill='%23ffffff' dominant-baseline='middle' text-anchor='middle' font-family='sans-serif' font-size='16'%3EObject Vector Canvas%3C/text%3E%3C/svg%3E" 
  type="image/svg+xml" 
  width="300" 
  height="120"
>
  <p>Your browser could not render the embedded object resource.</p>
</object>`,
        interactive: false,
      },
    },
    {
      id: 'accessibility',
      title: 'Fallback Content Best Practices',
      type: 'list',
      items: [
        'Always place a descriptive download link or image fallback inside <object> tags.',
        'Users whose browsers lack built-in PDF viewers will receive the fallback link immediately.',
        'Assistive technologies read the fallback content if the object resource is unhandled.',
      ],
      callout: {
        type: 'tip',
        title: 'Graceful Degradation',
        content: 'Nesting `<object data="vector.svg"><img src="fallback.png" alt="Diagram"></object>` provides seamless automated image fallback without JavaScript.',
      },
    },
  ],
};
