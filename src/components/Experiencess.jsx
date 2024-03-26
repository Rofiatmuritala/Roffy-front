import React from "react";
import image5 from "../assets/Screenshot (2).png";
import image7 from "../assets/react.svg";

const Experiencess = () => {
  return (
    <div
      name="experience"
      className="bg-gradient-to-b from-gray-800 to-black w-full  h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full text-white">
        <div>
          <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">
            Experience
          </p>
          <p className="py-6">These are the technology I have worked on</p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
          <div className="shadow-md shadow-sky-500 duration-200 hover:scale-500 py-2 rounded-lg">
            <img src={image5} className="w-20 mx-auto"></img>
            <p className="mt-4">HTML</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experiencess;
