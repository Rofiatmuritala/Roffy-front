import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full bg-gradient-to-b pb-8 from-gray-800 to-black text-white px-6 py-24 sm:py-5 lg:px-8"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full ">
        <div className="">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About me
          </p>
        </div>
        <p className="text-xl mt-20 ">
          I am a recent graduate with a strong background in Economics, but my
          journey didn't stop there. Despite having no prior knowledge in web
          development, I found my passion in creating apps and websites to
          address real-world challenges faced by society.
          <br></br>
          Driven by a desire to make a meaningful impact, I delved into the
          world of web development. What started as a curiosity quickly turned
          into a passion as I discovered the power of technology to address
          societal issues. I am particularly interested in leveraging my skills
          to build solutions that tackle pressing challenges faced by
          communities.
        </p>
        <br></br>

        <p className="text-xl">
          My goal is to continue using my skills in web development to develop
          innovative solutions that address societal challenges and contribute
          to positive change. I am passionate about leveraging technology for
          social good and look forward to collaborating with like-minded
          individuals and organizations to make a difference.
          <br></br>I am always open to new opportunities, collaborations, and
          discussions. If you share my passion for using technology to create a
          better world, I would love to connect with you. Feel free to reach out
          via social media platforms.
        </p>
      </div>
    </div>
  );
};

export default About;
