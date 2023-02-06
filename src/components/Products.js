import React, {useContext} from 'react'
import ProductsContext from '../contexts/Products.Context';


const Products = () => {

    const formSubmit = (event) => {
        event.preventDefault();

        let newProduct = {
            id: products[products.length - 1].id + 1,
            title: event.target.name.value,
            price: event.target.price.value
        }

        setProducts(prev => [...prev, newProduct])
    };

    const {products, setProducts} = useContext(ProductsContext);

  return (
    <div>

        <h3>Products</h3>

        <form onSubmit={formSubmit}>
            <input type='text' placeholder='name' name='name'/>
            <input type='number' placeholder='price' name='price'/>
            <input type='submit' value='Dodaj'/>
        </form>
        

        <ul>
            {products.map(product => <li key={product.id}> {product.title} {product.price} </li>)}
        </ul>

        <hr/>

    </div>
  )
}

export default Products;