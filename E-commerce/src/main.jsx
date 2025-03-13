import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {BrowserRouter} from 'react-router-dom'
import {StoreProvider} from './Context/Context'
import {WishProvider} from './Context/wishContext'
import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from '@tanstack/react-query'


const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')).render(
 
  <BrowserRouter>
   <QueryClientProvider client={queryClient}>
   <WishProvider>
  <StoreProvider>
  <App />
  </StoreProvider>
  </WishProvider>
   </QueryClientProvider>
 
  </BrowserRouter>

 ,
)
