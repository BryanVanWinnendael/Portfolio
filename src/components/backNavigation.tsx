import { useEffect, useState } from "react"
import { setShowNav } from "@/stores/nav"
import { setBackgroundColor } from "@/stores/background"
const BackNavigation = ({ title }: { title: string }) => {
  const [active, setActive] = useState(false)

  useEffect(() => {
    setShowNav(false)
    setBackgroundColor("bg-secondary")
    window.addEventListener("scroll", () => {
      if (window.scrollY > 10) setActive(true)
      else setActive(false)
    })
    return () => {
      setShowNav(true)
    }
  }, [])

  return (
    <div
      className={`flex gap-1 px-5 rounded-lg ${active ? "sticky top-0" : ""} z-[9] bg-secondary pt-5 pb-3`}
    >
      <a
        href={"/#projects-" + title.replace(/\s/g, "").toLowerCase()}
        className="leading-7 [&:not(:first-child)]:mt-6 underline text-blue-500"
      >
        Projects
      </a>
      <p>/</p>
      <p className="scroll-m-20 text-xl font-semibold tracking-tight">
        {title}
      </p>
    </div>
  )
}

export default BackNavigation
