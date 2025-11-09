import { motion } from 'framer-motion';

const projects = [
  {
    title: 'AI Project Placeholder',
    tech: ['Python', 'TensorFlow', 'FastAPI'],
    description: 'A showcase placeholder for upcoming AI/ML projects with scalable APIs and modern UIs.',
    image: 'https://images.unsplash.com/photo-1508385082359-f38ae991e8f2?q=80&w=1400&auto=format&fit=crop',
    links: { github: '#', live: '#' },
  },
  {
    title: 'Computer Vision Placeholder',
    tech: ['OpenCV', 'scikit-learn'],
    description: 'Future space for CV experiments: detection, segmentation, and more.',
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=1400&auto=format&fit=crop',
    links: { github: '#', live: '#' },
  },
  {
    title: 'Data Analytics Placeholder',
    tech: ['Pandas', 'Power BI'],
    description: 'Interactive dashboards and data stories coming soon.',
    image: 'https://images.unsplash.com/photo-1705023812406-fc30260d82c3?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxEYXRhJTIwQW5hbHl0aWNzJTIwUGxhY2Vob2xkZXJ8ZW58MHwwfHx8MTc2MjcyMzU2OHww&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
    links: { github: '#', live: '#' },
  },
];

export default function Projects() {
  return (
    <section id="projects" className="relative w-full bg-gradient-to-b from-[#020617] to-black py-24 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold text-cyan-300"
        >
          Projects
        </motion.h2>

        <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="group overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl"
            >
              <div className="relative h-44 overflow-hidden">
                <img src={p.image} alt={p.title} className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold text-white">{p.title}</h3>
                <p className="mt-2 text-sm text-slate-300">{p.description}</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {p.tech.map((t) => (
                    <span key={t} className="rounded-full bg-cyan-500/10 px-2 py-1 text-xs text-cyan-300">
                      {t}
                    </span>
                  ))}
                </div>
                <div className="mt-4 flex items-center gap-4">
                  <a href={p.links.github} className="text-sm text-cyan-300 hover:text-cyan-200">GitHub</a>
                  <a href={p.links.live} className="text-sm text-cyan-300 hover:text-cyan-200">Live</a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
