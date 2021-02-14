import React from "react";
import { Link } from "react-router-dom";

const Navbar = ({ toggle }) => {
  return (
    <nav
      className="flex bg-gray-800 justify-between items-center h-16 text-gray-200 ralative shadow-md"
      role="navigation"
    >
      <Link to="/" className="pl-8 hover:text-blue-300 hover:font-bold">
        TheEats
      </Link>
      <div
        className="px-4 cursor-pointer md:hidden hover:text-yellow-500"
        onClick={toggle}
      >
        <svg
          className="w-6 h-6"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </div>
      <div className="pr-8 hidden md:block">
        <Link className="p-4 link-hover hover:text-black" to="/">
          Home
        </Link>
        <Link className="p-4 link-hover hover:text-black" to="/Menu">
          Menu
        </Link>
        <Link className="p-4 link-hover hover:text-black" to="/About">
          About
        </Link>
        <Link className="p-4 link-hover hover:text-black" to="/Contact">
          Contact
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
