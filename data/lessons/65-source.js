export const sourceLesson = {
  slug: 'source',
  number: '65',
  title: '<source>',
  category: 'Images & Multimedia',
  subtitle: 'Specifies alternative media resources for <picture>, <video>, or <audio> elements',
  sections: [
    {
      id: 'overview',
      title: 'Overview & Semantic Meaning',
      type: 'text',
      badge: 'Media Resource',
      paragraphs: [
        'The <source> HTML element specifies multiple alternative media resources for <picture>, <video>, or <audio> elements.',
        'It is a void element (it contains no content and has no closing tag) that allows web authors to provide formats encoded in different codecs (e.g. MP4, WebM, Ogg, AVIF, WebP) or matched to different viewport conditions.',
        'The browser assesses each <source> in document order and chooses the first stream or file it has codec and hardware capability to decode.',
      ],
    },
    {
      id: 'syntax',
      title: 'Formal Syntax',
      type: 'syntax',
      syntax: '<video controls>\n  <source src="movie.webm" type="video/webm">\n  <source src="movie.mp4" type="video/mp4">\n  Your browser does not support HTML5 video.\n</video>',
      syntaxNote: 'Void element with no closing tag. Must be a direct child of <picture>, <video>, or <audio>.',
    },
    {
      id: 'attributes',
      title: 'Attributes & Properties',
      type: 'attributes-table',
      headers: ['Attribute', 'Type / Values', 'Default', 'Description'],
      rows: [
        ['src', 'URL', 'none', 'Required for <audio> and <video>: address of the media file.'],
        ['srcset', 'Image candidates', 'none', 'Required for <picture>: candidate image paths and pixel densities.'],
        ['type', 'MIME type string', 'none', 'MIME type of the resource (e.g., "video/webm; codecs=vp9").'],
        ['media', 'CSS media query', 'none', 'Media query condition that must match for this source to be selected.'],
        ['width', 'Integer', 'none', 'Width dimension in pixels (when used inside <picture>).'],
        ['height', 'Integer', 'none', 'Height dimension in pixels (when used inside <picture>).'],
      ],
    },
    {
      id: 'code-example',
      title: 'Alternative Media Codecs',
      type: 'code-example',
      codeTitle: 'Audio and Video Source Fallback Chains',
      code: `<!-- Audio fallback with multiple format codecs -->
<audio controls>
  <source src="audio.opus" type="audio/ogg; codecs=opus">
  <source src="audio.mp3" type="audio/mpeg">
  Your browser does not support the audio element.
</audio>

<!-- Video source fallback chain -->
<video controls width="320" height="180">
  <source src="video.webm" type="video/webm">
  <source src="video.mp4" type="video/mp4">
  Your browser does not support the video element.
</video>`,
      demo: {
        title: 'Native Browser Output',
        html: `<audio controls>
  <source src="audio.opus" type="audio/ogg; codecs=opus">
  <source src="audio.mp3" type="audio/mpeg">
  Your browser does not support the audio element.
</audio>
<br><br>
<video controls width="320" height="180">
  <source src="video.webm" type="video/webm">
  <source src="video.mp4" type="video/mp4">
  Your browser does not support the video element.
</video>`,
        interactive: false,
      },
    },
    {
      id: 'accessibility',
      title: 'Performance & MIME Types',
      type: 'list',
      items: [
        'Always include the type attribute with accurate MIME types; otherwise, the browser must fetch the file header to test support, wasting network bandwidth.',
        '<source> elements must appear before any fallback text or track elements inside <video> and <audio>.',
      ],
      callout: {
        type: 'tip',
        title: 'MIME Type Efficiency',
        content: 'Writing `type="video/webm; codecs=vp9"` allows browsers that do not support VP9 to immediately skip to the next source without initiating an HTTP network request.',
      },
    },
  ],
};
