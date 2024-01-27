import { useEffect, useState } from "react"

const BackNavigation = ({ title }: { title: string }) => {
  const [active, setActive] = useState(false)

  useEffect(() => {
    console.log(title)
    window.addEventListener("scroll", () => {
      if (window.scrollY > 10) setActive(true)
      else setActive(false)
    })
  }, [])

  return (
    <div
      className={`flex gap-1 px-5 rounded-lg ${active ? "sticky top-0" : ""} z-[999] bg-secondary pt-5 pb-3`}
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
