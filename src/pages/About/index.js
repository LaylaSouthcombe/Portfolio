import React from 'react'
import { motion } from "framer-motion";
import headshot from '../../images/headshot.webp'
import './style.css';

const About = ({innerRef}) => {

    return (
        <>
            <div className="sectionDiv" id="about" ref={innerRef}>
                <AboutTitle/>
                <AboutInfo/>
            </div>
        </>
    )
}

export function AboutTitle(){

    return (
        <>
            <motion.div
                initial="hidden"
                whileInView="visible"
                transition={{ duration: 0.7 }}
                variants={{
                  visible: { x: 0, opacity: 1 },
                  hidden: { x: -200, opacity: 0 }
                }}
                className="aboutTitle">
                    <h2><span className="number">01.</span> About Me</h2>
                    <div className="lineType1 line"></div>
            </motion.div>
        </>
    )
}

export function AboutInfo(){

    return (
        <>
            <div className="aboutInfo wrapper">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    transition={{ duration: 0.7 }}
                    variants={{
                      visible: { x: 0, opacity: 1 },
                      hidden: { x: 200, opacity: 0 }
                    }}
                    className="aboutText">
                    <p>As a full-stack developer with a background in pharmacology and medical editing, I have a unique blend of scientific expertise and technical skills.</p>
                    <p>My strong foundation in problem-solving and analytical thinking aided my successful career transition to pursue my passion for coding.</p>
                    <p>Having completed a comprehensive full-stack developer bootcamp, I am well-versed in various front- and back-end programming languages, frameworks, and technologies.</p> 
                    <p>As I continue my journey through the tech industry, I am excited to take on roles in which I can contribute my curiosity, strong work ethic, and ability to quickly adapt and learn.</p>
                </motion.div>
                <motion.div 
                initial="hidden"
                whileInView="visible"
                transition={{ duration: 0.7 }}
                variants={{
                  visible: { x: 0, opacity: 1 },
                  hidden: { x: -200, opacity: 0 }
                }}
                className="aboutImgDiv">
                    <img src={headshot} className="aboutImg" alt="Layla Southcombe headshot"/>
                </motion.div>
            </div>
        </>
    )
}

export default About