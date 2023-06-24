import React from 'react';
import Navbar from './componentes/NavigationBar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
//import { Route, Routes } from 'react-router-dom';
import Home from './componentes/pages/Home';
import Services from './componentes/pages/Services';
import SignUp from './componentes/pages/SignUp';
import About from './componentes/pages/About';


export default function App() {
  return (
    <>
    
      <Router>
        <Navbar />
        
        <Routes>
          <Route path='/' exact element={<Home />} />
          <Route path="/services" element={<Services/>} />
          <Route path="/about" exact element={<About/>} />
          <Route path="/sign-up" element={<SignUp/>} />
        </Routes>
      </Router>
      
      
    </>
    
  );
}


