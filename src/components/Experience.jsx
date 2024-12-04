// src/components/Experience.jsx
import React from "react";

const Experience = ({ experience }) => {
  return (
    <section className="text-center p-6 animate-fadeIn">
      <h2 className="text-3xl font-bold text-neonGreen">Experience</h2>
      <div className="mt-6">
        {experience.map((job, index) => (
          <div key={index} className="mb-6 text-gray-300">
            <h3 className="text-xl font-semibold text-neonGreen">
              {job.title}
            </h3>
            <p className="text-gray-400">
              {job.company} - {job.location}
            </p>
            <p className="text-sm mt-2">
              {job.start_date} to {job.end_date}
            </p>
            <p className="mt-2">{job.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
