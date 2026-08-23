"use client"

import gsap from "gsap"
import type { LenisRef } from "lenis/react"
import { ReactLenis } from "lenis/react"
import { ReactNode, useEffect, useRef } from "react"
import Scrollbar from "./scrollbar/scrollbar"

const LenisWrapper = ({ children }: { children: ReactNode }) => {
  const lenisRef = useRef<LenisRef | null>(null)

  useEffect(() => {
    const update = (time: number) => {
      lenisRef.current?.lenis?.raf(time * 1000)
    }

    gsap.ticker.add(update)

    return () => {
      gsap.ticker.remove(update)
    }
  }, [])

  return (
    <>
      <ReactLenis root options={{ autoRaf: false }} ref={lenisRef} />
      {children}
      <Scrollbar />
    </>
  )
}

export default LenisWrapper
