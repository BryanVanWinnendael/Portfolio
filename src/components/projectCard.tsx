"use client";
import { useStates } from "@/context/stateContext";
import useScreen from "@/hooks/useScreen";
import Image from "next/image";
import { Link } from "next-view-transitions";
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useSpring,
} from "framer-motion";
import { useRef } from "react";

const ROTATION_RANGE = 30;
const HALF_ROTATION_RANGE = ROTATION_RANGE / 2;

const ProjectCard = ({
  image,
  textColor,
  bgColor,
  title,
  type,
}: {
  image: string;
  textColor: string;
  bgColor: string;
  title: string;
  type: "img" | "video";
}) => {
  const { setBgColor, setTextColor } = useStates();
  const isMobile = useScreen().isSmall;
  const divRef = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const handleChangeHero = () => {
    if (isMobile) return;
    setBgColor(bgColor);
    setTextColor(textColor);
  };

  const handleResetHero = () => {
    setBgColor("#000");
    setTextColor("#fff");
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!divRef.current) return;

    const rect = divRef.current.getBoundingClientRect();

    const width = rect.width;
    const height = rect.height;

    const mouseX = (e.clientX - rect.left) * ROTATION_RANGE;
    const mouseY = (e.clientY - rect.top) * ROTATION_RANGE;

    const rX = (mouseY / height - HALF_ROTATION_RANGE) * -1;
    const rY = mouseX / width - HALF_ROTATION_RANGE;

    x.set(rX);
    y.set(rY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const transform = useMotionTemplate`rotateX(${x}deg) rotateY(${y}deg)`;

  return (
    <div
      onMouseEnter={handleChangeHero}
      onMouseLeave={handleResetHero}
      className="w-full h-full pb-4 md:pt-5 pt-0"
      id={"projects-" + title.split("/")[1].replace(/\s/g, "").toLowerCase()}
    >
      <Link
        href={title.split("/")[1].replace(/\s/g, "").toLowerCase()}
        className="h-full w-full cursor-pointer flex flex-col gap-6"
      >
        <motion.div
          ref={divRef}
          onMouseLeave={handleMouseLeave}
          onMouseMove={handleMouseMove}
          style={{
            transform,
            transformStyle: "preserve-3d",
          }}
          className="relative w-fit h-fit duration-200 shadow-custom"
        >
          {type === "img" ? (
            <Image
              width={1920}
              height={1080}
              style={{
                viewTransitionName: title
                  .split("/")[1]
                  .replace(/\s/g, "")
                  .toLowerCase(),
              }}
              className="object-cover "
              src={image}
              alt=""
            />
          ) : (
            <video
              style={{
                viewTransitionName: title
                  .split("/")[1]
                  .replace(/\s/g, "")
                  .toLowerCase(),
              }}
              src={`/videos/${image}.mp4`}
              className="object-cover"
              autoPlay={!isMobile}
              loop
              muted
            />
          )}
        </motion.div>
        <div className="flex gap-1 items-end">
          <p className="scroll-m-20 text-xl tracking-tight text-primary">
            {title.split("/")[0]}
          </p>
          <p className="scroll-m-20 text-2xl tracking-tight text-primary font-semibold">
            {title.split("/")[1]}
          </p>
        </div>
      </Link>
    </div>
  );
};

export default ProjectCard;
