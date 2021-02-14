import React from "react";
import { Link } from "react-router-dom";

const Dropdown = ({ isOpen, toggle }) => {
  return (
    <div
      className={
        isOpen
          ? "grid drid-rows-4 text-center items-center bg-gray-400"
          : "hidden"
      }
      onClick={toggle}
    >
      <Link className="p-4 link-hover" to="/">
        Home
      </Link>
      <Link className="p-4 link-hover" to="/Menu">
        Menu
      </Link>
      <Link className="p-4 link-hover" to="/About">
        About
      </Link>
      <Link className="p-4 link-hover" to="/Contact">
        Contact
      </Link>
    </div>
  );
};

export default Dropdown;
