import ContactForm from "./contactForm";
import AnimatedText from "./animatedText";
import Cv from "./cv";

const Contact = () => {
  return (
    <div className="bg-secondary relative z-50 w-full h-screen p-4">
      <div
        id="lets-talk"
        className="h-screen flex flex-col justify-center w-full text-primary px-5"
      >
        <AnimatedText direction="left">
          <h2 className="scroll-m-20 leading-none tracking-tight lg:text-8xl md:text-7xl text-5xl text-primary uppercase">
            let&apos;s talk!
          </h2>
        </AnimatedText>
        <div className="flex sm:flex-row gap-5 flex-col w-full mt-5 mb-5">
          <div className="sm:w-2/3 w-full mr-5">
            <ContactForm />
          </div>
          <div className="flex flex-col justify-start">
            <h2 className="scroll-m-20 pb-2 text-2xl tracking-wide first:mt-0 text-muted-foreground">
              socials
            </h2>
            <div className="flex flex-col">
              <a
                href="mailto:portfoliobryanvanwinnendael@gmail.com"
                className="scroll-m-20 text-lg tracking-tight first:mt-0 hover:underline"
              >
                email
              </a>
              <a
                target="_blank"
                href="https://github.com/BryanVanWinnendael"
                className="scroll-m-20 text-lg tracking-tight first:mt-0 hover:underline"
              >
                github
              </a>
              <a
                target="_blank"
                href="https://linkedin.com/in/bryanvanwinnendael"
                className="scroll-m-20 text-lg tracking-tight first:mt-0 hover:underline"
              >
                linkedin
              </a>
              <Cv />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
