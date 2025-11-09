import { motion } from 'framer-motion';
import { Brain, Code, Server, Database, Cloud, BarChart2, Boxes } from 'lucide-react';

const categories = [
  {
    title: 'Expert',
    color: 'from-cyan-500/20 to-teal-500/10',
    skills: [
      { name: 'Python', icon: Brain, level: 95 },
      { name: 'HTML/CSS', icon: Code, level: 92 },
      { name: 'Flask', icon: Server, level: 90 },
    ],
  },
  {
    title: 'Advanced',
    color: 'from-indigo-500/20 to-cyan-500/10',
    skills: [
      { name: 'JavaScript', icon: Code, level: 85 },
      { name: 'TensorFlow', icon: Brain, level: 82 },
      { name: 'FastAPI', icon: Server, level: 84 },
      { name: 'Pandas', icon: Boxes, level: 86 },
      { name: 'Docker', icon: Server, level: 78 },
      { name: 'scikit-learn', icon: Brain, level: 83 },
      { name: 'OpenCV', icon: CameraIcon, level: 75 },
    ],
  },
  {
    title: 'Certified',
    color: 'from-emerald-500/20 to-cyan-500/10',
    skills: [
      { name: 'Google Cloud Platform', icon: Cloud, level: 70 },
    ],
  },
  {
    title: 'Intermediate',
    color: 'from-fuchsia-500/20 to-indigo-500/10',
    skills: [
      { name: 'SQL', icon: Database, level: 68 },
      { name: 'Power BI', icon: BarChart2, level: 65 },
    ],
  },
];

function CameraIcon(props) {
  // simple camera icon fallback using SVG to avoid missing lucide icon names
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={`h-5 w-5 ${props.className || ''}`}>
      <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h3l2-3h8l2 3h3a2 2 0 0 1 2 2z" />
      <circle cx="12" cy="13" r="4" />
    </svg>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="relative w-full bg-gradient-to-b from-[#020617] to-black py-24 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold text-cyan-300"
        >
          Skills
        </motion.h2>

        <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className={`rounded-2xl border border-white/10 bg-gradient-to-br ${cat.color} p-6 backdrop-blur-xl`}
            >
              <h3 className="text-xl font-semibold text-white">{cat.title}</h3>
              <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
                {cat.skills.map((s, idx) => (
                  <motion.div
                    key={s.name}
                    initial={{ opacity: 0, y: 8 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: idx * 0.05 }}
                    className="group rounded-xl border border-white/10 bg-white/5 p-4 backdrop-blur-md transition hover:scale-[1.02] hover:border-cyan-400/40 hover:bg-white/10"
                  >
                    <div className="flex items-center gap-3">
                      <s.icon className="h-5 w-5 text-cyan-300" />
                      <span className="font-medium text-slate-200">{s.name}</span>
                    </div>
                    <div className="mt-3 h-2 w-full rounded-full bg-white/10">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${s.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: 'easeOut' }}
                        className="h-2 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500"
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
