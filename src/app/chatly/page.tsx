import DialogImage from "@/components/dialogImage";
import ChatlyImage from "@/assets/images/chatly/chatly2.webp";
import BackNavigation from "@/components/backNavigation";
import { IoIosArrowForward } from "react-icons/io";
import { Metadata } from "next";
import Link from "next/link";
import { FaExternalLinkAlt } from "react-icons/fa";

export const metadata: Metadata = {
  title: "Chatly - Bryan Van Winnendael",
  description: "Chatly - Bryan Van Winnendael",
};

const Page = () => {
  return (
    <div className="w-full h-full bg-secondary sm:p-5 p-2">
      <div className="bg-primary rounded-[24px]">
        <BackNavigation title="Chatly" />
        <div className="p-5 pt-5 leading-7 [&:not(:first-child)]:mt-6">
          <DialogImage
            image={ChatlyImage.src}
            classList="w-full max-h-96 rounded-lg object-cover"
            transitionName="chatly"
            alt="chatly"
            type="img"
          />
          <div className="bg-primary flex justify-between items-center rounded-tr-lg py-5 pr-5 mt-[-70px] z-50 relative w-5/6">
            <h1 className="scroll-m-20 text-5xl font-medium tracking-wide lg:text-6xl text-secondary">
              Chatly
            </h1>
            <p className="scroll-m-20 text-xl font-medium tracking-tight text-muted-foreground flex gap-1 items-start">
              2023
              <Link
                target="_blank"
                href="https://chatly-bryanvanwinnendael.vercel.app/"
                className="w-full flex items-center cursor-pointer"
              >
                <FaExternalLinkAlt className="w-4 h-4" />
              </Link>
            </p>
          </div>
          <h4 className="scroll-m-20 text-xl font-semibold tracking-tight mt-2">
            Overview
          </h4>
          <p className="leading-7 text-secondary">
            Chatly is an online website that allows you to chat with people from
            around the world.
          </p>
          <h4 className="scroll-m-20 text-xl font-semibold tracking-tight mt-2">
            Use
          </h4>
          <p className="leading-7 text-secondary">
            Go to the website and start chatting! No need to create an account.
          </p>
          <h4 className="scroll-m-20 text-xl font-semibold tracking-tight mt-2">
            Built with
          </h4>
          <p className="leading-7 text-secondary">
            Chatly is built with nextjs, agora, supabase, prisma and tailwind.
          </p>

          <h4 className="scroll-m-20 text-xl font-semibold tracking-tight mt-2">
            Screenshots
          </h4>
          <div className="grid md:grid-cols-2 grid-cols-1 gap-5 mt-5">
            <DialogImage
              image={ChatlyImage.src}
              classList="w-full rounded-md object-cover shadow-sm"
              alt="chatly2"
              type="img"
            />
          </div>

          <div className="flex gap-5 w-fit mt-5">
            <div>
              <p className="leading-7 text-muted-foreground">Site</p>
              <Link
                target="_blank"
                href="https://chatly-bryanvanwinnendael.vercel.app/"
                className="w-full flex items-center text-blue-500 cursor-pointer"
              >
                Site <IoIosArrowForward />
              </Link>
            </div>
            <div>
              <p className="leading-7 text-muted-foreground">Code</p>
              <Link
                target="_blank"
                className="w-full flex items-center text-blue-500 cursor-pointer"
                href="https://github.com/BryanVanWinnendael/Chatly"
              >
                View code <IoIosArrowForward />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
