import React from "react";
import HeroSection from "./hero-section/HeroSection/";
import DrivingDynamics from "./DrivingDynamics";
import SpecificationSection from "./SpecificationSection";
import InteriorSection from "./interiror-section/InteriorSection";
import StylingSection from "./StylingSection";
import Navigation from "./Navigation";
import SocialMediaSection from "./SocialMediaSection";

const MainSection = () => {
  return (
    <div>
      <HeroSection />
      <div className="p-6 flex flex-col gap-10">
        <DrivingDynamics />
        <SpecificationSection />
        <InteriorSection />
        <StylingSection />
        <Navigation />
        <SocialMediaSection />
      </div>
    </div>
  );
};

export default MainSection;
