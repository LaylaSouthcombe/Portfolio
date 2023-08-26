import React from 'react'
import { Skill } from '..'
import { motion } from "framer-motion";
import './style.css'

const SkillsCard = ({title, skills, className, visiblePosition, hiddenPosition}) => {
    
    return (
        <>
            <motion.div
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.7 }}
            variants={{
                visible: visiblePosition,
                hidden: hiddenPosition
            }}
            className={"skillsCard " + className}>
                <h2>{title}</h2>
                <div className="skillsGrid">
                    {
                        skills.map((skill, i) => (
                            <Skill skill={skill} key={skill + i}/>
                        ))
                    }
                </div>
            </motion.div>
        </>
    )
}

export default SkillsCard