import React, {useContext} from 'react'
import { storeContext } from '../Context/Context'

const Cart = () => {
    const globalContext = useContext(storeContext)
    const state = globalContext.state
    const dispatch = globalContext.dispatch
    console.log(state)

  return (
    <div>
        <p>Cart section</p>
        {state.map((item) => (
            <div key={item.id}>
                <p>{item.title}</p>
            </div>
        ))}
    </div>
  )
}

export default Cart