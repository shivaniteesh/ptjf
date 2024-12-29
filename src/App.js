import React from 'react';
import './App.css';
import AboutUs from './components/AboutUs';
import {BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import LR from './components/LR';
function App() {
  return (
    <Router>
      
      <Routes>
        <Route path="/" element={<AboutUs/>}/>
        <Route path="LR" element={<LR/>}/>
      </Routes>
    </Router>
  );
}

export default App;
