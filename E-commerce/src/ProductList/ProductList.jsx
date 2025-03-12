import React from "react";
import { useContext, useEffect, useState } from "react";
import { storeContext } from "../Context/Context";
import Allproduct from "./Allproduct";
import WomenProduct from "./WomenProduct";
import MenProduct from "./MenProduct";
import ElectronicProduct from "./ElectronicProduct";
import JeweleryProduct from "./JeweleryProduct";
import MoonLoader from "react-spinners/MoonLoader";
import { Link } from "react-router-dom";
import "./ProductList.css";
const ProductList = () => {
  const [store, setStore] = useState([]);
  const [loading, setLoading] = useState(false);
  //fetch the products from the api
  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => {
      fetch("https://fakestoreapi.com/products")
        .then((res) => res.json())
        .then((json) => setStore(json));
      setLoading(!loading);
    }, 3000);
  }, []);


  const [jewelery, setJewelery] = useState([]);

  const fetchJewelery = () => {
    fetch("https://fakestoreapi.com/products/category/jewelery")
      .then((res) => res.json())
      .then((json) => setJewelery(json));
  };
  useEffect(() => {
    const timer = setTimeout(() => {
      fetchJewelery();
      setLoading(false);
    }, 3000);
  }, []);

  const [electron, setElectron] = useState([]);

  const fetchElectronic = () => {
    fetch("https://fakestoreapi.com/products/category/electronics")
      .then((res) => res.json())
      .then((json) => setElectron(json));
  };
  useEffect(() => {
    fetchElectronic();
  }, []);

  const [women, setWomen] = useState([]);

  const fetchWomen = () => {
    fetch(`https://fakestoreapi.com/products/category/women's clothing`)
      .then((res) => res.json())
      .then((json) => setWomen(json));
  };
  useEffect(() => {
    fetchWomen();
  }, []);

  const [men, setMen] = useState([]);

  const fetchMen = () => {
    fetch(`https://fakestoreapi.com/products/category/men's clothing`)
      .then((res) => res.json())
      .then((json) => setMen(json));
  };
  useEffect(() => {
    fetchMen();
  }, []);

  const [tabstate, setTabstate] = useState(1);

  const action = (index) => {
    setTabstate(index);
  };
  const globalContext = useContext(storeContext); // to access the data from the context
  const dispatch = globalContext.dispatch; // this adds the details of the product into an object
  // for adding product to a wishlist
  const [wishlist, setWishlist] = useState([]);

  const addToWishlist = (productId, isAdded) => {
    if (isAdded) {
      setWishlist([...wishlist, productId]);
    } else {
      setWishlist(wishlist.filter((id) => id !== productId));
    }
  };

  return (
    <div className=" gap-3 mt-4 poppins-medium   p-4 flex justify-center align-center flex-col ">
      <div className="xxs:grid xxs:grid-cols-3 xs:flex  rounded-[10px] align-center justify-center flex  gap-7 p-4 ">
        <div
          onClick={() => action(1)}
          className={`${
            tabstate === 1
           ? "  bg-slate-600 text-white font-bold rounded-full text-center text-xs w-fit p-[20px] h-[5vh]  grid content-center cursor-pointer"
              : "bg-slate-300 text-black font-bold rounded-full text-center text-xs w-fit p-[20px] h-[5vh]  grid content-center cursor-pointer"
          }`}
        >
          All
        </div>
        <div
          onClick={() => action(2)}
          className={`${
            tabstate === 2
           ? "  bg-slate-600 text-white font-bold rounded-full text-center text-xs w-fit p-[20px] h-[5vh]  grid content-center cursor-pointer"
              : "bg-slate-300 text-black font-bold  rounded-full text-center text-xs w-fit p-[20px] h-[5vh]  grid content-center cursor-pointer"
          }`}
        >
          {" "}
          Jewelery{" "}
        </div>
        <div
          onClick={() => action(3)}
          className={`${
            tabstate === 3
      ? "  bg-slate-600 text-white font-bold rounded-full text-center text-xs w-fit p-[20px] h-[5vh]  grid content-center cursor-pointer"
              : "bg-slate-300 text-black font-bold  rounded-full text-center text-xs w-fit p-[20px] h-[5vh]  grid content-center cursor-pointer"
          }`}
        >
          {" "}
          Electronics{" "}
        </div>
        <div
          onClick={() => action(4)}
          className={`${
            tabstate === 4
                ? "  bg-slate-600 text-white font-bold rounded-full text-center text-xs w-fit p-[20px] h-[5vh]  grid content-center cursor-pointer"
              : "bg-slate-300 text-black font-bold  rounded-full text-center text-xs w-fit p-[20px] h-[5vh]  grid content-center cursor-pointer"
          }`}
        >
      
          Women 
        </div>
        <div
          onClick={() => action(5)}
          className={`${
            tabstate === 5
              ? "  bg-slate-600 text-white font-bold rounded-full text-center text-xs w-fit p-[20px] h-[5vh]  grid content-center cursor-pointer"
              : "bg-slate-300 text-black font-bold  rounded-full text-center text-xs w-fit p-[20px] h-[5vh]  grid content-center cursor-pointer"
          }`}
        >
      
          Mens 
        </div>
      </div>
      <div className=" mt-[20px]">
        <div
          className={`${
            tabstate === 1
              ? "text-slate-900 "
              : "hidden"
          }`}
          >
              {loading ? <p>...Loading</p> :
              <div className="grid lg:grid-cols-4 sm:grid-cols-1 gap-[10px]  ">
              {store.map((store) => (
                <div
                  key={store.id}
                  className="border-[0.5px] w-full max-w-[500px] rounded-md 
               bg-white shadow-sm border-slate-200 flex  
               flex-col hover:max-w-[500px]"
                >
                  <Allproduct
                    image={store.image}
                    title={store.title}
                    price={store.price}
                    id={store.id}
                    description={store.description}
                    addToWishlist={addToWishlist}
                    loading={loading}
                  />
                </div>
              ))}
              </div>
              }
          
        </div>

        <div
          className={`${
            tabstate === 2
              ? "text-slate-900 grid lg:grid-cols-4 sm:grid-cols-1 gap-[10px]  "
              : "hidden"
          }`}
          >
          {jewelery.map((item) => (
            <div
              key={item.id}
              className="border-[0.5px] w-full max-w-[500px] rounded-md 
           bg-white shadow-sm border-slate-200 flex  
           flex-col"
            >
              <JeweleryProduct
                price={item.price}
                id={item.id}
                title={item.title}
                image={item.image}
              />
            </div>
          ))}
        </div>

        <div
          className={`${
            tabstate === 3
              ? "text-slate-900 grid lg:grid-cols-4 sm:grid-cols-1 gap-[10px]  "
              : "hidden"
          }`}
        >
          {electron.map((item) => (
            <div
              key={item.id}
              className="border-[0.5px] w-full max-w-[500px] rounded-md 
           bg-white shadow-sm border-slate-200 flex  
           flex-col"
            >
              <ElectronicProduct
                price={item.price}
                id={item.id}
                title={item.title}
                image={item.image}
              />
            </div>
          ))}
        </div>

        <div
          className={`${
            tabstate === 4
                 ? "text-slate-900 grid lg:grid-cols-4 sm:grid-cols-1 gap-[10px]  "
              : "hidden"
          }`}
        >
          {women.map((item) => (
            <div
              key={item.id}
              className="border-[0.5px] w-full max-w-[500px] rounded-md 
           bg-white shadow-sm border-slate-200 flex  
           flex-col"
            >
              <WomenProduct
                price={item.price}
                id={item.id}
                title={item.title}
                image={item.image}
              />
            </div>
          ))}
        </div>

        <div
          className={`${
            tabstate === 5
                 ? "text-slate-900 grid lg:grid-cols-4 sm:grid-cols-1 gap-[10px]  "
              : "hidden"
          }`}
        >
          {men.map((item) => (
            <div
              key={item.id}
              className="border-[0.5px] w-full max-w-[500px] rounded-md 
           bg-white shadow-sm border-slate-200 flex  
           flex-col"
            >
              <MenProduct
                price={item.price}
                id={item.id}
                title={item.title}
                image={item.image}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductList;
