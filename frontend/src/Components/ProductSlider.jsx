import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img1 from '../assets/images/im.jpg'
import img2 from '../assets/images/mre.jpg'
import img3 from '../assets/images/ree.jpg'
import img4 from '../assets/images/lee.jpg'
import img5 from '../assets/images/kit.jpg'
import img6 from '../assets/images/err.jpg'
import SProduct from './SProduct';


function ProductSlider() {
    var settings = {
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        initialSlide: 0,
        autoplay: true,
        speed: 3000,
        autoplaySpeed: 8000,
        cssEase: "linear",
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <div className='slider py-5'>
            <h1 className='text-center display-4 mt-4 fw-bold'>
                Diferentes Presentaciones 
            </h1>

            <div className='container mt-5'>
                <Slider {...settings}>
                    <div className='p-1'>
                        <SProduct 
                            Image = {img1}
                            Description = "Hongos Secos"
                        />
                    </div>
                    <div className='p-1'>
                    <SProduct 
                            Image = {img2}
                            Description = "Hongos Frescos"
                        />
                    </div>
                    <div className='p-1'>
                    <SProduct 
                            Image = {img3}
                            Description = "Cultivo En Casa"
                        />
                    </div>
                    <div className='p-1'>
                    <SProduct 
                            Image = {img4}
                            Description = "Microdosis"
                        />
                    </div>
                    <div className='p-1'>
                    <SProduct 
                            Image = {img5}
                            Description = "Auto Cultivo"
                        />
                    </div>
                    <div className='p-1'>
                    <SProduct 
                            Image = {img6}
                            Description = "Hongos del Estiercol"
                        />
                    </div>
                    


                </Slider>
            </div>

        </div>
    )
}

export default ProductSlider