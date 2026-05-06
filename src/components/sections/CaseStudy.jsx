import { motion } from 'framer-motion'
import { caseStudy } from '../../data/projects'

export default function CaseStudy() {
  const { project, phases, metrics } = caseStudy

  return (
    <section id="case-study" className="py-28 px-6">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <span className="section-label">Engineering Deep Dive</span>

          <h2 className="font-sans font-extrabold text-4xl sm:text-5xl text-light-1 mb-4 leading-tight">
            How I Built <span className="gradient-text">{project.title}</span>
          </h2>

          <p className="font-body text-light-4 max-w-2xl mx-auto text-base leading-relaxed">
            This case study breaks down how I approached a real-world problem — 
            from understanding user pain points to building a functional solution.
          </p>
        </motion.div>

        {/* Metrics */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="glass rounded-2xl p-6 mb-14 grid grid-cols-2 sm:grid-cols-4 gap-6"
        >
          {metrics.map((m, i) => (
            <div key={i} className="text-center">
              <div className="font-sans font-bold text-2xl gradient-text mb-1">
                {m.value}
              </div>
              <div className="font-mono text-xs text-light-5 uppercase tracking-wider">
                {m.label}
              </div>
            </div>
          ))}
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          <div className="absolute left-5 top-0 bottom-0 w-px bg-gradient-to-b from-ink-600 via-ink-500 to-transparent hidden sm:block" />

          <div className="space-y-10">
            {phases.map((phase, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="relative sm:pl-16"
              >

                {/* Icon */}
                <div className="hidden sm:flex absolute left-0 w-11 h-11 rounded-xl items-center justify-center text-xl glass border border-ink-700/30">
                  {phase.icon}
                </div>

                <div className="glass-hover rounded-xl p-6 sm:p-7">

                  <div className="flex items-center gap-3 mb-2">
                    <span className="sm:hidden text-xl">{phase.icon}</span>
                    <span className="font-mono text-xs text-ink-400 uppercase tracking-widest">
                      Phase {String(i + 1).padStart(2, '0')} — {phase.label}
                    </span>
                  </div>

                  <h3 className="font-sans font-bold text-lg text-light-1 mb-3">
                    {phase.title}
                  </h3>

                  <p className="font-body text-sm text-light-4 leading-relaxed">
                    {phase.body}
                  </p>

                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}