import ProjectCard from "./projectCard";
import AnimatedText from "./animatedText";
import { Link } from "next-view-transitions";

const ProjectsGrid = () => {
  return (
    <div
      id="select-work"
      className="relative z-50 h-full w-full py-12 flex flex-col gap-2 pb-24 sm:px-12 px-4"
    >
      <div className="flex items-end gap-2 w-full">
        <AnimatedText direction="up">
          <h2 className="scroll-m-20 leading-none tracking-tight lg:text-8xl md:text-7xl text-5xl text-primary uppercase">
            select work
          </h2>
        </AnimatedText>
        <Link
          href="/archive"
          className="scroll-m-20 tracking-wide h-fit text-sm text-primary font-medium sm:w-fit w-full"
        >
          &gt; see archive
        </Link>
      </div>
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
        <div className="w-full h-full col-span-2 row-start-6">
          <Link
            href="/archive"
            className="text-primary scroll-m-20 leading-none tracking-tight lg:text-[6.5em] md:text-[4em] text-[3em] uppercase hover:underline"
          >
            &gt; see archive
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectsGrid;
