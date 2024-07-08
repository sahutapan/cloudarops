import TechImg4 from "../../../assets/images/herops.png";
const HeroSection = () => {
  return (
    <div className="  flex flex-col md:flex-row justify-center md:justify-between items-center p-4  md:p-0 ">
      <div className="flex flex-col gap-5 ml-0 md:ml-11 text-center md:text-left">
        <h1 className="text-4xl text-white md:text-[76px] font-semibold leading-[1.2] ">
          <span className="text-blue-500">DevOps</span> done right!
        </h1>
        <span className="bg-[linear-gradient(to_right,_#0097B2,_#57D9D9)] h-2 w-8 mx-auto md:mx-0"></span>
        <h3 className="text-lg text-white md:text-[28.3px] font-medium">
          Say goodbye to DevOps workload and say hello to Cloudarops DevOps
        </h3>
      </div>
      <img
        className="w-full md:max-w-[700px]  md:mt-0"
        src={TechImg4}
        alt="Cloudarops"
      />
      {/* #Todo the url needs to change*/}
    </div>
  );
};

export default HeroSection;
