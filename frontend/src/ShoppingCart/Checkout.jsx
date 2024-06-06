import React from 'react'
import Navbar from '../Components/Navbar'
import { useSelector } from 'react-redux'
import Product from './Product'
import '../index.css'
import Subtotal from './Subtotal'
import { useDispatch } from 'react-redux'
import { removefromcart } from './Redux/cartAction'

function Checkout() {
    const dispatch = useDispatch()
    const cart = useSelector(state => state.cart)
    return (
        <>
            <Navbar />
            <div className="container">
                <div className='row mt-5 justify-content-between'>

                    <div className='col-12 col-md-4'>
                        <div className='p-1'>
                            {cart.cart.map(item => {

                                return (

                                    <div className="border shadow-sm p-3" >
                                        <img src={item.Image} alt='' className='w-75 h-75 entera' />
                                        <h3>{item.Name}</h3>
                                        <p>{item.Price}</p>
                                        <button onClick={() => dispatch(removefromcart(item.id))} className='btn bg-primary w100 rounded-2' id='btn-remove'>Remove</button>

                                    </div>
                                )


                            })}


                        </div>

                    </div>

                    <div className='col-12 col-md-4'>
                        <div className="subtotal">
                            <Subtotal />
                        </div>
                    </div>

                </div>



            </div>



        </>
    )
}

export default Checkout