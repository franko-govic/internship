import React from "react";

const HeroSpecs = ({ content }) => {
  return (
    <div className="w-1/2 absolute bottom-3 left-0 flex gap-5 p-6">
      {content.map((content, index) => {
        return (
          <div
            key={index}
            style={
              index === 1
                ? {
                    marginRight: "50px",
                    marginLeft: "50px",
                    paddingRight: "50px",
                    paddingLeft: "50px",
                    borderRight: "2px solid white",
                    borderLeft: "2px solid white",
                  }
                : {}
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
