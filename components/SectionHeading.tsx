import React from 'react';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
}

const SectionHeading: React.FC<SectionHeadingProps> = ({ title, subtitle }) => {
  return (
    <div className="mb-8 sm:mb-12 md:mb-16 text-center max-w-3xl mx-auto px-2">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-100 tracking-tight mb-2.5 sm:mb-4">
        {title}
      </h2>
      {subtitle && (
        <p className="text-slate-300 text-sm sm:text-base md:text-lg leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionHeading;
