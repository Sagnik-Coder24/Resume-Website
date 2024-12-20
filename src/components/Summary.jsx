import React, { useEffect, useState } from "react";
import bg1 from "../assets/images/banners/bg1.jpg";
import Languages from "./Languages";
import Interests from "./Interests";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronRight,
  faChevronLeft,
} from "@fortawesome/free-solid-svg-icons";
import Location from "./Location";

const Summary = ({ summary, interests, languages, location }) => {
  const [divId, setDivId] = useState(
    JSON.parse(sessionStorage.getItem("dot")) || 1
  );

  useEffect(() => {
    const listItems = document.querySelectorAll(".purple-dot");
    listItems.forEach((item, index) => {
      item.style.animationDelay = `${index * 0.1}s`;
    });
  }, []);

  const compoArr = [
    <section className="text-center p-8 animate-fadeIn">
      <h1 className="text-3xl lg:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-violet-500 to-pink-500 select-none">
        ABOUT ME
      </h1>
      <ul className="mt-10 md:mt-8 text-purple-200 text-base list-inside text-left">
        {summary.map((item, index) => (
          <li key={index} className="purple-dot mt-6">
            {item}
          </li>
        ))}
      </ul>
    </section>,
    <Interests interests={interests} />,
    <Languages languages={languages} />,
    <Location location={location} />,
  ];

  const increaseDivId = () => {
    const div = document.getElementById("scrollable-div");
    div.scrollTo({
      top: 0,
    });
    const n = compoArr.length;
    const res = divId === n ? 1 : divId + 1;
    setDivId(res);
    sessionStorage.setItem("dot", res);
  };

  const decreaseDivId = () => {
    const div = document.getElementById("scrollable-div");
    div.scrollTo({
      top: 0,
    });
    const n = compoArr.length;
    const res = divId === 1 ? n : divId - 1;
    setDivId(res);
    sessionStorage.setItem("dot", res);
  };

  return (
    <div className="relative w-full min-h-[92vh] overflow-hidden select-none">
      {/* Banner Image */}
      <div className="w-full h-full absolute top-0 left-0 z-[-1]">
        <img
          src={bg1}
          alt="Banner"
          className="w-full h-full object-cover opacity-40"
        />
      </div>

      {/* Main Content Container */}
      <div
        id="scrollable-div"
        className="w-11/12 sm:w-3/4 lg:w-1/2 bg-black bg-opacity-40 mx-auto mt-10 rounded-xl border-2 border-purple-800 h-[80vh] md:h-[36em] md:mt-32 overflow-y-auto custom-scrollbar"
      >
        {compoArr.map((item, index) => (
          <div
            key={index}
            className={`${
              index + 1 === divId ? "" : "hidden"
            } transition-opacity duration-500 h-full`}
          >
            {item}
          </div>
        ))}
      </div>

      {/* Pagination Arrows */}
      <div
        className="absolute top-1/2 left-6 lg:left-36 transform -translate-y-1/2 bg-black bg-opacity-40 border-2 border-purple-800 p-2 text-xs rounded-full cursor-pointer hover:bg-purple-800 transition-all"
        onClick={decreaseDivId}
      >
        <FontAwesomeIcon
          icon={faChevronLeft}
          size="lg"
          className="text-purple-200"
        />
      </div>
      <div
        className="absolute top-1/2 right-6 lg:right-36 transform -translate-y-1/2 bg-black bg-opacity-40 border-2 border-purple-800 p-2 text-xs rounded-full cursor-pointer hover:bg-purple-800 transition-all"
        onClick={increaseDivId}
      >
        <FontAwesomeIcon
          icon={faChevronRight}
          size="lg"
          className="text-purple-200"
        />
      </div>

      {/* Navigation Dots */}
      <div className="flex justify-center gap-8 mt-8 md:mt-10">
        {compoArr.map((_, index) => (
          <div
            key={index}
            className={`h-5 w-5 rounded-full cursor-pointer transition-all flex items-center justify-center text-violet-200 border-2 border-purple-800 text-xs p-4 select-none ${
              index + 1 === divId ? "bg-purple-800 text-white" : ""
            }`}
            onClick={() => {
              const div = document.getElementById("scrollable-div");
              div.scrollTo({
                top: 0,
              });
              setDivId(index + 1);
              sessionStorage.setItem("dot", index + 1);
            }}
          >
            {index + 1}
          </div>
        ))}
      </div>
      <hr className="hidden lg:block  absolute top-1/2 left-0 w-[100px] border-t-2 border-purple-800 transform -translate-y-1/2" />
      <hr className="hidden lg:block  absolute top-1/2 right-0 w-[100px] border-t-2 border-purple-800 transform -translate-y-1/2" />
    </div>
  );
};

export default Summary;
