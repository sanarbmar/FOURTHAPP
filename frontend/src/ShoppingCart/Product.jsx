import React from 'react'
import { useDispatch } from 'react-redux'
import { addtocart } from './Redux/cartAction'

function Product({ id, Image, Name, Price, Color }) {
    const dispatch = useDispatch()
    return (
        <div className='col-12 col-md-4'>
            <div className='p-1'>
                <div className={`border shadow-sm p-3 d-flex flex-column ${Color}`}>
                    <div className="cover entera ">

                        <img src={Image} alt='' className='entera' />
                    </div>
                    <h3>{Name}</h3>
                    <p>{Price}</p>
                    <button onClick={() => dispatch(addtocart(id, Image, Name, Price, Color))}
                     className='btn bg-white w100 rounded-2'>Add to Cart</button>

                </div>
            </div>

        </div>
    )
}

export default Product