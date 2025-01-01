import React, { useEffect, useState } from "react";
import Button from "../Button/Button";
import axios from "axios";

const Interests = ({ interests }) => {
  useEffect(() => {
    const listItems = document.querySelectorAll(".interests");
    listItems.forEach((item, index) => {
      item.style.animationDelay = `${index * 0.1}s`;
    });
  }, []);

  const getRedditByAxios = (interest) => {
    axios
      .get(`https://www.reddit.com/r/${interest}.json`)
      .then((response) => {
        if (response.error) {
          window.open(
            `https://www.google.co.in/search?q=${interest}`,
            "_blank"
          );
        } else {
          window.open(`https://www.reddit.com/r/${interest}`, "_blank");
        }
      })
      .catch(() => {
        window.open(`https://www.google.co.in/search?q=${interest}`, "_blank");
      });
  };

  return (
    <section className="flex items-center justify-center min-h-full animate-fadeIn">
      <div className="text-center p-10 rounded-lg w-full">
        <div className="flex w-full justify-center items-center h-fit">
          <h1 className="w-fit text-3xl lg:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-violet-500 to-pink-500 select-none uppercase">
            INTERESTS
          </h1>
        </div>

        <div className="mt-12 flex flex-wrap justify-evenly gap-x-8">
          {interests.map((interest, index) => (
            <div key={index}>
              <div
                className="py-4 md:py-6 rounded-lg interests hidden sm:block"
                onClick={() => getRedditByAxios(interest)}
              >
                <Button text={interest} width="320px" />
              </div>
              <div
                className="py-4 md:py-6 rounded-lg interests sm:hidden"
                onClick={() => getRedditByAxios(interest)}
              >
                <Button text={interest} width="260px" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Interests;
