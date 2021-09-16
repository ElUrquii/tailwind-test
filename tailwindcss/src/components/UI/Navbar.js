import React from "react";
import { Link } from "react-router-dom";
import { FaStream } from "react-icons/fa";

const Navbar = () => {
  return (
    <>
      <div className="flex justify-between container mx-auto border-b-2 h-16">
        <div className="flex flex-row items-center ">
          <Link to="/">
            <h1 className="text-2xl text-gray-800 font-extrabold mx-2 cursor-pointer">
              Home
            </h1>
          </Link>
        </div>
        <div className="hidden sm:flex sm:flex-row sm:justify-between sm:space-x-6 sm:items-center sm:mx-2">
          <Link
            to="/trending"
            className="transition duration-200 ease-in-out hover:text-blue-400"
          >
            Trending
          </Link>
          <Link
            to="/categories"
            className="transition duration-200 ease-in-out hover:text-blue-400"
          >
            Categories
          </Link>
          <Link
            to="/exchanges"
            className="transition duration-200 ease-in-out hover:text-blue-400"
          >
            Exchanges
          </Link>
          <Link
            to="/news"
            className="transition duration-200 ease-in-out hover:text-blue-400"
          >
            News
          </Link>
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
