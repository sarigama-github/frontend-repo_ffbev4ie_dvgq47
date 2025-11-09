import { useEffect } from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Timeline from './components/Timeline';
import Projects from './components/Projects';
import Contact from './components/Contact';
import { motion } from 'framer-motion';

function App() {
  // Enable smooth scroll for anchor links
  useEffect(() => {
    if ('scrollBehavior' in document.documentElement.style) return;
    // polyfill-like fallback
    const onClick = (e) => {
      const a = e.target.closest('a[href^="#"]');
      if (!a) return;
      const id = a.getAttribute('href').slice(1);
      const el = document.getElementById(id);
      if (el) {
        e.preventDefault();
        el.scrollIntoView({ behavior: 'smooth' });
      }
    };
    document.addEventListener('click', onClick);
    return () => document.removeEventListener('click', onClick);
  }, []);

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6 }} className="scroll-smooth">
      <Hero />
      <About />
      <Skills />
      <Timeline />
      <Projects />
      <Contact />
    </motion.div>
  );
}

export default App;
