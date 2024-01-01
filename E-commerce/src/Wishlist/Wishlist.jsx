import React, { useContext, useState, useEffect } from "react";
import { wishContext } from "../Context/wishContext";
import ClipLoader from "react-spinners/ClipLoader";
import { Link } from "react-router-dom";
const Wishlist = () => {
  const globalContext = useContext(wishContext);
  const state = globalContext.state;
 

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
        <div>
          <p className="text-center">Your WishList Items</p>
          {state.length == 0 ? (
            <Link to="/">
              <div className="text-center text-underline text-blue-500 mt-4">
                Wishlist is empty currently, kindly add product
              </div>
            </Link>
          ) : (
            <div className="flex flex-col justify-center items-center mt-[30px]">
              {state.map((item, index) => (
                <div className="grid grid-row-3">
                  <div className=" flex border-2 flex-col shadow-sm gap-[20px] ">
                    <img src={item.image} className="w-[100px]" />
                    <p className="text-sm">{item.title}</p>
                    <p>NGN{item.price}</p>
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
