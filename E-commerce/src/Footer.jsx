import React from "react";
import { FaCcMastercard, FaMoneyBillTransfer} from "react-icons/fa6";
import { FaCcVisa } from "react-icons/fa";
const Footer = () => {
  return (
    <div>
      <div className="bg-slate-800 lg:h-[38vh] xs:h-[80vh] md:h-[38vh]  p-[10px] text-white">
        <div className="flex justify-around lg-flex-row xs:gap-[40px] xxs:flex-col xxs:gap-[20px] md:flex-row  xs:flex-col">
          <div>
            <p>NEED HELP?</p>
            <p className="font-extralight">Chat with us</p>
            <p className="font-extralight">Help Center</p>
            <p className="font-extralight">Contact Us</p>
          </div>
          <div>
            <p>MAKE MONEY WITH E-SHOP</p>
            <p className="font-extralight">Sell on E-shop</p>
            <p className="font-extralight">Vendor hub</p>
            <p className="font-extralight">Become a sales Consultant</p>
          </div>
          <div>
            <p>ABOUT E-SHOP</p>
            <p className="font-extralight">About us </p>
            <p className="font-extralight">E-shop careers</p>
            <p className="font-extralight">E-shop express</p>
          </div>
        </div>

        <div className="mt-[40px]">
          <p className="text-center font-extrabold">PAYMENT METHOD</p>
        
        <div className="flex gap-[50px] p-4 justify-center items-center">
        <FaCcMastercard className="text-2xl" />
        <FaCcVisa className="text-2xl" />
        <FaMoneyBillTransfer className="text-2xl" />
        </div>

        <p className="text-center mt-[25px] font-extralight">developed by tofG</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
