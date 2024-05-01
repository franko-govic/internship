import React from "react";
import stylingContent from "../../assets/stylingContent.json";
import SpecificationBanner from "../SpecificationBanner";
import content from "../../assets/specContent.json";

export const StylingSection = () => {
  return (
    <div className="m-6 py-5">
      <img
        src="https://cdn.motor1.com/images/mgl/NGZG2y/s4/2022-mitsubishi-airtrek.webp"
        alt=""
        className="object-cover w-full rounded-lg"
      />
      <div className="flex gap-7 my-10 h-44">
        {stylingContent.map((content, index) => {
          return (
            <div className="flex flex-col justify-between">
              <div className="flex flex-col">
                <p className="border-b-2 border-black">{content.id}</p>
                <p className="font-bold">{content.title}</p>
              </div>
              <p>{content.info}</p>
            </div>
          );
        })}
      </div>
      <SpecificationBanner title={content[3].title} info={content[3].info} />
    </div>
  );
};

export default StylingSection;
