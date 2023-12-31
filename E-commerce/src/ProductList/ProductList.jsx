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
    <div className=" gap-9 mt-4  cursor-pointer p-4 flex justify-center align-center flex-col ">
      <div className="xxs:grid xxs:grid-cols-3 xs:flex    rounded-[10px] align-center justify-center flex  gap-9 p-4 ">
        <div
          onClick={() => action(1)}
          className={`${
            tabstate === 1
              ? "   border-b-2 border-b-slate-500  text-center text-xs gridText2  w-[70px] h-[30px] grid content-center"
              : "bg-white text-xs grid content-center text-slate-500 gridText"
          }`}
        >
          {" "}
          All{" "}
        </div>
        <div
          onClick={() => action(2)}
          className={`${
            tabstate === 2
              ? "   border-b-2 border-b-slate-500  text-center text-xs gridText2  w-[90px] h-[30px] grid content-center"
              : "bg-white text-xs grid content-center text-slate-500 gridText"
          }`}
        >
          {" "}
          Jewelery{" "}
        </div>
        <div
          onClick={() => action(3)}
          className={`${
            tabstate === 3
              ? "   border-b-2 border-b-slate-500  text-center text-xs gridText2 w-[90px] h-[30px] grid content-center"
              : "bg-white text-xs grid content-center text-slate-500 gridText"
          }`}
        >
          {" "}
          Electronics{" "}
        </div>
        <div
          onClick={() => action(4)}
          className={`${
            tabstate === 4
              ? "   border-b-2 border-b-slate-500 text-center text-xs gridText2 w-[120px] h-[30px] grid content-center"
              : "bg-white text-xs grid content-center text-slate-500 gridText"
          }`}
        >
          {" "}
          Women clothings{" "}
        </div>
        <div
          onClick={() => action(5)}
          className={`${
            tabstate === 5
              ? "   border-b-2 border-b-slate-500  text-center text-xs   w-[120px] h-[30px] grid content-center"
              : "bg-white text-xs grid content-center text-slate-500 gridText"
          }`}
        >
          {" "}
          Mens clothings{" "}
        </div>
      </div>
      <div>
        <div
          className={`${
            tabstate === 1
              ? "text-slate-900 grid xxs:gap-[30px]  lg:grid-cols-auto lg:justify-items-center xs:justify-items-center xl:grid-cols-3 lg:gap-4 p-4 xs:gap-[50px] mx-auto xs:grid-cols-2  "
              : "hidden"
          }`}
          >
          {store.map((store) => (
            <div
              key={store.id}
              className="border-2   xs:w-[200px] sm:min-w-[280px] md:w-[350px] rounded-[15px] sm:w-[200px] bg-white shadow-md border-slate-200 flex  justify-between align-center justify-center  flex-col"
            >
              <Allproduct
                image={store.image}
                title={store.title}
                price={store.price}
                id={store.id}
                addToWishlist={addToWishlist}
              />
            </div>
          ))}
        </div>

        <div
          className={`${
            tabstate === 2
              ? "text-slate-900 grid xxs:gap-[30px]  lg:grid-cols-auto lg:justify-items-center xs:justify-items-center xl:grid-cols-2 lg:gap-4 p-4 xs:gap-[50px] mx-auto xs:grid-cols-2 "
              : "hidden"
          }`}
          >
          {jewelery.map((item) => (
            <div
              key={item.id}
              className="border-2   xs:w-[200px] sm:min-w-[280px] md:w-[350px] rounded-[15px] sm:w-[200px] bg-white shadow-md border-slate-200 flex  justify-between align-center justify-center  flex-col"
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
              ? "text-slate-900 grid xxs:gap-[30px]  lg:grid-cols-auto lg:justify-items-center xs:justify-items-center xl:grid-cols-3 lg:gap-4 p-4 xs:gap-[50px] mx-auto xs:grid-cols-2 "
              : "hidden"
          }`}
        >
          {electron.map((item) => (
            <div
              key={item.id}
              className="border-2   xs:w-[200px] sm:min-w-[280px] md:w-[350px] rounded-[15px] sm:w-[200px] bg-white shadow-md border-slate-200 flex  justify-between align-center justify-center  flex-col"
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
              ? "text-slate-900 grid xxs:gap-[30px]  lg:grid-cols-auto lg:justify-items-center xs:justify-items-center xl:grid-cols-3 lg:gap-4 p-4 xs:gap-[50px] mx-auto xs:grid-cols-2 "
              : "hidden"
          }`}
        >
          {women.map((item) => (
            <div
              key={item.id}
              className="border-2   xs:w-[200px] sm:min-w-[280px] md:w-[350px] rounded-[15px] sm:w-[200px] bg-white shadow-md border-slate-200 flex  justify-between align-center justify-center  flex-col"
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
              ? "text-slate-900 grid xxs:gap-[30px]  lg:grid-cols-auto lg:justify-items-center xs:justify-items-center xl:grid-cols-2 lg:gap-4 p-4 xs:gap-[50px] mx-auto xs:grid-cols-2 "
              : "hidden"
          }`}
        >
          {men.map((item) => (
            <div
              key={item.id}
              className="border-2   xs:w-[200px] sm:min-w-[280px] md:w-[350px] rounded-[15px] sm:w-[200px] bg-white shadow-md border-slate-200 flex  justify-between align-center justify-center  flex-col"
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
