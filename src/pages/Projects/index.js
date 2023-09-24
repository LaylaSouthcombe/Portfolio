import React from 'react'
import { Project } from '../../components'
import { motion } from "framer-motion";
import sooki from '../../images/sooki.webp'
import rune from '../../images/rune.png'
import indee from '../../images/indee.webp'

const Projects = ({innerRef}) => {

    const projects = [
        { id: 1, appType: "eCommerce Site", projectName: "Rune", summary: "A Next.js full-stack app with a MongoDB database, authentification, and Stripe payment integration", technologies: ["Next.js", "HTML", "CSS", "axios", "JavaScript", "MongoDB", "bcrypt", "Styled Components", "Stripe", "mui"], github: [{ linkFor: "Front-end", link: "https://github.com/LaylaSouthcombe/fashion-site-frontend"}], deploy: "https://main--rune-store.netlify.app/", img: rune},
        { id: 2, appType: "Habit Tracker", projectName: "Indee", summary: "This app aims to help people live more independently through tracking habits which can be viewed by a carer/guardian also", technologies: ["HTML", "CSS", "JavaScript", "Node.js", "Express", "PostgreSQL", "Heroku", "Bcrypt", "Chart.js", "Docker"], github: [{ linkFor: "Back-end", link: "https://github.com/LaylaSouthcombe/Indee_backend"}, { linkFor: "Front-end", link: "https://github.com/LaylaSouthcombe/Indee_frontend"}], deploy: "https://indee.netlify.app/", img: indee},
        { id: 3, appType: "Meal Planner Site", projectName: "Sooki", summary: "A site to generate a random meal plan that takes in your dietary requirements and budget, and can generate a shopping list for you (mobile first)", technologies: ["HTML", "CSS",  "React", "Redux", "axios", "JavaScript", "Jest", "Python", "PyMongo", "Django", "pytest", "PostgreSQL", "Bcrypt"], github: [{ linkFor: "Back-end", link: "https://github.com/LaylaSouthcombe/meal_planner_backend"}, { linkFor: "Front-end", link: "https://github.com/LaylaSouthcombe/meal_planner_frontend"}], deploy: "https://digerati-meal-planner.netlify.app/", img: sooki}
    ]

    return (
        <>
            <div className="sectionDiv" id="projects" ref={innerRef}>
                <motion.div
                initial="hidden"
                whileInView="visible"
                transition={{ duration: 0.7 }}
                variants={{
                    visible: { x: 0, opacity: 1 },
                    hidden: { x: -200, opacity: 0 }
                }}
                className="projectsTitle">
                    <h2><span className="number">03.</span> Projects I've Built</h2>
                    <div className="lineType1 line"></div>
                </motion.div> 
                <Project position="right" content={projects[0]}/> 
                <Project position="left" content={projects[1]}/> 
                <Project position="right" content={projects[2]}/> 
            </div>   
        </>
    )
}

export default Projects