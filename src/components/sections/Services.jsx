import { motion } from 'framer-motion'
import { Code2, LayoutDashboard, Rocket, Wrench } from 'lucide-react'

const services = [
  {
    icon: Code2,
    title: 'Frontend Development',
    desc: 'Building fast, responsive, and user-focused web applications using modern technologies like React and Tailwind CSS.',
    highlight: 'Performance · Accessibility · Clean UI',
    color: '#6366f1',
  },
  {
    icon: LayoutDashboard,
    title: 'Web App Interfaces',
    desc: 'Designing and developing structured dashboards and interfaces for systems like portals, admin panels, and data-driven applications.',
    highlight: 'Clarity · Usability · Scalability',
    color: '#8b5cf6',
  },
  {
    icon: Rocket,
    title: 'Product-Focused Builds',
    desc: 'Turning ideas into functional products — from concept to working MVP — with a strong focus on solving real-world problems.',
    highlight: 'Problem-Solving · Execution · Impact',
    color: '#a855f7',
  },
  {
    icon: Wrench,
    title: 'Optimization & Improvements',
    desc: 'Improving existing websites by enhancing performance, responsiveness, and overall user experience.',
    highlight: 'Speed · UX · Refinement',
    color: '#c084fc',
  },
]

export default function Services() {
  return (
    <section id="services" className="py-28 px-6">
      <div className="max-w-5xl mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="section-label">What I Do</span>

          <h2 className="font-sans font-extrabold text-4xl sm:text-5xl text-light-1 mb-4 leading-tight">
            Solving Problems Through <span className="gradient-text">Software</span>
          </h2>

          <p className="font-body text-light-4 max-w-xl text-base leading-relaxed">
            I focus on building practical, high-quality web applications that are not only visually clean but also reliable, efficient, and user-centered.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {services.map((service, i) => {
            const Icon = service.icon
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                className="glass-hover rounded-2xl p-6 flex gap-4"
              >
                <div
                  className="shrink-0 w-11 h-11 rounded-xl flex items-center justify-center"
                  style={{
                    backgroundColor: `${service.color}18`,
                    border: `1px solid ${service.color}28`,
                  }}
                >
                  <Icon size={18} style={{ color: service.color }} />
                </div>

                <div>
                  <h3 className="font-sans font-semibold text-light-1 text-base mb-2">
                    {service.title}
                  </h3>

                  <p className="font-body text-sm text-light-5 leading-relaxed mb-2">
                    {service.desc}
                  </p>

                  <span className="font-mono text-xs text-light-5">
                    {service.highlight}
                  </span>
                </div>
              </motion.div>
            )
          })}
        </div>

      </div>
    </section>
  )
}