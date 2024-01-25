import { motion } from "framer-motion"
import { scrollToElement } from "@/lib/utils"
import { $background_color } from "@/stores/background"
import { useEffect, useState } from "react"
import useScreen from "@/hooks/useScreen"

const LINKS = [
  {
    title: "Home",
    href: "home",
  },
  {
    title: "About",
    href: "about",
  },
  {
    title: "Timeline",
    href: "timeline",
  },
  {
    title: "Projects",
    href: "projects",
  },
  {
    title: "Let's talk",
    href: "contact",
  },
]

const SLIDEIN = {
  initial: {
    opacity: 0,
    y: 20,
  },
  enter: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.1,
      delay: 0.3 + i * 0.1,
      ease: [0.215, 0.61, 0.355, 1],
    },
  }),
  exit: {
    opacity: 0,
    transition: { duration: 0.3, type: "tween", ease: "easeInOut" },
  },
}

const Index = () => {
  const [textColor, setTextCololr] = useState("text-primary")
  const location = window.location.pathname
  const { isLarge, isMedium } = useScreen()

  const getHref = (href: string) => {
    const location = window.location.pathname
    if (location === "/") return href
    else {
      if (href === "projects") {
        const project = location.split("/")[1]
        return "/#projects-" + project
      }
      return "/#" + href
    }
  }

  const getTextSize = () => {
    if (isLarge) return "text-5xl"
    else if (isMedium) return "text-4xl"
    else return "text-lg"
  }

  useEffect(() => {
    const unbindListenerBackground = $background_color.subscribe((value) => {
      const location = window.location.pathname
      if (location !== "/") setTextCololr("text-secondary")
      else if (value === "bg-primary") setTextCololr("text-primary")
      else setTextCololr("text-secondary")
    })

    return () => {
      unbindListenerBackground()
    }
  }, [])

  return (
    <div className="lg:pt-10 pt-5 pl-12">
      <div className="flex lg:gap-4 md:gap-4 gap-1 flex-col">
        {LINKS.map((link, i) => {
          const { title, href } = link
          return (
            <div key={`b_${i}`}>
              {location === "/" ? (
                <motion.p
                  className={`${getTextSize()} cursor-pointer w-fit hover:underline ${textColor} font-semibold`}
                  onClick={() => scrollToElement(href)}
                  custom={i}
                  variants={SLIDEIN}
                  initial="initial"
                  animate="enter"
                  exit="exit"
                >
                  {title}
                </motion.p>
              ) : (
                <motion.a
                  className={`${getTextSize()} cursor-pointer w-fit hover:underline ${textColor} font-semibold`}
                  href={getHref(href)}
                  custom={i}
                  variants={SLIDEIN}
                  initial="initial"
                  animate="enter"
                  exit="exit"
                >
                  {title}
                </motion.a>
              )}
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Index
