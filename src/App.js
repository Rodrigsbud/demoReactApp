import React from 'react';
import Navbar from './componentes/NavigationBar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './componentes/pages/Home';


function App() {
  return (
    <>
    <Router>
    <Navbar />
    <Routes>
      <Route path='/' exact component={Home} />
    </Routes>
    </Router>
    </>
  );
}

export default App;
