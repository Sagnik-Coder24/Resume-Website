import React from "react";

const Languages = ({ languages }) => {
  return (
    <section className="text-center p-6 animate-fadeIn">
      <h2 className="text-3xl font-bold text-neonGreen">Languages</h2>
      <div className="mt-6">
        {languages.map((language, index) => (
          <div key={index} className="mb-6 text-gray-300">
            <h3 className="text-xl font-semibold text-neonGreen">
              {language.language}
            </h3>
            <p className="text-gray-400">{language.proficiency}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Languages;
