import { Variants } from "framer-motion";

export const cardVariants: Variants = {
  offscreen: {
    y: 150,
  },
  onscreen: {
    y: 50,
    rotate: 0,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 2,
    },
  },
};
