import React, {useState, useEffect} from "react";
import Card from "./components/UI/Card";
import axios from 'axios'

function App() {
  const [coins, setCoins] = useState([])

  useEffect(() => {
    axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false')
    .then((response) => {
      setCoins(response.data)
    })
    .catch((error) => {
      console.log(error)
    })
  }, [])

  return (
    <div className="container mx-auto">
      <h1 className="text-6xl font-extrabold text-gray-800 antialiased text-center mb-6">
        Crypto Viewer
      </h1>
      <div className='mx-4 grid gap-4 grid-cols-1 md:grid-cols-3 justify-items-stretch'>
        {coins.map((coin) => {
          return(
            <Card img={coin.image} name={coin.name} price={coin.current_price} />
          )
        })}
      </div>
    </div>
  );
}

export default App;
