import { useRef } from "react";
import SectionNumber from "./SectionNumber";
import { motion, useInView, useReducedMotion } from "motion/react";
import { createExperienceAnimations } from "@/animations/experience";

type Props = {
  sectionNumber: string;
  sectionTag: string;
  title: string;
  desctiption?: string;
  subDescription?: string;
  withBorder?: boolean;
};

function SectionHeader({
  sectionNumber,
  sectionTag,
  title,
  desctiption,
  subDescription,
  withBorder = true,
}: Props) {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const isTitleInView = useInView(titleRef, { once: true, amount: 0.1 });
  const reduceMotion = useReducedMotion();
  const animation = createExperienceAnimations(reduceMotion);

  return (
    <>
      <SectionNumber number={sectionNumber} title={sectionTag} />

      <motion.h2
        ref={titleRef}
        initial="hidden"
        animate={isTitleInView ? "visible" : "hidden"}
        variants={animation.titleSequence}
        aria-label={title}
        className={`text-[39px] tracking-[-0.07em] leading-[0.98] text-ink pb-10 ${!desctiption ? "border-b border-b-line" : ""}`}
      >
        {title.split(" ").map((word, index) => (
          <span key={index} aria-hidden="true">
            <span className="inline-block overflow-hidden align-top pb-[0.12em] mb-[-0.12em]">
              <motion.span
                variants={animation.word}
                className="inline-block origin-bottom-left"
              >
                {word}
              </motion.span>
            </span>
            {index < title.split(" ").length ? " " : null}
          </span>
        ))}
      </motion.h2>

      {desctiption && (
        <motion.p
          initial="hidden"
          animate={isTitleInView ? "visible" : "hidden"}
          variants={animation.description}
          className={`text-[13px] text-muted leading-[1.75] ${withBorder ? "pb-7.75 border-b border-b-line" : ""}`}
        >
          <motion.span
            variants={animation.descriptionPart}
            className="block text-[17px] text-ink leading-[1.55]"
          >
            {desctiption}
          </motion.span>
          {subDescription && (
            <>
              <br />
              <motion.span
                variants={animation.descriptionPart}
                className="block mb-16.25"
              >
                {subDescription}
              </motion.span>
            </>
          )}
        </motion.p>
      )}
    </>
  );
}

export default SectionHeader;
