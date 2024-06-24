import DialogImage from "@/components/dialogImage";
import NotedImage1 from "@/assets/images/noted/noted2.webp";
import NotedImage2 from "@/assets/images/noted/noted3.webp";
import NotedImage3 from "@/assets/images/noted/noted4.webp";
import NotedImage4 from "@/assets/images/noted/noted5.webp";
import BackNavigation from "@/components/backNavigation";
import { IoIosArrowForward } from "react-icons/io";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Noted - Bryan Van Winnendael",
  description: "Noted - Bryan Van Winnendael",
};

const Page = () => {
  return (
    <div className="w-full h-full bg-secondary sm:p-5 p-2">
      <div className="bg-primary rounded-[24px]">
        <BackNavigation title="Noted" />
        <div className="p-5 pt-5 leading-7 [&:not(:first-child)]:mt-6">
          <DialogImage
            image="noted"
            classList="w-full max-h-96 rounded-lg object-cover"
            transitionName="noted"
            alt="noted"
            type="video"
          />
          <div className="bg-primary flex justify-between items-center rounded-tr-lg py-5 pr-5 mt-[-70px] z-50 relative w-5/6">
            <h1 className="scroll-m-20 text-5xl font-medium tracking-wide lg:text-6xl text-secondary">
              Noted
            </h1>
            <p className="scroll-m-20 text-xl font-medium tracking-tight text-muted-foreground">
              2023
            </p>
          </div>
          <h4 className="scroll-m-20 text-xl font-semibold tracking-tight mt-2">
            Overview
          </h4>
          <p className="leading-7 text-secondary">
            Noted is a combination of notion and obsidian with an inspired style
            by arc browser. It is a note taking app that allows you to write
            notes in block-style just like notion.
          </p>
          <h4 className="scroll-m-20 text-xl font-semibold tracking-tight mt-2">
            Customize
          </h4>
          <p className="leading-7 text-secondary">
            With the customizations, like obsidian, you can fully customize your
            application.
          </p>
          <p className="leading-7 text-secondary">
            Don&apos;t like the default theme? Change it! Don&apos;t like the
            font? Change it!
          </p>
          <h4 className="scroll-m-20 text-xl font-semibold tracking-tight mt-2">
            Built with
          </h4>
          <p className="leading-7 text-secondary">
            Noted is built with electron, react and editor.js.
          </p>
          <h4 className="scroll-m-20 text-xl font-semibold tracking-tight mt-2">
            Features
          </h4>
          <p className="leading-7 text-secondary">
            For a list of all the features, please visit the{" "}
            <a
              className="text-blue-500"
              target="_blank"
              href="https://github.com/BryanVanWinnendael/Noted"
            >
              github page
            </a>{" "}
            or
            <a
              className="text-blue-500"
              target="_blank"
              href="https://write-noted.vercel.app/docs"
            >
              Noted Docs
            </a>
            .
          </p>
          <h4 className="scroll-m-20 text-xl font-semibold tracking-tight mt-2">
            Screenshots
          </h4>
          <div className="grid md:grid-cols-2 grid-cols-1 gap-5 mt-5">
            <DialogImage
              image={NotedImage1.src}
              classList="w-full rounded-md object-cover shadow-sm"
              alt="noted2"
              type="img"
            />
            <DialogImage
              image={NotedImage2.src}
              classList="w-full rounded-md object-cover shadow-sm"
              alt="noted3"
              type="img"
            />
            <DialogImage
              image={NotedImage3.src}
              classList="w-full rounded-md object-cover shadow-sm"
              alt="noted4"
              type="img"
            />
            <DialogImage
              image={NotedImage4.src}
              classList="w-full rounded-md object-cover shadow-sm"
              alt="noted5"
              type="img"
            />
          </div>

          <div className="flex gap-5 w-fit rounded-lg mt-5">
            <div>
              <p className="leading-7 text-muted-foreground">Download</p>
              <a
                target="_blank"
                href="https://github.com/BryanVanWinnendael/Noted/releases/latest"
                className="w-full flex items-center text-blue-500 cursor-pointer"
              >
                Download <IoIosArrowForward />
              </a>
            </div>
            <div>
              <p className="leading-7 text-muted-foreground">Code</p>
              <a
                target="_blank"
                className="w-full flex items-center text-blue-500 cursor-pointer"
                href="https://github.com/BryanVanWinnendael/Noted"
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
