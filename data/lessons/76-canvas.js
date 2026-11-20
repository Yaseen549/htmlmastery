export const canvasLesson = {
  slug: 'canvas',
  number: '76',
  title: '<canvas>',
  category: 'Images & Multimedia',
  subtitle: 'Scriptable 2D and WebGL bitmap canvas for procedural graphics, games, and visualizations',
  sections: [
    {
      id: 'overview',
      title: 'Overview & Semantic Meaning',
      type: 'text',
      badge: 'Bitmap Canvas',
      paragraphs: [
        'The <canvas> HTML element with either the canvas 2D API or WebGL API can be used to draw graphics and animations via scripting (usually JavaScript).',
        'Among other things, it can be used for animations, game graphics, data visualization, photo manipulation, and real-time video processing.',
        'Unlike SVG (which is vector-based and retains DOM nodes for each shape), canvas is a resolution-dependent raster grid of pixels. Once drawn, shapes are flattened onto the bitmap.',
      ],
    },
    {
      id: 'syntax',
      title: 'Formal Syntax',
      type: 'syntax',
      syntax: '<canvas id="myCanvas" width="400" height="300">\n  <p>Your browser does not support the HTML5 canvas element.</p>\n</canvas>',
      syntaxNote: 'Normal element requiring opening and closing tags. Contains fallback text between tags for older non-supporting browsers.',
    },
    {
      id: 'attributes',
      title: 'Attributes & Properties',
      type: 'attributes-table',
      headers: ['Attribute', 'Type / Values', 'Default', 'Description'],
      rows: [
        ['width', 'Integer / pixels', '300', 'Coordinate width of the canvas bitmap buffer.'],
        ['height', 'Integer / pixels', '150', 'Coordinate height of the canvas bitmap buffer.'],
        ['Global attributes', 'Supported', 'Standard', 'Supports class, id, title, etc.'],
      ],
    },
    {
      id: 'code-example',
      title: 'Canvas Element and Pixel Drawing',
      type: 'code-example',
      codeTitle: 'Canvas Element with Procedural Script',
      code: `<!-- Canvas drawing surface -->
<canvas id="demoCanvas" width="300" height="120" style="border: 1px solid #ccc;">
  <p>Fallback content for browsers without canvas support.</p>
</canvas>

<script>
  // Simple JavaScript drawing on canvas
  const canvas = document.getElementById('demoCanvas');
  if (canvas && canvas.getContext) {
    const ctx = canvas.getContext('2d');
    ctx.fillStyle = '#ea580c';
    ctx.fillRect(20, 20, 100, 80);
    ctx.fillStyle = '#18181b';
    ctx.font = '16px sans-serif';
    ctx.fillText('HTML5 Canvas', 140, 65);
  }
</script>`,
      demo: {
        title: 'Native Browser Output',
        html: `<canvas id="demoCanvas" width="300" height="120" style="border: 1px solid #ccc;">
  <p>Fallback content for browsers without canvas support.</p>
</canvas>
<script>
  const canvas = document.getElementById('demoCanvas');
  if (canvas && canvas.getContext) {
    const ctx = canvas.getContext('2d');
    ctx.fillStyle = '#ea580c';
    ctx.fillRect(20, 20, 100, 80);
    ctx.fillStyle = '#18181b';
    ctx.font = '16px sans-serif';
    ctx.fillText('HTML5 Canvas', 140, 65);
  }
</script>`,
        interactive: false,
      },
    },
    {
      id: 'accessibility',
      title: 'Accessibility & Coordinate Space',
      type: 'list',
      items: [
        'Always set width and height directly on the <canvas> attributes, NOT via CSS width/height, to avoid distorting the coordinate aspect ratio.',
        'Because canvas pixels are inaccessible to screen readers, provide descriptive fallback text inside the <canvas> tag or mirror information in HTML.',
      ],
      callout: {
        type: 'important',
        title: 'Canvas Buffer vs CSS Size',
        content: 'Setting `<canvas style="width: 600px">` scales the 300px default bitmap buffer like an image, causing blurriness. Always set `<canvas width="600">` to define the true bitmap pixel buffer.',
      },
    },
  ],
};
