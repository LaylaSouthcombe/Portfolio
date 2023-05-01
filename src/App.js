import React, { useState } from 'react'
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
  const [bodyClass, setBodyClass] = useState("")
  const [zIndex, setzIndex] = useState("0")
  const [square1TopPosition, setSquare1TopPosition] = useState(0)
  const [square1LeftPosition, setSquare1LeftPosition] = useState(0)
  const [square2TopPosition, setSquare2TopPosition] = useState(0)
  const [square2LeftPosition, setSquare2LeftPosition] = useState(0)
  const [square3TopPosition, setSquare3TopPosition] = useState(0)
  const [square3LeftPosition, setSquare3LeftPosition] = useState(0)
  const [square4TopPosition, setSquare4TopPosition] = useState(0)
  const [square4LeftPosition, setSquare4LeftPosition] = useState(0)
  const [mouseSquaresVisibility, setMouseSquaresVisibility] = useState("hidden")

  const changeLogoSquarePositions = (e) => {
        let targetX = e.clientX
        let targetY = e.clientY
        let newX = targetX
        let newY = targetY
          newX = targetX - 8
          newY = targetY - 12
        setTimeout(() => setSquare1TopPosition(newY), 50)
        setTimeout(() => setSquare1LeftPosition(newX), 50)
        setTimeout(() => setSquare2TopPosition(newY - 3), 100)
        setTimeout(() => setSquare2LeftPosition(newX - 3), 100)
        setTimeout(() => setSquare3TopPosition(newY - 6), 150)
        setTimeout(() => setSquare3LeftPosition(newX - 6), 150)
        setTimeout(() => setSquare4TopPosition(newY - 9), 200)
        setTimeout(() => setSquare4LeftPosition(newX - 9), 200)
    }  
    const hideMouseSquares = () => {
      setMouseSquaresVisibility("hidden")
    }
    const showMouseSquares = () => {
      setMouseSquaresVisibility("visible")
    }
    
  return (
    <div className="App" >
      <header >
        <NavBar setBodyClass={setBodyClass} setzIndex={setzIndex}/>
      </header>
      <div className="sideLine"></div>
      <div className={`main ${bodyClass}`}>
        <div className="intro wrapper">
          <div className="mouseSquares"
          onMouseEnter={showMouseSquares} 
          onMouseMove={changeLogoSquarePositions} 
          onMouseLeave={hideMouseSquares}
          >
            <div className="mouseSquare1" style={{top: square1TopPosition + "px", left: square1LeftPosition + "px", visibility: mouseSquaresVisibility}}></div>
            <div className="mouseSquare2" style={{top: square2TopPosition + "px", left: square2LeftPosition + "px", visibility: mouseSquaresVisibility}}></div>
            <div className="mouseSquare3" style={{top: square3TopPosition + "px", left: square3LeftPosition + "px", visibility: mouseSquaresVisibility}}></div>
            <div className="mouseSquare4" style={{top: square4TopPosition + "px", left: square4LeftPosition + "px", visibility: mouseSquaresVisibility}}></div>
          </div>
          <div className="introText">
            <h2>Hi there, I'm</h2>
            <h1>Layla Southcombe</h1>
            <h2>Full-Stack Developer</h2>
          </div>
          <div className="memoji">
            <img id="memoji" src={memoji} alt="Layla Southcombe Memoji" />
          </div>
        </div>
        <About id="about"/>
        <Skills id="skills"/>
        <Projects id="projects"/>
        <Contact id="contact" zIndex={zIndex}/>
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
