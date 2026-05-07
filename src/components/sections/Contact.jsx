import { motion } from 'framer-motion'
import { Mail, Github, Linkedin, Send, MapPin, Clock } from 'lucide-react'
import { useState } from 'react'
import emailjs from '@emailjs/browser'
import { socialLinks } from '../../data/projects'

// ✅ Replace these 3 values with your real EmailJS credentials
const EMAILJS_SERVICE_ID  = 'service_5dy7fkq'
const EMAILJS_TEMPLATE_ID = 'template_mmn9ttr'
const EMAILJS_PUBLIC_KEY  = 'BK0mDSO7sFIbmXeT3'

export default function Contact() {
  const [form, setForm]       = useState({ name: '', email: '', message: '' })
  const [sent, setSent]       = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError]     = useState('')

  const handleChange = (e) =>
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }))

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError('')

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name:  form.name,
          from_email: form.email,
          message:    form.message,
        },
        EMAILJS_PUBLIC_KEY
      )
      setSent(true)
      setForm({ name: '', email: '', message: '' })
      setTimeout(() => setSent(false), 5000)
    } catch (err) {
      console.error(err)
      setError('Something went wrong. Please email me directly.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="contact" className="py-28 px-6">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <span className="section-label">Contact</span>
          <h2 className="font-sans font-extrabold text-4xl sm:text-5xl text-light-1 mb-4 leading-tight">
            Let's Work on Something <span className="gradient-text">Meaningful</span>
          </h2>
          <p className="font-body text-light-4 max-w-2xl mx-auto text-base leading-relaxed">
            I'm open to freelance work, collaborations, and opportunities that involve building
            impactful digital solutions. If you have something in mind, I'd like to hear about it.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">

          {/* Left Panel */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 space-y-4"
          >
            {/* Availability */}
            <div className="glass rounded-2xl p-5">
              <div className="flex items-center gap-2 mb-3">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="font-mono text-xs text-emerald-400 uppercase tracking-widest">
                  Available for Opportunities
                </span>
              </div>
              <p className="font-body text-sm text-light-4 leading-relaxed">
                Currently open to freelance projects, collaborations, and academic opportunities.
              </p>
            </div>

            {/* Location */}
            <div className="glass rounded-2xl p-5 flex items-center gap-4">
              <MapPin size={16} className="text-ink-400 shrink-0" />
              <div>
                <p className="font-body text-sm text-light-3">Nigeria</p>
                <p className="font-mono text-xs text-light-5">GMT+1 (WAT)</p>
              </div>
            </div>

            {/* Response Time */}
            <div className="glass rounded-2xl p-5 flex items-center gap-4">
              <Clock size={16} className="text-ink-400 shrink-0" />
              <div>
                <p className="font-body text-sm text-light-3">Response within 24 hours</p>
                <p className="font-mono text-xs text-light-5">Usually faster</p>
              </div>
            </div>

            {/* Social Links */}
            <div className="glass rounded-2xl p-5 space-y-3">
              <p className="font-mono text-xs text-light-5 uppercase tracking-widest mb-4">
                Connect
              </p>
              {[
                {
                  icon: Mail,
                  label: socialLinks.email,
                  href: `mailto:${socialLinks.email}`,
                  color: '#818cf8',
                },
                {
                  icon: Github,
                  label: 'github.com/Ayanrinde',
                  href: socialLinks.github,
                  color: '#a78bfa',
                },
                {
                  icon: Linkedin,
                  label: 'linkedin.com/in/ayanrinde-gaius',
                  href: socialLinks.linkedin,
                  color: '#c084fc',
                },
              ].map(({ icon: Icon, label, href, color }) => (
                <a
                  key={href}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 group"
                >
                  <div
                    className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0 transition-all group-hover:scale-110"
                    style={{ backgroundColor: `${color}18`, border: `1px solid ${color}28` }}
                  >
                    <Icon size={14} style={{ color }} />
                  </div>
                  <span className="font-mono text-xs text-light-5 group-hover:text-light-2 transition-colors truncate">
                    {label}
                  </span>
                </a>
              ))}
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-3"
          >
            <div className="glass rounded-2xl p-6 sm:p-8">

              {/* Success state */}
              {sent ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center py-16 text-center"
                >
                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center mb-4 text-2xl"
                    style={{ background: 'linear-gradient(135deg, #6d28d9, #a855f7)' }}
                  >
                    ✓
                  </div>
                  <h3 className="font-sans font-bold text-xl text-light-1 mb-2">
                    Message sent successfully!
                  </h3>
                  <p className="font-body text-sm text-light-5">
                    I'll respond within 24 hours.
                  </p>
                </motion.div>

              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block font-mono text-xs text-light-5 mb-2">Name</label>
                      <input
                        type="text"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        required
                        placeholder="Your name"
                        className="w-full px-4 py-3 rounded-xl bg-surface-3 border border-white/5 text-light-2 text-sm focus:outline-none focus:border-ink-500 transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block font-mono text-xs text-light-5 mb-2">Email</label>
                      <input
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        required
                        placeholder="your@email.com"
                        className="w-full px-4 py-3 rounded-xl bg-surface-3 border border-white/5 text-light-2 text-sm focus:outline-none focus:border-ink-500 transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block font-mono text-xs text-light-5 mb-2">Message</label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      placeholder="Describe your project or opportunity..."
                      className="w-full px-4 py-3 rounded-xl bg-surface-3 border border-white/5 text-light-2 text-sm focus:outline-none focus:border-ink-500 resize-none transition-colors"
                    />
                  </div>

                  {/* Error message */}
                  {error && (
                    <div className="flex items-center gap-2 p-3 rounded-xl bg-red-500/10 border border-red-500/20">
                      <p className="font-mono text-xs text-red-400">{error}</p>
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={loading}
                    className="btn-primary w-full justify-center py-3.5 text-sm disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    <Send size={15} />
                    {loading ? 'Sending...' : 'Send Message'}
                  </button>

                  <p className="font-mono text-xs text-light-5 text-center">
                    Prefer email?{' '}
                    <a
                      href={`mailto:${socialLinks.email}`}
                      className="text-ink-400 hover:text-ink-300 transition-colors"
                    >
                      {socialLinks.email}
                    </a>
                  </p>

                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}


















// import { motion } from 'framer-motion'
// import { Mail, Github, Linkedin, Send, MapPin, Clock } from 'lucide-react'
// import { useState } from 'react'
// import { socialLinks } from '../../data/projects'

// export default function Contact() {
//   const [form, setForm] = useState({ name: '', email: '', message: '' })
//   const [sent, setSent] = useState(false)

//   const handleChange = (e) =>
//     setForm((f) => ({ ...f, [e.target.name]: e.target.value }))

//   const handleSubmit = (e) => {
//     e.preventDefault()
//     setSent(true)
//     setTimeout(() => setSent(false), 4000)
//     setForm({ name: '', email: '', message: '' })
//   }

//   return (
//     <section id="contact" className="py-28 px-6">
//       <div className="max-w-6xl mx-auto">

//         {/* Header */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.6 }}
//           className="mb-16 text-center"
//         >
//           <span className="section-label">Contact</span>

//           <h2 className="font-sans font-extrabold text-4xl sm:text-5xl text-light-1 mb-4 leading-tight">
//             Let’s Work on Something <span className="gradient-text">Meaningful</span>
//           </h2>

//           <p className="font-body text-light-4 max-w-2xl mx-auto text-base leading-relaxed">
//             I’m open to freelance work, collaborations, and opportunities that involve building 
//             impactful digital solutions. If you have something in mind, I’d like to hear about it.
//           </p>
//         </motion.div>

//         <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">

//           {/* Left Panel */}
//           <motion.div
//             initial={{ opacity: 0, x: -20 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.6 }}
//             className="lg:col-span-2 space-y-4"
//           >
//             {/* Availability */}
//             <div className="glass rounded-2xl p-5">
//               <div className="flex items-center gap-2 mb-3">
//                 <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
//                 <span className="font-mono text-xs text-emerald-400 uppercase tracking-widest">
//                   Available for Opportunities
//                 </span>
//               </div>
//               <p className="font-body text-sm text-light-4 leading-relaxed">
//                 Currently open to freelance projects, collaborations, and academic opportunities.
//               </p>
//             </div>

//             {/* Location */}
//             <div className="glass rounded-2xl p-5 flex items-center gap-4">
//               <MapPin size={16} className="text-ink-400 shrink-0" />
//               <div>
//                 <p className="font-body text-sm text-light-3">Nigeria</p>
//                 <p className="font-mono text-xs text-light-5">GMT+1 (WAT)</p>
//               </div>
//             </div>

//             {/* Response Time */}
//             <div className="glass rounded-2xl p-5 flex items-center gap-4">
//               <Clock size={16} className="text-ink-400 shrink-0" />
//               <div>
//                 <p className="font-body text-sm text-light-3">Response within 24 hours</p>
//                 <p className="font-mono text-xs text-light-5">Usually faster</p>
//               </div>
//             </div>

//             {/* Social */}
//             <div className="glass rounded-2xl p-5 space-y-3">
//               <p className="font-mono text-xs text-light-5 uppercase tracking-widest mb-4">
//                 Connect
//               </p>

//               {[
//                 {
//                   icon: Mail,
//                   label: socialLinks.email,
//                   href: `mailto:${socialLinks.email}`,
//                   color: '#818cf8',
//                 },
//                 {
//                   icon: Github,
//                   label: 'github.com/Ayanrinde',
//                   href: socialLinks.github,
//                   color: '#a78bfa',
//                 },
//                 {
//                   icon: Linkedin,
//                   label: 'linkedin.com/in/ayanrinde-gaius',
//                   href: socialLinks.linkedin,
//                   color: '#c084fc',
//                 },
//               ].map(({ icon: Icon, label, href, color }) => (
//                 <a
//                   key={href}
//                   href={href}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="flex items-center gap-3 group"
//                 >
//                   <div
//                     className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0 transition-all group-hover:scale-110"
//                     style={{
//                       backgroundColor: `${color}18`,
//                       border: `1px solid ${color}28`,
//                     }}
//                   >
//                     <Icon size={14} style={{ color }} />
//                   </div>

//                   <span className="font-mono text-xs text-light-5 group-hover:text-light-2 transition-colors truncate">
//                     {label}
//                   </span>
//                 </a>
//               ))}
//             </div>
//           </motion.div>

//           {/* Form */}
//           <motion.div
//             initial={{ opacity: 0, x: 20 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.6, delay: 0.1 }}
//             className="lg:col-span-3"
//           >
//             <div className="glass rounded-2xl p-6 sm:p-8">

//               {sent ? (
//                 <motion.div
//                   initial={{ opacity: 0, scale: 0.95 }}
//                   animate={{ opacity: 1, scale: 1 }}
//                   className="flex flex-col items-center justify-center py-16 text-center"
//                 >
//                   <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-4 text-2xl"
//                     style={{ background: 'linear-gradient(135deg, #6d28d9, #a855f7)' }}>
//                     ✓
//                   </div>

//                   <h3 className="font-sans font-bold text-xl text-light-1 mb-2">
//                     Message sent successfully
//                   </h3>

//                   <p className="font-body text-sm text-light-5">
//                     I’ll respond within 24 hours.
//                   </p>
//                 </motion.div>

//               ) : (
//                 <form onSubmit={handleSubmit} className="space-y-5">

//                   <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
//                     <div>
//                       <label className="block font-mono text-xs text-light-5 mb-2">
//                         Name
//                       </label>
//                       <input
//                         type="text"
//                         name="name"
//                         value={form.name}
//                         onChange={handleChange}
//                         required
//                         placeholder="Your name"
//                         className="w-full px-4 py-3 rounded-xl bg-surface-3 border border-white/5 text-light-2 text-sm focus:outline-none focus:border-ink-500"
//                       />
//                     </div>

//                     <div>
//                       <label className="block font-mono text-xs text-light-5 mb-2">
//                         Email
//                       </label>
//                       <input
//                         type="email"
//                         name="email"
//                         value={form.email}
//                         onChange={handleChange}
//                         required
//                         placeholder="your@email.com"
//                         className="w-full px-4 py-3 rounded-xl bg-surface-3 border border-white/5 text-light-2 text-sm focus:outline-none focus:border-ink-500"
//                       />
//                     </div>
//                   </div>

//                   <div>
//                     <label className="block font-mono text-xs text-light-5 mb-2">
//                       Message
//                     </label>
//                     <textarea
//                       name="message"
//                       value={form.message}
//                       onChange={handleChange}
//                       required
//                       rows={6}
//                       placeholder="Describe your project or opportunity..."
//                       className="w-full px-4 py-3 rounded-xl bg-surface-3 border border-white/5 text-light-2 text-sm focus:outline-none focus:border-ink-500 resize-none"
//                     />
//                   </div>

//                   <button
//                     type="submit"
//                     className="btn-primary w-full justify-center py-3.5 text-sm"
//                   >
//                     <Send size={15} />
//                     Send Message
//                   </button>

//                   <p className="font-mono text-xs text-light-5 text-center">
//                     Prefer email?{' '}
//                     <a
//                       href={`mailto:${socialLinks.email}`}
//                       className="text-ink-400 hover:text-ink-300"
//                     >
//                       {socialLinks.email}
//                     </a>
//                   </p>

//                 </form>
//               )}

//             </div>
//           </motion.div>

//         </div>
//       </div>
//     </section>
//   )
// }