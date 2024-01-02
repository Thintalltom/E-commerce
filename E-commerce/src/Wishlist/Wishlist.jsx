import React, { useContext, useState, useEffect } from "react";
import { wishContext } from "../Context/wishContext";
import ClipLoader from "react-spinners/ClipLoader";
import { Link } from "react-router-dom";
import { BsFillTrashFill } from "react-icons/bs";
const Wishlist = () => {
  const globalContext = useContext(wishContext);
  const state = globalContext.state;
  const dispatch = globalContext.dispatch;
  const total = state.reduce((total, item) => {
    return total + item.price * item.quantity;
  }, 0);
 

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  const truncateText = (text, maxLength) => {
    if (text.length <= maxLength) {
      return text;
    }
    return text.substr(0, maxLength) + "...";
  };

  return (
    <div>
      {loading ? (
        <div className="flex justify-center items-center h-screen">
          <ClipLoader
            color={"#000000"}
            loading={loading}
            size={100}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        </div>
      ) : (
        <div className="p-4">
          <Link to='/'>
          <button className="bg-zinc-950 text-white p-4 rounded ">Back</button>
          </Link>
          
          <p className="text-center">Your WishList Items</p>
          {state.length == 0 ? (
            <Link to="/">
              <div className="text-center text-underline text-blue-500 mt-4">
                Wishlist is empty currently, kindly add product
              </div>
            </Link>
          ) : (
            <div className="flex flex-col justify-center gap-4 items-center mt-[30px]">
            
              {state.map((item, index) => (
                <div className="grid grid-row-3 " key={item.id}>
                  <div className=" flex border-2 flex-row  lg:w-[600px] md:w-[400px] sm:w-[400px] xxs:w-[340px] xxs:p-[5px] xs:w-[400px] xl:w-[700px] justify-center items-center p-4  shadow-sm gap-[20px] ">
                    <img src={item.image} className="xxs:w-[50px] lg:w-[100px]" />
                    <p className="text-sm">{item.title}</p>
                   
                    <p>NGN{item.price}</p>
                    <button
                      onClick={() => dispatch({ type: "REMOVE", payload: item })}
                    >    <BsFillTrashFill className="text-2xl"/> </button>
                  </div>
                </div>
              ))}
              
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Wishlist;
