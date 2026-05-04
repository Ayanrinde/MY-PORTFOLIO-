import { motion, AnimatePresence } from 'framer-motion'
import { useEffect, useState } from 'react'

export default function Loader({ onComplete }) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCount(prev => {
        if (prev >= 100) {
          clearInterval(interval)
          setTimeout(onComplete, 400)
          return 100
        }
        return prev + 2
      })
    }, 20)
    return () => clearInterval(interval)
  }, [onComplete])

  return (
    <motion.div
      className="fixed inset-0 z-[999] flex flex-col items-center justify-center bg-surface-0"
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6, ease: 'easeInOut' }}
    >
      {/* Logo mark */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="mb-10"
      >
        <div className="w-16 h-16 rounded-2xl flex items-center justify-center relative"
          style={{ background: 'linear-gradient(135deg, #6d28d9, #a855f7)' }}>
          <span className="font-sans font-bold text-2xl text-white">D</span>
          <div className="absolute inset-0 rounded-2xl animate-glow"
            style={{ background: 'linear-gradient(135deg, #6d28d9, #a855f7)', filter: 'blur(12px)', opacity: 0.4, zIndex: -1 }} />
        </div>
      </motion.div>

      {/* Counter */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="font-mono text-5xl font-medium text-light-4 mb-8 tabular-nums"
      >
        {String(count).padStart(3, '0')}
      </motion.div>

      {/* Progress bar */}
      <div className="w-48 h-px bg-surface-4 relative overflow-hidden rounded-full">
        <motion.div
          className="absolute inset-y-0 left-0 loader-bar"
          style={{ width: `${count}%` }}
          transition={{ duration: 0.1 }}
        />
      </div>

      {/* Label */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="mt-6 font-mono text-xs text-light-5 tracking-widest uppercase"
      >
        Loading experience
      </motion.p>
    </motion.div>
  )
}
