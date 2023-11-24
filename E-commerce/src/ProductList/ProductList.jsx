import React from "react";
import { useContext, useEffect, useState } from "react";
import { storeContext } from "../Context/Context";
import Allproduct from "./Allproduct";
import WomenProduct from "./WomenProduct";
import MenProduct from "./MenProduct";
import ElectronicProduct from "./ElectronicProduct";
import JeweleryProduct from "./JeweleryProduct";
import { Link } from "react-router-dom";
const ProductList = () => {
  const [store, setStore] = useState([]);
  //fetch the products from the api
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => setStore(json));
  }, []);

  const [jewelery, setJewelery] = useState([]);

  const fetchJewelery = () => {
    fetch("https://fakestoreapi.com/products/category/jewelery")
      .then((res) => res.json())
      .then((json) => setJewelery(json));
  };
  useEffect(() => {
    fetchJewelery();
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
    <div className=" gap-9 mt-4  cursor-pointer p-4 flex justify-center align-center flex-col">
      <div className=" rounded-[10px] align-center justify-center flex  gap-9 p-4 ">
        <div
          onClick={() => action(1)}
          className={`${
            tabstate === 1
              ? "   border-b-2 border-b-pink-500  text-center text-xs  w-[70px] h-[30px] grid content-center"
              : "bg-white text-xs grid content-center text-slate-500 "
          }`}
        >
          {" "}
          All{" "}
        </div>
        <div
          onClick={() => action(2)}
          className={`${
            tabstate === 2
              ? "   border-b-2 border-b-pink-500  text-center text-xs  w-[90px] h-[30px] grid content-center"
              : "bg-white text-xs grid content-center text-slate-500 "
          }`}
        >
          {" "}
          jewelery{" "}
        </div>
        <div
          onClick={() => action(3)}
          className={`${
            tabstate === 3
              ? "   border-b-2 border-b-pink-500  text-center text-xs  w-[90px] h-[30px] grid content-center"
              : "bg-white text-xs grid content-center text-slate-500 "
          }`}
        >
          {" "}
          Electronics{" "}
        </div>
        <div
          onClick={() => action(4)}
          className={`${
            tabstate === 4
              ? "   border-b-2 border-b-pink-500  text-center text-xs  w-[120px] h-[30px] grid content-center"
              : "bg-white text-xs grid content-center text-slate-500 "
          }`}
        >
          {" "}
          Women clothings{" "}
        </div>
        <div
          onClick={() => action(5)}
          className={`${
            tabstate === 5
              ? "   border-b-2 border-b-pink-500  text-center text-xs  w-[120px] h-[30px] grid content-center"
              : "bg-white text-xs grid content-center text-slate-500 "
          }`}
        >
          {" "}
          mens clothings{" "}
        </div>
      </div>
      <div>
        <div
          className={`${
            tabstate === 1
              ? "text-slate-900 grid grid-cols-4 gap-4  "
              : "hidden"
          }`}
        >
          {store.map((store) => (
            <div
              key={store.id}
              className="border-2 shadow-md border-slate-200  flex  justify-between align-center justify-center  flex-col"
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
              ? "text-slate-900 grid grid-cols-4 gap-4 justify-items-center "
              : "hidden"
          }`}
        >
          {jewelery.map((item) => (
            <div
              key={item.id}
              className="border-2  flex  justify-between align-center justify-center  flex-col"
            >
           <JeweleryProduct price={item.price} id = {item.id} title={item.title} image={item.image} />
            </div>
          ))}
        </div>

        <div
          className={`${
            tabstate === 3
              ? "text-slate-900 grid grid-cols-3 gap-4 flex justify-center align-center"
              : "hidden"
          }`}
        >
          {electron.map((item) => (
            <div
              key={item.id}
              className="border-2 w-[300px] border-pink-600 border-slate-400 flex  justify-between align-center justify-center  flex-col"
            >
             <ElectronicProduct price={item.price} id = {item.id} title={item.title} image={item.image} />
              
            </div>
          ))}
        </div>

        <div
          className={`${
            tabstate === 4
              ? "text-slate-900  grid grid-cols-3 gap-4 flex justify-center align-center"
              : "hidden"
          }`}
        >
          {women.map((item) => (
            <div
              key={item.id}
              className="border-2 w-[300px]   flex  justify-between align-center justify-center  flex-col"
            >
              <WomenProduct price={item.price} id = {item.id} title={item.title} image={item.image} />
            </div>
          ))}
        </div>

        <div
          className={`${
            tabstate === 5
              ? "text-slate-900 grid grid-cols-4 gap-4 flex justify-center align-center"
              : "hidden"
          }`}
        >
          {men.map((item) => (
            <div
              key={item.id}
              className="border-2 border-pink-600 border-slate-400 flex  justify-between align-center justify-center  flex-col"
            >
             <MenProduct price={item.price} id = {item.id} title={item.title} image={item.image}/>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductList;
