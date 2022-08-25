import React from 'react'
import { Project } from '../../components'

import sooki from '../../images/sooki.png'
import dumbfounded from '../../images/dumbfounded.png'
import atomicaddicts from '../../images/atomicaddicts.png'

const Projects = () => {
    const projects = [
        { id: 1, appType: "Trivia Game", projectName: "Dumbfounded", summary: "Test your knowledge with this fun trivia game! Play multiplayer either locally or online, or single player to try get a  highscore", technologies: ["HTML", "CSS",  "React", "Redux", "axios", "JavaScript", "Jest", "Socket.io", "PostgreSQL"], github: [{ linkFor: "Backend", link: "https://github.com/Gioele-M/lap3_quiz_project_server"}, { linkFor: "Frontend", link: "https://github.com/Gioele-M/lap3_quiz_project_client"}], deploy: "https://dumbfounded.netlify.app/", img: dumbfounded},
        { id: 2, appType: "Habit Tracker", projectName: "Atomic Addicts", summary: "This app is for tracking and managing habits, with five key habits to choose from: sleeping, exercise, water intake, smoking, and savings", technologies: ["HTML", "CSS", "JavaScript", "Jest", "Node.js", "Express", "PostgreSQL", "Bcrypt", "JSON Web Token", "Docker"], github: [{ linkFor: "Backend + Frontend", link: "https://github.com/LaylaSouthcombe/lap2project"}], deploy: "https://atomic-addicts.netlify.app/", img: atomicaddicts},
        { id: 3, appType: "Meal Planner Site", projectName: "Sooki", summary: "A site to generate a random meal plan that takes in your dietary requirements and budget, and can generate a shopping list for you (mobile first)", technologies: ["HTML", "CSS",  "React", "Redux", "axios", "JavaScript", "Jest", "Python", "PyMongo", "Django", "pytest", "PostgreSQL", "Bcrypt"], github: [{ linkFor: "Backend", link: "https://github.com/LaylaSouthcombe/meal_planner_backend"}, { linkFor: "Frontend", link: "https://github.com/LaylaSouthcombe/meal_planner_frontend"}], deploy: "https://digerati-meal-planner.netlify.app/", img: sooki}
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