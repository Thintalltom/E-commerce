import React, {useContext} from 'react'
import { storeContext } from '../Context/Context'

const Cart = () => {
    const globalContext = useContext(storeContext)
    const state = globalContext.state
    const dispatch = globalContext.dispatch
    console.log(state)

  return (
    <div className='p-4'>
        <p>Cart section</p>
        {state.map((item, index) => (
            <div key={item.id} className='flex p-4 gap-[20px] w-[500px] border-2 border-slate-500'>
                <img src={item.image}  className='w-[100px]' />
                <p>{item.title}</p>
                <p>{item.price}</p>
                <p>{item.quantity}</p>
                <p>{item.quantity * item.price}</p>
                <button className='border-2 border-slate-300 p-[6px] h-[40px] ' onClick={() => dispatch({type: 'INCREASE', payload:item})}> + </button> <p>{item.quantity}</p> <button className='border-2 border-slate-300 p-[6px]  h-[40px]' onClick={() => dispatch({type: 'DECREASE', payload:item})} > - </button>
           <button onClick={() => dispatch({type: 'REMOVE', payload:item})}>x</button>
            </div>
        ))}
    </div>
  )
}

export default Cart