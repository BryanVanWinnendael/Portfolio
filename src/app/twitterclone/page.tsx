import DialogImage from "@/components/dialogImage";
import TwitterImage from "@/assets/images/twitter/twitter.webp";
import TwitterImage1 from "@/assets/images/twitter/twitter1.webp";
import TwitterImage2 from "@/assets/images/twitter/twitter2.webp";
import TwitterImage3 from "@/assets/images/twitter/twitter3.webp";
import TwitterImage4 from "@/assets/images/twitter/twitter4.webp";
import BackNavigation from "@/components/backNavigation";
import { IoIosArrowForward } from "react-icons/io";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "TwitterClone - Bryan Van Winnendael",
  description: "TwitterClone - Bryan Van Winnendael",
};

const Page = () => {
  return (
    <div className="w-full h-full bg-secondary sm:p-5 p-2">
      <div className="bg-primary rounded-[24px]">
        <BackNavigation title="Twitter clone" />
        <div className="p-5 pt-5 leading-7 [&:not(:first-child)]:mt-6">
          <DialogImage
            image={TwitterImage.src}
            classList="w-full max-h-96 rounded-lg object-cover"
            transitionName="twitterclone"
            alt="Twitter Clone"
            type="img"
          />
          <div className="bg-primary flex justify-between items-center rounded-tr-lg py-5 pr-5 mt-[-70px] z-50 relative w-5/6">
            <h1 className="scroll-m-20 text-5xl font-medium tracking-wide lg:text-6xl text-secondary">
              Twitter clone
            </h1>
            <p className="scroll-m-20 text-xl font-medium tracking-tight text-muted-foreground">
              2022
            </p>
          </div>
          <h4 className="scroll-m-20 text-xl font-semibold tracking-tight mt-2">
            Overview
          </h4>
          <p className="leading-7 text-secondary">
            Twitter Clone, like twitter, is a social media platform. Make a
            post, comment, like a post and follow other users. Or create an
            api-key and use the api.
          </p>
          <h4 className="scroll-m-20 text-xl font-semibold tracking-tight mt-2">
            Problem
          </h4>
          <p className="leading-7text-secondary">
            For a school project we had to create a web application with
            phoenix. I wanted a bit more of a challenge so I decided to create a
            clone of twitter.
          </p>
          <h4 className="scroll-m-20 text-xl font-semibold tracking-tight mt-2">
            Built with
          </h4>
          <p className="leading-7 text-secondary">
            Twitter clone is built with phoenix, mysql, tailwindcss, docker and
            is self hosted on a linux server.
          </p>

          <h4 className="scroll-m-20 text-xl font-semibold tracking-tight mt-2">
            Screenshots
          </h4>
          <div className="grid md:grid-cols-2 grid-cols-1 gap-5 mt-5">
            <DialogImage
              image={TwitterImage1.src}
              classList="w-full rounded-md object-cover shadow-sm"
              alt="twitter2"
              type="img"
            />
            <DialogImage
              image={TwitterImage2.src}
              classList="w-full rounded-md object-cover shadow-sm"
              alt="twitter3"
              type="img"
            />
            <DialogImage
              image={TwitterImage3.src}
              classList="w-full rounded-md object-cover shadow-sm"
              alt="twitter4"
              type="img"
            />
            <DialogImage
              image={TwitterImage4.src}
              classList="w-full rounded-md object-cover shadow-sm"
              alt="twitter5"
              type="img"
            />
          </div>

          <div className="flex gap-5 w-fit mt-5">
            <div>
              <p className="leading-7 text-muted-foreground">Site</p>
              <a
                target="_blank"
                href="http://141.145.200.72:4000"
                className="w-full flex items-center text-blue-500 cursor-pointer"
              >
                Site <IoIosArrowForward />
              </a>
            </div>
            <div>
              <p className="leading-7 text-muted-foreground">Code</p>
              <a
                target="_blank"
                href="https://github.com/BryanVanWinnendael/TwitterClone/tree/main"
                className="w-full flex items-center text-blue-500 cursor-pointer"
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
