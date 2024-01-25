import { useEffect, useState } from "react"
import { Button } from "./ui/button"
import { $background_color } from "@/stores/background"
import { scrollToElement } from "@/lib/utils"

const Nav = () => {
  const [background_color, setBackground_color] = useState("bg-primary")
  const [text_color, setText_color] = useState("text-secondary")
  const [button_color, setButton_color] = useState<
    | "secondary"
    | "link"
    | "default"
    | "destructive"
    | "outline"
    | "ghost"
    | null
    | undefined
  >("secondary")

  useEffect(() => {
    const unbindListener = $background_color.subscribe((value) => {
      setBackground_color(value)
      if (value === "bg-primary") {
        setText_color("text-secondary")
        setButton_color("secondary")
      } else {
        setText_color("text-primary")
        setButton_color("default")
      }
    })

    return () => {
      unbindListener()
    }
  }, [])

  return (
    <div
      className={`w-full ${background_color} duration-150 bg-animate z-[999] fixed top-0 flex justify-between px-5 py-2`}
    >
      <div>
        <Button
          variant="link"
          onClick={() => scrollToElement("home")}
          className={`${text_color}`}
        >
          Home
        </Button>
      </div>
      <div className="flex">
        <div className="flex">
          <Button
            variant="link"
            onClick={() => scrollToElement("about")}
            className={`${text_color}`}
          >
            about
          </Button>
          <Button
            variant="link"
            onClick={() => scrollToElement("timeline")}
            className={`${text_color}`}
          >
            timeline
          </Button>
          <Button
            variant="link"
            onClick={() => scrollToElement("projects")}
            className={`${text_color}`}
          >
            projects
          </Button>
        </div>
        <Button
          variant={button_color}
          className="rounded-3xl"
          onClick={() => scrollToElement("contact")}
        >
          Let's talk
        </Button>
      </div>
    </div>
  )
}

export default Nav
