import React from "react";
import videoFile from "../../assets/Mitsubishi Airtrek electric SUV - official video.mp4";

const SocialMediaSection = () => {
  return (
    <div className="relative flex flex-col gap-8 m-6">
      <video
        src={videoFile}
        controls
        autoPlay
        className="w-full rounded-lg"
      ></video>
      <p className="absolute top-5 left-5 text-white text-sm font-bold">
        Show Reel
      </p>
      <div className="w-full h-60 rounded-lg text-white bg-neutral-900 flex flex-col justify-between p-10">
        <p className="text-6xl">HELO@AIRTRECK.CO</p>
        <div className="flex justify-between items-center text-xs">
          <button className="bg-white text-neutral-900 py-2 px-5 rounded-lg">
            Order Now
          </button>
          <div className="flex gap-5">
            <p className="cursor-pointer"> FACEBOOK</p>
            <p className="cursor-pointer"> YOUTUBE</p>
            <p className="cursor-pointer"> INSTAGRAM</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SocialMediaSection;
