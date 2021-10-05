import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const CryptoInfo = () => {
  let { coinId } = useParams();

  const [timePeriod, setTimePeriod] = useState("7d");
  const [coinData, setCoinData] = useState([]);

  const time = ["24h", "7d", "1m", "1y"];

  useEffect(() => {
    axios
      .get("https://api.coingecko.com/api/v3/coins/" + coinId)
      .then((response) => {
        setCoinData(response.data);
        console.log(response.data.description.en);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <>
      <div className="container mx-auto my-6">
        <h1 className="capitalize text-6xl font-extrabold text-gray-800 antialiased text-center mb-6">
          {coinId} Details
        </h1>
        <div className="flex justify-center w-full">
          <select
            defaultValue="7d"
            className="cursor-pointer py-2 px-10 border-2 border-gray-200 shadow-xl rounded-md"
            placeholder="Select Time Period"
            onChange={(value) => setTimePeriod(value)}
          >
            {time.map((date) => {
              return <option>{date}</option>;
            })}
          </select>
        </div>
      </div>
    </>
  );
};

export default CryptoInfo;
