import { speciality } from "@/constants/home";
import {
  createSpecialityAnimations,
  specialityCardViewport,
} from "@/animations/speciality";
import { motion, useReducedMotion } from "motion/react";
import SectionHeader from "./shared/SectionHeader";

function SpecialitySection() {
  const reduceMotion = useReducedMotion();
  const animation = createSpecialityAnimations(reduceMotion);
  const reveal = {
    initial: "hidden",
    whileInView: "visible",
    viewport: specialityCardViewport,
  };

  return (
    <section className="flex flex-col py-12.5 px-5 border-b border-b-line">
      <SectionHeader
        sectionNumber="01"
        sectionTag="ABOUT ME"
        title="Building useful things with care & clarity."
        desctiption="Software Engineer with 3+ years of experience building enterprise web
          and mobile applications across the insurance, banking, education, and
          GIS sectors. Specialized in React, React Native, Next.js, TypeScript,
          and API integration, with hands-on experience delivering end-to-end
          solutions covering frontend development, backend services, database
          design, cloud infrastructure, and deployment."
        subDescription="Experienced in highly regulated enterprise environments, including
          Prudential Indonesia and Bank Tabungan Negara (BTN). Holds a Master’s
          degree in Computer Science with a specialization in Data Science and
          research experience in NLP, Fuzzy Logic, and Explainable AI for
          healthcare."
        withBorder={false}
      />

      <div className="grid grid-cols-1">
        {speciality.map((item, index) => (
          <motion.div
            {...reveal}
            variants={animation.sequence}
            key={index.toString()}
            className="relative flex flex-col border border-transparent gap-px p-6.25"
          >
            <motion.span
              aria-hidden="true"
              variants={animation.border}
              className="pointer-events-none absolute -inset-px origin-left border border-line"
            />
            <motion.div
              variants={animation.text}
              className="flex items-center justify-between mb-5"
            >
              <p className="font-medium text-xs text-blue font-mono">
                {item[0]}
              </p>

              <p className="font-medium text-md text-blue font-mono">+</p>
            </motion.div>

            <motion.h3
              variants={animation.text}
              className="text-[21px] tracking-tighter text-ink mb-3.5"
            >
              {item[1]}
            </motion.h3>

            <motion.p
              variants={animation.text}
              className="text-[13px] text-muted leading-[1.65]"
            >
              {item[2]}
            </motion.p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default SpecialitySection;
