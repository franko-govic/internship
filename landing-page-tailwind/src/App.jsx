import React from "react";
import HeroSection from "./components/HeroSection/";
import DrivingDynmaics from "./components/DrivingDynamics";
import SpecificationSection from "./components/specification-section/SpecificationSection";
import Navigation from "./components/Navigation";
import InteriorSection from "./components/interiror-section/InteriorSection";
import StylingSection from "./components/styling-section/StylingSection";
import SocialMediaSection from "./components/social-media-section/SocialMediaSection";

function App() {
  return (
    <>
      <HeroSection />
      <DrivingDynmaics />
      <SpecificationSection />
      <InteriorSection />
      <StylingSection />
      <Navigation />
      <SocialMediaSection />
    </>
  );
}

export default App;
