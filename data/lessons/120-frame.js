export const frameLesson = {
  slug: 'frame',
  number: '120',
  title: '<frame>',
  category: 'Obsolete & Deprecated Reference',
  subtitle: 'Deprecated window subframe; obsolete in HTML5, replaced with <iframe>',
  sections: [
    {
      id: 'overview',
      title: 'Historical Background & Deprecation',
      type: 'text',
      badge: 'Obsolete in HTML5',
      paragraphs: [
        'The <frame> HTML element defined one particular window (or frame) within a <frameset>.',
        'It was obsolete in HTML5 along with <frameset>. Framing entire websites into rigid window splits caused disastrous usability problems: users could not bookmark specific pages, search engines could not index sub-pages correctly, and the back button broke frequently.',
        'Modern web development uses standard responsive HTML/CSS layouts, and uses `<iframe>` when isolated subdocuments are genuinely necessary.',
      ],
    },
    {
      id: 'syntax',
      title: 'Obsolete Syntax & Modern Replacement',
      type: 'syntax',
      syntax: '<!-- Obsolete HTML 4 Frame -->\n<frameset cols="200,*">\n  <frame src="nav.html">\n  <frame src="main.html">\n</frameset>\n\n<!-- Modern HTML5 Standard Alternative -->\n<iframe src="widget.html" title="Subdocument" width="400" height="300"></iframe>',
      syntaxNote: 'Obsolete element. Replaced completely by <iframe>.',
    },
    {
      id: 'attributes',
      title: 'Attributes & Properties',
      type: 'attributes-table',
      headers: ['Attribute', 'Historical Purpose', 'Status', 'Modern Equivalent'],
      rows: [
        ['src', 'Page URL to load into frame', 'Obsolete', 'src attribute on <iframe>'],
        ['name', 'Target frame name for links', 'Obsolete', 'name attribute on <iframe>'],
        ['noresize', 'Prevented dragging border', 'Obsolete', 'Controlled via CSS on container'],
        ['scrolling', 'yes | no | auto', 'Obsolete', 'CSS overflow property'],
      ],
    },
    {
      id: 'code-example',
      title: 'Modern Subdocument with <iframe>',
      type: 'code-example',
      codeTitle: 'Modern Standard <iframe> Replacement',
      code: `<!-- Modern accessible inline frame replacement -->
<iframe 
  srcdoc="<!DOCTYPE html><html><body><p>Clean modern sandboxed subdocument using &lt;iframe&gt;.</p></body></html>" 
  title="Modern Subdocument Demo" 
  width="320" 
  height="80"
></iframe>`,
      demo: {
        title: 'Native Browser Output',
        html: `<iframe 
  srcdoc="<!DOCTYPE html><html><body><p>Clean modern sandboxed subdocument using &lt;iframe&gt;.</p></body></html>" 
  title="Modern Subdocument Demo" 
  width="320" 
  height="80"
></iframe>`,
        interactive: false,
      },
    },
    {
      id: 'accessibility',
      title: 'Usability Failure of Frames',
      type: 'list',
      items: [
        'Bookmarking broken: Bookmarking a framed site only saved the outer frameset URL, losing user state.',
        'SEO disaster: Web crawlers indexed inner frame pages out of context without navigation headers.',
        'Screen readers struggled to navigate focus between multiple unlabelled frames.',
      ],
      callout: {
        type: 'important',
        title: 'Use <iframe>',
        content: '`<frame>` cannot exist without `<frameset>`. For modern embed requirements, use `<iframe>` with explicit `title` and `sandbox` attributes.',
      },
    },
  ],
};
