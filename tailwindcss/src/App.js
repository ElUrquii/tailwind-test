import React from "react";
import Card from "./components/UI/Card";

function App() {
  return (
    <div className="container mx-auto">
      <h1 className="text-6xl font-extrabold text-gray-800 antialiased text-center">
        Tailwind
      </h1>
      <div className='mx-4 grid gap-4 grid-cols-1 md:grid-cols-3 justify-items-stretch'>
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
}

export default App;
