import React,{useContext} from 'react'
import { storeContext } from "../Context/Context";
const Wishlist = () => {
    const globalContext = useContext(storeContext);
    const state = globalContext.state2;
    const dispatch = globalContext.dispatch2;
  return (
    <div>
        <p>Wishlist</p>
    </div>
  )
}

export default Wishlist