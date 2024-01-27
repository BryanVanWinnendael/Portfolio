import { useEffect, useRef, useState } from "react"
import { motion } from "framer-motion"
import { FaLocationArrow } from "react-icons/fa"
import useScreen from "@/hooks/useScreen"

const ProjectCard = ({
  image,
  year,
  tags,
  title,
}: {
  image: string
  year: string
  tags: string
  title: string
}) => {
  const cardRef = useRef<HTMLImageElement>(null)
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
    hover: false,
  })
  const { isSmall } = useScreen()

  useEffect(() => {
    const handleMouse = (e: MouseEvent) => {
      if (cardRef.current) {
        const rect = cardRef.current.getBoundingClientRect()
        const isInside =
          e.clientX >= rect.left &&
          e.clientX <= rect.right &&
          e.clientY >= rect.top &&
          e.clientY <= rect.bottom

        setMousePosition({
          x: e.clientX,
          y: e.clientY,
          hover: isInside,
        })
      }
    }

    window.addEventListener("mousemove", handleMouse)
    return () => {
      setMousePosition({
        x: 0,
        y: 0,
        hover: false,
      })
      window.removeEventListener("mousemove", handleMouse)
    }
  }, [])

  return (
    <>
      {!isSmall && (
        <motion.div
          style={{
            left: mousePosition.x - 50,
            top: mousePosition.y - 50,
          }}
          initial={{ scale: 0 }}
          animate={{ scale: mousePosition.hover ? 1 : 0 }}
          exit={{ scale: 0 }}
          transition={{ duration: 0.3 }}
          className={`bg-secondary w-24 h-24 fixed rounded-full flex justify-center z-50 items-center ${mousePosition.hover ? "cursor-none pointer-events-none" : ""}`}
        >
          <FaLocationArrow className="w-6 h-6 text-primary" />
        </motion.div>
      )}

      <div
        className="w-full h-full"
        id={"projects-" + title.split("/")[1].replace(/\s/g, "").toLowerCase()}
      >
        <a
          href={title.split("/")[1].replace(/\s/g, "").toLowerCase()}
          className="h-5/6 w-full rounded-md overflow-hidden"
        >
          <div className="h-5/6 w-full overflow-hidden hover:scale-90 duration-500 rounded-md">
            <img
              ref={cardRef}
              style={{
                viewTransitionName: title
                  .split("/")[1]
                  .replace(/\s/g, "")
                  .toLowerCase(),
              }}
              className="object-cover h-full w-full hover:scale-125 duration-500 hover:cursor-none rounded-md"
              src={image}
              alt=""
            />
          </div>
        </a>

        <div className="flex items-center gap-2 mt-5">
          <div className="flex gap-1 items-end">
            <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight text-secondary">
              {title.split("/")[0]}
            </h3>
            <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl text-secondary">
              {title.split("/")[1]}
            </h1>
            </div>
          <div className="my-5 flex gap-5 items-center">
            <div className="border border-muted-foreground w-fit py-1 px-3 rounded-2xl h-fit">
              <p className="text-muted-foreground">{year}</p>
            </div>
            
            </div>
        </div>
      </div>
    </>
  )
}

export default ProjectCard
