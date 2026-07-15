import React from 'react';
import { PERSONAL_INFO } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="py-12 bg-slate-950 text-center">
      <div className="max-w-7xl mx-auto px-6">
        <p className="text-slate-300 font-medium text-sm">
          &copy; {new Date().getFullYear()} <span className="font-bold text-slate-300">{PERSONAL_INFO.name}</span>. Built with React & Tailwind CSS.
        </p>
        <div className="mt-4 flex justify-center gap-6">
          <a href="#" className="text-slate-600 hover:text-sky-400 transition-colors text-sm font-semibold">Privacy Policy</a>
          <a href="#" className="text-slate-600 hover:text-sky-400 transition-colors text-sm font-semibold">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
