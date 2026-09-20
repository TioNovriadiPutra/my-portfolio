import { stagger, type Variants } from "motion/react";
import { createSpecialityAnimations } from "./speciality";
import { ease } from "./home";

export const experienceViewport = { once: true, amount: 0.35 };

export function createExperienceAnimations(reduceMotion: boolean | null) {
  const text: Variants = {
    hidden: {
      opacity: 0,
      x: reduceMotion ? 0 : -18,
      clipPath: reduceMotion
        ? "inset(-15% -2% -15% -24px)"
        : "inset(-15% 100% -15% -24px)",
    },
    visible: {
      opacity: 1,
      x: 0,
      // Leave room for list bullets outside the text box.
      clipPath: "inset(-15% -2% -15% -24px)",
      transition: { duration: reduceMotion ? 0.2 : 0.95, ease },
    },
  };

  const details: Variants = {
    hidden: {},
    visible: {
      transition: { delayChildren: stagger(reduceMotion ? 0 : 0.1) },
    },
  };

  return { ...createSpecialityAnimations(reduceMotion), text, details };
}
