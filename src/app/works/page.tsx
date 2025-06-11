"use client"

import Work from "@/components/work"
import { projects } from "@/data/works"

export default function Works() {
  return (
    <div className=" text-black pb-96">
      <div className="flex flex-col ">
        {projects.map((project, index) => {
          const delay = 0.1 + index / 10
          return (
            <Work
              key={index}
              title={project.title}
              placement={project.placement}
              boldness={project.boldness}
              media={project.media}
              delay={delay}
            />
          )
        })}
      </div>
    </div>
  )
}
