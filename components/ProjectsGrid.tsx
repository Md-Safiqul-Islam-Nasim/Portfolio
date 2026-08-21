import React, { useState } from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { PROJECTS } from '../constants';
import SectionHeading from './SectionHeading';

const ProjectsGrid: React.FC<{ id: string }> = ({ id }) => {
  const [expanded, setExpanded] = useState<Record<number, boolean>>({});

  const toggleExpand = (idx: number) => {
    setExpanded(prev => ({ ...prev, [idx]: !prev[idx] }));
  };

  return (
    <section id={id} className="py-12 sm:py-16 md:py-24 px-4 sm:px-6 lg:px-10 border-b border-slate-800">
      <div className="max-w-[1650px] mx-auto">
        <SectionHeading 
          title="Featured Projects" 
          subtitle="A selection of backend systems and applications I've engineered."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-4 sm:gap-6 mt-8 sm:mt-10">
          {PROJECTS.map((project, idx) => (
            <div 
              key={idx} 
              className="group flex flex-col bg-slate-900 rounded-2xl border border-slate-800 hover:border-slate-700 hover:bg-slate-800/90 transition-all duration-300 overflow-hidden transform hover:-translate-y-1 shadow-md"
            >
              {/* Project image or placeholder */}
              <div className="aspect-video relative overflow-hidden bg-slate-950 border-b border-slate-800">
                {project.image ? (
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-90 group-hover:opacity-100"
                  />
                ) : (
                  /* NDA / no-image fallback: clean system-overview placeholder */
                  <div className="w-full h-full flex flex-col items-center justify-center gap-3 bg-gradient-to-br from-slate-900 to-slate-950 p-6">
                    <div className="flex items-center gap-2">
                      {['Routes', 'Bookings', 'Operators'].map((label, i) => (
                        <div key={i} className="flex flex-col items-center gap-1">
                          <div className="w-10 h-10 rounded-lg bg-slate-800 border border-slate-700 flex items-center justify-center">
                            <div className="w-4 h-4 rounded-sm bg-sky-500/30 border border-sky-500/50"></div>
                          </div>
                          <span className="text-[9px] text-slate-500 font-mono">{label}</span>
                        </div>
                      ))}
                    </div>
                    <div className="flex items-center gap-1 text-slate-600 text-[10px] font-mono">
                      <div className="w-6 h-px bg-slate-700"></div>
                      <span>Multi-country API</span>
                      <div className="w-6 h-px bg-slate-700"></div>
                    </div>
                    <div className="flex gap-2">
                      {['20+', '~1M', 'NDA'].map((label, i) => (
                        <span key={i} className={`text-[10px] font-bold px-2 py-0.5 rounded border ${
                          i === 2 
                            ? 'bg-slate-800 text-slate-500 border-slate-700' 
                            : 'bg-amber-500/10 text-amber-400 border-amber-500/30'
                        }`}>
                          {label}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent opacity-60"></div>
              </div>

              <div className="p-4 sm:p-6 flex flex-col flex-1">
                <div className="flex justify-between items-start gap-2 mb-3 sm:mb-4">
                  <div className="min-w-0 flex-1">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-sky-400 mb-1 block">
                      {project.type}
                    </span>
                    <h3 className="text-lg sm:text-xl font-bold text-slate-100 tracking-tight leading-tight">{project.title}</h3>
                  </div>
                  <div className="flex gap-1.5 sm:gap-2 shrink-0">
                    {project.github && (
                      <a href={project.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub Repository" className="w-8 h-8 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center text-slate-200 hover:bg-sky-500 hover:text-white hover:border-sky-500 transition-colors">
                        <Github size={15} />
                      </a>
                    )}
                    {project.demo && (
                      <a href={project.demo} target="_blank" rel="noopener noreferrer" aria-label="Live Demo" className="w-8 h-8 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center text-slate-200 hover:bg-sky-500 hover:text-white hover:border-sky-500 transition-colors">
                        <ExternalLink size={15} />
                      </a>
                    )}
                  </div>
                </div>

                <div className="space-y-2 mb-4 sm:mb-6 flex-1">
                  {(expanded[idx] ? project.description : project.description.slice(0, 1)).map((point, i) => (
                    <div key={i} className="text-slate-200 text-xs sm:text-sm leading-relaxed flex gap-2">
                      <span className="text-sky-500 mt-0.5 font-bold">•</span> 
                      <span className={!expanded[idx] ? 'line-clamp-2' : ''}>{point}</span>
                    </div>
                  ))}
                  {project.description.length > 1 && (
                    <button 
                      onClick={() => toggleExpand(idx)}
                      className="text-sky-400 hover:text-sky-300 text-[11px] uppercase tracking-wider font-bold mt-2 focus:outline-none transition-colors"
                    >
                      {expanded[idx] ? "- See Less" : "+ See More"}
                    </button>
                  )}
                </div>

                <div className="flex flex-col gap-3 mt-auto">
                  {project.metrics && (
                    <div className="flex flex-wrap gap-x-3 gap-y-1.5 border-t border-slate-800 pt-3">
                      {project.metrics.map((m, i) => (
                        <div key={i} className="flex items-center gap-1.5">
                          <div className="w-1.5 h-1.5 bg-amber-400 rounded-full"></div>
                          <span className="text-xs font-semibold text-amber-400/80">{m}</span>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Neutral tech tags — muted, not competing with blue CTAs */}
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {project.tech.map((t, i) => (
                      <span key={i} className="px-2 py-0.5 bg-slate-800/50 border border-slate-700/40 text-[10px] font-semibold text-slate-400 rounded-md">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsGrid;
