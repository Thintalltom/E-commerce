import React, { useContext } from "react";
import { storeContext } from "../Context/Context";
import { Link } from "react-router-dom";
const Cart = () => {
  const globalContext = useContext(storeContext);
  const state = globalContext.state;
  const dispatch = globalContext.dispatch;
  const total = state.reduce((total, item) => {
    return(total+item.price*item.quantity)
  },0)
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
                <p>total:{total} </p>
            </div>
          );
        
    }}
 
};

export default Cart;
