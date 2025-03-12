import React from "react";
import { useState, useEffect } from "react";
import { useContext } from "react";
import { storeContext } from "../Context/Context";
const Popup = ({ product, onClose, popup }) => {
  useEffect(() => {
    if (popup) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => (document.body.style.overflow = "auto"); // Cleanup
  }, [popup]);
  const globalContext = useContext(storeContext);
  const {cart, setCart} = globalContext;
  const [count, setCount] = useState(1);

  const addProductToCart = () => {
    setCart([...cart, { ...product,  total: count * product.price }]);
    onClose();
  }
  return (
    <div className="z-[1050] fixed inset-0 bg-opacity-[20%] bg-black backdrop-blur-[1px] flex gap-[35px] justify-center items-end md:items-center ">
      <div className="bg-white p-8 rounded-lg shadow-lg w-[100%] max-w-md relative flex flex-col gap-[20px] ">
        <button
          onClick={onClose}
          className="bg-zinc-300 text-black hover:bg-zinc-600  text-sm px-4 py-2 mx-[10px] my-[10px] hover:text-white top-0 rounded-full   right-0 absolute  "
        >
          x
        </button>
        <div className="flex justify-center items-center">
          <img src={product.image} className="w-[100px] h-[100px]" />
        </div>
        <div>
          <h2 className="text-sm text-center font-bold mb-4">
            {product.title}
          </h2>
          <p className="text-xs font-light w-[30vw] ">{product.description}</p>
        </div>

        <div className=" flex justify-between">
          <div className="flex gap-[10px] flex-row">
            <button
              className="bg-zinc-300 text-black rounded-full w-[3vw]  p-[5px] h-[100%]"
              onClick={() => setCount(count + 1)}
            >
              +
            </button>
            <button className="w-fit">{count}</button>
            <button
              className="bg-zinc-300 text-black rounded-full w-[3vw]  p-[5px] h-[100%]"
              onClick={() => setCount(count - 1)}
            >
              -
            </button>
          </div>
          <div className="bg-black text-white cursor-pointer flex text-center justify-center items-center rounded-full w-[15vw] shadow-md p-[5px] ">
            <button className="w-[100%] text-xs" onClick={addProductToCart}>
              Add to Cart ({"\u20A6"}
              {count * Math.round(product.price)})
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Popup;
