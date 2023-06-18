import React, { useState } from "react"
import './style.css'

const Skill = ({skill}) => {

    const [skillNameShowing, setSkillNameShowing] = useState(false)

    return (
        <>
            <div className="skillItem" onMouseEnter={() => setSkillNameShowing(true)} onMouseLeave={() => setSkillNameShowing(false)}>
                <img className="icon" src={skill.icon} alt="" />
                <div className="bottomBorder bb1">
                    {skillNameShowing ? `${skill.name}` : null}
                </div>
            </div>
        </>
    )
}

export default Skill