// src/components/Summary.jsx
import React from "react";

const Summary = ({ summary }) => {
  return (
    <section className="text-center p-6 animate-fadeIn">
      <h2 className="text-3xl font-bold text-neonGreen">About Me</h2>
      <p className="mt-4 text-gray-300 text-lg">{summary}</p>
    </section>
  );
};

export default Summary;
