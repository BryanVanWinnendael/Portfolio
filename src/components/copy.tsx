"use client"

import React, { useRef, cloneElement, ReactNode, ReactElement } from "react"
import gsap from "gsap"
import { SplitText } from "gsap/SplitText"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useGSAP } from "@gsap/react"

gsap.registerPlugin(SplitText, ScrollTrigger)

interface CopyProps {
  children: ReactNode
  animationOnScroll?: boolean
  delay?: number
}

const Copy: React.FC<CopyProps> = ({
  children,
  animationOnScroll = true,
  delay = 0,
}) => {
  const containerRef = useRef<HTMLDivElement | null>(null)
  const elementRef = useRef<HTMLDivElement[]>([])
  const splitRef = useRef<any[]>([]) // SplitText doesn't expose types
  const lines = useRef<HTMLElement[]>([])

  useGSAP(
    () => {
      if (!containerRef.current) return

      splitRef.current = []
      elementRef.current = []
      lines.current = []

      let elements: Element[] = []

      if (containerRef.current.hasAttribute("data-copy-wrapper")) {
        elements = Array.from(containerRef.current.children)
      } else {
        elements = [containerRef.current]
      }

      elements.forEach((el) => {
        const htmlEl = el as HTMLDivElement
        elementRef.current.push(htmlEl)

        const split = SplitText.create(htmlEl, {
          type: "lines",
          mask: "lines",
          linesClass: "line++",
        })

        splitRef.current.push(split)

        const computedStyle = window.getComputedStyle(htmlEl)
        const textIndent = computedStyle.textIndent

        if (textIndent && textIndent !== "0px") {
          if (split.lines.length > 0) {
            ;(split.lines[0] as HTMLElement).style.paddingLeft = textIndent
          }
          htmlEl.style.textIndent = "0"
        }

        lines.current.push(...(split.lines as HTMLElement[]))
      })

      gsap.set(lines.current, {
        y: "100%",
      })

      const animationProps = {
        y: "0%",
        duration: 1,
        stagger: 0.1,
        ease: "power4.out",
        delay: delay,
      }

      if (animationOnScroll) {
        gsap.to(lines.current, {
          ...animationProps,
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 75%",
            once: true,
          },
        })
      } else {
        gsap.to(lines.current, animationProps)
      }

      return () => {
        splitRef.current.forEach((split) => {
          if (split?.revert) {
            split.revert()
          }
        })
      }
    },
    {
      scope: containerRef,
      dependencies: [animationOnScroll, delay],
    }
  )

  if (React.Children.count(children) === 1 && React.isValidElement(children)) {
    return cloneElement(children as ReactElement<any, any>, {
      ref: containerRef,
    })
  }

  return (
    <div id="animated-div" ref={containerRef} data-copy-wrapper="true">
      {children}
    </div>
  )
}

export default Copy
