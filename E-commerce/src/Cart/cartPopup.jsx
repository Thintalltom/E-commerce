import React, { useEffect, useContext } from "react";
import { storeContext } from "../Context/Context";
import { MdCancel } from "react-icons/md";
import { FlutterWaveButton, closePaymentModal } from "flutterwave-react-v3";
const CartPopup = ({ open, setOpen }) => {
  const globalContext = useContext(storeContext);
  const { cart } = globalContext;
  console.log(cart);
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

  const subtotal = cart.reduce((acc, item) => acc + item.total, 0);

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
              <MdCancel className="text-lg" />
            </button>
            <p className=" text-center w-[90%]">My Order</p>
          </div>

          <div className="">
            <div className="flex flex-col gap-[20px]  h-screen ">
              <div className="lg:h-[65%] xs:h-[80%] overflow-y-auto ">
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
                      <div className="flex flex-col gap-[15px]">
                        <p className="text-xs">{item.title}</p>
                        <p className="text-xs">
                          {"\u20A6"}
                          {item.total}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="lg:h-[35%] xs:h-[20%]  flex flex-col gap-[20px]">
                <div className="bg-slate-200 flex justify-between p-[10px] ">
                  <p>Subtotal</p>
                  <p>
                    {" "}
                    {"\u20A6"}
                   {subtotal}
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
        </div>
      </div>
    </div>
  );
};

export default CartPopup;
