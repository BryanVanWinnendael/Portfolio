import { setBackgroundColor } from '@/stores/background';
import { useEffect, useRef } from 'react'
import ProjectCard from './projectCard';

import NotedImage from '@/assets/images/noted/noted.png'
import DroneImage from '@/assets/images/drone/drone.svg'

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
    <div id="projects" className='h-full pt-12 flex flex-col gap-48'>
      <div ref={targetRefGrid1} className='flex flex-col p-5 h-full'>
        <div className='w-full h-screen'>
          <ProjectCard image={NotedImage.src} year='2023' tags='elctron - react - editor.js' title='Noted' text='Noted is a combination of obsidian and notion' />
        </div>
      </div>
      <div ref={targetRefGrid2} className='flex h-screen w-full p-5 mt-5 gap-5'>
        <div className='w-full h-1/2'>
          <ProjectCard image={DroneImage.src} year='2023' tags='python - ai' title='Point Cloud Processor' text='Point' />
        </div>
        <div className='w-full '>
          {/* <ProjectCard image={DroneImage.src} year='2023' tags='python - ai' title='Point Cloud Processor' text='Point'/> */}
        </div>
      </div>
      <div ref={targetRefGrid3} className='flex w-full p-5 h-screen mt-5 gap-5'>
        <div className='bg-blue-600 w-full h-full'></div>
        <div className='h-full w-full flex items-end'>
          <div className='bg-blue-600 w-full h-1/2'></div>
        </div>
      </div>
    </div>
  )
}

export default ProjectsGrid