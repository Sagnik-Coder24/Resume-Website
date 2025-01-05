import React from "react";

const Languages = ({ languages }) => {
  return (
    <section className="text-center p-12 animate-fadeIn h-full">
      <div className="flex w-full justify-center items-center h-fit">
        <h1 className="w-fit text-3xl lg:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-violet-500 to-pink-500 select-none uppercase">
          LANGUAGES
        </h1>
      </div>

      <div className="my-4 space-y-8 h-[93%] flex flex-col justify-evenly lg:items-center">
        {languages.map((language, index) => (
          <div
            key={index}
            className="p-4 bg-black rounded-lg border-2 border-purple-800 lg:w-3/4 animate-slideUp transform transition-all duration-300 hover:scale-105 language"
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
