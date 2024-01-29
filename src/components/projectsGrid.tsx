import { setBackgroundColor } from "@/stores/background"
import { useEffect, useRef, useState } from "react"
import ProjectCard from "./projectCard"
import NotedImage from "@/assets/images/noted/noted.svg"
import DroneImage from "@/assets/images/drone/drone.svg"
import ChatlyImage from "@/assets/images/chatly/chatly.jpg"
import ClneImage from "@/assets/images/clne/clne.jpg"
import TwitterImage from "@/assets/images/twitter/twitter.jpg"
import { motion } from "framer-motion"
import useScreen from "@/hooks/useScreen"

const ProjectsGrid = () => {
  const { isSmall } = useScreen()
  const targetRefGrid1 = useRef(null)
  const targetRefGrid2 = useRef(null)
  const targetRefGrid3 = useRef(null)
  const [offset, setOffset] = useState<{
    noted: number
    drone: number
    chatly: number
    twitter: number
    clne: number
  }>({
    noted: 0,
    drone: 0,
    chatly: 0,
    twitter: 0,
    clne: 0,
  })

  const changeOffsetWithScroll = (ev: Event) => {
    const scroll = window.scrollY
    const noted_offset = scroll * -0.03 + 3
    const drone_offset = scroll * 0.03 + 20
    const chatly_offset = scroll * -0.03 + 4
    const twitter_offset = scroll * 0.03 - 150
    const clne_offset = scroll * -0.03 + 9

    setOffset({
      noted: noted_offset,
      drone: drone_offset,
      chatly: chatly_offset,
      twitter: twitter_offset,
      clne: clne_offset,
    })
  }

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setBackgroundColor("bg-primary")
          }
        })
      },
      {
        threshold: 0.5,
      },
    )

    if (!isSmall) window.addEventListener("scroll", changeOffsetWithScroll)
    else {
      setOffset({
        noted: 0,
        drone: 0,
        chatly: 0,
        twitter: 0,
        clne: 0,
      })
    }

    if (targetRefGrid1.current) {
      observer.observe(targetRefGrid1.current)
    }
    if (targetRefGrid2.current) {
      observer.observe(targetRefGrid2.current)
    }
    if (targetRefGrid3.current) {
      observer.observe(targetRefGrid3.current)
    }
    return () => {
      observer.disconnect()
      window.removeEventListener("scroll", changeOffsetWithScroll)
    }
  }, [
    targetRefGrid1.current,
    targetRefGrid2.current,
    targetRefGrid3.current,
    isSmall,
  ])

  return (
    <div
      id="projects"
      className="h-full pt-12 flex flex-col gap-2 bg-primary pb-5"
    >
      <h1 className="scroll-m-20 sm:text-[7.317vw] text-6xl font-extrabold tracking-tight h-fit text-secondary sm:mb-12 ml-5">
        Select Work
      </h1>
      <div ref={targetRefGrid1} className="flex flex-col p-5 h-full">
        <motion.div
          initial="initial"
          animate="animate"
          variants={{
            initial: { marginTop: 0 },
            animate: { marginTop: offset.noted },
          }}
          transition={{ duration: 0.5 }}
          className={`w-full lg:h-screen `}
        >
          <ProjectCard image={NotedImage.src} year="2023" title="01./Noted" />
        </motion.div>
      </div>

      <div
        ref={targetRefGrid2}
        className="flex md:flex-row flex-col md:h-screen h-full w-full p-5 gap-5"
      >
        <motion.div
          initial="initial"
          animate="animate"
          variants={{
            initial: { marginTop: 0 },
            animate: { marginTop: offset.drone },
          }}
          transition={{ duration: 0.5 }}
          className="w-full md:h-1/2 h-full"
        >
          <ProjectCard
            image={DroneImage.src}
            year="2023"
            title="02./Point Cloud Processor"
          />
        </motion.div>
        <motion.div
          initial="initial"
          animate="animate"
          variants={{
            initial: { marginTop: 0 },
            animate: { marginTop: offset.chatly },
          }}
          transition={{ duration: 0.5 }}
          className="w-full "
        >
          <ProjectCard image={ChatlyImage.src} year="2023" title="03./Chatly" />
        </motion.div>
      </div>

      <div
        ref={targetRefGrid3}
        className="flex md:flex-row flex-col md:h-screen h-full w-full p-5 gap-5"
      >
        <motion.div
          className="w-full "
          initial="initial"
          animate="animate"
          variants={{
            initial: { marginTop: 0 },
            animate: { marginTop: offset.twitter },
          }}
          transition={{ duration: 0.5 }}
        >
          <ProjectCard
            image={TwitterImage.src}
            year="2022"
            title="04./Twitter clone"
          />
        </motion.div>
        <div className="w-full h-full flex items-center">
          <motion.div
            className="md:h-1/2 h-full w-full"
            initial="initial"
            animate="animate"
            variants={{
              initial: { marginTop: 0 },
              animate: { marginTop: offset.clne },
            }}
            transition={{ duration: 0.5 }}
          >
            <ProjectCard image={ClneImage.src} year="2021" title="05./Clne" />
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default ProjectsGrid
