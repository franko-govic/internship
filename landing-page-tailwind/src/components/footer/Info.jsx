import React from "react";

const Info = ({ title, infoContent }) => {
  return (
    <div className="flex justify-between gap-20 p-6">
      <p className="flex-1">{title}</p>
      <div className="flex flex-wrap gap-5 justify-between md:gap-20">
        {infoContent.map((data, index) => {
          return (
            <div key={index} className="flex flex-col gap-3 w-44">
              <p>{data.name}</p>
              <div className="flex flex-col gap-3">
                {data.sublinks.map((sublink, subIndex) => {
                  return <p key={subIndex}>{sublink}</p>;
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Info;
