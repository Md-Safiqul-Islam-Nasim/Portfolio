import React from 'react';
import { ArrowUp } from 'lucide-react';
import { NAV_LINKS, PERSONAL_INFO, SOCIALS } from '../constants';
import { Monogram } from './Navbar';
import { GithubIcon, LinkedinIcon } from './ui/BrandIcons';

const Footer: React.FC = () => {
  const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer className="border-t border-white/[0.07] bg-ink py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="flex flex-col justify-between gap-8 sm:flex-row sm:items-center">
          <div className="flex items-center gap-3.5">
            <Monogram />
            <div>
              <div className="text-sm font-semibold text-fg">{PERSONAL_INFO.name}</div>
              <div className="text-xs text-muted">
                {PERSONAL_INFO.role} · {PERSONAL_INFO.location}
              </div>
            </div>
          </div>

          <ul className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted">
            {NAV_LINKS.map((l) => (
              <li key={l.id}>
                <a href={`#${l.id}`} className="transition-colors hover:text-fg">
                  {l.name}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-2">
            <a
              href={SOCIALS.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub profile"
              className="icon-btn"
            >
              <GithubIcon size={17} />
            </a>
            <a
              href={SOCIALS.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn profile"
              className="icon-btn"
            >
              <LinkedinIcon size={16} />
            </a>
            <button
              type="button"
              onClick={scrollTop}
              aria-label="Back to top"
              className="icon-btn ml-1"
            >
              <ArrowUp size={16} />
            </button>
          </div>
        </div>

        <div className="mt-10 flex flex-col justify-between gap-2 border-t border-white/[0.05] pt-6 text-xs text-faint sm:flex-row">
          <p>
            &copy; {new Date().getFullYear()} {PERSONAL_INFO.name}. All rights reserved.
          </p>
          <p className="font-mono">Crafted with React, Three.js &amp; Tailwind CSS</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
