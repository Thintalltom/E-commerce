import React, { useContext } from "react";
import { storeContext } from "../Context/Context";
import { Link } from "react-router-dom";
import { FlutterWaveButton, closePaymentModal } from 'flutterwave-react-v3';
const Cart = () => {
  const globalContext = useContext(storeContext);
  const state = globalContext.state;
  const dispatch = globalContext.dispatch;
  const total = state.reduce((total, item) => {
    return(total+item.price*item.quantity)
  },0)

  const config = {
    public_key: 'FLWPUBK_TEST-a222b56e723d00213937e75e5fa80c75-X',
    tx_ref: Date.now(),
    amount: total,
    currency: 'NGN',
    payment_options: 'card,mobilemoney,ussd',
    customer: {
      email: 'user@gmail.com',
      phone_number: '070********',
      name: 'john doe',
    },
    customizations: {
      title: 'My store',
      description: 'Payment for items in cart',
      logo: 'https://st2.depositphotos.com/4403291/7418/v/450/depositphotos_74189661-stock-illustration-online-shop-log.jpg',
    },
  };

  const fwConfig = {
    ...config,
    text: 'Pay with Flutterwave!',
    callback: (response) => {
       console.log(response);
      closePaymentModal() // this will close the modal programmatically
    },
    onClose: () => {},
  };

  {if(state.length == 0)
    {
        return(
            <div>
                <p>CART SECTION</p>
                <Link to='/'>
                     <p>Your cart is empty add product here</p>
                </Link>
               
            </div>
        )

    } else{
        return (
            <div className="p-4">
                <Link to='/'>
                <p>back</p>
                </Link>
                
              <p className="text-center text-2xl font-bold">Cart section</p>
             
              {state.map((item, index) => (
                <div
                  key={item.id}
                  className="flex p-4 gap-[20px]  border-2 border-slate-500 mt-4 justify-between"
                >
                  <img src={item.image} className="w-[100px]" />
                  <p>{item.title}</p>
                  <p>{item.price}</p>
                  <p>{item.quantity}</p>
                  <p>{item.quantity * item.price}</p>
                  <button
                    className="border-2 border-slate-300 p-[6px] h-[40px] "
                    onClick={() => dispatch({ type: "INCREASE", payload: item })}
                  > + </button>
                  <p>{item.quantity}</p>
                  <button
                    className="border-2 border-slate-300 p-[6px]  h-[40px]"
                    onClick={() => {
                      if (item.quantity > 1) {
                        dispatch({ type: "DECREASE", payload: item });
                      } else {
                        dispatch({ type: "REMOVE", payload: item });
                      }
                    }}
                  > - </button>
                  <button className="bg-red-700 text-white p-[10px] h-[40px] flex text-center" onClick={() => dispatch({ type: "REMOVE", payload: item })}>
                    x
                  </button>

                </div>

              ))}
              <div className="flex justify-between mt-4">
              <p>Total:{total} </p>
              <button className="hover:bg-slate-900 border-2 border-slate-300 shadow-md  hover:text-white h-[50px] w-[200px] rounded-[10px]"><FlutterWaveButton {...fwConfig} /></button>
                
              </div>
                
            </div>
          );
        
    }}
 
};

export default Cart;
