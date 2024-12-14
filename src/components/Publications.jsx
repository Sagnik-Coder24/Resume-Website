// src/components/Publications.jsx
import React from "react";

const Publications = ({ publications }) => {
  return (
    <section className="text-center p-6 animate-fadeIn">
      <h2 className="text-3xl font-bold text-neonGreen">Publications</h2>
      <div className="mt-6">
        {publications.map((publication, index) => (
          <div
            key={index}
            className="bg-gray-800 p-6 rounded-lg shadow-lg mb-6"
          >
            <h3 className="text-xl font-semibold text-neonGreen">
              {publication.title}
            </h3>
            <p className="text-gray-400 mt-2">
              <span className="font-semibold text-gray-300">
                {publication.journal}
              </span>{" "}
              | {publication.date}
            </p>
            <p className="text-gray-400 mt-2">{publication.desc}</p>
            <div className="mt-4">
              <a
                href={publication.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-400 hover:text-green-500"
              >
                Read the full article
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Publications;
