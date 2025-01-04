import React from "react";

function Footer() {
  return (
    <footer className="bg-gradient-to-r from-purple-500 via-violet-500 to-pink-500 py-2 fixed bottom-0 w-full">
      <div className="container mx-auto px-6 text-center text-white">
        <p className="text-xs text-gray-300">
          &copy; {new Date().getFullYear()} Your Name. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
