import { createContext, useState, useEffect } from "react";

const ProductsContext = createContext();

export const ProductsProvider = ({children}) => {

    

        const [products, setProducts] = useState ([]);
        const [loading, setLoading] = useState (false);

        useEffect(() => {

          (async () => {

              setLoading(true);

              const res = await fetch('https://fakestoreapi.com/products');
              const result = await res.json();
              setProducts(result);

              setLoading(false);

            }
          )();
        }, []);
        

    return(
        <ProductsContext.Provider value={{products, setProducts, loading}} >
            {children}
        </ProductsContext.Provider>
    )
}


export default ProductsContext;