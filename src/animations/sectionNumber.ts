import type { Variants } from "motion/react";
import { ease } from "./home";

export function createSectionNumberAnimations(reduceMotion: boolean | null) {
  const text: Variants = {
    hidden: { opacity: 0 },
    visible: (index: number) => ({
      opacity: 1,
      transition: {
        duration: reduceMotion ? 0.2 : 0,
        delay: reduceMotion ? 0 : index * 0.35 + 0.3,
      },
    }),
  };

  const block: Variants = {
    hidden: { x: "-101%" },
    visible: (index: number) => ({
      x: ["-101%", "0%", "101%"],
      transition: {
        duration: 0.7,
        delay: index * 0.35,
        times: [0, 0.45, 1],
        ease,
      },
    }),
  };

  return { text, block };
}
