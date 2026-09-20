import { createExperienceAnimations, experienceViewport } from "@/animations/experience";
import { experiences } from "@/constants/home";
import SectionNumber from "./shared/SectionNumber";
import { motion, useInView, useReducedMotion } from "motion/react";
import Link from "next/link";
import { useRef, useState } from "react";
import { ease, linkFeedback, workArrow } from "@/animations/home";

function ExperienceSection() {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const isTitleInView = useInView(titleRef, { once: true, amount: 0.1 });
  const reduceMotion = useReducedMotion();
  const animation = createExperienceAnimations(reduceMotion);
  const [experienceList, setExperienceList] = useState(experiences.slice(0, 3));

  return (
    <section className="flex flex-col py-12.5 px-5 border-b border-b-line bg-[#eceff5]">
      <SectionNumber number="02" title="CAREER ACHIEVE" />

      <motion.h2
        ref={titleRef}
        initial="hidden"
        animate={isTitleInView ? "visible" : "hidden"}
        variants={animation.titleSequence}
        aria-label="Professional Experience"
        className="text-[39px] tracking-[-0.07em] leading-[0.98] text-ink mb-10"
      >
        {"Professional Experience".split(" ").map((word, index) => (
          <span key={index} aria-hidden="true">
            <span className="inline-block overflow-hidden align-top pb-[0.12em] mb-[-0.12em]">
              <motion.span
                variants={animation.word}
                className="inline-block origin-bottom-left"
              >
                {word}
              </motion.span>
            </span>
            {index < 1 ? " " : null}
          </span>
        ))}
      </motion.h2>

      <motion.p
        initial="hidden"
        animate={isTitleInView ? "visible" : "hidden"}
        variants={animation.description}
        className="text-[13px] text-muted leading-[1.75]"
      >
        <motion.span
          variants={animation.descriptionPart}
          className="block text-[17px] text-ink leading-[1.55]"
        >
          Selected roles and professional experiences throughout my career.
        </motion.span>
      </motion.p>

      <div className="flex flex-col">
        {experienceList.map((item, index) => (
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={experienceViewport}
            variants={animation.sequence}
            key={index.toString()}
            className="relative grid grid-cols-[32px_1fr] border-b border-transparent py-7.75"
          >
            <motion.span
              aria-hidden="true"
              variants={animation.border}
              className="pointer-events-none absolute -bottom-px left-0 h-px w-full origin-left bg-line"
            />
            <motion.p variants={animation.text} className="font-mono text-xs font-medium text-blue tracking-widest">
              0{index + 1}
            </motion.p>

            <motion.div variants={animation.details} className="flex flex-col">
              <motion.p variants={animation.text} className="font-mono text-xs text-muted mb-3">{item.period}</motion.p>

              <motion.h3 variants={animation.text} className="text-ink text-lg">{item.title}</motion.h3>

              <motion.div variants={animation.text} className="flex items-end mb-2">
                <Link href="#" className="text-xs text-ink">
                  {item.company} ↗
                </Link>

                <p className="text-xs text-[10px] text-blue font-mono ml-1.5">
                  {item.type.toUpperCase()}
                </p>
              </motion.div>

              <motion.p variants={animation.text} className="font-mono text-xs text-muted mb-2">
                {item.location}
              </motion.p>

              <motion.div variants={animation.details} className="grid grid-cols-[20px_1fr] mb-2">
                <div />
                <ul className="text-xs text-muted leading-[1.6] list-disc">
                  {item.points.map((item2, index2) => (
                    <motion.li variants={animation.text} key={index2.toString()} className="mb-1.25">
                      {item2}
                    </motion.li>
                  ))}
                </ul>
              </motion.div>

              <motion.p variants={animation.text} className="text-[9px] font-mono text-blue">
                {item.tech.toUpperCase()}
              </motion.p>
            </motion.div>
          </motion.div>
        ))}

        {experienceList.length !== experiences.length && (
          <motion.button
            {...linkFeedback}
            type="button"
            className="flex items-center self-start px-4.5 py-4 gap-4.5 border border-ink mt-7"
            onClick={() => setExperienceList(experiences)}
          >
            <p className="font-mono text-ink font-semibold text-[11px] tracking-[0.03em]">
              VIEW FULL EXPERIENCE
            </p>

            <motion.p
              variants={workArrow}
              transition={{ duration: 0.35, ease }}
              className="text-[18px] leading-2.5 text-ink -mt-px"
            >
              →
            </motion.p>
          </motion.button>
        )}
      </div>
    </section>
  );
}

export default ExperienceSection;
