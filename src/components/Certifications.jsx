import React from "react";

const Certifications = ({ certifications }) => {
  return (
    <section className="text-center p-6 animate-fadeIn">
      <h2 className="text-3xl font-bold text-neonGreen">Certifications</h2>
      <div className="mt-6">
        {certifications.map((cert, index) => (
          <div key={index} className="mb-6 text-gray-300">
            <div className="flex items-center justify-center gap-4">
              <a href={cert.url} target="_blank" rel="noopener noreferrer">
                <img
                  src={cert.img}
                  alt={cert.title}
                  className="w-56 rounded-lg object-cover border-4 border-green-400 shadow-lg hover:shadow-[0_0_10px_4px_rgba(57,255,20,0.9)] p-1 ease-in-out duration-300 cursor-pointer"
                />
              </a>
              <div>
                <h3 className="text-xl font-semibold text-neonGreen">
                  {cert.title}
                </h3>
                <p className="text-gray-400">{cert.organization}</p>
                <p className="text-sm mt-2">{cert.date}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Certifications;
