import React from 'react'
import { BsSuitHeartFill, BsSearch,BsCart2   } from "react-icons/bs";
import {Link} from 'react-router-dom'
const Navbar = () => {
  return (
    <div className='flex justify-around  p-4'>
        <div>
            <p className='font-extrabold'> <span className='text-pink-500'> My
                </span>-shop</p>
        </div>
        <div className='flex justify-between gap-9 text-slate-500 cursor-pointer'>
        <p >Home</p>
        <p >Product</p>
        <p >Service</p>
        <p >Conduct</p>
        </div>
        <div className='flex justify-between gap-9 text-slate-500 cursor-pointer'>
        
        <Link to='/cart'><BsCart2 /></Link>
       <BsSearch />
        <BsSuitHeartFill />
        </div>

    </div>
  )
}

export default Navbar