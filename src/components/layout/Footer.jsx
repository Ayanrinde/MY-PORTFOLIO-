import { Github, Mail, Linkedin } from 'lucide-react'
import { socialLinks } from '../../data/projects'

export default function Footer() {
  return (
    <footer className="border-t border-white/5 py-10 px-6">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="w-7 h-7 rounded-lg flex items-center justify-center"
            style={{ background: 'linear-gradient(135deg, #6d28d9, #a855f7)' }}>
            <span className="font-sans font-bold text-xs text-white">D</span>
          </div>
          <p className="text-xs text-light-5 font-body">
            Built with React + Tailwind + Framer Motion
          </p>
        </div>

        <div className="flex items-center gap-4">
          <a href={socialLinks.github} target="_blank" rel="noopener noreferrer"
            className="text-light-5 hover:text-light-2 transition-colors">
            <Github size={16} />
          </a>
          <a href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer"
            className="text-light-5 hover:text-light-2 transition-colors">
            <Linkedin size={16} />
          </a>
          <a href={`mailto:${socialLinks.email}`}
            className="text-light-5 hover:text-light-2 transition-colors">
            <Mail size={16} />
          </a>
        </div>

        <p className="text-xs text-light-5 font-mono">© 2024 DevPortfolio</p>
      </div>
    </footer>
  )
}
