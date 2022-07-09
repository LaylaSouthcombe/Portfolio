import React from 'react'
import { Project } from '../../components'

import OpenUpImage from '../../images/openUp.png'
import dumbfounded from '../../images/dumbfounded.png'
import atomicaddicts from '../../images/atomicaddicts.png'

const Projects = () => {
    const projects = [
        { id: 1, appType: "Trivia Game", projectName: "Dumbfounded", summary: "Test your knowledge with this fun trivia game! Play multiplayer either locally or online, or single player to try get a  highscore", technologies: ["HTML", "CSS",  "React", "Redux", "axios", "JavaScript", "Jest", "Socket.io", "PostgreSQL"], github: [{ linkFor: "Backend", link: "https://github.com/Gioele-M/lap3_quiz_project_server"}, { linkFor: "Frontend", link: "https://github.com/Gioele-M/lap3_quiz_project_client"}], deploy: "https://dumbfounded.netlify.app/", img: dumbfounded},
        { id: 2, appType: "Habit Tracker", projectName: "Atomic Addicts", summary: "This app is for tracking and managing habits, with five key habits to choose from: sleeping, exercise, water intake, smoking, and savings", technologies: ["HTML", "CSS", "JavaScript", "Jest","Node.js", "Express", "PostgreSQL", "Bcrypt", "JSON Web Token", "Docker"], github: [{ linkFor: "Backend + Frontend", link: "https://github.com/LaylaSouthcombe/lap2project"}], deploy: "https://atomic-addicts.netlify.app/", img: atomicaddicts},
        { id: 3, appType: "Anonymous Post Site", projectName: "OpenUp", summary: "A place to OpenUp to and reach out to other people to gain perspective and find solutions to issues that are troubling you", technologies: ["HTML", "CSS", "Bootstrap", "JavaScript", "Node.js", "Express", "Heroku"], github: [{ linkFor: "Backend", link: "https://github.com/alihamedali96/OpenUpServer"}, { linkFor: "Frontend", link: "https://github.com/alihamedali96/OpenUpClient"}], deploy: "https://openup-fp.netlify.app/", img: OpenUpImage},
        // { appType: "Anonymous Post Site", projectName: "Yay or Nay", summary: "A place to facilitate discussion on topics of the anonymous posters choice.", technologies: ["HTML", "CSS"], github: "", deploy: "", img: ""},
        // { appType: "Habit Tracker", projectName: "Indee", summary: "A habit tracker designed for people with learning difficulties to help them live as independently as possible.", technologies: ["HTML", "CSS"], github: "", deploy: "", img: ""},
        // { appType: "Project 3", projectName: "Project name", summary: "Summary Summary Summary Summary Summary Summary Summary Summary Summary", technologies: ["HTML", "CSS"], github: [{ linkFor: "Backend", link: "https://github.com/alihamedali96/OpenUpServer"}, { linkFor: "Frontend", link: "https://github.com/alihamedali96/OpenUpClient"}], deploy: "", img: ""}
    ]
    return(
        <div className="sectionDiv" id="projects">
            <div className="projectsTitle">
                <h2><span className="number">03.</span> Projects I've Built</h2>
                <div className="lineType1 line"></div>
            </div> 
            <Project position="right" content={projects[0]}/> 
            <Project position="left" content={projects[1]}/> 
            <Project position="right" content={projects[2]}/> 
        </div>   
    )
}

export default Projects;