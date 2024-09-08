import React from 'react';
import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes, } from 'react-router-dom';
import TestBootstrap from '../components/TestBootstrap';
import { Header } from '../components/Header';
import HomePage from '../Pages/HomePage';
import Footer from '../components/Footer'
import About from '../Pages/About.jsx';
import Ebooks from '../Pages/Ebooks.jsx';
import ContactUs from '../Pages/ContactUs.jsx';
function App() {

  return (
    <>
    <div className='App'>
      <Router>
        <Header/>
        <Routes>
          <Route path='/' element={<HomePage/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/ebooks' element={<Ebooks/>}/>
          <Route path='/contact' element={<ContactUs/>}/>
        </Routes>
        <Footer/>
      </Router>
    </div>
      
    </>
  )
}

export default App
