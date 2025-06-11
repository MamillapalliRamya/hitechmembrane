import { Variants } from "framer-motion";

export const cardVariants: Variants = {
    offscreen: {
      y: 200
    },
    onscreen: {
      y: -10,
      rotate: 0,
      transition: {
        type: "spring",
        bounce: 0.2,
        duration: 2,
      }
    }
  };