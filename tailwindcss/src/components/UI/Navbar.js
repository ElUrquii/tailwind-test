import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaStream } from "react-icons/fa";
import { MdClear } from "react-icons/md";

const Navbar = () => {
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(!active);
  };

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
          {!active ? (
            <FaStream
              className="text-2xl mx-2 cursor-pointer"
              onClick={handleClick}
            />
          ) : (
            <MdClear
              className="text-4xl mx-2 cursor-pointer"
              onClick={handleClick}
            />
          )}
        </div>
      </div>
      {active && (
        <div className="sm:hidden h-screen bg-gray-800">
          <div className="h-screen flex flex-col items-center">
            <Link
              to="/trending"
              className="text-xl text-gray-100 transition duration-200 ease-in-out hover:text-blue-400 my-7"
              onClick={handleClick}
            >
              Trending
            </Link>
            <Link
              to="/categories"
              className="text-xl text-gray-100 transition duration-200 ease-in-out hover:text-blue-400 my-7"
              onClick={handleClick}
            >
              Categories
            </Link>
            <Link
              to="/exchanges"
              className="text-xl text-gray-100 transition duration-200 ease-in-out hover:text-blue-400 my-7"
              onClick={handleClick}
            >
              Exchanges
            </Link>
            <Link
              to="/news"
              className="text-xl text-gray-100 transition duration-200 ease-in-out hover:text-blue-400 my-7"
              onClick={handleClick}
            >
              News
            </Link>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
