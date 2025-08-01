"use client"

import { usePathname, useRouter } from "next/navigation"
import { animatePageOut } from "@/utils/animations"

interface Props {
  href: string
  label: string
}

const TransitionLink = ({ href, label }: Props) => {
  const router = useRouter()
  const pathname = usePathname()

  const handleClick = () => {
    if (pathname !== href) {
      if (pathname.includes("/works"))
        animatePageOut(href, router, "banner-works")
      else animatePageOut(href, router)
    }
  }

  return (
    <button className="cursor-pointer" onClick={handleClick}>
      {label}
    </button>
  )
}

export default TransitionLink
