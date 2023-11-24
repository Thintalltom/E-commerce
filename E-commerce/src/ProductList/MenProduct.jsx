import React, { useState } from "react";
import { Link } from "react-router-dom";
import { BsHeart, BsHeartFill } from "react-icons/bs";

const MenProduct = ({ title, id, image, price }) => {
    const [isWishList, setIsWishList] = useState(false);
    const [wishList, setWishList] = useState([])
    const [newProduct, setNewproduct] = useState([])
    const isAdded = () => {
      if (isWishList) {
          // Add the product to the wishlist
          setWishList(  [ // with a new array
          ...wishList, // that contains all the old items
          { id, title, image, price } // and one new item at the end
        ]);
        } else {
          // Remove the product from the wishlist if it's already in there
          setWishList((wishList) => wishList.filter(item => item.id !== id));
        }
      };
    const ChangeFunc = () => {
      setIsWishList(!isWishList);
      isAdded(); // Call isAdded to handle wishlist changes
      console.log(wishList)
    };
    return (
      <div className=" w-[300px] ">
        <div className=" w-[300px] flex justify-center align-center    h-[180px]">
          <img src={image} className="w-[200px] h-[150px] mt-[30px]" />
        </div>
        <div className=" shadow-sm text-slate-900 grid text-sm content-center w-[293px]  p-4">
          <p>{title}</p>
          <div className="flex justify-between mt-[5px]">
            <p> NGN {price}</p>
            <div onClick={ChangeFunc}>
              {isWishList ? (
                <BsHeartFill className="text-red-600" />
              ) : (
                <BsHeart />
              )}
            </div>
          </div>
          <Link to={`/detail/${id}`}>
            <button className="bg-slate-900 text-white  h-[30px] text-sm  hover:shadow-md shadow-sm w-[90px] p-[2px] mt-4">
              View details
            </button>
          </Link>
        </div>
      </div>
    );
  };

export default MenProduct