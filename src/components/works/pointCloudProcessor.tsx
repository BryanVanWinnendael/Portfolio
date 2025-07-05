"use client"

import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import Copy from "@/components/copy"
import Image from "next/image"

import DroneImage1 from "@/assets/images/drone/drone2.webp"
import DroneImage2 from "@/assets/images/drone/drone3.webp"
import DroneImage3 from "@/assets/images/drone/drone4.webp"

import AnimatedMedia from "@/components/animatedMedia"
import Link from "next/link"

gsap.registerPlugin(ScrollTrigger)

const PointCloudProcessor = () => {
  return (
    <>
      <div className="sm:pt-16 pt-10 pb-12">
        <Copy>
          <h1 className="font-semibold uppercase leading-none text-center text-[14vw] md:text-[12vw]">
            POINT CLOUD PROCESSOR
          </h1>
        </Copy>

        <div className="flex justify-center w-full -mt-4 md:-mt-12 relative z-10 overflow-hidden">
          <AnimatedMedia delay={0.7} className="w-2/3 h-auto block">
            <video src="/videos/drone.mp4" autoPlay loop muted playsInline />
          </AnimatedMedia>
        </div>
        <div className="flex justify-center py-8">
          <div className="md:w-1/3 w-2/3">
            <Copy>
              <p className="font-normal text-xs leading-[1.5]">
                Point Cloud Processor is a desktop application for detecting
                planes inside a point cloud, in order to get information about
                all the planes in a point cloud.
              </p>
            </Copy>
          </div>
        </div>
        <div className="flex justify-center">
          <div className="grid grid-cols-1 md:grid-cols-2 w-2/3 gap-2">
            <AnimatedMedia animationOnScroll={true}>
              <Image src={DroneImage1} alt="drone image 1" />
            </AnimatedMedia>
            <AnimatedMedia animationOnScroll={true}>
              <Image src={DroneImage2} alt="drone image 2" />
            </AnimatedMedia>
          </div>
        </div>
        <div className="flex flex-col items-center gap-4 py-8">
          <div className="md:w-1/3 w-2/3">
            <Copy delay={0.5}>
              <h2 className="text-xs font-medium mb-2 tracking-wide text-muted">
                Problem
              </h2>
            </Copy>
            <Copy>
              <p className="font-normal text-xs leading-[1.5]">
                For my Graduation project my group and I had to make a project
                that was about detecting planes inside a point cloud, in order
                to get information about all the planes in a point cloud.
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
                The application is seperated into 2 parts: The desktop
                application that was made in Pyton using the PyQt5 library. The
                model that will actually process the point cloud was made with
                Python.
              </p>
            </Copy>
          </div>
          <div className="md:w-1/3 w-2/3">
            <Copy delay={0.5}>
              <h2 className="text-xs font-medium mb-2 tracking-wide text-muted">
                Process
              </h2>
            </Copy>
            <Copy>
              <p className="font-normal text-xs leading-[1.5]">
                - Load the point cloud. Use RANSAC to detect planes. - Possibly
                cluster using a cluster strategy like DBSCAN or agglomerative
                clustering, using no clustering is also possible. - Save each of
                the planes as a .ply file. - Generate a color range for each
                plane and save the entire point cloud with the colors. -
                Calculate the surface area of each plane. - Write the info for
                each plane to a .csv file.
              </p>
            </Copy>
          </div>
          <div className="flex justify-center">
            <div className="grid grid-cols-1 w-2/3 gap-2">
              <AnimatedMedia animationOnScroll={true}>
                <Image src={DroneImage3} alt="drone image 3" />
              </AnimatedMedia>
            </div>
          </div>

          <div className="flex gap-4">
            <Copy>
              <Link
                target="_blank"
                className="underline"
                href="https://github.com/BryanVanWinnendael/Drone_project/releases/tag/v1.0"
              >
                Download {">"}
                {">"}
              </Link>
            </Copy>
            <Copy>
              <Link
                target="_blank"
                className="underline"
                href="https://github.com/BryanVanWinnendael/Drone_project"
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

export default PointCloudProcessor
