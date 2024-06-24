import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

type Direction = "left" | "right" | "up" | "down";

const AnimatedText = ({
  children,
  direction,
}: {
  children: any;
  direction: Direction;
}) => {
  const controls = useAnimation();
  const ref = useRef(null);
  const inView = useInView(ref);

  const getHidden = () => {
    switch (direction) {
      case "left":
        return { opacity: 0, x: -200 };
      case "right":
        return { opacity: 0, x: 200 };
      case "up":
        return { opacity: 0, y: -100 };
      case "down":
        return { opacity: 0, y: 100 };
    }
  };

  const getVisible = () => {
    switch (direction) {
      case "left":
        return { opacity: 1, x: 0 };
      case "right":
        return { opacity: 1, x: 0 };
      case "up":
        return { opacity: 1, y: 0 };
      case "down":
        return { opacity: 1, y: 0 };
    }
  };

  const variants = {
    hidden: getHidden(),
    visible: {
      ...getVisible(),
      transition: { ease: "easeOut", duration: 0.5 },
    },
  };

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={variants}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedText;
