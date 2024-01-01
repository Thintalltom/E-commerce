import { useContext, createContext, useReducer } from "react";
export const wishContext = createContext();
export const WishProvider = (props) => {
    //will use usereducer hook to add to the  wish cart
    const reducer = (state, action ) => {
        switch (action.type) {
            case "ADD":
                const isProductInWishlist = state.some((item) => item.id === action.payload.id);
          
                if (isProductInWishlist) {
                  // If the product is already in the wishlist, return the current state
                  return state;
                } else {
                  // Otherwise, add it to the wishlist
                  return [...state, action.payload];
                }
                
              case "REMOVE":
                const filterState = state.filter(
                  (item) => action.payload.id != item.id
                );
                return filterState;
              default: return state;
              
    };
};
const [state, dispatch]= useReducer(reducer, []);
const info = {state, dispatch};

return (
    <wishContext.Provider value={info}> {props.children}</wishContext.Provider>
)
};