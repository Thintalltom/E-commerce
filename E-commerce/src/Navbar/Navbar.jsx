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
import "./Navbar.css";
const Navbar = () => {
  const globalContext = useContext(storeContext);
  const state = globalContext.state;
  const dispatch = globalContext.dispatch;
  const [open, setOpen] = useState(true);
  const handleClick = () => setOpen(!open);

  return (
    <div className="">
      <div className="flex  shadow-sm justify-between p-[20px] h-fit  ">
        <p className="text-slate-900 font-extrabold text-lg">My Shop</p>
        <div className="bg-zinc-100 rounded-full w-[25vw] p-[10px] flex items-center h-[6vh] ">
          <input type="text" placeholder="Search" className="text-xs text-black  p-[5px] bg-transparent  outline-none placeholder-slate-500 " />
        </div>
        <Link to="/cart">
        <div className="flex justify-center items-center ">
          <p>
            <BsCart2 />
          </p>
          <p className="bg-red-500 p-[5px] text-xs text-white  shadow-md rounded-full w-5 h-5 flex justify-center items-center">{state.length}</p>
        </div>
        </Link>
      </div>

      {/* for small screen
      <div>
        <div className="header shadow-md lg:hidden ">
          <p className="font-extrabold">
            {" "}
            <span className="text-slate-900"> My</span>-shop
          </p>
          <Link to="/cart">
            <div className="flex">
              <p>
                <BsCart2 />
              </p>
              <p className="">{state.length}</p>
            </div>
          </Link>

          <div>
            <Link to="/wishlist">
              <BsHeartFill className="text-red-600" />
            </Link>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default Navbar;
