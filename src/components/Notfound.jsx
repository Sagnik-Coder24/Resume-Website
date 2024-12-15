import React from "react";

const NotFound = () => {
  return (
    <div className="h-[80vh] bg-darkBg flex items-center justify-center">
      <div className="text-center p-6 bg-gradient-to-br from-purple-900 via-purple-700 to-violet-600 rounded-lg shadow-lg">
        <h1 className="text-6xl font-extrabold text-violet-300">404</h1>
        <h2 className="text-2xl font-semibold text-purple-300">
          Page Not Found
        </h2>
        <p className="mt-4 text-purple-200">
          Oops! The page you are looking for does not exist. Please check the
          URL or go back to the homepage.
        </p>
        <a
          href="/"
          className="mt-6 inline-block px-6 py-3 bg-gradient-to-r from-purple-500 to-violet-500 text-white font-semibold rounded-lg hover:bg-gradient-to-l hover:from-violet-600 hover:to-purple-600 hover:shadow-lg"
        >
          Go to Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;
