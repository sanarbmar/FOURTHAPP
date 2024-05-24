import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Validation from './SignupValidation';
import axios from 'axios';

function Signup() {

    const [values, setValues] = useState({
        id: '',
        name: '',
        email: '',
        password: '',
    })

    const navigate = useNavigate();

    const [errors, setErrors] = useState({})

    const handleInput = (event) => {
        setValues(prev => ({ ...prev, [event.target.name]: event.target.value }))
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        setErrors(Validation(values));
        console.log(values)
        values.id = parseInt(values.id);
        console.log(errors)
        if (errors.name === "" && errors.email === "" && errors.password === "") {

            axios.post('http://localhost:8081/signup', {
                ID_USUARIO: values.id,
                NOMBRE_USUARIO: values.name,
                EMAIL: values.email,
                PASSW: values.password
            })
                .then(res => {
                    console.log(res)
                    alert('Usuario creado exitosamente')
                    navigate('/')
                })
                .catch(err => console.error(err));
        }
    }


    return (
        <div className='d-flex justify-content-center align-items-center backgroundPrincipal vh-100'>
            <div className='bg-white p-3 rounded w-25'>
                <h2>Sign-Up</h2>
                <form action="" onSubmit={handleSubmit} title='registro'>
                    {/* <div className='mb-3'>
                        <label htmlFor='id'><strong>id</strong></label>
                        <input type="text" placeholder="Enter id" name='id'
                            onChange={handleInput} className='form-control rounded-0'></input>
                        {errors.id && <span className='text-danger'>{errors.id}</span>}

                    </div> */}
                    <div className='mb-3'>
                        <label htmlFor='name' >Name</label>
                        <input type="text" placeholder="Enter Name" name='name'
                            onChange={handleInput} className='form-control rounded-0'></input>
                        {errors.name && <span className='text-danger'>{errors.name}</span>}

                    </div>
                    <div className='mb-3'>
                        <label htmlFor='email' name='Email'>Email</label>
                        <input type="email" placeholder="Enter Email" name='email'
                            onChange={handleInput} className='form-control rounded-0'></input>
                        {errors.email && <span className='text-danger'>{errors.email}</span>}

                    </div>
                    <div className='mb-3'>
                        <label htmlFor='password' name='Password'>Password</label>
                        <input type="password" placeholder="Enter password" name='password'
                            onChange={handleInput} className='form-control rounded-0'></input>
                        {errors.password && <span className='text-danger'>{errors.password}</span>}

                    </div>

                    <button type='onSubmit' className='btn btn-success w-100 rounded-10' value='enviar'> <strong>Sign Up</strong></button>
                    <p>You are agree to our terms and polices </p>
                    <Link to='/' className='btn btn-default border w-100 bg-light rounded-0 text-decoration-none'>Login</Link>
                </form>
            </div>
        </div>
    )
}

export default Signup