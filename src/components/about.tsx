import { setBackgroundColor } from '@/stores/background';
import { useEffect, useRef } from 'react'

const About = () => {
  const targetRef = useRef(null)

  const calculateAge = () => {
    const birthDate = new Date("2002-03-29")
    const currentDate = new Date()
    const age = currentDate.getFullYear() - birthDate.getFullYear()
    const m = currentDate.getMonth() - birthDate.getMonth()
    if (m < 0 || (m === 0 && currentDate.getDate() < birthDate.getDate())) {
      return age - 1
    }
    return age
  }

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

    if (targetRef.current) {
      observer.observe(targetRef.current);
    }
    return () => {
      observer.disconnect();
    }
  }, [targetRef.current])

  return (
    <div id="about" ref={targetRef} className='h-[100dvh] flex justify-center items-center'>
      <article className="font-semibold lg:p-12 p-2 w-5/6">
        <p className="scroll-m-20 lg:text-5xl md:text-4xl sm:text-3xl text-2xl font-extrabold tracking-tight">
          My name is Bryan Van Winnendael,
        </p>
        <p className="scroll-m-20 lg:text-5xl md:text-4xl sm:text-3xl text-2xl font-extrabold tracking-tight">
          I&apos;m a {calculateAge()}{" "}
          year old full stack developer based in Belgium.
        </p>

      </article>
    </div>
  )
}

export default About