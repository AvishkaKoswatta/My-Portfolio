
import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Progress from './Components/Progress';
import About from './Components/About';
import Contact from './Components/Contact';
import Project1 from './Components/Project1';
import Home from './Components/Home'; 
import Project2 from './Components/Project2';
import Project5 from './Components/Project5';
import Project4 from './Components/Project4';
import ContactForm from './Components/ContactForm';
import Header from './Components/Header';
// import Projects from './Components/Projects';
//import Template from './Components/Template';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/progress" element={<Progress />} />
          <Route path="/about" element={<About />} />
          
          <Route path="/project1" element={<Project1 />} />
          <Route path="/project2" element={<Project2 />} />
          <Route path="/project5" element={<Project5 />} />
          <Route path="/project4" element={<Project4 />} />
          <Route path="/contactform" element={<ContactForm />} />
          {/* <Route path="/projects" element={<Projects />} /> */}

          <Route path="/header" element={<Header />} />
          </Routes>
      </Router>
      
    </div>
  );
}

export default App;
