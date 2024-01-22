import { setBackgroundColor } from '@/stores/background';
import { useEffect, useRef } from 'react'
import ProjectCard from './projectCard';

import NotedImage from '@/assets/images/noted/noted.svg'
import DroneImage from '@/assets/images/drone/drone.svg'
import ChatlyImage from '@/assets/images/chatly/chatly.jpg'
import ClneImage from '@/assets/images/clne/clne.jpg'
import TwitterImage from '@/assets/images/twitter/twitter.jpg'



const ProjectsGrid = () => {
  const targetRefGrid1 = useRef(null)
  const targetRefGrid2 = useRef(null)
  const targetRefGrid3 = useRef(null)


  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setBackgroundColor("bg-secondary")
          }
        });
      },
      {
        threshold: 0.5,
      }
    );

    if (targetRefGrid1.current) {
      observer.observe(targetRefGrid1.current);
    }
    if (targetRefGrid2.current) {
      observer.observe(targetRefGrid2.current);
    }
    if (targetRefGrid3.current) {
      observer.observe(targetRefGrid3.current);
    }
    return () => {
      observer.disconnect();
    }
  }, [targetRefGrid1.current, targetRefGrid2.current, targetRefGrid3.current])


  return (
    <div id="projects" className='h-full pt-12 flex flex-col md:gap-48 gap-2'>
      <div ref={targetRefGrid1} className='flex flex-col p-5 h-full'>
        <div className='w-full lg:h-screen'>
          <ProjectCard image={NotedImage.src} year='2023' tags='electron - react - editor.js' title='Noted'
            text='Noted is a combination of obsidian and notion. Easily write notes and customize your application.' />
        </div>
      </div>
      <div ref={targetRefGrid2} className='flex md:flex-row flex-col md:h-screen h-full w-full p-5 mt-5 gap-5'>
        <div className='w-full md:h-1/2 h-full'>
          <ProjectCard image={DroneImage.src} year='2023' tags='python - ai' title='Point Cloud Processor'
            text='With Point Cloud Processor you can process point clouds, segment and classify them.' />
        </div>
        <div className='w-full '>
          <ProjectCard image={ChatlyImage.src} year='2023' tags='nextjs - agora - supabase' title='Chatly'
            text='Chat with people from around the world.' />
        </div>
      </div>

      <div ref={targetRefGrid3} className='flex md:flex-row flex-col md:h-screen h-full w-full p-5 mt-5 gap-5'>
        <div className='w-full '>
          <ProjectCard image={TwitterImage.src} year='2022' tags='phoenix - mysql' title='Twitter clone'
            text='A clone of twitter made in phoenix.' />
        </div>
        <div className='w-full md:h-1/2 h-full'>
          <ProjectCard image={ClneImage.src} year='2021' tags='react - firebase' title='Clne'
            text='Share your favorite moments online with Clne.' />
        </div>
      </div>
    </div>
  )
}

export default ProjectsGrid