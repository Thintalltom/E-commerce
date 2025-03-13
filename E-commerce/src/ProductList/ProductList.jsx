import React, { useState, useContext } from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { storeContext } from "../Context/Context";
import Allproduct from "./Allproduct";
import WomenProduct from "./WomenProduct";
import MenProduct from "./MenProduct";
import ElectronicProduct from "./ElectronicProduct";
import JeweleryProduct from "./JeweleryProduct";

const ProductList = () => {
  const [tabstate, setTabstate] = useState(1);

  const categories = {
    1: "",
    2: "jewelery",
    3: "electronics",
    4: "women's clothing",
    5: "men's clothing",
  };

  const fetchProducts = async (category) => {
    const url = category
      ? `https://fakestoreapi.com/products/category/${category}`
      : "https://fakestoreapi.com/products";
    const response = await axios.get(url);
    return response.data;
  };

  const { data: products, isLoading, isError } = useQuery({
    queryKey: ["products", categories[tabstate]],
    queryFn: () => fetchProducts(categories[tabstate]),
  });

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error fetching data</p>;

  return (
    <div className="p-4 flex flex-col justify-center poppins-medium">
      <div className=" flex justify-center  items-center gap-4 p-4">
        {Object.entries(categories).map(([key, value]) => (
          <div
            key={key}
            onClick={() => setTabstate(Number(key))}
            className={`cursor-pointer p-[10px] text-center text-[10px] rounded-[20px]  ${
              tabstate === Number(key) ? "bg-slate-600 text-white" : "bg-slate-300 text-black"
            }`}
          >
            {key === "1" ? "All" : value.charAt(0).toUpperCase() + value.slice(1)}
          </div>
        ))}
      </div>
      <div className="grid lg:grid-cols-4 sm:grid-cols-1 gap-4 mt-4">
        {products.map((product) => (
          <div
            key={product.id}
            className=" rounded-md bg-white  flex flex-col p-2"
          >
            {tabstate === 1 && <Allproduct {...product} />}
            {tabstate === 2 && <JeweleryProduct {...product} />}
            {tabstate === 3 && <ElectronicProduct {...product} />}
            {tabstate === 4 && <WomenProduct {...product} />}
            {tabstate === 5 && <MenProduct {...product} />}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
