import React from "react";

const Navbar = () => {
  return (
    <nav class="z-10 fixed w-screen flex justify-center top-0 bg-white">
        <ul class="flex">
          <li class="p-8 text-xl font-light hover:cursor-pointer hover:bg-gray-200">
            ABOUT ME
          </li>
          <li class="p-8 text-xl font-light hover:cursor-pointer hover:bg-gray-200">
            MY PROJECTS
          </li>
          <li class="p-8 text-xl font-light hover:cursor-pointer hover:bg-gray-200">
            REACH ME
          </li>
        </ul>
    </nav>
  );
};

export default Navbar;
