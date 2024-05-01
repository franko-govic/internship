import content from "../../assets/specContent.json";
import Accordion from "../accordion/Accordion";
import SpecificationBanner from "../SpecificationBanner";

const SpecificationSection = () => {
  return (
    <div className="m-6">
      <SpecificationBanner title={content[1].title} info={content[1].info} />
      <Accordion />
    </div>
  );
};

export default SpecificationSection;
