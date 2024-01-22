import { setBackgroundColor } from '@/stores/background';
import { useEffect, useRef } from 'react'
import ContactForm from './contactForm';

const Contact = () => {
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
    <div id="contact" ref={targetRef} className='h-[100dvh] flex flex-col justify-center w-full text-secondary p-5'>
      <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
        Let's talk!
      </h1>
      <div className='flex sm:flex-row flex-col w-full mt-5 mb-5'>
        <div className='sm:w-2/3 w-full mr-5'>
          <ContactForm />
        </div>
        <div className='flex flex-col justify-start'>
          <h2 className="scroll-m-20  pb-2 text-3xl font-semibold tracking-tight first:mt-0">Socials</h2>
          <div className='flex flex-col'>
            <a href="mailto: portfoliobryanvanwinnendael@gmail.com" className='scroll-m-20 text-xl font-semibold tracking-tight first:mt-0'>Email</a>
            <a href="" className='scroll-m-20 text-xl font-semibold tracking-tight first:mt-0'>Github</a>
            <a href="" className='scroll-m-20 text-xl font-semibold tracking-tight first:mt-0'>Linkdin</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact