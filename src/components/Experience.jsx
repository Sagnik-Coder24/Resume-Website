import React from "react";
import bg2 from "../assets/images/banners/bg2.jpg";

const Experience = ({ experience }) => {
  return (
    <section className="text-center py-8 px-6 sm:py-10 sm:px-14 animate-fadeIn">
      <div className="w-full h-full absolute top-0 left-0 z-[-1] select-none">
        <img
          src={bg2}
          alt="Banner"
          className="w-full h-full object-cover opacity-15 fixed top-0 left-0"
        />
      </div>

      <h1 className="text-3xl lg:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-violet-500 to-pink-500 select-none uppercase">
        Experience
      </h1>

      <div className="mt-10">
        {experience.map((job, index) => (
          <div key={index} className="mb-6 text-gray-300">
            <h3 className="text-xl font-semibold text-neonGreen">{job.role}</h3>
            <p className="text-gray-400">
              {job.company} - {job.location}
            </p>
            <p className="text-sm mt-2">
              {job.duration} · {job.employment_type} · {job.work_mode}
            </p>
            <div className="mt-4">
              <ul className="list-disc pl-6 text-left">
                {job.responsibilities.map((responsibility, index) => (
                  <li key={index} className="mt-2 text-gray-200">
                    {responsibility}
                  </li>
                ))}
              </ul>
            </div>
            <div className="mt-4">
              <h4 className="text-lg font-semibold text-neonGreen">Skills:</h4>
              <div className="flex flex-wrap justify-center mt-2">
                {job.skills.map((skill, index) => (
                  <span
                    key={index}
                    className="bg-neonGreen text-black px-4 py-2 m-2 rounded-full font-semibold"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
