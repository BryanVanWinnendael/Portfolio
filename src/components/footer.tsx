import { scrollToElement } from "@/lib/utils"
import { useState, useEffect } from "react"
import { $background_color } from "@/stores/background"

const Footer = () => {
  const [brusselsTime, setBrusselsTime] = useState("")
  const [backgroundColor, setBackgroundColor] = useState("bg-primary")
  const [textColor, setTextColor] = useState("text-primary")
  const [borderColor, setBorderColor] = useState("border-primary")
  const [year, setYear] = useState("")

  useEffect(() => {
    const updateTimeZone = () => {
      const utcTime = new Date()
      const brusselsTimeZone = "Europe/Brussels"

      const brusselsTime = utcTime.toLocaleTimeString("en-US", {
        timeZone: brusselsTimeZone,
        hour12: false,
        hour: "numeric",
        minute: "numeric",
        timeZoneName: "short",
      })

      setBrusselsTime(brusselsTime)
    }

    const getYear = () => {
      const date = new Date()
      const year = date.getFullYear()
      setYear(year.toString())
    }

    getYear()

    updateTimeZone()

    const intervalId = setInterval(updateTimeZone, 1000)

    return () => clearInterval(intervalId)
  }, [])

  useEffect(() => {
    const unbindListenerBackground = $background_color.subscribe((value) => {
      const location = window.location.pathname
      if (location !== "/") {
        setBackgroundColor("bg-primary")
        setTextColor("text-secondary")
        setBorderColor("border-gray-200")
      } else {
        setBackgroundColor(value)
        if (value === "bg-primary") {
          setTextColor("text-secondary")
          setBorderColor("border-gray-200")
        } else {
          setTextColor("text-primary")
          setBorderColor("border-gray-500")
        }
      }
    })

    return () => {
      unbindListenerBackground()
    }
  }, [])

  return (
    <div
      className={`${backgroundColor} ${textColor} h-full pb-12 w-full px-5 pt-12`}
    >
      <div
        className={`grid sm:grid-cols-[auto,auto] sm:grid-rows-1 grid-rows-[auto,auto] gap-5 border-opacity-20 border-[1px] ${borderColor} p-5 rounded-[24px] ${backgroundColor} ${textColor}`}
      >
        <div className="sm:row-start-1 row-start-2">
          <h1 className="scroll-m-20 lg:text-7xl md:text-6xl sm:text-4xl text-2xl font-bold tracking-tight">
            © {year}
          </h1>
          <h1 className="scroll-m-20 lg:text-8xl md:text-7xl sm:text-6xl text-4xl font-extrabold tracking-tight">
            BRYAN
          </h1>
          <h1 className="scroll-m-20 lg:text-8xl md:text-7xl sm:text-6xl text-4xl font-extrabold tracking-tight">
            VAN WINNENDAEL
          </h1>
        </div>
        <div className="flex flex-col gap-5">
          <div className="flex gap-5">
            <div className="flex flex-col justify-start">
              <h2 className="scroll-m-20 pb-2 text-3xl font-semibold tracking-tight first:mt-0">
                Navigation
              </h2>
              <div className="flex flex-col">
                <p
                  onClick={() => scrollToElement("home")}
                  className="scroll-m-20 text-xl font-semibold tracking-tight first:mt-0 hover:underline cursor-pointer"
                >
                  Home
                </p>
                <p
                  onClick={() => scrollToElement("about")}
                  className="scroll-m-20 text-xl font-semibold tracking-tight first:mt-0 hover:underline cursor-pointer"
                >
                  About
                </p>
                <p
                  onClick={() => scrollToElement("timeline")}
                  className="scroll-m-20 text-xl font-semibold tracking-tight first:mt-0 hover:underline cursor-pointer"
                >
                  Timeline
                </p>
                <p
                  onClick={() => scrollToElement("projects")}
                  className="scroll-m-20 text-xl font-semibold tracking-tight first:mt-0 hover:underline cursor-pointer"
                >
                  Projects
                </p>
                <p
                  onClick={() => scrollToElement("contact")}
                  className="scroll-m-20 text-xl font-semibold tracking-tight first:mt-0 hover:underline cursor-pointer"
                >
                  Left's talk
                </p>
              </div>
            </div>
            <div className="hidden flex-col justify-start sm:flex">
              <h2 className="scroll-m-20  pb-2 text-3xl font-semibold tracking-tight first:mt-0">
                Socials
              </h2>
              <div className="flex flex-col">
                <a
                  href="mailto: portfoliobryanvanwinnendael@gmail.com"
                  className="scroll-m-20 text-xl font-semibold tracking-tight first:mt-0 hover:underline"
                >
                  Email
                </a>
                <a
                  target="_blank"
                  href="https://github.com/BryanVanWinnendael"
                  className="scroll-m-20 text-xl font-semibold tracking-tight first:mt-0 hover:underline"
                >
                  Github
                </a>
                <a
                  target="_blank"
                  href="https://linkedin.com/in/bryanvanwinnendael"
                  className="scroll-m-20 text-xl font-semibold tracking-tight first:mt-0 hover:underline"
                >
                  Linkdin
                </a>
                <a
                  target="_blank"
                  href="cv.pdf"
                  className="scroll-m-20 text-xl font-semibold tracking-tight first:mt-0 hover:underline"
                >
                  CV
                </a>
              </div>
            </div>
          </div>
          <div>
            <h2 className="scroll-m-20 pb-2 text-3xl font-semibold tracking-tight first:mt-0">
              Local time
            </h2>
            <p className="scroll-m-20 text-muted-foreground text-xl tracking-tight first:mt-0 hover:underline cursor-pointer">
              {brusselsTime}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
