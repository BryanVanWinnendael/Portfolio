import DialogImage from "@/components/dialogImage";
import WrappedNowImage from "@/assets/images/wrapped/wrapped.webp";
import WrappedNowImage2 from "@/assets/images/wrapped/wrapped2.webp";
import WrappedNowImage3 from "@/assets/images/wrapped/wrapped3.webp";
import WrappedNowImage4 from "@/assets/images/wrapped/wrapped4.webp";
import BackNavigation from "@/components/backNavigation";
import { IoIosArrowForward } from "react-icons/io";
import { Metadata } from "next";
import Link from "next/link";
import { FaExternalLinkAlt } from "react-icons/fa";

export const metadata: Metadata = {
  title: "Wrapped Now - Bryan Van Winnendael",
  description: "Wrapped Now - Bryan Van Winnendael",
};

const Page = () => {
  return (
    <div className="w-full h-full bg-secondary sm:p-5 p-2">
      <div className="bg-primary rounded-[24px]">
        <BackNavigation title="Wrapped Now" />
        <div className="p-5 pt-5 leading-7 [&:not(:first-child)]:mt-6">
          <DialogImage
            image={WrappedNowImage.src}
            classList="w-full max-h-96 rounded-lg object-cover"
            transitionName="wrappednow"
            alt="Wrapped Now"
            type="img"
          />
          <div className="bg-primary flex justify-between items-center rounded-tr-lg py-5 pr-5 mt-[-70px] z-50 relative w-5/6">
            <h1 className="scroll-m-20 text-5xl font-medium tracking-wide lg:text-6xl text-secondary">
              Wrapped Now
            </h1>
            <p className="scroll-m-20 text-xl font-medium tracking-tight text-muted-foreground flex gap-1 items-start">
              2023
              <Link
                target="_blank"
                href="https://github.com/BryanVanWinnendael/Wrapped-Now"
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
            Wrapped now is spotify wrapped that you can use any time of the
            year. With wrapped now you can see your top genres, songs and
            artists of the last 4 weeks, 6 months and all time.
          </p>
          <h4 className="scroll-m-20 text-xl font-semibold tracking-tight mt-2">
            Problem
          </h4>
          <p className="leading-7text-secondary">
            With spotify wrapped you can only see your top songs, artists and
            genres of the last year. Wrapped Now allows you to see your top
            songs, artists and genres of the last 4 weeks, 6 months and all
            time.
          </p>
          <h4 className="scroll-m-20 text-xl font-semibold tracking-tight mt-2">
            Built with
          </h4>
          <p className="leading-7 text-secondary">
            Wrapped Now is built with nextjs, spotify api and fastapi.
          </p>

          <h4 className="scroll-m-20 text-xl font-semibold tracking-tight mt-2">
            Screenshots
          </h4>
          <div className="grid md:grid-cols-2 grid-cols-1 gap-5 mt-5">
            <DialogImage
              image={WrappedNowImage2.src}
              classList="w-full rounded-md object-cover shadow-sm"
              alt="twitter2"
              type="img"
            />
            <DialogImage
              image={WrappedNowImage3.src}
              classList="w-full rounded-md object-cover shadow-sm"
              alt="twitter3"
              type="img"
            />
            <DialogImage
              image={WrappedNowImage4.src}
              classList="w-full rounded-md object-cover shadow-sm"
              alt="twitter4"
              type="img"
            />
          </div>

          <div className="flex gap-5 w-fit mt-5">
            <div>
              <p className="leading-7 text-muted-foreground">Code</p>
              <Link
                target="_blank"
                href="https://github.com/BryanVanWinnendael/Wrapped-Now"
                className="w-full flex items-center text-blue-500 cursor-pointer"
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
