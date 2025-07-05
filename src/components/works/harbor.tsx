"use client"

import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import Copy from "@/components/copy"
import Image from "next/image"

import HarborImage1 from "@/assets/images/harbor/harbor1.webp"
import HarborImage2 from "@/assets/images/harbor/harbor2.webp"
import HarborImage3 from "@/assets/images/harbor/harbor3.webp"
import HarborImage4 from "@/assets/images/harbor/harbor4.webp"

import Link from "next/link"
import AnimatedMedia from "@/components/animatedMedia"

gsap.registerPlugin(ScrollTrigger)

const Harbor = () => {
  return (
    <>
      <div className="sm:pt-16 pt-10 pb-12">
        <Copy delay={0.5}>
          <h1 className="font-semibold uppercase leading-none text-center text-[20vw]">
            HARBOR
          </h1>
        </Copy>

        <div className="flex justify-center w-full -mt-6 md:-mt-16 relative z-10 overflow-hidden">
          <AnimatedMedia delay={0.7} className="w-2/3 h-auto block">
            <video src="/videos/harbor.mp4" autoPlay loop muted playsInline />
          </AnimatedMedia>
        </div>
        <div className="flex justify-center py-8">
          <div className="md:w-1/3 w-2/3">
            <Copy>
              <p className="font-normal text-xs leading-[1.5]">
                Harbor is a web app for managing Docker containers on your
                server. It lets you easily create, start, stop, delete
                containers, run commands inside them, manage Docker images,
                create MySQL databases, monitor resources with analytics, and
                clean up your environment efficiently.
              </p>
            </Copy>
          </div>
        </div>
        <div className="flex justify-center">
          <div className="grid grid-cols-1 md:grid-cols-2 w-2/3 gap-2">
            <AnimatedMedia animationOnScroll={true}>
              <Image src={HarborImage1} alt="harbor image 1" />
            </AnimatedMedia>
            <AnimatedMedia animationOnScroll={true}>
              <Image src={HarborImage2} alt="harbor image 2" />
            </AnimatedMedia>
          </div>
        </div>
        <div className="flex flex-col items-center gap-4 py-8">
          <div className="md:w-1/3 w-2/3">
            <Copy delay={0.5}>
              <h2 className="text-xs font-medium mb-2 tracking-wide text-muted">
                Use
              </h2>
            </Copy>
            <Copy>
              <p className="font-normal text-xs leading-[1.5]">
                Clone the{" "}
                <Link
                  href="https://github.com/BryanVanWinnendael/Harbor"
                  target="_blank"
                  className="underline bg-accent"
                >
                  repository
                </Link>{" "}
                and follow the instructions in the README to run the
                application.
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
                Harbor is built with Go, Air, SQLite, Tailwind CSS and Htmx.
              </p>
            </Copy>
          </div>

          <div className="flex justify-center">
            <div className="grid grid-cols-1 md:grid-cols-2 w-2/3 gap-2">
              <AnimatedMedia animationOnScroll={true}>
                <Image src={HarborImage3} alt="harbor image 3" />
              </AnimatedMedia>
              <AnimatedMedia animationOnScroll={true}>
                <Image src={HarborImage4} alt="harbor image 4" />
              </AnimatedMedia>
            </div>
          </div>

          <div className="flex gap-4">
            <Copy>
              <Link
                target="_blank"
                className="underline"
                href="https://github.com/BryanVanWinnendael/Harbor"
              >
                Source {">"}
                {">"}
              </Link>
            </Copy>
          </div>
        </div>
      </div>
      <div className="h-[1px] bg-black w-full z-30 relative" />
    </>
  )
}

export default Harbor
