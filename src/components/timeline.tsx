import { $background_color, setBackgroundColor } from '@/stores/background';
import React, { useEffect, useRef, useState } from 'react'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { IoIosArrowDown } from "react-icons/io";

const Timeline = () => {
  const targetRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setBackgroundColor("bg-primary")
          }
        });
      },
      {
        threshold: 0.5,
      }
    );

    if (targetRef.current) {
      observer.observe(targetRef.current);
    }
    return () => {
      observer.disconnect();
    }
  }, [targetRef.current])

  return (
    <div ref={targetRef} id="timeline" className='h-[100dvh] flex justify-center items-center'>
      <article className=" sm:w-1/2">
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl text-secondary">Timeline</h1>
        <ol className="border-l border-neutral-300 dark:border-neutral-500">
          <Accordion type="single" collapsible>
            <AccordionItem value="item-1" className='border-none'>
              <AccordionTrigger className='w-full text-secondary'>
                <div className='w-full'>
                  <div className="flex-start flex items-center pt-2">
                    <div className="-ml-[5px] mr-3 h-[9px] w-[9px] rounded-full bg-neutral-300 dark:bg-neutral-500"></div>
                    <p className="text-sm text-gray-400">
                      13.03.2023 - 09.06.2023
                    </p>
                  </div>
                  <h2 className="scroll-m-20 pb-2 text-3xl font-semibold tracking-tight first:mt-0 ml-5 w-fit">
                    Full stack developer (internship imec Leuven)
                  </h2>
                </div>
              </AccordionTrigger>
              <AccordionContent>
                <div className="mb-6 ml-4 mt-2">
                  <div className="flex items-center gap-4 my-2">
                    {/* <Image
                  onClick={() => window.open("https://www.imec.be")}
                  src={imecImage}
                  alt="project image"
                  className="rounded-md cursor-pointer w-auto h-12"
                /> */}
                  </div>
                  <p className="scroll-m-20 text-xl font-semibold tracking-tight text-muted-foreground">
                    For these months I worked as a full stack developer at imec
                    on a webapplication. I worked on a project for the ICT-team,
                    helpdeks and other people that needed the webapplication.
                    With the webapplication you could look at data of nodes
                    inside the network, disable switches and automatically
                    create a guest account for the network.
                  </p>
                </div>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2" className='border-none'>
              <AccordionTrigger className='w-full text-secondary'>
                <div className='w-full'>
                  <div className="flex-start flex items-center pt-2">
                    <div className="-ml-[5px] mr-3 h-[9px] w-[9px] rounded-full bg-neutral-300 dark:bg-neutral-500"></div>
                    <p className="text-sm text-gray-400">
                      2020-2023
                    </p>
                  </div>
                  <h4 className="scroll-m-20 pb-2 text-3xl font-semibold tracking-tight first:mt-0 ml-5 w-fit">
                    Applied Computer Science, UCLL
                  </h4>
                </div>
              </AccordionTrigger>
              <AccordionContent>
                <div className="mb-6 ml-4 mt-2">
                  <div className="flex items-center gap-4 my-2">
                    {/* <Image
                  onClick={() => window.open("https://www.imec.be")}
                  src={imecImage}
                  alt="project image"
                  className="rounded-md cursor-pointer w-auto h-12"
                /> */}
                  </div>
                  <p className="scroll-m-20 text-xl font-semibold tracking-tight text-muted-foreground">
                    For three years I studied applied computer science at UCLL
                    and graduated in 2023 with a cum laude.
                  </p>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </ol>
      </article>
    </div>
  )
}

export default Timeline