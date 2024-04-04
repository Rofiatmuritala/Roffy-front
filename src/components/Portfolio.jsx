import React from "react";
// import GitHubIcon from "@mui/icons-material/GitHub";

import image4 from "../assets/Screenshot (2).png";

const Project = () => {
  return (
    <>
      <div
        name="Project"
        className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"
      >
        <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
          <div className="pb-8">
            <p className="text-4xl font-bold inline border-b-4 border-gray-500">
              Project
            </p>
            <p className="py-6">Check out some of my work right here</p>
          </div>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
            <div className="shadow-md shadow-gray-500 rounded-lg">
              <img
                src={image4}
                className="rounded-md duration-200 hover:scale-105"
              ></img>
              <div className="flex items-center justify-center">
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  Demo
                </button>
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  Code
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="flex justify-center items-center font-bold h-96">
          No Projects Found
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mx-auto w-4/5">
          <div className="mb-4 lg:mb-0 p-4 lg:p-0 w-full md:w-4/7 relative rounded block">
            <img src={image4} className="rounded-md object-cover w-full h-64" />

            <h1 className="my-5 text-4xl font-bold leading-tight">
              Health App
            </h1>

            <div className="flex">
              <a
                href="github/rofiatmuritala"
                target="_blank"
                className="inline-block px-6 py-3 mt-2 rounded-md bg-gray-700 text-gray-100 mr-3 "
              >
                Repo
              </a>
              <a
                href="github/rofiatmuritala"
                className="inline-block px-6 py-3 mt-2 rounded-md bg-gray-700 text-gray-100 ml-3"
              >
                Live Demo
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Project;
