// src/components/Summary.jsx
import React, { useState } from "react";
import LinedIn_Banner from "../assets/images/banners/LinedIn_Banner.png";
import Languages from "./Languages";
import Interests from "./Interests";

const Summary = ({ summary, interests, languages }) => {
  const [divId, setDivId] = useState(1);

  const compoArr = [
    <section className="text-center p-6 animate-fadeIn">
      <h2 className="text-3xl font-bold text-neonGreen">About Me</h2>
      <p className="mt-4 text-gray-300 text-lg">{summary}</p>
    </section>,
    <Interests interests={interests} />,
    <Languages languages={languages} />,
  ];

  const increaseDivId = () => {
    const n = compoArr.length;
    if (divId === n) {
      setDivId(1);
    } else {
      setDivId((p) => p + 1);
    }
  };

  const decreaseDivId = () => {
    const n = compoArr.length;
    if (divId === 1) {
      setDivId(compoArr.length);
    } else {
      setDivId((p) => p - 1);
    }
  };

  return (
    <>
      <div className="w-full max-h-screen absolute z-[-1]">
        <img
          src={LinedIn_Banner}
          alt=""
          className="w-full opacity-40 object-cover"
        />
      </div>

      <div className="w-3/4 mx-auto">
        <div
          className={`bg-red-500 w-full h-[70vh] rounded-3xl ${
            1 === divId ? "" : "hidden"
          }`}
        ></div>
        <div
          className={`bg-blue-500 w-full h-[70vh] rounded-3xl ${
            2 === divId ? "" : "hidden"
          }`}
        ></div>
        <div
          className={`bg-green-500 w-full h-[70vh] rounded-3xl ${
            3 === divId ? "" : "hidden"
          }`}
        ></div>
      </div>
      <div
        className="absolute top-56 right-80 rounded-full bg-gray-100 h-10 w-10 text-black cursor-pointer"
        onClick={increaseDivId}
      ></div>
      <div
        className="absolute top-56 left-80 rounded-full bg-gray-100 h-10 w-10 text-black cursor-pointer"
        onClick={decreaseDivId}
      ></div>
      <div className="flex justify-center gap-4">
        <div
          className={`h-10 w-10 ${
            1 === divId ? "bg-purple-800" : "bg-purple-400"
          }  rounded-full cursor-pointer`}
          onClick={() => setDivId(1)}
        ></div>
        <div
          className={`h-10 w-10 ${
            2 === divId ? "bg-purple-800" : "bg-purple-400"
          }  rounded-full cursor-pointer`}
          onClick={() => setDivId(2)}
        ></div>
        <div
          className={`h-10 w-10 ${
            3 === divId ? "bg-purple-800" : "bg-purple-400"
          }  rounded-full cursor-pointer`}
          onClick={() => setDivId(3)}
        ></div>
      </div>
    </>
  );
};

export default Summary;
