import { motion } from 'framer-motion';

const container = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { staggerChildren: 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

const item = {
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function About() {
  return (
    <section id="about" className="relative w-full bg-gradient-to-b from-black to-[#020617] py-24 text-white">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 px-6 md:grid-cols-2">
        {/* Left: Profile highlights */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl"
        >
          <motion.h2 variants={item} className="text-3xl font-bold text-cyan-300">
            About Me
          </motion.h2>
          <motion.p variants={item} className="mt-3 text-slate-300">
            I craft scalable backends, sleek frontends, and intelligent AI systems. I love building meaningful tech with modern tools.
          </motion.p>

          <div className="mt-6 space-y-3">
            <motion.div variants={item} className="rounded-xl bg-gradient-to-r from-cyan-500/10 to-indigo-500/10 p-4">
              <p className="text-sm text-slate-300">B.Tech CSE 1st Year at Academy of Technology (MAKAUT)</p>
            </motion.div>
            <motion.div variants={item} className="rounded-xl bg-gradient-to-r from-cyan-500/10 to-indigo-500/10 p-4">
              <p className="text-sm text-slate-300">Based in Kolkata, West Bengal, India</p>
            </motion.div>
            <motion.div variants={item} className="rounded-xl bg-gradient-to-r from-cyan-500/10 to-indigo-500/10 p-4">
              <p className="text-sm text-slate-300">Open to remote collaborations, internships, and innovative projects</p>
            </motion.div>
            <motion.div variants={item} className="rounded-xl bg-gradient-to-r from-cyan-500/10 to-indigo-500/10 p-4">
              <p className="text-sm text-slate-300">Specialized in Python development, AI/ML, Flask/FastAPI backends</p>
            </motion.div>
            <motion.div variants={item} className="rounded-xl bg-gradient-to-r from-cyan-500/10 to-indigo-500/10 p-4">
              <p className="text-sm text-slate-300">Passionate about meaningful technology solutions and open-source</p>
            </motion.div>
          </div>
        </motion.div>

        {/* Right: Bio text */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl"
        >
          <h3 className="text-2xl font-semibold text-white">Bio</h3>
          <p className="mt-3 text-slate-300">
            I'm a developer focused on building reliable systems and delightful user experiences. My interests span AI/ML, data-driven products, and backend engineering. I enjoy solving complex problems and collaborating with teams to ship impactful features.
          </p>
          <p className="mt-3 text-slate-300">
            I work primarily with Python, JavaScript/TypeScript, Flask/FastAPI, and modern frontend stacks. I'm constantly learning and exploring tools that help me deliver value faster.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
