import {
  RiFacebookLine,
  RiInstagramLine,
  RiYoutubeLine,
} from "@remixicon/react";
import React from "react";

const SocialNav = ({ navContent }) => {
  return (
    <div className="flex justify-between p-6">
      <div className="flex gap-1">
        <div className="flex items-center justify-center border border-black p-0.5 rounded-full">
          <RiInstagramLine />
        </div>
        <div className="flex items-center justify-center border border-black p-1 rounded-full">
          <RiFacebookLine />
        </div>
        <div className="flex items-center justify-center border border-black p-1 rounded-full">
          <RiYoutubeLine />
        </div>
      </div>

      <div className="flex gap-5">
        {navContent.map((data, index) => {
          return <p key={index}>{data}</p>;
        })}
      </div>
    </div>
  );
};

export default SocialNav;
