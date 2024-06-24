"use client";
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

  return <>{children}</>;
};

export default LenisWrapper;
