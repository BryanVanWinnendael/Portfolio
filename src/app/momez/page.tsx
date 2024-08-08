import DialogImage from "@/components/dialogImage";
import MomezImage from "@/assets/images/momez/momez.webp";
import MomezImage2 from "@/assets/images/momez/momez2.webp";
import MomezImage3 from "@/assets/images/momez/momez3.webp";
import MomezImage4 from "@/assets/images/momez/momez4.webp";
import MomezImage5 from "@/assets/images/momez/momez5.webp";
import MomezImage6 from "@/assets/images/momez/momez6.webp";
import MomezImage7 from "@/assets/images/momez/momez7.webp";
import BackNavigation from "@/components/backNavigation";
import { IoIosArrowForward } from "react-icons/io";
import { Metadata } from "next";
import Link from "next/link";
import { FaExternalLinkAlt } from "react-icons/fa";

export const metadata: Metadata = {
  title: "Momez - Bryan Van Winnendael",
  description: "Momez - Bryan Van Winnendael",
};

const Page = () => {
  return (
    <div className="w-full h-full bg-secondary sm:p-5 p-2">
      <div className="bg-primary rounded-[24px]">
        <BackNavigation title="Momez" />
        <div className="p-5 pt-5 leading-7 [&:not(:first-child)]:mt-6">
          <DialogImage
            image={MomezImage.src}
            classList="w-full max-h-96 rounded-lg object-cover"
            transitionName="momez"
            alt="momez"
            type="img"
          />
          <div className="bg-primary flex justify-between items-center rounded-tr-lg py-5 pr-5 mt-[-70px] z-50 relative w-5/6">
            <h1 className="scroll-m-20 text-5xl font-medium tracking-wide lg:text-6xl text-secondary">
              Momez
            </h1>
            <p className="scroll-m-20 text-xl font-medium tracking-tight text-muted-foreground flex gap-1 items-start">
              2024
              <Link
                target="_blank"
                href="http://141.145.200.72:8080"
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
            With Momez you can share your favorite moments in a form of a
            picture with the world.
          </p>
          <h4 className="scroll-m-20 text-xl font-semibold tracking-tight mt-2">
            Problem
          </h4>
          <p className="leading-7 text-secondary">
            I wanted to learn go and htmx so I decided to make a social media
            platform where you can share your favorite moments with the world.
          </p>
          <h4 className="scroll-m-20 text-xl font-semibold tracking-tight mt-2">
            Built with
          </h4>
          <p className="leading-7 text-secondary">
            Momez is built with go, htmx, firebase, SQLite and hosted on an
            oracle cloud server.
          </p>
          <h4 className="scroll-m-20 text-xl font-semibold tracking-tight mt-2">
            Features
          </h4>
          <p className="leading-7 text-secondary">
            For a list of all the features, please visit the{" "}
            <Link
              className="text-blue-500"
              target="_blank"
              href="https://github.com/BryanVanWinnendael/Momez"
            >
              github page
            </Link>
            .
          </p>

          <h4 className="scroll-m-20 text-xl font-semibold tracking-tight mt-2">
            Screenshots
          </h4>
          <div className="grid md:grid-cols-2 grid-cols-1 gap-5 mt-5">
            <DialogImage
              image={MomezImage2.src}
              classList="w-full rounded-md object-cover shadow-sm"
              alt="momez2"
              type="img"
            />
            <DialogImage
              image={MomezImage3.src}
              classList="w-full rounded-md object-cover shadow-sm"
              alt="momez3"
              type="img"
            />
            <DialogImage
              image={MomezImage4.src}
              classList="w-full rounded-md object-cover shadow-sm"
              alt="momez4"
              type="img"
            />
            <DialogImage
              image={MomezImage5.src}
              classList="w-full rounded-md object-cover shadow-sm"
              alt="momez5"
              type="img"
            />
            <DialogImage
              image={MomezImage6.src}
              classList="w-full rounded-md object-cover shadow-sm"
              alt="momez6"
              type="img"
            />
            <DialogImage
              image={MomezImage7.src}
              classList="w-full rounded-md object-cover shadow-sm"
              alt="momez7"
              type="img"
            />
            <div className="flex gap-5 w-fit mt-5">
              <div>
                <p className="leading-7 text-muted-foreground">Site</p>
                <Link
                  target="_blank"
                  href="http://141.145.200.72:8080"
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
                  href="https://github.com/BryanVanWinnendael/Momez"
                >
                  View code <IoIosArrowForward />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
