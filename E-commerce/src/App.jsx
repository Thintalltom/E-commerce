import './App.css'
import Home from './Home';
import {  Routes, Route } from "react-router-dom";
import ProductDetail from './ProductList/ProductDetail';

function App() {

  return (
  
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/detail/:id' element= {<ProductDetail />} />
      </Routes>
    
  )
}

export default App
