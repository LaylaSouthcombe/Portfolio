import React from 'react'
import { Skill } from '..'
import { motion } from "framer-motion";
import './style.css'

const SkillsCard = ({title, skills, className, delay, windowSize, xValue}) => {

    return (
        <>
            <motion.div
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.7, delay: delay }}
            variants={windowSize >= 768 ? 
                {
                    visible: {y: 0, x: 0, opacity: 1},
                    hidden: {y: 200, x: 0, opacity: 0}
                }
                    :
                {
                    visible: {x: 0, y: 0, opacity: 1},
                    hidden: {x: xValue, y: 0, opacity: 0}
                }
            }
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