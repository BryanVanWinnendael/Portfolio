import { motion } from 'framer-motion';
import { links } from './data';
import { slideIn } from "./anim";
import { scrollToElement } from '@/lib/utils';
import { $background_color } from '@/stores/background';
import { useEffect, useState } from 'react';
import useScreen from '@/hooks/useScreen';

const Index = () => {
  const [textColor, setTextCololr] = useState("text-primary")
  const location = window.location.pathname
  const { isLarge, isMedium } = useScreen()

  const getHref = (href: string) => {
    const location = window.location.pathname
    if (location === "/") return href
    else {
      if (href === "projects") {
        const project = location.split("/")[1]
        return "/#projects-" + project
      }
      return "/#" + href
    }
  }

  const getTextSize = () => {
    if (isLarge) return "text-5xl"
    else if (isMedium) return "text-4xl"
    else return "text-lg"
  }

  useEffect(() => {
    const unbindListenerBackground = $background_color.subscribe(value => {
      const location = window.location.pathname
      if (location !== "/") setTextCololr("text-secondary")
      else if (value === "bg-primary") setTextCololr("text-primary")
      else setTextCololr("text-secondary")
    })

    return () => {
      unbindListenerBackground()
    }
  }, [])

  return (
    <div className="lg:pt-10 pt-5 pl-12">

      <div className="flex lg:gap-4 md:gap-4 gap-1 flex-col">
        {
          links.map((link, i) => {
            const { title, href } = link;
            return (
              <div key={`b_${i}`}>
                {
                  location === "/" ?
                    <motion.p
                      className={`${getTextSize()} cursor-pointer w-fit hover:underline ${textColor} font-semibold`}
                      onClick={() => scrollToElement(href)}
                      custom={i}
                      variants={slideIn}
                      initial="initial"
                      animate="enter"
                      exit="exit"
                    >
                      {title}
                    </motion.p>
                    :
                    <motion.a
                      className={`${getTextSize()} cursor-pointer w-fit hover:underline ${textColor} font-semibold`}
                      href={getHref(href)}
                      custom={i}
                      variants={slideIn}
                      initial="initial"
                      animate="enter"
                      exit="exit"
                    >
                      {title}
                    </motion.a>
                }

              </div>
            )
          })
        }
      </div>
    </div >
  )
}

export default Index