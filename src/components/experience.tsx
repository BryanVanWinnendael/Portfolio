import { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import imecImage from "@/assets/images/imec.webp";
import ucllImage from "@/assets/images/ucll.webp";
import AnimatedText from "./animatedText";
import Image from "next/image";

const Experience = () => {
  const [active, setActive] = useState<string>("item-1");

  const onChange = (e: string) => {
    setActive(e);
  };

  return (
    <div
      id="experience"
      className="w-full h-fit min-h-screen flex flex-col gap-5 bg-primary p-7 rounded-b-xl"
    >
      <AnimatedText direction="up">
        <h2 className="scroll-m-20 leading-none tracking-tight lg:text-8xl md:text-7xl text-5xl text-secondary uppercase">
          experience
        </h2>
      </AnimatedText>
      <ol className="border-l border-neutral-300 dark:border-neutral-500 m-5 lg:w-1/2">
        <Accordion
          defaultValue="item-1"
          type="single"
          collapsible
          onValueChange={onChange}
        >
          <AccordionItem
            value="item-1"
            className={`border-none ${active === "item-1" && "rounded-lg ml-2 p-2"}`}
          >
            <AccordionTrigger>
              <div className="w-full">
                <div className="flex-start flex items-center pt-2">
                  <div
                    className={`${active === "item-1" ? "-ml-[21px]" : "-ml-[5px]"} mr-3 h-[9px] w-[9px] rounded-full bg-neutral-300 dark:bg-neutral-500`}
                  ></div>
                  <p className="text-sm text-gray-400">
                    13.03.2023 - 09.06.2023
                  </p>
                </div>
                <h2 className="text-start ml-2 scroll-m-20 sm:text-3xl text-2xl tracking-wide leading-none font-medium">
                  IMEC, intern full stack developer
                </h2>
              </div>
            </AccordionTrigger>
            <AccordionContent>
              <div className="mb-2 ml-4 mt-2">
                <div className="scroll-m-20 sm:text-xl text-lg tracking-tight leading-snug">
                  <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
                    <li className="">
                      Developed the back-end infrastructure with FastAPI Python.
                    </li>
                    <li>
                      Architected and implemented the front-end interface using
                      Next.js.
                    </li>
                    <li>
                      Collaborated closely with team members to gather
                      requirements, refine design specifications, and iterate on
                      features throughout the development lifecycle.
                    </li>
                  </ul>
                </div>
                <Image
                  width={1920}
                  height={1080}
                  onClick={() => window.open("https://www.imec.be")}
                  src={imecImage.src}
                  alt="imec image"
                  className="rounded-md cursor-pointer w-auto lg:h-12 h-10 mt-5"
                />
              </div>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem
            value="item-2"
            className={`border-none ${active === "item-1" && "rounded-lg ml-2 p-2"}`}
          >
            <AccordionTrigger>
              <div className="w-full">
                <div className="flex-start flex items-center pt-2">
                  <div
                    className={`${active === "item-1" ? "-ml-[21px]" : "-ml-[5px]"} mr-3 h-[9px] w-[9px] rounded-full bg-neutral-300 dark:bg-neutral-500`}
                  ></div>
                  <p className="text-sm text-gray-400">2020-2023</p>
                </div>
                <h2 className="text-start ml-2 scroll-m-20 sm:text-3xl text-2xl tracking-wide leading-none font-medium">
                  Applied Computer Science, UCLL
                </h2>
              </div>
            </AccordionTrigger>
            <AccordionContent>
              <div className="mb-2 ml-4 mt-2">
                <div className="flex items-center gap-4 my-2"></div>
                <p className="scroll-m-20 sm:text-xl text-lg tracking-tight leading-snug">
                  For three years I studied applied computer science at UCLL and
                  graduated in 2023 with a cum laude.
                </p>
                <Image
                  width={1920}
                  height={1080}
                  onClick={() => window.open("https://www.ucll.be/nl")}
                  src={ucllImage.src}
                  alt="ucll image"
                  className="rounded-md cursor-pointer w-auto lg:h-12 h-10 mt-5"
                />
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </ol>
    </div>
  );
};

export default Experience;
