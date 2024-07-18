import React from "react";

const CardAbout = ({ name, title, location, imageSrc }) => {
  return (
    <div className="bg-white w-56 shadow-2xl mt-6 rounded-lg overflow-hidden">
      <img className="w-full h-56 object-cover" src={imageSrc} alt={name} />
      <div className="p-4">
        <h3 className="text-xl font-bold">{name}</h3>
        <p className="text-orange-500 font-semibold">{title}</p>
        <p className="text-gray-600">{location}</p>
      </div>
    </div>
  );
};

export default CardAbout;
