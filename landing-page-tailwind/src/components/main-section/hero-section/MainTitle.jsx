import React from "react";

const MainTitle = ({ content, styling }) => {
  return (
    <div className={styling}>
      {content.map((data, index) => {
        return (
          <div key={index} className="flex flex-col gap-5 ">
            <h1 className="text-6xl font-bold">{data.mainTitle}</h1>
            <p className="hidden lg:block">{data.mainInfo}</p>
            <button className="hidden lg:block text-left text-neutral-900 bg-white w-fit px-4 py-1 rounded-lg">
              {data.btnTxt}
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default MainTitle;
