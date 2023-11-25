import React from 'react'
import Navbar from './Navbar/Navbar'
import Content from './ContentPage1/Content'
import ProductList from './ProductList/ProductList'
import { ToastContainer, toast } from 'react-toastify';

const Home = () => {
  return (
      <div >
     
    <Navbar />
    <Content />
    <ProductList />
   
    </div>
  )
}

export default Home