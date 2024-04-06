import React from "react";
const Experience = () => {
  return (
    <div
      name="experience"
      className=" bg-gradient-to-b pb-8 from-gray-800 to-black text-white px-6 py-48 sm:py-5 lg:px-8"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full my-20">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Experience
          </p>
          <p className="py-6">
            Check out some of my experiences and achievements
          </p>
        </div>

        <div className="grid grid-cols-1  md:grid-cols-2 gap-5 mx-auto">
          <div className="bg-black shadow-md shadow-sky-500 duration-200 hover:scale-500  rounded-lg p-3 m-4">
            <p className="font-bold text-sm text-white">Nov 2022 - Sep 2023</p>
            <p className="font-bold text-2xl text-white">
              Administrative Assistant and Assistant Health information Officer
            </p>
            <p className="font-bold text-lg text-white">Ghana Health Service</p>
            <p className="text-sm text-white ">
              This is some small description of an experience I have that I am
              displaying on an experience card on the experience page.
            </p>
          </div>
          <div className="bg-black shadow-md shadow-sky-500 duration-200 hover:scale-500 rounded-lg p-3 m-4 ">
            <p className="font-bold text-sm text-white">Aug 2018 - Oct 2022</p>
            <p className="font-bold text-2xl text-white">BA Economics</p>
            <p className="font-bold text-lg text-white">
              Kwame Nkrumah University of Science and Technology
            </p>
            <p className="text-sm text-white ">
              This is some small description of an experience I have that I am
              displaying on an experience card on the experience page.
            </p>
          </div>
          <div className="bg-black shadow-md shadow-sky-500 duration-200 hover:scale-500 rounded-lg p-3 m-4 ">
            <p className="font-bold text-sm text-white">Dec 2023</p>
            <p className="font-bold text-2xl text-white">
              Professional Diploma in Social Media Management and Advertising
            </p>
            <p className="font-bold text-lg text-white">
              Digital Marketing Skill Institute
            </p>
            <p className="text-sm text-white ">
              This is some small description of an experience I have that I am
              displaying on an experience card on the experience page.
            </p>
            <div>
              <a
                href="https://drive.google.com/file/d/13bntz24xeqnRnld5buyzvaNTBAxuHTta/view?usp=drive_link"
                target="_blank"
              >
                <button className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer">
                  Certificate
                </button>
              </a>
            </div>
          </div>
          <div className="bg-black shadow-md shadow-sky-500 duration-200 hover:scale-500 rounded-lg p-3 m-4 ">
            <p className="font-bold text-sm text-white">Feb 2024</p>
            <p className="font-bold text-2xl text-white">
              Web Development Job Simulation on Forage
            </p>
            <p className="font-bold text-lg text-white">
              Moreton Bay Regional Council Entrepreneurship & Innovation
            </p>
            <p className="text-sm text-white ">
              ● Completed a job simulation involving website planning and
              creation. <br></br>● Created a sitemap and user flow using a
              diagram creation tool. <br></br>● Used HTML & CSS to create a
              landing page.
            </p>
            <div>
              <a
                href="https://drive.google.com/file/d/1wHdMYMVh-_MtpY0XifOIzl7lSJLqy-xn/view?usp=drive_link"
                target="_blank"
              >
                <button className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer">
                  Certificate
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
