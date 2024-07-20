import React from "react";

const Hero = () => {
  return (
    <div className="bg-white p-10 max-w-5xl md:my-14 mx-auto">
      <div className="relative flex flex-col md:flex-row items-start mb-4 ">
        {/* <div className=" md:absolute md:bottom-[2%] md:left-[-3%]   text-9xl text-blue-200 md:mr-4">
          “
        </div> */}
        <p className="text-black text-center z-10 text-2xl font-light tracking-wider  md:text-left">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque nobis
          ipsam corrupti dicta alias hic, rem iusto voluptatum facere aliquam
          eos impedit consectetur iure, esse deserunt consequatur enim
          necessitatibus provident?
        </p>
      </div>
      <p className="text-black text-center md:text-left text-2xl mb-4 font-light tracking-wider">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed facere est
        ea veritatis quis modi iste? Sequi, fugiat.
      </p>
      <p className="font-bold text-lg md:text-left text-center text-black ">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto quos
        error sunt veniam tenetur.
      </p>
    </div>
  );
};

export default Hero;
