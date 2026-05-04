import { useState } from 'react'
import { AnimatePresence } from 'framer-motion'
import Loader from './components/ui/Loader'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import Hero from './components/sections/Hero'
import Projects from './components/sections/Projects'
import CaseStudy from './components/sections/CaseStudy'
import About from './components/sections/About'
import Skills from './components/sections/Skills'
import Vision from './components/sections/Vision'
import Blog from './components/sections/Blog'
import Contact from './components/sections/Contact'
import { useTheme } from './hooks/useTheme'

export default function App() {
  const [loading, setLoading] = useState(true)
  const { theme, toggle } = useTheme()

  return (
    <>
      <AnimatePresence mode="wait">
        {loading && <Loader key="loader" onComplete={() => setLoading(false)} />}
      </AnimatePresence>

      {!loading && (
        <>
          <Navbar theme={theme} toggleTheme={toggle} />
          <main>
            <Hero />
            <Projects />
            <CaseStudy />
            <About />
            <Skills />
            <Vision />
            <Blog />
            <Contact />
          </main>
          <Footer />
        </>
      )}
    </>
  )
}
