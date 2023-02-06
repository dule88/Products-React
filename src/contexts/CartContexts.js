import { createContext, useState } from "react";

const CartContexts = createContext();

export const CartProvider = ({children}) => {

    

        const [cart, setCart] = useState ([]);

        

    return(
        <CartContexts.Provider value={{cart, setCart}}>
            {children}
        </CartContexts.Provider>
    )
}


export default CartContexts;