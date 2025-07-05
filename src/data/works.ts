import { StaticImageData } from "next/image"

import DroneImage4 from "@/assets/images/drone/drone4.webp"

import NetwebImage1 from "@/assets/images/imec/imec4.webp"
import NetwebImage2 from "@/assets/images/imec/imec5.webp"
import MomezImage1 from "@/assets/images/momez/momez.webp"

export type MediaItem = {
  type: "image" | "video"
  src: StaticImageData | string
  alt?: string
  placementIndex: number
}

type Project = {
  title: string
  italic: boolean
  year: number
  placement: "left" | "center" | "right"
  boldness: number
  media: MediaItem[]
  href: string
  newPage?: boolean
  offset: number
}

export const projects: Project[] = [
  {
    title: "Noted",
    italic: false,
    year: 2024,
    offset: 0,
    placement: "center",
    boldness: 200,
    media: [
      {
        type: "video",
        src: "/videos/noted.mp4",
        alt: "Noted Video",
        placementIndex: 2,
      },
    ],
    href: "/works/noted",
  },
  {
    title: "Netweb",
    italic: true,
    offset: 10,
    year: 2023,
    placement: "right",
    boldness: 400,
    media: [
      {
        type: "image",
        src: NetwebImage1,
        alt: "Netweb Image 1",
        placementIndex: 1,
      },
      {
        type: "image",
        src: NetwebImage2,
        alt: "Netweb Image 2",
        placementIndex: 4,
      },
    ],
    href: "/works/netweb",
  },
  {
    title: "Point Cloud Processor",
    italic: false,
    offset: 0,
    year: 2023,
    placement: "left",
    boldness: 500,
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
    href: "/works/point-cloud-processor",
  },
  {
    title: "Harbor",
    italic: false,
    offset: -100,
    year: 2024,
    placement: "right",
    boldness: 500,
    media: [
      {
        type: "video",
        src: "/videos/harbor.mp4",
        alt: "Harbor Video",
        placementIndex: 2,
      },
    ],
    href: "/works/harbor",
  },
  {
    title: "UniMail",
    italic: true,
    offset: 100,
    year: 2024,
    placement: "center",
    boldness: 600,
    media: [
      {
        type: "video",
        src: "/videos/unimail.mp4",
        alt: "UniMail Video",
        placementIndex: 2,
      },
    ],
    href: "/works/unimail",
  },
  {
    title: "More",
    italic: false,
    offset: 100,
    year: 2025,
    placement: "left",
    boldness: 600,
    media: [
      {
        type: "video",
        src: "/videos/zap.mp4",
        alt: "Zap Video",
        placementIndex: 0,
      },
      {
        type: "image",
        src: MomezImage1,
        alt: "Momez Image",
        placementIndex: 2,
      },
    ],
    href: "https://github.com/BryanVanWinnendael/",
    newPage: true,
  },
]
