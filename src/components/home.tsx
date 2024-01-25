import { useEffect, useState } from "react"
import { $background_color } from "@/stores/background"
import About from "@/components/about"
import Hero from "@/components/hero"
import Timeline from "@/components/timeline"
import ProjectsGrid from "@/components/projectsGrid"
import Contact from "@/components/contact"

const Home = () => {
  const [background_color, setBackground_color] = useState("bg-primary")

  useEffect(() => {
    const unbindListenerBackground = $background_color.subscribe((value) => {
      setBackground_color(value)
    })

    return () => {
      unbindListenerBackground()
    }
  }, [])

  return (
    <main
      id="home"
      className={`${background_color} duration-150 bg-animate h-full`}
    >
      <Hero />
      <About />
      <Timeline />
      <ProjectsGrid />
      <Contact />
    </main>
  )
}

export default Home
