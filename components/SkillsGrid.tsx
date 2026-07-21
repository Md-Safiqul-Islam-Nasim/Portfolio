import React from 'react';
import { Database, Code2, Server, Monitor, Wrench } from 'lucide-react';
import { SKILL_CATEGORIES } from '../constants';
import SectionHeading from './SectionHeading';

const iconMap: Record<string, any> = {
  database: Database,
  code: Code2,
  server: Server,
  monitor: Monitor,
  wrench: Wrench,
};

const SkillsGrid: React.FC<{ id: string }> = ({ id }) => {
  return (
    <section id={id} className="py-12 sm:py-16 md:py-24 px-4 sm:px-6 lg:px-10 border-b border-slate-800 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-1/2 left-1/4 w-72 sm:w-96 h-72 sm:h-96 bg-sky-500/10 rounded-full blur-[80px] sm:blur-[100px] pointer-events-none -translate-y-1/2"></div>
      <div className="absolute top-1/4 right-1/4 w-60 sm:w-80 h-60 sm:h-80 bg-indigo-500/10 rounded-full blur-[80px] sm:blur-[100px] pointer-events-none"></div>

      <div className="max-w-[1650px] mx-auto relative z-10">
        <SectionHeading 
          title="Technical Arsenal" 
          subtitle="Mastery in backend architecture, algorithm design, and full-stack development."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 sm:gap-6 lg:gap-8 mt-10 sm:mt-16">
          {SKILL_CATEGORIES.map((category, idx) => {
            const Icon = iconMap[category.icon] || Code2;
            return (
              <div 
                key={idx} 
                className="group relative bg-slate-800/30 backdrop-blur-md p-5 sm:p-6 lg:p-8 rounded-2xl border border-slate-700/50 hover:border-sky-400/40 hover:bg-slate-800/80 transition-all duration-500 transform hover:-translate-y-1 hover:shadow-2xl hover:shadow-sky-900/20"
              >
                {/* Top highlight line */}
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-sky-500/0 to-transparent group-hover:via-sky-500/50 transition-all duration-500 rounded-t-2xl"></div>
                
                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-sky-950/40 border border-sky-800/40 text-sky-400 rounded-xl flex items-center justify-center mb-4 sm:mb-6 shadow-inner group-hover:scale-110 group-hover:bg-sky-500 group-hover:text-white transition-all duration-500">
                  <Icon size={24} strokeWidth={1.5} />
                </div>
                
                <h3 className="text-lg sm:text-xl font-bold text-slate-100 mb-4 sm:mb-6 tracking-tight group-hover:text-sky-400 transition-colors duration-300">{category.title}</h3>

                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, i) => (
                    <span 
                      key={i} 
                      className="px-2.5 sm:px-3 py-1 sm:py-1.5 bg-slate-800/60 text-slate-300 border border-slate-700/50 rounded-lg text-xs sm:text-sm font-semibold tracking-wide hover:bg-sky-500/20 hover:text-sky-300 hover:border-sky-500/50 transition-all duration-300 cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SkillsGrid;
