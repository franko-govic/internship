import content from "../../assets/specContent.json";
import Accordion from "../commons/Accordion";
import SpecificationBanner from "../commons/SpecificationBanner";

const SpecificationSection = () => {
  return (
    <div className=" ">
      <SpecificationBanner title={content[1].title} info={content[1].info} />
      <Accordion />
    </div>
  );
};

export default SpecificationSection;
