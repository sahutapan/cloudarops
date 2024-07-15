import TechImg4 from "../../../assets/images/herops.png";
const HeroSection = () => {
  return (
    <div className="relative h-screen flex flex-col md:flex-row justify-center md:justify-between items-center p-4 md:p-0">
      <div className="relative flex flex-col gap-5 text-center md:text-left md:ml-11">
        <h1 className="absolute  top-[-150%] md:bottom-auto left-[10%] md:left-0 text-4xl text-black md:text-[76px] font-semibold leading-[1.2]">
          <span className="text-blue-500">DevOps</span> done right!
        </h1>
        <span className="bg-gradient-to-r from-[#0097B2] to-[#57D9D9] h-2 w-8 mx-auto md:mx-0"></span>
        <h3 className="text-lg md:text-[28.3px] font-medium">
          Say goodbye to DevOps workload and say hello to Cloudarops DevOps
        </h3>
      </div>
      <img
        className="w-full md:max-w-[700px] md:mt-0"
        src={TechImg4}
        alt="Cloudarops"
      />
    </div>
  );
};

export default HeroSection;
