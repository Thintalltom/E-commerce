import React, { useContext, useState, useEffect } from "react";
import {
  BsSuitHeartFill,
  BsSearch,
  BsCart2,
  BsHeartFill,
} from "react-icons/bs";
import { Link } from "react-router-dom";
import { storeContext } from "../Context/Context";
import { FaGripLines } from "react-icons/fa";
import { MdCancel } from "react-icons/md";
import CartPopup from "../Cart/cartPopup";
import "./Navbar.css";
const Navbar = () => {
  const globalContext = useContext(storeContext);
  const {cart} = globalContext;
  const dispatch = globalContext.dispatch;
  const [open, setOpen] = useState(false);
  const handleClick = () => setOpen(true);

  return (
    <div className="">
      <div className="flex  shadow-sm justify-between p-[20px] h-fit  ">
        <p className="text-slate-900 font-extrabold text-lg">My Shop</p>
       
        <div className="flex justify-center items-center cursor-pointer">
          <p>
            <BsCart2 onClick={handleClick} />
          </p>
          <p className="bg-red-500 p-[5px] text-xs text-white  shadow-md rounded-full w-5 h-5 flex justify-center items-center">{cart.length}</p>
        </div>
   
      </div>
      {open && <CartPopup open={open} setOpen={setOpen} />}
    </div>
  );
};

export default Navbar;
