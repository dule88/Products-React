import { createContext, useState, useEffect } from "react";

const ProductsContext = createContext();

export const ProductsProvider = ({children}) => {

    

        const [products, setProducts] = useState ([]);

        useEffect(() => {
          fetch('https://fakestoreapi.com/products?limit=5')
          .then(res => res.json())
          .then(result => {
            setProducts(result);
          })
        }, [])
        

    return(
        <ProductsContext.Provider value={{products, setProducts}}>
            {children}
        </ProductsContext.Provider>
    )
}


export default ProductsContext;