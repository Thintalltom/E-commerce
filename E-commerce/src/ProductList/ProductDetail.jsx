import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const ProductDetail = () => {
  const { id } = useParams();
  const [singleProduct, setSingleProduct] = useState({});

  const detailsInfo = () => {
    fetch(`https://fakestoreapi.com/products/${id} `)
      .then((res) => res.json())
      .then((json) => setSingleProduct(json));
  };

  useEffect(() => {
    detailsInfo();
    console.log(singleProduct);
  }, [id]);

  const { title, image, price, category, rating, description } = singleProduct;

  return (
    <div className="flex flex-col justify-center bg-red-500 gap-4 p-4 align-center">
      <p className="font-extrabold text-2xl">{category}</p>
      <p>{title}</p>
      <div className="flex  gap-4 ">
        <img src={image} className="w-[200px]" />
        <div className="bg-green-500 w-[600px]">
          <p>
            {" "}
            <span className="font-extrabold">Description:</span> {description}
          </p>
          <p> {" "}
            <span className="font-extrabold">Rating:</span>  {rating.rate}</p>
            <p>Price: ${price}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
