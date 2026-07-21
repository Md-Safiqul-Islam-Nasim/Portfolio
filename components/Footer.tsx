import React from 'react';
import { PERSONAL_INFO } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="py-8 sm:py-12 bg-slate-950 text-center border-t border-slate-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <p className="text-slate-300 font-medium text-xs sm:text-sm">
          &copy; {new Date().getFullYear()} <span className="font-bold text-slate-200">{PERSONAL_INFO.name}</span>. Built with React & Tailwind CSS.
        </p>
        <div className="mt-3 sm:mt-4 flex justify-center gap-4 sm:gap-6">
          <a href="#" className="text-slate-500 hover:text-sky-400 transition-colors text-xs sm:text-sm font-semibold">Privacy Policy</a>
          <a href="#" className="text-slate-500 hover:text-sky-400 transition-colors text-xs sm:text-sm font-semibold">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
