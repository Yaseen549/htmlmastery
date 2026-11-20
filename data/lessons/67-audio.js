export const audioLesson = {
  slug: 'audio',
  number: '67',
  title: '<audio>',
  category: 'Images & Multimedia',
  subtitle: 'Embeds sound content or audio streams with native playback and volume controls',
  sections: [
    {
      id: 'overview',
      title: 'Overview & Semantic Meaning',
      type: 'text',
      badge: 'Audio Player',
      paragraphs: [
        'The <audio> HTML element is used to embed sound content in documents. It may contain one or more audio sources, represented using the src attribute or the <source> element.',
        'It supports native playback of common web audio formats including MP3 (MPEG Audio Layer III), AAC, Opus, Ogg Vorbis, and uncompressed WAV.',
        'When the controls attribute is present, browsers render their native audio transport toolbar featuring play/pause, scrub bar, elapsed time, and volume mute controls.',
      ],
    },
    {
      id: 'syntax',
      title: 'Formal Syntax',
      type: 'syntax',
      syntax: '<audio controls src="podcast.mp3">\n  <p>Your browser does not support audio playback.</p>\n</audio>',
      syntaxNote: 'Normal element requiring opening and closing tags. Contains <source> tags or fallback text for unsupported browsers.',
    },
    {
      id: 'attributes',
      title: 'Attributes & Properties',
      type: 'attributes-table',
      headers: ['Attribute', 'Type / Values', 'Default', 'Description'],
      rows: [
        ['src', 'URL', 'none', 'URL of the audio file (alternative to child <source> elements).'],
        ['controls', 'Boolean', 'false', 'Renders the browser\'s native audio playback controls.'],
        ['autoplay', 'Boolean', 'false', 'Begins playback automatically when page loads.'],
        ['loop', 'Boolean', 'false', 'Automatically restarts audio from the beginning when it reaches the end.'],
        ['muted', 'Boolean', 'false', 'Mutes audio playback initially.'],
        ['preload', 'none | metadata | auto', 'metadata', 'Preload strategy for the audio stream.'],
      ],
    },
    {
      id: 'code-example',
      title: 'Native Audio Transport',
      type: 'code-example',
      codeTitle: 'Audio Player with Controls Toolbar',
      code: `<!-- Standard Audio Player with controls -->
<audio controls>
  <source src="audio.mp3" type="audio/mpeg">
  <source src="audio.ogg" type="audio/ogg">
  <p>Your browser does not support the audio element.</p>
</audio>`,
      demo: {
        title: 'Native Browser Output',
        html: `<audio controls>
  <source src="audio.mp3" type="audio/mpeg">
  <source src="audio.ogg" type="audio/ogg">
  <p>Your browser does not support the audio element.</p>
</audio>`,
        interactive: false,
      },
    },
    {
      id: 'accessibility',
      title: 'Audio Transcripts & Accessibility',
      type: 'list',
      items: [
        'Always provide a text transcript or link to written notes adjacent to audio players for deaf users and search engine indexing.',
        'Never autoplay loud background audio on page load without explicit user action.',
      ],
      callout: {
        type: 'tip',
        title: 'Transcripts for SEO',
        content: 'Search engine crawlers cannot listen to audio files. Placing an HTML transcript on the page unlocks full search indexability for podcasts and interviews.',
      },
    },
  ],
};
