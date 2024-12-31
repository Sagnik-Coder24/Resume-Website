import React from "react";
import Button from "./Button/Button";

const Publications = ({ publications, medium }) => {
  const reversePublications = [...publications].reverse();

  return (
    <section className="text-center py-8 px-6 sm:py-10 sm:px-14 animate-fadeIn overflow-x-hidden">
      <div className="flex justify-center items-center">
        <h1 className="text-3xl lg:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-purple-500 to-violet-500 select-none uppercase animate-slideIn">
          Public
        </h1>
        <h1 className="text-3xl lg:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-violet-500 via-violet-500 to-pink-500 select-none uppercase animate-slideLeft">
          ations
        </h1>
      </div>

      <div className="mt-12 flex justify-center items-center flex-col">
        {reversePublications.map((publication, index) => (
          <div
            key={index}
            className={`bg-purple-950 bg-opacity-40 border-2 border-purple-600 border-opacity-40 py-6 px-8 rounded-lg mb-8 lg:w-3/4
              ${
                index % 2 === 0
                  ? "md:mr-auto animate-slideIn"
                  : "md:ml-auto animate-slideLeft"
              }`}
          >
            <div className="text-base sm:text-lg md:text-xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-violet-500 to-pink-500 tracking-normal leading-normal">
              <p>{publication.title}</p>
            </div>

            <p className="text-purple-300 opacity-90 text-base mt-4">
              <span className="font-extrabold">{publication.journal}</span>
              <span className="mx-4 text-purple-500">|</span>
              <span>{publication.date}</span>
            </p>
            <p className="mt-4 text-left text-purple-200 opacity-80 text-sm sm:text-base tracking-normal leading-normal">
              {publication.desc}
            </p>
            <div className="mt-6">
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
      <div className="mt-6 animate-slideIn">
        <a href={medium} target="_blank" rel="noopener noreferrer">
          <Button text={"Visit medium"} />
        </a>
      </div>
    </section>
  );
};

export default Publications;
