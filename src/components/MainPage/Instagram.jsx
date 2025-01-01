import { faCircleXmark } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useRef } from "react";

const Instagram = ({ link, qr, setInstaClicked }) => {
  const cardDiv = useRef(null);

  useEffect(() => {
    const handleMouseClick = (event) => {
      if (!cardDiv.current.contains(event.target)) {
        setInstaClicked(false);
      }
    };

    window.addEventListener("mousedown", handleMouseClick);

    return () => {
      window.removeEventListener("mousedown", handleMouseClick);
    };
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-80 z-40 flex justify-center items-center p-4 animate-fadeIn">
      <div
        ref={cardDiv}
        className="flex flex-col justify-evenly items-center py-20 px-14 sm:p-20 gap-24 border-2 border-purple-600 border-opacity-60 rounded-3xl bg-black bg-opacity-50 relative"
      >
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="animated-bg p-10 rounded-2xl group"
        >
          <img
            src={qr}
            alt={link}
            className="max-h-[40vh] min-h-[200px] object-contain rounded-lg shadow-xl group-hover:scale-105 group-hover:shadow-2xl transition-all duration-300 ease-in-out"
          />
        </a>

        <a href={link} target="_blank" rel="noopener noreferrer">
          <div className="border-2 border-purple-600 rounded-3xl px-10 py-4 bg-black hover:bg-purple-600 transition-all duration-300 ease-out text-lg font-semibold text-purple-400 hover:text-purple-100">
            Click here to visit Instagram page
          </div>
        </a>

        <button
          className="absolute top-4 right-4 font-bold text-2xl rounded-full transition-all duration-300 hover:scale-125 text-purple-200 hover:text-purple-400"
          onClick={() => setInstaClicked(false)}
        >
          <FontAwesomeIcon icon={faCircleXmark} />
        </button>
      </div>
    </div>
  );
};

export default Instagram;
