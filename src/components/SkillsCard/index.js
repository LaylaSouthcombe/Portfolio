import React from 'react'
import { Skill } from '..'
import './style.css'

const SkillsCard = ({title, skills, className}) => {
    return (
        <>
            <div className={"skillsCard " + className}>
                <h2>{title}</h2>
                <div className="skillsGrid">
                  {skills.map((skill, i) => (
                    <Skill skill={skill} key={skill + i}/>
                ))}  
                </div>
            </div>
        </>
    )
}

export default SkillsCard