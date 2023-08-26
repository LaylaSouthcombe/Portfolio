import React from 'react'
import GitHub from '../../images/icons/icon-github-pink.webp'
import Hyperlink from '../../images/icons/icon-hyperlink.webp'
import { motion } from 'framer-motion'

const Project = ({position, content}) => {

    return (
        <>
            <div className={"projectDiv " + position} key={content.id}>
                <motion.div
                initial="hidden"
                whileInView="visible"
                transition={{ duration: 0.7 }}
                variants={{
                    visible: { x: 0, opacity: 1 },
                    hidden: { x: -200, opacity: 0 }
                }}
                className={"projectInfo " + position}>
                    <h4 className="appType">{content.appType}</h4>
                    <h3 className="projectName">{content.projectName}</h3>
                    <div className={"projectSummary " + position}>
                        <p>{content.summary}</p>
                    </div>
                    <ul className="projectTech">
                    {
                        content.technologies.map( (tech, i) => (
                            <li key={i}>{tech}</li>
                        ))
                    }
                    </ul>
                    <div className="links">
                        {
                            content.github.map( (link, i) => (
                                <div className="projectLinks" key={i}>
                                    <p className="linkFor techLinkText">{link.linkFor}:</p>
                                    <a href={link.link} target="_blank" rel="noreferrer" key={i} aria-label="Link to project's GitHub repository"><img src={GitHub} alt="GitHub Link" className="linkIcon"/></a>                        
                                </div>
                            ))
                        }
                        <div className="projectLinks">
                            <span className="deployment techLinkText">Site:</span>
                            <a href={content.deploy} target="_blank" rel="noreferrer" aria-label="Link to project's live site"><img src={Hyperlink} alt="" className="linkIcon"/></a>
                        </div>
                    </div>
                </motion.div>
                <motion.div
                initial="hidden"
                whileInView="visible"
                transition={{ duration: 0.7 }}
                variants={{
                    visible: { x: 0, opacity: 1 },
                    hidden: { x: 200, opacity: 0 }
                }}
                className={"projectImg " + position}>
                    <img src={content.img} alt="" />
                </motion.div>
            </div>
        </>
    )
}

export default Project