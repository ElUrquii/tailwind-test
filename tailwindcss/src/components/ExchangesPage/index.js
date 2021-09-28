import React, { useState, useEffect } from "react";
import axios from "axios";
import ExchangesCard from "./ExchangesCard";

const ExchangesPage = () => {
  const [exchanges, setExchanges] = useState([]);

  useEffect(() => {
    axios
      .get("https://api.coingecko.com/api/v3/exchanges")
      .then((response) => {
        console.log(response.data);
        setExchanges(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <>
      <div className="container mx-auto my-6">
        <h1 className="text-6xl font-extrabold text-gray-800 antialiased text-center mb-6">
          Exchanges
        </h1>
        <p className="text-center py-2">See the best crytpo exchanges.</p>
        <div className="my-8 mx-4 grid gap-4 grid-cols-1 md:grid-cols-3 justify-items-stretch">
          {exchanges.map((exchange) => {
            return (
              <ExchangesCard
                key={exchange.id}
                img={exchange.image}
                name={exchange.name}
                year={exchange.year_established}
                trust={exchange.trust_score}
                link={exchange.url}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default ExchangesPage;
