import React from 'react';
import { PROBLEM_SOLVING } from '../constants';
import SectionHeading from './SectionHeading';

const ProblemSolvingStats: React.FC<{ id: string }> = ({ id }) => {
  return (
    <section id={id} className="py-24 px-6 border-b border-slate-800">
      <div className="max-w-7xl mx-auto">
        <SectionHeading 
          title="The Problem Solver" 
          subtitle="Algorithmic thinking is at the core of my development philosophy."
        />

        {/* Hero Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 mt-12">
          {[
            { label: "Problems Solved", value: "2400+" },
            { label: "Contests Partaken", value: "340+" },
            { label: "Codeforces Rank", value: "Pupil" }
          ].map((stat, i) => (
            <div key={i} className="p-8 bg-sky-500 rounded-2xl text-center text-white border border-sky-400 shadow-[0_0_40px_-10px_rgba(14,165,233,0.3)]">
              <h4 className="text-sky-100 font-medium text-sm uppercase tracking-wider mb-2">{stat.label}</h4>
              <p className="text-4xl md:text-5xl font-bold">{stat.value}</p>
            </div>
          ))}
        </div>

        {/* Platform Breakdown */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROBLEM_SOLVING.map((item, idx) => (
            <div key={idx} className="p-6 bg-slate-900 rounded-2xl border border-slate-800 flex justify-between items-center hover:border-slate-700 transition-colors hover:bg-slate-800">
              <div>
                <h5 className="font-bold text-slate-100 text-lg">{item.platform}</h5>
                <p className="text-sm text-slate-200 font-medium">{item.count} Problems</p>
              </div>
              <div className="text-right">
                <span className="inline-block px-3 py-1 bg-slate-950 border border-slate-800 text-sky-400 rounded-full text-xs font-bold uppercase tracking-wider">
                  {item.rank}
                </span>
                {item.maxRating && (
                  <p className="text-xs text-slate-300 mt-2 font-medium">Max: {item.maxRating}</p>
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
