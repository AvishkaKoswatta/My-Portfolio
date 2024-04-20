
import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Progress from './Components/Progress';
import About from './Components/About';
import Contact from './Components/Contact';
import Project1 from './Components/Project1';
import Home from './Components/Home'; 
//import Template from './Components/Template';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/progress" element={<Progress />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/project1" element={<Project1 />} />
          </Routes>
      </Router>
      
    </div>
  );
}

export default App;
