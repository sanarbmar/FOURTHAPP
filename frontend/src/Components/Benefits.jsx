import React from 'react'
import PlaceH from '../assets/images/placeh.png'
import Imagen from '../assets/images/albinoInfo.png'
import Imagen2 from '../assets/images/mazainfo.png'
import Imagen3 from '../assets/images/goldeninfo.png'
import CBenefits from './CBenefits'
import logo from '../assets/images/icon-mushroom.png'

function Benefits() {
    return (
        <div className="container-fluid px-4 py-5 benef" >
            <h2 className='text-center display-4 mt-4 fw-bold whitee'>
                Productos principales
            </h2>
            <div className='container mt-5'>
                <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                    <CBenefits
                        Image={Imagen}
                        Image2={logo}
                        Title="Albinos A+"
                        Description="los efectos varian segun la cantidad ingerida"
                    />

                    <CBenefits
                        Image={Imagen2}
                        Image2={logo}
                        Title="Maza Tapec"
                        Description="los efectos varian segun la cantidad ingerida"
                    />

                    <CBenefits
                        Image={Imagen3  }
                        Image2={logo}
                        Title="Golden Teacher"
                        Description="los efectos varian segun la cantidad ingerida"
                    />
                </div>


            </div>
        </div>
    )
}

export default Benefits