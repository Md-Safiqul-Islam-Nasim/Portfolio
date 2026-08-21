import React from 'react';
import { Medal, Trophy, Users, BookOpen, Star } from 'lucide-react';
import { ACHIEVEMENTS } from '../constants';
import SectionHeading from './SectionHeading';

const iconMap: Record<number, any> = {
  0: Medal,
  1: Trophy,
  2: Users,
  3: BookOpen,
  4: Star,
};

const Achievements: React.FC<{ id: string }> = ({ id }) => {
  return (
    <section id={id} className="py-12 sm:py-16 md:py-24 px-4 sm:px-6 lg:px-8 border-b border-slate-800">
      <div className="max-w-7xl mx-auto">
        <SectionHeading 
          title="Recognitions" 
          subtitle="Milestones from contests, mentorship roles, and academic excellence."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mt-8 sm:mt-12">
          {ACHIEVEMENTS.map((ach, idx) => {
            const Icon = iconMap[idx % 5] || Medal;
            return (
              <div key={idx} className="bg-slate-900 p-5 sm:p-8 rounded-2xl border border-slate-800 hover:border-amber-500/30 hover:bg-slate-800/90 transition-all flex items-start gap-4 sm:gap-6 shadow-sm group">
                <div className="w-11 h-11 sm:w-14 sm:h-14 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-400 flex items-center justify-center shrink-0 shadow-inner group-hover:bg-amber-500/20 group-hover:shadow-[0_0_15px_rgba(245,185,66,0.15)] transition-all">
                  <Icon size={22} className="sm:w-6 sm:h-6" />
                </div>
                <div className="min-w-0 flex-1">
                  <h4 className="text-base sm:text-lg font-bold text-slate-100 mb-1.5 sm:mb-2 leading-tight">{ach.title}</h4>
                  <p className="text-slate-200 text-xs sm:text-sm leading-relaxed">{ach.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
