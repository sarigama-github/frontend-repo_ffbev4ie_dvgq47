import { useEffect, useMemo, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import Spline from '@splinetool/react-spline';
import { ChevronDown } from 'lucide-react';

const words = [
  'Full-Stack Developer',
  '& AI Innovator',
];

export default function Hero() {
  const [text, setText] = useState('');
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);
  const [blink, setBlink] = useState(true);
  const typingSpeed = useMemo(() => (deleting ? 30 : 80), [deleting]);
  const mounted = useRef(true);

  useEffect(() => {
    return () => {
      mounted.current = false;
    };
  }, []);

  // Typing effect for the headline
  useEffect(() => {
    if (!mounted.current) return;

    const handler = setTimeout(() => {
      const currentWord = words[index % words.length];
      if (!deleting) {
        setText(currentWord.substring(0, subIndex + 1));
        setSubIndex((s) => s + 1);
        if (subIndex + 1 === currentWord.length) {
          setTimeout(() => setDeleting(true), 1000);
        }
      } else {
        setText(currentWord.substring(0, subIndex - 1));
        setSubIndex((s) => s - 1);
        if (subIndex - 1 === 0) {
          setDeleting(false);
          setIndex((i) => (i + 1) % words.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(handler);
  }, [subIndex, deleting, index, typingSpeed]);

  // Cursor blink
  useEffect(() => {
    const blinkInterval = setInterval(() => setBlink((b) => !b), 500);
    return () => clearInterval(blinkInterval);
  }, []);

  return (
    <section id="home" className="relative min-h-screen w-full overflow-hidden bg-gradient-to-b from-[#020617] via-[#0b1220] to-black text-white">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/4Zh-Q6DWWp5yPnQf/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Ambient gradient overlays */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-32 top-10 h-72 w-72 rounded-full bg-cyan-500/20 blur-3xl" />
        <div className="absolute right-0 top-40 h-80 w-80 rounded-full bg-indigo-500/20 blur-3xl" />
        <div className="absolute bottom-10 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-teal-400/20 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto flex min-h-screen max-w-6xl flex-col items-center justify-center px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-4 py-2 backdrop-blur-md"
        >
          <span className="h-2 w-2 animate-ping rounded-full bg-cyan-400" />
          <span className="ml-2 text-sm text-cyan-300">Open to collaborations, internships, and innovative projects</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.1 }}
          className="mt-8 font-['Manrope'] text-4xl font-extrabold tracking-tight text-white drop-shadow-sm sm:text-6xl md:text-7xl"
        >
          {text}
          <span className={`ml-1 inline-block w-1 bg-cyan-300 ${blink ? 'opacity-100' : 'opacity-0'}`}>
            &nbsp;
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-5 max-w-2xl text-lg text-slate-300"
        >
          Building the future with Python, AI/ML & Modern Web
        </motion.p>

        {/* CTA buttons */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-8 flex flex-wrap items-center justify-center gap-4"
        >
          <a href="#contact" className="group rounded-full bg-cyan-500/90 px-6 py-3 text-sm font-semibold text-black shadow-lg shadow-cyan-500/20 transition hover:bg-cyan-400">
            Contact Me
          </a>
          <a href="#projects" className="rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white backdrop-blur-md transition hover:border-cyan-400/40 hover:bg-white/10">
            View Projects
          </a>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-6"
        >
          <a href="#about" className="group inline-flex flex-col items-center text-slate-300">
            <span className="mb-2 text-xs tracking-wider">Scroll</span>
            <ChevronDown className="h-6 w-6 animate-bounce text-cyan-300" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
