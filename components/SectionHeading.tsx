import React from 'react';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
}

const SectionHeading: React.FC<SectionHeadingProps> = ({ title, subtitle }) => {
  return (
    <div className="mb-12 md:mb-16 text-center max-w-3xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold text-slate-100 tracking-tight mb-4">
        {title}
      </h2>
      {subtitle && (
        <p className="text-slate-200 text-lg">
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionHeading;
