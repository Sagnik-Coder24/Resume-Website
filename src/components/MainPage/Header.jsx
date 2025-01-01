import React, { useState } from "react";
import { Tooltip } from "@material-tailwind/react";

import gmail from "../../assets/images/icons/gmail.png";
import linkedin from "../../assets/images/icons/linkedin.png";
import github from "../../assets/images/icons/github.png";
import twitter from "../../assets/images/icons/twitter.png";
import medium from "../../assets/images/icons/medium.png";
import LC from "../../assets/images/icons/LC.png";
import insta from "../../assets/images/icons/insta.png";
import Button from "../Button/Button";
import { Link } from "react-router-dom";
import Instagram from "./Instagram";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const Header = ({ pic, name, title, headline, contact }) => {
  const [instaClicked, setInstaClicked] = useState(false);

  return (
    <div className="min-h-[90vh] flex justify-center items-center pt-4">
      <div className="w-full custom-xlg:w-4/6 h-auto">
        <div className="flex flex-col md:flex-row justify-evenly custom-xlg:justify-between items-center md:text-left p-6 lg:p-12 md:pt-16">
          {/* Left Side Content */}
          <div className="h-auto min-w-fit md:w-1/2 mb-6 md:mb-0 animate-fadeIn text-left">
            <div className="flex justify-center flex-col items-center md:justify-start md:items-start">
              <h1 className="w-fit text-3xl lg:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-violet-500 to-pink-500 select-none">
                Hello 👋, I am
              </h1>
              <h1 className="w-fit text-4xl lg:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-violet-500 to-pink-500 select-none">
                {name}
              </h1>
            </div>

            <div className="text-[25px]">
              <h2 className="mt-6 tracking-wide leading-normal font-extrabold text-violet-300">
                <span className="mr-2 sm:mr-4">
                  <FontAwesomeIcon icon={faStar} beatFade />
                </span>
                {title}
              </h2>
              <div className="select-none whitespace-nowrap flex h-[40px] w-full md:w-fit justify-center items-center md:justify-start tracking-wide leading-normal box-content">
                <p className="text-violet-300">
                  <span className="mr-2 sm:mr-4">
                    <FontAwesomeIcon icon={faStar} beatFade />
                  </span>
                  I am a
                </p>
                <div className="font-bold max-h-[40px] text-left overflow-hidden relative mt-[6px]">
                  {headline.map((word, index) => (
                    <span key={index} className="role">
                      {word}
                    </span>
                  ))}
                  <span className="role">{headline[0]}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side Image */}
          <div className="p-4 h-auto">
            <div className="relative w-52 md:w-56 mx-auto transition-transform transform hover:scale-105 duration-300 ease-in-out animate-scaleUp select-none">
              <img
                src={pic}
                alt="Profile"
                className="w-full h-full rounded-3xl border-2 p-2 border-purple-600 shadow-lg shadow-purple-400 hover:shadow-2xl hover:shadow-purple-400 duration-300 ease-in-out"
              />
            </div>
          </div>
        </div>
        <div>
          <div className="w-full flex justify-center flex-wrap gap-x-10 gap-y-6 md:gap-12 mt-7 md:mt-11 px-2 animate-fadeIn">
            <Link to="/summary">
              <Button
                text="More Details"
                width={
                  window.innerWidth < 430
                    ? `${window.innerWidth - 60}px`
                    : "auto"
                }
              />
            </Link>

            <a
              href="/Sagnik_Ghosh_CV_for_portfolio.pdf"
              target="_blank"
              download="Sagnik-Ghosh_CV.pdf"
            >
              <Button
                text="Download CV"
                width={
                  window.innerWidth < 430
                    ? `${window.innerWidth - 60}px`
                    : "auto"
                }
              />
            </a>

            <Link to="/contact">
              <Button
                text="Contact Me"
                width={
                  window.innerWidth < 430
                    ? `${window.innerWidth - 60}px`
                    : "auto"
                }
              />
            </Link>
          </div>
          <div className="w-4/5 mx-auto mt-20 md:mt-36 flex justify-center text-purple-400 animate-scaleUp">
            <p>Let's Connect! Find Me on Social Media</p>
          </div>
          <hr className="border-t-2 border-purple-400 w-[283px] mx-auto mt-2 mb-2 animate-scaleUp" />
          <div className="flex flex-row justify-evenly items-center p-6 flex-wrap gap-4">
            <Tooltip placement="bottom" content="Email">
              <a
                href={`mailto:${contact.email}`}
                target="_blank"
                className="transform transition-transform duration-200 ease-in-out hover:scale-110 animate-scaleUp"
              >
                <img
                  src={gmail}
                  alt={contact.email}
                  className="w-10 h-10 rounded-full border-[1px] border-purple-600 p-2"
                />
              </a>
            </Tooltip>
            <Tooltip placement="bottom" content="LinkedIn">
              <a
                href={contact.linkedin}
                target="_blank"
                className="transform transition-transform duration-200 ease-in-out hover:scale-110 animate-scaleUp"
              >
                <img
                  src={linkedin}
                  alt="LinkedIn"
                  className="w-10 h-10 rounded-full border-[1px] border-purple-600 p-2"
                />
              </a>
            </Tooltip>
            <Tooltip placement="bottom" content="GitHub">
              <a
                href={contact.github}
                target="_blank"
                className="transform transition-transform duration-200 ease-in-out hover:scale-110 animate-scaleUp"
              >
                <img
                  src={github}
                  alt="GitHub"
                  className="w-10 h-10 rounded-full border-[1px] border-purple-600 p-2"
                />
              </a>
            </Tooltip>
            <Tooltip placement="bottom" content="Twitter">
              <a
                href={contact.twitter}
                target="_blank"
                className="transform transition-transform duration-200 ease-in-out hover:scale-110 animate-scaleUp"
              >
                <img
                  src={twitter}
                  alt="Twitter"
                  className="w-10 h-10 rounded-full border-[1px] border-purple-600 p-2"
                />
              </a>
            </Tooltip>
            <Tooltip placement="bottom" content="Medium">
              <a
                href={contact.medium}
                target="__blank"
                className="transform transition-transform duration-200 ease-in-out hover:scale-110 animate-scaleUp"
              >
                <img
                  src={medium}
                  alt="Medium"
                  className="w-10 h-10 rounded-full border-[1px] border-purple-600 p-2"
                />
              </a>
            </Tooltip>
            <Tooltip placement="bottom" content="LeetCode">
              <a
                href={contact.leetcode}
                target="__blank"
                className="transform transition-transform duration-200 ease-in-out hover:scale-110 animate-scaleUp"
              >
                <img
                  src={LC}
                  alt="LeetCode"
                  className="w-10 h-10 rounded-full border-[1px] border-purple-600 p-2"
                />
              </a>
            </Tooltip>
            <Tooltip placement="bottom" content="Instagram">
              <button
                className="transform transition-transform duration-200 ease-in-out hover:scale-110 animate-scaleUp"
                onClick={() => setInstaClicked(true)}
              >
                <img
                  src={insta}
                  alt="LeetCode"
                  className="w-10 h-10 rounded-full border-[1px] border-purple-600 p-2"
                />
              </button>
            </Tooltip>
            {instaClicked && (
              <Instagram
                link={contact.instagram.link}
                qr={contact.instagram.qr_code}
                setInstaClicked={setInstaClicked}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
