'use client';

import React, { useRef, useMemo, useEffect } from 'react';
import { highlightHtml } from '../../lib/highlightHtml';

export default function CodeEditor({
  value = '',
  onChange,
  placeholder = 'Type or paste HTML here...',
}) {
  const textareaRef = useRef(null);
  const preRef = useRef(null);
  const gutterRef = useRef(null);

  // Synchronize highlighting efficiently
  const highlightedCode = useMemo(() => {
    return highlightHtml(value);
  }, [value]);

  // Compute line count for gutter
  const lineCount = useMemo(() => {
    return Math.max(1, value.split('\n').length);
  }, [value]);

  // Synchronize scroll positions between textarea, pre, and gutter
  const handleScroll = (e) => {
    const { scrollTop, scrollLeft } = e.target;
    if (preRef.current) {
      preRef.current.scrollTop = scrollTop;
      preRef.current.scrollLeft = scrollLeft;
    }
    if (gutterRef.current) {
      gutterRef.current.scrollTop = scrollTop;
    }
  };

  // Keyboard ergonomics: Tab (indent 2 spaces), Shift+Tab (outdent), Enter (auto-indent)
  const handleKeyDown = (e) => {
    const textarea = textareaRef.current;
    if (!textarea) return;

    if (e.key === 'Tab') {
      e.preventDefault();
      const { selectionStart, selectionEnd, value: currentVal } = textarea;

      if (e.shiftKey) {
        // Shift+Tab: Outdent 2 spaces
        const lineStart = currentVal.lastIndexOf('\n', selectionStart - 1) + 1;
        const linePrefix = currentVal.substring(lineStart, lineStart + 2);
        const spacesToRemove = linePrefix.startsWith('  ')
          ? 2
          : linePrefix.startsWith(' ')
          ? 1
          : 0;

        if (spacesToRemove > 0) {
          const newVal =
            currentVal.substring(0, lineStart) +
            currentVal.substring(lineStart + spacesToRemove);
          onChange(newVal);
          setTimeout(() => {
            if (textareaRef.current) {
              const newPos = Math.max(lineStart, selectionStart - spacesToRemove);
              textareaRef.current.selectionStart = newPos;
              textareaRef.current.selectionEnd = Math.max(lineStart, selectionEnd - spacesToRemove);
            }
          }, 0);
        }
      } else {
        // Tab: Insert 2 spaces
        const newVal =
          currentVal.substring(0, selectionStart) +
          '  ' +
          currentVal.substring(selectionEnd);
        onChange(newVal);
        setTimeout(() => {
          if (textareaRef.current) {
            textareaRef.current.selectionStart = selectionStart + 2;
            textareaRef.current.selectionEnd = selectionStart + 2;
          }
        }, 0);
      }
    } else if (e.key === 'Enter') {
      const { selectionStart, selectionEnd, value: currentVal } = textarea;
      const lineStart = currentVal.lastIndexOf('\n', selectionStart - 1) + 1;
      const currentLine = currentVal.substring(lineStart, selectionStart);
      const match = currentLine.match(/^(\s+)/);

      if (match) {
        e.preventDefault();
        const indent = match[1];
        const newVal =
          currentVal.substring(0, selectionStart) +
          '\n' +
          indent +
          currentVal.substring(selectionEnd);
        onChange(newVal);
        setTimeout(() => {
          if (textareaRef.current) {
            textareaRef.current.selectionStart = selectionStart + 1 + indent.length;
            textareaRef.current.selectionEnd = selectionStart + 1 + indent.length;
          }
        }, 0);
      }
    }
  };

  // Trailing newline handling: Pre collapses empty trailing lines unless an extra newline is appended
  const endsWithNewline = value.endsWith('\n');

  return (
    <div className="relative flex-1 flex w-full h-full overflow-hidden bg-[#0d1117] font-mono text-[13px] sm:text-sm">
      {/* Line Numbers Gutter */}
      <div
        ref={gutterRef}
        aria-hidden="true"
        className="w-11 sm:w-12 shrink-0 select-none overflow-hidden bg-[#090d13] py-3 pr-2.5 text-right font-mono text-[12px] sm:text-[13px] leading-[22px] text-zinc-600 border-r border-zinc-800"
      >
        {Array.from({ length: lineCount }, (_, i) => (
          <div key={i + 1} className="h-[22px]">
            {i + 1}
          </div>
        ))}
      </div>

      {/* Editor Canvas Container */}
      <div className="relative flex-1 h-full w-full overflow-hidden">
        {/* Syntax-Highlighted Render Layer (behind) */}
        <pre
          ref={preRef}
          aria-hidden="true"
          className="absolute inset-0 pointer-events-none select-none overflow-hidden m-0 p-3 pl-4 font-mono text-[13px] sm:text-sm leading-[22px] whitespace-pre tab-size-2"
          dangerouslySetInnerHTML={{
            __html: highlightedCode + (endsWithNewline ? '\n ' : ''),
          }}
        />

        {/* Transparent Interactive Textarea (in front) */}
        <textarea
          ref={textareaRef}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onKeyDown={handleKeyDown}
          onScroll={handleScroll}
          spellCheck="false"
          placeholder={placeholder}
          className="code-editor-textarea absolute inset-0 h-full w-full resize-none overflow-auto border-0 bg-transparent p-3 pl-4 font-mono text-[13px] sm:text-sm leading-[22px] text-transparent caret-brand-500 placeholder-zinc-600 focus:outline-hidden whitespace-pre tab-size-2"
        />
      </div>
    </div>
  );
}
