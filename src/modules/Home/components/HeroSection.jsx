const HeroSection = () => {
  return (
    <div className="flex justify-between items-center">
      <div className=" flex gap-5 flex-col ml-11">
        <h1 className="text-[76px] font-semibold leading-[1.2]">
          DevOps done right!
        </h1>
        <span className="bg-[linear-gradient(to_right,_#0097B2,_#57D9D9)] h-2 w-8"></span>
        <h3 className="text-[28.3px] font-medium">
          Say goodbye to DevOps workload and say hello to Cloudarops DevOps
        </h3>
      </div>
      <img
        className=" max-w-[700px]"
        src="https://iamops.io/wp-content/uploads/2024/03/Final-home-page-mockup.svg"
        alt="Cloudarops"
      />
      {/* #Todo the url need to change*/}
    </div>
  );
};

export default HeroSection;
