import React, {useContext} from 'react'
import ProductsContext from '../contexts/Products.Context';
import CartContexts from '../contexts/CartContexts';


const Products = () => {

    const {products, setProducts} = useContext(ProductsContext);
    const {cart, setCart} = useContext(CartContexts)

    // FUNCTION THAT ADD ELEMENTS TO THE PRODUCTS LIST
    const formSubmit = (event) => {
        event.preventDefault();

        let newProduct = {
            id: products[products.length - 1].id + 1,
            title: event.target.name.value,
            price: event.target.price.value
        }

        setProducts(prev => [...prev, newProduct])
    };

    // FUNCTION THAT ADD ELEMENTS FROM PRODUCTS LIST TO THE CART LIST
    const addToCart = (id) => {
        const product = products.filter(p => {
            if(p.id == id) {
                return p;
            }
        })[0];

        setCart(prev => [...prev, product]);
    }

     // FUNCTION THAT DELETE ELEMENTS FROM PRODUCTS LIST 
     const deleteFromProducts = (idx) => {

        setProducts(prev => {
            let productsToDelete = [...prev];
            productsToDelete.splice(idx, 1);
            return productsToDelete;
        })

      };

    

  return (
    <div>

        <h3>Products</h3>

        <form onSubmit={formSubmit}>
            <input type='text' placeholder='name' name='name'/>
            <input type='number' placeholder='price' name='price'/>
            <input type='submit' value='Dodaj'/>
        </form>
        

        <ul>
            {/* PRINT ELEMENTS TO THE PRODUCTS LIST */}
            {products.map((product, idx) => {
                return( 
                <li key={product.id}> {product.title} {product.price} 
                <button className='btn btn-outline-primary m-1' onClick={ () => addToCart(product.id)}> Add to Cart</button>  
                <button className='btn btn-outline-primary m-1' onClick={ () => deleteFromProducts(idx)}> Delete</button>  
                </li>
                )
            })
            }
        
        </ul>

        <hr/>

    </div>
  )
}

export default Products;