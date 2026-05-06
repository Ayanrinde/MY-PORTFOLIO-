import { motion } from 'framer-motion'
import ProjectCard from '../ui/ProjectCard'
import { projects } from '../../data/projects'

export default function Projects() {
  return (
    <section id="projects" className="py-28 px-6">
      <div className="max-w-6xl mx-auto">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <span className="section-label">Featured Work</span>

          <h2 className="font-sans font-extrabold text-4xl sm:text-5xl text-light-1 mb-4 leading-tight">
            Building Solutions, Not Just <span className="gradient-text">Projects</span>
          </h2>

          <p className="font-body text-light-4 max-w-2xl mx-auto text-base leading-relaxed">
            These projects are designed to solve real-world problems — from improving local services 
            to creating better user experiences. Each one reflects practical thinking, not just tutorials.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-16 flex flex-col items-center gap-4"
        >
          <p className="text-sm text-light-5">
            Want to see more or work with me?
          </p>

          <div className="flex gap-3">
            <a
              href="https://github.com/Ayanrinde"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary text-sm"
            >
              View GitHub
            </a>

            <a
              href="#contact"
              className="btn-primary text-sm"
            >
              Start a Project
            </a>
          </div>
        </motion.div>

      </div>
    </section>
  )
}