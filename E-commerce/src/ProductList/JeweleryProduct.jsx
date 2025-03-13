import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { BsHeart, BsHeartFill } from "react-icons/bs";
import { wishContext } from "../Context/wishContext";
const JeweleryProduct = ({ title, id, image, price }) => {
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
    return text.substr(0, maxLength) + "...";
  };

  return (
    <Link to={`/detail/${id}`}>
    <div className="poppins-light rounded-md border-[1px]">
      <div className=" flex justify-center align-center   ">
        <img
          src={image}
          className="lg:w-[100px] sm:w-[150px] xxs:w-[80px] md:w-[100px] xs:w-[100px] h-[100px] mt-[30px]"
        />
      </div>
      <div className=" border-t-[1px]    shadow-sm text-slate-900  text-sm content-center w-full flex justify-between   p-4">
        <p className="text-center text-xs ">{truncateText(title, 20)}</p>
        <div className="flex justify-between mt-[5px]">
          <p className="font-medium"> {"\u20A6"} {price}</p>
        </div>
       
      </div>
    </div>
    </Link>
  );
};

export default JeweleryProduct;
