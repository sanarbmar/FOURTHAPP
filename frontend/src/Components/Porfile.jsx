import React, { useState, useEffect } from 'react'
import Navbar from './Navbar'
import axios from 'axios';
import photo from '../assets/images/placehPerfil.png'


function Porfile() {
    const [data, setData] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:8081/usuario')
            .then(response => setData(response.data))
            .catch(err => console.log(err));
    }, [])


    return (
        <>
            <Navbar />
            {
                data.map((d, i) => {
                    return <>
                        <div className="card mt-4">
                            <img src={photo} alt="John"  />
                                <h1 key={i}>{d.NOMBRE_USUARIO}</h1>
                                <p className="title" key={i}>{d.EMAIL}</p>
                                
                                
                        </div>
                        
                    </>

                })
            }
        </>
    )
}

export default Porfile