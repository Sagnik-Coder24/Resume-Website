// src/components/Header.jsx
import React from "react";

const Header = ({ name, title, headline, contact }) => {
  return (
    <header className="text-center p-8 bg-black bg-opacity-80 rounded-lg shadow-xl">
      <img
        src="https://www.shutterstock.com/image-photo/smiling-young-middle-eastern-man-260nw-2063524544.jpg"
        alt="Profile"
        className="w-32 h-32 rounded-full mx-auto mb-4"
      />
      <h1 className="text-4xl font-bold text-neonGreen animate-fadeIn">
        {name}
      </h1>
      <h2 className="text-2xl text-gray-400">{title}</h2>
      <p className="text-lg text-gray-300 mt-2">{headline}</p>
      <div className="mt-4">
        <a
          href={`mailto:${contact.email}`}
          className="text-neonGreen hover:text-white mr-4"
        >
          {contact.email}
        </a>
        <a
          href={contact.linkedin}
          className="text-neonGreen hover:text-white mr-4"
        >
          LinkedIn
        </a>
        <a href={contact.github} className="text-neonGreen hover:text-white">
          GitHub
        </a>
      </div>
    </header>
  );
};

export default Header;
