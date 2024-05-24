import React from 'react'

function Footer() {
    return (
        <div className="footer pw-3">
            <div className='d-flex flex-column justify-column-center align-items-center pt-3'>
                <i className="bi bi-envelope display-3 text-white"></i>
                <h3 className="text-white mt-3">Mantente Informado </h3>

                <h5 className='text-white fst-italic mt2'>Sucribirse</h5>

                <div class="input-group mb-3 mt-4 w-50">
                    <input
                        type="text"
                        class="form-control p-2"
                        placeholder="Recipient's username"
                        aria-label="Recipient's username"
                        aria-describedby="button-addon2"
                    />
                    <button
                        className="btn btn-warning px-5"
                        type='button'
                        id="button-addon2"
                    >
                        button
                    </button>

                </div>
            </div>
        </div>
    )
}

export default Footer