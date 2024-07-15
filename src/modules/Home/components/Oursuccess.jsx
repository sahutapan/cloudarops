import React from "react";
const Oursuccess = () => {
  return (
    <div className=" container mx-auto py-12 px-4 md:py-28 sm:px-6 lg:px-8">
      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-4 text-black">
        Our <span className="text-blue-500">success</span> stories
      </h2>
      <p className="text-center mb-8 text-base sm:text-lg">
        Here’s how we have helped our clients to overcome the DevOps challenges
      </p>
      <div className=" grid grid-cols-1 md:grid-cols-3 px-10  gap-10 md:px-40  justify-center pt-12 pb-12">
        <div className=" bg-white rounded-xl shadow-2xl p-6 flex flex-col items-center text-center">
          <h3 className="text-lg sm:text-xl font-semibold mb-4">
            Complete infrastructure in{" "}
            <span className="font-bold text-blue-500">AWS</span>
          </h3>

          <p className="text-gray-700 mb-6 text-sm sm:text-base md:pt-12">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum alias
            et harum neque nisi aliquam impedit deserunt? Est, nesciunt debitis
            mollitia similique dolorem nihil tenetur, error inventore porro
            magnam cum.
          </p>
          <a href="#" className="bg-blue-500 text-white py-2 px-4 rounded-full">
            Read More
          </a>
        </div>
        <div className="bg-white rounded-lg shadow-2xl p-6 flex flex-col items-center text-center">
          <h3 className="text-lg sm:text-xl font-semibold mb-4">
            Migration from{" "}
            <span className="font-bold text-blue-500">EC2 to EKS</span>
          </h3>
          {/* <img
            src="/path/to/eks-image.png"
            alt="EC2 to EKS"
            className="mb-4 w-16 h-16"
          /> */}
          <p className="text-gray-700 mb-6 text-sm md:pt-12 sm:text-base">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum alias
            et harum neque nisi aliquam impedit deserunt? Est, nesciunt debitis
            mollitia similique dolorem nihil tenetur, error inventore porro
            magnam cum.
          </p>
          <a href="#" className="bg-blue-500 text-white py-2 px-4 rounded-full">
            Read More
          </a>
        </div>
        <div className="bg-white rounded-lg shadow-2xl p-6 flex flex-col items-center text-center">
          <h3 className="text-lg sm:text-xl font-semibold mb-4">
            Migration from{" "}
            <span className="font-bold text-blue-500">Heroku to GCP</span>
          </h3>
          {/* <img
            src="/path/to/gcp-image.png"
            alt="Heroku to GCP"
            className="mb-4 w-16 h-16"
          /> */}
          <p className="text-gray-700 mb-6 md:pt-12 text-sm sm:text-base">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum alias
            et harum neque nisi aliquam impedit deserunt? Est, nesciunt debitis
            mollitia similique dolorem nihil tenetur, error inventore porro
            magnam cum.
          </p>
          <a href="#" className="bg-blue-500 text-white py-2 px-4 rounded-full">
            Read More
          </a>
        </div>
      </div>
    </div>
  );
};
export default Oursuccess;
