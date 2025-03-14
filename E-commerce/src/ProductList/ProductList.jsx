import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Allproduct from "./Allproduct";
import WomenProduct from "./WomenProduct";
import MenProduct from "./MenProduct";
import ElectronicProduct from "./ElectronicProduct";
import JeweleryProduct from "./JeweleryProduct";

const ProductList = () => {
  const [tabsClick, setTabsClick] = useState(1); 

  const categories = {
    1: "https://fakestoreapi.com/products",
    2: "https://fakestoreapi.com/products/category/jewelery",
    3: "https://fakestoreapi.com/products/category/electronics",
    4: "https://fakestoreapi.com/products/category/women's clothing",
    5: "https://fakestoreapi.com/products/category/men's clothing",
  };

  const tabs = [
    { id: 1, label: "All" },
    { id: 2, label: "Jewelery" },
    { id: 3, label: "Electronics" },
    { id: 4, label: "Women" },
    { id: 5, label: "Men" },
  ];

  const fetchProducts = async () => {
    const responses = await Promise.all(
      Object.values(categories).map((url) => axios.get(url))//map through the object values
    );
  
    return {
      all: responses[0].data,
      jewelery: responses[1].data,
      electronics: responses[2].data,
      women: responses[3].data,
      men: responses[4].data,
    };
  };


  const { data, isLoading, isError } = useQuery({
    queryKey: ["allProducts"],
    queryFn: fetchProducts,
  });

 
  const selectedProducts = data
    ? tabsClick === 1
      ? data.all
      : tabsClick === 2
      ? data.jewelery
      : tabsClick === 3
      ? data.electronics
      : tabsClick === 4
      ? data.women
      : data.men
    : [];

  return (
    <div className="p-4 flex flex-col justify-center poppins-medium">
    
      <div className="flex justify-center items-center gap-4 p-4">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            className={`p-2 ${
              tabsClick === tab.id ? "bg-slate-500 text-white text-xs poppins-light" : "bg-gray-200 text-xs poppins-light"
            } rounded-full lg:p-[1%] sm:p-[2%]`}
            onClick={() => setTabsClick(tab.id)}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {isLoading && <p className="text-center mt-4">Loading...</p>}
      {isError && <p className="text-center mt-4 text-red-500">Error fetching data</p>}

     
      <div className="grid lg:grid-cols-4 sm:grid-cols-1 gap-4 mt-4">
        {selectedProducts.map((product) => (
          <div key={product.id} className="rounded-md bg-white flex flex-col p-2">
            {tabsClick === 1 && <Allproduct {...product} />}
            {tabsClick === 2 && <JeweleryProduct {...product} />}
            {tabsClick === 3 && <ElectronicProduct {...product} />}
            {tabsClick === 4 && <WomenProduct {...product} />}
            {tabsClick === 5 && <MenProduct {...product} />}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
