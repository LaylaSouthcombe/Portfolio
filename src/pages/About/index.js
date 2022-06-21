import React from 'react'
import headshot from '../../images/headshot.png'
import './style.css';



const About = () => {
    return(
       <div className="sectionDiv" id="about">
            <div className="aboutImgDiv">
                <img src={headshot} className="aboutImg" alt="" />
            </div> 
            <div className="aboutInfo">
                <div className="aboutTitle">
                <h2><span className="number">01.</span>About</h2><div className="line"></div>
                </div>
                <p>After graduating from the University of Bath with a Pharmacology Masters Degree in 2018, I worked in the medical publishing/communications industry.</p>
                <p>It was in this industry that I witnessed the impact technology could have on vital industries such as healthcare, which resulted in my interest in technology and coding flourishing.</p>
                <p>I started my journey with futureproof after teaching myself to code in my spare time and realising my curious and problem-solving nature was a perfect fit with coding.</p>
                <p>During my time in the futureproof full-stack bootcamp I have learnt not only a plethora of technologies and languages, but also the skills needed to succeed in a tech environment.</p>
            </div> 
       </div>   
    )
}

export default About;