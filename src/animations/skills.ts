import { stagger, type Variants } from "motion/react";
import { createExperienceAnimations } from "./experience";
import { ease } from "./home";

export const skillViewport = { once: true, amount: 0.35 };

export function createSkillAnimations(reduceMotion: boolean | null) {
  const tiles: Variants = {
    hidden: {},
    visible: {
      transition: {
        delayChildren: stagger(reduceMotion ? 0 : 0.1, {
          startDelay: reduceMotion ? 0 : 0.15,
        }),
      },
    },
  };

  const tile: Variants = {
    hidden: {
      opacity: 0,
      x: reduceMotion ? 0 : -10,
      rotateY: reduceMotion ? 0 : -70,
    },
    visible: {
      opacity: 1,
      x: 0,
      rotateY: 0,
      transition: { duration: reduceMotion ? 0.2 : 0.7, ease },
    },
  };

  return { ...createExperienceAnimations(reduceMotion), tiles, tile };
}
