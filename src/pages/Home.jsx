import React from "react";
import HeroSection from "../components/HeroSection";
import About from "../pages/About";
import SkillsSection from "../components/SkillsSection";
import ProjectsSection from "../components/ProjectsSection";
import Contact from "../components/Contact";
function Home() {
  console.log("home is rendering");
  
  return (
    <div>
      <HeroSection />
      {/* Smooth gradient transition between sections */}

      <About />
      <SkillsSection />
      <ProjectsSection />
      <Contact />
    </div>
  );
}

export default Home;
