import { stagger, type Variants } from "motion/react";

export const ease = [0.22, 1, 0.36, 1] as const;

type RevealOptions = { delay?: number };

export const reveal: Variants = {
  hidden: { opacity: 0, y: 18 },
  visible: ({ delay = 0 }: RevealOptions = {}) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 1.15, delay, ease },
  }),
};

export const sequence: Variants = {
  hidden: {},
  visible: { transition: { delayChildren: stagger(0.22) } },
};

export const statusSequence: Variants = {
  hidden: {},
  visible: {},
};

export const statusRule: Variants = {
  hidden: { scaleX: 0, opacity: 0 },
  visible: (delay = 0) => ({
    scaleX: 1,
    opacity: 1,
    transition: { duration: 0.85, delay, ease },
  }),
};

export const arrowFeedback: Variants = {
  rest: { x: 0, y: 0 },
  hover: { x: 3, y: -3 },
  pressed: { x: 1, y: -1 },
};

export const linkFeedback = {
  initial: "rest",
  animate: "rest",
  whileHover: "hover",
  whileFocus: "hover",
  whileTap: "pressed",
  transition: { duration: 0.3, ease },
};

export function createHomeAnimations(reduceMotion: boolean | null) {
  const titleLine: Variants = {
    hidden: {
      opacity: 0,
      y: reduceMotion ? 0 : "110%",
      rotate: reduceMotion ? 0 : 3,
    },
    visible: (index: number) => ({
      opacity: 1,
      y: 0,
      rotate: 0,
      transition: {
        duration: reduceMotion ? 0.2 : 1.2,
        delay: reduceMotion ? 0 : 0.16 + index * 0.2,
        ease,
      },
    }),
  };

  const heroText: Variants = {
    hidden: {
      opacity: 0,
      y: reduceMotion ? 0 : 24,
      clipPath: reduceMotion
        ? "inset(-5% -2% -5% -2%)"
        : "inset(0% -2% 100% -2%)",
    },
    visible: ({ delay = 0 }: RevealOptions = {}) => ({
      opacity: 1,
      y: 0,
      clipPath: "inset(-5% -2% -5% -2%)",
      transition: {
        duration: reduceMotion ? 0.2 : 1.25,
        delay: reduceMotion ? 0 : delay,
        ease,
      },
    }),
  };

  const statusText: Variants = {
    hidden: {
      opacity: 0,
      y: 10,
      clipPath: reduceMotion
        ? "inset(-15% -2% -15% -2%)"
        : "inset(0% -2% 100% -2%)",
    },
    visible: (delay = 0) => ({
      opacity: 1,
      y: 0,
      clipPath: "inset(-15% -2% -15% -2%)",
      transition: { duration: reduceMotion ? 0.2 : 0.8, delay, ease },
    }),
  };

  const portraitReveal: Variants = {
    hidden: {
      opacity: 0,
      clipPath: reduceMotion ? "inset(0% 0% 0% 0%)" : "inset(0% 100% 0% 0%)",
    },
    visible: {
      opacity: 1,
      clipPath: "inset(0% 0% 0% 0%)",
      transition: { duration: reduceMotion ? 0.2 : 1.45, ease },
    },
  };

  return { titleLine, heroText, statusText, portraitReveal };
}

export const workButton: Variants = {
  rest: {
    y: 0,
    scale: 1,
    backgroundColor: "var(--blue)",
    boxShadow: "0 0px 0px rgba(36, 88, 211, 0)",
  },
  hover: {
    y: -3,
    scale: 1,
    backgroundColor: "#1c46ad",
    boxShadow: "0 10px 24px rgba(36, 88, 211, 0.24)",
  },
  pressed: {
    y: 0,
    scale: 0.98,
    backgroundColor: "#1c46ad",
    boxShadow: "0 2px 6px rgba(36, 88, 211, 0.12)",
  },
};

export const workArrow: Variants = {
  rest: { x: 0 },
  hover: { x: 8 },
  pressed: { x: 4 },
};

export const connectUnderline: Variants = {
  rest: { scaleX: 0, opacity: 0 },
  hover: { scaleX: 1, opacity: 1 },
  pressed: { scaleX: 1, opacity: 1 },
};

export const portraitZoom: Variants = {
  hidden: { scale: 1.12 },
  visible: { scale: 1, transition: { duration: 1.6, ease } },
};
