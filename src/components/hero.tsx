import { motion } from 'framer-motion'
import { useEffect, useRef } from 'react'
import ScrollLine from '@/components/scrollLine'
import { setBackgroundColor } from '@/stores/background';


const Hero = () => {
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
    <motion.div ref={targetRef} className='h-[100dvh] w-full select-none text-secondary uppercase flex flex-col items-center justify-center'>
      <div className='text-secondary leading-[1.1] px-12'>
        <h1 className="scroll-m-20 text-[10vw] font-extrabold tracking-tight h-fit">full stack</h1>
        <h1 className="scroll-m-20 text-[10vw] font-extrabold tracking-tight h-fit">developer</h1>
        <h1 className="scroll-m-20 text-[14vw] font-extrabold tracking-tight h-fit">bryan Van</h1>
        <h1 className="scroll-m-20 text-[14vw] font-extrabold tracking-tight h-fit">Winnendael</h1>
      </div>
      <div className='flex justify-end text-sm w-full h-12 lowercase px-5 absolute bottom-5 right-0'>
        <div className='flex items-center rotate-90'>
          <p className='text-md'>Scroll</p>
          <ScrollLine />
        </div>
      </div>
    </motion.div>
  )
}

export default Hero