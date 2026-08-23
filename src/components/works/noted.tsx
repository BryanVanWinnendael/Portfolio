"use client"

import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import Copy from "@/components/copy"
import Image from "next/image"
import Link from "next/link"
import AnimatedMedia from "@/components/animatedMedia"

import NotedImage1 from "@/assets/images/noted/noted2.webp"
import NotedImage2 from "@/assets/images/noted/noted3.webp"
import NotedImage3 from "@/assets/images/noted/noted4.webp"
import NotedImage4 from "@/assets/images/noted/noted5.webp"

gsap.registerPlugin(ScrollTrigger)

const Noted = () => {
  return (
    <>
      <div className="pb-12 pt-10 sm:pt-16">
        <Copy delay={0.5}>
          <h1 className="text-center text-[20vw] font-semibold uppercase leading-none">
            NOTED
          </h1>
        </Copy>

        <div className="relative z-10 -mt-6 flex w-full justify-center overflow-hidden md:-mt-16">
          <AnimatedMedia delay={0.7} className="block h-auto w-2/3">
            <video
              preload="metadata"
              src="/videos/noted.mp4"
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
                Noted is a note taking application inspired by Notion, Obsidian,
                and the Arc browser.
              </p>

              <p className="mt-4 text-sm leading-relaxed text-black/80 md:text-base">
                It combines block based editing with extensive customization,
                allowing users to create and organize notes in a flexible
                workspace.
              </p>

              <p className="mt-4 text-sm leading-relaxed text-black/80 md:text-base">
                Noted is available for Windows, macOS, and Linux.
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
                src={NotedImage1}
                alt="Noted application"
              />
            </AnimatedMedia>

            <AnimatedMedia animationOnScroll={true}>
              <Image
                placeholder="blur"
                loading="lazy"
                src={NotedImage2}
                alt="Noted application"
              />
            </AnimatedMedia>
          </div>
        </div>

        <div className="flex flex-col items-center gap-10 py-12 md:py-16">
          <div className="w-full max-w-xl px-4">
            <Copy delay={0.5}>
              <h2 className="mb-3 text-[10px] font-medium uppercase tracking-widest text-muted">
                Customize
              </h2>
            </Copy>

            <Copy>
              <p className="text-sm leading-relaxed text-black/80 md:text-base">
                Noted is designed to be highly customizable. Change the theme,
                typography, and appearance to create a workspace that fits your
                workflow.
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
                The desktop application is built with Electron, React,
                Editor.js, and Zustand.
              </p>

              <p className="mt-4 text-sm leading-relaxed text-black/80 md:text-base">
                The backend uses FastAPI, Firebase, and Nginx, while the website
                is built with Astro.
              </p>
            </Copy>
          </div>

          <div className="w-full max-w-xl px-4">
            <Copy delay={0.5}>
              <h2 className="mb-3 text-[10px] font-medium uppercase tracking-widest text-muted">
                Features
              </h2>
            </Copy>

            <Copy>
              <p className="text-sm leading-relaxed text-black/80 md:text-base">
                For a complete list of features, visit the{" "}
                <Link
                  href="https://github.com/BryanVanWinnendael/Noted"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-accent text-white underline underline-offset-2"
                >
                  GitHub repository
                </Link>{" "}
                or read the{" "}
                <Link
                  href="https://write-noted.vercel.app/docs"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-accent text-white underline underline-offset-2"
                >
                  Noted Docs
                </Link>
                .
              </p>
            </Copy>
          </div>

          <div className="flex w-full justify-center px-4">
            <div className="grid w-full max-w-4xl grid-cols-1 gap-2 md:grid-cols-2">
              <AnimatedMedia animationOnScroll={true}>
                <Image
                  placeholder="blur"
                  loading="lazy"
                  src={NotedImage3}
                  alt="Noted application"
                />
              </AnimatedMedia>

              <AnimatedMedia animationOnScroll={true}>
                <Image
                  placeholder="blur"
                  loading="lazy"
                  src={NotedImage4}
                  alt="Noted application"
                />
              </AnimatedMedia>
            </div>
          </div>

          <div className="flex gap-5 pt-2">
            <Copy>
              <Link
                href="https://write-noted.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs underline underline-offset-4 transition-opacity hover:opacity-60"
              >
                Download {">>"}
              </Link>
            </Copy>

            <Copy>
              <Link
                href="https://github.com/BryanVanWinnendael/Noted"
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

export default Noted
