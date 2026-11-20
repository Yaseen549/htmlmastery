export const metaLesson = {
  slug: 'meta',
  number: '05',
  title: '<meta>',
  category: 'Document Metadata & Root',
  subtitle: 'Defines document metadata including character encoding, responsive viewport, search directives, and OpenGraph',
  sections: [
    {
      id: 'overview',
      title: 'Overview & Semantic Meaning',
      type: 'text',
      badge: 'Void Element',
      paragraphs: [
        'The <meta> element represents metadata that cannot be represented by other HTML metadata elements (<base>, <link>, <script>, <style>, or <title>).',
        'It is a void element (it cannot have child elements or a closing tag). The metadata is declared through standard attributes like charset, name, http-equiv, and property.',
        'Properly configured meta tags ensure websites adapt correctly to mobile screens, prevent character scrambling, and produce rich previews on social media.',
      ],
    },
    {
      id: 'syntax',
      title: 'Formal Syntax',
      type: 'syntax',
      syntax: '<meta name="description" content="Clear summary of page content.">',
      syntaxNote: 'Void element: <meta charset="UTF-8"> or <meta name="..." content="...">. Self-closing slash <meta ... /> is valid but optional in HTML5.',
    },
    {
      id: 'attributes',
      title: 'Standard Attribute Matrix',
      type: 'attributes-table',
      headers: ['Attribute', 'Common Values', 'Purpose', 'Status'],
      rows: [
        ['charset', '"UTF-8"', 'Declares document character encoding. Must be UTF-8 in modern web apps.', 'Mandatory'],
        ['name="viewport"', '"width=device-width, initial-scale=1.0"', 'Configures layout viewport size on mobile devices.', 'Mandatory for Responsive'],
        ['name="description"', '150 - 160 character string', 'Page snippet displayed in search engine results.', 'Essential SEO'],
        ['name="robots"', '"index, follow", "noindex, nofollow"', 'Directs search engine crawlers whether to index and crawl links.', 'Standard'],
        ['http-equiv="refresh"', '"30", "5; url=https://example.com"', 'Refreshes or redirects the document after specified seconds.', 'Standard'],
        ['property="og:title"', 'OpenGraph title string', 'Social card title used by Facebook, LinkedIn, Slack, Discord.', 'Social Protocol'],
        ['property="og:image"', 'Absolute URL to 1200x630 image', 'Card banner image preview on social platforms.', 'Social Protocol'],
      ],
    },
    {
      id: 'code-example',
      title: 'Full OpenGraph & SEO Meta Suite',
      type: 'code-example',
      codeTitle: 'Production HTML5 Meta Declaration Suite',
      code: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="description" content="Master all 115+ HTML5 tags with live interactive right-side sandboxes.">
  <meta name="robots" content="index, follow">
</head>
<body>
  <h1>Meta Element Active</h1>
  <p>The document metadata is parsed silently in the background by user agents, bots, and crawlers.</p>
</body>
</html>`,
      demo: {
        title: 'Native Browser Output',
        html: `<h1>Meta Element Active</h1>
<p>The document metadata is parsed silently in the background by user agents, bots, and crawlers.</p>`,
        interactive: false,
      },
    },
    {
      id: 'accessibility',
      title: 'Viewport Accessibility Warnings',
      type: 'list',
      items: [
        'Never include user-scalable=no or maximum-scale=1.0 in your <meta name="viewport"> tag.',
        'WCAG 2.1 Success Criterion 1.4.4 (Resize text) states users must be allowed to zoom page content up to 200% without loss of content or functionality.',
        'Blocking zoom with maximum-scale=1.0 creates severe barriers for people with low vision.',
      ],
      callout: {
        type: 'warning',
        title: 'Do Not Disable User Zoom',
        content: 'Bad: <meta name="viewport" content="width=device-width, user-scalable=no">\nGood: <meta name="viewport" content="width=device-width, initial-scale=1.0">',
      },
    },
  ],
};
