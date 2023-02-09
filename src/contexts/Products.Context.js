import { createContext, useState, useEffect } from "react";

const ProductsContext = createContext();

export const ProductsProvider = ({children}) => {

    

        const [products, setProducts] = useState ([]);
        const [loading, setLoading] = useState (false);

        useEffect(() => {
          // setLoading(true);

          // fetch('https://fakestoreapi.com/products?limit=5')
          // .then(res => res.json())
          // .then(result => {
          //   setProducts(result);

          // setLoading(false);  
          
          // })

          (async () => {

              setLoading(true);

              const res = await fetch('https://fakestoreapi.com/products?limit=5');
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