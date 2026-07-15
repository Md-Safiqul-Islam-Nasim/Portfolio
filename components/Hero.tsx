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
    <section id={id} className="min-h-screen flex items-center px-6 pt-24 pb-16 overflow-hidden relative">
      {/* Subtle Background Glow */}
      <div className="absolute top-0 right-[20%] w-[500px] h-[500px] bg-sky-900/20 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-12 lg:gap-8 items-center relative z-10">
        
        {/* Text Side */}
        <div className="space-y-8">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-800 border border-slate-700 text-sky-400 text-sm font-medium">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-sky-500"></span>
            </span>
            Available for new opportunities
          </div>
          
          <h1 className="text-5xl lg:text-7xl font-extrabold tracking-tight text-slate-100 leading-[1.1]">
            Backend <br/><span className="text-sky-500">Software Engineer.</span>
          </h1>
          
          <p className="text-xl text-slate-200 max-w-lg leading-relaxed font-light">
            I architect high-availability systems, optimize databases, and translate complex algorithmic logic into scalable production code.
          </p>

          <div className="flex flex-wrap gap-4 pt-4">
             <a 
              href="#contact" 
              onClick={(e) => scrollToSection(e, '#contact')}
              className="px-6 py-3.5 bg-sky-500 text-white rounded-lg font-semibold hover:bg-sky-600 transition-colors shadow flex items-center gap-2 text-base"
            >
              Get in touch
              <ArrowRight size={18} />
            </a>
            <a 
              href="#projects" 
              onClick={(e) => scrollToSection(e, '#projects')}
              className="px-6 py-3.5 bg-slate-800 border border-slate-700 text-slate-300 rounded-lg font-semibold hover:bg-slate-700 hover:text-white transition-colors shadow flex items-center gap-2 text-base"
            >
              View Projects
            </a>
          </div>
        </div>

        {/* Abstract/Technical Side */}
        <div className="relative hidden lg:block h-full min-h-[500px]">
          <div className="absolute inset-0 bg-[#0f172a] rounded-3xl border border-slate-700 shadow-2xl overflow-hidden flex flex-col">
            
            {/* Terminal Header */}
            <div className="flex items-center gap-2 px-4 py-3 border-b border-slate-800 bg-[#0b1120]">
              <div className="w-3 h-3 rounded-full bg-slate-700"></div>
              <div className="w-3 h-3 rounded-full bg-slate-700"></div>
              <div className="w-3 h-3 rounded-full bg-slate-700"></div>
              <span className="ml-2 text-xs font-mono text-slate-300 uppercase tracking-widest">sys_config.ts</span>
            </div>

            {/* Terminal Body */}
            <div className="p-6 font-mono text-sm text-slate-300 flex-1 relative bg-slate-900/50">
              <div className="flex gap-4">
                <div className="flex flex-col text-slate-600 select-none text-right">
                  <span>1</span><span>2</span><span>3</span><span>4</span><span>5</span>
                  <span>6</span><span>7</span><span>8</span><span>9</span><span>10</span>
                  <span>11</span><span>12</span>
                </div>
                <div className="flex flex-col">
                  <p><span className="text-sky-400">const</span> <span className="text-slate-100 font-semibold">engineer</span> = {'{'}</p>
                  <div className="pl-4 space-y-0.5">
                    <p>name: <span className="text-emerald-400">"{PERSONAL_INFO.name}"</span>,</p>
                    <p>role: <span className="text-emerald-400">"Backend Architect"</span>,</p>
                    <p>skills: [</p>
                    <p className="pl-4 text-emerald-400">"System Design",</p>
                    <p className="pl-4 text-emerald-400">"PHP / Laravel",</p>
                    <p className="pl-4 text-emerald-400">"Distributed Systems",</p>
                    <p className="pl-4 text-emerald-400">"Data Structures & Algos"</p>
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
