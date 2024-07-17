import React from "react";
import { Link } from "react-scroll";

const Navbar = () => {
  return (
    <nav className="z-10  w-screen flex justify-center op-0 bg-white">
      <ul className="flex">
        <li className="p-8 text-xl font-light hover:cursor-pointer hover:bg-gray-200">
          <Link
            to="about"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
          >
            About Me
          </Link>
        </li>
        <li className="p-8 text-xl font-light hover:cursor-pointer hover:bg-gray-200">
          <Link
            to="projects"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
          >
            My Projects
          </Link>
        </li>
        <li className="p-8 text-xl font-light hover:cursor-pointer hover:bg-gray-200">
          Reach Me
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
