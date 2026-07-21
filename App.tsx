import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import ProjectsGrid from './components/ProjectsGrid';
import SkillsGrid from './components/SkillsGrid';
import ProblemSolvingStats from './components/ProblemSolvingStats';
import ExperienceTimeline from './components/ExperienceTimeline';
import Education from './components/Education';
import Achievements from './components/Achievements';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'projects', 'skills', 'problem-solving', 'experience', 'education', 'achievements', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const height = element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial check
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative min-h-screen bg-slate-900 text-slate-100 font-sans selection:bg-sky-500 selection:text-white overflow-x-hidden w-full">
      {/* Global gradient to make it less flat/dark */}
      <div className="fixed inset-0 z-0 bg-gradient-to-br from-slate-700 via-slate-800 to-slate-900 pointer-events-none"></div>
      
      <div className="relative z-10 w-full overflow-x-hidden">
        <Navbar activeSection={activeSection} />

        <main className="w-full pt-16">
          <div className="bg-slate-700/20 backdrop-blur-sm"><Hero id="home" /></div>
          <div className="bg-slate-800/30"><About id="about" /></div>
          <div className="bg-slate-700/20 backdrop-blur-sm"><ProjectsGrid id="projects" /></div>
          <div className="bg-slate-800/30"><SkillsGrid id="skills" /></div>
          <div className="bg-slate-700/20 backdrop-blur-sm"><ProblemSolvingStats id="problem-solving" /></div>
          <div className="bg-slate-800/30"><ExperienceTimeline id="experience" /></div>
          <div className="bg-slate-700/20 backdrop-blur-sm"><Education id="education" /></div>
          <div className="bg-slate-800/30"><Achievements id="achievements" /></div>
          <div className="bg-slate-700/20 backdrop-blur-sm"><Contact id="contact" /></div>
        </main>

        <Footer />
      </div>
    </div>
  );
};

export default App;
