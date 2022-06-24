import React, { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import { About, Contact, Projects, Skills } from './pages'
import { NavBar } from './layout'
import memoji from './images/Memoji.png'
import gitHubIcon from './images/icon-github.png'
import linkedInIcon from './images/icon-linkedin.png'
import mailIcon from './images/icon-mail.png'

import './App.css';
import './pages/About/style.css'
import './pages/Skills/style.css'
import './pages/Projects/style.css'
import './pages/Contact/style.css'
import './components/Project/style.css'
import './layout/NavBar/style.css'

function App() {
  const [bodyBlur, setBodyBlur] = useState("none")
  const [zIndex, setzIndex] = useState("0")
  return (
    <div className="App" >
      <header >
        <NavBar setBodyBlur={setBodyBlur} setzIndex={setzIndex}/>
      </header>
      <div className="sideLine"></div>
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
        <Contact id="contact" zIndex={zIndex}/>
        <div className="bottomLogoDiv">
          <img className="bottomLogo" width="120px" height="120px" ></img>
        </div>
        <div className="bottomLine line"></div>
        <div className="bottomLinksDiv">
          <ul className="bottomLinks">
            <li><a href="https://github.com/LaylaSouthcombe" target="_blank"><img src={gitHubIcon} alt="GitHub Icon" className="bottomLinkImg"/></a></li>
            <li><a href="mailto:laylasouthcombe789@outlook.com"><img src={mailIcon} alt="email Icon" className="bottomLinkImg" id="mailIcon"/></a></li>
            <li><a href="https://www.linkedin.com/in/layla-southcombe-811a77102" target="_blank"><img src={linkedInIcon} alt="LinkedIn Icon" className="bottomLinkImg"/></a></li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
