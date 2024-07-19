import React from "react";

const Card = ({ title, imageUrl, description, buttonText, buttonUrl }) => {
  return (
    <div className="bg-white shadow-2xl rounded-xl overflow-hidden">
      <img className="w-full h-48 object-cover" src={imageUrl} alt={title} />
      <div className="p-6 ">
        <p className="text-gray-700 mb-4">{description}</p>
        <div className="text-right py-5">
          <a
            href={buttonUrl}
            className=" bg-blue-500 text-white py-2 px-4 rounded-full"
          >
            {buttonText}
          </a>
        </div>
      </div>
    </div>
  );
};

export default Card;
