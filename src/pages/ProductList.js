import React, {useContext} from 'react'
import ProductsContext from '../contexts/Products.Context';
import CartContexts from '../contexts/CartContexts';


const Products = () => {

    const {products, setProducts, loading} = useContext(ProductsContext);
    const {setCartOfProducts} = useContext(CartContexts);
    

    // FUNCTION THAT ADD ELEMENTS TO THE PRODUCTS LIST
    // const formSubmit = (event) => {
    //     event.preventDefault();

    //     let newProduct = {
    //         id: products[products.length - 1].id + 1,
    //         title: event.target.name.value,
    //         price: event.target.price.value
    //     }

    //     setProducts(prev => [...prev, newProduct])
    // };

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

    

  return (
    <div className='my-1 overflow-hidden'>

        <h1 className='my-3 mb-5 text-white'>Products</h1>

        {/* <form onSubmit={formSubmit} className='row g-3 align-items-center mx-5 '>
            <input className='col mx-1 form-control' type='text' placeholder='name' name='name'/>
            <input className='col form-control' type='number' placeholder='price' name='price'/>
            <input type='submit' value='Add' className='btn btn-outline-success mx-2 col-auto'/>
        </form> */}

        
       
        
        {loading 
            ? 
            <h1>Loading
            </h1>
            :
            <table className="table table-dark table-hover container mb-5 w-75">


                <thead>
                    <tr>
                    <th className='py-4' scope="col">Image</th>
                    {/* <th className='py-4' scope="col">Product Description</th> */}
                    <th className='py-4' scope="col">Product</th>
                    <th className='py-4' scope="col">Add</th>
                    <th className='py-4' scope="col">Delete</th>
                    </tr>
                </thead>    
                {/* PRINT ELEMENTS TO THE PRODUCTS LIST */}
            
                <tbody>
                {products.map((product, idx) => {
                    return( 
                        <tr className='align-middle' key={product.id}> 
                            <td><img src={product.image} style={{width: "3rem"}} alt="..."></img></td> 
                            {/* <td>{product.title}</td> */}
                            <td>{product.price} {'EUR'}</td>
                            <td><button className='btn btn-outline-success mx-2' onClick={ () => addToCart(product.id)}><i className="fa-solid fa-cart-plus"></i></button></td>
                            <td><button className='btn btn-outline-danger mx-2' onClick={ () => deleteFromProducts(idx)}><i className="fa-solid fa-trash-can"></i></button></td> 
                        </tr>
                    )
                })
                }
                </tbody>
            
            </table>
        }

        

    </div>
  )
}

export default Products;