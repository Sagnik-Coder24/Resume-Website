// src/components/Experience.jsx
import React from "react";

const Experience = ({ experience }) => {
  return (
    <section className="text-center p-6 animate-fadeIn">
      <h2 className="text-3xl font-bold text-neonGreen">Experience</h2>
      <div className="mt-6">
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
