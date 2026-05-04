import { motion } from 'framer-motion'
import { ArrowUpRight, Clock } from 'lucide-react'

const posts = [
  {
    tag: 'Engineering',
    title: 'Why I stopped following tutorials and started building real things',
    excerpt: 'The moment I quit copying code and started asking "what problem does this solve?" is when I actually started growing as a developer.',
    readTime: '4 min read',
    date: 'Nov 2024',
    color: '#818cf8',
  },
  {
    tag: 'Design',
    title: 'Building UIs for low-bandwidth users: what I learned',
    excerpt: 'When your users are on 3G connections in Lagos, performance is not a "nice-to-have" — it is the product. Here is how I think about it.',
    readTime: '5 min read',
    date: 'Oct 2024',
    color: '#a78bfa',
  },
  {
    tag: 'Career',
    title: 'Applying to CS programs abroad as a self-taught developer',
    excerpt: 'Documenting my journey from self-taught to pursuing a formal CS degree at a world-class institution — the strategy, the struggles, the plan.',
    readTime: '6 min read',
    date: 'Sep 2024',
    color: '#c084fc',
  },
]

export default function Blog() {
  return (
    <section id="blog" className="py-28 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="section-label">Thoughts & Insights</span>
          <h2 className="font-sans font-extrabold text-4xl sm:text-5xl text-light-1 mb-4 leading-tight">
            Writing <span className="gradient-text">Out Loud</span>
          </h2>
          <p className="font-body text-light-4 max-w-xl text-base leading-relaxed">
            Notes on engineering, design, career, and building things that matter.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {posts.map((post, i) => (
            <motion.article
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="group glass-hover rounded-2xl p-6 flex flex-col cursor-pointer"
            >
              <div className="flex items-center justify-between mb-4">
                <span
                  className="px-3 py-1 rounded-lg text-xs font-mono font-medium"
                  style={{ backgroundColor: `${post.color}18`, color: post.color, border: `1px solid ${post.color}28` }}
                >
                  {post.tag}
                </span>
                <ArrowUpRight
                  size={15}
                  className="text-light-5 transition-all group-hover:text-ink-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </div>

              <h3 className="font-sans font-bold text-light-1 text-base leading-snug mb-3 flex-1">
                {post.title}
              </h3>

              <p className="font-body text-xs text-light-5 leading-relaxed mb-4 line-clamp-3">
                {post.excerpt}
              </p>

              <div className="flex items-center gap-3 pt-4 border-t border-white/5">
                <Clock size={11} className="text-light-5" />
                <span className="font-mono text-xs text-light-5">{post.readTime}</span>
                <span className="text-light-5">·</span>
                <span className="font-mono text-xs text-light-5">{post.date}</span>
              </div>
            </motion.article>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-10 flex justify-center"
        >
          <button className="btn-secondary text-sm">
            More articles coming soon
          </button>
        </motion.div>
      </div>
    </section>
  )
}
