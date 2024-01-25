import { motion } from "framer-motion"

const ScrollLine = () => {
  return (
    <div className="relative w-14 h-full overflow-hidden flex items-center mx-2">
      <motion.div
        className="absolute w-12 h-[1px] bg-white opacity-20"
        initial={{ x: "-50px" }}
        animate={{ x: "150px" }}
        transition={{ duration: 1.5, ease: "linear", repeat: Infinity }}
      />
    </div>
  )
}

export default ScrollLine
