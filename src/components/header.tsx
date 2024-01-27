import { useEffect, useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import Button from "@/components/nav/button"
import Nav from "@/components/nav"
import { $background_color } from "@/stores/background"
import useScreen from "@/hooks/useScreen"

export default function Index() {
  const [isActive, setIsActive] = useState(false)
  const [background_color, setBackground_color] = useState("bg-primary")
  const { isLarge, isMedium } = useScreen()

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

  useEffect(() => {
    const unbindListenerBackground = $background_color.subscribe((value) => {
      const location = window.location.pathname
      if (location !== "/") setBackground_color("bg-primary")
      else if (value === "bg-primary") setBackground_color("bg-secondary")
      else setBackground_color("bg-primary")
    })

    return () => {
      unbindListenerBackground()
    }
  }, [])

  return (
    <div className="fixed lg:top-10 top-5 lg:right-10 right-8 z-[99999] ">
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
    </div>
  )
}
