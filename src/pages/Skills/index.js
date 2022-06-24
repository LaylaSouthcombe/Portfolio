import React from 'react'
// import './style.css';
import htmlIcon from '../../images/html5.png'
import cssIcon from '../../images/css3.png'
import jsIcon from '../../images/javascript.png'
import reactIcon from '../../images/react.png'
import pythonIcon from '../../images/python.png'
import nodeIcon from '../../images/nodejs.png'
import jestIcon from '../../images/jest-icon.png'
import dockerIcon from '../../images/docker.png'
import flaskIcon from '../../images/flask.png'
import herokuIcon from '../../images/heroku.png'
import mongoIcon from '../../images/mongodb.png'
import postgresIcon from '../../images/postgresql.png'



const Skills = () => {
    return(
       <div className="sectionDiv" id="skills">
            <div className="skillsTitle">
                <div className="lineType2 line"></div>
                <h2><span className="number">02.</span> Technologies <br/><span className="lineSplit">I Work With</span></h2>
                <div className="lineType3 line"></div>
            </div> 
            <div className="skillsIcons">
                <div className="item1 item"><img className="icon" src={htmlIcon} alt="" />
                <div className="bottomBorder bb1"></div></div>
                <div className="item2 item"><img className="icon" src={cssIcon} alt="" />
                <div className="bottomBorder bb2"></div></div>
                <div className="item3 item"><img className="icon" src={jsIcon} alt="" />
                <div className="bottomBorder bb3"></div></div>  
                <div className="item4 item"><img className="icon" src={reactIcon} alt="" />
                <div className="bottomBorder bb4"></div></div>
                <div className="item5 item"><img className="icon" src={pythonIcon} alt="" />
                <div className="bottomBorder bb5"></div></div>
                <div className="item6 item"><img className="icon" src={nodeIcon} alt="" />
                <div className="bottomBorder bb6"></div></div>
                <div className="item7 item"><img className="icon" src={jestIcon} alt="" />
                <div className="bottomBorder bb7"></div></div>
                <div className="item8 item"><img className="icon" src={dockerIcon} alt="" />
                <div className="bottomBorder bb8"></div></div>
                <div className="item9 item"><img className="icon" src={flaskIcon} alt="" />
                <div className="bottomBorder bb9"></div></div>
                <div className="item10 item"><img className="icon" src={herokuIcon} alt="" />
                <div className="bottomBorder bb10"></div></div>
                <div className="item11 item"><img className="icon" src={mongoIcon} alt="" />
                <div className="bottomBorder bb11"></div></div>
                <div className="item12 item"><img className="icon" src={postgresIcon} alt="" />
                <div className="bottomBorder bb12"></div></div>
            </div>
       </div>   
    )
}

export default Skills;