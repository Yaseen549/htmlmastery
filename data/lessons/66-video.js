export const videoLesson = {
  slug: 'video',
  number: '66',
  title: '<video>',
  category: 'Images & Multimedia',
  subtitle: 'Embeds a native media player supporting video playback, captions, tracks, and native controls',
  sections: [
    {
      id: 'overview',
      title: 'Overview & Semantic Meaning',
      type: 'text',
      badge: 'Video Player',
      paragraphs: [
        'The <video> HTML element embeds a media player which supports video playback into the document. It was introduced in HTML5 to eliminate the need for third-party browser plugins like Adobe Flash.',
        'It supports multiple video codecs natively across browsers (such as VP9/AV1 in WebM and H.264/H.265 in MP4 containers).',
        'Built-in playback features include transport controls (play, pause, seek, volume, full-screen), subtitle tracks via <track>, posters, loop, muted autoplay, and picture-in-picture.',
      ],
    },
    {
      id: 'syntax',
      title: 'Formal Syntax',
      type: 'syntax',
      syntax: '<video src="movie.mp4" controls width="640" height="360" poster="thumb.jpg">\n  <track src="subs_en.vtt" kind="subtitles" srclang="en" label="English">\n</video>',
      syntaxNote: 'Normal element requiring opening and closing tags. Contains <source> and <track> elements, followed by fallback text.',
    },
    {
      id: 'attributes',
      title: 'Attributes & Properties',
      type: 'attributes-table',
      headers: ['Attribute', 'Type / Values', 'Default', 'Description'],
      rows: [
        ['src', 'URL', 'none', 'Direct URL of the video file (alternative to child <source> elements).'],
        ['controls', 'Boolean', 'false', 'Displays the browser\'s default playback interface (play, seek, volume, fullscreen).'],
        ['autoplay', 'Boolean', 'false', 'Automatically begins playback (modern browsers require muted for autoplay).'],
        ['muted', 'Boolean', 'false', 'Silences audio output by default.'],
        ['loop', 'Boolean', 'false', 'Automatically restarts video playback from beginning upon reaching the end.'],
        ['poster', 'URL', 'none', 'Image displayed before playback starts or while downloading.'],
        ['preload', 'none | metadata | auto', 'metadata', 'Hints how much video data to preload before user initiates playback.'],
        ['playsinline', 'Boolean', 'false', 'Plays video inline on mobile devices rather than forcing fullscreen modal.'],
      ],
    },
    {
      id: 'code-example',
      title: 'Native Video Player Controls',
      type: 'code-example',
      codeTitle: 'Video Player with Controls and Poster Frame',
      code: `<!-- Native HTML5 Video Player with controls -->
<video 
  controls 
  width="360" 
  height="200"
  poster="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='360' height='200'%3E%3Crect width='360' height='200' fill='%231f2937'/%3E%3Cpolygon points='160,80 160,120 200,100' fill='%23f97316'/%3E%3Ctext x='50%25' y='150' fill='%239ca3af' text-anchor='middle' font-family='sans-serif' font-size='14'%3EVideo Poster Frame%3C/text%3E%3C/svg%3E"
>
  <source src="sample.mp4" type="video/mp4">
  <source src="sample.webm" type="video/webm">
  <p>Your browser does not support HTML5 video.</p>
</video>`,
      demo: {
        title: 'Native Browser Output',
        html: `<video 
  controls 
  width="360" 
  height="200"
  poster="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='360' height='200'%3E%3Crect width='360' height='200' fill='%231f2937'/%3E%3Cpolygon points='160,80 160,120 200,100' fill='%23f97316'/%3E%3Ctext x='50%25' y='150' fill='%239ca3af' text-anchor='middle' font-family='sans-serif' font-size='14'%3EVideo Poster Frame%3C/text%3E%3C/svg%3E"
>
  <source src="sample.mp4" type="video/mp4">
  <source src="sample.webm" type="video/webm">
  <p>Your browser does not support HTML5 video.</p>
</video>`,
        interactive: false,
      },
    },
    {
      id: 'accessibility',
      title: 'Captions and Autoplay Policies',
      type: 'list',
      items: [
        'Always provide subtitles or captions via <track kind="captions"> for deaf or hard-of-hearing users.',
        'Modern browsers block unmuted autoplay to prevent annoying user interruptions; autoplay only works if muted is also present.',
        'Ensure native controls are enabled with controls attribute unless building a fully custom accessible ARIA player interface.',
      ],
      callout: {
        type: 'warning',
        title: 'Autoplay Restrictions',
        content: 'Writing `<video autoplay>` will fail in all modern browsers due to media autoplay policies unless you also include the `muted` attribute: `<video autoplay muted playsinline>`.',
      },
    },
  ],
};
