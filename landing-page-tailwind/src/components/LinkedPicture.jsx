import { RiArrowRightLine } from "@remixicon/react";

const LinkedPicture = ({ data }) => {
  return (
    <div className="flex flex-col flex-1 gap-3">
      <div className="flex justify-between items-center">
        <button className="bg-neutral-900	text-white text-xs px-4 py-2 rounded-lg">
          {data.btnTxt}
        </button>
        <RiArrowRightLine />
      </div>
      <img className="rounded-lg" src={data.link} alt={data.alt} />
    </div>
  );
};

export default LinkedPicture;
