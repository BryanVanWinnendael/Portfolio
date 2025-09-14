"use client"

import Copy from "@/components/copy"
import Link from "next/link"

const About = () => {
  return (
    <div className="bg-white text-black px-4 w-full flex items-center min-h-screen py-12">
      {/* Content Grid */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 w-full text-xs leading-4">
        {/* Bio Section */}
        <div className="md:col-span-3">
          <Copy delay={0.5}>
            <h2 className="mb-4 tracking-wide text-muted">BIO</h2>
          </Copy>
          <Copy>
            <p className="">
              Bryan Van Winnendael, Software developer based in Winksele,
              Belgium.
            </p>
          </Copy>
        </div>

        {/* Experience Section */}
        <div className="md:col-span-5">
          <Copy delay={0.5}>
            <h2 className="mb-4 tracking-wide text-muted">EXPERIENCE</h2>
          </Copy>
          <div className="flex flex-col gap-2">
            <Copy>
              <p>
                (01) JAVA DEVELOPER,{" "}
                <Link
                  target="_blank"
                  href="https://www.ypto.be/en/"
                  className="underline bg-accent"
                >
                  YPTO
                </Link>
                <span className="pl-2 text-muted">June 2025 - Present</span>
              </p>
              <div className="pl-2 leading-relaxed font-medium">
                <p>
                  - Java Developer for the Commercial Channels & Products team.
                </p>
              </div>
            </Copy>
            <Copy>
              <p>
                (02) INTERN SOFTWARE DEVELOPER,{" "}
                <Link
                  target="_blank"
                  href="https://www.imec-int.com/en"
                  className="underline bg-accent"
                >
                  IMEC
                </Link>
                <span className="pl-2 text-muted">MARCH 2023 - JUNE 2023</span>
              </p>
              <div className="pl-2 leading-relaxed font-medium">
                <p>
                  - Developed the back-end infrastructure with FastAPI Python.
                </p>
                <p>
                  - Architected and implemented the front-end interface using
                  Next.js.
                </p>
                <p>
                  - Collaborated closely with team members to gather
                  requirements, refine design specifications, and iterate on
                  features throughout the development lifecycle.
                </p>
              </div>
            </Copy>
          </div>
        </div>

        {/* Selected Works Section */}
        <div className="md:col-span-4">
          <Copy delay={0.5}>
            <h2 className="mb-4 tracking-wide text-muted">SELECTED WORKS</h2>
          </Copy>
          <div>
            <Copy>
              <p>
                (01) <span>Netweb</span>, web application for{" "}
                <Link
                  target="_blank"
                  className="underline bg-accent"
                  href="https://www.imec-int.com/en"
                >
                  Imec
                </Link>{" "}
                to manage network devices.
              </p>
              <p className="pt-2">
                (02) Noted, note taking app inspired by Notion and Obsidian.
              </p>
              <p className="pt-2">
                (03) Point Cloud Processor, desktop application for detecting
                planes in a point cloud.
              </p>
            </Copy>
          </div>
        </div>

        {/* Education Section */}
        <div className="md:col-span-4">
          <Copy delay={0.5}>
            <h2 className="mb-4 tracking-wide text-muted">EDUCATION</h2>
          </Copy>
          <div>
            <Copy>
              <p>
                APPLIED COMPUTER SCIENCE,{" "}
                <Link
                  href="https://www.ucll.be/en"
                  className="underline bg-accent"
                  target="_blank"
                >
                  UCLL
                </Link>
              </p>
              <p>
                For three years I studied applied computer science at UCLL and
                graduated in 2023 with a cum laude.
              </p>
            </Copy>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
