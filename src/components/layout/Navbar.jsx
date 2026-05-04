import { motion } from 'framer-motion'
import { Sun, Moon, Menu, X } from 'lucide-react'
import { useState } from 'react'
import { useScrollProgress } from '../../hooks/useScrollProgress'

const navLinks = [
  { label: 'Projects', href: '#projects' },
  { label: 'Case Study', href: '#case-study' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar({ theme, toggleTheme }) {
  const { scrolled, progress } = useScrollProgress()
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <>
      {/* Scroll progress bar — fixed: added left-0 so it spans full width */}
      <div className="fixed top-0 left-0 right-0 z-[60] h-0.5 bg-transparent">
        <motion.div
          className="h-full"
          style={{
            width: `${progress * 100}%`,
            background: 'linear-gradient(90deg, #6d28d9, #c084fc)',
          }}
        />
      </div>

      <motion.header
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className={`fixed top-2 left-0 right-0 mx-auto z-50 transition-all duration-500 rounded-2xl ${
          scrolled
            ? 'glass shadow-2xl shadow-black/40'
            : 'bg-transparent'
        }`}
        style={{ width: 'calc(100% - 3rem)', maxWidth: '68rem' }}
      >
        <div className="flex items-center justify-between px-4 py-3">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2.5 group shrink-0">
            <div
              className="w-8 h-8 rounded-xl flex items-center justify-center shrink-0 transition-transform group-hover:scale-110"
              style={{ background: 'linear-gradient(135deg, #6d28d9, #a855f7)' }}
            >
              <span className="font-sans font-bold text-sm text-white">D</span>
            </div>
            <span className="font-sans font-semibold text-light-2 text-base hidden sm:block">
              DevPortfolio
            </span>
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-0.5">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-3 py-1.5 rounded-lg text-sm font-body text-light-5 hover:text-light-2 hover:bg-white/5 transition-all duration-200 whitespace-nowrap"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right controls */}
          <div className="flex items-center gap-1.5 shrink-0">
            <button
              onClick={toggleTheme}
              className="w-8 h-8 rounded-lg flex items-center justify-center text-light-5 hover:text-light-2 hover:bg-white/5 transition-all"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? <Sun size={14} /> : <Moon size={14} />}
            </button>

            <a
              href="#contact"
              className="btn-primary hidden md:inline-flex py-2 px-4 text-sm whitespace-nowrap"
            >
              Hire Me
            </a>

            <button
              onClick={() => setMobileOpen(o => !o)}
              className="md:hidden w-8 h-8 rounded-lg flex items-center justify-center text-light-4 hover:text-light-2 hover:bg-white/5 transition-all"
            >
              {mobileOpen ? <X size={16} /> : <Menu size={16} />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden px-4 pb-4 border-t border-white/5 mt-1"
          >
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="block py-2.5 text-sm font-body text-light-4 hover:text-light-2 transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setMobileOpen(false)}
              className="btn-primary mt-3 w-full justify-center py-2.5 text-sm"
            >
              Hire Me
            </a>
          </motion.div>
        )}
      </motion.header>
    </>
  )
}