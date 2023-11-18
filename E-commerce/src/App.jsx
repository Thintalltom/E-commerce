import './App.css'
import Home from './Home';
import {  Routes, Route } from "react-router-dom";
import ProductDetail from './ProductList/ProductDetail';
import Cart from './Cart/Cart';

function App() {

  return (
  
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/detail/:id' element= {<ProductDetail />} />
        <Route path='/cart' element= {<Cart />} />
      </Routes>
    
  )
}

export default App
