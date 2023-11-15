import React, { useState, useEffect } from "react";
import {  BsFacebook,
    BsInstagram,
    BsTwitter } from "react-icons/bs";

const Content = () => {
  return (
    <div className="flex justify-center align-center">
      <div className="bg-pink-200 rounded-[10px] flex flex-row justify-center justify-around align-center  w-[80%] h-[25vw] mt-[20px] ">
        <div className="flex p-9 justify-center  basis-1/2  align-center flex-col">
          <div>
            <p className="font-extrabold text-3xl text-slate-600">
              Get the best product <br /> at your finger tips
            </p>
            <input
              type="text"
              className="mt-4 p-[5px]  text-sm rounded-[10px] text-center text-slate-500"
              defaultValue="Search for product"
            />
          </div>
        </div>

        <div className=" basis-1/4 flex justify-center align-center p-4">
          <img
            src="https://images.unsplash.com/photo-1582588678413-dbf45f4823e9?w=300&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHNob2VzJTIwbmlrZXxlbnwwfHwwfHx8MA%3D%3D"
            className="rounded-[10px] w-[280px]"
          />
        </div>

        <div className=" basis-1/4 p-4 flex flex-col relative">
            <div className="gap-4 flex flex-col  p-4 absolute inset-y-0 right-0">
                <p>
                <BsFacebook />
                </p>
                <p>
                <BsInstagram />
                </p>
            <p>
            <BsTwitter />
            </p>
            </div>
            <img className=" absolute bottom-0 right-0 w-[200px] rounded-br-[40px]" src="https://images.unsplash.com/photo-1585218334450-afcf929da36e?w=300&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cGVyZnVtZSUyMGJvdHRsZXxlbnwwfHwwfHx8MA%3D%3D" />
           
        
        </div>
      </div>
    </div>
  );
};

export default Content;
