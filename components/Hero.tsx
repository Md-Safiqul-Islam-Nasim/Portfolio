import React, { useState } from 'react';
import { ArrowRight, Server, Database, Layers, ShieldCheck } from 'lucide-react';
import { PERSONAL_INFO } from '../constants';

const Hero: React.FC<{ id: string }> = ({ id }) => {
  const [activeTab, setActiveTab] = useState<'config' | 'architecture' | 'env'>('config');

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
    <section id={id} className="min-h-[calc(100vh-4rem)] flex items-center px-4 sm:px-6 lg:px-8 pt-20 sm:pt-24 pb-12 sm:pb-16 md:pb-24 overflow-hidden relative">
      {/* Background Subtle Radial Accent */}
      <div className="absolute top-0 right-[15%] w-[400px] sm:w-[600px] h-[400px] sm:h-[600px] bg-sky-500/10 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-12 gap-10 lg:gap-12 items-center relative z-10">
        
        {/* Text Side */}
        <div className="lg:col-span-7 space-y-6 sm:space-y-8">
          <div className="inline-flex items-center gap-2.5 px-3 py-1.5 rounded-full bg-slate-900 border border-slate-800 text-sky-400 text-xs sm:text-sm font-medium">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-sky-500"></span>
            </span>
            <span>Available for backend engineering opportunities</span>
          </div>
          
          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold tracking-tight text-slate-100 leading-[1.12]">
            Backend <br className="hidden sm:inline"/>
            <span className="text-sky-400">Software Engineer.</span>
          </h1>
          
          <p className="text-base sm:text-lg lg:text-xl text-slate-300 max-w-xl leading-relaxed font-light">
            I architect high-availability backend systems, optimize databases for maximum efficiency, and translate complex logic into clean production code.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-2">
             <a 
              href="#contact" 
              onClick={(e) => scrollToSection(e, '#contact')}
              className="w-full sm:w-auto px-6 py-3.5 bg-sky-500 hover:bg-sky-600 text-white rounded-xl font-semibold transition-all shadow-lg shadow-sky-500/20 flex items-center justify-center gap-2 text-base"
            >
              <span>Get in touch</span>
              <ArrowRight size={18} />
            </a>
            <a 
              href="#projects" 
              onClick={(e) => scrollToSection(e, '#projects')}
              className="w-full sm:w-auto px-6 py-3.5 bg-slate-900 border border-slate-800 text-slate-200 rounded-xl font-semibold hover:bg-slate-800 hover:text-white transition-all shadow flex items-center justify-center gap-2 text-base"
            >
              <span>View Projects</span>
            </a>
          </div>

          {/* Core Tech Stack */}
          <div className="pt-4 border-t border-slate-800/80 flex flex-wrap items-center gap-2.5">
            <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">Stack:</span>
            {[
              { name: "Laravel", icon: Server },
              { name: "MySQL / Redis", icon: Database },
              { name: "System Design", icon: Layers },
              { name: "REST API / JWT", icon: ShieldCheck }
            ].map((tech, idx) => {
              const TechIcon = tech.icon;
              return (
                <div key={idx} className="flex items-center gap-1.5 px-3 py-1 bg-slate-900 border border-slate-800 rounded-lg text-xs font-medium text-slate-300">
                  <TechIcon size={13} className="text-sky-400" />
                  <span>{tech.name}</span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Tabbed Technical Code Window */}
        <div className="lg:col-span-5 w-full mt-6 lg:mt-0">
          <div className="w-full bg-[#0b0f19] rounded-2xl sm:rounded-3xl border border-slate-800 shadow-2xl overflow-hidden flex flex-col">
            
            {/* Terminal Header & Tabs */}
            <div className="flex items-center justify-between px-4 py-3 border-b border-slate-800 bg-[#070a12]">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-slate-700"></div>
                <div className="w-3 h-3 rounded-full bg-slate-700"></div>
                <div className="w-3 h-3 rounded-full bg-slate-700"></div>
              </div>

              {/* Tabs */}
              <div className="flex items-center gap-1 bg-slate-900 p-1 rounded-lg border border-slate-800">
                <button
                  onClick={() => setActiveTab('config')}
                  className={`px-2.5 py-1 rounded text-[11px] font-mono transition-colors ${
                    activeTab === 'config' ? 'bg-sky-500/20 text-sky-400 font-semibold' : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  sys_config.ts
                </button>
                <button
                  onClick={() => setActiveTab('architecture')}
                  className={`px-2.5 py-1 rounded text-[11px] font-mono transition-colors ${
                    activeTab === 'architecture' ? 'bg-sky-500/20 text-sky-400 font-semibold' : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  arch.json
                </button>
                <button
                  onClick={() => setActiveTab('env')}
                  className={`px-2.5 py-1 rounded text-[11px] font-mono transition-colors ${
                    activeTab === 'env' ? 'bg-sky-500/20 text-sky-400 font-semibold' : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  stack.env
                </button>
              </div>
            </div>

            {/* Terminal Body */}
            <div className="p-4 sm:p-6 font-mono text-xs sm:text-sm text-slate-300 min-h-[300px] relative bg-[#090d16] overflow-x-auto">
              {activeTab === 'config' && (
                <div className="flex gap-3 sm:gap-4 whitespace-pre min-w-[280px]">
                  <div className="flex flex-col text-slate-600 select-none text-right pr-1">
                    <span>1</span><span>2</span><span>3</span><span>4</span><span>5</span>
                    <span>6</span><span>7</span><span>8</span><span>9</span>
                  </div>
                  <div className="flex flex-col">
                    <p><span className="text-sky-400">const</span> <span className="text-slate-100 font-semibold">engineer</span> = {'{'}</p>
                    <div className="pl-3 sm:pl-4 space-y-0.5">
                      <p>name: <span className="text-emerald-400">"{PERSONAL_INFO.name}"</span>,</p>
                      <p>role: <span className="text-emerald-400">"Backend Architect"</span>,</p>
                      <p>skills: [</p>
                      <p className="pl-3 sm:pl-4 text-emerald-400">"System Design",</p>
                      <p className="pl-3 sm:pl-4 text-emerald-400">"PHP / Laravel",</p>
                      <p className="pl-3 sm:pl-4 text-emerald-400">"Data Structures & Algos"</p>
                      <p>],</p>
                      <p>problemsSolved: <span className="text-amber-400">2400+</span>,</p>
                      <p>location: <span className="text-emerald-400">"{PERSONAL_INFO.location}"</span></p>
                    </div>
                    <p>{'};'}</p>
                  </div>
                </div>
              )}

              {activeTab === 'architecture' && (
                <div className="flex gap-3 sm:gap-4 whitespace-pre min-w-[280px]">
                  <div className="flex flex-col text-slate-600 select-none text-right pr-1">
                    <span>1</span><span>2</span><span>3</span><span>4</span><span>5</span>
                    <span>6</span><span>7</span>
                  </div>
                  <div className="flex flex-col text-slate-300">
                    <p>{'{'}</p>
                    <div className="pl-3 sm:pl-4 space-y-0.5">
                      <p><span className="text-sky-400">"framework"</span>: <span className="text-emerald-400">"Laravel 10 / Filament"</span>,</p>
                      <p><span className="text-sky-400">"database"</span>: <span className="text-emerald-400">"MySQL (Query Optimized)"</span>,</p>
                      <p><span className="text-sky-400">"auth"</span>: <span className="text-emerald-400">"JWT + Multi-Level RBAC"</span>,</p>
                      <p><span className="text-sky-400">"cache"</span>: <span className="text-emerald-400">"Redis Layer"</span>,</p>
                      <p><span className="text-sky-400">"performanceBoost"</span>: <span className="text-amber-400">"40%"</span></p>
                    </div>
                    <p>{'}'}</p>
                  </div>
                </div>
              )}

              {activeTab === 'env' && (
                <div className="flex gap-3 sm:gap-4 whitespace-pre min-w-[280px]">
                  <div className="flex flex-col text-slate-600 select-none text-right pr-1">
                    <span>1</span><span>2</span><span>3</span><span>4</span><span>5</span>
                    <span>6</span>
                  </div>
                  <div className="flex flex-col text-slate-300">
                    <p><span className="text-sky-400">APP_ENV</span>=<span className="text-emerald-400">production</span></p>
                    <p><span className="text-sky-400">DB_CONNECTION</span>=<span className="text-emerald-400">mysql</span></p>
                    <p><span className="text-sky-400">CACHE_DRIVER</span>=<span className="text-emerald-400">redis</span></p>
                    <p><span className="text-sky-400">CODEFORCES_RANK</span>=<span className="text-amber-400">Pupil</span></p>
                    <p><span className="text-sky-400">CODECHEF_RATING</span>=<span className="text-emerald-400">1736 (3-Star)</span></p>
                  </div>
                </div>
              )}
            </div>

            {/* Footer */}
            <div className="px-4 py-2 border-t border-slate-800 bg-[#070a12] flex items-center justify-between text-[11px] font-mono text-slate-400">
              <span>status: active</span>
              <span className="text-sky-400">UTF-8</span>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;

