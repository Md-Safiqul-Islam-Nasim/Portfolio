import React from 'react';
import Reveal from './Reveal';

interface SectionHeaderProps {
  index: string;
  eyebrow: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  align?: 'left' | 'center';
  id?: string;
}

/** Clean engineering section header with numbered eyebrow, crisp title, and lede. */
export const SectionHeader: React.FC<SectionHeaderProps> = ({
  index,
  eyebrow,
  title,
  description,
  align = 'left',
  id,
}) => (
  <Reveal className={`mb-12 sm:mb-16 ${align === 'center' ? 'mx-auto max-w-3xl text-center' : 'max-w-3xl'}`}>
    <div className={`mb-4 flex items-center gap-3 ${align === 'center' ? 'justify-center' : ''}`}>
      <span className="inline-flex items-center rounded-md border border-electric/30 bg-electric/10 px-2 py-0.5 font-mono text-[11px] font-medium text-electric-soft">
        {index}
      </span>
      <span className="h-px w-8 bg-white/15" />
      <span className="eyebrow">{eyebrow}</span>
    </div>
    <h2
      id={id}
      className="text-3xl font-semibold leading-[1.12] tracking-[-0.03em] text-fg sm:text-4xl lg:text-[2.75rem]"
    >
      {title}
    </h2>
    {description && <p className="mt-4 text-base leading-relaxed text-muted sm:text-[1.0625rem]">{description}</p>}
  </Reveal>
);

/** Crisp gradient highlight inside headings. */
export const Accent: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <span className="text-gradient">{children}</span>
);

export default SectionHeader;
