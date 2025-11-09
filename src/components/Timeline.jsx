import { motion } from 'framer-motion';
import { Award, GraduationCap, Medal } from 'lucide-react';

const education = [
  { title: 'B.Tech CSE - Academy of Technology (MAKAUT)', period: '1st Year' },
  { title: '12th - Narayana School, CBSE', period: '2024' },
  { title: '10th - ICSE', period: '2022' },
];

const certs = [
  { title: 'Python for Data Science, AI & Development (IBM)', icon: Award },
  { title: 'Flask Development Course', icon: Award },
  { title: 'GCP Fundamentals', icon: Award },
  { title: 'Power BI', icon: Award },
];

export default function Timeline() {
  return (
    <section id="education" className="relative w-full bg-gradient-to-b from-black to-[#020617] py-24 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold text-cyan-300"
        >
          Education & Certifications
        </motion.h2>

        <div className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-2">
          {/* Education timeline */}
          <div className="relative">
            <div className="absolute left-4 top-0 h-full w-0.5 bg-gradient-to-b from-cyan-400 to-transparent" />
            <div className="space-y-6">
              {education.map((e, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.05 }}
                  className="relative ml-10 rounded-xl border border-white/10 bg-white/5 p-4 backdrop-blur-xl"
                >
                  <div className="absolute -left-8 top-4 flex h-8 w-8 items-center justify-center rounded-full bg-cyan-500 text-black">
                    <GraduationCap className="h-4 w-4" />
                  </div>
                  <p className="font-medium text-white">{e.title}</p>
                  <p className="text-sm text-slate-300">{e.period}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div className="space-y-4">
            {certs.map((c, i) => (
              <motion.div
                key={c.title}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className="flex items-center gap-4 rounded-xl border border-white/10 bg-white/5 p-4 backdrop-blur-xl"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-indigo-500 text-black">
                  <c.icon className="h-5 w-5" />
                </div>
                <p className="text-slate-200">{c.title}</p>
              </motion.div>
            ))}

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-2 inline-flex items-center gap-2 rounded-full border border-yellow-400/30 bg-yellow-400/10 px-3 py-2 text-yellow-300"
            >
              <Medal className="h-4 w-4" />
              <span>GitHub community contributor</span>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
