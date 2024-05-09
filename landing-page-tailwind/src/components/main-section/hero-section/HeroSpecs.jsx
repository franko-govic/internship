import React from "react";

const HeroSpecs = ({ content }) => {
  return (
    <div className="w-1/2 absolute bottom-3 left-0 flex gap-6 p-6">
      {content.map((content, index) => {
        return (
          <div
            key={index}
            className={
              index === 1 ? "mx-2 px-4 border-r-2 border-l-2 border-white" : ""
            }
          >
            <div className="flex items-end">
              <p className="text-3xl font-bold">{content.value}</p>
              <p>{content.unit}</p>
            </div>
            <p>{content.spec}</p>
          </div>
        );
      })}
    </div>
  );
};

export default HeroSpecs;
