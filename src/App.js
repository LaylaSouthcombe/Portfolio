import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { About, Contact, Projects, Skills } from './pages'
import { NavBar } from './layout'

import './App.css';

function App() {
  return (
    <div className="App">
      <NavBar />
      <div className="main">
          <About id="about"/>
          <Skills id="skills"/>
          <Projects id="projects"/>
          <Contact id="contact"/>
      </div>
    </div>
  );
}

export default App;
