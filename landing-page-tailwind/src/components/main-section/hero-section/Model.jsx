import React from "react";

const Model = ({ content, styling }) => {
  return (
    <div className={styling}>
      {content.map((data, index) => {
        return (
          <div
            key={index}
            className="bg-white bg-opacity-40 rounded-lg p-5 flex flex-col gap-6"
          >
            <p className="font-bold">{data.title}</p>
            <p>{data.info}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Model;
