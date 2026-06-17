import { useRef } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import Design from './components/Design'
import Benefits from './components/Benefits'
import About from './components/About'
import Evolution from './components/Evolution'
import Team from './components/Team'
import Contact from './components/Contact'
import Footer from './components/Footer'
import './App.css'

function App() {
  const heroRef = useRef(null)

  return (
    <>
      <Navbar />
      <main>
        <Hero heroRef={heroRef} />
        <Features />
        <Design />
        <Benefits />
        <About />
        <Evolution />
        <Team />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App
