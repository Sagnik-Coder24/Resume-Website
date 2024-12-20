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
      className="bg-gray-900 text-violet-200 py-4 shadow-lg border-b-2 border-purple-600"
    >
      <div className="px-6 flex justify-between items-center">
        <div
          className="text-xl font-semibold z-20"
          onClick={() => {
            if (isOpen) toggleMenu();
          }}
        >
          <Link to="/" className="text-purple-400 hover:text-violet-200">
            SG
          </Link>
        </div>
        <div className="hidden md:flex space-x-6 lg:space-x-10 text-sm">
          <Link to="/skills" className="hover:text-purple-400 hover:underline">
            Skills
          </Link>
          <Link
            to="/experience"
            className="hover:text-purple-400 hover:underline"
          >
            Experience
          </Link>
          <Link
            to="/education"
            className="hover:text-purple-400 hover:underline"
          >
            Education
          </Link>
          <Link
            to="/certifications"
            className="hover:text-purple-400 hover:underline"
          >
            Certifications
          </Link>
          <Link
            to="/projects"
            className="hover:text-purple-400 hover:underline"
          >
            Projects
          </Link>
          <Link
            to="/publications"
            className="hover:text-purple-400 hover:underline"
          >
            Publications
          </Link>
        </div>
        {/* Mobile Hamburger */}
        <div className="md:hidden z-20">
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
          className={`absolute w-full z-10 flex flex-col justify-center items-center md:hidden bg-gray-900 text-violet-200 p-6 space-y-4 overflow-hidden rounded-b-3xl shadow-2xl ${
            anime ? "animate-slideDown" : "animate-slideUpNav"
          }`}
        >
          <Link
            to="/skills"
            className="block hover:text-purple-400 hover:underline w-[10px] -translate-x-5"
            onClick={toggleMenu}
          >
            Skills
          </Link>
          <Link
            to="/experience"
            className="block hover:text-purple-400 hover:underline w-[10px] -translate-x-5"
            onClick={toggleMenu}
          >
            Experience
          </Link>
          <Link
            to="/education"
            className="block hover:text-purple-400 hover:underline w-[10px] -translate-x-5"
            onClick={toggleMenu}
          >
            Education
          </Link>
          <Link
            to="/certifications"
            className="block hover:text-purple-400 hover:underline w-[10px] -translate-x-5"
            onClick={toggleMenu}
          >
            Certifications
          </Link>
          <Link
            to="/projects"
            className="block hover:text-purple-400 hover:underline w-[10px] -translate-x-5"
            onClick={toggleMenu}
          >
            Projects
          </Link>
          <Link
            to="/publications"
            className="block hover:text-purple-400 hover:underline w-[10px] -translate-x-5"
            onClick={toggleMenu}
          >
            Publications
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
