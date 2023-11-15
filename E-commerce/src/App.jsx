import './App.css'
import Navbar from './Navbar/Navbar'
import Content from './ContentPage1/Content'
import ProductList from './ProductList/ProductList'
import { StoreProvider } from './Context/Context'

function App() {

  return (
    <StoreProvider>
     <Navbar />
     <Content />
     <ProductList />
       
    </StoreProvider>
  )
}

export default App
