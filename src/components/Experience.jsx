import React from "react";
const Experience = () => {
  return (
    <div
      name="experience"
      className="w-full bg-gradient-to-b pb-8 from-gray-800 to-black text-white px-6 py-48 sm:py-5 lg:px-8"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full my-20">
        <div className="grid grid-cols-1  md:grid-cols-2 gap-5 mx-auto">
          <div className="bg-black shadow-md shadow-sky-500 duration-200 hover:scale-500  rounded-lg p-3 m-4">
            <p className="font-bold text-sm text-white">Feb 2024 - Present</p>
            <p className="font-bold text-2xl text-white">
              Computer Science Student
            </p>
            <p className="font-bold text-lg text-white">University of Ghana</p>
            <p className="text-sm text-white ">
              This is some small description of an experience I have that I am
              displaying on an experience card on the experience page.
            </p>
          </div>
          <div className="bg-black shadow-md shadow-sky-500 duration-200 hover:scale-500 rounded-lg p-3 m-4 ">
            <p className="font-bold text-sm text-white">Feb 2024 - Present</p>
            <p className="font-bold text-2xl text-white">
              Computer Science Student
            </p>
            <p className="font-bold text-lg text-white">University of Ghana</p>
            <p className="text-sm text-white ">
              This is some small description of an experience I have that I am
              displaying on an experience card on the experience page.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
