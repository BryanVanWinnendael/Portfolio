"use client"

import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import Copy from "@/components/copy"
import Image from "next/image"

import NetwebImage1 from "@/assets/images/imec/imec.webp"
import NetwebImage2 from "@/assets/images/imec/imec2.webp"
import NetwebImage3 from "@/assets/images/imec/imec3.webp"
import NetwebImage4 from "@/assets/images/imec/imec4.webp"
import NetwebImage5 from "@/assets/images/imec/imec5.webp"

import Link from "next/link"
import AnimatedMedia from "@/components/animatedMedia"

gsap.registerPlugin(ScrollTrigger)

const Netweb = () => {
  return (
    <>
      <div className="sm:pt-16 pt-10 pb-12">
        <Copy delay={0.5}>
          <h1 className="font-semibold uppercase leading-none text-center text-[20vw]">
            NETWEB
          </h1>
        </Copy>

        <div className="flex justify-center w-full -mt-6 md:-mt-16 relative z-10 overflow-hidden">
          <AnimatedMedia delay={0.7} className="w-2/3 h-auto block">
            <Image src={NetwebImage1} alt="harbor image 1" />
          </AnimatedMedia>
        </div>
        <div className="flex justify-center py-8">
          <div className="md:w-1/3 w-2/3">
            <Copy>
              <p className="font-normal text-xs leading-[1.5]">
                For my intern at{" "}
                <Link
                  target="_blank"
                  href="https://www.imec-int.com/en"
                  className="underline bg-accent"
                >
                  IMEC
                </Link>
                , I worked on a web application that is used to do a host
                lookup, create guest accounts for the network, manage ports and
                more.
              </p>
            </Copy>
          </div>
        </div>
        <div className="flex justify-center">
          <div className="grid grid-cols-1 md:grid-cols-2 w-2/3 gap-2">
            <AnimatedMedia animationOnScroll={true}>
              <Image src={NetwebImage2} alt="harbor image 1" />
            </AnimatedMedia>
            <AnimatedMedia animationOnScroll={true}>
              <Image src={NetwebImage3} alt="harbor image 2" />
            </AnimatedMedia>
          </div>
        </div>
        <div className="flex flex-col items-center gap-4 py-8">
          <div className="md:w-1/3 w-2/3">
            <Copy delay={0.5}>
              <h2 className="text-xs font-medium mb-2 tracking-wide text-muted">
                Features
              </h2>
            </Copy>
            <Copy>
              <p className="font-normal text-xs leading-[1.5]">
                - Host lookup - Port management - Guest account creation - Azure
                NICs viewer - ACI endpoints viewer - Switch manager - ISE lookup
                - SSL exceptions
              </p>
            </Copy>
          </div>
          <div className="md:w-1/3 w-2/3">
            <Copy delay={0.5}>
              <h2 className="text-xs font-medium mb-2 tracking-wide text-muted">
                Built with
              </h2>
            </Copy>
            <Copy>
              <p className="font-normal text-xs leading-[1.5]">
                Netweb is built with FastAPI, Next.js, Python, TypeScript,
                Docker and Azure AD for authentication and data extraction.
              </p>
            </Copy>
          </div>
          <div className="flex justify-center">
            <div className="grid grid-cols-1 md:grid-cols-2 w-2/3 gap-2">
              <AnimatedMedia animationOnScroll={true}>
                <Image src={NetwebImage4} alt="harbor image 3" />
              </AnimatedMedia>
              <AnimatedMedia animationOnScroll={true}>
                <Image src={NetwebImage5} alt="harbor image 4" />
              </AnimatedMedia>
            </div>
          </div>
        </div>
      </div>
      <div className="h-[1px] bg-black w-full z-30 relative" />
    </>
  )
}

export default Netweb
