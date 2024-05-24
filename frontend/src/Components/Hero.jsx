import React from 'react'
import HeroImage from '../assets/images/hero.png'
import Logo from '../assets/images/icon-mushroom.png'
import { Link } from 'react-router-dom'

function Hero() {
    return (
        <div className="container-fluid col-xxl-8 px-4 py-5 hero-container">
            <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
                <div className="col-10 col-sm-8 col-lg-5">
                    <img src={HeroImage}
                        className="d-block mx-lg-auto img-fluid"
                        alt="Bootstrap Themes"
                        width="700"
                        height="500"
                        loading="lazy"
                         />
                </div>
                <div className="col-lg-6 hero-text">
                    <h1 className="display-1 fw-bold lh-1 mb-3">
                        <span>Tu tienda Online De Hongos</span>
                    </h1>
                    <div className='d-flex align-items-center my-5'>
                        <img src={Logo} alt='' className='me-3' />
                        <p className='fw-bold'>
                            Nosotros enviamos Hongos Frescos
                            <br></br>
                            hasta la puerta de tu casa.
                        </p>
                    </div>
                    <div className="d-grid gap-2 d-md-flex justify-content-md-start">
                        <Link to="/products" type="button" className="btn btn-warning btn-lg px-4 me-md-2 rounded-2">Comprar Hongos</Link>
                        <Link to="/products" type="button" className="btn btn-light btn-lg px-4 rounded-0">Ver Productos</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero