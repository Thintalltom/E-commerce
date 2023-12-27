import React,{useState} from 'react'
import { Link } from "react-router-dom";
import { BsHeart, BsHeartFill } from "react-icons/bs";
const JeweleryProduct = ({ title, id, image, price }) => {
    const [isWishList, setIsWishList] = useState(false);
    const [wishList, setWishList] = useState([])
    const [newProduct, setNewproduct] = useState([])
    const isAdded = () => {
      if (isWishList) {
          // Add the product to the wishlist
          setWishList(  [ // with a new array
          ...wishList, // that contains all the old items
          { id, title, image, price } // and one new item at the end
        ]);
        } else {
          // Remove the product from the wishlist if it's already in there
          setWishList((wishList) => wishList.filter(item => item.id !== id));
        }
      };
    const ChangeFunc = () => {
      setIsWishList(!isWishList);
      isAdded(); // Call isAdded to handle wishlist changes
      console.log(wishList)
    };

    
  const truncateText = (text, maxLength) => {
    if (text.length <= maxLength) {
      return text;
    }
    return text.substr(0, maxLength) + '...';
  };

    return (
      <div >
        <div className=" flex justify-center align-center   ">
          <img src={image} className="lg:w-[200px] sm:w-[150px] xxs:w-[80px] md:w-[200px] xs:w-[100px] h-[150px] mt-[30px]" />
        </div>
        <div className=" xs:w-[200px] sm:w-[275px]  md:w-[345px]  shadow-sm text-slate-900 grid text-sm content-center lg:w-[345px]  p-4">
          <p className='text-center '>{truncateText(title, 50)}</p>
          <div className="flex justify-between mt-[5px]">
            <p className='font-bold'> NGN {price}</p>
            <div onClick={ChangeFunc}>
              {isWishList ? (
                <BsHeartFill className="text-red-600" />
              ) : (
                <BsHeart />
              )}
            </div>
          </div>
          <div className="flex justify-center items-center  ">
        <Link to={`/detail/${id}`}>
          <button className="bg-slate-900 text-white  xxs:w-[200px] h-[50px] rounded-[10px] text-sm  hover:shadow-md shadow-sm  xs:w-[150px] lg:w-[200px] p-[2px] mt-4 ">
            View details
          </button>
        </Link>
        </div>
        </div>
      </div>
    );
  };



export default JeweleryProduct