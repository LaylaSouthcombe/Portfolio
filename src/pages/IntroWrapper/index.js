import React, { useEffect } from 'react'
import memoji from '../../images/memojiSquares.webp'
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const IntroWrapper = ({innerRef}) => {

  return (
    <>
      <div className="intro wrapper" id="intro" ref={innerRef}>
        <motion.div
        initial={{ y: 100, opacity: 0 }} 
        animate={{ y: 0, opacity: 1 }} 
        transition={{ duration: 0.9 }}
        className="introText">
          <h2>Hi there, I'm</h2>
          <h1>Layla Southcombe</h1>
          <h2>Full-Stack Developer</h2>
        </motion.div>
        <motion.div 
        initial={{ x: 100, opacity: 0 }} 
        animate={{ x: 0, opacity: 1 }} 
        transition={{ duration: 0.9 }}
        className="memoji">
          <img id="memoji" src={memoji} alt="Layla Southcombe Memoji" />
        </motion.div>
      </div>
    </>
  )
}

export default IntroWrapper