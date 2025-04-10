import React, { useEffect, useContext } from "react";
import { storeContext } from "../Context/Context";
import { MdCancel } from "react-icons/md";
import { FlutterWaveButton, closePaymentModal } from "flutterwave-react-v3";
import { RiDeleteBin7Fill } from "react-icons/ri";
const CartPopup = ({ open, setOpen }) => {
  const globalContext = useContext(storeContext);
  const { cart, setCart } = globalContext;
  console.log(cart);
  const removeProduct = (id) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => (document.body.style.overflow = "auto");
  }, [open]);
  const closeModal = () => {
    setOpen(!open);
  };

  const subtotal = cart.reduce((acc, item) => acc + item.total, 0).toFixed(2);

  const config = {
    public_key: "FLWPUBK_TEST-a222b56e723d00213937e75e5fa80c75-X",
    tx_ref: Date.now(),
    amount: subtotal,
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
    text: "Proceed to Checkout",
    callback: (response) => {
      console.log(response);
      closePaymentModal(); // this will close the modal programmatically
    },
    onClose: () => {},
  };

  return (
    <div className="z-[1050] fixed inset-0 bg-opacity-[20%] poppins-medium  bg-black backdrop-blur-[1px] flex gap-[35px] justify-center items-end md:items-center">
      <div className="bg-white absolute h-full w-full md:w-[50vw] lg:w-[30vw] right-0  ">
        <div>
          <div className="flex flex-row justify-center items-center  p-[5px] border-[0.8px] h-[10vh] shadow-sm">
            <button onClick={closeModal} className=" ">
              <MdCancel className="text-2xl" />
            </button>
            <p className=" text-center w-[90%]">My Order</p>
          </div>
          {cart.length === 0 ? (
            <div className="h-[100vh] gap-[20px] flex justify-center items-center flex-col ">
              <p>Cart is empty 😢</p>
              <button
                onClick={closeModal}
                className="bg-slate-950 p-[10px] poppins-light border-transparent  border-[0.5px] rounded text-white "
              >
                Add Order
              </button>
            </div>
          ) : (
            <div className="">
              <div className="flex flex-col gap-[20px]  h-screen ">
                <div className="h-[65%] overflow-y-auto ">
                  {cart.map((item, index) => {
                    return (
                      <div
                        key={index}
                        className="flex flex-row h-[20vh] gap-[10px] border-b-[0.5px] p-[20px] "
                      >
                        <img
                          src={item.image}
                          alt="image of goods"
                          className="w-[30%] h-[100%]"
                        />
                        <div className="flex flex-col  w-full  gap-[15px]">
                          <p className="text-[10px] poppins-light">
                            {item.title}
                          </p>
                          <div className="flex justify-between">
                            <p className="text-xs poppins-light ">
                              {"\u20A6"}
                              {item.total}
                            </p>
                            <button
                              onClick={() => removeProduct(item.id)}
                              className="text-sm rounded-full p-[5px] bg-slate-300 "
                            >
                              <RiDeleteBin7Fill className="text-zinc-950" />
                            </button>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>

                <div className="  flex  flex-col gap-[10px]  h-[30vh] ">
                  <div className="bg-slate-200 flex justify-between p-[10px] ">
                    <p>Subtotal</p>
                    <p>
                      {"\u20A6"}
                      {parseFloat(subtotal)}
                    </p>
                  </div>
                  <div className=" flex justify-center items-center">
                    <button className="bg-black text-white text-center rounded-full  w-[80%] p-[15px]">
                      <FlutterWaveButton {...fwConfig} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CartPopup;
