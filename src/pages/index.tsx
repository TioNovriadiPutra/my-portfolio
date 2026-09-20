import { MotionConfig } from "motion/react";
import { ease } from "@/animations/home";
import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import SpecialitySection from "@/components/SpecialitySection";
import ExperienceSection from "@/components/ExperienceSection";
import PortfolioSection from "@/components/PortfolioSection";
import SkillSection from "@/components/SkillSection";
import EducationSection from "@/components/EducationSection";

function Home() {
  return (
    <MotionConfig reducedMotion="user" transition={{ duration: 1.15, ease }}>
      <div className="w-dvw h-dvh relative">
        <Navbar />

        <HeroSection />

        <SpecialitySection />

        <ExperienceSection />

        <PortfolioSection />

        <SkillSection />

        <EducationSection />
      </div>
    </MotionConfig>
  );
}

export default Home;
