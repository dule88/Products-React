import { createContext, useState, useEffect, useMemo } from "react";


const ProductsContext = createContext();

export const ProductsProvider = ({children}) => {

    

        const [products, setProducts] = useState ([]);
        const [loading, setLoading] = useState (false);
        const [searchTerm, setSearchTerm] = useState('');

        const [currentPage, setCurrentPage] = useState(1);
        const [productPerPage] = useState(5);


       

        useEffect(() => {

          (async () => {

              setLoading(true);

              const res = await fetch('https://api.escuelajs.co/api/v1/products?offset=10&limit=25');
              const result = await res.json();
              setProducts(result);

              setLoading(false);

            }
          )();
        }, []);


      // GET CURRENT DATA
      const indexOfLastPage = currentPage * productPerPage;
      const indexOfFirstPage = indexOfLastPage - productPerPage;
      const currentProducts = products.slice(indexOfFirstPage, indexOfLastPage);



        
        // Regular Expression used in a function for filtering the products from the list.
        const regrx = new RegExp(searchTerm, 'gi');

        const searchResult = useMemo (() => {
          return (
            currentProducts.filter(product => product.category.name.match(regrx))
          );
        
          
        }, [searchTerm, currentProducts]);









    return(
        <ProductsContext.Provider value={{products, setProducts, loading,searchTerm, setSearchTerm, searchResult, currentPage, 
setCurrentPage, productPerPage}}>
            {children}
        </ProductsContext.Provider>

        
    )
}


export default ProductsContext;