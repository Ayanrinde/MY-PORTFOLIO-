import { motion } from 'framer-motion'
import { skills, techBadges } from '../../data/projects'

function SkillBar({ name, level, color, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.07, duration: 0.5 }}
      className="mb-4"
    >
      <div className="flex items-center justify-between mb-1.5">
        <span className="font-body text-sm text-light-3">{name}</span>
        <span className="font-mono text-xs text-light-5">{level}%</span>
      </div>
      <div className="h-1.5 bg-surface-4 rounded-full overflow-hidden">
        <motion.div
          className="h-full rounded-full"
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: index * 0.07 + 0.2, ease: [0.16, 1, 0.3, 1] }}
          style={{ background: `linear-gradient(90deg, ${color}aa, ${color})` }}
        />
      </div>
    </motion.div>
  )
}

export default function Skills() {
  return (
    <section id="skills" className="py-28 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="section-label">Capabilities</span>
          <h2 className="font-sans font-extrabold text-4xl sm:text-5xl text-light-1 mb-4 leading-tight">
            Skills & <span className="gradient-text">Expertise</span>
          </h2>
          <p className="font-body text-light-4 max-w-xl text-base leading-relaxed">
            A curated stack built through real projects — not just certifications.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {skills.map((group, gi) => (
            <motion.div
              key={gi}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: gi * 0.1, duration: 0.6 }}
              className="glass rounded-2xl p-6"
            >
              <div className="flex items-center gap-3 mb-6">
                <span className="text-xl">{group.icon}</span>
                <h3 className="font-sans font-semibold text-light-2 text-base">{group.category}</h3>
              </div>
              {group.items.map((skill, si) => (
                <SkillBar
                  key={skill.name}
                  name={skill.name}
                  level={skill.level}
                  color={group.color}
                  index={si}
                />
              ))}
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="overflow-hidden"
        >
          <p className="font-mono text-xs text-light-5 uppercase tracking-widest text-center mb-4">Tech I work with</p>
          <div className="relative">
            <div className="flex gap-3 animate-marquee whitespace-nowrap">
              {[...techBadges, ...techBadges].map((badge, i) => (
                <span
                  key={i}
                  className="inline-flex items-center px-4 py-2 rounded-xl text-xs font-mono text-light-4 glass shrink-0"
                >
                  {badge}
                </span>
              ))}
            </div>
            <div className="absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-surface-0 to-transparent pointer-events-none" />
            <div className="absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-surface-0 to-transparent pointer-events-none" />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
