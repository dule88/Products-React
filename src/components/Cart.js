import React, { useContext } from 'react'
import CartContexts from '../contexts/CartContexts';


const Cart = () => {

    const { cart, setCart } = useContext(CartContexts);


    // FUNCTION THAT DELETE FROM THE CART LIST
    const deleteFromCart = (idx) => {
      setCart(prev => {
        let fromCartToDelete = [...prev];
        fromCartToDelete.splice(idx, 1);
        return fromCartToDelete;
      })
    }

  return (
    <div>
        
        <h3>Cart</h3>

        {/* PRINT ELEMENTS TO THE CART */}
        <ul>
            {cart.map((c, idx) => {
              return (
                <li key={c.id}> {c.id} {c.title} {c.price} 
                <button className='btn btn-outline-danger mx-2' onClick={ () => deleteFromCart(idx)}> Delete</button> 
                </li> 
                
              )})
             
            }
        </ul>
    
    </div>
  )
}

export default Cart;