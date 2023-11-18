import React, { useState, useEffect,  useContext } from "react";
import { useParams } from "react-router-dom";
import { storeContext } from '../Context/Context'
import { Link } from "react-router-dom";

const ProductDetail = () => {
  const { id } = useParams();
  const [singleProduct, setSingleProduct] = useState({});
  const [count, setCount] = useState(0);

  const detailsInfo = () => {
    fetch(`https://fakestoreapi.com/products/${id} `)
      .then((res) => res.json())
      .then((json) => setSingleProduct(json));
  };

  useEffect(() => {
    detailsInfo();

  }, [id]);

  const  globalContext = useContext(storeContext) // to access the data from the context
  const dispatch = globalContext.dispatch // this adds the details of the product into an object
  console.log(globalContext)
  const { title, image, price, category, rating, description } = singleProduct;

  return (
    <div className="flex flex-col justify-center  gap-4 p-4 align-center">
     <Link to='/'>
     <button>back</button>
     </Link> 
      <p className="font-extrabold text-2xl">{category}</p>
      <p>{title}</p>
      <div className="flex  gap-4 ">
        <img src={image} className="w-[200px]" />
        <div className="w-[600px]">
          <p>
            {" "}
            <span className="font-extrabold">Description:</span> {description}
          </p>

          <p>Price: ${price}</p>

          <button onClick={() => dispatch({type: 'ADD', payload:singleProduct})} className="border-2 bg-slate-400 border-slate-300 p-4">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
