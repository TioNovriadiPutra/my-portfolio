import { skills } from "@/constants/home";
import SectionHeader from "./shared/SectionHeader";
import { motion, useReducedMotion } from "motion/react";
import { createSkillAnimations, skillViewport } from "@/animations/skills";

function SkillSection() {
  const reduceMotion = useReducedMotion();
  const animation = createSkillAnimations(reduceMotion);

  return (
    <section className="flex flex-col py-12.5 px-5 border-b border-b-line bg-[#eceff5]">
      <SectionHeader
        sectionNumber="04"
        sectionTag="TOOLKIT"
        title="Technical Skills"
        desctiption="A practical working set across interface, infrastructure, and intelligent systems."
      />

      <div className="flex flex-col">
        {skills.map((item, index) => (
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={skillViewport}
            variants={animation.sequence}
            key={index.toString()}
            className="relative grid grid-cols-[32px_1fr] py-7.75 border-b border-transparent"
          >
            <motion.span
              aria-hidden="true"
              variants={animation.border}
              className="pointer-events-none absolute -bottom-px left-0 h-px w-full origin-left bg-line"
            />
            <motion.p variants={animation.text} className="font-mono text-xs font-medium text-blue tracking-widest">
              {item[0]}
            </motion.p>

            <motion.div variants={animation.details} className="flex flex-col gap-3">
              <motion.h3 variants={animation.text} className="text-ink text-sm m-0">{item[1]}</motion.h3>

              <motion.div variants={animation.tiles} className="flex flex-wrap gap-1.5">
                {(item[2] as string[]).map((item2, index2) => (
                  <motion.div
                    variants={animation.tile}
                    style={{ transformPerspective: 600, transformOrigin: "left center" }}
                    key={index2.toString()}
                    className="border border-line px-1.75 py-1.25"
                  >
                    <p className="font-mono text-[9px] text-muted">{item2}</p>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default SkillSection;
