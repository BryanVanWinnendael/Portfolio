import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { FaLocationArrow } from 'react-icons/fa';
import useScreen from '@/hooks/useScreen';

const ProjectCard = ({ image, year, tags, title, text }: { image: string, year: string, tags: string, title: string, text: string }) => {
  const cardRef = useRef<HTMLImageElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0, hover: false })
  const { isSmall } = useScreen()

  useEffect(() => {
    const handleMouse = (e: MouseEvent) => {
      if (cardRef.current) {
        const rect = cardRef.current.getBoundingClientRect();
        const isInside = (
          e.clientX >= rect.left &&
          e.clientX <= rect.right &&
          e.clientY >= rect.top &&
          e.clientY <= rect.bottom
        );

        setMousePosition({
          x: e.clientX,
          y: e.clientY,
          hover: isInside
        })
      }
    };

    window.addEventListener("mousemove", handleMouse);
    return () => {
      setMousePosition({
        x: 0,
        y: 0,
        hover: false
      })
      window.removeEventListener("mousemove", handleMouse);
    }
  }
    , [])


  return (
    <>
    {
      !isSmall && 
      <motion.div
      style={{
        left: mousePosition.x - 50,
        top: mousePosition.y - 50,
      }}
      initial={{ scale: 0 }}
      animate={{ scale: mousePosition.hover ? 1 : 0 }}
      exit={{ scale: 0 }}
      transition={{ duration: 0.3 }}
      className={`bg-primary w-24 h-24 fixed rounded-full flex justify-center z-50 items-center ${mousePosition.hover ? "cursor-none pointer-events-none" : ""}`}
    >
      <FaLocationArrow className='w-6 h-6 text-secondary' />
    </motion.div>
    }
     

      <div className='w-full h-full' id={"projects-" + title.replace(/\s/g, '').toLowerCase()} >
        <a href={title.replace(/\s/g, '').toLowerCase()} className='h-5/6 w-full rounded-md overflow-hidden'>
          <div className='h-5/6 w-full overflow-hidden hover:scale-90 duration-500 rounded-md'>
            <img ref={cardRef} style={{ viewTransitionName: title.replace(/\s/g, '').toLowerCase() }} className='object-cover h-full w-full hover:scale-125 duration-500 hover:cursor-none rounded-md' src={image} alt="" />
          </div>
        </a>
        <div className='my-5 flex gap-5'>
          <div className='border border-muted-foreground w-fit py-1 px-3 rounded-2xl'>
            <p className='text-muted-foreground'>{year}</p>
          </div>
          <div className='border border-muted-foreground w-fit py-1 px-3 rounded-2xl'>
            <p className='text-muted-foreground'>{tags}</p>
          </div>
        </div>
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl text-primary">{title}</h1>
        <p className="leading-7 [&:not(:first-child)]:mt-6 text-primary font-semibold max-w-96">{text}</p>
      </div>
    </>
  )
}

export default ProjectCard