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
    <section id={id} className="py-24 px-6 border-b border-slate-800">
      <div className="max-w-7xl mx-auto">
        <SectionHeading 
          title="Recognitions" 
          subtitle="Milestones from contests, mentorship roles, and academic excellence."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {ACHIEVEMENTS.map((ach, idx) => {
            const Icon = iconMap[idx % 5] || Medal;
            return (
              <div key={idx} className="bg-slate-900 p-8 rounded-2xl border border-slate-800 hover:border-slate-700 hover:bg-slate-800 transition-colors flex items-start gap-6">
                <div className="w-14 h-14 rounded-xl bg-slate-800 border border-slate-700 text-sky-400 flex items-center justify-center shrink-0 shadow-inner">
                  <Icon size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-slate-100 mb-2 leading-tight">{ach.title}</h4>
                  <p className="text-slate-200 text-sm leading-relaxed">{ach.description}</p>
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
