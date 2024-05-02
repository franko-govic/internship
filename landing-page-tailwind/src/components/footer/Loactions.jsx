import React from "react";

const Loactions = ({ locContent }) => {
  return (
    <div className="flex justify-between gap-10 p-6">
      {locContent.map((data, index) => {
        return (
          <div key={index} className="flex flex-col gap-3">
            <p className="font-bold">{`${data.flag} ${data.country}`}</p>
            <p>{data.adress}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Loactions;
