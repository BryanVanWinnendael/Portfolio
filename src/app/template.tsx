"use client"

import { animatePageIn } from "@/utils/animations"
import { ReactNode, useEffect } from "react"

const Template = ({ children }: { children: ReactNode }) => {
  useEffect(() => {
    console.log("animating")
    animatePageIn()
  }, [])
  return (
    <>
      <div
        id="banner"
        className="min-h-screen bg-[#000] z-50 fixed top-0 left-0 w-screen"
      />
      {children}
    </>
  )
}

export default Template
