import {useContext, createContext, useReducer} from 'react';

export const  storeContext = createContext();
export const StoreProvider = (props) => {
    //will use useReducer hook to add the product to the cart
    const reducer = (state, action) => {
        switch(action.type)
        {
            case 'ADD':
                const tempState =  state.filter((item) => action.payload.id === item.id)// to check for the presence of the item in a state
                
                if(tempState.length > 0)// if present in a temp state return the state
                {
                    return state
                } else
                {
                    return[...state, action.payload] // else add it to the state 
                }
       

            default: return state;
        }
    }
    const [state, dispatch] = useReducer(reducer, []); // initial state and the array
    const info ={state, dispatch};

return(
    <storeContext.Provider value={info}>
        {props.children}
    </storeContext.Provider>
);
};