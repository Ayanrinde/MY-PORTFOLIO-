import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

export default function Loader({ onComplete }) {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    let start = 0

    const interval = setInterval(() => {
      start += Math.random() * 8 // more organic movement

      if (start >= 100) {
        start = 100
        clearInterval(interval)

        setTimeout(() => {
          onComplete()
        }, 500)
      }

      setProgress(Math.floor(start))
    }, 60)

    return () => clearInterval(interval)
  }, [onComplete])

  return (
    <motion.div
      className="fixed inset-0 z-[999] flex flex-col items-center justify-center bg-surface-0"
      exit={{ opacity: 0, scale: 1.02 }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
    >
      {/* Logo / Identity */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-10 text-center"
      >
        <h1 className="font-sans font-extrabold text-3xl text-light-1 tracking-tight">
          <span className='gradient-text'> Gaius </span>  
          Ayanrinde
        </h1>

        <p className="font-mono text-xs text-light-5 mt-1 tracking-widest uppercase">
          Frontend Engineer
        </p>
      </motion.div>

      {/* Counter */}
      <motion.div
        key={progress}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="font-mono text-4xl text-light-4 mb-6 tabular-nums"
      >
        {String(progress).padStart(3, '0')}
      </motion.div>

      {/* Progress bar */}
      <div className="w-56 h-[2px] bg-surface-4 rounded-full overflow-hidden">
        <motion.div
          className="h-full"
          style={{
            width: `${progress}%`,
            background: 'linear-gradient(90deg, #6d28d9, #a855f7)',
          }}
          transition={{ duration: 0.4 }}
        />
      </div>

      {/* Message */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="mt-6 font-mono text-xs text-light-5 tracking-widest uppercase"
      >
        Preparing something meaningful
      </motion.p>
    </motion.div>
  )
}