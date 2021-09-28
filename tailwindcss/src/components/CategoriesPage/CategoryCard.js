import React from "react";

const CategoryCard = (props) => {
  return (
    <>
      <div className="flex flex-col py-0 px-0 justify-self-auto border-2 bg-gray-800 border-gray-200 rounded-md shadow-xl transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-100">
        <div className="flex flex-row py-0 px-0 mx-2 my-2 justify-center">
          <h2 className="uppercase text-4xl font-extrabold text-gray-200">
            {props.name}
          </h2>
        </div>
        <p className="capitalize text-base font-light text-gray-200 mx-2 my-2 text-center">
          Market Cap: ${props.marketCap}
        </p>
      </div>
    </>
  );
};

export default CategoryCard;
