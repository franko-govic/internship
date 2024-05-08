import { RiArrowRightUpLine } from "@remixicon/react";
import navContent from "../../assets/navigation.json";

const Navigation = () => {
  return (
    <div className="flex flex-col md:flex-row  gap-5 ">
      {navContent.map((data, index) => {
        return (
          <div
            key={index}
            className="w-fit md:h-96 md:w-1/3 flex flex-col justify-between p-5 gap-5 border border-gray-300	rounded-lg shadow-lg hover:bg-neutral-900 hover:text-white cursor-pointer"
          >
            <div className="flex  justify-between items-center">
              <p className="text-xl">{data.title}</p>
              <span className="flex justify-center items-center bg-neutral-900 text-white  border border-gray-400 p-1 rounded-full cursor-pointer">
                <RiArrowRightUpLine />
              </span>
            </div>
            <div className=" h-40">{data.desc}</div>
          </div>
        );
      })}
    </div>
  );
};

export default Navigation;
