import { motion, AnimatePresence } from "framer-motion";
import { useStates } from "@/context/stateContext";

const Hero = () => {
  const { bgColor, textColor } = useStates();

  return (
    <AnimatePresence>
      <motion.div
        key={bgColor + textColor}
        animate={{ backgroundColor: bgColor, color: textColor }}
        exit={{ backgroundColor: "#000", color: "#fff" }}
        transition={{ duration: 0.5 }}
        className="fixed top-0 h-screen w-full select-none text-primary flex justify-center items-center"
      >
        <div className="flex flex-col justify-center items-center sm:px-12 px-2">
          <div className="flex justify-between w-full ">
            <h1 className="scroll-m-20 leading-none tracking-tight lg:text-[6.5em] md:text-[4em] text-[3em] uppercase">
              bryan
            </h1>
            <h1 className="scroll-m-20 leading-none tracking-tight lg:text-[6.5em] md:text-[4em] text-[3em] uppercase">
              van
            </h1>
          </div>
          <div className="flex justify-between w-full">
            <h1 className="scroll-m-20 leading-none tracking-tight lg:text-[6.5em] md:text-[4em] text-[3em] uppercase">
              winnendael
            </h1>
          </div>
          <div className="flex justify-between w-full">
            <h1 className="scroll-m-20 leading-none tracking-tight lg:text-[6.5em] md:text-[4em] text-[3em] uppercase">
              full
            </h1>
            <h1 className="scroll-m-20 leading-none tracking-tight lg:text-[6.5em] md:text-[4em] text-[3em] uppercase">
              stack
            </h1>
          </div>
          <div className="flex justify-between w-full">
            <h1 className="scroll-m-20 leading-none tracking-tight lg:text-[6.5em] md:text-[4em] text-[3em] uppercase">
              developer
            </h1>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default Hero;
