import { useState } from 'react'
import { AnimatePresence } from 'framer-motion'
import Loader from './components/ui/Loader'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import Hero from './components/sections/Hero'
import Projects from './components/sections/Projects'
import CaseStudy from './components/sections/CaseStudy'
import Services from './components/sections/Services'
import About from './components/sections/About'
import Skills from './components/sections/Skills'
import Vision from './components/sections/Vision'
import Blog from './components/sections/Blog'
import Contact from './components/sections/Contact'

export default function App() {
  const [loading, setLoading] = useState(true)

  return (
    <div className="bg-gradient-to-b from-[#0F0F12] via-[#121217] to-[#0A0A0A] text-[#EDEDED]">
      
      {/* Loader Animation */}
      <AnimatePresence mode="wait">
        {loading && (
          <Loader key="loader" onComplete={() => setLoading(false)} />
        )}
      </AnimatePresence>

      {/* Main App */}
      {!loading && (
        <>
          <Navbar />

          <main className="overflow-hidden">
            <Hero />
            <Projects />
            <CaseStudy />

            {/* Client Conversion Section */}
            <Services />

            <About />
            <Skills />
            <Vision />
            <Blog />
            <Contact />
          </main>

          <Footer />
        </>
      )}
    </div>
  )
}