import React, { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import { About, Contact, Projects, Skills } from './pages'
import { NavBar } from './layout'
import memoji from './images/Memoji.png'

import './App.css';
import './pages/About/style.css'
import './pages/Skills/style.css'
import './pages/Projects/style.css'
import './pages/Contact/style.css'
import './components/Project/style.css'
import './layout/NavBar/style.css'

function App() {
  const [bodyBlur, setBodyBlur] = useState("none")
  return (
    <div className="App" >
      <header >
        <NavBar setBodyBlur={setBodyBlur}/>
      </header>
      <div className="main" style={{filter: bodyBlur}}>
        <div className="intro wrapper">
          <div className="introText">
            <h2>Hi there, I'm</h2>
            <h1>Layla Southcombe</h1>
            <h2>Full-Stack Developer</h2>
          </div>
          <div className="memoji">
            <img id="memoji" src={memoji} alt="Layla Southcombe Memoji" />
          </div>
          {/* <ul class='circles'>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul> */}
        </div>
          <About id="about"/>
          <Skills id="skills"/>
          <Projects id="projects"/>
          <Contact id="contact"/>
      </div>
    </div>
  );
}

export default App;
