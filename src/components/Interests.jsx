import React from "react";

const Interests = ({ interests }) => {
  return (
    <section className="text-center p-6 animate-fadeIn">
      <h2 className="text-3xl font-bold text-neonGreen">Interests</h2>
      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {interests.map((interest, index) => (
          <div key={index} className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <p className="text-lg font-semibold text-neonGreen">{interest}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Interests;
