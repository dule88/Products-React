import { createContext, useState, useEffect, useMemo } from "react";

const ProductsContext = createContext();

export const ProductsProvider = ({children}) => {

    

        const [products, setProducts] = useState ([]);
        const [loading, setLoading] = useState (false);
        const [searchTerm, setSearchTerm] = useState('');

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
        
        // Regular Expression used in a function for filtering the products from the list.
        const regrx = new RegExp(searchTerm, 'gi');

        const searchResult = useMemo (() => {
          return (
            products.filter(product => product.title.match(regrx))
          );
        
          
        }, [searchTerm, products]);

    return(
        <ProductsContext.Provider value={{products, setProducts, loading, searchTerm, setSearchTerm, searchResult}} >
            {children}
        </ProductsContext.Provider>
    )
}


export default ProductsContext;