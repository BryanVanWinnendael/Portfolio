"use client";
import { useStates } from "@/context/stateContext";
import useScreen from "@/hooks/useScreen";
import Image from "next/image";
import { Link } from "next-view-transitions";

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

  const handleChangeHero = () => {
    if (isMobile) return;
    setBgColor(bgColor);
    setTextColor(textColor);
  };

  const handleResetHero = () => {
    setBgColor("#000000");
    setTextColor("#ffffff");
  };

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
        <div className="w-fit h-fit shadow-sm hover:shadow-xl duration-200 ">
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
              className="object-cover shadow-custom"
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
              className="object-cover shadow-custom"
              autoPlay={!isMobile}
              loop
              muted
            />
          )}
        </div>
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
