import { motion } from "framer-motion"
import { useEffect, useRef } from "react"
import ScrollLine from "@/components/scrollLine"
import { setBackgroundColor } from "@/stores/background"
import { scrollToElement } from "@/lib/utils"
import useScreen from "@/hooks/useScreen"

const Hero = () => {
  const targetRef = useRef(null)
  const { isSmall } = useScreen()

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setBackgroundColor("bg-primary")
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
    <motion.div
      ref={targetRef}
      className="h-screen w-full bg-primary select-none text-secondary flex flex-col justify-center"
    >
      <div className="text-secondary leading-[1.1] sm:px-12 px-2 flex flex-col gap-4 sm:text-[7.317vw] text-6xl">
        <div className="sm:text-left text-center">
          <h1 className="scroll-m-20 font-extrabold tracking-tight h-fit">
            Full Stack Developer
          </h1>
        </div>
        <div className="sm:text-right text-center">
          <h1 className="scroll-m-20 font-extrabold tracking-tight h-fit">
            Bryan Van Winnendael
          </h1>
        </div>
      </div>
      {isSmall && (
        <div className="w-full flex justify-center mt-5">
          <div
            onClick={() => scrollToElement("contact")}
            className="text-primary bg-secondary h-[35px] w-[100px] cursor-pointer overflow-hidden rounded-3xl flex items-center justify-center"
          >
            <p className="flex flex-col justify-center text-center items-center md:text-[24px] h-full w-full font-semibold">
              Let's talk!
            </p>
          </div>
        </div>
      )}

      <div className="flex justify-end text-sm w-full h-12 lowercase px-5 absolute bottom-5 right-0">
        <div className="flex items-center rotate-90">
          <p className="text-md">Scroll</p>
          <ScrollLine />
        </div>
      </div>
    </motion.div>
  )
}

export default Hero
