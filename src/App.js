import React, { useState, useEffect } from 'react'
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
  const [square1TopPosition, setSquare1TopPosition] = useState(0)
  const [square1LeftPosition, setSquare1LeftPosition] = useState(0)
  const [square2TopPosition, setSquare2TopPosition] = useState(0)
  const [square2LeftPosition, setSquare2LeftPosition] = useState(0)
  const [square3TopPosition, setSquare3TopPosition] = useState(0)
  const [square3LeftPosition, setSquare3LeftPosition] = useState(0)
  const [square4TopPosition, setSquare4TopPosition] = useState(0)
  const [square4LeftPosition, setSquare4LeftPosition] = useState(0)
  const [mouseSquaresVisibility, setMouseSquaresVisibility] = useState("hidden")
  const [windowDimenion, detectHW] = useState({
    winWidth: window.innerWidth,
    winHeight: window.innerHeight,
  })

  const detectSize = () => {
    detectHW({
      winWidth: window.innerWidth,
      winHeight: window.innerHeight,
    })
  }

  useEffect(() => {
    window.addEventListener('resize', detectSize)
    // console.log(windowDimenion. winWidth)
    return () => {
      window.removeEventListener('resize', detectSize)
    }
  }, [windowDimenion])
  const changeLogoSquarePositions = (e) => {
        let targetX = e.screenX
        let targetY = e.screenY
        let newX = targetX
          let newY =targetY
        if(windowDimenion. winWidth >= 320 && windowDimenion. winWidth < 767){
          newX = targetX
          newY = targetY
        }
        if(windowDimenion. winWidth >= 768 && windowDimenion. winWidth < 1024){
          newX = targetX -185
          newY =targetY -360
        }
        if(windowDimenion. winWidth >= 1024){
          newX = targetX
          newY =targetY
        }

        // let newX = targetX -185
        // let newY =targetY -360
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
        <NavBar setBodyBlur={setBodyBlur} setzIndex={setzIndex}/>
      </header>
      <div className="sideLine"></div>
      <div className="main" style={{filter: bodyBlur}}>
        <div className="intro wrapper" 
        onMouseEnter={showMouseSquares} 
        onMouseMove={changeLogoSquarePositions} 
        onMouseLeave={hideMouseSquares}
        >
            <div className="mouseSquare1" style={{top: square1TopPosition + "px", left: square1LeftPosition + "px", visibility: mouseSquaresVisibility}}></div>    
            <div className="mouseSquare2" style={{top: square2TopPosition + "px", left: square2LeftPosition + "px", visibility: mouseSquaresVisibility}}></div>    
            <div className="mouseSquare3" style={{top: square3TopPosition + "px", left: square3LeftPosition + "px", visibility: mouseSquaresVisibility}}></div>
            <div className="mouseSquare4" style={{top: square4TopPosition + "px", left: square4LeftPosition + "px", visibility: mouseSquaresVisibility}}></div> 
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
            <li id="gitHubIcon"><a href="https://github.com/LaylaSouthcombe" target="_blank"><img src={gitHubIcon} alt="GitHub Icon" className="bottomLinkImg"/></a></li>
            <li><a href="mailto:laylasouthcombe789@outlook.com"><img src={mailIcon} alt="email Icon" className="bottomLinkImg" id="mailIcon"/></a></li>
            <li id="linkedInIcon"><a href="https://www.linkedin.com/in/layla-southcombe-811a77102" target="_blank"><img src={linkedInIcon} alt="LinkedIn Icon" className="bottomLinkImg"/></a></li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
