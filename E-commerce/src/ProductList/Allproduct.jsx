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


  

  const truncateText = (text, maxLength) => {
    if (text.length <= maxLength) {
      return text;
    }
    return text.substr(0, maxLength) + '...';
  };
  
  return (
    <div >
      <div className=" flex justify-center align-center   h-[180px]">
        <img src={image} className="lg:w-[200px] sm:w-[150px] xxs:w-[80px] md:w-[200px] xs:w-[100px] h-[150px] mt-[30px]" />
      </div>
      <div className=" xs:w-[200px] sm:w-[275px]  md:w-[345px]  shadow-sm text-slate-900 grid text-sm content-center lg:w-[345px]  p-4 ">
        <p className="text-center ">{truncateText(title, 50)}</p>
        <div className="flex justify-between mt-[5px]">
          <p className="sm:font-extrabold lg:font-bold"> NGN{price}</p>
          <div onClick={ChangeFunc}>
            {iswishList ? <div onClick={isAdded}><BsHeartFill className="text-red-600" /></div> : <BsHeart />}
          </div>
        </div>
        <div className="flex justify-center items-center ">
        <Link to={`/detail/${id}`}>
          <button className="bg-slate-900 text-white xxs:w-[200px] h-[50px] rounded-[10px] text-sm  hover:shadow-md shadow-sm  xs:w-[150px] lg:w-[200px] p-[2px] mt-4 ">
            View details
          </button>
        </Link>
        </div>
      </div>
    </div>
  );
};

export default Allproduct;