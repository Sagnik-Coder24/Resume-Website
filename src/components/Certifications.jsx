// src/components/Certifications.jsx
import React from "react";

const Certifications = ({ certifications }) => {
  return (
    <section className="text-center p-24 animate-fadeIn">
      <h2 className="text-3xl font-bold text-neonGreen mb-6">Certifications</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-24 gap-y-8">
        {certifications.map((cert, index) => (
          <div
            key={index}
            className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all ease-in-out duration-300"
          >
            <a href={cert.url} target="_blank" rel="noopener noreferrer">
              <div className="relative mb-4">
                <img
                  src={cert.img}
                  alt={cert.title}
                  className="w-full h-48 object-cover rounded-lg border-4 border-green-400 shadow-lg hover:shadow-2xl transform transition-all ease-in-out duration-300"
                />
                <div className="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center opacity-0 hover:opacity-100 bg-black bg-opacity-50 rounded-lg transition-all duration-300">
                  <p className="text-white text-lg font-semibold">
                    View Certification
                  </p>
                </div>
              </div>
            </a>
            <div>
              <h3 className="text-xl font-semibold text-neonGreen">
                {cert.title}
              </h3>
              <p className="text-gray-400">{cert.organization}</p>
              <p className="text-sm mt-2 text-gray-500">{cert.date}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Certifications;
