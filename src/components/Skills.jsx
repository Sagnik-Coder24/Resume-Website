// src/components/Skills.jsx
import React from "react";

const Skills = ({ skills }) => {
  return (
    <section className="text-center p-6 animate-fadeIn">
      <h2 className="text-3xl font-bold text-neonGreen">Skills</h2>
      <div className="mt-4">
        {Object.entries(skills).map(([category, skillSet], index) => (
          <div key={index} className="mt-8">
            <h3 className="text-2xl font-semibold text-neonGreen">
              {category}
            </h3>
            <div className="flex flex-wrap justify-center mt-4">
              {skillSet.map((skill, index) => (
                <span
                  key={index}
                  className="bg-neonGreen text-black px-4 py-2 m-2 rounded-full font-semibold"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
