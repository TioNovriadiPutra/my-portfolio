type Props = {
  number: string;
  title: string;
};

function SectionNumber({ number, title }: Props) {
  const reduceMotion = useReducedMotion();
  const animation = createSectionNumberAnimations(reduceMotion);

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      className="flex items-center gap-5 mb-7.5"
    >
      {[number, title].map((label, index) => (
        <p key={index} className="relative overflow-hidden font-mono text-sm font-medium text-blue">
          <motion.span variants={animation.text} custom={index}>
            {label}
          </motion.span>
          {!reduceMotion && (
            <motion.span
              aria-hidden="true"
              variants={animation.block}
              custom={index}
              className="pointer-events-none absolute inset-0 bg-blue"
            />
          )}
        </p>
      ))}
    </motion.div>
  );
}

export default SectionNumber;
import { createSectionNumberAnimations } from "@/animations/sectionNumber";
import { motion, useReducedMotion } from "motion/react";
