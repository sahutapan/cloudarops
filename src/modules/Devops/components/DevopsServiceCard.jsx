import React from "react";
import TechCard from "../../Home/components/TechCard";

const CloudManagementCard = ({ number, title, description, logoImage }) => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between p-6 bg-white rounded-lg shadow-md">
      <div className="flex items-start mb-4 md:mb-0 md:mr-6">
        <span className="text-6xl font-bold text-gray-200 mr-4">{number}</span>
        <div>
          <h2 className="text-xl font-bold mb-2">{title}</h2>
          <p className="text-gray-600">{description}</p>
        </div>
      </div>
      <TechCard src={logoImage} />
    </div>
  );
};

export default CloudManagementCard;
