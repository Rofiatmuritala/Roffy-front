import React from "react";
import { FaGithub } from "react-icons/fa";
import { FaExternalLinkAlt } from "react-icons/fa";

import image4 from "../assets/movie app.png";

const Project = () => {
  return (
    <>
      <div
        name="project"
        className="bg-gradient-to-b from-black to-gray-800 w-full px-6 py-24 my-auto sm:py-32 lg:px-8 text-white md:h-screen"
      >
        <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
          <div className="pb-8">
            <p className="text-4xl font-bold inline border-b-4 border-gray-500">
              Project
            </p>
            <p className="py-6">Check out some of my work right here</p>
          </div>

          <div className="grid grid-cols-1 pb-10 md:grid-cols-2 gap-10 mx-auto w- ">
            <div className="mb-4 lg:mb-0 p-4 lg:p-0 w-full md:w-4/7  rounded block border-4 border-gray-500">
              <img
                src={image4}
                className="rounded-md object-cover w-full h-64"
              />

              <h1 className="my-5 text-4xl font-bold leading-tight">
                Health App
              </h1>

              <div className="flex justify-between pb-9">
                <a
                  href="https://github.com/Rofiatmuritala/React-Health-Landing-Pages"
                  target="_blank"
                  className="inline-block px-6 py-3 mt-2 rounded-md bg-gray-700 text-gray-100 ml-3 "
                >
                  <FaGithub size={30} className="ml-1 flex flex-col-2" /> Repo
                </a>
                <a
                  href="https://health-65j3.vercel.app/"
                  target="_blank"
                  className="inline-block px-6 py-3 mt-2 rounded-md bg-gray-700 text-gray-100 mr-3"
                >
                  <FaExternalLinkAlt size={30} /> Demo
                </a>
              </div>
            </div>
            <div className="mb-4 lg:mb-0 p-4 lg:p-0 w-full md:w-4/7  rounded block border-4 border-gray-500">
              <img
                src={image4}
                className="rounded-md object-cover w-full h-64"
              />

              <h1 className="my-5 text-4xl font-bold leading-tight">
                AgroMarket Place
              </h1>

              <div className="flex justify-between pb-9">
                <a
                  href="github/rofiatmuritala"
                  target="_blank"
                  className="inline-block px-6 py-3 mt-2 rounded-md bg-gray-700 text-gray-100 ml-3 "
                >
                  <FaGithub /> Repo
                </a>
                <a
                  href="github/rofiatmuritala"
                  className="inline-block px-6 py-3 mt-2 rounded-md bg-gray-700 text-gray-100 mr-3"
                >
                  <FaExternalLinkAlt /> Live Demo
                </a>
              </div>
            </div>
            <div className="mb-4 lg:mb-0 p-4 lg:p-0 w-full md:w-4/7  rounded block border-4 border-gray-500">
              <img
                src={image4}
                className="rounded-md object-cover w-full h-64"
              />

              <h1 className="my-5 text-4xl font-bold leading-tight">
                Movie App
              </h1>

              <div className="flex justify-between pb-9">
                <a
                  href="https://github.com/Rofiatmuritala/Movie-App"
                  target="_blank"
                  className="inline-block px-6 py-3 mt-2 rounded-md bg-gray-700 text-gray-100 ml-3 "
                >
                  <FaGithub /> Repo
                </a>
                <a
                  href="https://movie-app-blue-alpha.vercel.app/"
                  target="_blank"
                  className="inline-block px-6 py-3 mt-2 rounded-md bg-gray-700 text-gray-100 mr-3"
                >
                  <FaExternalLinkAlt />
                  Demo
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Project;
