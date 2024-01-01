import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { BsHeart, BsHeartFill } from "react-icons/bs";
import { wishContext } from "../Context/wishContext";
const WomenProduct = ({ title, id, image, price }) => {
  const [iswishList, setIsWishList] = useState(false);

  const globalContext = useContext(wishContext);
  const dispatch = globalContext.dispatch;

  const AddWishList = () => {
    const productDetails = { title, price, image, id }; // store the value in a variable
    dispatch({ type: "ADD", payload: productDetails }); // add the product into a state
    setIsWishList(!iswishList);
  };


  const truncateText = (text, maxLength) => {
    if (text.length <= maxLength) {
      return text;
    }
    return text.substr(0, maxLength) + '...';
  };
  
  return (
    <div >
      <div className=" flex justify-center align-center     h-[180px]">
      <img src={image} className="lg:w-[200px] sm:w-[150px] xxs:w-[80px] md:w-[200px] xs:w-[100px] h-[150px] mt-[30px] bg-red-500" />
      </div>
      <div className=" xs:w-[200px] sm:w-[275px]  md:w-[345px]  shadow-sm text-slate-900 grid text-sm content-center lg:w-[345px]  p-4 ">
      <p className="text-center ">{truncateText(title, 50)}</p>
        <div className="flex justify-between mt-[5px]">
          <p> NGN {price}</p>
          <div onClick={AddWishList}>
            {iswishList ? (
              <BsHeartFill className="text-red-600" />
            ) : (
              <BsHeart />
            )}
          </div>
        </div>
        <div className="flex justify-center items-center ">
        <Link to={`/detail/${id}`}>
          <button className="bg-slate-900 text-white xxs:w-[200px] h-[50px] rounded-[10px] text-sm  hover:shadow-md shadow-sm  xs:w-[150px] lg:w-[200px] p-[2px] mt-4 ">
            View details
          </button>
        </Link>
        </div>
      </div>
    </div>
  );
};

export default WomenProduct;
