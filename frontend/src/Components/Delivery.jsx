import React from 'react'
import PlaceH from '../assets/images/add.png'
import PlaceH2 from '../assets/images/check.png'
import PlaceH3 from '../assets/images/delivery.png'

function Delivery() {
    return (
        <div className="container px-4 py-5 delivery-process" >
            <h2 className='text-center display-4 mt-4 fw-bold'>Como Funcionan Los Pedidos</h2>
            <div className="row g-4 py-5 row-cols-1 row-cols-sm-2 row-cols-md-3">

                <div className="col px-5 text-center">
                    <div className="mb-3">
                        <img src={PlaceH} alt='' className='w-50 h-50' />
                    </div>
                    <h2>Agregar Productos</h2>
                    <p>En la sesión de productos escojes lo que quieres llevar y lo agregas al carrito.</p>

                </div>
                <div className=" col px-5 text-center">
                    <div className="mb-3">
                        <img src={PlaceH2} alt='' className='w-50 h-50' />
                    </div>
                    <h2>Aceptar Pedido</h2>
                    <p>
                       click en finalizar compra, el pedido entra en estado de pendiente,
                       hasta que los admin lo confiermen y te envien la informaion de entrega
                    </p>    

                </div>
                <div className="col px-5 text-center">
                    <div className="mb-3">
                        <img src={PlaceH3} alt='' className='w-50 h-50' />
                    </div>
                    <h2>Revisa Tu Correo</h2>
                    <p>En el correo te llegaran los detalles el envio y el dia que será entregado.</p>

                </div>
            </div>
        </div>
    )
}

export default Delivery