import React, { useContext, useState } from "react";
import { BsSuitHeartFill, BsSearch, BsCart2 } from "react-icons/bs";
import { CiMenuFries, CiCircleRemove } from "react-icons/ci";
import { Link } from "react-router-dom";
import { storeContext } from "../Context/Context";
import "./Navbar.css";
const Navbar = () => {
  const globalContext = useContext(storeContext);
  const state = globalContext.state;
  const dispatch = globalContext.dispatch;
  const [open, setOpen] = useState(true);
  const handleClick = () => setOpen(!open);
  return (
    <div className="smallScreen0">
      <div className="flex justify-around smallScreen1  p-4">
        <div>
          <p className="font-extrabold">
            {" "}
            <span className="text-pink-500"> My</span>-shop
          </p>
        </div>
        <div className="flex justify-between smallScreen gap-9 text-slate-500 cursor-pointer">
          <p>Home</p>
          <p>Product</p>
          <p>Search</p>
         
        </div>
        <div className="flex justify-between gap-9 text-slate-500 cursor-pointer">
          <Link to="/cart">
            <div className="flex  ">
              <p>
                <BsCart2 />
              </p>
              <p className="">{state.length}</p>
            </div>
          </Link>
          <BsSearch />
          <BsSuitHeartFill />
        </div>
      </div>

      {/*for small screen */}
      <div>
        <div className="header shadow-md lg:hidden">
          <p className="font-extrabold">
            {" "}
            <span className="text-pink-500"> My</span>-shop
          </p>
          <div className="flex">
            <p>
              <BsCart2 />
            </p>
            <p className="">{state.length}</p>
          </div>

          <div onClick={handleClick}>{open ? <p>close</p> : <p>open</p>}</div>
        </div>
        <div className={open ? "header2 shadow-sm lg:hidden" : 'header3 lg:hidden'}>
        <p>Home</p>
          <p>Product</p>
          <p>Search</p>
         
        </div>
      </div>
    </div>
  );
};

export default Navbar;
