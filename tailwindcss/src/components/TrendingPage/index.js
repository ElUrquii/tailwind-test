import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "../UI/Card";

const TrendingPage = () => {
  const [trendingCoins, setTrendingCoins] = useState([]);

  useEffect(() => {
    axios
      .get("https://api.coingecko.com/api/v3/search/trending")
      .then((response) => {
        console.log(response.data.coins);
        setTrendingCoins(response.data.coins);
      });
  }, []);

  return (
    <>
      <div className="container mx-auto my-6">
        <h1 className="text-6xl font-extrabold text-gray-800 antialiased text-center mb-6">
          Trending
        </h1>
        <p className="text-center py-2">
          See the coins that are currently trending.
        </p>
        <div className="my-8 mx-4 grid gap-4 grid-cols-1 md:grid-cols-3 justify-items-stretch">
          {trendingCoins.map((trending) => {
            return (
              <Card
                key={trending.item.market_cap_rank}
                img={trending.item.large}
                name={trending.item.symbol}
                price={trending.item.price_btc + " BTC"}
                coinId={trending.item.id}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default TrendingPage;
