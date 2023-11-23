import React from "react";
import { useContext, useEffect, useState } from "react";
import { BsHeart, BsHeartFill   } from "react-icons/bs";
import { Link } from "react-router-dom";
import { storeContext } from "../Context/Context";
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
  const [change, setChange] = useState(false)

  const ChangeFunc = () => {
    setChange(!change)
  }
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
          tabstate === 1 ? "text-slate-900 grid grid-cols-4 gap-4  " : "hidden"
        }`}
      >
        {store.map((store) => (
          <div
            key={store.id}
            className="border-2 shadow-md border-slate-200  flex  justify-between align-center justify-center  flex-col"
          >
            <div className=" flex justify-center align-center    h-[180px]">
              <img
                src={store.image}
                className="w-[200px] h-[150px] mt-[30px]"
              />
            </div>
            <div className=" shadow-sm text-slate-900 grid text-sm content-center w-[293px]  p-4">
              <p>{store.title}</p>
              <div className="flex justify-between mt-[5px]">
              <p> NGN{store.price}</p>
              <div onClick={ChangeFunc}>
              {change ? <BsHeartFill className='text-red-600' />  : <BsHeart />  }
              </div>
              </div>
              <Link to={`/detail/${store.id}`}>
                <button className="bg-slate-900 text-white rounded-[10px] h-[50px] hover:bg-slate-900 hover:shadow-md shadow-sm w-[130px] p-[2px] mt-4 ">
                  View details
                </button>
              </Link>
            </div>
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
        {jewelery.map((jewel) => (
          <div
            key={jewel.id}
            className="border-2 border-pink-600 border-slate-400 flex  justify-between align-center justify-center  flex-col"
          >
            <div className=" flex justify-center align-center   h-[300px]">
              <img
                src={jewel.image}
                className="w-[200px] h-[200px] mt-[30px]"
              />
            </div>
            <div className="bg-pink-400 text-slate-100 grid text-sm content-center w-[372px] text-center p-4">
              <p>{jewel.title}</p>
              <Link to={`/detail/${jewel.id}`}>
                <button className="bg-slate-500 text-white rounded-[10px] h-[50px] hover:bg-slate-900 hover:shadow-md shadow-sm w-[130px] p-[2px] mt-4 ">
                  View details
                </button>
              </Link>
            </div>
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
           className="border-2 border-pink-600 border-slate-400 flex  justify-between align-center justify-center  flex-col"
         >
           <div className=" flex justify-center align-center    h-[300px]">
             <img
               src={item.image}
               className="w-[200px] h-[200px] mt-[30px]"
             />
           </div>
           <div className="bg-pink-400 text-slate-100 grid text-sm content-center  w-[503px] text-center p-4">
             <p>{item.title}</p>
             <Link to={`/detail/${item.id}`}>
               <button className="bg-slate-500 text-white rounded-[10px] h-[50px] hover:bg-slate-900 hover:shadow-md shadow-sm w-[130px] p-[2px] mt-4 ">
                 View details
               </button>
             </Link>
           </div>
         </div>
        ))}
      </div>

      <div
        className={`${
          tabstate === 4
            ? "text-slate-900 grid grid-cols-3 gap-4 flex justify-center align-center"
            : "hidden"
        }`}
      >
        {women.map((item) => (
           <div
           key={item.id}
           className="border-2 border-pink-600 border-slate-400 flex  justify-between align-center justify-center  flex-col"
         >
           <div className=" flex justify-center align-center    h-[300px]">
             <img
               src={item.image}
               className="w-[200px] h-[200px] mt-[30px]"
             />
           </div>
           <div className="bg-pink-400 text-slate-100 grid text-sm content-center  w-[503px] text-center p-4">
             <p>{item.title}</p>
             <Link to={`/detail/${item.id}`}>
               <button className="bg-slate-500 text-white rounded-[10px] h-[50px] hover:bg-slate-900 hover:shadow-md shadow-sm w-[130px] p-[2px] mt-4 ">
                 View details
               </button>
             </Link>
           </div>
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
            <div className=" flex justify-center align-center   h-[300px]">
              <img
                src={item.image}
                className="w-[200px] h-[200px] mt-[30px]"
              />
            </div>
            <div className="bg-pink-400 text-slate-100 grid text-sm content-center w-[372px] text-center p-4">
              <p>{item.title}</p>
              <Link to={`/detail/${item.id}`}>
                <button className="bg-slate-500 text-white rounded-[10px] h-[50px] hover:bg-slate-900 hover:shadow-md shadow-sm w-[130px] p-[2px] mt-4 ">
                  View details
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
      </div>
    </div>
  );
};

export default ProductList;
