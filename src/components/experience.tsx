import { setBackgroundColor } from "@/stores/background"
import { useEffect, useRef, useState } from "react"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import imecImage from "@/assets/images/imec.jpg"
import ucllImage from "@/assets/images/ucll.png"
import Reveal from "./reaveal"

const Experience = () => {
  const targetRef = useRef(null)
  const [active, setActive] = useState<string>("")

  const onChange = (e: string) => {
    setActive(e)
  }

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setBackgroundColor("bg-primary")
          }
        })
      },
      {
        threshold: 0.5,
      },
    )

    if (targetRef.current) {
      observer.observe(targetRef.current)
    }
    return () => {
      observer.disconnect()
    }
  }, [targetRef.current])

  return (
    <div ref={targetRef} id="experience" className="h-[100dvh] w-full">
      <div className="w-full h-full bg-primary">
        <Reveal classList="w-full h-full flex flex-col justify-center items-center gap-5">
          <h2 className="scroll-m-20 sm:text-[7.317vw] text-6xl font-black tracking-tight h-fit text-secondary">
            Experience
          </h2>
          <ol className="border-l border-neutral-300 dark:border-neutral-500 m-5 lg:w-1/2">
            <Accordion type="single" collapsible onValueChange={onChange}>
              <AccordionItem
                value="item-1"
                className={`border-none ${active === "item-1" && "bg-secondary rounded-lg ml-2 p-2"}`}
              >
                <AccordionTrigger
                  className={`w-full ${active === "item-1" ? "text-primary" : "text-secondary"}`}
                >
                  <div className="w-full">
                    <div className="flex-start flex items-center pt-2">
                      <div
                        className={`${active === "item-1" ? "-ml-[21px]" : "-ml-[5px]"} mr-3 h-[9px] w-[9px] rounded-full bg-neutral-300 dark:bg-neutral-500`}
                      ></div>
                      <p className="text-sm text-gray-400">
                        13.03.2023 - 09.06.2023
                      </p>
                    </div>
                    <h2 className="text-start ml-2 scroll-m-20 sm:text-[3.902vw] text-3xl tracking-tight">
                      Imec full stack developer (Intern)
                    </h2>
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  <div className="mb-2 ml-4 mt-2">
                    <p className="scroll-m-20 sm:text-[2.195vw] text-lg tracking-tight text-primary">
                      For these months I worked as a full stack developer at
                      imec on a webapplication. I worked on a project for the
                      ICT-team, helpdeks and other people that needed the
                      webapplication. With the webapplication you could look at
                      data of nodes inside the network, disable switches and
                      automatically create a guest account for the network.
                    </p>
                    <img
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
                className={`border-none ${active === "item-2" && "bg-secondary rounded-lg ml-2 p-2"}`}
              >
                <AccordionTrigger
                  className={`w-full ${active === "item-2" ? "text-primary" : "text-secondary"}`}
                >
                  <div className="w-full">
                    <div className="flex-start flex items-center pt-2">
                      <div
                        className={`${active === "item-2" ? "-ml-[21px]" : "-ml-[5px]"} mr-3 h-[9px] w-[9px] rounded-full bg-neutral-300 dark:bg-neutral-500`}
                      ></div>
                      <p className="text-sm text-gray-400">2020-2023</p>
                    </div>
                    <h2 className="text-start ml-2 scroll-m-20 sm:text-[3.902vw] text-3xl tracking-tight">
                      Applied Computer Science, UCLL
                    </h2>
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  <div className="mb-2 ml-4 mt-2">
                    <div className="flex items-center gap-4 my-2"></div>
                    <p className="scroll-m-20 sm:text-[2.195vw] text-lg tracking-tight text-primary">
                      For three years I studied applied computer science at UCLL
                      and graduated in 2023 with a cum laude.
                    </p>
                    <img
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
        </Reveal>
      </div>
    </div>
  )
}

export default Experience
