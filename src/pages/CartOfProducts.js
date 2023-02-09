import React, { useContext } from 'react'
import CartContexts from '../contexts/CartContexts';


const CartOfProducts = () => {

    const { cartOfProducts, setCartOfProducts } = useContext(CartContexts);


    // FUNCTION THAT DELETE FROM THE CART LIST
    const deleteFromCart = (idx) => {
      setCartOfProducts(prev => {
        let fromCartToDelete = [...prev];
        fromCartToDelete.splice(idx, 1);
        return fromCartToDelete;
      })
    }

  return (
    <div className='my-4'>
        
        <h1 className='my-4 text-white'>Cart</h1>


        <table className="table table-dark table-hover container">


          <thead>
              <tr>
              <th className='py-4' scope="col">Product Image</th>
              <th className='py-4' scope="col">Product Description</th>
              <th className='py-4' scope="col">Product Price</th>
              <th className='py-4' scope="col">Delete product</th>
              </tr>
          </thead>    


        {/* PRINT ELEMENTS TO THE CART */}
       <tbody>
             {cartOfProducts.map((c, idx) => {
              return (
                <tr className='align-middle' key={c.id}>
                   <td><img src={c.image} style={{width: "4rem"}} alt="..."></img></td>
                   <td>{c.title}</td>
                   <td>{c.price} {'EUR'}</td>
                   <td><button className='btn btn-outline-danger mx-2' onClick={ () => deleteFromCart(idx)}> Delete</button></td>
                </tr> 
                
              )})
             
            }
        </tbody>

        </table>
    
    </div>
  )
}

export default CartOfProducts;