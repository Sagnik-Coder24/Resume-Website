import { faCaretRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const IndvProj = ({ projects, index, setIndex }) => {
  const curProject = projects[index];

  const decreaseIndex = () => {
    const len = projects.length - 1;
    index === 0 ? setIndex(len) : setIndex((i) => i - 1);
  };

  const increaseIndex = () => {
    const len = projects.length - 1;
    index === len ? setIndex(0) : setIndex((i) => i + 1);
  };

  const goToBottom = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth",
    });
  };

  return (
    <div className="mt-12 min-h-[70vh] bg-purple-950 bg-opacity-30 p-6 rounded-xl w-full animate-scaleUp flex justify-evenly items-center gap-x-8 gap-y-8 lg:flex-row flex-col border-2 border-purple-600 border-opacity-40 relative">
      <div className="lg:my-6 border-2 border-purple-600 border-opacity-40 rounded-3xl p-4 select-none">
        <div className="relative">
          <img
            src={curProject.img}
            alt={curProject.title}
            className="object-cover rounded-2xl w-[500px]"
          />
          <div className="absolute top-0 left-0 w-1/2 bottom-0 flex items-center justify-between opacity-0 hover:opacity-100 bg-purple-950 bg-opacity-70 rounded-l-2xl rounded-r-[100px] transition-all duration-500">
            <button className="h-full w-full" onClick={decreaseIndex}>
              <FontAwesomeIcon
                icon={faCaretRight}
                flip="horizontal"
                size="4x"
                style={{ color: "#B197FC" }}
              />
            </button>
          </div>

          <div className="absolute top-0 right-0 w-1/2 bottom-0 flex items-center justify-between opacity-0 hover:opacity-100 bg-purple-950 bg-opacity-70 rounded-r-2xl rounded-l-[100px] transition-all duration-500">
            <button className="h-full w-full" onClick={increaseIndex}>
              <FontAwesomeIcon
                icon={faCaretRight}
                size="4x"
                style={{ color: "#B197FC" }}
              />
            </button>
          </div>
        </div>
      </div>

      <div className="p-6 lg:max-w-[50%] border-2 border-purple-600 border-opacity-40 rounded-3xl">
        <div className="w-full flex justify-center items-center">
          <div className="w-fit text-lg sm:text-xl md:text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-violet-500 to-pink-500 tracking-normal leading-normal flex justify-center items-center mb-8">
            <p>{curProject.title}</p>
          </div>
        </div>

        <div className="text-violet-300 text-sm text-left overflow-y-auto custom-scrollbar flex justify-center items-center tracking-normal leading-normal">
          <p className="">{curProject.description}</p>
        </div>
        <div className="mt-10 flex justify-center items-center gap-2 flex-wrap text-xs text-purple-200 whitespace-nowrap">
          {curProject.technologies.map((skill, index) => (
            <div
              key={index}
              className="py-1 px-4 border-2 border-purple-600 rounded-full bg-purple-950 bg-opacity-40 cursor-default"
            >
              {skill}
            </div>
          ))}
        </div>

        <div className="mt-8">
          <a
            href={curProject.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-purple-300 hover:text-purple-400"
          >
            Live Demo
          </a>
          <span className="mx-4 text-purple-500">|</span>
          <a
            href={curProject.gh}
            target="_blank"
            rel="noopener noreferrer"
            className="text-purple-300 hover:text-purple-400"
          >
            GitHub
          </a>
          {curProject.medium && (
            <>
              <span className="mx-4 text-purple-500">|</span>
              <a
                href={curProject.medium}
                target="_blank"
                rel="noopener noreferrer"
                className="text-purple-300 hover:text-purple-400"
              >
                Medium
              </a>
            </>
          )}
        </div>
      </div>
      <button
        className="absolute bottom-2 text-sm hidden lg:block text-purple-600 opacity-80 hover:opacity-100"
        onClick={goToBottom}
      >
        Scroll to bottom
      </button>
    </div>
  );
};

export default IndvProj;
