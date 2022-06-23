import React, { useState } from 'react'
import { Project } from '../../components'

const Projects = () => {
    const [projects, setProjects] = useState([
        { appType: "Anonymous Post Site", projectName: "Yay or Nay", summary: "A place to facilitate discussion on topics of the anonymous posters choice.", technologies: ["HTML", "CSS"], github: "", deploy: "", img: ""},
        { appType: "Habit Tracker", projectName: "Indee", summary: "A habit tracker designed for people with learning difficulties to help them live as independently as possible.", technologies: ["HTML", "CSS"], github: "", deploy: "", img: ""},
        { appType: "Project 3", projectName: "Project name", summary: "Summary Summary Summary Summary Summary Summary Summary Summary Summary Summary Summary Summary", technologies: ["HTML", "CSS"], github: "", deploy: "", img: ""},
    ])
    return(
        <div className="sectionDiv" id="projects">
            <div className="projectsTitle">
                <h2><span className="number">03.</span>Projects I've Built</h2>
                <div className="projectsLine"></div>
            </div> 
            <Project position="right" content={projects[0]}/> 
            <Project position="left" content={projects[1]}/> 
            <Project position="right" content={projects[2]}/> 
        </div>   
    )
}

export default Projects;