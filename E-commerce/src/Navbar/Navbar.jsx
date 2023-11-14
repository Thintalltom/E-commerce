import React from 'react'
import { BsSuitHeartFill, BsSearch,BsCart2   } from "react-icons/bs";

const Navbar = () => {
  return (
    <div className='flex justify-around  p-4'>
        <div>
            <p className='font-extrabold'> <span className='text-pink-500'> My
                </span>-shop</p>
        </div>
        <div className='flex justify-between gap-9 text-slate-500 cursor-pointer'>
        <p className='hover:bg-pink-400 hover:opacity-25 transition hover:ease-in-out delay-150 duration-300  hover:scale-110  hover:text-white hover:w-[70px] hover:p-[5px] hover:text-center hover:rounded-[5px]'>Home</p>
        <p className='hover:bg-slate-400 hover:opacity-25 hover:text-white hover:w-[70px] hover:p-[5px] hover:text-center hover:rounded-[5px]'>Product</p>
        <p className='hover:bg-slate-400 hover:opacity-25 hover:text-white hover:w-[70px] hover:p-[5px] hover:text-center hover:rounded-[5px]'>Service</p>
        <p className='hover:bg-slate-400 hover:opacity-25  hover:text-white hover:w-[70px] hover:p-[5px] hover:text-center hover:rounded-[5px]'>Conduct</p>
        </div>
        <div className='flex justify-between gap-9 text-slate-500 cursor-pointer'>
        <BsCart2 />
       <BsSearch />
        <BsSuitHeartFill />
        </div>

    </div>
  )
}

export default Navbar