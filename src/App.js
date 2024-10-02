import React from 'react'
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Skills from './Skills';
import Portfolio from './Portfolio';
import Contact from './Contact';
import Navbar from './Navbar';


function App() {
  return (
   <Router>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/skills' element={<Skills />} />
      <Route path='/portfolio' element={<Portfolio /> } />
      <Route path='/contact' element={<Contact />} />
    </Routes>
   </Router>
  );
}

export default App;
