import About from "@/components/about"
import Hero from "@/components/hero"
import Experience from "@/components/experience"
import ProjectsGrid from "@/components/projectsGrid"
import Contact from "@/components/contact"
import { ReactLenis } from "@studio-freight/react-lenis"
import { useEffect } from "react"
import { scrollToElement } from "@/lib/utils"

const Home = () => {

  useEffect(() => {
    const id = window.location.hash
    if (id) scrollToElement(id)

  },[])
  return (
    <ReactLenis root>
      <main id="home" className="h-full w-full">
        <Hero />
        <About />
        <Experience />
        <ProjectsGrid />
        <Contact />
      </main>
    </ReactLenis>
  )
}

export default Home
