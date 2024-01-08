import React from 'react'
import Navbar from './Navbar/Navbar'
import Content from './ContentPage1/Content'
import ProductList from './ProductList/ProductList'
import { ToastContainer, toast } from 'react-toastify';
import Footer  from './Footer'
const Home = () => {
  return (
      <div >
     
    <Navbar />
    <Content />
    <ProductList />
    <Footer />
   
    </div>
  )
}

export default Home