import React from 'react'
import Navbar from './Navbar/Navbar'
import Content from './ContentPage1/Content'
import ProductList from './ProductList/ProductList'
import { ToastContainer, toast } from 'react-toastify';

const Home = () => {
  return (
      <div className=' h-screen flex justify-center items-center align-center'>
        <div className=' h-screen w-[80%]'>
    <Navbar />
    <Content />
    <ProductList />
    </div>
    </div>
  )
}

export default Home