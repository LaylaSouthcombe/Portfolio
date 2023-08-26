import React from 'react'
import { SkillsCard } from '../../components'
import { motion } from "framer-motion";
import {apexLogo, apiLogo, expressLogo, gitLogo, gitHubLogo, graphQLLogo, javaScriptLogo, jestLogo, materialUILogo, mongoDBLogo, nextLogo, postgreSQLLogo, reactLogo, reduxLogo, rtlLogo, sassLogo, styledComponentsLogo, vueLogo} from '../../images/skills'
import './style.css'

const Skills = ({innerRef}) => {

    const backEndSkillsList = [
        {name: "JavaScript", color: "#F7DF1E", icon: javaScriptLogo},
        {name: "Jest", color: "#99424F", icon: jestLogo},
        {name: "Apex", color: "#00A1E0", icon: apexLogo},
        {name: "Express", color: "#F2DD49", icon: expressLogo},
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

    return (
        <>
            <div className="sectionDiv" id="skills" ref={innerRef}>
                <motion.div 
                initial="hidden"
                whileInView="visible"
                transition={{ duration: 0.7 }}
                variants={{
                    visible: { y: 0, opacity: 1 },
                    hidden: { y: 100, opacity: 0 }
                }}
                className="skillsTitle">
                    <div className="lineType2 line"></div>
                    <h2><span className="number">02.</span> Technologies <br/><span className="lineSplit">I Work With</span></h2>
                    <div className="lineType3 line"></div>
                </motion.div>
                <div className="skillsColumns">
                    <SkillsCard 
                    title={"Back-end"} 
                    skills={backEndSkillsList} 
                    visiblePosition={{y: 0, x: 0, opacity: 1}}
                    hiddenPosition={{y: 200, x:-200,opacity: 0}}
                    className="skillsCard1"/>
                    <SkillsCard 
                    title={"Front-end"} 
                    skills={frontEndSkillsList} 
                    visiblePosition={{y: 0, opacity: 1}}
                    hiddenPosition={{y: 200, opacity: 0}}
                    className="skillsCard2"/>
                    <SkillsCard 
                    title={"Tools"} 
                    skills={toolsSkillsList} 
                    visiblePosition={{y: 0, x: 0, opacity: 1}}
                    hiddenPosition={{y: 200, x: 200, opacity: 0}}
                    className="skillsCard3"/>
                </div>
            </div>
        </>
    )
}

export default Skills