import { motion } from 'framer-motion'
import { ArrowDown, Github, Linkedin, Mail, Sparkles } from 'lucide-react'
import { socialLinks } from '../../data/projects'

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, delayChildren: 0.3 },
  },
}

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
}

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden">
      {/* Ambient background orbs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 -left-32 w-[600px] h-[600px] rounded-full opacity-20 blur-3xl"
          style={{ background: 'radial-gradient(circle, #6d28d9 0%, transparent 70%)' }} />
        <div className="absolute bottom-1/4 -right-32 w-[500px] h-[500px] rounded-full opacity-15 blur-3xl"
          style={{ background: 'radial-gradient(circle, #4f46e5 0%, transparent 70%)' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full opacity-10 blur-3xl"
          style={{ background: 'radial-gradient(circle, #a855f7 0%, transparent 70%)' }} />

        {/* Grid lines */}
        <div className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: 'linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }} />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <motion.div variants={container} initial="hidden" animate="show">
          {/* Status badge */}
          <motion.div variants={item} className="flex justify-center mb-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-xs font-mono text-light-4">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              Available for freelance & opportunities
              <Sparkles size={12} className="text-ink-400" />
            </div>
          </motion.div>

          {/* Name */}
          <motion.div variants={item} className="mb-4">
            <h1 className="font-sans font-extrabold text-5xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight leading-none">
              <span className="text-light-2">Hi, I'm </span>
              <span className="bg-gradient-to-r from-purple-500 to-indigo-500 bg-clip-text text-transparent">
  Gaius
</span>
              <span className="block text-light-2 mt-1">Ayanrinde</span>
            </h1>
          </motion.div>

          {/* Title */}
          <motion.div variants={item} className="mb-6">
            <p className="font-mono text-sm sm:text-base text-ink-400 tracking-widest uppercase">
              Web Developer · Frontend Developer · Aspiring Software Engineer
            </p>
          </motion.div>

          {/* Tagline */}
          <motion.p
  variants={item}
  className="font-body text-xl sm:text-2xl text-light-4 max-w-2xl mx-auto leading-relaxed mb-10 text-balance"
>
  I design and build web applications that solve real-world problems — 
  from <span className="text-light-2 font-medium">local delivery systems </span> 
  to <span className="text-light-2 font-medium">student platforms</span>.
</motion.p>

<motion.div variants={item} className="mb-10 text-sm text-light-5 space-y-1">
  <p>✔ Built real-world applications</p>
  <p>✔ Focused on solving local challenges</p>
  <p>✔ Available for freelance & collaboration</p>
</motion.div>

          {/* CTAs */}
          <motion.div variants={item} className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-14">
  <a href="#projects" className="btn-primary text-sm px-7 py-3.5">
    View Projects
  </a>
  <a href="#contact" className="btn-secondary text-sm px-7 py-3.5">
    Contact Me
  </a>
</motion.div>

          {/* Social links */}
          <motion.div variants={item} className="flex items-center justify-center gap-4 mb-16">
            <a href={socialLinks.github} target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-xs font-mono text-light-5 hover:text-light-2 transition-colors">
              <Github size={14} /> GitHub
            </a>
            <div className="w-px h-4 bg-white/10" />
            <a href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-xs font-mono text-light-5 hover:text-light-2 transition-colors">
              <Linkedin size={14} /> LinkedIn
            </a>
            <div className="w-px h-4 bg-white/10" />
            <a href={`mailto:${socialLinks.email}`}
              className="flex items-center gap-1.5 text-xs font-mono text-light-5 hover:text-light-2 transition-colors">
              <Mail size={14} /> Email
            </a>
          </motion.div>

          {/* Stats row */}
          <motion.div variants={item} className="flex items-center justify-center gap-8 sm:gap-16">
            {[
              { value: '5+', label: 'Projects Built' },
{ value: 'Real', label: 'Problem Focus' },
{ value: 'Open', label: 'For Work' },
            ].map(stat => (
              <div key={stat.label} className="text-center">
                <div className="font-sans font-bold text-2xl sm:text-3xl gradient-text">{stat.value}</div>
                <div className="font-body text-xs text-light-5 mt-0.5">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="font-mono text-xs text-light-5 tracking-widest uppercase"></span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            {/* <ArrowDown size={14} className="text-light-5" /> */}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
