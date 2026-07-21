import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

interface NavbarProps {
  activeSection: string;
}

const Navbar: React.FC<NavbarProps> = ({ activeSection }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsOpen(false);
      }
    };
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsOpen(false);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleResize);
    window.addEventListener('keydown', handleKeyDown);
    handleScroll();
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Stats', href: '#problem-solving' },
    { name: 'Experience', href: '#experience' },
    { name: 'Education', href: '#education' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsOpen(false);
    
    const targetId = href.replace('#', '');
    const elem = document.getElementById(targetId);
    
    if (elem) {
      const yOffset = -64; // Offset for the fixed top navbar
      const y = elem.getBoundingClientRect().top + window.pageYOffset + yOffset;
      
      window.scrollTo({
        top: y,
        behavior: 'smooth'
      });
    } else if (href === '#home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <>
      <header 
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          scrolled ? 'bg-slate-950/90 backdrop-blur-md shadow-md border-b border-slate-800 py-0' : 'bg-slate-900/90 backdrop-blur-sm py-2'
        }`}
      >
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          <a href="#home" onClick={(e) => handleLinkClick(e, '#home')} className="flex items-center gap-2 group">
            <span className="text-xl font-bold tracking-tight text-white group-hover:text-sky-400 transition-colors">
              Nasim
            </span>
            <span className="w-2 h-2 bg-sky-500 rounded-full shadow-[0_0_8px_rgba(14,165,233,0.8)]"></span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className={`text-sm font-medium transition-colors ${
                    isActive ? 'text-sky-400 font-semibold' : 'text-slate-200 hover:text-white'
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="lg:hidden text-slate-200 hover:text-sky-400 transition-colors p-2 rounded-lg bg-slate-800/60 border border-slate-700/50" 
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
            aria-expanded={isOpen}
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </nav>

        {/* Mobile Menu Dropdown */}
        <div 
          className={`lg:hidden absolute top-full left-0 w-full bg-slate-950/95 backdrop-blur-xl border-b border-slate-800 transition-all duration-300 overflow-y-auto shadow-2xl ${
            isOpen ? 'max-h-[calc(100vh-4rem)] opacity-100 py-4' : 'max-h-0 opacity-0 py-0 overflow-hidden'
          }`}
        >
          <div className="flex flex-col px-4 sm:px-6 space-y-1">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className={`text-base font-medium transition-all px-4 py-3.5 rounded-xl block flex items-center justify-between ${
                    isActive 
                      ? 'bg-sky-500/10 text-sky-400 border border-sky-500/20 font-semibold' 
                      : 'text-slate-200 hover:text-white hover:bg-slate-900'
                  }`}
                >
                  <span>{link.name}</span>
                  {isActive && <span className="w-1.5 h-1.5 rounded-full bg-sky-400"></span>}
                </a>
              );
            })}
          </div>
        </div>
      </header>

      {/* Backdrop for Mobile Menu */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-slate-950/60 backdrop-blur-xs z-40 lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
};

export default Navbar;
