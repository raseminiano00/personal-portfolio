import React from "react";
import { BrowserRouter as Link } from "react-router-dom";

const Navbar = () => {
  const handleScroll = (ref) => {
    window.scrollTo({
      top: ref.offsetTop,
      left: 0,
      behavior: "smooth",
    });
  };

  return (
    <nav className="z-10 fixed w-screen flex justify-center top-0 bg-white">
      <ul className="flex">
        <li className="p-8 text-xl font-light hover:cursor-pointer hover:bg-gray-200">
          ABOUT ME
        </li>
        <li className="p-8 text-xl font-light hover:cursor-pointer hover:bg-gray-200">
          MY PROJECTS
        </li>
        <li className="p-8 text-xl font-light hover:cursor-pointer hover:bg-gray-200">
          REACH ME
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
