import DialogImage from "@/components/dialogImage";
import ZapImage2 from "@/assets/images/zap/zap2.webp";
import ZapImage3 from "@/assets/images/zap/zap3.webp";
import ZapImage4 from "@/assets/images/zap/zap4.webp";
import ZapImage5 from "@/assets/images/zap/zap5.webp";
import BackNavigation from "@/components/backNavigation";
import { IoIosArrowForward } from "react-icons/io";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Zap - Bryan Van Winnendael",
  description: "Zap - Bryan Van Winnendael",
};

const Page = () => {
  return (
    <div className="w-full h-full bg-secondary sm:p-5 p-2">
      <div className="bg-primary rounded-[24px]">
        <BackNavigation title="Zap" />
        <div className="p-5 pt-5 leading-7 [&:not(:first-child)]:mt-6">
          <DialogImage
            image="zap"
            classList="w-full max-h-96 rounded-lg object-cover"
            transitionName="zap"
            alt="zap"
            type="video"
          />
          <div className="bg-primary flex justify-between items-center rounded-tr-lg py-5 pr-5 mt-[-70px] z-50 relative w-5/6">
            <h1 className="scroll-m-20 text-5xl font-medium tracking-wide lg:text-6xl text-secondary">
              Zap
            </h1>
            <p className="scroll-m-20 text-xl font-medium tracking-tight text-muted-foreground">
              2024
            </p>
          </div>
          <h4 className="scroll-m-20 text-xl font-semibold tracking-tight mt-2">
            Overview
          </h4>
          <p className="leading-7 text-secondary">
            With zap you can quickly search for a given file or folder.
          </p>
          <h4 className="scroll-m-20 text-xl font-semibold tracking-tight mt-2">
            Problem
          </h4>
          <p className="leading-7 text-secondary">
            I wanted to learn rust and build a desktop application with tauri.
          </p>
          <h4 className="scroll-m-20 text-xl font-semibold tracking-tight mt-2">
            Built with
          </h4>
          <p className="leading-7 text-secondary">Rust, Tauri and react.</p>
          <h4 className="scroll-m-20 text-xl font-semibold tracking-tight mt-2">
            Features
          </h4>
          <p className="leading-7 text-secondary">
            For a list of all the features, please visit the{" "}
            <a
              className="text-blue-500"
              target="_blank"
              href="https://github.com/BryanVanWinnendael/Zap"
            >
              github page
            </a>
            .
          </p>
          <h4 className="scroll-m-20 text-xl font-semibold tracking-tight mt-2">
            Screenshots
          </h4>
          <div className="grid md:grid-cols-2 grid-cols-1 gap-5 mt-5">
            <DialogImage
              image={ZapImage2.src}
              classList="w-full rounded-md object-cover shadow-sm"
              alt="chatly2"
              type="img"
            />
            <DialogImage
              image={ZapImage3.src}
              classList="w-full rounded-md object-cover shadow-sm"
              alt="chatly3"
              type="img"
            />
            <DialogImage
              image={ZapImage4.src}
              classList="w-full rounded-md object-cover shadow-sm"
              alt="chatly4"
              type="img"
            />
            <DialogImage
              image={ZapImage5.src}
              classList="w-full rounded-md object-cover shadow-sm"
              alt="chatly5"
              type="img"
            />
          </div>

          <div className="flex gap-5 w-fit rounded-lg mt-5">
            <div>
              <p className="leading-7 text-muted-foreground">Download</p>
              <a
                target="_blank"
                href="https://github.com/BryanVanWinnendael/Zap/releases/latest"
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
                href="https://github.com/BryanVanWinnendael/Zap"
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
