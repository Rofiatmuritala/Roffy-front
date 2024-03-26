import React, { useEffect, useState } from "react";
import HeroImage from "../assets/hero.jpg";
const Experience = () => {
  const [experiences, setExperiences] = useState(null);

  // const [name, setName] = useState(null);
  // const [description, setDescription] = useState(null);

  const getExperiences = async () => {
    try {
      const response = await fetch("http:///api/experiences");
      const data = await response.json();
      console.log(data);
      setExperiences(data.experiences);
    } catch (error) {
      console.log(error);
    }
  };

  // const onSubmitHandler = async (e) => {
  //   e.preventDefault();

  //   const newProject = {
  //     name: name,
  //     description: description,
  //   };

  //   try {
  //     const response = await fetch"", {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify(newProject),
  //     });
  //     const data = await response.json();
  //     console.log(data);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  useEffect(() => {
    getExperiences();
  }, []);

  return (
    <div>
      <h1>Projects</h1>
      {experiences &&
        experiences.length >= 1 &&
        experiences.map((experience) => (
          <div className="grid grid-cols-3 gap-5">
            <ul>
              <div style={{ paddingBottom: "10px" }}>
                <li>Start Date: {experience.startDate}</li>
                <li>End Date: {experience.endDate}</li>
                <li>Role: {experience.role}</li>
                <li>Company Name: {experience.companyname}</li>
                <li>Description: {experience.description}</li>
              </div>
            </ul>
          </div>
        ))}

      <img src={HeroImage} alt=""></img>
    </div>
  );
};

export default Experience;
