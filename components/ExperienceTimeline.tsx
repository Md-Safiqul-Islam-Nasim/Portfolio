import React from 'react';
import { EXPERIENCES } from '../constants';
import SectionHeading from './SectionHeading';

const ExperienceTimeline: React.FC<{ id: string }> = ({ id }) => {
  return (
    <section id={id} className="py-12 sm:py-16 md:py-24 px-4 sm:px-6 lg:px-8 border-b border-slate-800">
      <div className="max-w-5xl mx-auto">
        <SectionHeading 
          title="Professional Journey" 
          subtitle="Experience building high-performance systems and managing diverse workflows."
        />

        <div className="mt-10 sm:mt-16">
          {EXPERIENCES.map((exp, idx) => {
            const isLast = idx === EXPERIENCES.length - 1;
            const isInternship = exp.isInternship === true;
            return (
              <div key={idx} className="relative pl-6 sm:pl-8 md:pl-0">
                
                <div className={`md:grid md:grid-cols-5 md:gap-8 items-start relative ${isLast ? 'mb-0' : isInternship ? 'mb-6 sm:mb-10' : 'mb-10 sm:mb-16'}`}>
                  
                  {/* Desktop Date Column */}
                  <div className="hidden md:block md:col-span-1 pt-1.5 text-right">
                    <span className={`font-bold text-xs sm:text-sm tracking-wider uppercase ${isInternship ? 'text-slate-400' : 'text-slate-300'}`}>
                      {exp.period}
                    </span>
                    {exp.location && (
                      <p className="text-slate-500 text-[10px] mt-1 leading-tight">{exp.location}</p>
                    )}
                  </div>

                  {/* Vertical Line & Dot (Desktop) */}
                  <div className="hidden md:flex flex-col items-center absolute left-[20%] top-2 bottom-0 -ml-[6px]">
                    <div className={`w-3 h-3 rounded-full ring-4 ring-slate-900 z-10 relative ${
                      isInternship 
                        ? 'bg-slate-600 shadow-none' 
                        : 'bg-sky-500 shadow-[0_0_15px_rgba(14,165,233,0.5)]'
                    }`}></div>
                    {!isLast && <div className="w-px h-full bg-slate-800 mt-2"></div>}
                  </div>

                  {/* Mobile Line & Dot */}
                  <div className="md:hidden absolute left-0 top-2 bottom-0 flex flex-col items-center">
                     <div className={`w-3 h-3 rounded-full ring-4 ring-slate-900 z-10 relative ${
                      isInternship 
                        ? 'bg-slate-600 shadow-none' 
                        : 'bg-sky-500 shadow-[0_0_15px_rgba(14,165,233,0.5)]'
                    }`}></div>
                     {!isLast && <div className="w-px h-full bg-slate-800 mt-2"></div>}
                  </div>

                  {/* Content Column */}
                  <div className="md:col-span-4 md:pl-10">
                    <div className={`bg-slate-900 rounded-2xl border transition-all shadow-md ${
                      isInternship 
                        ? 'p-4 sm:p-5 border-slate-800/60 hover:border-slate-700/80 opacity-90 hover:opacity-100' 
                        : 'p-5 sm:p-8 border-slate-800 hover:border-slate-700 hover:bg-slate-800/90'
                    }`}>
                      <div className={`${isInternship ? 'mb-3 sm:mb-4' : 'mb-4 sm:mb-6'}`}>
                        <div className="flex flex-wrap items-center gap-2 mb-1">
                          <h3 className={`font-bold text-slate-100 tracking-tight ${isInternship ? 'text-base sm:text-lg' : 'text-lg sm:text-xl'}`}>
                            {exp.role}
                          </h3>
                          {isInternship && (
                            <span className="px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider bg-slate-800 text-slate-400 border border-slate-700 rounded-full">
                              Internship
                            </span>
                          )}
                        </div>
                        <div className="flex flex-wrap items-center gap-x-2 gap-y-1 mt-1">
                          <span className={`font-semibold text-sm sm:text-base ${isInternship ? 'text-slate-300' : 'text-sky-400'}`}>
                            {exp.company}
                          </span>
                          <span className="md:hidden text-slate-300 font-bold text-[11px] uppercase tracking-wider ml-1 bg-slate-800 px-2 py-0.5 rounded border border-slate-700">{exp.period}</span>
                        </div>
                        {exp.location && (
                          <p className="md:hidden text-slate-500 text-[11px] mt-0.5">{exp.location}</p>
                        )}
                      </div>

                      <ul className={`space-y-2 ${isInternship ? 'mb-3 sm:mb-4' : 'mb-4 sm:mb-6'}`}>
                        {exp.description.map((item, i) => (
                          <li key={i} className={`flex gap-3 leading-relaxed ${isInternship ? 'text-slate-400 text-xs sm:text-sm' : 'text-slate-200 text-sm sm:text-base'}`}>
                            <span className={`mt-0.5 font-bold ${isInternship ? 'text-slate-600' : 'text-sky-500'}`}>•</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>

                      <div className="flex flex-wrap gap-1.5 sm:gap-2 pt-3 border-t border-slate-800">
                        {exp.tech.map((tag, i) => (
                          <span key={i} className="px-2.5 py-1 bg-slate-950 text-slate-400 text-xs font-semibold rounded-lg border border-slate-800">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ExperienceTimeline;
