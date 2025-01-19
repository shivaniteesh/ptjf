import React from 'react';
import './App.css';
import AboutUs from './components/AboutUs';
import {Route,Routes } from 'react-router-dom';
import Details from './components/details';
import Employer from './components/employer';
import LR from './components/LR';
import Student from './components/Student';
function App() {
  return (
   
  
      
      <Routes>
        <Route path="/" element={<AboutUs/>}/>
        <Route path="/LR" element={<LR/>}/>
        <Route path="/Details" element={<Details/>}/>
        <Route path="/Employer" element={<Employer/>}/>
        <Route path="/Student" element={<Student/>}/>
        
      </Routes>
  

  );
}

export default App;
