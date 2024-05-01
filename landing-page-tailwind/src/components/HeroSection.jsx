import React from "react";
import Navbar from "./Navbar/";

const HeroSection = () => {
  return (
    <div
      className="bg-cover bg-center h-screen"
      style={{
        backgroundImage: `url('https://cdn.motor1.com/images/mgl/rKoKkY/s4/2022-mitsubishi-airtrek.jpg')`,
      }}
    >
      <Navbar />
    </div>
  );
};

export default HeroSection;
