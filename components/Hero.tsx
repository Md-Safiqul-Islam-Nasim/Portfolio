import React from 'react';
import { ArrowRight, Server, Database, Code2 } from 'lucide-react';
import { PERSONAL_INFO } from '../constants';

const Hero: React.FC<{ id: string }> = ({ id }) => {
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const elem = document.getElementById(targetId);
    if (elem) {
      const yOffset = -64; 
      const y = elem.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <section id={id} className="min-h-[calc(100vh-4rem)] flex items-center px-4 sm:px-6 lg:px-8 pt-20 sm:pt-28 pb-12 sm:pb-16 md:pb-24 overflow-hidden relative">
      {/* Subtle Background Glow */}
      <div className="absolute top-0 right-[10%] sm:right-[20%] w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] bg-sky-900/20 blur-[80px] sm:blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-10 lg:gap-8 items-center relative z-10">
        
        {/* Text Side */}
        <div className="space-y-6 sm:space-y-8">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-800/80 border border-slate-700/80 text-sky-400 text-xs sm:text-sm font-medium">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-sky-500"></span>
            </span>
            Available for new opportunities
          </div>
          
          <h1 className="text-3xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold tracking-tight text-slate-100 leading-[1.15] sm:leading-[1.1]">
            Backend <br className="hidden sm:inline"/><span className="text-sky-500">Software Engineer.</span>
          </h1>
          
          <p className="text-base sm:text-lg lg:text-xl text-slate-200 max-w-lg leading-relaxed font-light">
            I architect high-availability systems, optimize databases, and translate complex algorithmic logic into scalable production code.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-2 sm:pt-4">
             <a 
              href="#contact" 
              onClick={(e) => scrollToSection(e, '#contact')}
              className="w-full sm:w-auto px-6 py-3.5 bg-sky-500 text-white rounded-xl font-semibold hover:bg-sky-600 transition-all shadow-lg shadow-sky-500/20 flex items-center justify-center gap-2 text-base"
            >
              Get in touch
              <ArrowRight size={18} />
            </a>
            <a 
              href="#projects" 
              onClick={(e) => scrollToSection(e, '#projects')}
              className="w-full sm:w-auto px-6 py-3.5 bg-slate-800/80 border border-slate-700 text-slate-200 rounded-xl font-semibold hover:bg-slate-700 hover:text-white transition-all shadow flex items-center justify-center gap-2 text-base"
            >
              View Projects
            </a>
          </div>
        </div>

        {/* Abstract/Technical Side */}
        <div className="w-full mt-6 lg:mt-0">
          <div className="w-full bg-[#0f172a] rounded-2xl sm:rounded-3xl border border-slate-700/80 shadow-2xl overflow-hidden flex flex-col">
            
            {/* Terminal Header */}
            <div className="flex items-center gap-2 px-4 py-3 border-b border-slate-800 bg-[#0b1120]">
              <div className="w-3 h-3 rounded-full bg-rose-500/80"></div>
              <div className="w-3 h-3 rounded-full bg-amber-500/80"></div>
              <div className="w-3 h-3 rounded-full bg-emerald-500/80"></div>
              <span className="ml-2 text-xs font-mono text-slate-400 uppercase tracking-widest truncate">sys_config.ts</span>
            </div>

            {/* Terminal Body */}
            <div className="p-4 sm:p-6 font-mono text-xs sm:text-sm text-slate-300 flex-1 relative bg-slate-900/60 overflow-x-auto">
              <div className="flex gap-3 sm:gap-4 min-w-[280px]">
                <div className="flex flex-col text-slate-600 select-none text-right pr-1">
                  <span>1</span><span>2</span><span>3</span><span>4</span><span>5</span>
                  <span>6</span><span>7</span><span>8</span><span>9</span><span>10</span>
                  <span>11</span><span>12</span>
                </div>
                <div className="flex flex-col whitespace-pre">
                  <p><span className="text-sky-400">const</span> <span className="text-slate-100 font-semibold">engineer</span> = {'{'}</p>
                  <div className="pl-3 sm:pl-4 space-y-0.5">
                    <p>name: <span className="text-emerald-400">"{PERSONAL_INFO.name}"</span>,</p>
                    <p>role: <span className="text-emerald-400">"Backend Architect"</span>,</p>
                    <p>skills: [</p>
                    <p className="pl-3 sm:pl-4 text-emerald-400">"System Design",</p>
                    <p className="pl-3 sm:pl-4 text-emerald-400">"PHP / Laravel",</p>
                    <p className="pl-3 sm:pl-4 text-emerald-400">"Distributed Systems",</p>
                    <p className="pl-3 sm:pl-4 text-emerald-400">"Data Structures & Algos"</p>
                    <p>],</p>
                    <p>problemsSolved: <span className="text-amber-400">2400+</span>,</p>
                    <p>location: <span className="text-emerald-400">"{PERSONAL_INFO.location}"</span></p>
                  </div>
                  <p>{'};'}</p>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;
