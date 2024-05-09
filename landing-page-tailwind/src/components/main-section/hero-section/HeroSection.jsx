import React from "react";
import heroContent from "../../../assets/heroContent.json";
import HeroSpecs from "./HeroSpecs";
import MainTitle from "./MainTitle";
import Model from "./Model";

const HeroSection = () => {
  return (
    <div
      className="bg-cover bg-center h-screen text-white relative"
      style={{
        backgroundImage: `url('https://cdn.motor1.com/images/mgl/rKoKkY/s4/2022-mitsubishi-airtrek.jpg')`,
      }}
    >
      <MainTitle
        content={heroContent.mainContent}
        styling="absolute top-40 left-10 w-2/5"
      />
      <HeroSpecs content={heroContent.specs} />
      <Model
        content={heroContent.model}
        styling="hidden md:absolute right-6 bottom-6 w-2/6"
      />
    </div>
  );
};

export default HeroSection;
