export const appletLesson = {
  slug: 'applet',
  number: '119',
  title: '<applet>',
  category: 'Obsolete & Deprecated Reference',
  subtitle: 'Deprecated Java applet plugin container; obsolete in HTML5, replaced with modern web standards',
  sections: [
    {
      id: 'overview',
      title: 'Historical Background & Deprecation',
      type: 'text',
      badge: 'Obsolete in HTML5',
      paragraphs: [
        'The <applet> HTML element was used to embed a Java applet within an HTML document.',
        'It was deprecated in HTML 4 and made completely obsolete in HTML5. Furthermore, all major web browsers have permanently removed the Netscape Plugin API (NPAPI) required to run Java applets due to severe security vulnerabilities and performance issues.',
        'Modern interactive applications run natively on web technologies: `<canvas>`, WebGL, WebAssembly (Wasm), and JavaScript.',
      ],
    },
    {
      id: 'syntax',
      title: 'Obsolete Syntax & Modern Replacement',
      type: 'syntax',
      syntax: '<!-- Obsolete Java Applet -->\n<applet code="Calculator.class" width="300" height="200">\n  Java is required to run this applet.\n</applet>\n\n<!-- Modern HTML5 Replacements -->\n<canvas id="app" width="300" height="200"></canvas>\n<!-- or for embedded PDF/plugins -->\n<object data="resource.pdf" type="application/pdf"></object>',
      syntaxNote: 'Obsolete element. Not supported by modern web browsers.',
    },
    {
      id: 'attributes',
      title: 'Obsolete Attributes Matrix',
      type: 'attributes-table',
      headers: ['Attribute', 'Historical Purpose', 'Status', 'Modern Alternative'],
      rows: [
        ['code', 'Java class filename', 'Obsolete', 'JavaScript source script src'],
        ['codebase', 'Directory URL for class files', 'Obsolete', 'Base URL / CDN path'],
        ['archive', 'Comma-separated JAR file paths', 'Obsolete', 'ES Module bundling / Webpack'],
        ['width / height', 'Pixel dimensions', 'Obsolete', 'CSS width / height or canvas attributes'],
      ],
    },
    {
      id: 'code-example',
      title: 'Browser Handling of Obsolete <applet>',
      type: 'code-example',
      codeTitle: 'Modern Browser Fallback Display',
      code: `<!-- Modern browsers display the fallback text inside <applet> -->
<applet code="Example.class" width="300" height="100">
  <p>Java applets are no longer supported in modern web browsers.</p>
</applet>`,
      demo: {
        title: 'Native Browser Output',
        html: `<applet code="Example.class" width="300" height="100">
  <p>Java applets are no longer supported in modern web browsers.</p>
</applet>`,
        interactive: false,
      },
    },
    {
      id: 'accessibility',
      title: 'Security & Web Standards Evolution',
      type: 'list',
      items: [
        'Java plugins caused severe security holes (remote code execution) on client machines.',
        'Modern browsers sandbox client-side code completely.',
        'WebAssembly (Wasm) allows compiled languages (C, C++, Rust, Go) to run securely inside the browser at near-native speeds without plugins.',
      ],
      callout: {
        type: 'warning',
        title: 'Permanently Removed',
        content: 'No modern desktop or mobile browser can execute Java applets. All NPAPI plugin architecture has been permanently eradicated from the web platform.',
      },
    },
  ],
};
