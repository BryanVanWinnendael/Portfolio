"use client";
import { useStates } from "@/context/stateContext";
import { useEffect } from "react";
import { Link } from "next-view-transitions";
import ProjectCard from "./projectCard";
import MomezImage from "@/assets/images/momez/momez.webp";
import TwitterImage from "@/assets/images/twitter/twitter.webp";
import WrappedImage from "@/assets/images/wrapped/wrapped.webp";
import ChatlyImage from "@/assets/images/chatly/chatly2.webp";
import { AnimatePresence, motion } from "framer-motion";

const Archive = () => {
  const { setActiveNav } = useStates();
  const { bgColor, textColor } = useStates();

  useEffect(() => {
    setActiveNav("archive");
  }, [setActiveNav]);

  return (
    <div id="archive" className="h-full w-full">
      <AnimatePresence>
        <motion.div
          key={bgColor + textColor}
          animate={{ backgroundColor: bgColor, color: textColor }}
          exit={{ backgroundColor: "#000", color: "#fff" }}
          transition={{ duration: 0.5 }}
          className="fixed w-full h-full flex flex-col justify-center items-center blur-sm"
        >
          <h1 className="scroll-m-20 leading-none tracking-tight lg:text-[6.5em] md:text-[4em] text-[3em] uppercase">
            archive
          </h1>
          <h1 className="scroll-m-20 leading-none tracking-tight lg:text-[6.5em] md:text-[4em] text-[3em] uppercase">
            archive
          </h1>
          <h1 className="scroll-m-20 leading-none tracking-tight lg:text-[6.5em] md:text-[4em] text-[3em] uppercase">
            archive
          </h1>
        </motion.div>
      </AnimatePresence>
      <div className="h-full p-4 relative z-50">
        <Link href="/#select-work" className="text-muted-foreground pl-4">
          &lt; back
        </Link>
        <h2 className="h-fit scroll-m-20 tracking-wide sm:text-6xl text-5xl text-primary pl-4 font-medium my-4">
          Archive
        </h2>
        <div className="flex flex-col gap-4">
          <div className="lg:grid flex flex-col grid-cols-2 grid-rows-[auto_auto] gap-y-32 gap-x-3">
            <div className="w-full h-full col-start-1">
              <ProjectCard
                image="noted"
                bgColor="#6488EA"
                textColor="#000"
                title="01./Noted"
                type="video"
              />
            </div>
            <div className="w-full h-full col-start-2 row-start-2 lg:-ml-14">
              <ProjectCard
                image="drone"
                bgColor="#249ea7"
                textColor="#000"
                title="02./Point Cloud Processor"
                type="video"
              />
            </div>
            <div className="w-full h-full col-start-1 row-start-3 lg:ml-16">
              <ProjectCard
                image="harbor"
                bgColor="#1D63ED"
                textColor="#fff"
                title="03./Harbor"
                type="video"
              />
            </div>
            <div className="w-full h-full col-start-2 row-start-4">
              <ProjectCard
                image="unimail"
                bgColor="#6366f1"
                textColor="#000"
                title="04./UniMail"
                type="video"
              />
            </div>
            <div className="w-full h-full col-start-1 row-start-5 lg:ml-24">
              <ProjectCard
                image="zap"
                bgColor="#F9CC69"
                textColor="#000"
                title="05./Zap"
                type="video"
              />
            </div>
            <div className="w-full h-full col-start-2 row-start-6 lg:-ml-16">
              <ProjectCard
                image={MomezImage.src}
                bgColor="#7237c6"
                textColor="#fff"
                title="06./Momez"
                type="img"
              />
            </div>
            <div className="w-full h-full col-start-1 row-start-7 lg:ml-20">
              <ProjectCard
                image={TwitterImage.src}
                bgColor="#8db4fc"
                textColor="#000"
                title="07./Twitter Clone"
                type="img"
              />
            </div>
            <div className="w-full h-full col-start-2 row-start-8 lg:-ml-14">
              <ProjectCard
                image={WrappedImage.src}
                bgColor="#22c55e"
                textColor="#000"
                title="08./Wrapped Now"
                type="img"
              />
            </div>
            <div className="w-full h-full col-start-1 row-start-9 lg:ml-12">
              <ProjectCard
                image={ChatlyImage.src}
                bgColor="#6f6edb"
                textColor="#fff"
                title="09./Chatly"
                type="img"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Archive;
