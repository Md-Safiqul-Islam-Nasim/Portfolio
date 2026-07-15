import React from 'react';
import { EXPERIENCES } from '../constants';
import SectionHeading from './SectionHeading';

const ExperienceTimeline: React.FC<{ id: string }> = ({ id }) => {
  return (
    <section id={id} className="py-24 px-6 border-b border-slate-800">
      <div className="max-w-5xl mx-auto">
        <SectionHeading 
          title="Professional Journey" 
          subtitle="Experience building high-performance systems and managing diverse workflows."
        />

        <div className="mt-16">
          {EXPERIENCES.map((exp, idx) => (
            <div key={idx} className="relative pl-8 md:pl-0">
              
              <div className="md:grid md:grid-cols-5 md:gap-8 items-start mb-16 relative">
                
                {/* Desktop Date Column */}
                <div className="hidden md:block md:col-span-1 pt-1.5 text-right">
                  <span className="text-slate-200 font-bold text-sm tracking-wider uppercase">{exp.period}</span>
                </div>

                {/* Vertical Line & Dot (Desktop) */}
                <div className="hidden md:flex flex-col items-center absolute left-[20%] top-2 bottom-[-4rem] -ml-[5px]">
                  <div className="w-3 h-3 rounded-full bg-sky-500 ring-4 ring-slate-900 z-10 relative shadow-[0_0_15px_rgba(14,165,233,0.5)]"></div>
                  <div className="w-px h-full bg-slate-800 mt-2"></div>
                </div>

                {/* Mobile Line & Dot */}
                <div className="md:hidden absolute left-0 top-2 bottom-[-4rem] flex flex-col items-center">
                   <div className="w-3 h-3 rounded-full bg-sky-500 ring-4 ring-slate-900 z-10 relative shadow-[0_0_15px_rgba(14,165,233,0.5)]"></div>
                   <div className="w-px h-full bg-slate-800 mt-2"></div>
                </div>

                {/* Content Column */}
                <div className="md:col-span-4 md:pl-10">
                  <div className="bg-slate-900 p-8 rounded-2xl border border-slate-800 hover:border-slate-700 hover:bg-slate-800 transition-colors">
                    <div className="mb-6">
                      <h3 className="text-xl font-bold text-slate-100 tracking-tight">
                        {exp.role}
                      </h3>
                      <div className="flex flex-wrap items-center gap-x-2 gap-y-1 mt-1">
                        <span className="font-semibold text-sky-400">{exp.company}</span>
                        <span className="md:hidden text-slate-300 font-bold text-xs uppercase tracking-wider ml-2">{exp.period}</span>
                      </div>
                    </div>

                    <ul className="space-y-3 mb-6">
                      {exp.description.map((item, i) => (
                        <li key={i} className="flex gap-4 text-slate-200 text-base leading-relaxed">
                          <span className="text-sky-500 mt-0.5 font-bold">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-800">
                      {exp.tech.map((tag, i) => (
                        <span key={i} className="px-3 py-1 bg-slate-950 text-slate-300 text-xs font-semibold rounded-lg border border-slate-800">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceTimeline;
