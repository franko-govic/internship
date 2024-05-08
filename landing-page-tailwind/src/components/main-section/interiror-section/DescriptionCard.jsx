import { RiArrowRightLine } from "@remixicon/react";
import React from "react";

const DescriptionCard = ({ title, info }) => {
  return (
    <div className="text-white bg-neutral-900	w-full md:w-3/5 flex flex-col justify-between p-8 rounded-lg">
      <p className="text-lg">{title}</p>
      <div className="flex flex-col gap-5 text-md">
        <p>{info}</p>
        <div className="flex justify-between border-b-2 pb-3 border-white w-2/3">
          <p>Learn more</p>
          <RiArrowRightLine />
        </div>
      </div>
    </div>
  );
};

export default DescriptionCard;
