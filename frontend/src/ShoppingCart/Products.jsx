import React from 'react'
import Product1 from '../assets/images/albinoA+.png'
import Product2 from '../assets/images/goldenTeacher.png'
import Product3 from '../assets/images/b+.png'
import Product4 from '../assets/images/maza.png'
import Product5 from '../assets/images/Thailand.png'
import Product6 from '../assets/images/amazonian.png'
import Product from './Product'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'

function Products() {
    return (
        <>
            <Navbar />
            <div className='container py-5'>
                <div className='d-flex justify-content-between'>
                    <h3 className='text-success'>
                        Nuestra Carta De Productos X gramo
                    </h3>
                    
                </div>

                <div className='row mt-5'>
                    <Product
                        Image={Product1}
                        Name="Albinos A++"
                        Price="20000"
                        Color="p1Color"
                    />
                    <Product
                        Image={Product2}
                        Name="Golden Teacher"
                        Price="10000"
                        Color="p2Color"
                    />
                    <Product
                        Image={Product3}
                        Name="B +"
                        Price="20000"
                        Color="p3Color"
                    />
                    <Product
                        Image={Product4}
                        Name="Maza"
                        Price="20000"
                        Color="p3Color"
                    />

                    <Product
                        Image={Product5}
                        Name="Amazonian"
                        Price="20000"
                        Color="p3Color"
                    />

                    <Product
                        Image={Product6}
                        Name="Amazonian"
                        Price="20000"
                        Color="p3Color"
                    />

                   
                    {/* <div className='col-12 col-md-8'>
                        <div className='p-1'>
                            <div className='border shadow-sm d-flex p4Color'>
                                <div className='text-center px-0 px-lg-5'>
                                    <img src={Product1} alt='' className='p-Image' />
                                </div>
                                <div className='d-flex flex-column justify-content-center'>
                                    <h3>Be Positive de los mejores</h3>
                                    <p>15000</p>
                                    <button className='btn bg-white w100 rounded-2'>Add to Cart</button>
                                </div>

                            </div>
                        </div>
                    </div>

                    <div className='col-12 col-md-4'>
                        <div className='p-1'>
                            <div className="border shadow-sm py-4 px-4 p5Color">
                                <h3>los buenos buenos</h3>
                                <p>$25000</p>
                                <button onClick={() => dispatch(addtocart())} className='btn bg-white w100 rounded-2'>Add to Cart</button>

                            </div>
                        </div>

                    </div> */}
                </div>


            </div>
            <Footer />
        </>
    )
}

export default Products