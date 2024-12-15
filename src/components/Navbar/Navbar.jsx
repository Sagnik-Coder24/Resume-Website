import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faSquareXmark } from "@fortawesome/free-solid-svg-icons";

import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [anime, setAnime] = useState(false);
  const dropdownRef = useRef(null);

  const toggleMenu = () => {
    setAnime(!anime);
    if (isOpen) {
      setTimeout(() => {
        setIsOpen(!isOpen);
      }, 200);
    } else setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        toggleMenu();
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <nav
      ref={dropdownRef}
      className="bg-gray-900 text-violet-200 py-4 shadow-lg"
    >
      <div className="px-6 flex justify-between items-center">
        <div className="text-xl font-semibold z-20">
          <Link to="/" className="text-purple-400 hover:text-violet-200 ">
            SG
          </Link>
        </div>
        <div className="hidden lg:flex space-x-6 text-sm">
          <Link to="#summary" className="hover:text-purple-400 hover:underline">
            Summary
          </Link>
          <Link to="#skills" className="hover:text-purple-400 hover:underline">
            Skills
          </Link>
          <Link
            to="#experience"
            className="hover:text-purple-400 hover:underline"
          >
            Experience
          </Link>
          <Link
            to="#education"
            className="hover:text-purple-400 hover:underline"
          >
            Education
          </Link>
          <Link
            to="#certifications"
            className="hover:text-purple-400 hover:underline"
          >
            Certifications
          </Link>
          <Link
            to="#projects"
            className="hover:text-purple-400 hover:underline"
          >
            Projects
          </Link>
          <Link
            to="#interests"
            className="hover:text-purple-400 hover:underline"
          >
            Interests
          </Link>
          <Link
            to="#languages"
            className="hover:text-purple-400 hover:underline"
          >
            Languages
          </Link>
          <Link
            to="#publications"
            className="hover:text-purple-400 hover:underline"
          >
            Publications
          </Link>
          <Link to="#contact" className="hover:text-purple-400 hover:underline">
            Contact Me
          </Link>
        </div>
        {/* Mobile Hamburger */}
        <div className="lg:hidden z-20">
          <button
            onClick={toggleMenu}
            className="text-white hover:text-purple-400"
          >
            {isOpen ? (
              <FontAwesomeIcon icon={faSquareXmark} />
            ) : (
              <FontAwesomeIcon icon={faBars} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div
          className={`absolute w-full z-10 flex flex-col justify-center items-center lg:hidden bg-gray-900 text-violet-200 p-6 space-y-4 overflow-hidden rounded-b-3xl shadow-2xl ${
            anime ? "animate-slideDown" : "animate-slideUp"
          }`}
        >
          <Link
            to="#summary"
            className="block hover:text-purple-400 hover:underline w-[10px] -translate-x-5"
          >
            Summary
          </Link>
          <Link
            to="#skills"
            className="block hover:text-purple-400 hover:underline w-[10px] -translate-x-5"
          >
            Skills
          </Link>
          <Link
            to="#experience"
            className="block hover:text-purple-400 hover:underline w-[10px] -translate-x-5"
          >
            Experience
          </Link>
          <Link
            to="#education"
            className="block hover:text-purple-400 hover:underline w-[10px] -translate-x-5"
          >
            Education
          </Link>
          <Link
            to="#certifications"
            className="block hover:text-purple-400 hover:underline w-[10px] -translate-x-5"
          >
            Certifications
          </Link>
          <Link
            to="#projects"
            className="block hover:text-purple-400 hover:underline w-[10px] -translate-x-5"
          >
            Projects
          </Link>
          <Link
            to="#interests"
            className="block hover:text-purple-400 hover:underline w-[10px] -translate-x-5"
          >
            Interests
          </Link>
          <Link
            to="#languages"
            className="block hover:text-purple-400 hover:underline w-[10px] -translate-x-5"
          >
            Languages
          </Link>
          <Link
            to="#publications"
            className="block hover:text-purple-400 hover:underline w-[10px] -translate-x-5"
          >
            Publications
          </Link>
          <Link
            to="#contact"
            className="block hover:text-purple-400 hover:underline w-[10px] whitespace-nowrap -translate-x-5"
          >
            Contact Me
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
