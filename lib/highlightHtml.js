/**
 * Lightweight, zero-dependency client-side HTML / CSS / JS syntax highlighter
 * for real-time code editor synchronization.
 */

function escapeHtml(str) {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function highlightCss(cssText) {
  // Tokenize CSS blocks inside <style>
  const cssRegex = /(\/\*[\s\S]*?\*\/)|([^{};:]+)(?=\{)|([a-zA-Z-]+)(?=\s*:)|(:\s*)([^;{}]+)(;?)|([{}])/g;
  let res = '';
  let lastIdx = 0;
  let m;

  while ((m = cssRegex.exec(cssText)) !== null) {
    if (m.index > lastIdx) {
      res += escapeHtml(cssText.substring(lastIdx, m.index));
    }
    const [full, comment, selector, prop, colon, val, semi, brace] = m;
    if (comment) {
      res += `<span class="tok-comment">${escapeHtml(comment)}</span>`;
    } else if (selector) {
      res += `<span class="tok-css-sel">${escapeHtml(selector)}</span>`;
    } else if (prop) {
      res += `<span class="tok-css-prop">${escapeHtml(prop)}</span>`;
    } else if (colon) {
      res += `<span class="tok-punct">:</span> <span class="tok-css-val">${escapeHtml(val.trim())}</span>${semi ? '<span class="tok-punct">;</span>' : ''}`;
    } else if (brace) {
      res += `<span class="tok-punct">${escapeHtml(brace)}</span>`;
    }
    lastIdx = cssRegex.lastIndex;
    if (cssRegex.lastIndex === m.index) cssRegex.lastIndex++;
  }

  if (lastIdx < cssText.length) {
    res += escapeHtml(cssText.substring(lastIdx));
  }
  return res;
}

function highlightJs(jsText) {
  // Tokenize JS blocks inside <script>
  const jsRegex = /(\/\*[\s\S]*?\*\/|\/\/[^\n]*)|("(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|`(?:\\.|[^`\\])*`)|(\b(?:const|let|var|function|return|if|else|for|while|do|switch|case|break|continue|new|this|typeof|instanceof|async|await|try|catch|finally|throw|class|import|export|from|default|true|false|null|undefined)\b)|(\b\d+(?:\.\d+)?\b)|([{}()[\],;])/g;
  let res = '';
  let lastIdx = 0;
  let m;

  while ((m = jsRegex.exec(jsText)) !== null) {
    if (m.index > lastIdx) {
      res += escapeHtml(jsText.substring(lastIdx, m.index));
    }
    const [full, comment, str, kw, num, punct] = m;
    if (comment) {
      res += `<span class="tok-comment">${escapeHtml(comment)}</span>`;
    } else if (str) {
      res += `<span class="tok-js-str">${escapeHtml(str)}</span>`;
    } else if (kw) {
      res += `<span class="tok-js-kw">${escapeHtml(kw)}</span>`;
    } else if (num) {
      res += `<span class="tok-js-num">${escapeHtml(num)}</span>`;
    } else if (punct) {
      res += `<span class="tok-punct">${escapeHtml(punct)}</span>`;
    }
    lastIdx = jsRegex.lastIndex;
    if (jsRegex.lastIndex === m.index) jsRegex.lastIndex++;
  }

  if (lastIdx < jsText.length) {
    res += escapeHtml(jsText.substring(lastIdx));
  }
  return res;
}

export function highlightHtml(code) {
  if (!code) return '';

  // Master regex matching HTML constructs
  const masterRegex = /(<!--[\s\S]*?(?:-->|$))|(<!DOCTYPE[^>]*>)|(<style(?:\s+[^>]*?)?>)([\s\S]*?)(<\/style>|$)|(<script(?:\s+[^>]*?)?>)([\s\S]*?)(<\/script>|$)|(<(?:\/)?)([a-zA-Z0-9:-]+)((?:[^>"']|"[^"]*"|'[^']*')*?)(\/?>|$)|(&[a-zA-Z0-9#]+;)/gi;
  
  let result = '';
  let lastIndex = 0;
  let match;

  while ((match = masterRegex.exec(code)) !== null) {
    if (match.index > lastIndex) {
      result += `<span class="tok-text">${escapeHtml(code.substring(lastIndex, match.index))}</span>`;
    }

    const [
      fullMatch,
      comment,
      doctype,
      styleOpen,
      styleContent,
      styleClose,
      scriptOpen,
      scriptContent,
      scriptClose,
      tagOpen,
      tagName,
      tagAttrs,
      tagClose,
      entity
    ] = match;

    if (comment) {
      result += `<span class="tok-comment">${escapeHtml(comment)}</span>`;
    } else if (doctype) {
      result += `<span class="tok-doctype">${escapeHtml(doctype)}</span>`;
    } else if (styleOpen) {
      result += `<span class="tok-punct">&lt;</span><span class="tok-tag">style</span><span class="tok-punct">&gt;</span>`;
      if (styleContent) {
        result += highlightCss(styleContent);
      }
      if (styleClose) {
        result += `<span class="tok-punct">&lt;/</span><span class="tok-tag">style</span><span class="tok-punct">&gt;</span>`;
      }
    } else if (scriptOpen) {
      result += `<span class="tok-punct">&lt;</span><span class="tok-tag">script</span><span class="tok-punct">&gt;</span>`;
      if (scriptContent) {
        result += highlightJs(scriptContent);
      }
      if (scriptClose) {
        result += `<span class="tok-punct">&lt;/</span><span class="tok-tag">script</span><span class="tok-punct">&gt;</span>`;
      }
    } else if (entity) {
      result += `<span class="tok-entity">${escapeHtml(entity)}</span>`;
    } else if (tagName) {
      result += `<span class="tok-punct">${escapeHtml(tagOpen)}</span>`;
      result += `<span class="tok-tag">${escapeHtml(tagName)}</span>`;

      if (tagAttrs) {
        const attrRegex = /([a-zA-Z0-9_:-]+)(\s*=\s*(?:"([^"]*)"|'([^']*)'|([^\s>]+)))?|(\s+)/g;
        let attrMatch;

        while ((attrMatch = attrRegex.exec(tagAttrs)) !== null) {
          const [fullAttr, attrName, hasVal, dVal, sVal, uVal, whitespace] = attrMatch;

          if (whitespace) {
            result += whitespace;
          } else if (attrName) {
            result += `<span class="tok-attr-name">${escapeHtml(attrName)}</span>`;
            if (hasVal) {
              const eqIdx = fullAttr.indexOf('=');
              const eq = fullAttr.substring(attrName.length, eqIdx + 1);
              result += `<span class="tok-punct">${escapeHtml(eq)}</span>`;
              
              const val = dVal !== undefined ? `"${dVal}"` : sVal !== undefined ? `'${sVal}'` : (uVal || '');
              result += `<span class="tok-attr-val">${escapeHtml(val)}</span>`;
            }
          }
        }
      }

      if (tagClose) {
        result += `<span class="tok-punct">${escapeHtml(tagClose)}</span>`;
      }
    }

    lastIndex = masterRegex.lastIndex;
    if (masterRegex.lastIndex === match.index) {
      masterRegex.lastIndex++;
    }
  }

  if (lastIndex < code.length) {
    result += `<span class="tok-text">${escapeHtml(code.substring(lastIndex))}</span>`;
  }

  return result;
}
