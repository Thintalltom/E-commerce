import React,{useState, useEffect} from "react";
import { Link } from "react-router-dom";
import { BsHeart, BsHeartFill } from "react-icons/bs";
import { storeContext } from '../Context/Context'
import './ProductList.css'
const Allproduct = ({ image, title, price, id }) => {
  const [iswishList, setIsWishList] = useState(false);
  const [wishlist, setWishlist] = useState([]);

 // const addToWishlist = (id, isAdded) => {
  //  if (isAdded) {
   //   setWishlist(wishlist => ({ ...wishlist, id, title, price }));
   // } else {
      //setWishlist(wishlist.filter((id) => id !== id));
    //}
 // };

  const isAdded = () => {
    setWishlist(prevWishlist => [
      ...prevWishlist,
      { title, price, image }
    ]);
  }

  const ChangeFunc = () => {
    setIsWishList(!iswishList);
    console.log(wishlist)
  };


  

  
  
  return (
    <div className="prodBox">
      <div className=" flex justify-center align-center prodImg    h-[180px]">
        <img src={image} className="w-[200px] proImg h-[150px] mt-[30px]" />
      </div>
      <div className=" prodText shadow-sm text-slate-900 grid text-sm content-center w-[293px]  p-4">
        <p>{title}</p>
        <div className="flex justify-between mt-[5px]">
          <p className="sm:font-extrabold lg:font-bold"> NGN{price}</p>
          <div onClick={ChangeFunc}>
            {iswishList ? <div onClick={isAdded}><BsHeartFill className="text-red-600" /></div> : <BsHeart />}
          </div>
        </div>
        <Link to={`/detail/${id}`}>
          <button className="bg-slate-900 text-white  h-[30px] text-sm  hover:shadow-md shadow-sm w-[90px] p-[2px] mt-4 ">
            View details
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Allproduct;
