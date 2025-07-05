"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import { MediaItem } from "@/data/works"
import Copy from "./copy"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { usePathname, useRouter } from "next/navigation"
import { animatePageOut } from "@/utils/animations"

gsap.registerPlugin(useGSAP, ScrollTrigger)

type WorkProps = {
  title: string
  italic: boolean
  year: number
  placement: "left" | "center" | "right"
  boldness: number
  media: MediaItem[]
  delay: number
  href: string
  newPage?: boolean
  offset: number
}

const Work = ({
  title,
  italic,
  year,
  placement,
  boldness,
  media,
  delay,
  href,
  newPage,
  offset,
}: WorkProps) => {
  const router = useRouter()
  const pathname = usePathname()
  const dividerRef = useRef<HTMLDivElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  // Ref for the text container to check overflow.
  const textRef = useRef<HTMLDivElement>(null)
  const [isOverflow, setIsOverflow] = useState(false)

  // Check if the text container is overflowing.
  useEffect(() => {
    const el = textRef.current
    if (el) {
      setIsOverflow(el.scrollWidth > el.clientWidth)
    }
    // Optionally add an event listener for window resize
    const handleResize = () => {
      if (el) setIsOverflow(el.scrollWidth > el.clientWidth)
    }
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [title])

  useGSAP(() => {
    gsap.to(dividerRef.current, {
      width: "100%",
      duration: 0.3,
      ease: "power2.out",
      transformOrigin: "left",
      delay,
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 75%",
        once: true,
      },
    })
  }, [])

  const renderTitleWithOptionalMedia = () => {
    const chars = title.split("")
    const result: React.ReactNode[] = []

    // Map media based on its placement index.
    const mediaMap = new Map<number, MediaItem[]>()
    media.forEach((media) => {
      if (!mediaMap.has(media.placementIndex)) {
        mediaMap.set(media.placementIndex, [])
      }
      mediaMap.get(media.placementIndex)?.push(media)
    })

    chars.forEach((char, i) => {
      result.push(
        <Copy key={`char-${i}`} delay={delay}>
          <span className="inline-block">{char}</span>
        </Copy>
      )

      if (mediaMap.has(i)) {
        mediaMap.get(i)?.forEach((media, mi) => {
          result.push(
            <span
              key={`media-${i}-${mi}`}
              className="inline-block h-full max-w-0 group-hover:max-w-[10vw] relative overflow-hidden transition-[max-width] duration-700 ease-in-out"
            >
              {media.type === "image" ? (
                <Image
                  className="h-full w-auto"
                  src={media.src}
                  alt={media.alt || ""}
                />
              ) : (
                <video
                  className="h-full w-auto"
                  src={media.src as string}
                  autoPlay
                  loop
                  muted
                  playsInline
                />
              )}
              <span className="absolute right-0 top-0 h-full w-full bg-white z-10 transition-all duration-700 ease-in-out group-hover:w-0" />
            </span>
          )
        })
      }
    })

    // Append the year in smaller font size at the end
    result.push(
      <Copy key="year" delay={delay}>
        <span className="inline-block text-xs align-top ml-1 text-black font-[grotesque]">
          {year}
        </span>
      </Copy>
    )

    return result
  }

  const handleRoute = () => {
    if (newPage) return window.open(href, "_blank")
    if (pathname !== href && !newPage) {
      animatePageOut(href, router, "banner-works")
    }
  }

  return (
    <div
      onClick={handleRoute}
      ref={containerRef}
      className={`relative flex flex-col w-full cursor-pointer uppercase whitespace-nowrap leading-[0.94] text-black ${
        placement === "center"
          ? "text-center"
          : placement === "left"
          ? "text-left"
          : "text-right"
      }`}
      style={{ fontWeight: boldness }}
    >
      {/* TEXT */}
      <div
        ref={textRef}
        className="px-2 relative  md:text-[6vw] text-6xl md:h-[6vw] h-16 z-10 md:pb-[1.7vw] pb-1 group overflow-x-hidden overflow-y-hidden"
        // Conditionally add the mask style if text is overflowing.
        style={{
          ...(isOverflow
            ? {
                maskImage: "linear-gradient(to right, black 90%, transparent)",
                WebkitMaskImage:
                  "linear-gradient(to right, black 90%, transparent)",
              }
            : {}),
          ...(italic ? { fontFamily: "phemister" } : {}),
          ...(offset > 0
            ? { marginLeft: offset + "px" }
            : { paddingRight: Math.abs(offset) + "px" }),
        }}
      >
        {renderTitleWithOptionalMedia()}
      </div>

      {/* DIVIDER */}
      <div ref={dividerRef} className="h-[1px] bg-black w-0 z-30 relative" />
    </div>
  )
}

export default Work
