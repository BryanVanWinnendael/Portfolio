"use client"

import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import Copy from "@/components/copy"
import Image from "next/image"

import NotedImage1 from "@/assets/images/noted/noted2.webp"
import NotedImage2 from "@/assets/images/noted/noted3.webp"
import NotedImage3 from "@/assets/images/noted/noted4.webp"
import NotedImage4 from "@/assets/images/noted/noted5.webp"
import Link from "next/link"
import AnimatedMedia from "@/components/animatedMedia"

gsap.registerPlugin(ScrollTrigger)

const Noted = () => {
  return (
    <>
      <div className="sm:pt-16 pt-10 pb-12">
        <Copy delay={0.5}>
          <h1 className="font-semibold uppercase leading-none text-center text-[20vw]">
            NOTED
          </h1>
        </Copy>

        <div className="flex justify-center w-full -mt-6 md:-mt-16 relative z-10 overflow-hidden">
          <AnimatedMedia delay={0.7} className="w-2/3 h-auto block">
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
        <div className="flex justify-center py-8">
          <div className="md:w-1/3 w-2/3">
            <Copy>
              <p className="font-normal text-xs leading-[1.5]">
                Noted is a combination of notion and obsidian with an inspired
                style by arc browser. It is a note taking app that allows you to
                write notes in block-style just like notion. It is supported on
                Windows, MacOS and Linux.{" "}
              </p>
            </Copy>
          </div>
        </div>
        <div className="flex justify-center">
          <div className="grid grid-cols-1 md:grid-cols-2 w-2/3 gap-2">
            <AnimatedMedia animationOnScroll={true}>
              <Image
                placeholder="blur"
                loading="lazy"
                src={NotedImage1}
                alt="noted image 1"
              />
            </AnimatedMedia>
            <AnimatedMedia animationOnScroll={true}>
              <Image
                placeholder="blur"
                loading="lazy"
                src={NotedImage2}
                alt="noted image 2"
              />
            </AnimatedMedia>
          </div>
        </div>
        <div className="flex flex-col items-center gap-4 py-8">
          <div className="md:w-1/3 w-2/3">
            <Copy delay={0.5}>
              <h2 className="text-xs font-medium mb-2 tracking-wide text-muted">
                Customize
              </h2>
            </Copy>
            <Copy>
              <p className="font-normal text-xs leading-[1.5]">
                With the customizations, like obsidian, you can fully customize
                your application. Don&apos;t like the default theme? Change it!
                Don&apos;t like the font? Change it!
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
                The desktop app is made with Electron, React, Editor.js and
                Zustand. The backend is made with FastAPI, Firebase and Nginx.
                The Website is made with Astro.
              </p>
            </Copy>
          </div>
          <div className="md:w-1/3 w-2/3">
            <Copy delay={0.5}>
              <h2 className="text-xs font-medium mb-2 tracking-wide text-muted">
                Features
              </h2>
            </Copy>
            <Copy>
              <p className="font-normal text-xs leading-[1.5]">
                For a list of all the features, please visit the{" "}
                <Link
                  href="https://github.com/BryanVanWinnendael/Noted"
                  target="_blank"
                  className="underline bg-accent"
                >
                  github page
                </Link>{" "}
                or{" "}
                <Link
                  href="https://write-noted.vercel.app/docs"
                  target="_blank"
                  className="underline bg-accent"
                >
                  Noted Docs
                </Link>{" "}
                .
              </p>
            </Copy>
          </div>
          <div className="flex justify-center">
            <div className="grid grid-cols-1 md:grid-cols-2 w-2/3 gap-2">
              <AnimatedMedia animationOnScroll={true}>
                <Image
                  placeholder="blur"
                  loading="lazy"
                  src={NotedImage3}
                  alt="noted image 3"
                />
              </AnimatedMedia>
              <AnimatedMedia animationOnScroll={true}>
                <Image
                  placeholder="blur"
                  loading="lazy"
                  src={NotedImage4}
                  alt="noted image 4"
                />
              </AnimatedMedia>
            </div>
          </div>
          <div className="flex gap-4">
            <Copy>
              <Link
                target="_blank"
                className="underline"
                href="https://write-noted.vercel.app/"
              >
                Download {">"}
                {">"}
              </Link>
            </Copy>
            <Copy>
              <Link
                target="_blank"
                className="underline"
                href="https://github.com/BryanVanWinnendael/Noted"
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

export default Noted
