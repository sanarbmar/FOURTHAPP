import React from 'react'
import { useSelector } from 'react-redux'
import { getTotal } from './Redux/cartReducer'

function Subtotal() {
    const cart = useSelector(state => state.cart)
  return (
    <div className="subtotal">
        <div className="subtotal_area">
            <p>SubTotal ({cart.cart.length} items):<span>${getTotal(cart.cart)}</span> </p>
            <button>Procced to cheek</button>
        </div>
    </div>
  )
}

export default Subtotal