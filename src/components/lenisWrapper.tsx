"use client"

import gsap from "gsap"
import { ReactLenis } from "lenis/react"
import { ReactNode, useEffect, useRef } from "react"

import type { LenisRef } from "lenis/react"

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
    </>
  )
}

export default LenisWrapper
