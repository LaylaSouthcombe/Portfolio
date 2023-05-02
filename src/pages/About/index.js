import React from 'react'
import headshot from '../../images/headshot.png'
import './style.css';

const About = ({innerRef}) => {
    return(
       <div className="sectionDiv" id="about" ref={innerRef}>
            <div className="aboutTitle">
                <h2><span className="number">01.</span> About Me</h2>
                <div className="lineType1 line"></div>
            </div>
            <div className="aboutInfo wrapper">
                <div className="aboutText">
                    <p>After witnessing the impact of technology on vital industries such as healthcare during my time as a Medical Editor, I decided to take the leap to pursue a career in software engineering.</p>
                    <p>I enrolled in a full-stack bootcamp with La Fosse Academy and put my problem-solving skills to work. Having graduated from this rigorous programme, I can say that applying to a coding bootcamp has been the best decision I have made. I love to learn new technologies and try them out on my own projects.</p>
                    <p>Besides my passion for coding, I love to travel to new countries and explore the culture, hike in the mountains, and play flag American football.</p>
                </div>
                <div className="aboutImgDiv">
                    <img src={headshot} className="aboutImg" alt="" />
                </div>   
            </div> 
       </div>   
    )
}

export default About;