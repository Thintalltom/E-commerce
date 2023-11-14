import React,{useState, useEffect} from 'react'

const Content = () => {

    useEffect(() => {

        fetch('https://fakestoreapi.com/products')
        .then(res=>res.json())
        .then(json=>console.log(json))
    }, [])
    
  return (
    <div className='flex justify-center align-center'>
        <div className='bg-pink-200 rounded-[10px] flex justify-center justify-around  align-center  w-[80%] h-[25vw] mt-[20px] p-4'>
        <div className='flex p-4 justify-center align-center flex-col'>
            <div>
            <p className='font-extrabold text-3xl text-slate-600'>
            Get the best product <br /> at your finger tips
        </p>
        <input type= 'text' className='mt-4 p-[5px]  text-sm rounded-[10px] text-center text-slate-500' defaultValue='Search for product' />
            </div>
     
        </div>

        <div className=' p-4'>
            <img src='https://images.unsplash.com/photo-1582588678413-dbf45f4823e9?w=300&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHNob2VzJTIwbmlrZXxlbnwwfHwwfHx8MA%3D%3D' className='rounded-[10px] w-[280px]' />
        </div>

        <div>
            <p>Another image</p>
        </div>
        </div>

    </div>
  )
}

export default Content