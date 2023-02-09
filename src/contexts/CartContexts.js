import { createContext, useState } from "react";

const CartContexts = createContext();

export const CartProvider = ({children}) => {

    

        const [cartOfProducts, setCartOfProducts] = useState ([]);

        

    return(
        <CartContexts.Provider value={{cartOfProducts, setCartOfProducts}}>
            {children}
        </CartContexts.Provider>
    )
}


export default CartContexts;