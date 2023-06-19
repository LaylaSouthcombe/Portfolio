import React from 'react'
import headshot from '../../images/headshot.webp'
import './style.css';

const About = ({innerRef}) => {

    return (
        <>
            <div className="sectionDiv" id="about" ref={innerRef}>
                <div className="aboutTitle">
                    <h2><span className="number">01.</span> About Me</h2>
                    <div className="lineType1 line"></div>
                </div>
                <div className="aboutInfo wrapper">
                    <div className="aboutText">
                        <p>As a full-stack developer with a background in pharmacology and medical editing, I have a unique blend of scientific expertise and technical skills.</p>
                        <p>My strong foundation in problem-solving and analytical thinking aided my successful career transition to pursue my passion for coding.</p>
                        <p>Having completed a comprehensive full-stack developer bootcamp, I am well-versed in various front- and back-end programming languages, frameworks, and technologies.</p> 
                        <p>As I continue my journey through the tech industry, I am excited to take on roles in which I can contribute my enthusiasm, curiosity, strong work ethic, and ability to quickly adapt and learn.</p>
                    </div>
                    <div className="aboutImgDiv">
                        <img src={headshot} className="aboutImg" alt="Layla Southcombe headshot"/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default About