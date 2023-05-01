import React, {useState} from 'react'
import memoji from '../../images/Memoji.png'

const IntroWrapper = ({innerRef}) => {

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
        <>
        <div className="intro wrapper" id="intro" ref={innerRef}>
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
        </>
    )
}

export default IntroWrapper