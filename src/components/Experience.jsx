import React from "react";
const Experience = () => {
  return (
    <div
      name="experience"
      className="bg-gradient-to-b from-gray-800 to-gray-800 border border-gray-100"
    >
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
        {/* <div className="bg-black shadow-md shadow-sky-500 duration-200 hover:scale-500 py-5 px-3 my-4 mx-4 rounded-lg w-full">
        <p className="font-bold text-sm text-white">Feb 2024 - Present</p>
        <p className="font-bold text-2xl text-white">
          Computer Science Student
        </p>
        <p className="font-bold text-lg text-white">University of Ghana</p>
        <p className="text-sm text-white ">
          This is some small description of an experience I have that I am
          displaying on an experience card on the experience page.
        </p>
      </div> */}
        {/* <div className="bg-black shadow-md shadow-sky-500 duration-200 hover:scale-500 py-5 px-3 my-4 mx-4 rounded-lg w-full">
        <p className="font-bold text-sm text-white">Aug 2018 - Nov 2022</p>
        <p className="font-bold text-2xl text-white">B.A Economics</p>
        <p className="font-bold text-lg text-white">
          Kwame Nkrumah University of Science and Technology
        </p>
        <p className="text-sm text-white ">
          I majored in Economics and minored in French. My area of
          specialisation was international Economics and Monetary Economics
        </p>
      </div> */}
      </div>
    </div>
  );
};

export default Experience;
