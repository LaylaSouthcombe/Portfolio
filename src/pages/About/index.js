import React, { useEffect } from 'react'
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import headshot from '../../images/headshot.webp'
import './style.css';

const titleVariant = {
    visible: { x: 0, opacity: 1, transition: { duration: 0.9 } },
    hidden: { x: -200, opacity: 0, transition: { duration: 0.9 } }
}

const aboutTextVariant = {
    visible: { x: 0, opacity: 1 },
    hidden: { x: 200, opacity: 0 }
}

const aboutImageVariant = {
    visible: { x: 0, opacity: 1 },
    hidden: { x: -200, opacity: 0 }
}

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
    const control = useAnimation()
    const [ref, inView] = useInView()

    useEffect(() => {
        if (inView) {
          control.start("visible");
        } else {
          control.start("hidden");
        }
      }, [control, inView]);

    return (
        <>
            <motion.div 
                ref={ref}
                variants={titleVariant}
                initial="hidden"
                animate={control}
                // transition={{ duration: 0.9 }}
                className="aboutTitle">
                    <h2><span className="number">01.</span> About Me</h2>
                    <div className="lineType1 line"></div>
                </motion.div>
        </>
    )
}

export function AboutInfo(){

    const control = useAnimation()
    const [ref, inView] = useInView({margin: "1000px 100px 100px 100px"})

    useEffect(() => {
        if (inView) {
          control.start("visible");
        } else {
          control.start("hidden");
        }
    }, [control, inView]);

    return (
        <>
            <div className="aboutInfo wrapper">
                <motion.div
                ref={ref}
                variants={aboutTextVariant}
                initial="hidden"
                animate={control}
                transition={{ duration: 0.9 }}
                className="aboutText">
                    <p>As a full-stack developer with a background in pharmacology and medical editing, I have a unique blend of scientific expertise and technical skills.</p>
                    <p>My strong foundation in problem-solving and analytical thinking aided my successful career transition to pursue my passion for coding.</p>
                    <p>Having completed a comprehensive full-stack developer bootcamp, I am well-versed in various front- and back-end programming languages, frameworks, and technologies.</p> 
                    <p>As I continue my journey through the tech industry, I am excited to take on roles in which I can contribute my curiosity, strong work ethic, and ability to quickly adapt and learn.</p>
                </motion.div>
                <motion.div 
                ref={ref}
                variants={aboutImageVariant}
                initial="hidden"
                animate={control}
                transition={{ duration: 0.9 }}
                className="aboutImgDiv">
                    <img src={headshot} className="aboutImg" alt="Layla Southcombe headshot"/>
                </motion.div>
            </div>
        </>
    )
}

export default About