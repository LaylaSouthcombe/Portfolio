import React, { useState, useRef, useEffect } from 'react'
import { About, IntroWrapper, Projects, Skills } from './pages'
import { NavBar } from './layout'

import gitHubIcon from './images/icons/icon-github.webp'
import linkedInIcon from './images/icons/icon-linkedin.webp'
import mailIcon from './images/icons/icon-mail.webp'
import logo from './images/logo.webp'

import './App.css'
import './pages/About/style.css'
import './pages/Projects/style.css'
import './components/Project/style.css'
import './layout/NavBar/style.css'

function App() {

  const [bodyClass, setBodyClass] = useState("")
  const aboutOnClickRef = useRef(null)
  const introOnClickRef = useRef(null)
  const skillsOnClickRef = useRef(null)
  const projectsOnClickRef = useRef(null)

  useEffect(() => {
    if(window.screen.width < 768){
      setBodyClass("visibleBody")
    }
  }, [])

  return (
    <>
      <div className="App" >
        <header id="header">
          <NavBar setBodyClass={setBodyClass} aboutOnClickRef={aboutOnClickRef} introOnClickRef={introOnClickRef} skillsOnClickRef={skillsOnClickRef} projectsOnClickRef={projectsOnClickRef}/>
        </header>
        <div className={`${bodyClass} body`}>
          <IntroWrapper innerRef={introOnClickRef}/>
          <About innerRef={aboutOnClickRef} id="about"/>
          <Skills innerRef={skillsOnClickRef}/>
          <Projects innerRef={projectsOnClickRef}/>
          <div className="bottomLogo">
            <img src={logo} alt="" />
          </div>
          <div className="sideLine"></div>
          <div className="bottomLine line"></div>
          <div className="bottomLinksDiv">
            <ul className="bottomLinks">
              <li><a href="https://github.com/LaylaSouthcombe" target="_blank" rel="noreferrer" aria-label="Link to Layla Southcombe' GitHub profile"><img src={gitHubIcon} alt="GitHub Icon" className="bottomLinkImg"/></a></li>
              <li><a href="mailto:laylasouthcombe789@outlook.com" aria-label="Layla Sotuhcombe's email address"><img src={mailIcon} alt="email Icon" className="bottomLinkImg" id="mailIcon"/></a></li>
              <li><a href="https://www.linkedin.com/in/layla-southcombe-811a77102" target="_blank" rel="noreferrer" aria-label="Link to Layla Southcombe's LinkedIn profile"><img src={linkedInIcon} alt="LinkedIn Icon" className="bottomLinkImg"/></a></li>
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}

export default App