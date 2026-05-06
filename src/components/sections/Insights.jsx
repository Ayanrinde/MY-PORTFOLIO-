import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'

const insights = [
  {
    tag: 'Engineering',
    date: 'Dec 2024',
    title: 'Why I Stopped Following Tutorials and Started Building Real Apps',
    excerpt: 'Real growth started when I shifted from replicating tutorials to solving real constraints and user problems. Here\'s what I learned.',
    readTime: '4 min read',
    color: '#6366f1',
  },
  {
    tag: 'Design',
    date: 'Nov 2024',
    title: 'Performance is a Feature: Optimizing React Apps for Low-Bandwidth Users',
    excerpt: 'Building for Nigeria means building for 3G. A practical guide to making React apps fast on slow connections.',
    readTime: '6 min read',
    color: '#8b5cf6',
  },
  {
    tag: 'Career',
    date: 'Oct 2024',
    title: 'Applying to CS Programs Abroad as a Self-Taught Developer',
    excerpt: 'No traditional CS degree, but a portfolio of real projects. Here\'s my strategy for standing out in competitive applications.',
    readTime: '5 min read',
    color: '#a855f7',
  },
]

export default function Insights() {
  return (
    <section id="insights" className="py-28 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col sm:flex-row sm:items-end sm:justify-between mb-14 gap-4"
        >
          <div>
            <span className="section-label">Insights</span>
            <h2 className="font-sans font-extrabold text-4xl sm:text-5xl text-light-1 leading-tight">
  How I Think About <span className="gradient-text">Building</span>
</h2>
          </div>
          <p className="font-body text-light-5 text-sm max-w-xs">
  Short reflections on engineering, systems, and problem-solving.
</p>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {insights.map((post, i) => (
            <motion.article
              key={post.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="glass-hover rounded-2xl p-6 group cursor-pointer flex flex-col"
            >
              <div className="flex items-center justify-between mb-5">
                <span
                  className="px-2.5 py-1 rounded-lg text-xs font-mono font-medium"
                  style={{ backgroundColor: `${post.color}18`, color: post.color, border: `1px solid ${post.color}28` }}
                >
                  {post.tag}
                </span>
                <span className="font-mono text-xs text-light-5">{post.date}</span>
              </div>

              <h3 className="font-sans font-bold text-base text-light-1 leading-snug mb-3 flex-1">
                {post.title}
              </h3>

              <p className="font-body text-xs text-light-5 leading-relaxed mb-5">
                {post.excerpt}
              </p>

              <div className="flex items-center justify-between pt-4 border-t border-white/5">
                <span className="font-mono text-xs text-light-5">{post.readTime}</span>
                <div
                  className="flex items-center gap-1 text-xs font-body font-medium opacity-0 group-hover:opacity-100 transition-opacity"
                  style={{ color: post.color }}
                >
                  Read more <ArrowUpRight size={12} />
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
