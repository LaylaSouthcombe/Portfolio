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
                    {
                    content.github.map( (link, i) => (
                        <>
                            <p className="linkFor techLinkText">{link.linkFor}:</p><a href={link.link} target="_blank" key={i}><img src={GitHub} alt="GitHub Link" className="linkIcon"/></a>                        
                        </>
                    ))
                    }
                        <span className="deployment techLinkText">App:</span>
                        <a href={content.deploy} target="_blank"><img src={Hyperlink} alt="" className="linkIcon"/></a>
                </div>
            </div>
                <div className={projectImgClassName}>
                    <img src={content.img} alt="" />
                </div>
        </div>
    )
}

export default Project