import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { BsHeart, BsHeartFill } from "react-icons/bs";
import { wishContext } from "../Context/wishContext";
import Popup from "../Popup/Popup";
import "./ProductList.css";

const Allproduct = ({ image, title, price, description, loading }) => {
  const [popup, setPopup] = useState(false);

  const globalContext = useContext(wishContext);
  const dispatch = globalContext.dispatch;

  const truncateText = (text, maxLength) => {
    if (text.length <= maxLength) {
      return text;
    }
    return text.substr(0, maxLength) + "...";
  };

  return (
    <div className="poppins-light rounded-md border-[1px]">
      <div className="">
        <div
          className="  flex justify-center align-center h-fit cursor-pointer"
          onClick={() => setPopup(true)}
        >
          <img
            src={image}
            className="lg:w-[100px] sm:w-[150px] xxs:w-[80px] md:w-[100px] xs:w-[100px] h-[100px] mt-[30px]"
          />
        </div>

        <div className="  border-t-[1px]   shadow-sm text-slate-900  text-xs content-center w-full  flex justify-between   p-4 ">
          <p className=" ">{truncateText(title, 20)}</p>
          <p className="font-medium"> {"\u20A6"}{price}</p>
        </div>
        {popup && (
          <Popup
            onClose={() => setPopup?.(false)}
            product={{ title, description, image, price }}
            popup={popup}
          />
        )}
      </div>
    </div>
  );
};

export default Allproduct;
