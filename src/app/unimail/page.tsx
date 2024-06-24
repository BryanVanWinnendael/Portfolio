import DialogImage from "@/components/dialogImage";
import UnimailImage1 from "@/assets/images/unimail/unimail1.webp";
import UnimailImage2 from "@/assets/images/unimail/unimail2.webp";
import UnimailImage3 from "@/assets/images/unimail/unimail3.webp";
import UnimailImage4 from "@/assets/images/unimail/unimail4.webp";
import UnimailImage5 from "@/assets/images/unimail/unimail5.webp";
import UnimailImage6 from "@/assets/images/unimail/unimail6.webp";
import BackNavigation from "@/components/backNavigation";
import { IoIosArrowForward } from "react-icons/io";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "UniMail - Bryan Van Winnendael",
  description: "UniMail - Bryan Van Winnendael",
};

const Page = () => {
  return (
    <div className="w-full h-full bg-secondary sm:p-5 p-2">
      <div className="bg-primary rounded-[24px]">
        <BackNavigation title="UniMail" />
        <div className="p-5 pt-5 leading-7 [&:not(:first-child)]:mt-6">
          <DialogImage
            image="unimail"
            classList="w-full max-h-96 rounded-lg object-cover"
            transitionName="unimail"
            alt="UniMail video"
            type="video"
          />
          <div className="bg-primary flex justify-between items-center rounded-tr-lg py-5 pr-5 mt-[-70px] z-50 relative w-5/6">
            <h1 className="scroll-m-20 text-5xl font-medium tracking-wide lg:text-6xl text-secondary">
              UniMail
            </h1>
            <p className="scroll-m-20 text-xl font-medium tracking-tight text-muted-foreground">
              2024
            </p>
          </div>
          <h4 className="scroll-m-20 text-xl font-semibold tracking-tight mt-2">
            Overview
          </h4>
          <p className="leading-7 text-secondary">
            UniMail is a web application that consolidates multiple email
            accounts into a single interface, allowing users to log in and
            manage all their emails in one place. The app offers features such
            as full-screen email viewing, theme customization, and adjustable
            email views. Additionally, UniMail integrates Groq AI to provide
            email summarization, enhancing the user experience by quickly
            condensing email content for easier reading.
          </p>
          <h4 className="scroll-m-20 text-xl font-semibold tracking-tight mt-2">
            Built with
          </h4>
          <p className="leading-7 text-secondary">
            The client is built with Nextjs, Redux and Tailwind CSS. The server
            is built with Fastapi, Docker and is self hosted on a linux server.
          </p>

          <h4 className="scroll-m-20 text-xl font-semibold tracking-tight mt-2">
            Screenshots
          </h4>
          <div className="grid md:grid-cols-2 grid-cols-1 gap-5 mt-5">
            <DialogImage
              image={UnimailImage1.src}
              classList="w-full rounded-md object-cover shadow-sm"
              alt="twitter2"
              type="img"
            />
            <DialogImage
              image={UnimailImage2.src}
              classList="w-full rounded-md object-cover shadow-sm"
              alt="twitter3"
              type="img"
            />
            <DialogImage
              image={UnimailImage3.src}
              classList="w-full rounded-md object-cover shadow-sm"
              alt="twitter4"
              type="img"
            />
            <DialogImage
              image={UnimailImage4.src}
              classList="w-full rounded-md object-cover shadow-sm"
              alt="twitter5"
              type="img"
            />
            <DialogImage
              image={UnimailImage5.src}
              classList="w-full rounded-md object-cover shadow-sm"
              alt="twitter5"
              type="img"
            />
            <DialogImage
              image={UnimailImage6.src}
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
