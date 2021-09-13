import React, { useState, useEffect } from "react";
import Card from "./components/UI/Card";
import axios from "axios";

function App() {
  const [coins, setCoins] = useState([]);
  const [filteredData, setFilteredData] = useState(coins);

  useEffect(() => {
    axios
      .get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false"
      )
      .then((response) => {
        setCoins(response.data);
        setFilteredData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handleSearchValue = (event) => {
    let resultadoBusqueda = event.target.value;

    let result = [];
    result = coins.filter((coin) => {
      return coin.id.search(resultadoBusqueda) !== -1;
    });

    setFilteredData(result);
  };

  return (
    <div className="container mx-auto my-6">
      <h1 className="text-6xl font-extrabold text-gray-800 antialiased text-center mb-6">
        Crypto Viewer
      </h1>
      <div className="flex justify-center w-full">
        <input
          placeholder="Search Coin"
          className="mb-8 py-2 px-3 shadow-md rounded-md"
          onChange={handleSearchValue}
        />
      </div>
      <div className="mx-4 grid gap-4 grid-cols-1 md:grid-cols-3 justify-items-stretch">
        {filteredData.map((coin) => {
          return (
            <Card
              key={coin.market_cap_rank}
              img={coin.image}
              name={coin.symbol}
              price={coin.current_price}
              coinId={coin.id}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
