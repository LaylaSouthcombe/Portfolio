import React, {useState} from 'react'
import memoji from '../../images/Memoji.png'
import {SquaresGrid} from '../../components'


const IntroWrapper = ({innerRef}) => {

    return (
        <>
        <div className="intro wrapper" id="intro" ref={innerRef}>
            <div className="introText">
              <h2>Hi there, I'm</h2>
              <h1>Layla Southcombe</h1>
              <h2>Full-Stack Developer</h2>
            </div>
            <div className="memojiSquaresArea">
              <SquaresGrid/>
              <div className="memoji">
                <img id="memoji" src={memoji} alt="Layla Southcombe Memoji" />
              </div>
              <SquaresGrid/>
            </div>
          </div>
        </>
    )
}

export default IntroWrapper