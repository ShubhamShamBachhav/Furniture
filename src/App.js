import React from 'react'
import './App.css'

// import Header from './Components/Header'
// import Products from './Components/Products'

import{BrowserRouter,Routes,Route, Link} from 'react-router-dom'

import Home from './Components/Home'
import Shop from './Components/Shop'
import About from './Components/About'
import Service from './Components/Service'
import Blog from './Components/Blog'
import Contact from './Components/Contact'
import User from './Components/User'
import Cart from './Components/Cart'
import Footer from './Components/Footer'
// import Navbar12 from './Components/Navbar12' 
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { ImTelegram } from 'react-icons/im'
import { useEffect,useState } from 'react'

function App() {
  const [cart,setCart]=useState([])
  useEffect(()=>{
    fetch("http://localhost:3000/cart").then((res1)=>{
      res1.json().then((res2)=>{
        console.log(res2)
        setCart(res2)
    })
  })
},[])
  return (
    <div>
      {/* <Navbar12/> */}


         <BrowserRouter>
              <Navbar bg="success" data-bs-theme="dark">
                <Container >
                  <Navbar.Brand to="/" className='fs-1 fw-bold'>Furni.</Navbar.Brand>
                  <Nav >
                    <Link to="/"  >Home</Link>
                    <Link to="/Shop" >Shop</Link>
                    <Link to="/About" >About Us</Link>
                    <Link to="/Service" >Service</Link>
                    <Link to="/Blog" >Blog</Link>
                    <Link to="/Contact" >Contact Us</Link>
                    <Link to="/User" ><i className="fa-regular fa-user"></i></Link>
                    <Link to="/Cart" ><i className="fa-solid fa-cart-shopping"></i> <sup>{cart.length}</sup></Link>
                  </Nav> 
                </Container>
            </Navbar>
  
  

              <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/Shop' element={<Shop/>}/>
                <Route path='/About' element={<About/>}/>
                <Route path='/Service' element={<Service/>}/>
                <Route path='/Blog' element={<Blog/>}/>
                <Route path='/Contact' element={<Contact/>}/>
                <Route path='/User' element={<User/>}/>
                <Route path='/Cart' element={<Cart/>}/>

              </Routes>
        </BrowserRouter>
   
      <Footer/>
      
    </div>
  )
}

export default App
