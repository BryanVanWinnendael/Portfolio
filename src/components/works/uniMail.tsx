"use client"

import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import Copy from "@/components/copy"
import Image from "next/image"

import UniMailImage1 from "@/assets/images/unimail/unimail1.webp"
import UniMailImage2 from "@/assets/images/unimail/unimail2.webp"
import UniMailImage3 from "@/assets/images/unimail/unimail3.webp"
import UniMailImage4 from "@/assets/images/unimail/unimail4.webp"

import Link from "next/link"
import AnimatedMedia from "@/components/animatedMedia"

gsap.registerPlugin(ScrollTrigger)

const UniMail = () => {
  return (
    <>
      <div className="sm:pt-16 pt-10 pb-12">
        <Copy delay={0.5}>
          <h1 className="font-semibold uppercase leading-none text-center text-[20vw]">
            UNIMAIL
          </h1>
        </Copy>

        <div className="flex justify-center w-full -mt-6 md:-mt-16 relative z-10 overflow-hidden">
          <AnimatedMedia delay={0.7} className="w-2/3 h-auto block">
            <video
              preload="metadata"
              src="/videos/unimail.mp4"
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
                UniMail is a web app that unifies multiple email accounts into
                one interface. It offers full-screen viewing, theme
                customization, adjustable layouts, and AI-powered email
                summarization for faster, easier reading.
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
                src={UniMailImage1}
                alt="unimail image 1"
              />
            </AnimatedMedia>
            <AnimatedMedia animationOnScroll={true}>
              <Image
                placeholder="blur"
                loading="lazy"
                src={UniMailImage2}
                alt="unimail image 2"
              />
            </AnimatedMedia>
          </div>
        </div>
        <div className="flex flex-col items-center gap-4 py-8">
          <div className="md:w-1/3 w-2/3">
            <Copy delay={0.5}>
              <h2 className="text-xs font-medium mb-2 tracking-wide text-muted">
                Built with
              </h2>
            </Copy>
            <Copy>
              <p className="font-normal text-xs leading-[1.5]">
                The frontend is built with Nextjs, Redux and Tailwind CSS. The
                backend is built with FastAPI and Docker.
              </p>
            </Copy>
          </div>
          <div className="flex justify-center">
            <div className="grid grid-cols-1 md:grid-cols-2 w-2/3 gap-2">
              <AnimatedMedia animationOnScroll={true}>
                <Image
                  placeholder="blur"
                  loading="lazy"
                  src={UniMailImage3}
                  alt="unimail image 3"
                />
              </AnimatedMedia>
              <AnimatedMedia animationOnScroll={true}>
                <Image
                  placeholder="blur"
                  loading="lazy"
                  src={UniMailImage4}
                  alt="unimail image 4"
                />
              </AnimatedMedia>
            </div>
          </div>
          <div className="flex gap-4">
            <Copy>
              <Link
                target="_blank"
                className="underline"
                href="https://unimail.vercel.app/"
              >
                Visit {">"}
                {">"}
              </Link>
            </Copy>
            <Copy>
              <Link
                target="_blank"
                className="underline"
                href="https://github.com/BryanVanWinnendael/UniMail"
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

export default UniMail
