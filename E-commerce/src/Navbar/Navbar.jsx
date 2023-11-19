import React,{useContext} from 'react'
import { BsSuitHeartFill, BsSearch,BsCart2   } from "react-icons/bs";
import {Link} from 'react-router-dom'
import { storeContext } from "../Context/Context";
const Navbar = () => {
  const globalContext = useContext(storeContext);
  const state = globalContext.state;
  const dispatch = globalContext.dispatch;
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
        <div className='flex jus    <p>total:{total} </p>tify-between gap-9 text-slate-500 cursor-pointer'>
        <Link to='/cart'>
       <div className='flex  '>
         <p>
         <BsCart2 />
         </p>
     <p className=''>{state.length}</p>
         </div> 
         </Link>
       <BsSearch />
        <BsSuitHeartFill />
        </div>

    </div>
  )
}

export default Navbar