import React from 'react';
import GitHub from '../../images/icon-github.png'
import Hyperlink from '../../images/icon-hyperlink.png'

const Project = ({position, content}) => {
    let projectInfoClassName = "projectInfo "
    projectInfoClassName += position
    let projectImgClassName = "projectImg "
    projectImgClassName += position
    return (
        <div className="projectDiv">
            
            
            <div className={projectInfoClassName}>
                <h4 className="appType">{content.appType}</h4>
                <h3 className="projectName">{content.projectName}</h3>
                <div className="projectSummary">
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
                    <a href=""><img src={GitHub} alt="" className="linkIcon"/></a>
                    <a href=""><img src={Hyperlink} alt="" className="linkIcon"/></a>
                </div>
            </div>
            <div className={projectImgClassName}>
                <img src={content.img} alt="" />
            </div>
        </div>
    )
}

export default Project