import React from 'react';

export default function EducationalTable({
  headers = [],
  rows = [],
  caption = null,
  highlightCol = 0,
}) {
  return (
    <div className="my-6 overflow-hidden rounded-xl border border-zinc-200 bg-white shadow-xs dark:border-zinc-800 dark:bg-surface-darkSurface">
      <div className="overflow-x-auto">
        <table className="w-full text-left text-sm">
          {caption && (
            <caption className="p-3 text-left text-xs font-medium text-zinc-500 dark:text-zinc-400">
              {caption}
            </caption>
          )}
          <thead className="border-b border-brand-200 bg-brand-50/80 text-xs font-semibold uppercase tracking-wider text-brand-900 dark:border-brand-900/50 dark:bg-brand-950/40 dark:text-brand-300">
            <tr>
              {headers.map((header, idx) => (
                <th key={idx} scope="col" className="px-5 py-3.5">
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-zinc-200/80 dark:divide-zinc-800/80">
            {rows.map((row, rIdx) => (
              <tr
                key={rIdx}
                className={
                  rIdx % 2 === 0
                    ? 'bg-white hover:bg-orange-50/40 dark:bg-zinc-900/40 dark:hover:bg-zinc-800/50 transition-colors'
                    : 'bg-zinc-50/60 hover:bg-orange-50/40 dark:bg-zinc-900/80 dark:hover:bg-zinc-800/50 transition-colors'
                }
              >
                {row.map((cell, cIdx) => (
                  <td
                    key={cIdx}
                    className={`px-5 py-3.5 leading-relaxed ${
                      cIdx === highlightCol
                        ? 'font-medium font-mono text-brand-700 dark:text-brand-400'
                        : 'text-zinc-700 dark:text-zinc-300'
                    }`}
                  >
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
