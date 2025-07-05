"use client"

import Work from "@/components/work"
import { projects } from "@/data/works"
import { animatePageIn } from "@/utils/animations"
import { ReactNode, useEffect } from "react"

const Template = ({ children }: { children: ReactNode }) => {
  useEffect(() => {
    animatePageIn("banner-works")
  }, [])
  return (
    <div className="pb-40 pt-12 min-h-screen">
      <div
        id="banner-works"
        className="min-h-screen bg-[#000] z-50 fixed top-0 left-0 w-screen"
      />
      {children}
      <div className="flex flex-col ">
        {projects.map((project, index) => {
          const delay = 0.1 + index / 10
          return (
            <Work
              key={index}
              title={project.title}
              italic={project.italic}
              year={project.year}
              placement={project.placement}
              boldness={project.boldness}
              media={project.media}
              delay={delay}
              href={project.href}
              newPage={project.newPage}
              offset={project.offset}
            />
          )
        })}
      </div>
    </div>
  )
}

export default Template
