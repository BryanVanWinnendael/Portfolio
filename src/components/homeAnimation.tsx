import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Hero from "@/components/hero";
import About from "@/components/about";
import Experience from "./experience";

export default function HomeAnimation() {
  const container = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: container as any,
    offset: ["start start", "end end"],
  });

  const scale = useTransform(
    scrollYProgress,
    [0, 0.3, 0.9, 1],
    [0.8, 1, 1, 0.8],
  );

  const filter = useTransform(
    scrollYProgress,
    [0, 1],
    ["blur(0px)", "blur(4px)"],
  );

  return (
    <main ref={container} className="relative h-fit">
      <div className="h-screen w-full"></div>
      <Hero filter={filter} />
      <motion.div
        className="relative h-fit bg-primary w-full rounded-xl"
        style={{ scale }}
      >
        <About />
        <Experience />
      </motion.div>
    </main>
  );
}
