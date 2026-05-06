import { Github, Mail, Linkedin } from 'lucide-react'
import { socialLinks } from '../../data/projects'

export default function Footer() {
  return (
    <footer className="border-t border-white/5 py-12 px-6">
      <div className="max-w-5xl mx-auto flex flex-col items-center text-center gap-6">

        {/* Brand */}
        <div className="flex items-center gap-3">
          <div
            className="w-9 h-9 rounded-xl flex items-center justify-center"
            style={{ background: 'linear-gradient(135deg, #6d28d9, #a855f7)' }}
          >
            <span className="font-sans font-bold text-sm text-white">G</span>
          </div>

          <span className="font-sans font-semibold text-light-2 text-base">
            Gaius Ayanrinde
          </span>
        </div>

        {/* Statement */}
        <p className="text-sm text-light-4 max-w-md leading-relaxed">
          Building software that solves real-world problems and improves access
          to digital services in underserved communities.
        </p>

        {/* Socials */}
        <div className="flex items-center gap-5">
          <a
            href={socialLinks.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-light-5 hover:text-light-2 transition-colors"
          >
            <Github size={18} />
          </a>

          <a
            href={socialLinks.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-light-5 hover:text-light-2 transition-colors"
          >
            <Linkedin size={18} />
          </a>

          <a
            href={`mailto:${socialLinks.email}`}
            className="text-light-5 hover:text-light-2 transition-colors"
          >
            <Mail size={18} />
          </a>
        </div>

        {/* Bottom line */}
        <div className="flex flex-col sm:flex-row items-center gap-2 text-xs text-light-5 font-mono">
          <span>© {new Date().getFullYear()} Gaius Ayanrinde</span>
          <span className="hidden sm:inline">·</span>
          <span>Designed & Built with intention</span>
        </div>
      </div>
    </footer>
  )
}