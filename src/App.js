import React, { useState, useRef } from 'react'
import { About, Contact, IntroWrapper, Projects, Skills } from './pages'
import { NavBar } from './layout'
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
  const [bodyClass, setBodyClass] = useState("")
  const [zIndex, setzIndex] = useState("0")
  const aboutOnClickRef = useRef(null)
  const introOnClickRef = useRef(null)
  const skillsOnClickRef = useRef(null)
  const projectsOnClickRef = useRef(null)
  const contactOnClickRef = useRef(null)
  
  return (
    <div className="App" >
      <header id="header">
        <NavBar setBodyClass={setBodyClass} setzIndex={setzIndex} aboutOnClickRef={aboutOnClickRef} introOnClickRef={introOnClickRef} skillsOnClickRef={skillsOnClickRef} projectsOnClickRef={projectsOnClickRef} contactOnClickRef={contactOnClickRef}/>
      </header>
      <div className="sideLine"></div>
      <div className={`${bodyClass}`}>
        <IntroWrapper innerRef={introOnClickRef}/>
        <About innerRef={aboutOnClickRef} id="about"/>
        <Skills innerRef={skillsOnClickRef}/>
        <Projects innerRef={projectsOnClickRef}/>
        <Contact innerRef={contactOnClickRef}zIndex={zIndex}/>
        <div className="bottomLogo">
                    <div className="bottomSquare1">
                    </div>    
                    <div className="bottomSquare2">
                    </div>    
                    <div className="bottomSquare3">
                    </div>    
                    <p className="bottomLogoText">LS</p> 
                </div>
        <div className="bottomLine line"></div>
        <div className="bottomLinksDiv">
          <ul className="bottomLinks">
            <li id="gitHubIcon"><a href="https://github.com/LaylaSouthcombe" target="_blank" rel="noreferrer"><img src={gitHubIcon} alt="GitHub Icon" className="bottomLinkImg"/></a></li>
            <li><a href="mailto:laylasouthcombe789@outlook.com"><img src={mailIcon} alt="email Icon" className="bottomLinkImg" id="mailIcon"/></a></li>
            <li id="linkedInIcon"><a href="https://www.linkedin.com/in/layla-southcombe-811a77102" target="_blank" rel="noreferrer"><img src={linkedInIcon} alt="LinkedIn Icon" className="bottomLinkImg"/></a></li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;