"use client"

import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import Copy from "@/components/copy"
import Image from "next/image"
import Link from "next/link"
import AnimatedMedia from "@/components/animatedMedia"

import HarborImage1 from "@/assets/images/harbor/harbor1.webp"
import HarborImage2 from "@/assets/images/harbor/harbor2.webp"
import HarborImage3 from "@/assets/images/harbor/harbor3.webp"
import HarborImage4 from "@/assets/images/harbor/harbor4.webp"

gsap.registerPlugin(ScrollTrigger)

const Harbor = () => {
  return (
    <>
      <div className="pb-12 pt-10 sm:pt-16">
        <Copy delay={0.5}>
          <h1 className="text-center text-[20vw] font-semibold uppercase leading-none">
            HARBOR
          </h1>
        </Copy>

        <div className="relative z-10 -mt-6 flex w-full justify-center overflow-hidden md:-mt-16">
          <AnimatedMedia delay={0.7} className="block h-auto w-2/3">
            <video
              preload="metadata"
              src="/videos/harbor.mp4"
              autoPlay
              loop
              muted
              playsInline
            />
          </AnimatedMedia>
        </div>

        <div className="flex justify-center px-4 py-10 md:py-12">
          <div className="w-full max-w-xl">
            <Copy>
              <p className="text-sm leading-relaxed text-black/80 md:text-base">
                Harbor is a web app for managing Docker containers on your
                server.
              </p>

              <p className="mt-4 text-sm leading-relaxed text-black/80 md:text-base">
                It lets you create, start, stop, and delete containers, run
                commands inside them, manage Docker images, create MySQL
                databases, monitor resources with analytics, and clean up your
                environment efficiently.
              </p>
            </Copy>
          </div>
        </div>

        <div className="flex justify-center px-4">
          <div className="grid w-full max-w-4xl grid-cols-1 gap-2 md:grid-cols-2">
            <AnimatedMedia animationOnScroll={true}>
              <Image
                placeholder="blur"
                loading="lazy"
                src={HarborImage1}
                alt="Harbor dashboard"
              />
            </AnimatedMedia>

            <AnimatedMedia animationOnScroll={true}>
              <Image
                placeholder="blur"
                loading="lazy"
                src={HarborImage2}
                alt="Harbor interface"
              />
            </AnimatedMedia>
          </div>
        </div>

        <div className="flex flex-col items-center gap-10 py-12 md:py-16">
          <div className="w-full max-w-xl px-4">
            <Copy delay={0.5}>
              <h2 className="mb-3 text-[10px] font-medium uppercase tracking-widest text-muted">
                Use
              </h2>
            </Copy>

            <Copy>
              <p className="text-sm leading-relaxed text-black/80 md:text-base">
                Clone the{" "}
                <Link
                  href="https://github.com/BryanVanWinnendael/Harbor"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-accent text-white underline underline-offset-2"
                >
                  repository
                </Link>{" "}
                and follow the instructions in the README to run the
                application.
              </p>
            </Copy>
          </div>

          <div className="w-full max-w-xl px-4">
            <Copy delay={0.5}>
              <h2 className="mb-3 text-[10px] font-medium uppercase tracking-widest text-muted">
                Built with
              </h2>
            </Copy>

            <Copy>
              <p className="text-sm leading-relaxed text-black/80 md:text-base">
                Harbor is built with Go, Air, SQLite, Tailwind CSS, and HTMX.
              </p>
            </Copy>
          </div>

          <div className="flex w-full justify-center px-4">
            <div className="grid w-full max-w-4xl grid-cols-1 gap-2 md:grid-cols-2">
              <AnimatedMedia animationOnScroll={true}>
                <Image
                  placeholder="blur"
                  loading="lazy"
                  src={HarborImage3}
                  alt="Harbor interface"
                />
              </AnimatedMedia>

              <AnimatedMedia animationOnScroll={true}>
                <Image
                  placeholder="blur"
                  loading="lazy"
                  src={HarborImage4}
                  alt="Harbor interface"
                />
              </AnimatedMedia>
            </div>
          </div>

          <div className="flex gap-4 pt-2">
            <Copy>
              <Link
                href="https://github.com/BryanVanWinnendael/Harbor"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs underline underline-offset-4 transition-opacity hover:opacity-60"
              >
                Source {">>"}
              </Link>
            </Copy>
          </div>
        </div>
      </div>

      <div className="relative z-30 h-px w-full bg-black" />
    </>
  )
}

export default Harbor
