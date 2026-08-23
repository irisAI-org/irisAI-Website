import { useEffect } from 'react'
import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import Features from './components/Features.jsx'
import StatsBand from './components/StatsBand.jsx'
import HowItWorks from './components/HowItWorks.jsx'
import Compare from './components/Compare.jsx'
import Testimonials from './components/Testimonials.jsx'
import Integrations from './components/Integrations.jsx'
import Numbers from './components/Numbers.jsx'
import FAQ from './components/FAQ.jsx'
import CTA from './components/CTA.jsx'
import Footer from './components/Footer.jsx'

// Reveal-on-scroll for any element with the `reveal` class.
function useScrollReveal() {
  useEffect(() => {
    const els = document.querySelectorAll('.reveal')
    if (!('IntersectionObserver' in window)) {
      els.forEach((el) => el.classList.add('in'))
      return
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('in')
            io.unobserve(e.target)
          }
        })
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' },
    )
    els.forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [])
}

export default function App() {
  useScrollReveal()
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Features />
        <StatsBand />
        <HowItWorks />
        <Compare />
        <Testimonials />
        <Integrations />
        <Numbers />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </>
  )
}
