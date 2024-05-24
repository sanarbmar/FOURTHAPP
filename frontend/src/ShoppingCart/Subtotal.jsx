import React from 'react'
import { useSelector } from 'react-redux'
import { getTotal } from './Redux/cartReducer'

function Subtotal() {
    const cart = useSelector(state => state.cart)
  return (
    <div className="subtotal">
        <div className="subtotal_area">
            <p>SubTotal ({cart.cart.length} items): ${getTotal(cart.cart)}</p>
            <button>Procced to cheek</button>
        </div>
    </div>
  )
}

export default Subtotal