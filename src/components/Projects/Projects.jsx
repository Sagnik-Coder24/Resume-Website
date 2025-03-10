import React, { useState } from "react";
import IndvProj from "./IndvProj";
import Button from "../Button/Button";
import Footer from "../MainPage/Footer";

const Projects = ({ projects, gh }) => {
  const reverseProjects = [...projects].reverse();

  const [index, setIndex] = useState(null);
  const [indVisible, setIndVisible] = useState(false);

  const projClicked = (newIndex) => {
    if (!indVisible) {
      setIndVisible(true);
    }

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
    <>
      <section className="text-center min-h-[89.4vh] py-8 px-6 sm:py-10 sm:px-14">
        <div className="flex w-full justify-center items-center h-fit">
          <h1 className="w-fit text-3xl lg:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-violet-500 to-pink-500 select-none uppercase animate-slideUp">
            PROJECTS
          </h1>
        </div>

        {indVisible && (
          <div className="min-h-[80vh]">
            {index !== null && (
              <IndvProj
                projects={reverseProjects}
                index={index}
                setIndex={setIndex}
              />
            )}
          </div>
        )}

        <div className="mt-12 flex flex-wrap justify-evenly items-start gap-x-14 gap-y-10 animate-slideUp transition-all duration-300 ease-in-out">
          {reverseProjects.map((project, ind) => (
            <div
              key={ind}
              className={`bg-purple-950 bg-opacity-40 p-6 rounded-lg w-[360px] cursor-pointer border-2 border-purple-600 border-opacity-40 indiv-certificate hover:shadow-purple-custom transition-all duration-300 ease-in-out ${
                ind === index && "shadow-purple-custom"
              }`}
              onClick={() => projClicked(ind)}
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
        <div className="mt-16 animate-slideUp">
          <a href={gh} target="_blank" rel="noopener noreferrer">
            <Button text={"Visit github"} />
          </a>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Projects;
