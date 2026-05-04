import { motion } from 'framer-motion'
import { GraduationCap, Globe, Code2, Lightbulb } from 'lucide-react'

const milestones = [
  {
    icon: Code2,
    year: '2022',
    title: 'First Line of Code',
    desc: "Started with basic HTML tutorials, fascinated that a few tags could create something visible in a browser.",
    color: '#6366f1',
  },
  {
    icon: Lightbulb,
    year: '2023',
    title: 'Building Real Things',
    desc: "Learned JavaScript and React. Stopped following tutorials and started solving actual problems I saw around me.",
    color: '#8b5cf6',
  },
  {
    icon: Globe,
    year: '2024',
    title: 'Freelance & Impact',
    desc: "Landed first freelance clients. Built tools used by real businesses. Understood that code has real-world weight.",
    color: '#a855f7',
  },
  {
    icon: GraduationCap,
    year: '2025+',
    title: 'CS Abroad — The Goal',
    desc: "Targeting top CS programs globally, including Western University (Canada). The degree is the next chapter.",
    color: '#c084fc',
  },
]

export default function About() {
  return (
    <section id="about" className="py-28 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: Story */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="section-label">About Me</span>
            <h2 className="font-sans font-extrabold text-4xl sm:text-5xl text-light-1 mb-6 leading-tight">
              From <span className="gradient-text">Curious</span> to{' '}
              <span className="gradient-text">Builder</span>
            </h2>

            <div className="space-y-4 font-body text-light-4 text-base leading-relaxed">
              <p>
                A few years ago, I had basic computer knowledge and a strong feeling that I could build something meaningful with it. I didn't have a roadmap — just a browser, a YouTube playlist, and too much curiosity.
              </p>
              <p>
                I taught myself HTML, then CSS, then JavaScript. When I discovered React, something clicked: I wasn't just styling pages — I was engineering interfaces. I started building projects around problems I saw in my community: local businesses struggling with logistics, students waiting days for results, small brands with no online presence.
              </p>
              <p>
                Today, I build <span className="text-light-2 font-medium">production-grade web applications</span> that solve real problems. I'm not just a learner chasing tutorials. I'm a developer who ships.
              </p>
              <p>
                My goal is to study Computer Science abroad — ideally at a world-class institution like <span className="text-ink-300 font-medium">Western University in Canada</span> — and continue building tools that improve access to services in underserved communities.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <div className="glass px-4 py-2 rounded-xl text-xs font-mono text-light-4">📍 Nigeria</div>
              <div className="glass px-4 py-2 rounded-xl text-xs font-mono text-light-4">🎯 CS Degree Abroad</div>
              <div className="glass px-4 py-2 rounded-xl text-xs font-mono text-light-4">🚀 Open to Opportunities</div>
            </div>
          </motion.div>

          {/* Right: Timeline */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="space-y-4"
          >
            {milestones.map((m, i) => {
              const Icon = m.icon
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  className="glass-hover rounded-xl p-5 flex gap-4"
                >
                  <div className="shrink-0 w-10 h-10 rounded-xl flex items-center justify-center"
                    style={{ backgroundColor: `${m.color}20`, border: `1px solid ${m.color}30` }}>
                    <Icon size={16} style={{ color: m.color }} />
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="font-mono text-xs text-light-5">{m.year}</span>
                      <span className="font-sans font-semibold text-sm text-light-2">{m.title}</span>
                    </div>
                    <p className="font-body text-xs text-light-5 leading-relaxed">{m.desc}</p>
                  </div>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
