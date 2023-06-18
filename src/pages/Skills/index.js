import React from 'react'
import './style.css';

import { SkillsCard } from '../../components'
import {apexLogo, apiLogo, expressLogo, gitLogo, gitHubLogo, graphQLLogo, javaScriptLogo, jestLogo, materialUILogo, mongoDBLogo, nextLogo, postgreSQLLogo, reactLogo, reduxLogo, rtlLogo, sassLogo, styledComponentsLogo, vueLogo} from '../../images/skills'

const Skills = ({innerRef}) => {

    const backEndSkillsList = [
        {name: "JavaScript", color: "#F7DF1E", icon: javaScriptLogo},
        {name: "Jest", color: "#99424F", icon: jestLogo},
        {name: "Express", color: "#F2DD49", icon: expressLogo},
        {name: "Apex", color: "#00A1E0", icon: apexLogo},
        {name: "MongoDB", color: "#59AD33", icon: mongoDBLogo},
        {name: "PostgreSQL", color: "#417BA2", icon: postgreSQLLogo}
    ]

    const frontEndSkillsList = [
        {name: "React", color: "#00D8FF", icon: reactLogo},
        {name: "Redux", color: "#764ABC", icon: reduxLogo},
        {name: "React Testing Library", color: "#FC4544", icon: rtlLogo},
        {name: "Next.js", color: "#FFFFFF", icon: nextLogo},
        {name: "Vue.js", color: "#41B883", icon: vueLogo},
        {name: "SASS", color: "#CD6799", icon: sassLogo}
    ]

    const toolsSkillsList = [
        {name: "RESTful APIs", color: "#FFFFFF", icon: apiLogo},
        {name: "Styled Components", color: "#D778B9", icon: styledComponentsLogo},
        {name: "Material-UI", color: "#0081CB", icon: materialUILogo},
        {name: "GraphQL", color: "#E535AB", icon: graphQLLogo},
        {name: "Git", color: "#F05033", icon: gitLogo},
        {name: "GitHub", color: "#FFFFFF", icon: gitHubLogo}
    ]

    return(
       <div className="sectionDiv" id="skills" ref={innerRef}>
            <div className="skillsTitle">
                <div className="lineType2 line"></div>
                <h2><span className="number">02.</span> Technologies <br/><span className="lineSplit">I Work With</span></h2>
                <div className="lineType3 line"></div>
            </div> 
            <div className="skillsColumns">
                <SkillsCard title={"Back-end"} skills={backEndSkillsList}/>
                <SkillsCard title={"Front-end"} skills={frontEndSkillsList}/>
                <SkillsCard title={"Tools"} skills={toolsSkillsList}/>
                {/* <div className="item1 item"><img className="icon" src={htmlIcon} alt="" />
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
                <div className="bottomBorder bb12"></div></div> */}
            </div>
       </div>   
    )
}

export default Skills;