import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Card = (props) => {
  const redirectToCryptoPage = () => {
    axios
      .get("https://api.coingecko.com/api/v3/coins/" + props.coinId)
      .then((response) => {
        window.location.href = response.data.links.homepage[0];
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <div className="flex flex-col py-0 px-0 justify-self-auto border-2 border-gray-200 rounded-md shadow-xl">
        <div className="flex flex-row py-0 px-0 mx-2 my-2">
          <img
            src={props.img}
            alt="crypto logo"
            className="pr-2"
            style={{ width: "auto", height: "50px" }}
          />
          <h2 className="uppercase text-4xl font-extrabold text-gray-800 antialiased text-center my-2">
            {props.name}
          </h2>
        </div>
        <p className="capitalize text-base font-light text-gray-800 mx-2 my-2">
          Name: {props.coinId}
        </p>
        <p className="text-base font-light text-gray-800 mx-2 my-2">
          Current Price: ${props.price}
        </p>
        <div className="grid grid-cols-2 my-2">
          <Link
            to={`/info/${props.coinId}`}
            className="text-center rounded-md font-bold bg-gray-800 text-gray-100 py-2  mx-2 transition duration-250 ease-in-out hover:bg-gray-900"
          >
            Info
          </Link>
          <button
            onClick={redirectToCryptoPage}
            className="rounded-md font-bold bg-transparent border-2 border-gray-800 text-gray-800  mx-2 py-2 transition duration-250 ease-in-out hover:bg-gray-800 hover:text-gray-100"
          >
            Website
          </button>
        </div>
      </div>
    </>
  );
};

export default Card;
