import content from "../../assets/specContent.json";
import pictures from "../../assets/linkedPicture.json";
import LinkedPicture from "./LinkedPicture";
import SpecificationBanner from "../commons/SpecificationBanner";

const DrivingDynmaics = () => {
  return (
    <div className=" flex flex-col gap-5">
      <SpecificationBanner title={content[0].title} info={content[0].info} />
      <div className="flex gap-3 ">
        {pictures.map((data, index) => {
          return <LinkedPicture key={index} data={data} />;
        })}
      </div>
    </div>
  );
};

export default DrivingDynmaics;
