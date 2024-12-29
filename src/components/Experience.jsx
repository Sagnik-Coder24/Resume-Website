import React from "react";
import bg2 from "../assets/images/banners/bg2.jpg";

const Experience = ({ experience }) => {
  return (
    <section className="text-center py-8 px-6 md:py-10 md:px-14 relative overflow-x-hidden">
      <div className="w-full h-full absolute top-0 left-0 z-[-1] select-none">
        <img
          src={bg2}
          alt="Banner"
          className="w-full h-full object-cover opacity-15 fixed top-0 left-0"
        />
      </div>

      <div className="flex w-full justify-center items-center h-fit mb-10">
        <h1 className="w-fit text-3xl lg:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-violet-500 to-pink-500 select-none uppercase animate-fadeIn">
          Experience
        </h1>
      </div>

      {/* Vertical line */}
      <div className="absolute lg:left-1/2 top-[141px] md:top-[149px] lg:top-[152px] bottom-0 bg-gradient-to-b from-purple-500 via-violet-500 to-pink-500 select-none w-[2px] rounded-full z-[-1] -translate-x-1/2 animate-fadeIn"></div>

      <div className="relative mb-8">
        {experience.map((job, index) => (
          <div
            key={index}
            className={`flex items-start justify-between mt-12 ${
              index % 2 === 0 ? "flex-row" : "flex-row lg:flex-row-reverse"
            }`}
          >
            {/* Left/Right side */}
            <div
              className={`w-full lg:w-1/2 flex items-center justify-center relative ${
                index % 2 === 0 ? "pl-8 lg:pl-0 lg:pr-8" : "pl-8"
              }`}
            >
              {/* Circular dot */}
              <div
                className={`absolute top-0 translate-y-[3px] rounded-full select-none border-2 border-purple-600 p-[4px] lg:block hidden animate-fadeIn ${
                  index % 2 === 0
                    ? "right-0 translate-x-1/2"
                    : "left-0 -translate-x-1/2"
                }`}
              >
                <div className="w-[10px] h-[10px] rounded-full bg-[radial-gradient(circle,_#ff7eb6,_#8a4dff,_#6a0dad)] animate-pulse"></div>
              </div>
              <div
                className={`absolute top-0 translate-y-[4px] rounded-full select-none border-2 border-purple-600 p-[4px] lg:hidden block left-0 -translate-x-1/2 animate-fadeIn`}
              >
                <div className="w-[10px] h-[10px] rounded-full bg-[radial-gradient(circle,_#ff7eb6,_#8a4dff,_#6a0dad)] animate-pulse"></div>
              </div>

              {/* Box Logo */}
              <div
                className={`w-36 absolute top-1/2 -translate-y-1/2 lg:block hidden select-none animate-fadeIn ${
                  index % 2 === 0
                    ? "left-[150%] -translate-x-1/2"
                    : "right-[150%] translate-x-1/2"
                }`}
              >
                <img src={job.img} alt="" className="w-full h-full" />
                <p className="text-violet-400 mt-2 tracking-wide leading-normal">
                  {job.company}
                </p>
              </div>

              <div
                className={`text-left w-full ${
                  index % 2 === 0
                    ? "animate-slideLeft lg:animate-slideIn"
                    : "animate-slideLeft"
                }`}
              >
                <div className="flex justify-between items-center gap-2 w-full">
                  <div className="flex flex-col justify-between items-stretch">
                    <h3 className="text-lg sm:text-xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-violet-500 to-pink-500 tracking-normal leading-relaxed">
                      {job.role}
                    </h3>
                    <p className="text-violet-400 font-semibold tracking-wide leading-relaxed">
                      {job.company}
                    </p>
                  </div>
                  <div className="w-11 lg:hidden">
                    <img src={job.img} alt="" className="w-full h-full" />
                  </div>
                </div>

                <p className="text-sm mt-2 text-violet-300 tracking-wide leading-normal flex flex-wrap gap-x-4">
                  <span>{job.duration}</span>
                  <span className="opacity-60 whitespace-nowrap">{`( ${job.work_mode} )`}</span>
                </p>
                <div className="mt-4">
                  <ul className="list-disc pl-6 text-left">
                    {job.responsibilities.map((responsibility, index) => (
                      <li
                        key={index}
                        className="mt-2 text-sm text-purple-200 tracking-wide leading-normal"
                      >
                        {responsibility}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-6">
                  <div className="flex justify-center items-center text-xs text-purple-200 whitespace-nowrap">
                    <div
                      className={`flex gap-2 flex-wrap ${
                        index % 2 === 0
                          ? "justify-start lg:justify-end"
                          : "justify-start"
                      }`}
                    >
                      {job.skills.map((skill, index) => (
                        <div
                          key={index}
                          className="py-1 px-4 border-2 border-purple-600 rounded-full bg-purple-950 bg-opacity-40 cursor-default"
                        >
                          {skill}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
