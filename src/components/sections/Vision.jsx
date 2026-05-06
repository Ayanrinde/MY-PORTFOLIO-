import { motion } from 'framer-motion'
import { Heart, Globe2, Zap, Users } from 'lucide-react'

const pillars = [
  {
    icon: Globe2,
    title: 'Access for Everyone',
    desc: 'Technology should not be a privilege. I build tools that work on low-bandwidth connections and low-end devices — because the people who need digital solutions most are often the least served.',
    color: '#818cf8',
  },
  {
    icon: Zap,
    title: 'Pragmatic Engineering',
    desc: 'I choose simplicity over complexity. The best solution is the one that ships, works reliably, and can be maintained by a small team. Over-engineering serves engineers, not users.',
    color: '#a78bfa',
  },
  {
    icon: Users,
    title: 'Community-First Products',
    desc: 'My best projects came from observing real frustrations in my community. Before I write a single line of code, I ask: who does this actually help? How does it make their day better?',
    color: '#c084fc',
  },
  {
    icon: Heart,
    title: 'Long-Term Impact',
    desc: 'I am studying Computer Science not just for a degree, but to build a stronger technical foundation that lets me tackle bigger, harder problems — in healthcare, education, and commerce.',
    color: '#e879f9',
  },
]

export default function Vision() {
  return (
    <section id="vision" className="py-28 px-6 relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full opacity-10 blur-3xl"
          style={{ background: 'radial-gradient(circle, #7c3aed 0%, transparent 70%)' }} />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="section-label mx-auto justify-center">Vision & Values</span>
          <h2 className="font-sans font-extrabold text-4xl sm:text-5xl text-light-1 mb-5 leading-tight">
  Engineering Systems That <span className="gradient-text">Expand Access</span>
</h2>
          <p className="font-body text-light-4 max-w-2xl mx-auto text-base leading-relaxed">
  I focus on building practical software systems that reduce inefficiencies in everyday environments — 
  especially in communities where access to digital infrastructure is limited.
</p>
        </motion.div>

        {/* Big quote */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="glass rounded-2xl p-8 sm:p-12 text-center mb-16 relative overflow-hidden"
        >
          <div className="absolute top-4 left-8 text-8xl text-ink-800 font-sans select-none leading-none">"</div>
          <blockquote className="relative z-10 font-sans font-semibold text-xl sm:text-2xl text-light-2 leading-relaxed max-w-3xl mx-auto">
            The most meaningful software is not built in Silicon Valley boardrooms. It is built by people who understand the problem from the inside — and have the technical skill to fix it.
          </blockquote>
          <p className="mt-6 font-mono text-xs text-ink-400 tracking-wider">— My engineering philosophy</p>
        </motion.div>

        {/* Pillars grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {pillars.map((pillar, i) => {
            const Icon = pillar.icon
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                className="glass-hover rounded-xl p-6 flex gap-5"
              >
                <div className="shrink-0 w-11 h-11 rounded-xl flex items-center justify-center mt-0.5"
                  style={{ backgroundColor: `${pillar.color}18`, border: `1px solid ${pillar.color}28` }}>
                  <Icon size={18} style={{ color: pillar.color }} />
                </div>
                <div>
                  <h3 className="font-sans font-semibold text-light-1 text-base mb-2">{pillar.title}</h3>
                  <p className="font-body text-sm text-light-5 leading-relaxed">{pillar.desc}</p>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
