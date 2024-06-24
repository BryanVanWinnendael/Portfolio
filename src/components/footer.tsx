"use client";
import { scrollToElement } from "@/lib/utils";
import { useState, useEffect } from "react";
import Cv from "./cv";
import { useStates } from "@/context/stateContext";

const Footer = () => {
  const { activeNav } = useStates();
  const [brusselsTime, setBrusselsTime] = useState("");
  const [year, setYear] = useState("");
  const isProject = activeNav === "project" || activeNav === "archive";

  useEffect(() => {
    const updateTimeZone = () => {
      const utcTime = new Date();
      const brusselsTimeZone = "Europe/Brussels";

      const brusselsTime = utcTime.toLocaleTimeString("en-US", {
        timeZone: brusselsTimeZone,
        hour12: false,
        hour: "numeric",
        minute: "numeric",
        timeZoneName: "short",
      });

      setBrusselsTime(brusselsTime);
    };

    const getYear = () => {
      const date = new Date();
      const year = date.getFullYear();
      setYear(year.toString());
    };

    getYear();

    updateTimeZone();

    const intervalId = setInterval(updateTimeZone, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <div className="relative z-50 bg-secondary text-primary h-full pb-24 w-full px-5 pt-12">
      <div className="grid sm:grid-cols-[auto,auto] sm:grid-rows-1 grid-rows-[auto,auto] gap-5 border-opacity-20 border-[1px] border-gray-200 p-5 rounded-[24px]">
        <div className="sm:row-start-1 row-start-2 flex items-end uppercase">
          <div>
            <h1 className="scroll-m-20 lg:text-6xl md:text-5xl sm:text-4xl text-3xl tracking-wide font-medium">
              © {year}
            </h1>
            <h1 className="scroll-m-20 lg:text-7xl md:text-6xl sm:text-5xl text-4xl tracking-wide font-medium">
              bryan
            </h1>
            <h1 className="scroll-m-20 lg:text-7xl md:text-6xl sm:text-5xl text-4xl tracking-wide font-medium">
              van winnendael
            </h1>
          </div>
        </div>
        <div className="flex flex-col gap-5">
          <div className="flex gap-5 sm:flex-row flex-col">
            <div className="flex flex-col justify-start">
              <h2 className="scroll-m-20 pb-2 text-3xl tracking-wide first:mt-0 font-medium">
                navigation
              </h2>
              <div className="flex flex-col">
                {isProject ? (
                  <a
                    href="/#about"
                    className="scroll-m-20 text-xl tracking-tight first:mt-0 hover:underline cursor-pointer font-medium"
                  >
                    about
                  </a>
                ) : (
                  <p
                    onClick={() => scrollToElement("about")}
                    className="scroll-m-20 text-xl tracking-tight first:mt-0 hover:underline cursor-pointer font-medium"
                  >
                    about
                  </p>
                )}

                {isProject ? (
                  <a
                    href="/#experience"
                    className="scroll-m-20 text-xl tracking-tight first:mt-0 hover:underline cursor-pointer font-medium"
                  >
                    experience
                  </a>
                ) : (
                  <p
                    onClick={() => scrollToElement("experience")}
                    className="scroll-m-20 text-xl tracking-tight first:mt-0 hover:underline cursor-pointer font-medium"
                  >
                    experience
                  </p>
                )}

                {isProject ? (
                  <a
                    href="/#select-work"
                    className="scroll-m-20 text-xl tracking-tight first:mt-0 hover:underline cursor-pointer font-medium"
                  >
                    select work
                  </a>
                ) : (
                  <p
                    onClick={() => scrollToElement("select-work")}
                    className="scroll-m-20 text-xl tracking-tight first:mt-0 hover:underline cursor-pointer font-medium"
                  >
                    select work
                  </p>
                )}
                {isProject ? (
                  <a
                    href="/#lets-talk"
                    className="scroll-m-20 text-xl tracking-tight first:mt-0 hover:underline cursor-pointer font-medium"
                  >
                    let&apos;s talk
                  </a>
                ) : (
                  <p
                    onClick={() => scrollToElement("lets-talk")}
                    className="scroll-m-20 text-xl tracking-tight first:mt-0 hover:underline cursor-pointer font-medium"
                  >
                    let&apos;s talk
                  </p>
                )}
              </div>
            </div>
            <div className="flex-col justify-startflex">
              <h2 className="scroll-m-20 pb-2 text-3xl tracking-wide first:mt-0 font-medium">
                socials
              </h2>
              <div className="flex flex-col">
                <a
                  href="mailto: portfoliobryanvanwinnendael@gmail.com"
                  className="scroll-m-20 text-xl tracking-tight first:mt-0 hover:underline font-medium"
                >
                  email
                </a>
                <a
                  target="_blank"
                  href="https://github.com/BryanVanWinnendael"
                  className="scroll-m-20 text-xl tracking-tight first:mt-0 hover:underline font-medium"
                >
                  github
                </a>
                <a
                  target="_blank"
                  href="https://linkedin.com/in/bryanvanwinnendael"
                  className="scroll-m-20 text-xl tracking-tight first:mt-0 hover:underline font-medium"
                >
                  linkdin
                </a>
                <Cv />
              </div>
            </div>
          </div>
          <div>
            <h2 className="scroll-m-20 pb-2 text-3xl tracking-wide first:mt-0 font-medium">
              local time
            </h2>
            <p className="scroll-m-20 text-muted-foreground text-xl tracking-tight first:mt-0 hover:underline cursor-pointer">
              {brusselsTime}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
