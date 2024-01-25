import { motion, useAnimation, useInView } from "framer-motion"
import { useEffect, useRef } from "react"

interface Props {
  children: React.ReactNode
}

const Reveal = ({ children }: Props) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const mainControls = useAnimation()

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible")
    }
  }, [isInView, mainControls])

  return (
    <motion.div
      ref={ref}
      variants={{
        hidden: {
          opacity: 0,
          y: 100,
        },
        visible: {
          opacity: 1,
          y: 0,
        },
      }}
      transition={{ duration: 0.5, delay: 0.4 }}
      initial="hidden"
      animate={mainControls}
    >
      {children}
    </motion.div>
  )
}

export default Reveal
