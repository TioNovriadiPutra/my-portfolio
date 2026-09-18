import Image from "next/image";
import Link from "next/link";
import {
  motion,
  MotionConfig,
  stagger,
  useReducedMotion,
  type Variants,
} from "motion/react";

const MotionLink = motion.create(Link);
const MotionImage = motion.create(Image);
const ease = [0.22, 1, 0.36, 1] as const;

type RevealOptions = { delay?: number };

const reveal: Variants = {
  hidden: { opacity: 0, y: 18 },
  visible: ({ delay = 0 }: RevealOptions = {}) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 1.15, delay, ease },
  }),
};

const sequence: Variants = {
  hidden: {},
  visible: { transition: { delayChildren: stagger(0.22) } },
};

const statusSequence: Variants = {
  hidden: {},
  visible: {},
};

const statusRule: Variants = {
  hidden: { scaleX: 0, opacity: 0 },
  visible: (delay = 0) => ({
    scaleX: 1,
    opacity: 1,
    transition: { duration: 0.85, delay, ease },
  }),
};

const titleLine: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 1.4, delay: 0.16 + index * 0.2, ease },
  }),
};

const arrowFeedback: Variants = {
  rest: { x: 0, y: 0 },
  hover: { x: 3, y: -3 },
  pressed: { x: 1, y: -1 },
};

const linkFeedback = {
  initial: "rest",
  animate: "rest",
  whileHover: "hover",
  whileFocus: "hover",
  whileTap: "pressed",
  transition: { duration: 0.3, ease },
};

function Home() {
  const reduceMotion = useReducedMotion();
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
  // Clip-path is not automatically disabled by MotionConfig's reduced-motion policy.
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

  return (
    <MotionConfig reducedMotion="user" transition={{ duration: 1.15, ease }}>
      <div className="w-dvw h-dvh relative">
        {/* Navbar */}
        <div className="sticky top-0 z-20 flex items-center justify-between h-16.25 px-5 border-b border-b-line bg-[color-mix(in_srgb,var(--paper)_91%,transparent)] backdrop-blur-[14px]">
          <MotionLink
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            whileHover={{ opacity: 0.65 }}
            href="/"
            className="font-extrabold text-[19px]"
          >
            TNP<span className="text-blue">.</span>
          </MotionLink>

          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            whileHover={{ scale: 1.025 }}
            whileTap={{ scale: 0.96 }}
            transition={{ duration: 0.2 }}
            type="button"
            className="flex items-center gap-1 cursor-pointer"
          >
            <div className="w-3.25 h-px bg-ink"></div>
            <div className="w-3.25 h-px bg-ink"></div>
            <div className="w-3.25 h-px bg-ink"></div>
            <p className="font-mono text-ink font-medium text-xs ml-1.25">
              MENU
            </p>
          </motion.button>
        </div>

        {/* Hero Section */}
        <section className="flex flex-col pt-12.5 pb-21.25 px-5 border-b border-b-line">
          <motion.div initial="hidden" animate="visible">
            <motion.p
              variants={reveal}
              className="font-mono font-medium tracking-widest text-[10px] text-blue mb-4.5"
            >
              HELLO, I’M <span className="blue-dot">●</span>
            </motion.p>

            <h1 className="m-0 text-[clamp(63px,8.5vw,91px)] leading-[0.83] tracking-tighter font-extrabold">
              <motion.span
                variants={titleLine}
                custom={0}
                className="inline-block"
              >
                Tio
              </motion.span>
              <br />
              <motion.span
                variants={titleLine}
                custom={1}
                className="inline-block text-blue"
              >
                Novriadi
              </motion.span>
              <br />
              <motion.span
                variants={titleLine}
                custom={2}
                className="inline-block"
              >
                Putra
              </motion.span>
            </h1>

            <motion.p
              variants={reveal}
              custom={{ delay: 0.65 }}
              className="text-[12px] leading-[1.7] font-bold mt-7.5 mb-3.75"
            >
              Frontend Developer <span className="text-blue px-1">×</span>{" "}
              Software Engineer <span className="text-blue px-1">×</span> AI
              Enthusiast
            </motion.p>

            <motion.p
              variants={reveal}
              custom={{ delay: 0.8 }}
              className="text-[13px] text-muted leading-[1.75]"
            >
              I build reliable and user-focused web and mobile experiences using
              React, React Native, and the Node.js ecosystem. With experience
              across insurance, banking, and digital products, I also explore
              NLP and Fuzzy Logic to create practical, explainable AI solutions.
            </motion.p>

            <motion.div
              variants={reveal}
              custom={{ delay: 0.95 }}
              className="flex items-center gap-7 mt-8.5"
            >
              <MotionLink
                {...linkFeedback}
                variants={{
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
                }}
                href="/"
                className="flex items-center px-4.5 py-4 gap-4.5 bg-blue border border-blue"
              >
                <p className="font-mono text-white font-semibold text-[11px] tracking-[0.03em]">
                  VIEW MY WORK
                </p>

                <motion.p
                  variants={{
                    rest: { x: 0 },
                    hover: { x: 8 },
                    pressed: { x: 4 },
                  }}
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
                  variants={{
                    rest: { scaleX: 0, opacity: 0 },
                    hover: { scaleX: 1, opacity: 1 },
                    pressed: { scaleX: 1, opacity: 1 },
                  }}
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
                variants={{
                  hidden: { scale: 1.12 },
                  visible: { scale: 1, transition: { duration: 1.6, ease } },
                }}
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

        {/*  */}
      </div>
    </MotionConfig>
  );
}

export default Home;
