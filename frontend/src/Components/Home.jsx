import React from 'react'
import Hero from './Hero'
import Delivery from './Delivery'
import Benefits from './Benefits'
import ProductSlider from './ProductSlider'
import Navbar from './Navbar'
import Footer from './Footer'

function Home() {
    return (
        <>  
            <Navbar />
            <Hero />
            <Delivery />
            <Benefits />
            <ProductSlider />
            <Footer />
        </>

    )   
}

export default Home