import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {BrowserRouter} from 'react-router-dom'
import {StoreProvider} from './Context/Context'
import {WishProvider} from './Context/wishContext'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <WishProvider>
  <StoreProvider>
  <App />
  </StoreProvider>
  </WishProvider>
  </BrowserRouter>
 ,
)
