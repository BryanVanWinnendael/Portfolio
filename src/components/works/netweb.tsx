"use client"

import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import Copy from "@/components/copy"
import Image from "next/image"
import Link from "next/link"
import AnimatedMedia from "@/components/animatedMedia"

import NetwebImage1 from "@/assets/images/imec/imec.webp"
import NetwebImage2 from "@/assets/images/imec/imec2.webp"
import NetwebImage3 from "@/assets/images/imec/imec3.webp"
import NetwebImage4 from "@/assets/images/imec/imec4.webp"
import NetwebImage5 from "@/assets/images/imec/imec5.webp"

gsap.registerPlugin(ScrollTrigger)

const features = [
  "Host lookup",
  "Port management",
  "Guest account creation",
  "Azure NICs viewer",
  "ACI endpoints viewer",
  "Switch manager",
  "ISE lookup",
  "SSL exceptions",
]

const Netweb = () => {
  return (
    <>
      <div className="pb-12 pt-10 sm:pt-16">
        <Copy delay={0.5}>
          <h1 className="text-center text-[20vw] font-semibold uppercase leading-none">
            NETWEB
          </h1>
        </Copy>

        <div className="relative z-10 -mt-6 flex w-full justify-center overflow-hidden md:-mt-16">
          <AnimatedMedia delay={0.7} className="block h-auto w-2/3">
            <Image
              placeholder="blur"
              loading="lazy"
              src={NetwebImage1}
              alt="Netweb application"
            />
          </AnimatedMedia>
        </div>

        <div className="flex justify-center px-4 py-10 md:py-12">
          <div className="w-full max-w-xl">
            <Copy>
              <p className="text-sm leading-relaxed text-black/80 md:text-base">
                Internship project at{" "}
                <Link
                  href="https://www.imec-int.com/en"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-accent text-white underline underline-offset-2"
                >
                  IMEC
                </Link>
                .
              </p>

              <p className="mt-4 text-sm leading-relaxed text-black/80 md:text-base">
                Netweb is a web application for network management, enabling
                host lookups, guest account creation, port management, and other
                administrative tasks.
              </p>

              <p className="mt-4 text-sm leading-relaxed text-black/80 md:text-base">
                The application streamlined network operations and improved
                efficiency for IT staff.
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
                src={NetwebImage2}
                alt="Netweb interface"
              />
            </AnimatedMedia>

            <AnimatedMedia animationOnScroll={true}>
              <Image
                placeholder="blur"
                loading="lazy"
                src={NetwebImage3}
                alt="Netweb interface"
              />
            </AnimatedMedia>
          </div>
        </div>

        <div className="flex flex-col items-center gap-10 py-12 md:py-16">
          <div className="w-full max-w-xl px-4">
            <Copy delay={0.5}>
              <h2 className="mb-3 text-[10px] font-medium uppercase tracking-widest text-muted">
                Features
              </h2>
            </Copy>

            <Copy>
              <div className="grid grid-cols-1 gap-x-8 gap-y-1 text-sm leading-relaxed text-black/80 sm:grid-cols-2 md:text-base">
                {features.map((feature) => (
                  <p key={feature}>— {feature}</p>
                ))}
              </div>
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
                Netweb is built with FastAPI, Next.js, Python, TypeScript,
                Docker, and Azure AD for authentication and data extraction.
              </p>
            </Copy>
          </div>

          <div className="flex w-full justify-center px-4">
            <div className="grid w-full max-w-4xl grid-cols-1 gap-2 md:grid-cols-2">
              <AnimatedMedia animationOnScroll={true}>
                <Image
                  placeholder="blur"
                  loading="lazy"
                  src={NetwebImage4}
                  alt="Netweb interface"
                />
              </AnimatedMedia>

              <AnimatedMedia animationOnScroll={true}>
                <Image
                  placeholder="blur"
                  loading="lazy"
                  src={NetwebImage5}
                  alt="Netweb interface"
                />
              </AnimatedMedia>
            </div>
          </div>
        </div>
      </div>

      <div className="relative z-30 h-px w-full bg-black" />
    </>
  )
}

export default Netweb
