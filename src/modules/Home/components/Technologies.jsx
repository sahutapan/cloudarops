import TechCard from "./TechCard";

import TechImg1 from "../../../assets/images/technologies-1-1024x435.png";
import TechImg2 from "../../../assets/images/technologies-2-1024x435.png";
import TechImg3 from "../../../assets/images/technologies-3-1024x435.png";
import TechImg4 from "../../../assets/images/technologies-4-1024x435.png";
const Technologies = () => {
  return (
    <>
      <h2 className="text-4xl font-bold leading-relaxed text-center mt-5">
        <span className="text-[#F56236]">Technologies</span> we work with
      </h2>
      <div className="flex bg-[#F4F4F4] flex-wrap px-40 gap-6 justify-center">
        <TechCard text={"Cloud Platforms"} src={TechImg4} />
        <TechCard text={"CI/CD"} src={TechImg1} />
        <TechCard text={"IaC and Automation"} src={TechImg3} />
        <TechCard text={"Monitoring"} src={TechImg2} />
      </div>
    </>
  );
};
export default Technologies;
