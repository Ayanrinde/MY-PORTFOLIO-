import { motion } from 'framer-motion'
import { Github, ExternalLink, ArrowUpRight } from 'lucide-react'

export default function ProjectCard({ project, index }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] }}
      className="group relative glass-hover rounded-2xl overflow-hidden"
    >
      {/* Top colored accent bar */}
      <div className="h-0.5 w-full transition-all duration-500 group-hover:h-1"
        style={{ background: `linear-gradient(90deg, ${project.color}, ${project.colorLight})` }} />

      <div className="p-6 lg:p-8">
        {/* Header */}
        <div className="flex items-start justify-between mb-5">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="font-mono text-xs text-light-5 tracking-widest uppercase">
                {String(index + 1).padStart(2, '0')} / {project.category}
              </span>
              <span className="text-light-5">·</span>
              <span className="font-mono text-xs text-light-5">{project.year}</span>
            </div>
            <h3 className="font-sans font-bold text-2xl text-light-1 mb-0.5">{project.title}</h3>
            <p className="text-sm font-body text-light-5">{project.subtitle}</p>
          </div>

          <div className="flex items-center gap-2 shrink-0 ml-4">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-lg flex items-center justify-center bg-white/5 hover:bg-white/10 text-light-5 hover:text-light-2 transition-all"
              aria-label="View GitHub"
            >
              <Github size={14} />
            </a>
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-lg flex items-center justify-center bg-white/5 hover:bg-white/10 text-light-5 hover:text-light-2 transition-all"
              aria-label="Live demo"
            >
              <ExternalLink size={14} />
            </a>
          </div>
        </div>

        {/* Tagline */}
        <p className="font-body text-light-3 text-sm leading-relaxed mb-5">
          {project.tagline}
        </p>

        {/* Problem / Solution */}
        <div className="space-y-3 mb-6">
          <div className="flex gap-3">
            <div className="mt-1 shrink-0 w-1.5 h-1.5 rounded-full"
              style={{ backgroundColor: project.colorLight }} />
            <div>
              <span className="block font-mono text-xs text-light-5 uppercase tracking-wider mb-0.5">Problem</span>
              <p className="text-xs font-body text-light-4 leading-relaxed line-clamp-2">{project.problem}</p>
            </div>
          </div>
          <div className="flex gap-3">
            <div className="mt-1 shrink-0 w-1.5 h-1.5 rounded-full"
              style={{ backgroundColor: project.colorLight }} />
            <div>
              <span className="block font-mono text-xs text-light-5 uppercase tracking-wider mb-0.5">Solution</span>
              <p className="text-xs font-body text-light-4 leading-relaxed line-clamp-2">{project.solution}</p>
            </div>
          </div>
        </div>

        {/* Tech tags */}
        <div className="flex flex-wrap gap-1.5 mb-6">
          {project.tags.map(tag => (
            <span
              key={tag}
              className="px-2.5 py-1 rounded-lg text-xs font-mono font-medium text-light-4"
              style={{ background: `${project.color}18`, border: `1px solid ${project.color}28` }}
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Footer link */}
        <div className="flex items-center gap-1 pt-4 border-t border-white/5">
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-xs font-body font-medium transition-all duration-200 hover:gap-2"
            style={{ color: project.colorLight }}
          >
            View live project <ArrowUpRight size={13} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>
      </div>
    </motion.article>
  )
}
