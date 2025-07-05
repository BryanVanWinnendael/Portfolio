"use client"

import { useRef, useEffect, Fragment } from "react"
import gsap from "gsap"
import TransitionLink from "./transitionLink"
import { usePathname } from "next/navigation"

const Nav = () => {
  const route = usePathname()
  const isContact = route === "/contact"
  const underlineRefs = useRef<HTMLSpanElement[]>([])

  const handleMouseEnter = (index: number) => {
    const underline = underlineRefs.current[index]
    if (!underline) return

    gsap.set(underline, { scaleX: 0, transformOrigin: "left" })
    gsap.to(underline, {
      scaleX: 1,
      duration: 0.5,
      ease: "power2.out",
      delay: 0.2,
    })
  }

  useEffect(() => {
    underlineRefs.current.forEach((el) => {
      if (el) {
        gsap.set(el, { scaleX: 1 })
      }
    })
  }, [])

  const links = [
    { href: "/", label: "ABOUT" },
    { href: "/works", label: "WORKS" },
    { href: "/contact", label: "CONTACT" },
  ]

  return (
    <nav className="w-full fixed top-0 z-50 p-4">
      <ul
        className={`flex gap-1 ${
          isContact ? "text-white" : "text-black"
        } text-xs`}
      >
        {links.map((link, index) => (
          <Fragment key={index}>
            <li
              className="relative w-fit flex cursor-pointer"
              onMouseEnter={() => handleMouseEnter(index)}
            >
              <TransitionLink href={link.href} label={link.label} />
              <span
                ref={(el) => {
                  underlineRefs.current[index] = el!
                }}
                className="absolute bottom-0 left-0 w-full h-[0.5px] bg-black origin-left scale-x-100"
              />
            </li>
            {index < links.length - 1 && <p className="font-semibold">/</p>}
          </Fragment>
        ))}
      </ul>
    </nav>
  )
}

export default Nav
