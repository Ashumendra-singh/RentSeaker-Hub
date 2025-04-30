import React from 'react';
// import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import About from './pages/About.jsx';
import Login from './pages/Login.jsx';
import Navbar from './components/Navbar.jsx';
import Footer from './components/footer.jsx';
import Home from './pages/Home.jsx';
import Services from './pages/Services.jsx';
import Signup from './pages/Signup.jsx';
import Listings from './pages/Listings.jsx';
import Contact from './pages/Contact.jsx';

function App() {
  

  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/login' element={<Login/>}/>
        <Route path='signup' element={<Signup/>}/>
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path='/listings' element ={<Listings/>} />
      </Routes>
      <Contact/>
      <Footer/>
    </BrowserRouter>
    
  )
}

export default App
