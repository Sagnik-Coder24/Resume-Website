import React from "react";
import { Link } from "react-router-dom";
import data from "../../assets/data";

function Footer() {
  const name = data.personal_info.name;
  const f_name = name.split(" ")[0].toLowerCase();

  const gh = data.personal_info.contact_info.github;
  const ln = data.personal_info.contact_info.linkedin;

  return (
    <footer className="bg-gradient-to-r from-purple-800 via-violet-800 to-pink-800 py-3 w-full animate-fadeIn">
      <div className="w-full px-2 sm:px-8 text-center text-xs text-gray-200 flex flex-row justify-between gap-x-1 tracking-wide sm:tracking-widest whitespace-nowrap">
        <p className="flex sm:gap-x-2">
          &copy; <span className="hidden sm:block">Copyright</span>
          {new Date().getFullYear()}
        </p>
        <p className="">
          Made with 🩷 by{" "}
          <Link
            to="/"
            className="underline underline-offset-4 capitalize hover:text-white"
          >
            {f_name}
          </Link>
        </p>
        <div className="flex gap-x-1 flex-wrap justify-center items-center select-none">
          <a
            href={ln}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white"
          >
            <p>LinkedIn</p>
          </a>
          <span className="mx-4 opacity-60 hidden sm:block">|</span>
          <a
            href={gh}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white"
          >
            <p>GitHub</p>
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
