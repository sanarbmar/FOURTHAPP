import React from 'react'
import Logo from '../assets/images/logo.png'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'


function Navbar() {
    const cart = useSelector(state => state.cart)
    return (
        <div className="container-fluid px-5 header sticky-top">
            <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-2  border-bottom border-dark">
                <a href="/" className="d-flex align-items-center col-md-3 mb-2 mb-md-0 text-dark text-decoration-none">
                    <img src={Logo} alt='' className='w-25 h-25' />
                </a>

                <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
                    <li><Link className="nav-link px-2 menu-color" to="/home">Home</Link></li>
                    <li><Link className="nav-link px-2 menu-color" to="/products">Products</Link></li>
                    <li><Link className="nav-link px-2 menu-color" to="/about">About</Link></li>
                    <li><Link className="nav-link px-2 menu-color" to="/orders">Orders</Link></li>
                </ul>

                <div className="col-md-3 text-end">
                    <Link to="/usuario">
                        <i className='bi bi-person fs-3 me-4'></i>
                    </Link>
                    <Link to="/checkout" id='carrito'>
                        <i className='bi bi-cart fs-3'><strong>{cart.cart.length}</strong></i>
                    </Link>
                </div>
            </header >
        </div >
    )
}

export default Navbar