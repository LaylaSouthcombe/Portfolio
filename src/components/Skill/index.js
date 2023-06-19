import React, { useState } from "react"
import styled from "styled-components"
import './style.css'

const Skill = ({skill}) => {

    const [skillNameShowing, setSkillNameShowing] = useState(false)

    const SkillBottomBorder = styled.div`
        background-color: ${props => props.color};
        position: absolute;
        bottom: 0;
        width: 100%;
        height: ${props => (props.skillNameShowing ? 'auto' : '0.6rem')};
        padding: ${props => props.skillNameShowing === true ? "0.25rem" : 0};
        overflow: hidden;
        font-size: 0.7rem;
        text-align: center;
        color: var(--darkish-blue);
        border-top: 2px solid var(--darkish-blue);
        border-bottom-left-radius: 2.5px;
        border-bottom-right-radius: 2.5px;
        @media (min-width: 600px) {
            font-size: 0.8rem;
        }
        @media (min-width: 768px) {
            font-size: 0.7rem;
        }
        @media (min-width: 900px) {
            font-size: 0.8rem;
        }
        @media (min-width: 1024px) {
            font-size: 0.9rem;
        }
    `
//Add on focus for mobile users
    return (
        <>
            <div className="skillItem" 
            onMouseEnter={() => setSkillNameShowing(true)} 
            onMouseLeave={() => setSkillNameShowing(false)}
            onTouchStart={() => setSkillNameShowing(true)}
            onTouchEnd={() => setSkillNameShowing(false)}
            >
                <img className="icon" src={skill.icon} alt="" />
                <SkillBottomBorder skillNameShowing={skillNameShowing} color={skill.color}>
                    {skillNameShowing ? `${skill.name}` : null}
                </SkillBottomBorder>
            </div>
        </>
    )
}

export default Skill