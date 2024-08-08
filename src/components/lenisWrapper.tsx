"use client";
import { LazyMotion, domAnimation } from "framer-motion";
import Lenis from "lenis";
import { useEffect } from "react";

type Props = {
  children: React.ReactNode;
};

const LenisWrapper = ({ children }: Props) => {
  useEffect(() => {
    const lenis = new Lenis();

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  return <LazyMotion features={domAnimation}>{children}</LazyMotion>;
};

export default LenisWrapper;
