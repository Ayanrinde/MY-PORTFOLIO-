import { motion } from 'framer-motion'
import { GraduationCap, Globe, Code2, Lightbulb } from 'lucide-react'

const milestones = [
  {
    icon: Code2,
    year: '2022',
    title: 'First Exposure to Coding',
    desc: "Started with basic HTML and discovered how code can transform ideas into something tangible on the web.",
    color: '#6366f1',
  },
  {
    icon: Lightbulb,
    year: '2023',
    title: 'From Learning to Building',
    desc: "Learned JavaScript and React, and began creating projects focused on solving real-world problems rather than following tutorials.",
    color: '#8b5cf6',
  },
  {
    icon: Globe,
    year: '2024',
    title: 'Real-World Application',
    desc: "Worked on projects used by real users and gained freelance experience, understanding how technology can create measurable impact.",
    color: '#a855f7',
  },
  {
    icon: GraduationCap,
    year: '2025+',
    title: 'Next Step: Computer Science',
    desc: "Preparing to pursue a Computer Science degree internationally to deepen my knowledge and expand my impact.",
    color: '#c084fc',
  },
]

export default function About() {
  return (
    <section id="about" className="py-28 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="section-label">About Me</span>

            <h2 className="font-sans font-extrabold text-4xl sm:text-5xl text-light-1 mb-6 leading-tight">
              Building with Purpose, Not Just <span className="gradient-text">Code</span>
            </h2>

            <div className="space-y-4 font-body text-light-4 text-base leading-relaxed">

              <p>
                I started with basic computer knowledge and a strong curiosity about how digital products are built. 
                Without a formal roadmap, I began learning independently and gradually developed the ability to turn ideas into functional web applications.
              </p>

              <p>
                Over time, I moved beyond tutorials and focused on solving real problems — building tools for local businesses, 
                improving access to student resources, and helping small brands establish an online presence.
              </p>

              <p>
                Today, I am a <span className="text-light-2 font-medium">frontend-focused developer</span> with a growing foundation in software engineering, 
                focused on creating practical, user-centered solutions.
              </p>

              <p>
                My goal is to study Computer Science at a globally recognized institution such as{' '}
                <span className="text-ink-300 font-medium">
                  Western University, Canada
                </span>, 
                where I can deepen my technical expertise and continue building technology that improves access and efficiency in everyday communities.
              </p>

            </div>

            {/* Tags */}
            <div className="mt-8 flex flex-wrap gap-3">
              <div className="glass px-4 py-2 rounded-xl text-xs font-mono text-light-4">
                📍 Nigeria
              </div>
              <div className="glass px-4 py-2 rounded-xl text-xs font-mono text-light-4">
                🎯 Computer Science (Abroad)
              </div>
              <div className="glass px-4 py-2 rounded-xl text-xs font-mono text-light-4">
                🚀 Open to Opportunities
              </div>

              <a
                href="/cv.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary text-sm px-7 py-3.5"
              >
                View CV
              </a>
            </div>
          </motion.div>

          {/* Right Timeline */}
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
                  <div
                    className="shrink-0 w-10 h-10 rounded-xl flex items-center justify-center"
                    style={{
                      backgroundColor: `${m.color}20`,
                      border: `1px solid ${m.color}30`,
                    }}
                  >
                    <Icon size={16} style={{ color: m.color }} />
                  </div>

                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="font-mono text-xs text-light-5">
                        {m.year}
                      </span>
                      <span className="font-sans font-semibold text-sm text-light-2">
                        {m.title}
                      </span>
                    </div>

                    <p className="font-body text-xs text-light-5 leading-relaxed">
                      {m.desc}
                    </p>
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