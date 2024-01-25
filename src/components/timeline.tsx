import { setBackgroundColor } from "@/stores/background"
import { useEffect, useRef } from "react"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import imecImage from "@/assets/images/imec.jpg"
import ucllImage from "@/assets/images/ucll.png"
import Reveal from "./reaveal"

const Timeline = () => {
  const targetRef = useRef(null)

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
    <Reveal>
      <div
        ref={targetRef}
        id="timeline"
        className="h-[100dvh] w-full flex flex-col justify-center items-center"
      >
        <ol className="border-l border-neutral-300 dark:border-neutral-500 m-5 lg:w-1/2">
          <Accordion type="single" collapsible>
            <AccordionItem value="item-1" className="border-none">
              <AccordionTrigger className="w-full text-secondary">
                <div className="w-full">
                  <div className="flex-start flex items-center pt-2">
                    <div className="-ml-[5px] mr-3 h-[9px] w-[9px] rounded-full bg-neutral-300 dark:bg-neutral-500"></div>
                    <p className="text-sm text-gray-400">
                      13.03.2023 - 09.06.2023
                    </p>
                  </div>
                  <h2 className="ml-2 scroll-m-20 text-start lg:text-5xl md:text-4xl sm:text-3xl text-2xl font-extrabold tracking-tight">
                    Imec full stack developer (Intern)
                  </h2>
                </div>
              </AccordionTrigger>
              <AccordionContent>
                <div className="mb-6 ml-4 mt-2">
                  <p className="scroll-m-20 lg:text-xl md:text-lg text-lg font-semibold tracking-tight text-muted-foreground">
                    For these months I worked as a full stack developer at imec
                    on a webapplication. I worked on a project for the ICT-team,
                    helpdeks and other people that needed the webapplication.
                    With the webapplication you could look at data of nodes
                    inside the network, disable switches and automatically
                    create a guest account for the network.
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
            <AccordionItem value="item-2" className="border-none">
              <AccordionTrigger className="w-full text-secondary">
                <div className="w-full">
                  <div className="flex-start flex items-center pt-2">
                    <div className="-ml-[5px] mr-3 h-[9px] w-[9px] rounded-full bg-neutral-300 dark:bg-neutral-500"></div>
                    <p className="text-sm text-gray-400">2020-2023</p>
                  </div>
                  <h2 className="text-start ml-2 scroll-m-20 lg:text-5xl md:text-4xl sm:text-3xl text-2xl font-extrabold tracking-tight">
                    Applied Computer Science, UCLL
                  </h2>
                </div>
              </AccordionTrigger>
              <AccordionContent>
                <div className="mb-6 ml-4 mt-2">
                  <div className="flex items-center gap-4 my-2"></div>
                  <p className="scroll-m-20 lg:text-xl md:text-lg text-lg font-semibold tracking-tight text-muted-foreground">
                    For three years I studied applied computer science at UCLL
                    and graduated in 2023 with a cum laude.
                  </p>
                  <img
                    onClick={() => window.open("https://www.imec.be")}
                    src={ucllImage.src}
                    alt="imec image"
                    className="rounded-md cursor-pointer w-auto lg:h-12 h-10 mt-5"
                  />
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </ol>
      </div>
    </Reveal>
  )
}

export default Timeline
