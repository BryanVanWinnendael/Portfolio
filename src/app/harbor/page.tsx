import DialogImage from "@/components/dialogImage";
import HarborImage1 from "@/assets/images/harbor/harbor1.webp";
import HarborImage2 from "@/assets/images/harbor/harbor2.webp";
import HarborImage3 from "@/assets/images/harbor/harbor3.webp";
import HarborImage4 from "@/assets/images/harbor/harbor4.webp";
import BackNavigation from "@/components/backNavigation";
import { IoIosArrowForward } from "react-icons/io";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Harbor - Bryan Van Winnendael",
  description: "Harbor - Bryan Van Winnendael",
};

const Page = () => {
  return (
    <div className="w-full h-full bg-secondary sm:p-5 p-2">
      <div className="bg-primary rounded-[24px]">
        <BackNavigation title="Harbor" />
        <div className="p-5 pt-5 leading-7 [&:not(:first-child)]:mt-6">
          <DialogImage
            image="harbor"
            classList="w-full max-h-96 rounded-lg object-cover"
            transitionName="harbor"
            alt="harbor"
            type="video"
          />
          <div className="bg-primary flex justify-between items-center rounded-tr-lg py-5 pr-5 mt-[-70px] z-50 relative w-5/6">
            <h1 className="scroll-m-20 text-5xl font-medium tracking-wide lg:text-6xl text-secondary">
              Harbor
            </h1>
            <p className="scroll-m-20 text-xl font-medium tracking-tight text-muted-foreground">
              2024
            </p>
          </div>
          <h4 className="scroll-m-20 text-xl font-semibold tracking-tight mt-2">
            Overview
          </h4>
          <p className="leading-7 text-secondary">
            Harbor is a web application designed for Docker container management
            on your server. It simplifies container operations like creating,
            starting, stopping, and deleting through a user-friendly interface.
            Harbor also allows executing commands within containers,
            streamlining application management. It facilitates Docker image
            handling, supports MySQL database creation, offers analytics for
            resource monitoring, and includes cleanup tools for efficient Docker
            environment maintenance. Overall, Harbor enhances control and
            efficiency in managing containerized applications on your server
            infrastructure.
          </p>
          <h4 className="scroll-m-20 text-xl font-semibold tracking-tight mt-2">
            Use
          </h4>
          <p className="leading-7 text-secondary flex gap-1">
            Clone the{" "}
            <a
              target="_blank"
              className="text-blue-500"
              href="https://github.com/BryanVanWinnendael/Harbor"
            >
              repository
            </a>{" "}
            and follow the instructions in the README to run the application.
          </p>
          <h4 className="scroll-m-20 text-xl font-semibold tracking-tight mt-2">
            Built with
          </h4>
          <p className="leading-7 text-secondary">
            Harbor is built with go, air, SQLite, tailwindcss and htmx.
          </p>
          <h4 className="scroll-m-20 text-xl font-semibold tracking-tight mt-2">
            Screenshots
          </h4>
          <div className="grid md:grid-cols-2 grid-cols-1 gap-5 mt-5">
            <DialogImage
              image={HarborImage1.src}
              classList="w-full rounded-md object-cover shadow-sm"
              alt="harbor1"
              type="img"
            />
            <DialogImage
              image={HarborImage2.src}
              classList="w-full rounded-md object-cover shadow-sm"
              alt="harbor2"
              type="img"
            />
            <DialogImage
              image={HarborImage3.src}
              classList="w-full rounded-md object-cover shadow-sm"
              alt="harbor3"
              type="img"
            />
            <DialogImage
              image={HarborImage4.src}
              classList="w-full rounded-md object-cover shadow-sm"
              alt="harbor4"
              type="img"
            />
          </div>

          <div className="flex gap-5 w-fit mt-5">
            <div>
              <p className="leading-7 text-muted-foreground">Code</p>
              <a
                target="_blank"
                className="w-full flex items-center text-blue-500 cursor-pointer"
                href="https://github.com/BryanVanWinnendael/Harbor"
              >
                View code <IoIosArrowForward />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
