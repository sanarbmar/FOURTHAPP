import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import Navbar from './Components/Navbar'
import './Components/style.css'
import Hero from './Components/Hero'
import Delivery from './Components/Delivery'
import Benefits from './Components/Benefits'
import ProductSlider from './Components/ProductSlider'
import Products from './ShoppingCart/Products'
import Footer from './Components/Footer'
import Home from './Components/Home'
import Login from './Components/Login'
import Signup from './Components/Signup'
import Checkout from './ShoppingCart/Checkout'
import Porfile from './Components/Porfile'
import About from './Components/About'
import Orders from './Components/Orders'



function App() {


  return (

    <BrowserRouter>
      {/* <Navbar />
      <Hero />
      <Delivery />
      <Benefits />
      <ProductSlider />
      <Products /> */}

      <Routes>
        <Route path='/' element={<Login />}></Route>
        <Route path='/home' element={<Home />}></Route>
        <Route path='/signup' element={<Signup />}></Route>
        <Route path='/products' element={<Products />}></Route>
        <Route path='/checkout' element={<Checkout />}></Route>
        <Route path='/usuario' element={<Porfile />}></Route>
        <Route path='/about' element={<About />}></Route>
        <Route path='/orders' element={<Orders />}></Route>
      </Routes>
      {/* <Footer /> */}

    </BrowserRouter>
  )
}

export default App
