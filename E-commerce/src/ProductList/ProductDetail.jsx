import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { storeContext } from "../Context/Context";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import ClipLoader from "react-spinners/ClipLoader";
import "react-toastify/dist/ReactToastify.css";

const ProductDetail = () => {
  const { id } = useParams();
  const [singleProduct, setSingleProduct] = useState({});
  const navigate = useNavigate();

  const detailsInfo = () => {
    fetch(`https://fakestoreapi.com/products/${id} `)
      .then((res) => res.json())
      .then((json) => setSingleProduct(json));
  };

  useEffect(() => {
    detailsInfo();
  }, [id]);

  const Notify = () => {
    toast("Added to cart");
  };

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  const globalContext = useContext(storeContext); // to access the data from the context
  const dispatch = globalContext.dispatch; // this adds the details of the product into an object
  const { title, image, price, category, rating, description } = singleProduct;
  const AddProduct = () => {
    dispatch({ type: "ADD", payload: singleProduct });
    navigate("/");
  };
  return (
    <div>
      {loading ? (
        <div className="flex justify-center items-center h-screen">
          <ClipLoader
            color={"#000000"}
            loading={loading}
            size={100}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        </div>
      ) : (
        <div className="flex flex-col h-screen gap-4 p-4  ">
          <Link to="/">
            <button className="bg-zinc-950  w-[100px] h-[40px]  shadow-md text-white">
              back
            </button>
          </Link>
          <p className="text-center text-2xl font-extrabold">Product detail</p>
          <div className=" flex justify-around">
            <div>
              <div className="flex xxs:flex xxs:flex-col  gap-4 xs:flex xs:flex-col p-4 lg:flex lg:flex-row">
                <img src={image} className="lg:w-[500px] xs:w-[300px] md:mx-auto sm:mx-auto" />
                <div className=" gap-4 ">
                  <p>
                    <span className="font-extrabold"> Category:</span>{" "}
                    {category}
                  </p>
                  <p>
                    {" "}
                    <span className="font-extrabold"> Name:</span> {title}
                  </p>
                  <p>
                    {" "}
                    <span className="font-extrabold">Description:</span>{" "}
                    {description}
                  </p>
                  <p>
                    <span className="font-extrabold"> Quantity:</span>{" "}
                    {(singleProduct.quantity = 1)}{" "}
                  </p>
                  <p>
                    <span className="font-extrabold"> Price:</span> ${price}
                  </p>

                  <button
                    onClick={AddProduct}
                    className="bg-zinc-950  shadow-md h-[50px] mt-4 hover:bg-slate-900 hover:text-white text-white border-slate-300 w-[200px]"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      <ToastContainer />
    </div>
  );
};

export default ProductDetail;
