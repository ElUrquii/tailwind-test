import React from "react";

const ExchangesCard = (props) => {
  const redirectToExchange = () => {
    window.location.href = props.link;
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
          <h2 className="truncate uppercase text-4xl font-extrabold text-gray-800 antialiased text-center my-2">
            {props.name}
          </h2>
        </div>
        <p className="capitalize text-base font-light text-gray-800 mx-2 my-2">
          Year Established: {props.year}
        </p>
        <p className="capitalize text-base font-light text-gray-800 mx-2 my-2">
          Trust Score: {props.trust}
        </p>
        <button
          onClick={redirectToExchange}
          className="rounded-md font-bold bg-transparent border-2 border-gray-800 text-gray-800  mx-2 my-2 py-2 transition duration-250 ease-in-out hover:bg-gray-800 hover:text-gray-100"
        >
          Website
        </button>
      </div>
    </>
  );
};

export default ExchangesCard;
