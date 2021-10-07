import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Line } from "react-chartjs-2";
import millify from "millify";
import parse from "html-react-parser";

const CryptoInfo = () => {
  let { coinId } = useParams();

  const [timePeriod, setTimePeriod] = useState("7d");
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
          timePeriod +
          "&interval=daily"
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
        console.log(coinPrice, coinTimestamp);
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
        backgroundColor: "#E5E7EB",
        borderColor: "#1F2937",
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
      <div className="container mx-auto my-6">
        <h1 className="capitalize text-6xl font-extrabold text-gray-800 antialiased text-center mb-6">
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
      </div>
    </>
  );
};

export default CryptoInfo;
