import { useEffect, useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import Button from "@/components/nav/button"
import Nav from "@/components/nav"
import { $background_color } from "@/stores/background"
import useScreen from "@/hooks/useScreen"
import { scrollToElement } from "@/lib/utils"

export default function Index() {
  const [isActive, setIsActive] = useState(false)
  const [background_color, setBackground_color] = useState("bg-primary")
  const { isLarge, isMedium, isSmall } = useScreen()
  const [isTop, setIsTop] = useState(true)
  const [location, setLocation] = useState("")

  const getHeigth = () => {
    if (isActive) {
      if (isLarge) return "384px"
      else if (isMedium) return "292px"
      else return "200px"
    } else {
      if (isLarge) return "40px"
      else return "35px"
    }
  }

  const getWidth = () => {
    if (isActive) {
      if (isLarge) return "480px"
      else if (isMedium) return "384px"
      else return "292px"
    } else {
      if (isLarge) return "100px"
      else return "80px"
    }
  }

  const getOffset = () => {
    if (isActive) {
      if (isLarge) return "-25px"
      else return "-15px"
    } else {
      return "0px"
    }
  }

  const getTop = () => {
    if (isLarge) return "2.5rem"
    else return "1.25rem"
  }

  useEffect(() => {
    const unbindListenerBackground = $background_color.subscribe((value) => {
      const location = window.location.pathname
      if (location !== "/") setBackground_color("bg-primary")
      else if (value === "bg-primary") setBackground_color("bg-secondary")
      else setBackground_color("bg-primary")
    })

    const location = window.location.pathname
    setLocation(location)

    const checkTop = () => {
      if (window.scrollY === 0) setIsTop(true)
      else setIsTop(false)
    }
    checkTop()
    window.addEventListener("scroll", checkTop)

    return () => {
      unbindListenerBackground()
      window.removeEventListener("scroll", checkTop)
    }
  }, [])

  return (
    <>
      {location === "/" && (
        <motion.div
          initial="open"
          variants={{
            open: {
              x: 0,
              transition: {
                duration: 0.4,
                type: "tween",
                ease: [0.76, 0, 0.24, 1],
              },
            },
            closed: {
              y: "-100%",
              transition: {
                duration: 0.4,
                type: "tween",
                ease: [0.76, 0, 0.24, 1],
              },
            },
          }}
          animate={isTop && location === "/" ? "open" : "closed"}
          className="flex justify-between items-center fixed top-0 w-full bg-primary sm:p-6 p-2 uppercase font-semibold"
        >
          <li className="flex md:gap-4 gap-3 md:text-lg text-sm">
            <p
              onClick={() => scrollToElement("about")}
              className="text-muted-foreground cursor-pointer"
            >
              About me
            </p>
            <p
              onClick={() => scrollToElement("experience")}
              className="text-muted-foreground cursor-pointer"
            >
              Experience
            </p>
            <p
              onClick={() => scrollToElement("projects")}
              className="text-muted-foreground cursor-pointer"
            >
              Select work
            </p>
          </li>
          {!isSmall && (
            <div
              onClick={() => scrollToElement("contact")}
              className="w-[80px] text-primary bg-secondary h-[35px] lg:w-[100px] lg:h-[40px] cursor-pointer overflow-hidden rounded-3xl flex items-center justify-center"
            >
              <p className="flex flex-col justify-center text-center items-center md:text-[13px] text-xs h-full w-full font-semibold">
                Let's talk!
              </p>
            </div>
          )}
        </motion.div>
      )}

      <motion.div
        initial="closed"
        variants={{
          open: {
            top: getTop(),
            transition: {
              duration: 0.4,
              type: "tween",
              ease: [0.76, 0, 0.24, 1],
            },
          },
          closed: {
            top: "-100%",
            transition: {
              duration: 0.4,
              type: "tween",
              ease: [0.76, 0, 0.24, 1],
            },
          },
        }}
        animate={isTop && location === "/" ? "closed" : "open"}
        className="fixed lg:top-10 top-5 lg:right-10 right-8 z-[99999] "
      >
        <motion.div
          className={`${background_color} relative rounded-3xl`}
          variants={{
            open: {
              width: getWidth(),
              height: getHeigth(),
              top: getOffset(),
              right: getOffset(),
              transition: {
                duration: 0.4,
                type: "tween",
                ease: [0.76, 0, 0.24, 1],
              },
            },
            closed: {
              width: getWidth(),
              height: getHeigth(),
              top: getOffset(),
              right: getOffset(),
              transition: {
                duration: 0.4,
                delay: 0.35,
                type: "tween",
                ease: [0.76, 0, 0.24, 1],
              },
            },
          }}
          animate={isActive ? "open" : "closed"}
          initial="closed"
        >
          <AnimatePresence>{isActive && <Nav />}</AnimatePresence>
        </motion.div>
        <Button
          isActive={isActive}
          toggleMenu={() => {
            setIsActive(!isActive)
          }}
        />
      </motion.div>
    </>
  )
}
