import React, { useMemo } from 'react';
import { MotionConfig } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import ProblemSolving from './components/ProblemSolving';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { NAV_LINKS } from './constants';
import { useActiveSection } from './hooks/useMedia';

const App: React.FC = () => {
  const sectionIds = useMemo(() => NAV_LINKS.map((l) => l.id), []);
  const activeSection = useActiveSection(sectionIds);

  return (
    <MotionConfig reducedMotion="user">
      <div className="relative min-h-screen bg-ink text-fg">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:rounded-lg focus:bg-electric focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-white"
        >
          Skip to content
        </a>

        <Navbar activeSection={activeSection} />

        <main id="main-content">
          <Hero id="home" />
          <About id="about" />
          <Skills id="skills" />
          <Experience id="experience" />
          <Projects id="projects" />
          <ProblemSolving id="problem-solving" />
          <Education id="education" />
          <Contact id="contact" />
        </main>

        <Footer />
      </div>
    </MotionConfig>
  );
};

export default App;
