import React from "react";
import { ReactTyped } from "react-typed";

const Banner = ({ mainText, secondText }) => {
  return (
    <div className=" mt-5 relative flex items-center justify-center h-64 md:h-96 bg-gray-800 p-4 overflow-hidden">
      <div className="absolute bottom-[-30%] left-[-8%] w-40 h-40 md:w-56 md:h-56 bg-cyan-600 rounded-full"></div>
      <div className="absolute bottom-[35%] left-[1%] w-6 h-6 md:w-8 md:h-8 bg-cyan-300 rounded-full"></div>
      <div className="absolute top-[-30%] right-[-8%] w-40 h-40 md:w-56 md:h-56 bg-cyan-600 rounded-full"></div>
      <div className="absolute top-[35%] right-[1%] w-6 h-6 md:w-8 md:h-8 bg-cyan-300 rounded-full "></div>
      <div className="flex item-center justify-center">
        <h1 className="text-2xl md:text-5xl font-bold text-white text-center">
          {mainText}{" "}
          <p className="text-cyan-400">
            <ReactTyped strings={[secondText]} typeSpeed={40} backSpeed={50} />
          </p>
        </h1>
      </div>
    </div>
  );
};
export default Banner;
