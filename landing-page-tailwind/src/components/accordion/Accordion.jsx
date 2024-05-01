import React, { useState } from "react";
import data from "./accordion.json";
import {
  RiAddCircleFill,
  RiAddCircleLine,
  RiAddLargeLine,
  RiAddLine,
  RiArrowRightDownLine,
  RiArrowRightLine,
} from "@remixicon/react";

const Accordion = () => {
  const [selected, setSelected] = useState(null);

  const handleAccordionItem = (getSelectedId) => {
    setSelected(selected === getSelectedId ? null : getSelectedId);
  };
  console.log(selected);
  return (
    <div className="flex flex-col py-5 gap-5">
      {data && data.length > 0 ? (
        data.map((item) => (
          <div key={item.id}>
            <div>
              <div
                onClick={() => handleAccordionItem(item.id)}
                className="flex items-center justify-between"
              >
                <div className="flex justify-center items-center gap-3">
                  <span className="flex justify-center items-center border border-black w-fit p-2 rounded-full cursor-pointer">
                    <RiAddLine />
                  </span>
                  <p className="text-xl">{`${item.value}${item.unit}`}</p>
                </div>
                <div className="flex ">
                  <p>{item.title}</p>
                  {selected === item.id ? (
                    <RiArrowRightDownLine className="cursor-pointer" />
                  ) : (
                    <RiArrowRightLine className="cursor-pointer" />
                  )}
                </div>
              </div>
              {selected === item.id ? (
                <div className="flex justify-end items-end">
                  <p className="w-1/3 align-bottom">{item.description}</p>
                  <img
                    className="w-1/3 rounded-lg"
                    src={item.imgUrl}
                    alt={item.imgAlt}
                  />
                </div>
              ) : null}
            </div>
          </div>
        ))
      ) : (
        <p>No data available</p>
      )}
    </div>
  );
};

export default Accordion;
