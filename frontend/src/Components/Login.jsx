import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Validation from './LoginValidation';
import axios from 'axios';
import setBackendError from 'axios'
function Login() {
    const [values, setValues] = useState({
        email: '',
        password: ''
    })
    const [errors, setErrors] = useState({})

    const navigate = useNavigate();

    const handleInput = (event) => {
        /* console.log(event) */
        setValues(prev => ({ ...prev, [event.target.name]: [event.target.value] }))
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        setErrors(Validation(values));
       /*  console.log(values) */
        if (errors.email === "" && errors.password === "") {
            axios.post('http://localhost:8081/login', values)
                .then(res => {
                    if (res.data.errors) {
                        setBackendError(res.data.errors)
                    } else {
                        setBackendError([]);
                        if (res.data.Login) {
                            console.log(res.data)
                            localStorage.setItem("token", res.data.token);
                            navigate('/home');
                        } else {
                            alert("Error no record existed");
                        }
                    }
                   /*  console.log(res) */
                })
                .catch(err => console.log(err));
        }
    }
    return (
        <div className='d-flex justify-content-center align-items-center  vh-100 backgroundPrincipal'>
            <div className=' p-3 rounded w-25 '>
                <h2>Login</h2>
                <form action="" onSubmit={handleSubmit}>
                    <div className='mb-3'>
                        <label htmlFor='email'><strong>Email</strong></label>
                        <input type="email" placeholder="Enter Email" name='email'
                            onChange={handleInput} className='form-control rounded-0'></input>
                        {errors.email && <span className='text-danger' id='email-error'>{errors.email}</span>}
                    </div>
                    <div className='mb-3'>
                        <label htmlFor='password'><strong>Password</strong></label>
                        <input type="password" placeholder="Enter password" name='password'
                            onChange={handleInput} className='form-control rounded-0'></input>
                        {errors.password && <span className='text-danger' id='password-error'>{errors.password}</span>}
                    </div>

                    <button type='submit' className='btn btn-success w-100 rounded-10' onClick={handleSubmit}> <strong>Log In</strong></button>
                    <p>You are agree to our terms and polices </p>
                    <Link to='/signup' className='btn btn-default border w-100 bg-light rounded-0 text-decoration-none'>Create Account</Link>
                </form>
            </div>
        </div>
    )
}

export default Login