export const iframeLesson = {
  slug: 'iframe',
  number: '71',
  title: '<iframe>',
  category: 'Images & Multimedia',
  subtitle: 'Embeds an independent nested browsing context within the current HTML document',
  sections: [
    {
      id: 'overview',
      title: 'Overview & Semantic Meaning',
      type: 'text',
      badge: 'Subdocument',
      paragraphs: [
        'The <iframe> (Inline Frame) HTML element represents a nested browsing context, embedding another HTML page into the current one.',
        'Each embedded iframe has its own isolated session history, window object, and document model. It is widely used for embedding third-party widgets, maps, video players, and sandboxed interactive demonstrations.',
        'The sandbox attribute enables a powerful security policy to restrict scripts, forms, top-level navigation, and popup capabilities of the embedded document.',
      ],
    },
    {
      id: 'syntax',
      title: 'Formal Syntax',
      type: 'syntax',
      syntax: '<iframe src="https://example.com" title="Embedded Widget" width="600" height="400" sandbox="allow-scripts" loading="lazy"></iframe>',
      syntaxNote: 'Normal element requiring both start and closing tags. Contains fallback text between tags for non-supporting browsers.',
    },
    {
      id: 'attributes',
      title: 'Attributes & Properties',
      type: 'attributes-table',
      headers: ['Attribute', 'Type / Values', 'Default', 'Description'],
      rows: [
        ['src', 'URL', 'none', 'URL of the page to embed.'],
        ['srcdoc', 'HTML document string', 'none', 'Inline HTML content to embed directly, overriding src.'],
        ['title', 'String', 'Required for a11y', 'Label describing the contents of the iframe for assistive technologies.'],
        ['width', 'Integer / CSS pixels', '300', 'Width of the frame.'],
        ['height', 'Integer / CSS pixels', '150', 'Height of the frame.'],
        ['sandbox', 'Security tokens (allow-scripts, allow-same-origin, etc.)', 'none', 'Enforces strict security restrictions on embedded content.'],
        ['loading', 'eager | lazy', 'eager', 'Defers loading of off-screen iframes until scrolled near.'],
        ['allow', 'Permissions policy string', 'none', 'Feature policy allowing camera, microphone, fullscreen, etc.'],
      ],
    },
    {
      id: 'code-example',
      title: 'Sandboxed Nested Documents',
      type: 'code-example',
      codeTitle: 'Iframe with srcdoc and Sandbox Policy',
      code: `<!-- Sandboxed iframe with inline srcdoc content -->
<iframe 
  title="Native HTML Demo Document" 
  width="340" 
  height="160" 
  sandbox="allow-same-origin"
  srcdoc="<!DOCTYPE html><html><body style='margin:16px; font-family:sans-serif;'><h3>Isolated Subdocument</h3><p>Rendered safely inside an iframe container.</p></body></html>"
>
  <p>Your browser does not support iframes.</p>
</iframe>`,
      demo: {
        title: 'Native Browser Output',
        html: `<iframe 
  title="Native HTML Demo Document" 
  width="340" 
  height="160" 
  sandbox="allow-same-origin"
  srcdoc="<!DOCTYPE html><html><body style='margin:16px; font-family:sans-serif;'><h3>Isolated Subdocument</h3><p>Rendered safely inside an iframe container.</p></body></html>"
>
  <p>Your browser does not support iframes.</p>
</iframe>`,
        interactive: false,
      },
    },
    {
      id: 'accessibility',
      title: 'Accessibility & Security Guidelines',
      type: 'list',
      items: [
        'Every <iframe> MUST have a descriptive title attribute (e.g. title="YouTube video player") so screen reader users know what content is framed.',
        'Use the sandbox attribute whenever embedding third-party untrusted content to prevent cross-site scripting (XSS).',
        'Never set sandbox="allow-scripts allow-same-origin" on untrusted content, as this allows the framed document to remove its own sandbox.',
      ],
      callout: {
        type: 'important',
        title: 'Mandatory title Attribute',
        content: 'WCAG 2.1 Success Criterion 4.1.2 requires all `<iframe>` elements to have a non-empty `title` attribute providing an accessible name for the frame.',
      },
    },
  ],
};
