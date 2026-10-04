import AnimatedMedia from "@/components/animatedMedia"
import ContactForm from "@/components/contactForm"
import Copy from "@/components/copy"
import Link from "next/link"

const Contact = () => {
  return (
    <div className="flex flex-col justify-center items-center text-white bg-accent min-h-screen pt-16">
      <div className="flex flex-col items-center md:leading-24">
        <Copy delay={0.5}>
          <h1 className="md:text-[7vw] text-[9vw] font-[phemister] ">
            WANT TO CONNECT?
          </h1>
        </Copy>
        <Copy delay={0.7}>
          <h1 className="md:text-[6vw] text-[8vw]">TELL ME MORE</h1>
        </Copy>
      </div>

      <div className="flex gap-4 mt-4 md:text-sm text-xs">
        <Copy delay={0.9}>
          <Link
            target="_blank"
            href="https://github.com/BryanVanWinnendael"
            className="underline"
          >
            GITHUB
          </Link>
        </Copy>
        <Copy delay={0.9}>
          <Link
            target="_blank"
            href="https://www.linkedin.com/in/bryanvanwinnendael"
            className="underline"
          >
            LINKEDIN
          </Link>
        </Copy>
        <Copy delay={0.9}>
          <Link target="_blank" href="cv.pdf" className="underline">
            CV
          </Link>
        </Copy>
      </div>

      <div className="w-full px-4 mt-12 md:mt-16 md:w-2/3 lg:w-1/2">
        <AnimatedMedia delay={1}>
          <div className="pt-4 md:pt-6">
            <ContactForm />
          </div>
        </AnimatedMedia>
      </div>
    </div>
  )
}

export default Contact
