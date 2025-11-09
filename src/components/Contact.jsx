import { motion } from 'framer-motion';
import { Phone, MapPin, School, Mail, Github, Linkedin, Send } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="relative w-full bg-gradient-to-b from-black to-[#020617] py-24 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold text-cyan-300"
        >
          Contact
        </motion.h2>

        <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-3">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl"
          >
            <div className="flex items-center gap-3">
              <Phone className="h-5 w-5 text-cyan-300" />
              <span className="text-slate-200">+91 7980286094</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.05 }}
            className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl"
          >
            <div className="flex items-center gap-3">
              <MapPin className="h-5 w-5 text-cyan-300" />
              <span className="text-slate-200">Kolkata, West Bengal</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl"
          >
            <div className="flex items-center gap-3">
              <School className="h-5 w-5 text-cyan-300" />
              <span className="text-slate-200">Academy of Technology</span>
            </div>
          </motion.div>
        </div>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-8 text-center text-slate-300"
        >
          Open to collaborations, internships, and innovative projects
        </motion.p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <a href="mailto:your.email@example.com" className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm text-white backdrop-blur-md transition hover:border-cyan-400/40 hover:bg-white/10">
            <Mail className="h-4 w-4" /> Email
          </a>
          <a href="https://github.com/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm text-white backdrop-blur-md transition hover:border-cyan-400/40 hover:bg-white/10">
            <Github className="h-4 w-4" /> GitHub
          </a>
          <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm text-white backdrop-blur-md transition hover:border-cyan-400/40 hover:bg-white/10">
            <Linkedin className="h-4 w-4" /> LinkedIn
          </a>
        </div>

        {/* Floating action button */}
        <a href="#contact" className="fixed bottom-6 right-6 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 px-4 py-3 text-sm font-semibold text-black shadow-xl shadow-cyan-500/30 transition hover:scale-105">
          <Send className="h-4 w-4" /> Quick Contact
        </a>
      </div>
    </section>
  );
}
