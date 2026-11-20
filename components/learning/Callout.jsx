import React from 'react';
import { AlertCircle, AlertTriangle, CheckCircle2, Info, Lightbulb, Sparkles } from 'lucide-react';

const styles = {
  important: {
    container: 'border-brand-300 bg-brand-50/80 text-brand-950 dark:border-brand-800/60 dark:bg-brand-950/40 dark:text-brand-200',
    icon: AlertCircle,
    iconColor: 'text-brand-600 dark:text-brand-400',
    title: 'Important Specification',
  },
  note: {
    container: 'border-brand-200 bg-brand-50/50 text-zinc-900 dark:border-brand-900/40 dark:bg-brand-950/30 dark:text-zinc-200',
    icon: Info,
    iconColor: 'text-brand-600 dark:text-brand-400',
    title: 'Note',
  },
  tip: {
    container: 'border-emerald-300 bg-emerald-50/80 text-emerald-950 dark:border-emerald-800/60 dark:bg-emerald-950/40 dark:text-emerald-200',
    icon: Lightbulb,
    iconColor: 'text-emerald-600 dark:text-emerald-400',
    title: 'Best Practice',
  },
  warning: {
    container: 'border-amber-300 bg-amber-50/80 text-amber-950 dark:border-amber-800/60 dark:bg-amber-950/40 dark:text-amber-200',
    icon: AlertTriangle,
    iconColor: 'text-amber-600 dark:text-amber-400',
    title: 'Warning & Common Pitfalls',
  },
  accessibility: {
    container: 'border-sky-300 bg-sky-50/80 text-sky-950 dark:border-sky-800/60 dark:bg-sky-950/40 dark:text-sky-200',
    icon: CheckCircle2,
    iconColor: 'text-sky-600 dark:text-sky-400',
    title: 'Accessibility & ARIA Guidelines',
  },
  modern: {
    container: 'border-purple-300 bg-purple-50/80 text-purple-950 dark:border-purple-800/60 dark:bg-purple-950/40 dark:text-purple-200',
    icon: Sparkles,
    iconColor: 'text-purple-600 dark:text-purple-400',
    title: 'Modern HTML Living Standard',
  },
};

export default function Callout({
  type = 'note',
  title = null,
  children,
}) {
  const current = styles[type] || styles.note;
  const IconComponent = current.icon;

  return (
    <div
      className={`my-5 flex gap-3.5 rounded-xl border p-4 shadow-xs transition-all ${current.container}`}
    >
      <div className="shrink-0 pt-0.5">
        <IconComponent className={`h-5 w-5 ${current.iconColor}`} />
      </div>
      <div className="flex-1 space-y-1 text-sm leading-relaxed">
        <h5 className="font-semibold">{title || current.title}</h5>
        <div className="opacity-95">{children}</div>
      </div>
    </div>
  );
}
