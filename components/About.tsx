import React from 'react';
import { User, Award, Zap, Code } from 'lucide-react';
import { PERSONAL_INFO } from '../constants';
import SectionHeading from './SectionHeading';

const About: React.FC<{ id: string }> = ({ id }) => {
  const highlights = [
    { icon: <User size={24} />, title: "2+ Years", desc: "Experience" },
    { icon: <Zap size={24} />, title: "40% Boost", desc: "Performance" },
    { icon: <Award size={24} />, title: "2400+", desc: "Problems Solved" },
    { icon: <Code size={24} />, title: "Full-Stack", desc: "Architecture" }
  ];

  return (
    <section id={id} className="py-12 sm:py-16 md:py-24 px-4 sm:px-6 lg:px-8 border-b border-slate-800">
      <div className="max-w-7xl mx-auto">
        <SectionHeading 
          title="About Me" 
          subtitle="Passionate developer turning complex problems into elegant backend solutions."
        />

        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center mt-8 sm:mt-12">
          
          {/* Main Text Content */}
          <div className="lg:col-span-7 space-y-4 sm:space-y-6">
            <h3 className="text-xl sm:text-2xl font-bold text-slate-100 leading-snug">
              Bridging the gap between robust architecture and high performance.
            </h3>
            
            <p className="text-slate-200 text-base sm:text-lg leading-relaxed">
              {PERSONAL_INFO.about}
            </p>
            
            <p className="text-slate-200 text-base sm:text-lg leading-relaxed">
              I have a strong foundation in Data Structures and Algorithms, which allows me to design efficient solutions for complex distributed systems and data-intensive applications.
            </p>
          </div>

          {/* Highlights Grid */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
            {highlights.map((item, i) => (
              <div key={i} className="bg-slate-900 p-4 sm:p-6 rounded-2xl border border-slate-800 flex flex-col items-center text-center gap-3 transition-all hover:border-slate-700 hover:bg-slate-800/90 shadow-sm">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-slate-800 text-sky-400 flex items-center justify-center border border-slate-700 shadow-inner">
                  {item.icon}
                </div>
                <div>
                  <h4 className="font-bold text-slate-200 text-base sm:text-lg">{item.title}</h4>
                  <p className="text-xs sm:text-sm text-slate-300">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default About;
