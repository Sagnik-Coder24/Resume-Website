import React from "react";

const Instagram = ({ link, qr, setInstaClicked }) => {
  return (
    <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-80 z-40 flex flex-col lg:flex-row justify-evenly items-center p-4 animate-fadeIn">
      <div className="bg-gradient-to-r from-purple-500 via-violet-500 to-pink-500 p-10 rounded-2xl">
        <img
          src={qr}
          alt={link}
          className="max-h-[40vh] min-h-[200px] object-contain rounded-lg shadow-lg"
        />
      </div>

      <a href={link} target="_blank" rel="noopener noreferrer">
        <div className="border-2 border-purple-600 rounded-3xl px-10 py-4 bg-black hover:bg-purple-600 transition-all duration-300 ease-out text-lg font-semibold text-purple-400 hover:text-purple-100">
          Click here to visit Instagram page{" "}
        </div>
      </a>

      <button
        className="absolute top-8 right-8 text-white font-bold text-2xl bg-purple-500 rounded-full p-2 hover:bg-violet-600 transition-all duration-300"
        onClick={() => setInstaClicked(false)}
      >
        X
      </button>
    </div>
  );
};

export default Instagram;
