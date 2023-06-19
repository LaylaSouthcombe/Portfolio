import React from 'react'
import memoji from '../../images/memojiSquares.png'

const IntroWrapper = ({innerRef}) => {

  return (
    <>
      <div className="intro wrapper" id="intro" ref={innerRef}>
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