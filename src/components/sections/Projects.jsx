import { motion } from 'framer-motion'
import ProjectCard from '../ui/ProjectCard'
import { projects } from '../../data/projects'

export default function Projects() {
  return (
    <section id="projects" className="py-28 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="section-label">Featured Work</span>
          <h2 className="font-sans font-extrabold text-4xl sm:text-5xl text-light-1 mb-4 leading-tight">
            Projects That <span className="gradient-text">Solve Problems</span>
          </h2>
          <p className="font-body text-light-4 max-w-xl text-base leading-relaxed">
            Each project is built around a real need — not just a tutorial. Here's what I've shipped.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-12 flex justify-center"
        >
          <a
            href="https://github.com/Ayanrinde"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary text-sm"
          >
            View all projects on GitHub
          </a>
        </motion.div>
      </div>
    </section>
  )
}
