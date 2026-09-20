import { stagger, type Variants } from "motion/react";
import { ease } from "./home";

export const specialityViewport = { once: true, amount: 0.1 };

export function createSpecialityAnimations(reduceMotion: boolean | null) {
  const duration = (seconds: number) => reduceMotion ? 0.2 : seconds;

  const sequence: Variants = {
    hidden: {},
    visible: {
      transition: { delayChildren: stagger(reduceMotion ? 0 : 0.14) },
    },
  };

  const titleSequence: Variants = {
    hidden: {},
    visible: {
      transition: { delayChildren: stagger(reduceMotion ? 0 : 0.075) },
    },
  };

  const word: Variants = {
    hidden: { opacity: 0, y: reduceMotion ? 0 : "110%", rotate: reduceMotion ? 0 : 3 },
    visible: {
      opacity: 1, y: 0, rotate: 0,
      transition: { duration: duration(1.2), ease },
    },
  };

  const text: Variants = {
    hidden: {
      opacity: 0, y: reduceMotion ? 0 : 14,
      clipPath: reduceMotion ? "inset(-15% -2% -15% -2%)" : "inset(0% -2% 100% -2%)",
    },
    visible: {
      opacity: 1, y: 0, clipPath: "inset(-15% -2% -15% -2%)",
      transition: { duration: duration(0.95), ease },
    },
  };

  const border: Variants = {
    hidden: { opacity: 0, scaleX: reduceMotion ? 1 : 0 },
    visible: {
      opacity: 1, scaleX: 1,
      transition: { duration: duration(1.1), ease },
    },
  };

  const description: Variants = {
    hidden: {},
    visible: {
      transition: {
        delayChildren: stagger(reduceMotion ? 0 : 0.2, {
          startDelay: reduceMotion ? 0 : 0.4,
        }),
      },
    },
  };

  const descriptionPart: Variants = {
    hidden: {
      opacity: 0,
      y: reduceMotion ? 0 : 24,
      clipPath: reduceMotion ? "inset(-5% -2% -5% -2%)" : "inset(0% -2% 100% -2%)",
    },
    visible: {
      opacity: 1,
      y: 0,
      clipPath: "inset(-5% -2% -5% -2%)",
      transition: {
        duration: duration(1.25),
        ease,
      },
    },
  };

  return { sequence, titleSequence, word, text, border, description, descriptionPart };
}
