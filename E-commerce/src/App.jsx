import './App.css'
import Home from './Home';
import {  Routes, Route } from "react-router-dom";
import ProductDetail from './ProductList/ProductDetail';
import Cart from './Cart/Cart';
import Wishlist from './Wishlist/Wishlist';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {

  return (
  
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/detail/:id' element= {<ProductDetail />} />
        <Route path='/cart' element= {<Cart />} />
        <Route path='/wishlist' element= {<Wishlist />} />
        
      </Routes>
    
  )
}

export default App
