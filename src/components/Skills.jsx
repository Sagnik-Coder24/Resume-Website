import React, { useState } from "react";
import bg2 from "../assets/images/banners/bg2.jpg";
import Button from "./Button/Button";

const Skills = ({ skills }) => {
  const [displaySkills, setDisplaySkills] = useState(null);
  const [displayKey, setDisplayKey] = useState("Skills");

  const displaySkillsClicked = (key) => {
    setDisplaySkills(null);
    setDisplayKey(null);
    setTimeout(() => {
      setDisplaySkills(skills[key]);
      setDisplayKey(key);
    }, 0);

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <section className="text-center py-8 px-6 sm:py-10 sm:px-14">
      <div className="w-full h-full absolute top-0 left-0 z-[-1] select-none">
        <img
          src={bg2}
          alt="Banner"
          className="w-full h-full object-cover opacity-15 fixed top-0 left-0"
        />
      </div>

      {displayKey && (
        <h1 className="text-3xl lg:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-violet-500 to-pink-500 select-none uppercase animate-fadeIn">
          {displayKey}
        </h1>
      )}
      <div className="mt-12 flex lg:flex-row-reverse flex-col justify-evenly items-center gap-x-16 gap-y-10 animate-fadeIn">
        <div className="max-w-[700px] w-full md:w-4/5 lg:min-w-[500px] min-h-[150px] lg:min-h-[250px] bg-black bg-opacity-40 border-2 border-purple-800 overflow-y-auto custom-scrollbar rounded-xl p-6 flex justify-start items-start text-sm md:text-base text-purple-200 whitespace-nowrap">
          {displaySkills && (
            <div className="flex gap-x-2 gap-y-4 flex-wrap animate-slideIn">
              {displaySkills.map((skill, index) => (
                <div
                  key={index}
                  className="py-1 px-4 border-2 border-purple-600 rounded-full bg-purple-950 bg-opacity-40 cursor-default"
                >
                  {skill}
                </div>
              ))}
            </div>
          )}
        </div>
        <div>
          {Object.keys(skills).map((key, index) => (
            <div
              key={index}
              className="mt-8"
              onClick={() => displaySkillsClicked(key)}
            >
              <Button text={key} width={"350px"} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
