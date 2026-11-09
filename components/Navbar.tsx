import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Download, Menu, X } from 'lucide-react';
import { NAV_LINKS, PERSONAL_INFO, SOCIALS } from '../constants';
import { GithubIcon, LinkedinIcon } from './ui/BrandIcons';

interface NavbarProps {
  activeSection: string;
}

export const Monogram: React.FC<{ className?: string }> = ({ className = '' }) => (
  <span
    className={`relative inline-flex h-9 w-9 items-center justify-center rounded-xl bg-ink-2 text-[13px] font-semibold tracking-tight text-fg ${className}`}
  >
    <span aria-hidden className="gradient-border" />
    {PERSONAL_INFO.monogram}
  </span>
);

const Navbar: React.FC<NavbarProps> = ({ activeSection }) => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false);
    const onResize = () => window.innerWidth >= 1024 && setOpen(false);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('keydown', onKey);
    window.addEventListener('resize', onResize);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('keydown', onKey);
      window.removeEventListener('resize', onResize);
    };
  }, []);

  // Lock body scroll while the mobile menu is open
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 flex justify-center px-3 pt-3 sm:px-5 sm:pt-4">
        <nav
          aria-label="Primary"
          className={`flex w-full max-w-6xl items-center justify-between rounded-full px-2.5 py-2 transition-all duration-500 sm:px-3 ${
            scrolled || open ? 'glass shadow-[0_10px_40px_-12px_rgba(0,0,0,0.6)]' : 'border border-transparent'
          }`}
        >
          <a href="#home" className="flex items-center gap-3 rounded-full pr-3" aria-label="Back to top">
            <Monogram />
            <span className="hidden text-sm font-medium tracking-tight text-fg sm:block">
              {PERSONAL_INFO.shortName}
              <span className="text-faint"> / backend engineer</span>
            </span>
          </a>

          <ul className="hidden items-center gap-1 lg:flex">
            {NAV_LINKS.map((link) => {
              const active = activeSection === link.id;
              return (
                <li key={link.id}>
                  <a
                    href={`#${link.id}`}
                    aria-current={active ? 'page' : undefined}
                    className={`relative block rounded-full px-4 py-2 text-sm transition-colors duration-300 ${
                      active ? 'text-fg' : 'text-muted hover:text-fg'
                    }`}
                  >
                    {active && (
                      <motion.span
                        layoutId="nav-pill"
                        className="absolute inset-0 rounded-full border border-white/10 bg-white/[0.07]"
                        transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                      />
                    )}
                    <span className="relative">{link.name}</span>
                  </a>
                </li>
              );
            })}
          </ul>

          <div className="flex items-center gap-2">
            <a
              href={PERSONAL_INFO.resume}
              download={PERSONAL_INFO.resumeFileName}
              className="hidden items-center gap-2 rounded-full bg-fg px-4 py-2 text-sm font-medium text-ink transition-colors hover:bg-white sm:inline-flex"
            >
              <Download size={14} /> Resume
            </a>
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-label={open ? 'Close menu' : 'Open menu'}
              aria-expanded={open}
              aria-controls="mobile-menu"
              className="icon-btn lg:hidden"
            >
              {open ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </nav>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 flex flex-col bg-ink/95 px-6 pt-28 pb-10 backdrop-blur-2xl lg:hidden"
          >
            <ul className="flex flex-col gap-1">
              {NAV_LINKS.map((link, i) => (
                <motion.li
                  key={link.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.05 + i * 0.05, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                >
                  <a
                    href={`#${link.id}`}
                    onClick={() => setOpen(false)}
                    className={`flex items-baseline gap-4 border-b border-white/[0.06] py-4 text-3xl font-medium tracking-tight ${
                      activeSection === link.id ? 'text-fg' : 'text-muted'
                    }`}
                  >
                    <span className="font-mono text-xs text-electric-soft">0{i + 1}</span>
                    {link.name}
                  </a>
                </motion.li>
              ))}
            </ul>
            <div className="mt-auto flex items-center gap-3">
              <a href={PERSONAL_INFO.resume} download={PERSONAL_INFO.resumeFileName} className="btn-primary flex-1">
                <Download size={16} /> Download Resume
              </a>
              <a href={SOCIALS.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub profile" className="icon-btn h-12 w-12">
                <GithubIcon />
              </a>
              <a href={SOCIALS.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn profile" className="icon-btn h-12 w-12">
                <LinkedinIcon />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
