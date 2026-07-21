import React from 'react';
import { GraduationCap, Calendar, MapPin } from 'lucide-react';
import { EDUCATION } from '../constants';
import SectionHeading from './SectionHeading';

const Education: React.FC<{ id: string }> = ({ id }) => {
  return (
    <section id={id} className="py-12 sm:py-16 md:py-24 px-4 sm:px-6 lg:px-8 border-b border-slate-800">
      <div className="max-w-7xl mx-auto">
        <SectionHeading 
          title="Education & Credentials" 
          subtitle="Academic qualifications and foundational engineering degree."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8 sm:mt-12">
          {EDUCATION.map((edu, idx) => (
            <div 
              key={idx}
              className="bg-slate-900 p-6 sm:p-8 rounded-2xl border border-slate-800 hover:border-sky-500/40 hover:bg-slate-800/90 transition-all duration-300 flex flex-col justify-between shadow-lg group relative overflow-hidden"
            >
              {/* Subtle accent gradient on hover */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-sky-500/0 to-transparent group-hover:via-sky-500/60 transition-all duration-500 rounded-t-2xl"></div>

              <div>
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-sky-950/60 border border-sky-800/50 text-sky-400 flex items-center justify-center shrink-0 shadow-inner group-hover:scale-105 group-hover:bg-sky-500 group-hover:text-white transition-all duration-300">
                    <GraduationCap size={24} />
                  </div>
                  <div className="flex items-center gap-1.5 px-3 py-1 bg-slate-950 border border-slate-800 text-sky-400 rounded-full text-xs font-semibold tracking-wide">
                    <Calendar size={13} />
                    <span>{edu.period}</span>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-slate-100 group-hover:text-sky-400 transition-colors mb-1.5 leading-snug">
                  {edu.degree}
                </h3>
                <h4 className="text-base font-semibold text-slate-300 mb-3">
                  {edu.institution}
                </h4>

                {edu.description && (
                  <p className="text-sm text-slate-400 leading-relaxed mb-6">
                    {edu.description}
                  </p>
                )}
              </div>

              <div className="flex items-center gap-2 pt-4 border-t border-slate-800/80 text-xs text-slate-400 font-medium">
                <MapPin size={14} className="text-sky-500" />
                <span>{edu.location}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
