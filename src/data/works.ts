import { StaticImageData } from "next/image"

import DroneImage4 from "@/assets/images/drone/drone4.webp"

import NetwebImage1 from "@/assets/images/imec/imec.webp"
import NetwebImage6 from "@/assets/images/imec/imec6.webp"

export type MediaItem = {
  type: "image" | "video"
  src: StaticImageData | string
  alt?: string
  placementIndex: number
}

type Project = {
  title: string
  placement: "left" | "center" | "right"
  boldness: number
  media: MediaItem[]
}

export const projects: Project[] = [
  {
    title: "Noted",
    placement: "center",
    boldness: 700,
    media: [
      {
        type: "video",
        src: "/videos/noted.mp4",
        alt: "Noted Video",
        placementIndex: 2,
      },
    ],
  },
  {
    title: "Point Cloud Processor",
    placement: "left",
    boldness: 400,
    media: [
      {
        type: "image",
        src: DroneImage4,
        alt: "Drone Image 4",
        placementIndex: 5,
      },
      {
        type: "video",
        src: "/videos/drone.mp4",
        alt: "Drone Video",
        placementIndex: 11,
      },
    ],
  },
  {
    title: "Harbor",
    placement: "right",
    boldness: 600,
    media: [
      {
        type: "video",
        src: "/videos/harbor.mp4",
        alt: "Harbor Video",
        placementIndex: 2,
      },
    ],
  },
  {
    title: "Netweb",
    placement: "left",
    boldness: 350,
    media: [
      {
        type: "image",
        src: NetwebImage1,
        alt: "Netweb Image 1",
        placementIndex: 1,
      },
      {
        type: "image",
        src: NetwebImage6,
        alt: "Netweb Image 6",
        placementIndex: 4,
      },
    ],
  },
]
