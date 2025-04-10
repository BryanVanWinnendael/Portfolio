import imecImage from "@/assets/images/imec.webp"
import ucllImage from "@/assets/images/ucll.webp"

import MomezImage from "@/assets/images/momez/momez.webp"
import TwitterImage from "@/assets/images/twitter/twitter.webp"
import MinesweeperImage from "@/assets/images/minesweeper/minesweeper.webp"
import TicTacToeImage from "@/assets/images/tictactoe/tictactoe.webp"

export const DATA = {
  work: [
    {
      company: "IMEC",
      title: "Intern Full Stack Engineer",
      logoUrl: imecImage.src,
      start: "March 2023",
      end: "June 2023",
      description: [
        "Developed the back-end infrastructure with FastAPI Python",
        "Architected and implemented the front-end interface using Next.js",
        "Collaborated closely with team members to gather requirements, refine design specifications, and iterate on features throughout the development lifecycle",
      ],
      url: "https://www.imec.be",
      viewMore: "imec",
    },
  ],
  education: [
    {
      company: "UCLL",
      title: "Applied Computer Science",
      logoUrl: ucllImage.src,
      start: "2020",
      end: "2023",
      description: [
        "For three years I studied applied computer science at UCLL and graduated in 2023 with a cum laude.",
      ],
      url: "https://www.ucll.be",
    },
  ],
  projectsPreview: [
    {
      name: "Noted",
      description: "Note taking app inspired by Notion and Obsidian.",
      href: "/projects/noted",
      cta: "Learn more",
      className: "min-h-[200px] md:min-h-[300px] lg:min-h-[400px]",
      background: (
        <video
          style={{ viewTransitionName: "noted" }}
          className="absolute left-0 top-0 h-full w-full border-none transition-all duration-300 ease-out opacity-70 [mask-image:linear-gradient(to_top,transparent_20%,#000_100%)] group-hover:scale-105 object-cover"
          autoPlay
          loop
          muted
          playsInline
          src="videos/noted.mp4"
        />
      ),
      Icon: "",
    },
    {
      name: "Point Cloud Processor",
      description:
        " Desktop application for detecting planes in a point cloud.",
      href: "/projects/drone",
      cta: "Learn more",
      className: "min-h-[200px] md:min-h-[300px] lg:min-h-[400px]",
      background: (
        <video
          style={{ viewTransitionName: "drone" }}
          className="absolute left-0 top-0 h-full w-full border-none transition-all duration-300 ease-out opacity-70 [mask-image:linear-gradient(to_top,transparent_20%,#000_100%)] group-hover:scale-105 object-cover"
          autoPlay
          loop
          muted
          playsInline
          src="videos/drone.mp4"
        />
      ),
      Icon: "",
    },
    {
      name: "Harbor",
      description: "Docker container manager for local development.",
      href: "/projects/harbor",
      cta: "Learn more",
      className: "min-h-[200px] md:min-h-[300px] lg:min-h-[400px]",
      background: (
        <video
          style={{ viewTransitionName: "harbor" }}
          className="absolute left-0 top-0 h-full w-full border-none transition-all duration-300 ease-out opacity-70 [mask-image:linear-gradient(to_top,transparent_20%,#000_100%)] group-hover:scale-105 object-cover"
          autoPlay
          loop
          muted
          playsInline
          src="videos/harbor.mp4"
        />
      ),
      Icon: "",
    },
  ],
  projects: [
    {
      name: "Noted",
      description: "",
      href: "/projects/noted",
      cta: "Learn more",
      className: "lg:col-span-3 lg:col-span-3 lg:row-span-3 h-full",
      background: (
        <video
          style={{ viewTransitionName: "noted" }}
          className="absolute left-0 top-0 h-full w-full border-none transition-all duration-300 ease-out opacity-70 [mask-image:linear-gradient(to_top,transparent_20%,#000_100%)] group-hover:scale-105 object-cover"
          autoPlay
          loop
          muted
          playsInline
          src="videos/noted.mp4"
        />
      ),
      Icon: "",
    },
    {
      name: "Point Cloud Processor",
      description: "",
      href: "/projects/drone",
      cta: "Learn more",
      className:
        "lg:col-start-1 lg:col-end-3 lg:row-start-4 lg:row-end-6 h-full",
      background: (
        <video
          style={{ viewTransitionName: "drone" }}
          className="absolute left-0 top-0 h-full w-full border-none transition-all duration-300 ease-out opacity-70 [mask-image:linear-gradient(to_top,transparent_20%,#000_100%)] group-hover:scale-105 object-cover"
          autoPlay
          loop
          muted
          playsInline
          src="videos/drone.mp4"
        />
      ),
      Icon: "",
    },
    {
      name: "Harbor",
      description: "",
      href: "/projects/harbor",
      cta: "Learn more",
      className:
        "lg:col-start-3 lg:col-end-3 lg:row-start-4 lg:row-end-6 h-full w-full",
      background: (
        <video
          style={{ viewTransitionName: "harbor" }}
          className="absolute left-0 top-0 h-full w-full border-none transition-all duration-300 ease-out opacity-70 [mask-image:linear-gradient(to_top,transparent_20%,#000_100%)] group-hover:scale-105 object-cover"
          autoPlay
          loop
          muted
          playsInline
          src="videos/harbor.mp4"
        />
      ),
      Icon: "",
    },
    {
      name: "UniMail",
      description: "",
      href: "/projects/unimail",
      cta: "Learn more",
      className:
        "lg:col-start-1 lg:col-end-2 lg:row-start-6 lg:row-end-8 h-full w-full",
      background: (
        <video
          style={{ viewTransitionName: "unimail" }}
          className="absolute left-0 top-0 h-full w-full border-none transition-all duration-300 ease-out opacity-70 [mask-image:linear-gradient(to_top,transparent_20%,#000_100%)] group-hover:scale-105 object-cover"
          autoPlay
          loop
          muted
          playsInline
          src="videos/unimail.mp4"
        />
      ),
      Icon: "",
    },
    {
      name: "Zap",
      description: "",
      href: "/projects/zap",
      cta: "Learn more",
      className:
        "lg:col-start-2 lg:col-end-3 lg:row-start-6 lg:row-end-8 h-full",
      background: (
        <video
          style={{ viewTransitionName: "zap" }}
          className="absolute left-0 top-0 h-full w-full border-none transition-all duration-300 ease-out opacity-70 [mask-image:linear-gradient(to_top,transparent_20%,#000_100%)] group-hover:scale-105 object-cover"
          autoPlay
          loop
          muted
          playsInline
          src="videos/zap.mp4"
        />
      ),
      Icon: "",
    },
    {
      name: "Momez",
      description: "",
      href: "/projects/momez",
      cta: "Learn more",
      className:
        "lg:col-start-3 lg:col-end-4 lg:row-start-6 lg:row-end-9 h-full",
      background: (
        <img
          style={{ viewTransitionName: "momez" }}
          className="absolute left-0 top-0 h-full w-full border-none transition-all duration-300 ease-out opacity-70 [mask-image:linear-gradient(to_top,transparent_20%,#000_100%)] group-hover:scale-105 object-cover"
          src={MomezImage.src}
        />
      ),
      Icon: "",
    },
    {
      name: "Twitter Clone",
      description: "",
      href: "/projects/twitter",
      cta: "Learn more",
      className:
        "lg:col-start-1 lg:col-end-2 lg:row-start-8 lg:row-end-11 h-full",
      background: (
        <img
          style={{ viewTransitionName: "twitter" }}
          className="absolute left-0 top-0 h-full w-full border-none transition-all duration-300 ease-out opacity-70 [mask-image:linear-gradient(to_top,transparent_20%,#000_100%)] group-hover:scale-105 object-cover"
          src={TwitterImage.src}
        />
      ),
      Icon: "",
    },
    {
      name: "TicTacToe Distributed App",
      description: "",
      href: "/projects/tictactoe",
      cta: "Learn more",
      className:
        "lg:col-start-2 lg:col-end-3 lg:row-start-8 lg:row-end-11 h-full",
      background: (
        <img
          style={{ viewTransitionName: "tictactoe" }}
          className="absolute left-0 top-0 h-full w-full border-none transition-all duration-300 ease-out opacity-70 [mask-image:linear-gradient(to_top,transparent_20%,#000_100%)] group-hover:scale-105 object-cover"
          src={TicTacToeImage.src}
        />
      ),
      Icon: "",
    },
    {
      name: "MineSweeper",
      description: "",
      href: "/projects/minesweeper",
      cta: "Learn more",
      className:
        "lg:col-start-3 lg:col-end-4 lg:row-start-9 lg:row-end-11 h-full",
      background: (
        <img
          style={{ viewTransitionName: "minesweeper" }}
          className="absolute left-0 top-0 h-full w-full border-none transition-all duration-300 ease-out opacity-70 [mask-image:linear-gradient(to_top,transparent_20%,#000_100%)] group-hover:scale-105 object-cover"
          src={MinesweeperImage.src}
        />
      ),
      Icon: "",
    },
  ],
} as const
