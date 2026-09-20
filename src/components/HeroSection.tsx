import {
  arrowFeedback,
  connectUnderline,
  createHomeAnimations,
  ease,
  linkFeedback,
  portraitZoom,
  reveal,
  sequence,
  statusRule,
  statusSequence,
  workArrow,
  workButton,
} from "@/animations/home";
import { MotionImage, MotionLink } from "@/constants/animated";
import { motion, useReducedMotion } from "motion/react";

function HeroSection() {
  const reduceMotion = useReducedMotion();
  const { titleLine, heroText, statusText, portraitReveal } =
    createHomeAnimations(reduceMotion);

  return (
    <section className="flex flex-col py-12.5 px-5 border-b border-b-line">
      <motion.div initial="hidden" animate="visible">
        <motion.p
          variants={heroText}
          className="font-mono font-medium tracking-widest text-[10px] text-blue mb-4.5"
        >
          HELLO, I’M <span className="blue-dot">●</span>
        </motion.p>

        <h1
          aria-label="Tio Novriadi Putra"
          className="m-0 text-[clamp(63px,8.5vw,91px)] leading-[0.83] tracking-tighter font-extrabold"
        >
          {["Tio", "Novriadi", "Putra"].map((name, index) => (
            <span
              key={name}
              aria-hidden="true"
              className="block overflow-hidden py-[0.12em] my-[-0.12em]"
            >
              <motion.span
                variants={titleLine}
                custom={index}
                className={`inline-block origin-bottom-left ${index === 1 ? "text-blue" : ""}`}
              >
                {name}
              </motion.span>
            </span>
          ))}
        </h1>

        <motion.p
          variants={heroText}
          custom={{ delay: 0.4 }}
          className="text-[12px] leading-[1.7] font-bold mt-7.5 mb-3.75"
        >
          Frontend Developer <span className="text-blue px-1">×</span> Software
          Engineer <span className="text-blue px-1">×</span> AI Enthusiast
        </motion.p>

        <motion.p
          variants={heroText}
          custom={{ delay: 0.6 }}
          className="text-[13px] text-muted leading-[1.75]"
        >
          I build reliable and user-focused web and mobile experiences using
          React, React Native, and the Node.js ecosystem. With experience across
          insurance, banking, and digital products, I also explore NLP and Fuzzy
          Logic to create practical, explainable AI solutions.
        </motion.p>

        <motion.div
          variants={reveal}
          custom={{ delay: reduceMotion ? 0 : 0.85 }}
          className="flex items-center gap-7 mt-8.5"
        >
          <MotionLink
            {...linkFeedback}
            variants={workButton}
            href="/"
            className="flex items-center px-4.5 py-4 gap-4.5 bg-blue border border-blue"
          >
            <p className="font-mono text-white font-semibold text-[11px] tracking-[0.03em]">
              VIEW MY WORK
            </p>

            <motion.p
              variants={workArrow}
              transition={{ duration: 0.35, ease }}
              className="text-[18px] leading-2.5 text-white -mt-px"
            >
              →
            </motion.p>
          </MotionLink>

          <MotionLink
            {...linkFeedback}
            href="/"
            className="relative flex items-end border-b border-transparent"
          >
            <p className="font-mono font-semibold text-[11px] text-ink">
              LET&apos;S CONNECT{" "}
              <motion.span
                variants={arrowFeedback}
                className="text-[18px] leading-2.5 inline-block -rotate-45"
              >
                →
              </motion.span>
            </p>
            <motion.span
              aria-hidden="true"
              variants={connectUnderline}
              transition={{ duration: 0.35, ease }}
              className="pointer-events-none absolute -bottom-px left-0 h-px w-full origin-left bg-ink"
            />
          </MotionLink>
        </motion.div>
      </motion.div>

      <motion.div
        variants={sequence}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.8 }}
        className="static w-full mt-13.75 grid grid-cols-[145px_1fr] gap-x-5"
      >
        <motion.div
          variants={portraitReveal}
          className="bg-[linear-gradient(145deg,#dfe6f6,#becbe9)] aspect-[0.78] rounded-md overflow-hidden"
        >
          <MotionImage
            variants={portraitZoom}
            whileHover={{ scale: 1.045 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            src="/profile.JPG"
            alt="Tio Novriadi Putra"
            width={4000}
            height={5328}
            className="w-full h-full object-cover"
          />
        </motion.div>

        <motion.div variants={statusSequence}>
          <div className="relative border-t border-transparent pt-px">
            <motion.span
              aria-hidden="true"
              variants={statusRule}
              className="pointer-events-none absolute -top-px left-0 h-px w-full origin-left bg-line"
            />
            <motion.p
              variants={statusText}
              custom={0.12}
              className="font-medium text-[9px] font-mono text-muted mb-1.25 leading-normal"
            >
              BASED IN
            </motion.p>

            <motion.p
              variants={statusText}
              custom={0.24}
              className="mb-3.5 text-[11px] leading-normal"
            >
              West Jakarta, DKI Jakarta
              <br />
              Indonesia
            </motion.p>

            <motion.p
              variants={statusText}
              custom={0.36}
              className="font-medium text-[9px] font-mono text-muted mb-1.25 leading-normal"
            >
              AVAILABLE FOR
            </motion.p>

            <motion.p
              variants={statusText}
              custom={0.48}
              className="mb-3.5 text-[11px] leading-normal"
            >
              Freelance projects
              <br />
              and collaborations
            </motion.p>
          </div>

          <div className="relative border-t border-transparent">
            <motion.span
              aria-hidden="true"
              variants={statusRule}
              custom={0.55}
              className="pointer-events-none absolute -top-px left-0 h-px w-full origin-left bg-line"
            />
            <div className="grid grid-cols-2 gap-3.25 pt-3.5">
              <motion.div variants={reveal} custom={{ delay: 0.65 }}>
                <MotionLink
                  {...linkFeedback}
                  href="https://www.linkedin.com/in/tio-novriadi-putra-7293071b0/?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BrmNZuy94Ss2F7WspG5T5Eg%3D%3D"
                  target="_blank"
                  className="block"
                >
                  <p className="font-mono font-medium text-[9px] text-ink">
                    LINKEDIN{" "}
                    <motion.span
                      variants={arrowFeedback}
                      className="text-[18px] leading-2.5 inline-block -rotate-45"
                    >
                      →
                    </motion.span>
                  </p>
                </MotionLink>
              </motion.div>

              <motion.div variants={reveal} custom={{ delay: 0.75 }}>
                <MotionLink
                  {...linkFeedback}
                  href="https://github.com/TioNovriadiPutra"
                  target="_blank"
                  className="block"
                >
                  <p className="font-mono font-medium text-[9px] text-ink">
                    GITHUB{" "}
                    <motion.span
                      variants={arrowFeedback}
                      className="text-[18px] leading-2.5 inline-block -rotate-45"
                    >
                      →
                    </motion.span>
                  </p>
                </MotionLink>
              </motion.div>

              <motion.div variants={reveal} custom={{ delay: 0.85 }}>
                <MotionLink
                  {...linkFeedback}
                  href="mailto:tionvriadi@gmail.com"
                  className="block"
                >
                  <p className="font-mono font-medium text-[9px] text-ink">
                    EMAIL{" "}
                    <motion.span
                      variants={arrowFeedback}
                      className="text-[18px] leading-2.5 inline-block -rotate-45"
                    >
                      →
                    </motion.span>
                  </p>
                </MotionLink>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}

export default HeroSection;
