"use client"

import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import Copy from "@/components/copy"
import Image from "next/image"
import Link from "next/link"
import AnimatedMedia from "@/components/animatedMedia"

import DroneImage1 from "@/assets/images/drone/drone2.webp"
import DroneImage2 from "@/assets/images/drone/drone3.webp"
import DroneImage3 from "@/assets/images/drone/drone4.webp"

gsap.registerPlugin(ScrollTrigger)

const process = [
  "Load the point cloud.",
  "Use RANSAC to detect planes.",
  "Optionally cluster the detected points using DBSCAN or agglomerative clustering.",
  "Save each detected plane as a .ply file.",
  "Generate a color range for each plane and apply the colors to the complete point cloud.",
  "Calculate the surface area of each plane.",
  "Export information about each plane to a .csv file.",
]

const PointCloudProcessor = () => {
  return (
    <>
      <div className="pb-12 pt-10 sm:pt-16">
        <Copy>
          <h1 className="text-center text-[14vw] font-semibold uppercase leading-none md:text-[12vw]">
            POINT CLOUD PROCESSOR
          </h1>
        </Copy>

        <div className="relative z-10 -mt-4 flex w-full justify-center overflow-hidden md:-mt-12">
          <AnimatedMedia delay={0.7} className="block h-auto w-2/3">
            <video
              preload="metadata"
              src="/videos/drone.mp4"
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
                Point Cloud Processor is a desktop application for detecting
                planes inside a point cloud and extracting information about
                each detected plane.
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
                src={DroneImage1}
                alt="Point Cloud Processor interface"
              />
            </AnimatedMedia>

            <AnimatedMedia animationOnScroll={true}>
              <Image
                placeholder="blur"
                loading="lazy"
                src={DroneImage2}
                alt="Point Cloud Processor interface"
              />
            </AnimatedMedia>
          </div>
        </div>

        <div className="flex flex-col items-center gap-10 py-12 md:py-16">
          <div className="w-full max-w-xl px-4">
            <Copy delay={0.5}>
              <h2 className="mb-3 text-[10px] font-medium uppercase tracking-widest text-muted">
                Problem
              </h2>
            </Copy>

            <Copy>
              <p className="text-sm leading-relaxed text-black/80 md:text-base">
                As part of my graduation project, my group and I developed a
                solution for detecting planes inside point clouds and extracting
                useful information from them.
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
                The application is split into two parts.
              </p>

              <div className="mt-4 space-y-2 text-sm leading-relaxed text-black/80 md:text-base">
                <p>
                  — The desktop application was built with Python and PyQt5.
                </p>

                <p>
                  — The point cloud processing model was developed in Python.
                </p>
              </div>
            </Copy>
          </div>

          <div className="w-full max-w-xl px-4">
            <Copy delay={0.5}>
              <h2 className="mb-3 text-[10px] font-medium uppercase tracking-widest text-muted">
                Process
              </h2>
            </Copy>

            <Copy>
              <div className="space-y-2 text-sm leading-relaxed text-black/80 md:text-base">
                {process.map((step, index) => (
                  <p key={step}>
                    <span className="mr-2 text-muted">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    {step}
                  </p>
                ))}
              </div>
            </Copy>
          </div>

          <div className="flex w-full justify-center px-4">
            <div className="w-full max-w-4xl">
              <AnimatedMedia animationOnScroll={true}>
                <Image
                  placeholder="blur"
                  loading="lazy"
                  src={DroneImage3}
                  alt="Point Cloud Processor visualization"
                />
              </AnimatedMedia>
            </div>
          </div>

          <div className="flex gap-5 pt-2">
            <Copy>
              <Link
                href="https://github.com/BryanVanWinnendael/Drone_project/releases/tag/v1.0"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs underline underline-offset-4 transition-opacity hover:opacity-60"
              >
                Download {">>"}
              </Link>
            </Copy>

            <Copy>
              <Link
                href="https://github.com/BryanVanWinnendael/Drone_project"
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

export default PointCloudProcessor
