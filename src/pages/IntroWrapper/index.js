import React from 'react'
import memoji from '../../images/memojiSquares.webp'
import { motion } from "framer-motion";

const IntroWrapper = ({innerRef}) => {

  return (
    <>
      <div className="intro wrapper" id="intro" ref={innerRef}>
        <motion.div
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 0.7 }}
        variants={{
          visible: { y: 0, opacity: 1 },
          hidden: { y: 100, opacity: 0 }
        }}
        className="introText">
          <h2>Hi there, I'm</h2>
          <h1>Layla Southcombe</h1>
          <h2>Full-Stack Developer</h2>
        </motion.div>
        <motion.div
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 0.7 }}
        variants={{
          visible: { x: 0, opacity: 1 },
          hidden: { x: 100, opacity: 0 }
        }}
        className="memoji">
          <img id="memoji" src={memoji} alt="Layla Southcombe Memoji" />
        </motion.div>
      </div>
    </>
  )
}

export default IntroWrapper