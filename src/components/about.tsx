import { setBackgroundColor } from "@/stores/background"
import { useEffect, useRef } from "react"
import Reveal from "./reaveal"

const About = () => {
  const targetRef = useRef(null)

  const calculateAge = () => {
    const birthDate = new Date("2002-03-29")
    const currentDate = new Date()
    const age = currentDate.getFullYear() - birthDate.getFullYear()
    const m = currentDate.getMonth() - birthDate.getMonth()
    if (m < 0 || (m === 0 && currentDate.getDate() < birthDate.getDate())) {
      return age - 1
    }
    return age
  }

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setBackgroundColor("bg-secondary")
          }
        })
      },
      {
        threshold: 0.5,
      },
    )

    if (targetRef.current) {
      observer.observe(targetRef.current)
    }
    return () => {
      observer.disconnect()
    }
  }, [targetRef.current])

  return (
    <div id="about" ref={targetRef} className="h-screen bg-primary w-full">
      <div className="bg-secondary rounded-[24px] w-full h-full">
        <Reveal classList="w-full h-full flex justify-center items-center">
          <article className="p-2 sm:w-4/6 w-full sm:text-left text-center leading-[1] sm:text-[3.902vw] text-3xl font-bold">
            <h2 className="scroll-m-20 tracking-tight h-fit">
              My name is Bryan Van Winnendael,
            </h2>
            <h2 className="scroll-m-20 tracking-tight h-fit">
              I&apos;m a {calculateAge()} year old full stack developer based in
              Belgium.
            </h2>
          </article>
        </Reveal>
      </div>
    </div>
  )
}

export default About
