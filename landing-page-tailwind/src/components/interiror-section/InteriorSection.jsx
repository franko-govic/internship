import React from "react";
import interriorContet from "../../assets/interiorContent.json";
import content from "../../assets/specContent.json";
import DescriptionCard from "./DescriptionCard/";
import SpecificationBanner from "../SpecificationBanner/";

const InteriorSection = () => {
  return (
    <div className="flex flex-col gap-5 m-6">
      <div className="h-96 flex gap-5">
        <img
          src={interriorContet[0].imgUrl}
          alt=""
          className="w-3/5 rounded-lg"
        />
        <DescriptionCard
          title={interriorContet[0].title}
          info={interriorContet[0].info}
        />
      </div>
      <div className="h-96 flex gap-5">
        <DescriptionCard
          title={interriorContet[1].title}
          info={interriorContet[1].info}
        />
        <img
          src={interriorContet[1].imgUrl}
          alt=""
          className="w-3/5 rounded-lg"
        />
      </div>
      <SpecificationBanner title={content[2].title} info={content[2].info} />
    </div>
  );
};

export default InteriorSection;
