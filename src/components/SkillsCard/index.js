import React from 'react'
import { Skill } from '..'

const SkillsCard = ({title, skills}) => {
    return (
        <>
            <div>
                <h2>{title}</h2>
                {skills.map((skill) => (
                    <Skill skill={skill}/>
                ))}
            </div>
        </>
    )
}

export default SkillsCard