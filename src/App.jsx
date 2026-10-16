import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Education from './components/Education';
import Certificates from './components/Certificates';
import QAFocusAreas from './components/QAFocusAreas';
import Resume from './components/Resume';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { personalInfo } from './data/portfolioData';

export default function App() {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const sectionIds = ['home', 'about', 'skills', 'education', 'certificates', 'qa-focus', 'resume', 'contact'];
    
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;
      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const el = document.getElementById(sectionIds[i]);
        if (el) {
          const top = el.offsetTop;
          if (scrollPosition >= top) {
            setActiveSection(sectionIds[i]);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="portfolio-app">
      <Navbar activeSection={activeSection} />
      <main id="main-content">
        <Hero data={personalInfo} />
        <About data={personalInfo} />
        <Skills data={personalInfo} />
        <Education data={personalInfo} />
        <Certificates data={personalInfo} />
        <QAFocusAreas data={personalInfo} />
        <Resume data={personalInfo} />
        <Contact data={personalInfo} />
      </main>
      <Footer data={personalInfo} />
    </div>
  );
}
