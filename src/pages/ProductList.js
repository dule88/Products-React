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
    <div>

        <h3 className='my-3'>Products</h3>

        {/* <form onSubmit={formSubmit} className='row g-3 align-items-center mx-5 '>
            <input className='col mx-1 form-control' type='text' placeholder='name' name='name'/>
            <input className='col form-control' type='number' placeholder='price' name='price'/>
            <input type='submit' value='Add' className='btn btn-outline-success mx-2 col-auto'/>
        </form> */}

        <hr/>
       
        
        {loading 
            ? 
            <h1>Loading
            </h1>
            :
            <ul>
                {/* PRINT ELEMENTS TO THE PRODUCTS LIST */}

            
                {products.map((product, idx) => {
                    return( 
                    <li key={product.id}> <img src={product.image} style={{width: "1.5rem"}} alt="..."></img>{product.title} {product.price} 
                    <button className='btn btn-outline-success m-1' onClick={ () => addToCart(product.id)}> Add</button>  
                    <button className='btn btn-outline-danger m-1' onClick={ () => deleteFromProducts(idx)}> Delete</button>  
                    </li>
                    )
                })
                }
            
            </ul>
        }

        

    </div>
  )
}

export default Products;