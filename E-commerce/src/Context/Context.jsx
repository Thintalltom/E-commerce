import {useContext, createContext, useEffect, useState} from 'react';

export const  storeContext = createContext();
export const StoreProvider = (props) => {
    
    const [store, setStore] = useState([])
//fetch the products from the api
useEffect(() => {
 fetch("https://fakestoreapi.com/products")
    .then((res) => res.json())
 .then((json) => setStore(json));
 }, []);

return(
    <storeContext.Provider value={{setStore, store}}>
        {props.children}
    </storeContext.Provider>
);
};