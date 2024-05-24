import React, { useState, useEffect } from 'react'
import Navbar from './Navbar'
import axios from 'axios';
import Footer from './Footer';


function Orders() {
    const [data, setData] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:8081/order')
            .then(response => setData(response.data))
            .catch(err => console.log(err));
    }, [])
    return (
        <>
            <Navbar />

            <div className="container d-flex justify-content-center flex-wrap gap">
            {
                    data.map((d, i) => {
                        return <>


                            <div className="card2 mt-4 mb-5">

                                <span>ID ORDEN</span><h1 key={i}>{d.ID_COMPRA}</h1>
                                <span>FECHA VENTA</span><p className="title" key={i}>{d.FECHA_VENTA}</p>

                                <span>ESTADO</span><p className="title" key={i}>{d.ID_ESTADO}</p>
                            </div>



                        </>

                    })
               
            }
            </div>
                
            <Footer />


        </>
    )
}

export default Orders