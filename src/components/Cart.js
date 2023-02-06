import React, { useContext } from 'react'
import CartContexts from '../contexts/CartContexts';


const Cart = () => {

    const { cart, setCart } = useContext(CartContexts);

  return (
    <div>
        
        <h3>Cart</h3>

        {/* PRINT ELEMENTS TO THE CART */}
        <ul>
            {cart.map(c => <li key={c.id}> {c.id} {c.title} {c.price}</li>)}
        </ul>
    
    </div>
  )
}

export default Cart;