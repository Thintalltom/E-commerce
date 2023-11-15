import React from 'react'
import { useContext, useEffect, useState } from 'react'
import { storeContext } from '../Context/Context'
const ProductList = () => {
  
const [store, setStore] = useState([])
 //fetch the products from the api
useEffect(() => {
  fetch("https://fakestoreapi.com/products")
     .then((res) => res.json())
  .then((json) => setStore(json));

  }, []);

  const [jewelery, setJewelery] = useState([])
  
  const fetchJewelery = () => {fetch('https://fakestoreapi.com/products/category/jewelery')
            .then(res=>res.json())
            .then(json=>setJewelery(json))}
  useEffect(() => {
 fetchJewelery()
  }, [])
  

  const [tabstate, setTabstate] = useState(1);

  const action = (index) => {
    setTabstate(index);
  };
  
  return (
    <div className=' gap-9 mt-4  cursor-pointer p-4'>
        <div className=' rounded-[10px] align-center justify-center flex  gap-9 p-4'>
        <div onClick={() => action(1)} className={`${tabstate === 1 ? "bg-white p" : 'bg-slate-500 p-4 text-white'}`}> All </div>
        <div onClick={() => action(2)} className={`${tabstate === 2 ? "bg-white" : 'bg-slate-500 p-4 text-white'}`}> jewelery </div>
        <div onClick={() => action(3)} className={`${tabstate === 3 ? "bg-white" : 'bg-slate-500 p-4 text-white'}`}> Men clothings </div>
        <div onClick={() => action(4)} className={`${tabstate === 4 ? "bg-white" : 'bg-slate-500 p-4 text-white'}`}> Women clothings </div>
       
       
        </div>

       
    <div className={`${tabstate === 1 ? 'text-slate-900 grid grid-cols-4 gap-4 ' : "hidden"}`}>
    {store.map((store) => (
      <div className='border-1 border-slate-400 flex align-center justify-center  p-4 flex-col'>
    
        <img src={store.image} className='w-[200px] ' />
        <p>{store.title}</p>
        <button>View details</button>

        </div>
    ))}
        </div>

        <div className={`${tabstate === 2 ? 'text-slate-900 grid grid-cols-4 gap-4 justify-items-center ' : "hidden"}`}>
        {jewelery.map((jewel) => (
      <div className='border-1 border-slate-400  flex align-center justify-center  p-4 flex-col'>
    
        <img src={jewel.image} className='w-[200px] ' />
        <p className='text-sm'>{jewel.title}</p>
        <button>View details</button>

        </div>
    ))}
        </div>

        <div className={`${tabstate === 3 ? 'text-slate-900 flex justify-center align-center' : "hidden"}`}>
      <p>hello 3</p>
        </div>

        <div className={`${tabstate === 4 ? 'text-slate-900 flex justify-center align-center' : "hidden"}`}>
      <p>hello 4</p>
        
        </div>
            
 
       
    </div>
  )
}

export default ProductList