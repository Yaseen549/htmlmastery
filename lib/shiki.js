import { getHighlighter } from 'shiki';

let highlighterPromise = null;

async function getShikiInstance() {
  if (!highlighterPromise) {
    highlighterPromise = getHighlighter({
      themes: ['github-dark', 'github-light'],
      langs: ['html', 'css', 'javascript', 'json', 'bash'],
    });
  }
  return highlighterPromise;
}

export async function highlightCode(code, lang = 'html', theme = 'github-dark') {
  try {
    const highlighter = await getShikiInstance();
    const validLang = highlighter.getLoadedLanguages().includes(lang) ? lang : 'html';
    return highlighter.codeToHtml(code, {
      lang: validLang,
      theme,
    });
  } catch (error) {
    console.error('Shiki highlighting failed, using fallback:', error);
    const escaped = code
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;');
    return `<pre class="shiki"><code>${escaped}</code></pre>`;
  }
}
