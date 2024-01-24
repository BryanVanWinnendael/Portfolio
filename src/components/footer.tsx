import { scrollToElement } from "@/lib/utils"
import { useState, useEffect } from "react";

const Footer = () => {
  const [brusselsTime, setBrusselsTime] = useState('');

  useEffect(() => {
    const updateTimeZone = () => {
      const utcTime = new Date();
      const brusselsTimeZone = 'Europe/Brussels';

      const brusselsTime = utcTime.toLocaleTimeString('en-US', {
        timeZone: brusselsTimeZone,
        hour12: false,
        hour: 'numeric',
        minute: 'numeric',
        timeZoneName: 'short',
      });

      setBrusselsTime(brusselsTime);
    }

    updateTimeZone();

    const intervalId = setInterval(updateTimeZone, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="flex sm:flex-row flex-col gap-5 bg-primary h-full pb-12 text-secondary mx-5">
      <div>
        <h1 className="scroll-m-20 lg:text-7xl md:text-6xl sm:text-4xl text-2xl font-bold tracking-tight">
          © 2024
        </h1>
        <h1 className="scroll-m-20 lg:text-9xl md:text-8xl sm:text-6xl text-4xl font-extrabold tracking-tight">
          BRYAN
        </h1>
        <h1 className="scroll-m-20 lg:text-9xl md:text-8xl sm:text-6xl text-4xl font-extrabold tracking-tight">
          VAN WINNENDAEL
        </h1>
      </div>
      <div className="flex flex-col gap-5">
        <div className="flex gap-5">
          <div className='flex flex-col justify-start'>
            <h2 className="scroll-m-20  pb-2 text-3xl font-semibold tracking-tight first:mt-0">Navigation</h2>
            <div className='flex flex-col'>
              <p onClick={() => scrollToElement("home")} className='scroll-m-20 text-secondary text-xl font-semibold tracking-tight first:mt-0 hover:underline cursor-pointer'>Home</p>
              <p onClick={() => scrollToElement("about")} className='scroll-m-20 text-secondary text-xl font-semibold tracking-tight first:mt-0 hover:underline cursor-pointer'>About</p>
              <p onClick={() => scrollToElement("timeline")} className='scroll-m-20 text-secondary text-xl font-semibold tracking-tight first:mt-0 hover:underline cursor-pointer'>Timeline</p>
              <p onClick={() => scrollToElement("projects")} className='scroll-m-20 text-secondary text-xl font-semibold tracking-tight first:mt-0 hover:underline cursor-pointer'>Projects</p>
              <p onClick={() => scrollToElement("contact")} className='scroll-m-20 text-secondary text-xl font-semibold tracking-tight first:mt-0 hover:underline cursor-pointer'>Left's talk</p>

            </div>
          </div>
          <div className='flex flex-col justify-start'>
            <h2 className="scroll-m-20  pb-2 text-3xl font-semibold tracking-tight first:mt-0">Socials</h2>
            <div className='flex flex-col'>
              <a href="mailto: portfoliobryanvanwinnendael@gmail.com" className='scroll-m-20 text-xl font-semibold tracking-tight first:mt-0 hover:underline'>Email</a>
              <a target="_blank" href="https://github.com/BryanVanWinnendael" className='scroll-m-20 text-xl font-semibold tracking-tight first:mt-0 hover:underline'>Github</a>
              <a target="_blank" href="https://linkedin.com/in/bryanvanwinnendael" className='scroll-m-20 text-xl font-semibold tracking-tight first:mt-0 hover:underline'>Linkdin</a>
            </div>
          </div>

        </div>
        <div>
          <h2 className="scroll-m-20 pb-2 text-3xl font-semibold tracking-tight first:mt-0">Local time</h2>
          <p className='scroll-m-20 text-muted-foreground text-xl tracking-tight first:mt-0 hover:underline cursor-pointer'>{brusselsTime}</p>
        </div>
      </div>

    </div>
  )
}

export default Footer