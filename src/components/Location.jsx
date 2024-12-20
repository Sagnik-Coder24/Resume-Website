import React from "react";

const Location = ({ location }) => {
  const { city, state, country } = location;

  return (
    <div className="w-full h-full flex justify-center items-center p-4 animate-scaleUp">
      <div className="p-8 md:p-12 text-purple-200 text-center shadow-lg max-w-lg w-full">
        <h1 className="text-3xl lg:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-violet-500 to-pink-500 select-none">
          LOCATION
        </h1>
        <hr className="mt-7 mb-9 border-0 h-[3px] bg-gradient-to-r from-purple-500 via-violet-500 to-pink-500 rounded-full" />
        <div className="mb-4 flex flex-row justify-between items-center">
          <strong className="text-2xl lg:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-violet-500 to-pink-500 select-none">
            CITY
          </strong>
          <p className="text-xl lg:text-2xl">{city}</p>
        </div>

        <div className="mb-4 mt-14 flex flex-row justify-between items-center">
          <strong className="text-2xl lg:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-violet-500 to-pink-500 select-none">
            STATE
          </strong>
          <p className="text-xl lg:text-2xl">{state}</p>
        </div>

        <div className="mb-6 mt-14 flex flex-row justify-between items-center">
          <strong className="text-2xl lg:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-violet-500 to-pink-500 select-none">
            COUNTRY
          </strong>
          <p className="text-xl lg:text-2xl">{country}</p>
        </div>
      </div>
    </div>
  );
};

export default Location;
