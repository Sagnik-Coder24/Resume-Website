import React, { useState } from "react";
import bg2 from "../../assets/images/banners/bg2.jpg";
import IndvProj from "./IndvProj";
import Button from "../Button/Button";

const Projects = ({ projects, gh }) => {
  const reverseProjects = [...projects].reverse();

  const [index, setIndex] = useState(null);

  const projClicked = (newIndex) => {
    if (index !== newIndex) {
      setIndex(null);
      setTimeout(() => {
        setIndex(newIndex);
      }, 0);
    }
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

      <div className="flex w-full justify-center items-center h-fit">
        <h1 className="w-fit text-3xl lg:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-violet-500 to-pink-500 select-none uppercase animate-slideUp">
          PROJECTS
        </h1>
      </div>

      {index !== null && (
        <IndvProj
          projects={reverseProjects}
          index={index}
          setIndex={setIndex}
        />
      )}

      <div className="mt-12 flex flex-wrap justify-evenly items-start gap-x-14 gap-y-10 animate-slideUp transition-all duration-300 ease-in-out">
        {reverseProjects.map((project, index) => (
          <div
            key={index}
            className="bg-purple-950 bg-opacity-40 p-6 rounded-lg w-[360px] cursor-pointer border-2 border-purple-600 border-opacity-40 indiv-certificate"
            onClick={() => projClicked(index)}
          >
            <img
              src={project.img}
              alt={project.title}
              className="w-full h-40 object-cover rounded-lg mb-4"
            />
            <div className="text-base sm:text-lg md:text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-violet-500 to-pink-500 tracking-normal leading-normal h-[80px] flex justify-center items-center">
              <p>{project.title}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-16 animate-slideIn">
        <a href={gh} target="_blank" rel="noopener noreferrer">
          <Button text={"Visit github"} />
        </a>
      </div>
    </section>
  );
};

export default Projects;
