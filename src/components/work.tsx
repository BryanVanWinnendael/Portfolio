"use client"

import { useRef } from "react"
import Image from "next/image"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import { MediaItem } from "@/data/works"
import Copy from "./copy"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(useGSAP, ScrollTrigger)

type WorkProps = {
  title: string
  placement: "left" | "center" | "right"
  boldness: number
  media: MediaItem[]
  delay: number
}

const Work = ({ title, placement, boldness, media, delay }: WorkProps) => {
  const dividerRef = useRef<HTMLDivElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)

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

    return result
  }

  return (
    <div
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
      <div className="relative text-[6vw] h-[6vw] z-10 pb-[1.7vw] group">
        {renderTitleWithOptionalMedia()}
      </div>

      {/* DIVIDER */}
      <div ref={dividerRef} className="h-[1px] bg-black w-0 z-30 relative" />
    </div>
  )
}

export default Work
