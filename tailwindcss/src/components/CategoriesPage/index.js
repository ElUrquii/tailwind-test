import React, { useState, useEffect } from "react";
import CategoryCard from "./CategoryCard";
import axios from "axios";

const CategoriesPage = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    axios
      .get("https://api.coingecko.com/api/v3/coins/categories")
      .then((response) => {
        console.log(response.data);
        setCategories(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <>
      <div className="container mx-auto my-6">
        <h1 className="text-6xl font-extrabold text-gray-800 text-center mb-6">
          Categories
        </h1>
        <p className="text-center py-2">See all the crypto categories.</p>
        <div className="my-8 mx-4 grid gap-4 grid-cols-1 justify-items-stretch">
          {categories.map((category) => {
            return (
              <CategoryCard
                key={category.id}
                name={category.name}
                marketCap={category.market_cap}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default CategoriesPage;
