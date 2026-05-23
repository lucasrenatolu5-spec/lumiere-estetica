import { useEffect, useRef } from 'react'
import { Cursor } from './components/Navbar/Cursor'
import { Navbar } from './components/Navbar/Navbar'
import { Hero } from './components/Hero/Hero'
import { Marquee } from './components/Marquee/Marquee'
import { About } from './components/About/About'
import { Services } from './components/Services/Services'
import { Team } from './components/Team/Team'
import { Numbers } from './components/Numbers/Numbers'
import { Location } from './components/Location/Location'
import { Testimonials } from './components/Testimonials/Testimonials'
import { CTA } from './components/CTA/CTA'
import { Footer } from './components/Footer/Footer'
import './styles/globals.css'

function App() {
  const pageRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    )

    const items = document.querySelectorAll('.reveal, .reveal-left, .reveal-right')
    items.forEach((item) => observer.observe(item))

    return () => observer.disconnect()
  }, [])

  return (
    <div ref={pageRef}>
      <Cursor />
      <Navbar />
      <Hero />
      <Marquee />
      <About />
      <Services />
      <Team />
      <Numbers />
      <Location />
      <Testimonials />
      <CTA />
      <Footer />
    </div>
  )
}

export default App
