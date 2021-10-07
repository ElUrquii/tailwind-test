import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Line } from "react-chartjs-2";
import millify from "millify";
import parse from "html-react-parser";
import {
  FaBtc,
  FaDollarSign,
  FaExchangeAlt,
  FaTag,
  FaListUl,
  FaLevelUpAlt,
  FaLevelDownAlt,
  FaWater,
  FaDollyFlatbed,
} from "react-icons/fa";

const CryptoInfo = () => {
  let { coinId } = useParams();

  const [timePeriod, setTimePeriod] = useState("7d");
  const [coinDesc, setCoinDesc] = useState("");
  const [coinData, setCoinData] = useState([]);
  const [price, setPrice] = useState([]);
  const [timestamp, setTimestamp] = useState([]);

  const time = ["1d", "7d", "90d", "365d"];
  const coinPrice = [];
  const coinTimestamp = [];

  useEffect(() => {
    axios
      .get("https://api.coingecko.com/api/v3/coins/" + coinId)
      .then((response) => {
        setCoinDesc(response.data.description.en.toString());
        setCoinData(response.data);
        // console.log(response.data.description.en);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    axios
      .get(
        "https://api.coingecko.com/api/v3/coins/" +
          coinId +
          "/market_chart?vs_currency=usd&days=" +
          timePeriod
      )
      .then((response) => {
        response.data.prices.forEach((price, i) => {
          coinPrice.push(
            millify(response.data.prices[i][1], { precision: 3, units: [""] })
          );
          coinTimestamp.push(
            new Date(response.data.prices[i][0]).toLocaleDateString()
          );
        });
        setPrice(coinPrice);
        setTimestamp(coinTimestamp);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [timePeriod]);

  const data = {
    labels: timestamp,
    datasets: [
      {
        label: "Price in USD",
        data: price,
        fill: false,
        tension: 0.1,
        backgroundColor: "#E5E7EB",
        borderColor: "#1F2937",
        pointBackgroundColor: "#1F2937",
      },
    ],
  };

  const options = {
    scales: {
      yAxes: {
        ticks: {
          beginAtZero: true,
        },
      },
    },
  };

  return (
    <>
      <div className="container mx-auto px-4 my-6">
        <h1 className="capitalize text-6xl font-extrabold text-blue-400 antialiased text-center mb-6">
          {coinId} Details
        </h1>
        <div className="flex justify-center w-full">
          <select
            defaultValue="7d"
            className="cursor-pointer py-2 px-10 border-2 border-gray-200 shadow-xl rounded-md"
            placeholder="Select Time Period"
            onChange={(event) => setTimePeriod(event.target.value)}
          >
            {time.map((date) => {
              return <option>{date}</option>;
            })}
          </select>
        </div>
        <div className="container mx-auto my-6">
          <Line option={options} data={data} />
        </div>
        <h1 className="capitalize text-6xl font-extrabold text-gray-800 antialiased text-center mb-6">
          {coinId} Statistics
        </h1>
        <p className="text-center py-2">Overview of {coinId} statistics.</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-20 gap-y-10 my-6">
          <div className="flex flex-col justify-self-auto bg-gray-200 rounded-md shadow-sm">
            <h1 className="font-bold text-2xl mx-2 my-2 text-blue-400">
              Price Overview
            </h1>
            <div className="flex flex-row mx-2 my-2 items-center border-b-2 border-gray-300">
              <FaBtc />
              <p className="ml-2">Current Price:</p>
              <p className="ml-2 font-bold">
                ${coinData.market_data.current_price.usd}
              </p>
            </div>
            <div className="flex flex-row mx-2 my-2 items-center border-b-2 border-gray-300">
              <FaLevelUpAlt />
              <p className="ml-2">All-Time High:</p>
              <p className=" ml-2 font-bold">${coinData.market_data.ath.usd}</p>
            </div>
            <div className="flex flex-row mx-2 my-2 items-center border-b-2 border-gray-300">
              <FaLevelDownAlt />
              <p className="ml-2">All-Time Low:</p>
              <p className=" ml-2 font-bold">
                ${millify(coinData.market_data.atl.usd, { precision: 2 })}
              </p>
            </div>
          </div>
          <div className="flex flex-col justify-self-auto bg-gray-200 rounded-md shadow-sm">
            <h1 className="font-bold text-2xl mx-2 my-2 text-blue-400">
              General Overview
            </h1>
            <div className="flex flex-row mx-2 my-2 items-center border-b-2 border-gray-300">
              <FaTag />
              <p className="ml-2">Symbol:</p>
              <p className="uppercase ml-2 font-bold">{coinData.symbol}</p>
            </div>
            <div className="flex flex-row mx-2 my-2 items-center border-b-2 border-gray-300">
              <FaListUl />
              <p className="ml-2">Category:</p>
              <p className=" ml-2 font-bold">{coinData.categories[0]}</p>
            </div>
            <div className="flex flex-row mx-2 my-2 items-center border-b-2 border-gray-300">
              <FaDollyFlatbed />
              <p className="ml-2">Total Volume:</p>
              <p className=" ml-2 font-bold">
                $
                {millify(coinData.market_data.total_volume.usd, {
                  precision: 2,
                })}
              </p>
            </div>
          </div>
          <div className="flex flex-col justify-self-auto bg-gray-200 rounded-md shadow-sm">
            <h1 className="font-bold text-2xl mx-2 my-2 text-blue-400">
              Market Stats
            </h1>
            <div className="flex flex-row mx-2 my-2 items-center border-b-2 border-gray-300">
              <FaWater />
              <p className="ml-2">Fully Diluted Valuation:</p>
              <p className=" ml-2 font-bold">
                ${millify(coinData.market_data.fully_diluted_valuation.usd)}
              </p>
            </div>

            <div className="flex flex-row mx-2 my-2 items-center border-b-2 border-gray-300">
              <FaExchangeAlt />
              <p className="ml-2">Market Cap Rank:</p>
              <p className="ml-2 font-bold">{coinData.market_cap_rank}</p>
            </div>
            <div className="flex flex-row mx-2 my-2 items-center border-b-2 border-gray-300">
              <FaDollarSign />
              <p className="ml-2">Market Cap:</p>
              <p className="ml-2 font-bold">
                $
                {millify(coinData.market_data.market_cap.usd, { precision: 2 })}
              </p>
            </div>
          </div>
        </div>
        <h1 className="capitalize text-6xl font-extrabold text-blue-400 antialiased text-center my-8">
          What is {coinId}
        </h1>
        <p className="leading-normal py-2">{parse(coinDesc)}</p>
      </div>
    </>
  );
};

export default CryptoInfo;
