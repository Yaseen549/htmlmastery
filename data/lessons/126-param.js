export const paramLesson = {
  slug: 'param',
  number: '126',
  title: '<param>',
  category: 'Obsolete & Deprecated Reference',
  subtitle: 'Deprecated parameter definition for <object>; obsolete in HTML5',
  sections: [
    {
      id: 'overview',
      title: 'Historical Background & Deprecation',
      type: 'text',
      badge: 'Obsolete in HTML5',
      paragraphs: [
        'The <param> HTML element defined parameters for plugins invoked by the <object> element in early web architectures.',
        'It was made obsolete in modern HTML standards because external browser plugins (Flash, Silverlight, Java) have been eradicated from modern browsers.',
        'Modern multimedia parameters are passed via standard HTML attributes (e.g., autoplay, controls on <video>/<audio>) or JavaScript APIs.',
      ],
    },
    {
      id: 'syntax',
      title: 'Obsolete Syntax & Modern Replacement',
      type: 'syntax',
      syntax: '<!-- Obsolete HTML 4 Object Parameter -->\n<object data="movie.swf">\n  <param name="autoplay" value="true">\n</object>\n\n<!-- Modern HTML5 Standard Alternative -->\n<video src="movie.mp4" autoplay muted></video>',
      syntaxNote: 'Obsolete void element. Fails modern HTML5 validator checks.',
    },
    {
      id: 'attributes',
      title: 'Attributes & Properties',
      type: 'attributes-table',
      headers: ['Attribute', 'Type', 'Status', 'Description'],
      rows: [
        ['name', 'String', 'Obsolete', 'The name of the parameter.'],
        ['value', 'String', 'Obsolete', 'The value of the parameter.'],
        ['valuetype', 'data | ref | object', 'Obsolete', 'Type of value; obsolete.'],
      ],
    },
    {
      id: 'code-example',
      title: 'Historical Parameter Usage',
      type: 'code-example',
      codeTitle: 'Object Parameter in Legacy HTML',
      code: `<!-- Historical <param> inside <object> -->
<object data="sample.pdf" type="application/pdf" width="300" height="100">
  <param name="view" value="Fit">
  <p>Modern browser rendering fallback.</p>
</object>`,
      demo: {
        title: 'Native Browser Output',
        html: `<object data="sample.pdf" type="application/pdf" width="300" height="100">
  <param name="view" value="Fit">
  <p>Modern browser rendering fallback.</p>
</object>`,
        interactive: false,
      },
    },
    {
      id: 'accessibility',
      title: 'Plugin Elimination',
      type: 'list',
      items: [
        'NPAPI plugin architecture was permanently retired across all modern browser engines in 2020.',
        'Use native HTML5 <video>, <audio>, <iframe>, or <canvas> elements instead.',
      ],
      callout: {
        type: 'warning',
        title: 'Obsolete',
        content: '`<param>` has no function in modern browsers and should not be used in contemporary web development.',
      },
    },
  ],
};
