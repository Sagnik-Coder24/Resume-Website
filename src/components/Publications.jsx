// src/components/Publications.jsx
import React from "react";

const Publications = ({ publications }) => {
  return (
    <section className="text-center p-6 animate-fadeIn">
      <h1 className="text-3xl lg:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-violet-500 to-pink-500 select-none uppercase">
        Publications
      </h1>
      <div className="mt-6">
        {publications.map((publication, index) => (
          <div
            key={index}
            className="bg-gray-800 p-6 rounded-lg shadow-lg mb-6"
          >
            <div className="text-base sm:text-lg md:text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-violet-500 to-pink-500 tracking-normal leading-normal mb-6">
              <p>{publication.title}</p>
            </div>

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
                className="text-purple-400 hover:text-purple-500"
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
