import React from 'react';
import { PROBLEM_SOLVING } from '../constants';
import SectionHeading from './SectionHeading';

const ProblemSolvingStats: React.FC<{ id: string }> = ({ id }) => {
  return (
    <section id={id} className="py-12 sm:py-16 md:py-24 px-4 sm:px-6 lg:px-8 border-b border-slate-800">
      <div className="max-w-7xl mx-auto">
        <SectionHeading 
          title="The Problem Solver" 
          subtitle="Algorithmic thinking and competitive programming problem solving stats."
        />

        {/* Hero Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mb-8 sm:mb-12 mt-8 sm:mt-12">
          {[
            { label: "Problems Solved", value: "2400+" },
            { label: "Contests Partaken", value: "340+" },
            { label: "Codeforces Rank", value: "Pupil" }
          ].map((stat, i) => (
            <div key={i} className="p-6 sm:p-8 bg-sky-500 rounded-2xl text-center text-white border border-sky-400 shadow-[0_0_30px_-5px_rgba(14,165,233,0.3)]">
              <h4 className="text-sky-100 font-medium text-xs sm:text-sm uppercase tracking-wider mb-2">{stat.label}</h4>
              <p className="text-3xl sm:text-4xl md:text-5xl font-extrabold">{stat.value}</p>
            </div>
          ))}
        </div>

        {/* Platform Breakdown */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {PROBLEM_SOLVING.map((item, idx) => (
            <div 
              key={idx} 
              className="p-5 sm:p-6 bg-slate-900 rounded-2xl border border-slate-800 flex justify-between items-center gap-3 hover:border-slate-700 hover:bg-slate-800/80 transition-all duration-200"
            >
              <div className="min-w-0 flex-1">
                <h5 className="font-bold text-slate-100 text-base sm:text-lg truncate">{item.platform}</h5>
                <p className="text-xs sm:text-sm text-slate-300 font-medium">{item.count} Problems</p>
              </div>
              <div className="text-right shrink-0">
                <span className="inline-block px-3 py-1 bg-slate-950 border border-slate-800 text-sky-400 rounded-full text-xs font-bold uppercase tracking-wider">
                  {item.rank}
                </span>
                {item.maxRating && (
                  <p className="text-xs text-slate-400 mt-1.5 font-medium">Max: <span className="text-slate-200">{item.maxRating}</span></p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemSolvingStats;
