import { $background_color } from '@/stores/background';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

const Button = ({ isActive, toggleMenu }: any) => {
  const [background_color, setBackground_color] = useState("bg-primary")
  const secondary_bg = background_color === "bg-primary" ? "bg-secondary" : "bg-primary"
  const text_color_menu = background_color === "bg-primary" ? "text-secondary" : "text-primary"
  const text_color_close = background_color === "bg-primary" ? "text-primary" : "text-secondary"


  useEffect(() => {
    const unbindListenerBackground = $background_color.subscribe(value => {
      const location = window.location.pathname
      if (location !== "/") setBackground_color("bg-primary")
      else if (value === "bg-primary") setBackground_color("bg-secondary")
      else setBackground_color("bg-primary")
    })

    return () => {
      unbindListenerBackground()
    }
  }, [])

  return (
    <div className='absolute top-0 right-0 w-[80px] h-[35px] lg:w-[100px] lg:h-[40px] cursor-pointer overflow-hidden rounded-3xl'>
      <motion.div
        className="relative w-full h-full"
        animate={{ top: isActive ? "-100%" : "0%" }}
        transition={{ duration: 0.5, type: "tween", ease: [0.76, 0, 0.24, 1] }}
      >
        <div
          className={`w-full h-full m-0 ${background_color}`}
          onClick={() => { toggleMenu() }}
        >
          <PerspectiveText label="Menu" text_color={text_color_menu} />
        </div>
        <div
          className={`w-full h-full ${secondary_bg} m-0 text-white`}
          onClick={() => { toggleMenu() }}
        >
          <PerspectiveText label="Close" text_color={text_color_close} />
        </div>
      </motion.div>
    </div>
  )
}

const PerspectiveText = ({ label, text_color }: { label: string, text_color: string }) => {
  return (
    <div className='flex flex-col justify-center items-center h-full w-full transform-style:preserve-3d transition-transform duration-750 ease-in-out cubic-bezier(0.76, 0, 0.24, 1)'>
      <p className={`${text_color} font-semibold transition-all duration-750 ease-in-out cubic-bezier(0.76, 0, 0.24, 1) pointer-events-none uppercase`}>{label}</p>
      <p className="absolute font-semibold transform-origin-bottom-center transform -rotate-x-90 -translate-y-9 opacity-0">{label}</p>
    </div>
  )
}

export default Button