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
            case 'INCREASE':
                const tempState1 = state.map((item) => {
                    if(item.id === action.payload.id){
                       return  {...item, quantity: item.quantity + 1}
                    } else
                    {
                        return item
                    }
                })//map is used so we can be able to access all the tems in the array
            return tempState1;

            case 'INCREASE':
                const tempState2 = state.map((item) => {
                    if(item.id === action.payload.id){
                       return  {...item, quantity: item.quantity - 1}
                    } else
                    {
                        return item
                    }
                })//map is used so we can be able to access all the tems in the array
            return tempState2;
            
                case 'REMOVE' :
                const filterState = state.filter((item) => action.payload.id != item.id)
                return filterState

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