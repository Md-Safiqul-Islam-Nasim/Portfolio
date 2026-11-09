import React from 'react';

const METRIC_RE = /(~?\d[\d,]*(?:\.\d+)?\s?(?:\+|%|million|countries)?\+?)/gi;

/** Wraps numeric metrics (e.g. "35%", "1,000+", "1 million") in an emphasized span so they're scannable. */
export function highlightMetrics(text: string): React.ReactNode[] {
  const parts = text.split(METRIC_RE);
  return parts.map((part, i) =>
    i % 2 === 1 && /\d/.test(part) && /(\+|%|million|,\d{3})/i.test(part) ? (
      <span key={i} className="font-medium text-fg">
        {part}
      </span>
    ) : (
      <React.Fragment key={i}>{part}</React.Fragment>
    ),
  );
}

