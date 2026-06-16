import Nav from './components/Nav.jsx'
import Hero from './components/Hero.jsx'
import Projects from './components/Projects.jsx'
import FallingFood from './components/FallingFood.jsx'
import { About, Experience, Skills, Contact, Footer } from './components/Sections.jsx'

export default function App() {
  return (
    <>
      <FallingFood />
      <Nav />
      <main>
        <Hero />
        <About />
        <Projects />
        <Experience />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
