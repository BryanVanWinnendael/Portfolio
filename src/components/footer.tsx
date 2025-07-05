"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

const Footer = () => {
  const route = usePathname()
  const isContact = route === "/contact"

  return (
    <footer
      className={`px-6 lg:px-8 pb-8 ${isContact && "bg-[#000] text-white"}`}
    >
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end max-w-7xl mx-auto">
        <div className="mb-4 lg:mb-0">
          <p className="text-sm font-medium">
            SOFTWARE DEVELOPER @{" "}
            <Link
              target="_blank"
              href="https://www.ypto.be/en/"
              className="underline bg-accent"
            >
              YPTO
            </Link>
          </p>
        </div>
        <div className="text-right">
          <p className="text-sm font-medium mb-1">BRYAN VAN WINNENDAEL</p>
          <div
            className={`flex gap-4 text-xs ${
              isContact ? "text-neutral-700" : "text-muted"
            }`}
          >
            <Link
              target="_blank"
              href="https://github.com/BryanVanWinnendael"
              className="underline"
            >
              GITHUB
            </Link>
            <Link
              target="_blank"
              href="https://www.linkedin.com/in/bryanvanwinnendael"
              className="underline"
            >
              LINKEDIN
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
