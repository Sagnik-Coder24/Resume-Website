import React from "react";

const Projects = ({ projects }) => {
  return (
    <section className="text-center p-6 animate-fadeIn">
      <h2 className="text-3xl font-bold text-neonGreen">Projects</h2>
      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {projects.map((project, index) => (
          <div key={index} className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <img
              src={project.img}
              alt={project.title}
              className="w-full h-40 object-cover rounded-lg mb-4"
            />
            <h3 className="text-xl font-semibold text-neonGreen">
              {project.title}
            </h3>
            <p className="text-gray-400 mt-2">{project.description}</p>
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
                Live Demo
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
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
