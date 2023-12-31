import React, { useContext } from "react";
import { storeContext } from "../Context/Context";
import { Link } from "react-router-dom";
import { BsDashSquareFill, BsPlusSquareFill, BsFillTrashFill } from "react-icons/bs";
import { FlutterWaveButton, closePaymentModal } from "flutterwave-react-v3";
const Cart = () => {
  const globalContext = useContext(storeContext);
  const state = globalContext.state;
  const dispatch = globalContext.dispatch;
  const total = state.reduce((total, item) => {
    return total + item.price * item.quantity;
  }, 0);
  const truncateText = (text, maxLength) => {
    if (text.length <= maxLength) {
      return text;
    }
    return text.substr(0, maxLength) + "...";
  };

  const config = {
    public_key: "FLWPUBK_TEST-a222b56e723d00213937e75e5fa80c75-X",
    tx_ref: Date.now(),
    amount: total,
    currency: "NGN",
    payment_options: "card,mobilemoney,ussd",
    customer: {
      email: "user@gmail.com",
      phone_number: "070********",
      name: "john doe",
    },
    customizations: {
      title: "My store",
      description: "Payment for items in cart",
      logo: "https://st2.depositphotos.com/4403291/7418/v/450/depositphotos_74189661-stock-illustration-online-shop-log.jpg",
    },
  };

  const fwConfig = {
    ...config,
    text: "Pay with Flutterwave!",
    callback: (response) => {
      console.log(response);
      closePaymentModal(); // this will close the modal programmatically
    },
    onClose: () => {},
  };

  {
    if (state.length == 0) {
      return (
        <div>
          <p>CART SECTION</p>
          <Link to="/">
            <p>Your cart is empty add product here</p>
          </Link>
        </div>
      );
    } else {
      return (
        <div className="p-4  flex justify-center align-center flex-col">
          <Link to="/">
            <button className="bg-zinc-950 p-4 rounded-[4px] text-white ">back</button>
          </Link>

          <p className="text-center text-2xl font-bold">Cart section</p>
          <div className=" flex justify-center items-center flex-col align-center">
            {state.map((item, index) => (
              <div
                key={item.id}
                className="flex p-4 flex-row xxs:flex-col  gap-[20px] shadow-md xxs:w-[300px] lg:w-[800px]   border-2  mt-4 justify-between"
              >
                <div className="flex justify-around lg:flex-row xs:flex-row xxs:flex-row sm:flex-row gap-[20px]  ">
                  <img src={item.image} className="lg:w-[50px] xxs:w-[20px]" />
                  <p className="xxs:text-sm">{item.title}</p>
                  <p className="xxs:text-sm">NGN {item.price}</p> <br />
                </div>
                <div className=" flex gap-4 flex-row-reverse justify-between xs:flex-col xxs:flex-col sm:flex-col">
                  <div className="flex gap-4">
                  <div
                    className=" p-[6px] h-[40px] "
                    onClick={() =>
                      dispatch({ type: "INCREASE", payload: item })
                    }
                  >
                    <BsPlusSquareFill className="text-2xl"/>
                  </div>
                  <p>{item.quantity}</p>
                  <div
                    className=" p-[6px]  h-[40px]"
                    onClick={() => {
                      if (item.quantity > 1) {
                        dispatch({ type: "DECREASE", payload: item });
                      } else {
                        dispatch({ type: "REMOVE", payload: item });
                      }
                    }}
                  >
                    <BsDashSquareFill className="text-2xl" />
                  </div>
                    </div>
                  <div
                    className=" gap-[10px] cursor-pointer p-[10px] h-[40px] flex text-center"
                    onClick={() => dispatch({ type: "REMOVE", payload: item })}
                  >
                   <BsFillTrashFill className="text-2xl"/> Remove
                  </div>
                </div>
              </div>
            ))}
            <div className="flex justify-between xxs:flex-col mt-4 xxs:gap-[10px]">
            <p>Cart Summary</p>
              <p className="font-extrabold">Total: NGN{total} </p>
              <div className="bg-slate-900 border-2 text-white border-slate-300 shadow-md  hover:text-white h-[50px] w-[200px] flex items-center justify-center rounded-[10px]">
                <FlutterWaveButton {...fwConfig} />
              </div>
            </div>
          </div>
        </div>
      );
    }
  }
};

export default Cart;
