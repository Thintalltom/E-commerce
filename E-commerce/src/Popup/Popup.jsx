import React from "react";

const Popup = ({ product, onClose }) => {
  return (
    <div className="z-[1050] fixed inset-0 bg-opacity-[40%] bg-black backdrop-blur-sm flex gap-[35px] justify-center items-end md:items-center ">
      <div className="bg-white p-8 rounded-lg shadow-lg w-[100%] max-w-md relative ">
        <button
          onClick={onClose}
          className="bg-zinc-300 hover:bg-zinc-600 text-black text-sm px-4 py-2  top-0 rounded-full   right-0 absolute  "
        >
          x
        </button>
        <div className="flex justify-center items-center">
          <img src={product.image} className="w-[100px] h-[100px]" />
        </div>

        <h2 className="text-lg font-bold mb-4">{product.title}</h2>
        <p className="text-xs font-light">{product.description}</p>
      </div>
    </div>
  );
};

export default Popup;
