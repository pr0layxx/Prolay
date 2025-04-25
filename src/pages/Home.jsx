import React from "react";
import HeroSection from "../components/HeroSection";
import About from "../pages/About";
import SkillsSection from "../components/SkillsSection";
import ProjectsSection from "../components/ProjectsSection";
function Home() {
  return (
    <div>
      <HeroSection />
      {/* Smooth gradient transition between sections */}

      <About />
      <SkillsSection />
      <ProjectsSection/>
    </div>
  );
}

export default Home;
