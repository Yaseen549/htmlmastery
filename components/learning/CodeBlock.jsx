'use client';

import React, { useState } from 'react';
import { Check, Copy, Terminal } from 'lucide-react';

export default function CodeBlock({
  code,
  highlightedHtml,
  language = 'html',
  title = null,
}) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy code: ', err);
    }
  };

  return (
    <div className="group relative my-5 overflow-hidden rounded-xl border border-zinc-700/60 bg-[#0d1117] shadow-lg">
      {/* Code Header Bar */}
      <div className="flex items-center justify-between border-b border-zinc-800 bg-[#161b22] px-4 py-2.5 text-xs text-zinc-400">
        <div className="flex items-center space-x-2">
          <Terminal className="h-3.5 w-3.5 text-brand-400" />
          <span className="font-mono uppercase tracking-wider text-zinc-300">
            {title || language}
          </span>
        </div>
        <button
          onClick={handleCopy}
          aria-label="Copy code to clipboard"
          className="flex items-center space-x-1.5 rounded-md px-2.5 py-1 text-xs font-medium text-zinc-400 transition hover:bg-zinc-800 hover:text-white focus:outline-hidden focus:ring-1 focus:ring-brand-500"
        >
          {copied ? (
            <>
              <Check className="h-3.5 w-3.5 text-emerald-400" />
              <span className="text-emerald-400">Copied!</span>
            </>
          ) : (
            <>
              <Copy className="h-3.5 w-3.5" />
              <span>Copy</span>
            </>
          )}
        </button>
      </div>

      {/* Code Body */}
      <div className="overflow-x-auto p-4 text-sm leading-relaxed font-mono">
        {highlightedHtml ? (
          <div
            dangerouslySetInnerHTML={{ __html: highlightedHtml }}
            className="[&_pre]:!bg-transparent [&_pre]:!m-0 [&_pre]:!p-0 [&_code]:!font-mono [&_code]:!text-[13.5px]"
          />
        ) : (
          <pre className="text-zinc-200">
            <code>{code}</code>
          </pre>
        )}
      </div>
    </div>
  );
}
