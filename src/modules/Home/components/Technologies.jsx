import TechCard from "./TechCard";

import TechImg1 from "../../../assets/images/technologies-1-1024x435.png";
import TechImg2 from "../../../assets/images/technologies-2-1024x435.png";
import TechImg3 from "../../../assets/images/technologies-3-1024x435.png";
import TechImg4 from "../../../assets/images/technologies-4-1024x435.png";
const Technologies = () => {
  return (
    <div className=" bg-[#ffffff] pb-9 md:py-6">
      <h2 className="text-4xl font-bold leading-relaxed text-center mt-5 ">
        <span className="text-blue-500">Technologies</span>
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 px-10  gap-y-8 md:px-40  justify-center pt-4 pb-4 ">
        <div className="flex justify-center items-center ">
          <TechCard text={"Cloud Platforms"} src={TechImg4} />
        </div>
        <div className="flex justify-center items-center">
          <TechCard text={"CI/CD"} src={TechImg1} />
        </div>
        <div className="flex justify-center items-center">
          <TechCard text={"IaC and Automation"} src={TechImg3} />
        </div>
        <div className="flex justify-center items-center">
          <TechCard text={"Monitoring"} src={TechImg2} />
        </div>
      </div>
    </div>
  );
};
export default Technologies;
