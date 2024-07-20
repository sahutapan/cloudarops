import React from "react";
import Button from "../../../components/Button";
import DoubleRightArrowIcon from "../../../assets/icon/DoubleRightArrow";

const DevopsBanner = () => {
  return (
    <div className="mt-5 relative flex flex-col md:flex-row flex-wrap items-center justify-center h-auto md:h-[500px] bg-gray-800 px-6 md:px-12 lg:px-24 overflow-hidden">
      <div className="flex flex-col items-center md:items-start md:justify-center gap-9 text-center md:text-left w-full md:w-3/5 lg:w-1/2 xl:w-2/5">
        <div className="text-white">
          <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold leading-[1.4em]">
            Are you a startup struggling to keep pace with rapid software
            delivery?
          </h1>
          <p className="text-[16px] md:text-[18px] lg:text-[20px] font-medium leading-[1.4em] mt-7">
            Accelerate your R&D with a dedicated DevOps team that ensures your
            infrastructure follows the best practices.
          </p>
          <div className="flex justify-center md:justify-start">
            <Button
              size={"large"}
              variant="rounded"
              className="mt-7"
              icon={DoubleRightArrowIcon}
            >
              Schedule a call
            </Button>
          </div>
        </div>
      </div>
      <div className="mt-7 md:mt-0 flex justify-center w-full md:w-2/5 lg:w-1/2 xl:w-3/5">
        <div className="w-full h-auto">
          <iframe
            className="w-full h-[315px] md:h-[400px] lg:h-[450px]"
            src="https://www.youtube.com/embed/9Hv8dPngegQ?si=w6DrmLyPO6faO2LA"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default DevopsBanner;
