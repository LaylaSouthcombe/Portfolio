import React from 'react'
import { Skill } from '..'
import './style.css'

const SkillsCard = ({title, skills}) => {
    return (
        <>
            <div className="skillsCard">
                <h2>{title}</h2>
                <div className="skillsGrid">
                  {skills.map((skill) => (
                    <Skill skill={skill}/>
                ))}  
                </div>
            </div>
        </>
    )
}

export default SkillsCard