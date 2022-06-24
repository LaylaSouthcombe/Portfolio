import React from 'react'
import headshot from '../../images/headshot.png'
import './style.css';



const About = () => {
    return(
       <div className="sectionDiv" id="about">
            <div className="aboutInfo wrapper">
                <div className="aboutTitle">
                    <h2><span className="number">01.</span> About</h2>
                    <div className="lineType1 line"></div>
                </div>
                <div className="aboutText">
                    <p>After graduating from the University of Bath with a <span className="bold">Pharmacology Masters Degree</span> in 2018, I worked in the medical publishing/communications industry.</p>
                    <p>It was in this industry that I <span className="bold">witnessed the impact of technology on vital industries</span> such as healthcare, which resulted in my interest in technology and coding flourishing.</p>
                    <p>I started my journey with <span className="bold">futureproof</span> after teaching myself to code in my spare time and realising my <span className="bold">curious</span> and <span className="bold">problem-solving</span> nature was a perfect fit with coding.</p>
                    <p>During my time in the futureproof full-stack bootcamp I have learnt not only a plethora of <span className="bold">technologies</span> and <span className="bold">languages</span>, but also the <span className="bold">skills</span> needed to <span className="bold">succeed in a tech environment.</span></p>
                </div>
                <div className="aboutImgDiv">
                    <img src={headshot} className="aboutImg" alt="" />
                </div>   
            </div> 
       </div>   
    )
}

export default About;