import { useRef, useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Ecosystem from './components/Ecosystem'
import Features from './components/Features'
import AppShowcase from './components/AppShowcase'
import Competition from './components/Competition'
import Design from './components/Design'
import Benefits from './components/Benefits'
import MiniEink from './components/MiniEink'
import Evolution from './components/Evolution'
import FieldTesting from './components/FieldTesting'
import Team from './components/Team'
import Contact from './components/Contact'
import Footer from './components/Footer'
import BackToTop from './components/BackToTop'
import './App.css'

function App() {
  const heroRef = useRef(null)

  useEffect(() => {
    const sections = Array.from(document.querySelectorAll('main > section')).slice(1)
    if (!sections.length || !('IntersectionObserver' in window)) return

    sections.forEach((sec) => {
      if (sec.getBoundingClientRect().top > window.innerHeight * 0.9) {
        sec.classList.add('reveal-pending')
      }
    })

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('reveal-visible')
            entry.target.classList.remove('reveal-pending')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.06, rootMargin: '0px 0px -30px 0px' }
    )

    sections.forEach((sec) => observer.observe(sec))
    return () => observer.disconnect()
  }, [])

  return (
    <>
      <Navbar />
      <main>
        {/* 1. KHỐI CHÍNH: SMARTCLOCK AI (ESP32 + FLUTTER + GEMINI AI) */}
        <Hero heroRef={heroRef} />
        <Ecosystem />
        <Features />
        <AppShowcase />
        <Competition />
        <Design />
        <Benefits />

        {/* 2. KHỐI MỞ RỘNG: DÒNG MINI E-INK BỎ TÚI & APP POMO MINI ANH */}
        <MiniEink />

        {/* 3. LỘ TRÌNH, HOẠT ĐỘNG THỰC TẾ, ĐỘI NGŨ & LIÊN HỆ */}
        <Evolution />
        <FieldTesting />
        <Team />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </>
  )
}

export default App
