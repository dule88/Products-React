import React, {useContext} from 'react'
import ProductsContext from '../../contexts/Products.Context';
import CartContexts from '../../contexts/CartContexts';

import Pagination from '../../components/Pagination/Pagination';





const Products = () => {

    const {products, setProducts, searchTerm, setSearchTerm, searchResult, setCurrentPage, productPerPage} = useContext(ProductsContext);
    const {setCartOfProducts} = useContext(CartContexts);
    

    // FUNCTION THAT ADD ELEMENTS FROM PRODUCTS LIST TO THE CART LIST
    const addToCart = (id, ) => {
        
        const product = products.filter(p => {
            if(p.id == id) {
                return p;
            }
        })[0];

        setCartOfProducts(prev => [...prev, product]);
    }

    //  FUNCTION THAT DELETE ELEMENTS FROM PRODUCTS LIST 
     const deleteFromProducts = (idx) => {

        setProducts(prev => {
            let productsToDelete = [...prev];
            productsToDelete.splice(idx, 1);
            return productsToDelete;
        })

      };


 // CHANGE PAGE
 const paginate = (pageNumber) => setCurrentPage(pageNumber);


   
return (
    <div className='my-1 overflow-auto'>

        <h1 className='my-3 mb-3 text-white'>Products</h1>



            <form className="container-fluid mb-5 d-flex w-75">
                 <div className="input-group d-flex justify-content-end">
                    <span className="pe-auto input-group-text bg-dark border-secondary text-white-50"  ><i style={{cursor: 'pointer'}} className="fa-solid fa-magnifying-glass"></i></span>
                    <input  type="text" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} className="form-control bg-dark border-secondary text-white" placeholder="Search..."   aria-describedby="basic-addon1"/>
                    </div> 
            </form>
       
        
        
            <table className="table table-dark table-hover container mb-5 w-75">


                <thead>
                    <tr>
                    <th className='py-4' scope="col">Image</th>
                    {/* <th className='py-4' scope="col">Product Description</th> */}
                    <th className='py-4' scope="col">Price</th>
                    <th className='py-4' scope="col">Add</th>
                    <th className='py-4' scope="col">Delete</th>
                    </tr>
                </thead>    
                {/* PRINT ELEMENTS TO THE PRODUCTS LIST */}
            
                <tbody>
                {searchResult.map((product, idx) => {
                    return( 
                        <tr className='align-middle' key={product.id}> 
                            <td><img src={product.image} style={{width: "5rem"}} alt="..."></img></td> 
                            {/* <td>{product.category.name}</td> */}
                            <td>{product.price} {'EUR'}</td>
                            <td><button className='btn btn-outline-success mx-2' onClick={ () => addToCart(product.id)}><i className="fa-solid fa-cart-plus"></i></button></td>
                            <td><button className='btn btn-outline-danger mx-2' onClick={ () => deleteFromProducts(idx)}><i className="fa-solid fa-trash-can"></i></button></td> 
                        </tr>
                    )
                })
                }
                </tbody>
            
            </table>
        
        <Pagination
        productPerPage={productPerPage} 
        totalProducts={products.length} 
        paginate={paginate}/>

    </div>


  )
}

export default Products;