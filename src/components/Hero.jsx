import React from "react";
import image1 from "../assets/hero.jpg";
import image2 from "../assets/Screenshot (2).png";
import { HiArrowRightCircle } from "react-icons/hi2";

const Hero = () => {
  return (
    <div className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800">
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col h-full justify-center">
          <h2 className="text-4xl sm:text-7xl font-bold text-white">
            I am a fullstack developer
          </h2>
          <p className="text-gray-500 py-4 maw-w-md">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
            possimus culpa eveniet delectus labore enim laudantium et blanditiis
            incidunt, repellendus consequuntur id maxime velit iusto. Nostrum
            quas labore explicabo ipsum! Ducimus dolorum, eaque velit saepe, sit
            aspernatur iusto similique iure eum aliquam distinctio adipisci
            dolore? Facilis, recusandae nulla! Repellat quia illum dolores quasi
            id eius quam cum rem illo vero!
          </p>
          <div>
            <button className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer">
              Download CV
              <span className="group-hover:rotate-90 duration-300">
                <HiArrowRightCircle size={25} className="ml-1" />
              </span>
            </button>
          </div>
        </div>
        <div>
          <img
            src={image2}
            alt=" my profile"
            className="rounded-2xl mx-auto w-2/3 md:w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
