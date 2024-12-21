import React from "react";
import bg2 from "../assets/images/banners/bg2.jpg";

const Projects = ({ projects }) => {
  const reverseProjects = [...projects].reverse();

  return (
    <section className="text-center p-6 animate-fadeIn">
      <div className="w-full h-full absolute top-0 left-0 z-[-1] select-none">
        <img
          src={bg2}
          alt="Banner"
          className="w-full h-full object-cover opacity-15 fixed top-0 left-0"
        />
      </div>

      <h1 className="text-3xl lg:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-violet-500 to-pink-500 select-none">
        PROJECTS
      </h1>

      <div className="mt-12 flex flex-wrap justify-evenly items-center gap-x-14 gap-y-10">
        {reverseProjects.map((project, index) => (
          <div
            key={index}
            className="bg-gray-800 p-6 rounded-lg w-[360px] h-[670px]"
          >
            <img
              src={project.img}
              alt={project.title}
              className="w-full h-40 object-cover rounded-lg mb-4"
            />
            <h3 className="text-lg font-semibold text-neonGreen h-[60px]">
              {project.title}
            </h3>
            <p className="text-gray-400 text-sm text-left mt-2 h-[250px] overflow-y-auto custom-scrollbar">
              {project.description}
            </p>
            <p className="text-sm mt-2">
              <span className="font-semibold">Technologies:</span>{" "}
              {project.technologies.join(", ")}
            </p>
            <div className="mt-4">
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-400 hover:text-green-500"
              >
                Live
              </a>
              <span className="mx-2 text-gray-500">|</span>
              <a
                href={project.gh}
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-400 hover:text-green-500"
              >
                GitHub
              </a>
              {project.medium && (
                <>
                  <span className="mx-2 text-gray-500">|</span>
                  <a
                    href={project.medium}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-green-400 hover:text-green-500"
                  >
                    Medium
                  </a>
                </>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
