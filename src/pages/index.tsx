import { MotionConfig } from "motion/react";
import { ease } from "@/animations/home";
import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import SpecialitySection from "@/components/SpecialitySection";
import ExperienceSection from "@/components/ExperienceSection";

function Home() {
  return (
    <MotionConfig reducedMotion="user" transition={{ duration: 1.15, ease }}>
      <div className="w-dvw h-dvh relative">
        <Navbar />

        <HeroSection />

        <SpecialitySection />

        <ExperienceSection />
      </div>
    </MotionConfig>
  );
}

export default Home;
