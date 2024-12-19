import React, { useEffect } from "react";

const Languages = ({ languages }) => {
  return (
    <section className="text-center p-12 animate-fadeIn h-full">
      <h1 className="text-3xl lg:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-violet-500 to-pink-500 select-none md:-translate-x-1">
        LANGUAGES
      </h1>
      <div className="my-4 space-y-8 h-[93%] flex flex-col justify-evenly lg:items-center">
        {languages.map((language, index) => (
          <div
            key={index}
            className="p-4 bg-black rounded-lg border-2 border-purple-800 lg:w-3/4 animate-slideUp transform transition-all shadow-lg shadow-purple-400 hover:shadow-2xl hover:shadow-purple-400 duration-300 hover:scale-105 language"
          >
            <h3 className="text-2xl font-semibold text-purple-400 mb-1">
              {language.language}
            </h3>
            <p className="text-lg text-purple-200">{language.proficiency}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Languages;
