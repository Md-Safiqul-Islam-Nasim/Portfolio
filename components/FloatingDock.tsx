import React, { useState } from 'react';
import { Home, User, Briefcase, Cpu, Mail, Copy, Check, Github } from 'lucide-react';
import { PERSONAL_INFO } from '../constants';

const FloatingDock: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const elem = document.getElementById(targetId);
    if (elem) {
      const yOffset = -70;
      const y = elem.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    } else if (href === '#home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const dockItems = [
    { name: 'Home', icon: Home, href: '#home' },
    { name: 'About', icon: User, href: '#about' },
    { name: 'Projects', icon: Briefcase, href: '#projects' },
    { name: 'Skills', icon: Cpu, href: '#skills' },
    { name: 'Contact', icon: Mail, href: '#contact' },
  ];

  return (
    <>
      {/* Toast Notification */}
      <div 
        className={`fixed bottom-24 left-1/2 -translate-x-1/2 z-50 transition-all duration-300 pointer-events-none ${
          copied ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}
      >
        <div className="bg-slate-900/90 text-sky-400 border border-sky-500/30 px-4 py-2 rounded-xl shadow-2xl backdrop-blur-md text-xs font-semibold flex items-center gap-2">
          <Check size={14} className="text-emerald-400" />
          <span>Email copied to clipboard!</span>
        </div>
      </div>

      {/* Floating Glass Dock */}
      <nav 
        className="fixed bottom-5 left-1/2 -translate-x-1/2 z-40 bg-slate-950/90 backdrop-blur-md border border-slate-800 rounded-2xl px-3 py-2 shadow-xl flex items-center gap-1.5 sm:gap-2 transition-all duration-200 hover:border-slate-700 max-w-[95vw]"
        aria-label="Quick Navigation Dock"
      >
        {dockItems.map((item) => {
          const Icon = item.icon;
          return (
            <a
              key={item.name}
              href={item.href}
              onClick={(e) => scrollToSection(e, item.href)}
              className="group relative p-2.5 sm:p-3 rounded-xl text-slate-400 hover:text-sky-400 hover:bg-slate-800/80 active:scale-95 transition-all duration-200"
              aria-label={item.name}
            >
              <Icon size={18} className="sm:w-5 sm:h-5 transition-transform group-hover:scale-110" />
              <span className="absolute -top-10 left-1/2 -translate-x-1/2 bg-slate-900 text-slate-200 border border-slate-700/80 text-[10px] font-semibold px-2 py-1 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-200 pointer-events-none whitespace-nowrap shadow-lg">
                {item.name}
              </span>
            </a>
          );
        })}

        <div className="w-px h-6 bg-slate-800 mx-1"></div>

        {/* Copy Email Quick Action */}
        <button
          onClick={handleCopyEmail}
          className="group relative p-2.5 sm:p-3 rounded-xl text-slate-400 hover:text-emerald-400 hover:bg-slate-800/80 active:scale-95 transition-all duration-200"
          aria-label="Copy Email"
        >
          {copied ? <Check size={18} className="text-emerald-400" /> : <Copy size={18} className="transition-transform group-hover:scale-110" />}
          <span className="absolute -top-10 left-1/2 -translate-x-1/2 bg-slate-900 text-slate-200 border border-slate-700/80 text-[10px] font-semibold px-2 py-1 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-200 pointer-events-none whitespace-nowrap shadow-lg">
            {copied ? 'Copied!' : 'Copy Email'}
          </span>
        </button>

        {/* GitHub Link */}
        <a
          href="https://github.com/Md-Safiqul-Islam-Nasim"
          target="_blank"
          rel="noopener noreferrer"
          className="group relative p-2.5 sm:p-3 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800/80 active:scale-95 transition-all duration-200"
          aria-label="GitHub Profile"
        >
          <Github size={18} className="sm:w-5 sm:h-5 transition-transform group-hover:scale-110" />
          <span className="absolute -top-10 left-1/2 -translate-x-1/2 bg-slate-900 text-slate-200 border border-slate-700/80 text-[10px] font-semibold px-2 py-1 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-200 pointer-events-none whitespace-nowrap shadow-lg">
            GitHub
          </span>
        </a>
      </nav>
    </>
  );
};

export default FloatingDock;
