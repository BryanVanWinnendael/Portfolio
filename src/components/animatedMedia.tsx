"use client"

import { useEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

interface AnimatedMediaProps {
  children: React.ReactNode
  className?: string
  delay?: number
  startY?: number
  duration?: number
  animationOnScroll?: boolean
}

const AnimatedMedia: React.FC<AnimatedMediaProps> = ({
  children,
  className = "",
  delay = 0.2,
  startY = 100,
  duration = 1,
  animationOnScroll = false,
}) => {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!ref.current) return

    gsap.registerPlugin(ScrollTrigger)

    const ctx = gsap.context(() => {
      if (animationOnScroll) {
        gsap.fromTo(
          ref.current,
          { y: 100, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration,
            delay,
            ease: "power4.out",
            scrollTrigger: {
              trigger: ref.current,
              start: "top 80%",
              toggleActions: "play none none none",
              once: true,
            },
          }
        )
      } else {
        gsap.fromTo(
          ref.current,
          { y: startY, opacity: 0 },
          { y: 0, opacity: 1, duration, delay, ease: "power4.out" }
        )
      }
    }, ref)

    return () => ctx.revert()
  }, [startY, duration, delay, animationOnScroll])

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  )
}

export default AnimatedMedia
