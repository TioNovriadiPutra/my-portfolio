import { educations } from "@/constants/home";
import SectionHeader from "./shared/SectionHeader";
import { motion, useReducedMotion } from "motion/react";
import { createExperienceAnimations, experienceViewport } from "@/animations/experience";

function EducationSection() {
  const reduceMotion = useReducedMotion();
  const animation = createExperienceAnimations(reduceMotion);

  return (
    <section className="flex flex-col py-12.5 px-5 border-b border-b-line">
      <SectionHeader
        sectionNumber="05"
        sectionTag="EDUCATION"
        title="A foundation in systems & data."
      />

      {educations.map((item, index) => (
        <motion.div
          key={index.toString()}
          initial="hidden"
          whileInView="visible"
          viewport={experienceViewport}
          variants={animation.details}
          className="relative py-7.75 border-b border-transparent"
        >
          <motion.span
            aria-hidden="true"
            variants={animation.border}
            className="pointer-events-none absolute -bottom-px left-0 h-px w-full origin-left bg-line"
          />
          <motion.p variants={animation.text} className="font-mono text-xs text-muted mb-3">{item[2]}</motion.p>

          <motion.h3 variants={animation.text} className="text-2xl leading-none tracking-[-0.06em] mb-3">
            {item[0]}
            <br />
            <span className="text-blue">{item[1]}</span>
          </motion.h3>

          <motion.p variants={animation.text} className="text-xs text-muted leading-[1.65] mb-5">
            Bina Nusantara University{" "}
            <span className="font-mono text-[9px] ml-2">
              Jakarta, Indonesia
            </span>
          </motion.p>

          <motion.p variants={animation.text} className="text-xs text-muted leading-[1.65] mb-3">{item[4]}</motion.p>

          <motion.p variants={animation.text} className="text-xs font-mono text-blue font-medium">
            GPA {item[3]}
          </motion.p>
        </motion.div>
      ))}
    </section>
  );
}

export default EducationSection;
