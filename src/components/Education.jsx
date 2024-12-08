// src/components/Education.jsx
import React from "react";

const Education = ({ education }) => {
  return (
    <section className="text-center p-6 animate-fadeIn">
      <h2 className="text-3xl font-bold text-neonGreen">Education</h2>
      <div className="mt-6">
        {education.map((edu, index) => (
          <div key={index} className="mb-6 text-gray-300">
            <h3 className="text-xl font-semibold text-neonGreen">
              {edu.degree}
            </h3>
            <p className="text-gray-400">
              {edu.university} - {edu.location}
            </p>
            <p className="text-sm mt-2">
              Graduated in {edu.graduation_year} · Grade: {edu.grade}
            </p>

            {edu.activities && edu.activities.length > 0 && (
              <div className="mt-4">
                <h4 className="text-lg font-semibold text-neonGreen">
                  Activities
                </h4>
                <div className="flex flex-wrap justify-center mt-2">
                  {edu.activities.map((activity, index) => (
                    <span
                      key={index}
                      className="bg-neonGreen text-black px-4 py-2 m-2 rounded-full font-semibold"
                    >
                      {activity}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {edu.coursework && edu.coursework.length > 0 && (
              <div className="mt-4">
                <h4 className="text-lg font-semibold text-neonGreen">
                  Coursework
                </h4>
                <div className="flex flex-wrap justify-center mt-2">
                  {edu.coursework.map((course, index) => (
                    <span
                      key={index}
                      className="bg-neonGreen text-black px-4 py-2 m-2 rounded-full font-semibold"
                    >
                      {course}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {edu.additional_learning && edu.additional_learning.length > 0 && (
              <div className="mt-4">
                <h4 className="text-lg font-semibold text-neonGreen">
                  Additional Learning
                </h4>
                <div className="flex flex-wrap justify-center mt-2">
                  {edu.additional_learning.map((learning, index) => (
                    <span
                      key={index}
                      className="bg-neonGreen text-black px-4 py-2 m-2 rounded-full font-semibold"
                    >
                      {learning}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
