import React from "react";
import bg2 from "../assets/images/banners/bg2.jpg";

const Education = ({ education }) => {
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
          Education
        </h1>
      </div>

      {/* Vertical line */}
      <div className="absolute lg:left-1/2 top-[141px] md:top-[149px] lg:top-[152px] bottom-0 bg-gradient-to-b from-purple-500 via-violet-500 to-pink-500 select-none w-[2px] rounded-full z-[-1] -translate-x-1/2 animate-fadeIn"></div>

      <div className="relative mb-8">
        {education.map((edu, index) => (
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
                className={`w-fit absolute top-1/2 -translate-y-1/2 lg:flex hidden select-none animate-fadeIn flex-col justify-center items-center gap-y-4 text-sm ${
                  index % 2 === 0
                    ? "left-[150%] -translate-x-1/2"
                    : "right-[150%] translate-x-1/2"
                }`}
              >
                <img src={edu.img} alt="" className="w-32" />
                <div>
                  <p className="text-violet-400 tracking-wide leading-normal whitespace-nowrap">
                    {edu.university}
                  </p>
                  <p className="text-violet-400 tracking-wide leading-normal whitespace-nowrap">
                    {edu.location}
                  </p>
                </div>
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
                      {edu.degree}
                    </h3>
                    <div className="flex mt-1 flex-col">
                      <p className="text-violet-400 text-base font-semibold tracking-wide leading-normal">
                        {edu.university}
                      </p>
                      <p className="text-violet-400 text-base font-semibold tracking-wide leading-normal lg:hidden">
                        {edu.location}
                      </p>
                    </div>
                  </div>
                  <div className="w-11 lg:hidden">
                    <img
                      src={edu.img}
                      alt=""
                      className="w-full h-full bg-white"
                    />
                  </div>
                </div>

                <p className="text-sm mt-2 text-violet-300 tracking-wide leading-normal flex flex-wrap gap-x-4">
                  <span className="whitespace-nowrap">{`Grade: ${edu.grade}`}</span>
                  <span className="opacity-60 whitespace-nowrap">
                    {`( ${edu.graduation_year} )`}
                  </span>
                </p>

                <div className="mt-4 flex justify-start items-start flex-wrap gap-y-4 gap-x-8">
                  {edu.coursework && (
                    <div className="border-l-2 border-purple-400 pl-4">
                      <h4 className="text-violet-300 text-sm mb-2">
                        Coursework:
                      </h4>
                      <ul className="list-disc pl-6 text-left">
                        {edu.coursework.map((course, index) => (
                          <li
                            key={index}
                            className="mt-1 text-sm text-purple-200 tracking-wide leading-normal"
                          >
                            {course}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {edu.activities && (
                    <div className="border-l-2 border-purple-400 pl-4">
                      <h4 className="text-violet-300 text-sm mb-2">
                        Activities:
                      </h4>
                      <ul className="list-disc pl-6 text-left text-purple-200">
                        {edu.activities.map((activity, index) => (
                          <li
                            key={index}
                            className="mt-1 text-sm text-purple-200 tracking-wide leading-normal"
                          >
                            {activity}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* {edu.additional_learning && (
                    <div className="border-l-2 border-purple-400 pl-4">
                      <h4 className="text-violet-300 text-sm mb-2">
                        Additional Learning:
                      </h4>
                      <ul className="list-disc pl-6 text-left text-purple-200">
                        {edu.additional_learning.map((learning, index) => (
                          <li
                            key={index}
                            className="mt-1 text-sm text-purple-200 tracking-wide leading-normal"
                          >
                            {learning}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )} */}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
