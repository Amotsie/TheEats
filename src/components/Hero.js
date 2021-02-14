import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="bg-gray-200 h-screen flex flex-col justify-center items-center">
      <h1 className="lg:text-9xl md:text-7xl sm:text-5xl text-3xl font-black mb-14">
        Hero Section
      </h1>
      <Link
        className="py-4 px-6 text-lg bg-yellow-500 rounded-full hover:bg-yellow-600 hover:text-yellow-100 transition duration-300 ease-in-out flex items-center animate-pulse"
        to="/"
      >
        Scroll Down{" "}
        <svg
          className="h-6 w-6 ml-3 animate-bounce"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M16 17l-4 4m0 0l-4-4m4 4V3"
          />
        </svg>
      </Link>
    </div>
  );
};

export default Hero;
