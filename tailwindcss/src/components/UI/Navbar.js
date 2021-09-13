import React from "react";
import { FaStream } from "react-icons/fa";

const Navbar = () => {
  return (
    <>
      <div className="flex justify-between container mx-auto border-b-2 h-16">
        <div className="flex flex-row items-center ">
          <h1 className="text-2xl text-gray-800 font-extrabold mx-2 cursor-pointer">
            Home
          </h1>
        </div>
        <div className="hidden sm:flex sm:flex-row sm:justify-between sm:space-x-6 sm:items-center sm:mx-2">
          <a
            href="/"
            className="transition duration-200 ease-in-out hover:text-blue-400"
          >
            Trending
          </a>
          <a
            href="/"
            className="transition duration-200 ease-in-out hover:text-blue-400"
          >
            Categories
          </a>
          <a
            href="/"
            className="transition duration-200 ease-in-out hover:text-blue-400"
          >
            Exchanges
          </a>
          <a
            href="/"
            className="transition duration-200 ease-in-out hover:text-blue-400"
          >
            News
          </a>
        </div>
        <div className="flex flex-row items-center sm:hidden">
          <FaStream className="text-2xl mx-2 cursor-pointer" />
        </div>
      </div>
      <div className="sm:hidden"></div>
    </>
  );
};

export default Navbar;
