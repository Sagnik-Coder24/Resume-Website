import React from "react";
import bg2 from "../assets/images/banners/bg2.jpg";

const Projects = ({ projects }) => {
  const reverseProjects = [...projects].reverse();

  const projClicked = (project) => {
    console.log(project);
  };

  return (
    <section className="text-center py-10 px-14">
      <div className="w-full h-full absolute top-0 left-0 z-[-1] select-none">
        <img
          src={bg2}
          alt="Banner"
          className="w-full h-full object-cover opacity-15 fixed top-0 left-0"
        />
      </div>

      <h1 className="text-3xl lg:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-violet-500 to-pink-500 select-none animate-slideUp">
        PROJECTS
      </h1>

      <div className="mt-12 flex flex-wrap justify-evenly items-start gap-x-14 gap-y-10 animate-slideUp">
        {reverseProjects.map((project, index) => (
          <div
            key={index}
            className="bg-purple-950 bg-opacity-40 p-6 rounded-lg w-[360px] h-[710px] cursor-pointer"
            onClick={() => projClicked(project)}
          >
            <img
              src={project.img}
              alt={project.title}
              className="w-full h-40 object-cover rounded-lg mb-4"
            />
            <div className="text-lg md:text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-violet-500 to-pink-500 tracking-normal leading-none h-[80px] flex justify-center items-center">
              <p>{project.title}</p>
            </div>
            <div className="text-purple-300 text-sm text-left mt-3 h-[210px] overflow-y-auto custom-scrollbar flex justify-center items-center tracking-normal leading-normal">
              <p className="">{project.description}</p>
            </div>
            <div className="mt-10 flex justify-center items-center gap-1 flex-wrap text-xs text-purple-200 whitespace-nowrap">
              {project.technologies.map((skill, index) => (
                <div
                  key={index}
                  className="py-1 px-4 border-2 border-purple-600 rounded-full bg-purple-950 bg-opacity-40"
                >
                  {skill}
                </div>
              ))}
            </div>

            <div className="mt-8">
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-purple-300 hover:text-purple-400"
              >
                Live
              </a>
              <span className="mx-2 text-gray-500">|</span>
              <a
                href={project.gh}
                target="_blank"
                rel="noopener noreferrer"
                className="text-purple-300 hover:text-purple-400"
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
                    className="text-purple-300 hover:text-purple-400"
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
