import { ease } from "@/animations/home";
import { MotionLink } from "@/constants/animated";
import { navMenu } from "@/constants/home";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  const reduceMotion = useReducedMotion();

  useEffect(() => {
    if (!isMenuOpen) return;

    function handleClickOutside(event: PointerEvent) {
      if (!(event.target instanceof Node)) return;

      if (
        !menuRef.current?.contains(event.target) &&
        !menuButtonRef.current?.contains(event.target)
      ) {
        setIsMenuOpen(false);
      }
    }

    function handleEscape(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setIsMenuOpen(false);
        menuButtonRef.current?.focus();
      }
    }

    document.addEventListener("pointerdown", handleClickOutside);
    document.addEventListener("keydown", handleEscape);
    return () => {
      document.removeEventListener("pointerdown", handleClickOutside);
      document.removeEventListener("keydown", handleEscape);
    };
  }, [isMenuOpen]);

  return (
    <div className="sticky top-0 z-20">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-paper/91 backdrop-blur-[14px]"
      />

      <div className="relative flex items-center justify-between h-16.25 px-5 border-b border-b-line">
        <MotionLink
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          whileHover={{ opacity: 0.65 }}
          href="/"
          className="font-extrabold text-[19px] text-ink"
        >
          TNP<span className="text-blue">.</span>
        </MotionLink>

        <motion.button
          ref={menuButtonRef}
          onClick={() => setIsMenuOpen((open) => !open)}
          aria-expanded={isMenuOpen}
          aria-controls="navbar-menu"
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
          <p className="font-mono text-ink font-medium text-xs ml-1.25">MENU</p>
        </motion.button>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            ref={menuRef}
            id="navbar-menu"
            initial={{ opacity: 0, y: reduceMotion ? 0 : -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: reduceMotion ? 0 : -8 }}
            transition={{ duration: reduceMotion ? 0 : 0.2, ease }}
            className="absolute left-0 right-0 top-16 flex flex-col pt-3.5 pb-5 px-5 bg-paper/91 backdrop-blur-[14px] border-b border-b-line"
          >
            {navMenu.map((item, index) => (
              <Link
                key={index.toString()}
                href={`#${item.toLowerCase()}`}
                onClick={() => setIsMenuOpen(false)}
                className="py-2.75 border-b border-b-line text-sm text-ink"
              >
                {item}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default Navbar;
